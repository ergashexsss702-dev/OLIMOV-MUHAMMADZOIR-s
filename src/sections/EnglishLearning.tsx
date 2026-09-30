import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  BookOpen,
  Languages,
  PenTool,
  Volume2,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const EnglishLearning: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { title: t.english.pillars.cambridge, icon: BookOpen, desc: 'Grammar & structured tasks' },
    { title: t.english.pillars.vocab, icon: FileText, desc: 'Technical & everyday words' },
    { title: t.english.pillars.grammar, icon: PenTool, desc: 'Clear sentence architecture' },
    { title: t.english.pillars.speaking, icon: Volume2, desc: 'Classroom discussions & expression' },
    { title: t.english.pillars.reading, icon: FileText, desc: 'Developer docs & guides' },
    { title: t.english.pillars.writing, icon: Sparkles, desc: 'Clean commit notes & comments' },
  ];

  return (
    <section className="py-20 relative border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (Col 6) */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-2">
                <Languages className="w-4 h-4" />
                <span>{t.english.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                {t.english.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {t.english.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                    Continuous Language Habit
                  </span>
                  <span>{t.english.whyMatters}</span>
                </div>
              </div>
            </div>

            {/* Right Skills Grid (Col 6) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
