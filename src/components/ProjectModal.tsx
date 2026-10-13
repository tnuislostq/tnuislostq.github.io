import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[var(--surface)] rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-[var(--border)] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--border)]">
                {project.category.toUpperCase()}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-[var(--accent)] font-bold">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] inline-block animate-pulse" />
                Live Deployment
              </span>
            </div>
            <h3 className="text-2xl font-bold font-outfit text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[var(--text-secondary)]">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[var(--text-secondary)]">
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-md bg-[var(--surface-sunken)]">
              <img
                src={project.image}
                alt={`${project.title} live screenshot`}
                className="w-full max-h-64 object-cover object-top"
              />
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 font-semibold">
              Project Overview
            </h4>
            <p className="leading-relaxed text-[var(--text-primary)]">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {project.metrics && (
            <div className="p-3.5 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-cyan-500 shrink-0" />
              <div>
                <span className="text-xs font-mono text-gray-400 block">Performance & Metrics</span>
                <span className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                  {project.metrics}
                </span>
              </div>
            </div>
          )}

          {project.architecture && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 font-semibold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-500" /> System Architecture
              </h4>
              <ul className="space-y-1.5 pl-2">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.highlights && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 font-semibold">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-850 border border-gray-100 dark:border-gray-800 text-xs flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 font-semibold">
              Technologies & Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-6 pt-3 bg-[var(--surface-elevated)] border-t border-[var(--border)] flex items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--surface-sunken)] text-xs font-mono transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-mono font-bold transition-all shadow-md hover:scale-[1.02]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Launch Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};
