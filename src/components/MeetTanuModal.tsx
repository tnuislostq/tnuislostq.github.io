import React, { useState } from 'react';
import { X, Sparkles, Code2, Cloud, Terminal, Heart, MapPin, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface MeetTanuModalProps {
  isOpen: boolean;
  onClose: () => void;
  openResume: () => void;
}

export const MeetTanuModal: React.FC<MeetTanuModalProps> = ({ isOpen, onClose, openResume }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'philosophy' | 'stack' | 'beyond'>('story');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[var(--surface-elevated)] text-[var(--text-primary)] rounded-2xl shadow-2xl border border-[var(--border-strong)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with portrait and cat badge */}
        <div className="p-5 sm:p-6 pb-4 border-b border-[var(--border)] flex items-start justify-between bg-[var(--surface)]">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[var(--border-strong)] shadow-md shrink-0">
              <img
                src="/polished-professional-studio-portrait.png?v=2"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/tanu-portrait.jpg') target.src = '/tanu-portrait.jpg';
                }}
                alt="Tanu Vishwakarma"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--surface)]" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] font-bold tracking-wider">
                  ABOUT TANU
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[var(--text-primary)]">
                Tanu Vishwakarma
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-mono">
                Junior Full-Stack Developer · 10+ Live Deployed Systems
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-5 pt-3 bg-[var(--surface)] border-b border-[var(--border)] overflow-x-auto text-xs font-mono select-none">
          <button
            onClick={() => setActiveTab('story')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'story'
                ? 'border-[var(--accent)] text-[var(--accent)] font-bold'
                : 'border-transparent text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
            }`}
          >
            🌱 The Story
          </button>
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'philosophy'
                ? 'border-[var(--accent)] text-[var(--accent)] font-bold'
                : 'border-transparent text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
            }`}
          >
            ⚙️ Engineering Principles
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'stack'
                ? 'border-[var(--accent)] text-[var(--accent)] font-bold'
                : 'border-transparent text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
            }`}
          >
            💻 Everyday Stack
          </button>
          <button
            onClick={() => setActiveTab('beyond')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'beyond'
                ? 'border-[var(--accent)] text-[var(--accent)] font-bold'
                : 'border-transparent text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
            }`}
          >
            🐾 Beyond The Editor
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm leading-relaxed text-[var(--text-secondary)] font-sans">
          {activeTab === 'story' && (
            <div className="space-y-3 animate-fadeIn">
              <p className="text-[var(--text-primary)] font-medium text-base">
                "I believe code only truly matters once it leaves localhost and survives in the wild."
              </p>
              <p>
                I began programming with an intense curiosity for how data flows across the wire. Instead of building endless tutorial clones that only live inside private repositories, I committed to putting every project on a real, working URL.
              </p>
              <p>
                Through intensive bootcamp training at GeeksforGeeks and self-directed engineering, I honed full-stack execution across React frontends and Python microservices (FastAPI, Django, Flask). Today, I maintain 10+ live deployed applications handling everything from security auditing (SitePulse) to bi-directional WebSockets (TUKO) and algorithmic debt simplification (Expense Splitter).
              </p>
            </div>
          )}

          {activeTab === 'philosophy' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-1.5">
                <strong className="text-[var(--accent)] font-mono text-xs block">
                  1. PRODUCTION OVER LOCALHOST
                </strong>
                <p className="text-xs text-[var(--text-secondary)]">
                  Setting up CI/CD, configuring SSL certificates, managing CORS, and wiring persistent database schemas in PostgreSQL is where true engineering begins.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-1.5">
                <strong className="text-[var(--accent)] font-mono text-xs block">
                  2. SUB-50MS ASYNCHRONOUS FEEDBACK
                </strong>
                <p className="text-xs text-[var(--text-secondary)]">
                  Users should never wonder if an action succeeded. Real-time WebSocket broadcasts and optimistic client state provide instant tactile feedback.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-1.5">
                <strong className="text-[var(--accent)] font-mono text-xs block">
                  3. DEFENSE IN DEPTH (SSRF & SANITIZATION)
                </strong>
                <p className="text-xs text-[var(--text-secondary)]">
                  APIs that fetch external URLs must defend against Server-Side Request Forgery and private IP leaking, as implemented in SitePulse.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="space-y-3 animate-fadeIn text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <span className="font-mono text-[var(--accent)] font-bold block mb-1">
                    FRONTEND
                  </span>
                  <p className="text-[var(--text-secondary)]">
                    React 18/19, Next.js, Tailwind CSS, TypeScript, HTML5 Canvas, WebSocket client.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <span className="font-mono text-[var(--accent)] font-bold block mb-1">
                    BACKEND & APIS
                  </span>
                  <p className="text-[var(--text-secondary)]">
                    FastAPI, Django & ORM, Flask, Python 3.12, Starlette WebSockets, RESTful endpoints.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <span className="font-mono text-[var(--accent)] font-bold block mb-1">
                    DATA & STORAGE
                  </span>
                  <p className="text-[var(--text-secondary)]">
                    PostgreSQL, SQLite, LocalStorage persistence, Redis caching structures.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <span className="font-mono text-[var(--accent)] font-bold block mb-1">
                    CLOUD & DEPLOYMENT
                  </span>
                  <p className="text-[var(--text-secondary)]">
                    Render Cloud, Netlify CDN, AWS Cloud Practitioner (EC2, S3, IAM), GitHub Actions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'beyond' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <img
                  src="/chi-the-cat.webp"
                  alt="Chi the Cat"
                  className="w-12 h-12 rounded-full border border-[var(--border)] shrink-0"
                />
                <div>
                  <strong className="text-[var(--text-primary)] text-xs font-mono block">
                    Chi The Companion Cat
                  </strong>
                  <p className="text-xs text-[var(--text-secondary)]">
                    A quiet, focused presence beside the monitor during late-night debugging and deployment sprints.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)]">
                Outside the IDE, I practice algorithmic problem solving, explore open-source tools, study distributed systems, and stay mindful about building software that genuinely improves human workflows.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[var(--surface)] border-t border-[var(--border)] flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              openResume();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Open Résumé</span>
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-bold font-mono transition-transform hover:scale-105"
          >
            <span>Let's Talk →</span>
          </a>
        </div>
      </div>
    </div>
  );
};
