import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { techStackData } from '../data/skills';
import {
  Code,
  Paintbrush,
  FileCode2,
  Atom,
  ShieldCheck,
  Layers,
  Zap,
  GitBranch,
  Cloud,
  Bot,
  Terminal,
  Puzzle,
  Cpu,
  Sliders,
  Smartphone
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Paintbrush,
  FileCode2,
  Atom,
  ShieldCheck,
  Layers,
  Zap,
  GitBranch,
  Cloud,
  Bot,
  Terminal,
  Puzzle,
  Cpu,
  Sliders,
  Smartphone
};

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/30 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            {t.techStack.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.techStack.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-lg">
            {t.techStack.subtitle}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {techStackData.map((tech, idx) => {
            const Icon = iconMap[tech.icon] || Code;
            return (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-150 flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {tech.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate">
                    {tech.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
