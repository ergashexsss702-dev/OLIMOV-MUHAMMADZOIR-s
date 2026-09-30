import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectModal } from '../components/ProjectModal';
import { siteConfig } from '../config/site';
import {
  ExternalLink,
  Github,
  Maximize2,
  FolderGit2,
  Sparkles,
  Wallet,
  Car,
  Code,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Wallet,
  Car,
  Code,
  Sparkles,
  BookOpen,
  GraduationCap
};

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'web', label: t.projects.filters.web },
    { key: 'ai', label: t.projects.filters.ai },
    { key: 'education', label: t.projects.filters.education },
    { key: 'creative', label: t.projects.filters.creative },
    { key: 'apps', label: t.projects.filters.apps },
    { key: 'experiments', label: t.projects.filters.experiments },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((item) => item.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                activeFilter === filter.key
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = iconMap[project.iconName] || Code;
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header / Banner */}
                <div className={`p-6 bg-gradient-to-br ${project.accentGradient} relative overflow-hidden text-white flex items-center justify-between`}>
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-black/30 backdrop-blur-xs mb-2 inline-block">
                      {project.type[language]}
                    </span>
                    <h3 className="text-lg font-bold drop-shadow-xs">
                      {project.title[language]}
                    </h3>
                  </div>

                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Line */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                      <span className="capitalize">{project.category}</span>
                      <span>·</span>
                      <span>Concept & Learning</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.description[language]}
                    </p>

                    {/* Tech Pills/Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors py-1"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{t.projects.card.viewDetails}</span>
                    </button>

                    <div className="flex items-center gap-1.5">
                      {project.hasInteractiveDemo && (
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 transition-colors"
                        >
                          Interactive Demo
                        </button>
                      )}

                      {project.githubUrl && (
                        <a
                          href={siteConfig.github || project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          aria-label="Inspect GitHub repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-slate-500 font-mono text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
