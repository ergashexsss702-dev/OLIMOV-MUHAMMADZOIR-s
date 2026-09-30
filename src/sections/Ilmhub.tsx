import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/site';
import {
  GraduationCap,
  Languages,
  Binary,
  Layers,
  CheckCircle2,
  ExternalLink,
  Laptop,
  BookCheck,
  Users
} from 'lucide-react';

export const Ilmhub: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.ilmhub.pillars.english.title,
      desc: t.ilmhub.pillars.english.desc,
      icon: Languages,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      title: t.ilmhub.pillars.it.title,
      desc: t.ilmhub.pillars.it.desc,
      icon: Laptop,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      title: t.ilmhub.pillars.programming.title,
      desc: t.ilmhub.pillars.programming.desc,
      icon: Binary,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      title: t.ilmhub.pillars.practice.title,
      desc: t.ilmhub.pillars.practice.desc,
      icon: BookCheck,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  return (
    <section id="ilmhub" className="py-20 relative border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Header & Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>{t.ilmhub.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.ilmhub.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              {t.ilmhub.subtitle}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs">
            <Users className="w-3.5 h-3.5 text-cyan-500" />
            <span>Namangan · O‘quv Muhiti</span>
          </div>
        </div>

        {/* Central Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                &ldquo;Ilmhubda English va IT yo‘nalishlarida bilimlarimni rivojlantiryapman.&rdquo;
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                {t.ilmhub.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  English Intensive
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Algorithmic Thinking
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Frontend Basics
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Practical Homework
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2 mb-3 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>O‘quv tamoyillari</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Ustozlar ko‘magi va maslahatlari</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Tengdoshlar bilan jamoaviy muhit</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Doimiy uy vazifalari tahlili</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Amaliy mini-loyihalar taqdimoti</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Focus Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border mb-3 ${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
