import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device has touch capability or pointer is coarse
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button, a, input, textarea, select, [role="button"], .clickable')
        );
        setIsHovered(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central crisp dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
          width: '6px',
          height: '6px',
          backgroundColor: '#38bdf8',
        }}
      />
      {/* Outer smooth tracking ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border transition-all duration-200 ease-out"
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 20 : 14)}px, ${pos.y - (isHovered ? 20 : 14)}px, 0) scale(${isHovered ? 1.25 : 1})`,
          width: isHovered ? '40px' : '28px',
          height: isHovered ? '40px' : '28px',
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.7)' : 'rgba(56, 189, 248, 0.25)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
        }}
      />
    </>
  );
};
