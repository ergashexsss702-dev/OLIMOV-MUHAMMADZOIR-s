import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/site';
import {
  Compass,
  Code2,
  Sparkles,
  BookOpen,
  MapPin,
  Check,
  TrendingUp,
  Flame,
  Award
} from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const coreCards = [
    {
      title: 'Learning',
      titleUz: 'O‘rganish',
      descUz: 'Har kuni yangi texnologiyalar, ingliz tili grammatikasi va algoritmik mantiq.',
      descRu: 'Ежедневное освоение новых технологий, грамматики английского и алгоритмов.',
      descEn: 'Daily immersion in software logic, modern web tools, and English language.',
      icon: BookOpen,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      title: 'Building',
      titleUz: 'Yaratish',
      descUz: 'Nazariyani mustahkamlash uchun real interfeyslar, o‘yinlar va byudjet ilovalari.',
      descRu: 'Создание реальных интерфейсов, концептов игр и приложений для учета.',
      descEn: 'Engineering practical UI prototypes, expense trackers, and interactive tools.',
      icon: Code2,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      title: 'Exploring',
      titleUz: 'Tadqiq qilish',
      descUz: 'Google AI Studio, Prompt Engineering va sun\'iy intellekt modellarining chegaralari.',
      descRu: 'Исследование возможностей Gemini, системных промптов и креативного AI.',
      enDesc: 'Investigating generative AI workflows, prompt architecture, and design trends.',
      descEn: 'Investigating generative AI workflows, prompt architecture, and design trends.',
      icon: Compass,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Creating',
      titleUz: 'Ijodkorlik',
      descUz: 'Milliy madaniyatni texnologiyaga singdirish (masalan, UZB Parking o‘yin konsepti).',
      descRu: 'Интеграция национального колорита в цифровые концепты и современные игры.',
      descEn: 'Infusing creative concepts with cultural identity and futuristic aesthetics.',
      icon: Sparkles,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    }
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-2">
            <span>{t.about.badge}</span>
            <span>·</span>
            <span>Olimov Muhammadzoir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Narrative & Stats Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Main Story (Col 7) */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-slate-800 dark:text-slate-200">
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
            <p>
              {t.about.p3}
            </p>

            {/* Factual Interest Checklist */}
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-500" />
                <span>{t.about.interestsTitle}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {siteConfig.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-2 rounded-lg bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60"
                  >
                    <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span className="truncate">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Honest Metric Cards (Col 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t.about.stats.learningValue}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {t.about.stats.learningLabel}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t.about.stats.projectsValue}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {t.about.stats.projectsLabel}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t.about.stats.curiosityValue}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {t.about.stats.curiosityLabel}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t.about.stats.locationValue}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {t.about.stats.locationLabel}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Action: Learning / Building / Exploring / Creating */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border mb-3 ${card.color} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.descUz}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
