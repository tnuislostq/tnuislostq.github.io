import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { TopoCirclesBackground } from './TopoCirclesBackground';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[var(--bg-primary)] border-t border-[var(--border)] text-[var(--text-secondary)] text-xs font-mono transition-colors relative overflow-hidden">
      {/* Topo circles contour background in footer (quanghuynh.com signature!) */}
      <TopoCirclesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-outfit font-bold text-[var(--text-primary)] text-sm tracking-tight flex items-center gap-1.5">
              <span>Tanu Vishwakarma</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="hidden sm:inline text-[var(--border-strong)]">•</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
          </div>

          {/* Nav Links (quanghuynh.com style footer navigation) */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <a
              href="#home"
              className="hover:text-[var(--text-primary)] transition-colors hover:underline"
            >
              Top
            </a>
            <a
              href="#work"
              className="hover:text-[var(--text-primary)] transition-colors hover:underline"
            >
              Featured Work
            </a>
            <a
              href="#skills"
              className="hover:text-[var(--text-primary)] transition-colors hover:underline"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="hover:text-[var(--text-primary)] transition-colors hover:underline"
            >
              Experience
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent)] hover:underline font-semibold"
            >
              Résumé (PDF)
            </a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-2xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-2xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-2xs"
              aria-label="Send Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all flex items-center gap-1 shadow-2xs"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[var(--accent)]" />
            </button>
          </div>
        </div>

        {/* Bottom Colophon line */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[var(--text-tertiary)]">
          <span>Designed & built with React · Full-Stack production architecture</span>
          <span className="flex items-center gap-1">
            <span>Chi · Chief Code Companion</span>
            <span className="text-amber-400">🐾</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
