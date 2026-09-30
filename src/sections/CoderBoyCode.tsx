import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal } from '../components/Terminal';
import { siteConfig } from '../config/site';
import { Code2, Terminal as TerminalIcon, Sparkles, Binary, Cpu } from 'lucide-react';

export const CoderBoyCode: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-950 text-white overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold mb-2">
            <Binary className="w-4 h-4" />
            <span>{t.coderBoy.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.coderBoy.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
            {t.terminal.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Animated Loop Code Card + Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            {/* Code Block Card */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>coder_boy_loop.ts</span>
                </span>
                <span className="text-emerald-400">● live</span>
              </div>

              <pre className="font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">coder</span> = &#123;
                  {'\n'}  name:{' '}
                  <span className="text-emerald-300">&quot;{siteConfig.name}&quot;</span>,
                  {'\n'}  role:{' '}
                  <span className="text-emerald-300">&quot;CODER BOY&quot;</span>,
                  {'\n'}  academy:{' '}
                  <span className="text-emerald-300">&quot;Ilmhub&quot;</span>,
                  {'\n'}&#125;;
                  {'\n\n'}
                  <span className="text-blue-400">// The continuous evolution loop</span>
                  {'\n'}
                  <span className="text-purple-400">while</span> (
                  <span className="text-amber-300">coder</span>.
                  <span className="text-cyan-300">isLearning</span>) &#123;
                  {'\n'}  <span className="text-cyan-400">build</span>();
                  {'\n'}  <span className="text-indigo-400">create</span>();
                  {'\n'}  <span className="text-pink-400">explore</span>();
                  {'\n'}  <span className="text-emerald-400">improve</span>();
                  {'\n'}&#125;
                </code>
              </pre>
            </div>

            {/* Mindset Card */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/40 border border-slate-800 p-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{t.coderBoy.philosophyTitle}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                &ldquo;{t.coderBoy.philosophyText}&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>— Olimov Muhammadzoir</span>
                <span className="text-cyan-400">Namangan, UZ</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Interactive Terminal (Col 7) */}
          <div className="lg:col-span-7">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};
