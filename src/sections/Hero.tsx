import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/site';
import { useTypingEffect } from '../hooks/useTypingEffect';
import {
  ArrowRight,
  Download,
  Github,
  Send,
  Instagram,
  Mail,
  Code2,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  X
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const typedRole = useTypingEffect(siteConfig.titles, 80, 40, 1600);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-t from-cyan-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-950/60 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-3">
              {t.hero.greeting}{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>

            {/* Rotating Typewriter Role */}
            <div className="h-10 sm:h-12 flex items-center mb-5 font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100">
              <span className="text-cyan-600 dark:text-cyan-400 mr-2">&gt;</span>
              <span className="text-slate-900 dark:text-white">{typedRole}</span>
              <span className="w-2.5 h-6 sm:h-7 bg-cyan-500 ml-1 inline-block animate-pulse" />
            </div>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium text-sm shadow-md hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 font-medium text-sm transition-all duration-150"
              >
                <Send className="w-4 h-4 text-cyan-500" />
                <span>{t.hero.contactMe}</span>
              </a>

              <button
                type="button"
                onClick={() => setCvModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t.hero.downloadCV}</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-1">
                Connect:
              </span>
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:border-cyan-500 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {siteConfig.telegram && (
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 hover:border-blue-500 transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              )}
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 hover:text-pink-500 dark:text-slate-400 dark:hover:text-pink-400 hover:border-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Avatar Area with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Outer Decorative Gradient Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/25 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-slate-300 dark:border-slate-800/80" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-xl" />

              {/* Main Avatar Card Frame */}
              <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center relative group">
                  {!imageError ? (
                    <img
                      src={siteConfig.avatarUrl}
                      alt={siteConfig.fullName}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* High-tech initials fallback if custom image is missing */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-radial from-slate-800 to-slate-950 text-white p-4">
                      <div className="font-mono text-5xl font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        {siteConfig.shortName}
                      </div>
                      <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase mt-1">
                        Coder Boy
                      </span>
                    </div>
                  )}

                  {/* Inner status glow badge */}
                  <div className="absolute bottom-3 bg-slate-950/90 border border-slate-700/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-slate-200 uppercase tracking-wider font-semibold">
                      Namangan · Ilmhub
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Frontend (Top Left) */}
              <div className="absolute -top-2 left-0 sm:left-4 z-20 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <div className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  {t.hero.floating.frontend}
                </span>
              </div>

              {/* Floating Card 2: AI Tools (Top Right) */}
              <div className="absolute top-6 -right-2 sm:right-2 z-20 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  {t.hero.floating.ai}
                </span>
              </div>

              {/* Floating Card 3: Web Dev (Bottom Left) */}
              <div className="absolute bottom-4 left-0 sm:left-2 z-20 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  {t.hero.floating.web}
                </span>
              </div>

              {/* Floating Card 4: Creative Code (Bottom Right) */}
              <div className="absolute -bottom-2 right-2 sm:right-4 z-20 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <div className="w-6 h-6 rounded-md bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  {t.hero.floating.creative}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Download / Info Modal */}
      {cvModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setCvModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setCvModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
              <Download className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {t.hero.cvModalTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {t.hero.cvModalText}
            </p>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Target path: /public/cv.pdf</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setCvModalOpen(false)}
                className="px-4 py-2 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {t.hero.cvModalClose}
              </button>
              <a
                href={siteConfig.resumeUrl}
                download="Olimov_Muhammadzoir_CV.pdf"
                onClick={() => setCvModalOpen(false)}
                className="px-4 py-2 text-xs font-medium rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition-colors"
              >
                {t.hero.downloadCV}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
