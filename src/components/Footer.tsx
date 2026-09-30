import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/site';
import {
  ArrowUp,
  Github,
  Send,
  Instagram,
  Mail,
  Heart,
  Terminal,
  Code2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.journey, href: '#journey' },
    { label: t.nav.education, href: '#ilmhub' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="py-12 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                {siteConfig.shortName}
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                {siteConfig.name}
              </span>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10">
                {siteConfig.brandTag}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              &ldquo;{t.footer.motto}&rdquo; · {siteConfig.city}, {siteConfig.country}
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2">
            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {siteConfig.telegram && (
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-500 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            )}
            {siteConfig.instagram && (
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            )}
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-cyan-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-cyan-500 transition-colors"
              title={t.footer.backToTop}
              aria-label={t.footer.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-500 font-mono gap-2">
          <div>
            © 2026 {siteConfig.fullName}. {t.footer.rights}
          </div>
          <div>
            {t.footer.craftedWith} · {siteConfig.learningCenter}
          </div>
        </div>
      </div>
    </footer>
  );
};
