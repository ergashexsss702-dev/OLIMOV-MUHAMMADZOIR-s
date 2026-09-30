import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import {
  Globe,
  Sparkles,
  Terminal,
  Compass,
  GraduationCap,
  LayoutGrid,
  Layers,
  Cpu,
  Layers3
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Sparkles,
  Terminal,
  Compass,
  GraduationCap,
  LayoutGrid,
  Layers,
  Cpu
};

export const WhatICreate: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="what-i-create" className="py-20 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-2">
              <Layers3 className="w-4 h-4" />
              <span>{t.whatICreate.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.whatICreate.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              {t.whatICreate.subtitle}
            </p>
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Globe;

            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {service.tag[language]}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title[language]}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description[language]}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                  <span>Coder Scope →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
