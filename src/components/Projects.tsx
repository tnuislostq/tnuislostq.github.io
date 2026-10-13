import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectScreenshot } from './ProjectScreenshot';
import {
  ExternalLink,
  Github,
  ArrowDown,
  Sparkles,
  Info,
  ArrowUpRight,
  Code2,
  FolderGit2,
  ChevronLeft,
  ChevronRight,
  Eye,
  LayoutGrid
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');

  // Top 5 Featured Projects with rich screenshots & interactive viewports
  const featuredProjects = PROJECTS.slice(0, 5);

  // More Projects (Archive & lab builds without heavy screenshots, focused on repository & concise info)
  const moreProjects = PROJECTS.slice(5);

  const currentProject = featuredProjects[activeFeaturedIndex] || featuredProjects[0];

  const handleNextProject = () => {
    setActiveFeaturedIndex((prev) => (prev < featuredProjects.length - 1 ? prev + 1 : 0));
  };

  const handlePrevProject = () => {
    setActiveFeaturedIndex((prev) => (prev > 0 ? prev - 1 : featuredProjects.length - 1));
  };

  return (
    <section id="work" className="py-24 relative bg-[var(--surface-sunken)]/40 border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & View Controls (quanghuynh.com editorial styling) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-3xl space-y-2">
            <p className="eyebrow">Selected work</p>
            <h2 className="text-3xl sm:text-5xl font-bold font-outfit tracking-tight text-[var(--text-primary)]">
              Featured <span className="text-[var(--accent)]">projects</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
              My top five full-stack and web engineering projects — deployed on live production URLs with real database schemas, API integrations, and verified repositories.
            </p>
          </div>

          {/* View Mode Toggle (Single Focus View vs View All 5) */}
          <div className="flex items-center gap-2 self-start lg:self-auto shrink-0 bg-[var(--surface)] p-1 rounded-xl border border-[var(--border)] text-xs font-mono">
            <button
              onClick={() => setViewMode('single')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-all ${
                viewMode === 'single'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-2xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Focus (1 by 1)</span>
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-all ${
                viewMode === 'all'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-2xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>View All 5</span>
            </button>
          </div>
        </div>

        {/* Top Navigation Tabs for 5 Featured Projects */}
        <div className="mb-8 p-1.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto p-0.5">
            {featuredProjects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveFeaturedIndex(idx);
                  if (viewMode === 'all') {
                    const el = document.getElementById(`project-${proj.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
                  activeFeaturedIndex === idx
                    ? 'bg-[var(--surface-elevated)] text-[var(--accent)] border border-[var(--accent)] shadow-2xs font-bold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] border border-transparent'
                }`}
              >
                <span className="opacity-60 text-[10px]">0{idx + 1}.</span>
                <span>{proj.title}</span>
              </button>
            ))}
          </div>

          {/* Quick Prev / Next Navigator in Focus Mode */}
          {viewMode === 'single' && (
            <div className="flex items-center gap-1.5 px-2">
              <span className="text-[11px] text-[var(--text-tertiary)] font-mono mr-1">
                {activeFeaturedIndex + 1} / {featuredProjects.length}
              </span>
              <button
                onClick={handlePrevProject}
                aria-label="Previous project"
                className="p-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] transition-colors"
                title="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextProject}
                aria-label="Next project"
                className="p-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] transition-colors"
                title="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Featured Case-Files Stage */}
        {viewMode === 'single' ? (
          /* Single Project Focus: Only current project is mounted and rendered — absolutely zero peeking of other projects */
          <div className="relative w-full overflow-hidden">
            <article
              key={currentProject.id}
              id={`project-${currentProject.id}`}
              className="case-file p-6 sm:p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left shadow-md transition-all duration-300"
            >
              {/* Left Column: Metadata Rail & Narrative */}
              <div className="lg:col-span-5 space-y-5">
                {/* Index & Type */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-xl font-bold text-[var(--accent)]">
                    {String(activeFeaturedIndex + 1).padStart(2, '0')}.
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[10px] text-[var(--text-secondary)] uppercase">
                      {currentProject.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-[var(--accent)] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                      LIVE URL
                    </span>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-[var(--text-primary)] mb-1">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent)]">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                  {currentProject.description}
                </p>

                {/* System Metrics / Highlights */}
                {currentProject.metrics && (
                  <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                    <span>{currentProject.metrics}</span>
                  </div>
                )}

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(currentProject)}
                    className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Case Details</span>
                  </button>
                </div>

                {/* Next Project Footer Bar inside card */}
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={handlePrevProject}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] flex items-center gap-1 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                  <span className="text-[var(--text-tertiary)] text-[11px]">
                    Project {activeFeaturedIndex + 1} of 5
                  </span>
                  <button
                    onClick={handleNextProject}
                    className="text-[var(--accent)] hover:underline flex items-center gap-1 font-semibold transition-colors"
                  >
                    <span>Next Project</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Real Interactive Screenshot / Preview Viewport */}
              <div className="lg:col-span-7">
                <ProjectScreenshot
                  project={currentProject}
                  onOpenDetails={() => setSelectedProject(currentProject)}
                />
              </div>
            </article>
          </div>
        ) : (
          /* View All 5 Mode: Clean vertical cascade with generous spacing */
          <div className="space-y-20">
            {featuredProjects.map((project, idx) => (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className={`case-file p-6 sm:p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left shadow-sm ${
                  idx % 2 === 1 ? 'lg:[&>.order-visual]:order-1 lg:[&>.order-narrative]:order-2' : ''
                }`}
              >
                {/* Narrative Column */}
                <div className="order-narrative lg:col-span-5 space-y-5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-xl font-bold text-[var(--accent)]">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[10px] text-[var(--text-secondary)] uppercase">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-[var(--accent)] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                        LIVE URL
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-[var(--text-primary)] mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[var(--accent)]">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Case Details</span>
                    </button>
                  </div>
                </div>

                {/* Screenshot Visual Column */}
                <div className="order-visual lg:col-span-7">
                  <ProjectScreenshot
                    project={project}
                    onOpenDetails={() => setSelectedProject(project)}
                  />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* More Projects Section (quanghuynh.com style: repository & concise info, no heavy screenshots) */}
        <div className="mt-24 pt-16 border-t border-[var(--border)] text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <p className="eyebrow">Archive & Additional builds</p>
              <h3 className="text-2xl sm:text-4xl font-bold font-outfit text-[var(--text-primary)]">
                More <span className="text-[var(--accent)]">projects</span>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl font-sans">
                Additional engineering projects spanning real-time WebSockets, algorithmic debt solvers, AI conversational agents, and clean web architecture.
              </p>
            </div>

            <a
              href="https://github.com/tnuislostq?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary self-start sm:self-auto shrink-0"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>All GitHub Repositories</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-tertiary)]" />
            </a>
          </div>

          {/* Clean Ledger Grid for More Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {moreProjects.map((project, idx) => (
              <article
                key={project.id}
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs hover:border-[var(--border-strong)] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Top Bar with Number & Category */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[var(--accent)] text-sm">
                      {String(featuredProjects.length + idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[10px] text-[var(--text-secondary)] uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h4 className="text-xl font-bold font-outfit text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-[var(--accent)] mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Concise Project Info */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Repository & Live Links (quanghuynh.com style) */}
                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-3 text-xs font-mono">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--surface-elevated)] hover:bg-[var(--surface-sunken)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                    <ArrowUpRight className="w-3 h-3 text-[var(--text-tertiary)]" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline font-bold"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
