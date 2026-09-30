import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/site';
import { Language } from '../i18n';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
  time: string;
}

export const Terminal: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'whoami',
      response: `${siteConfig.fullName} — ${siteConfig.role} (${siteConfig.city}, ${siteConfig.country})`,
      time: '10:00:00'
    },
    {
      command: 'status',
      response: '🟢 Currently learning React 19, Prompt Engineering at Ilmhub, and building creative web prototypes.',
      time: '10:00:05'
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getTimestamp = () => {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  };

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const time = getTimestamp();
    let response: string | React.ReactNode = '';

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (trimmed === 'whoami') {
      response = (
        <div className="space-y-1">
          <p className="text-cyan-400 font-bold">{siteConfig.fullName} (Coder Boy)</p>
          <p className="text-slate-300">Location: {siteConfig.city}, {siteConfig.country}</p>
          <p className="text-slate-300">Academy: {siteConfig.learningCenter}</p>
          <p className="text-slate-400 text-xs">Motto: &quot;Learning. Building. Creating.&quot;</p>
        </div>
      );
    } else if (trimmed === 'skills') {
      response = (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-300 font-semibold">[Web]: HTML5, CSS3, JavaScript, React, TypeScript, Vite</p>
          <p className="text-amber-300 font-semibold">[AI & Prompting]: Google AI Studio, Gemini, Prompt Architecture</p>
          <p className="text-purple-300 font-semibold">[Hardware & Blocks]: Scratch, Arduino IDE, mBlock, MIT App Inventor</p>
          <p className="text-emerald-300 font-semibold">[Tools]: Git, GitHub, Vercel, Terminal / Bash</p>
        </div>
      );
    } else if (trimmed === 'projects') {
      response = (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-300">1. Family Budget App — Multilingual household expense tracker</p>
          <p className="text-cyan-300">2. UZB Parking Game — Uzbekistan street parking game HUD concept</p>
          <p className="text-cyan-300">3. Coder Boy Portfolio — This official developer portfolio</p>
          <p className="text-cyan-300">4. AI Prompt Projects — Curated Google Flow & AI Studio prompts</p>
          <p className="text-cyan-300">5. English Learning Tools — Interactive vocabulary flashcards & quiz</p>
        </div>
      );
    } else if (trimmed === 'contact') {
      response = (
        <div className="space-y-1 text-xs text-slate-300">
          <p>Email: <span className="text-cyan-400">{siteConfig.email}</span></p>
          <p>Telegram: <span className="text-blue-400">{siteConfig.telegram}</span></p>
          <p>Instagram: <span className="text-pink-400">{siteConfig.instagram}</span></p>
          <p>GitHub: <span className="text-slate-200">{siteConfig.github}</span></p>
        </div>
      );
    } else if (trimmed === 'status') {
      response = '🚀 Active status: Studying at Ilmhub · Practicing daily web code & prompt systems.';
    } else if (trimmed === 'about') {
      response = t.about.p1;
    } else if (trimmed === 'theme') {
      toggleTheme();
      response = `🌓 Theme toggled to ${theme === 'dark' ? 'light' : 'dark'} mode!`;
    } else if (trimmed.startsWith('lang')) {
      const parts = trimmed.split(' ');
      const targetLang = parts[1] as Language;
      if (targetLang === 'uz' || targetLang === 'ru' || targetLang === 'en') {
        setLanguage(targetLang);
        response = `🌐 Language changed to ${targetLang.toUpperCase()}!`;
      } else {
        response = 'Usage: lang <uz | ru | en>';
      }
    } else if (trimmed === 'help') {
      response = (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs font-mono">
          <span className="text-cyan-400">whoami</span>
          <span className="text-slate-400">- Identity & profile</span>
          <span className="text-cyan-400">skills</span>
          <span className="text-slate-400">- List of technologies</span>
          <span className="text-cyan-400">projects</span>
          <span className="text-slate-400">- Featured projects</span>
          <span className="text-cyan-400">status</span>
          <span className="text-slate-400">- Current learning state</span>
          <span className="text-cyan-400">contact</span>
          <span className="text-slate-400">- Get contact details</span>
          <span className="text-cyan-400">theme</span>
          <span className="text-slate-400">- Toggle Dark/Light</span>
          <span className="text-cyan-400">lang &lt;code&gt;</span>
          <span className="text-slate-400">- Switch lang (uz, ru, en)</span>
          <span className="text-cyan-400">clear</span>
          <span className="text-slate-400">- Clear screen</span>
        </div>
      );
    } else {
      response = `Command not recognized: "${trimmed}". Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmdText, response, time }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickButtons = ['whoami', 'skills', 'projects', 'status', 'contact', 'help', 'clear'];

  return (
    <div
      id="terminal"
      className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden text-slate-200 font-mono text-xs sm:text-sm"
    >
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-semibold tracking-wide">
            muhammadzoir@coder-boy: ~
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">bash (interactive)</span>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-6 min-h-[220px] max-h-[340px] overflow-y-auto space-y-3">
        <div className="text-slate-500 text-xs pb-2 border-b border-slate-800/60">
          Muhammadzoir Coder Terminal [Version 2026.1] — Type &apos;help&apos; to view all commands.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-slate-500 text-[10px]">[{item.time}]</span>
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-white font-semibold">{item.command}</span>
            </div>
            <div className="pl-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
              {item.response}
            </div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Command Input Prompt */}
      <form
        onSubmit={handleSubmit}
        className="p-3 sm:p-4 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2"
      >
        <span className="text-emerald-400 font-bold">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.terminal.placeholder}
          className="flex-1 bg-transparent border-none text-white text-xs sm:text-sm focus:outline-none placeholder-slate-500 font-mono"
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono font-medium flex items-center gap-1 transition-colors"
        >
          <span>Run</span>
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </form>

      {/* Quick Command Chips */}
      <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-900 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider mr-1">
          {t.terminal.quickCommands}:
        </span>
        {quickButtons.map((btn) => (
          <button
            key={btn}
            type="button"
            onClick={() => handleCommand(btn)}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 transition-colors"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};
