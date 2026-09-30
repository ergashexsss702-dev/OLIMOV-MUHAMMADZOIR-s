import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData, SkillCategory, SkillLevel } from '../data/skills';
import {
  Code,
  Layout,
  Atom,
  ShieldCheck,
  Puzzle,
  Cpu,
  Smartphone,
  MonitorSmartphone,
  Palette,
  Sparkle,
  Terminal,
  Bot,
  Workflow,
  GraduationCap,
  BookOpen,
  MessageSquare,
  GitBranch,
  TerminalSquare,
  Laptop,
  CheckCircle2,
  FileCode2,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  FileCode2,
  Atom,
  ShieldCheck,
  Puzzle,
  Cpu,
  Smartphone,
  MonitorSmartphone,
  Palette,
  Sparkle,
  Terminal,
  Bot,
  Workflow,
  GraduationCap,
  BookOpen,
  MessageSquare,
  GitBranch,
  TerminalSquare,
  Laptop,
  Layers,
  Code
};

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');

  const categories: { key: SkillCategory | 'all'; label: string }[] = [
    { key: 'all', label: t.skills.categories.all },
    { key: 'programming', label: t.skills.categories.programming },
    { key: 'creative', label: t.skills.categories.creative },
    { key: 'ai', label: t.skills.categories.ai },
    { key: 'english', label: t.skills.categories.english },
    { key: 'computer', label: t.skills.categories.computer },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case 'learning':
        return {
          label: t.skills.levels.learning,
          classes: 'text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-800'
        };
      case 'familiar':
        return {
          label: t.skills.levels.familiar,
          classes: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800'
        };
      case 'exploring':
        return {
          label: t.skills.levels.exploring,
          classes: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800'
        };
      default:
        return { label: '', classes: '' };
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-2">
              <span>{t.skills.badge}</span>
              <span>·</span>
              <span>Practical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.skills.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded border text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800">
              ● {t.skills.levels.familiar}
            </span>
            <span className="px-2 py-0.5 rounded border text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-300 dark:border-cyan-800">
              ● {t.skills.levels.learning}
            </span>
            <span className="px-2 py-0.5 rounded border text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800">
              ● {t.skills.levels.exploring}
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                activeCategory === cat.key
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.icon] || Code;
            const badge = getLevelBadge(skill.level);

            return (
              <div
                key={skill.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border ${badge.classes}`}>
                      {badge.label}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {skill.description[language]}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-cyan-500/80">Active Practice</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
