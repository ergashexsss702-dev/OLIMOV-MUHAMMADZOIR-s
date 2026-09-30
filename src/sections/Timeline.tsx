import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { timelineData } from '../data/timeline';
import {
  Compass,
  GraduationCap,
  Bot,
  Code,
  Sparkles,
  CheckCircle2,
  Calendar
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  GraduationCap,
  Bot,
  Code,
  Compass
};

export const Timeline: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="journey" className="py-20 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-2">
            <Calendar className="w-4 h-4" />
            <span>{t.journey.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.journey.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-lg">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {timelineData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Compass;
            const isLast = idx === timelineData.length - 1;

            return (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                {/* Milestone Node on Axis */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-500 text-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Left Year Label (Desktop) */}
                <div className="hidden sm:block absolute -left-36 top-2 text-right w-24">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                    {item.year}
                  </span>
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-xs transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="sm:hidden font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {item.badge[language]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                    {item.subtitle[language]}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description[language]}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {item.highlights[language].map((hl, hlIdx) => (
                      <span
                        key={hlIdx}
                        className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{hl}</span>
                      </span>
                    ))}
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
