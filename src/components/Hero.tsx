import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TopoCirclesBackground } from './TopoCirclesBackground';
import { Ridgeline } from './Ridgeline';
import {
  ArrowRight,
  FileText,
  Terminal,
  Download,
} from 'lucide-react';

interface HeroProps {
  openTerminal: () => void;
  openResume: () => void;
  openMeetTanu?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ openTerminal, openResume, openMeetTanu }) => {
  const [isWaving, setIsWaving] = useState(false);

  const handleWave = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 2000);
  };

  return (
    <section id="home" className="hero relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Topographic circle and dot matrix background */}
      <TopoCirclesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-8 space-y-6 text-left">

            {/* Eyebrow tag matching quanghuynh.com */}
            <p className="eyebrow text-xs font-mono text-[var(--accent)] tracking-wider uppercase font-semibold">
              Full-Stack Engineering · Python Backends · React & Next.js · Cloud Architecture
            </p>

            {/* Display Headline with Waving Hand (quanghuynh.com signature!) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-mono font-semibold text-[var(--text-secondary)]">
                <span>Hi, I’m Tanu.</span>
                <button
                  type="button"
                  onClick={handleWave}
                  className={`inline-block cursor-pointer select-none text-2xl transition-transform hover:scale-125 ${
                    isWaving ? 'animate-bounce' : ''
                  }`}
                  title="Click to wave hello"
                  aria-label="Wave hello"
                >
                  👋🏻
                </button>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-outfit tracking-tight text-[var(--text-primary)] leading-[1.15]">
                I build resilient backend systems, real-time engines, and scalable web applications.
              </h1>
            </div>

            {/* Pitch Copy */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl font-sans">
              I’m a full-stack developer. I pair <span className="text-[var(--text-primary)] font-semibold">Next.js and React front ends</span> with{' '}
              <span className="text-[var(--text-primary)] font-semibold">robust Python back ends</span> (FastAPI, Django, Flask) and deploy them to real production URLs — not just git repositories. Ten+ self-driven live projects operating from database schema to cloud deploy, with AWS Cloud Practitioner certification.
            </p>

            {/* Hero Actions (exact stylish quanghuynh.com buttons) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 hero-actions">
              <a
                href="#work"
                className="button personality-button"
                data-personality="rally"
              >
                <span className="personality-button__label">
                  <span>View my work</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              <button
                type="button"
                onClick={openResume}
                className="button button-secondary personality-button"
              >
                <span className="personality-button__label">
                  <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>View résumé</span>
                </span>
              </button>

              <button
                type="button"
                onClick={openTerminal}
                className="button button-secondary personality-button"
                title="Launch Developer CLI"
              >
                <span className="personality-button__label">
                  <Terminal className="w-3.5 h-3.5 text-[var(--signal)]" />
                  <span>CLI</span>
                </span>
              </button>
            </div>

            {/* Meet Tanu Card Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openMeetTanu}
                className="meet-tanu-card group"
                title="Meet Tanu Vishwakarma — Full-Stack Developer"
              >
                <img
                  src="/polished-professional-studio-portrait.png?v=2"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/tanu-portrait.jpg') target.src = '/tanu-portrait.jpg';
                  }}
                  alt="Tanu Vishwakarma"
                  className="meet-tanu-card__photo"
                />
                <div className="meet-tanu-card__copy">
                  <strong>Meet Tanu</strong>
                  <span>Full-Stack Developer</span>
                </div>
                <ArrowRight className="meet-tanu-card__arrow w-4 h-4" />
              </button>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[var(--border)]">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[var(--text-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-[var(--text-tertiary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tanu's Studio Portrait in Clean Executive Presentation */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
            <div className="relative flex flex-col items-center">
              {/* Professional Studio Portrait Card */}
              <div
                className="relative w-72 sm:w-80 lg:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] transition-all duration-300 hover:border-[var(--accent)] select-none group/photo"
              >
                <img
                  src="/polished-professional-studio-portrait.png?v=2"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/tanu-portrait.jpg') {
                      target.src = '/tanu-portrait.jpg';
                    }
                  }}
                  alt="Tanu Vishwakarma — Professional Studio Portrait"
                  className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-500 group-hover/photo:scale-[1.03]"
                />

                {/* Subtle professional studio edge lighting & bottom vignette */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
                />

                {/* Executive verified status badge bar */}
                <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-[var(--surface-elevated)]/90 backdrop-blur-md border border-[var(--border)] shadow-md flex items-center justify-between text-xs font-mono pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-[var(--text-primary)]">Available for Roles</span>
                  </div>
                  <span className="text-[11px] text-[var(--accent)] font-bold">AWS Certified</span>
                </div>
              </div>

              {/* Caption below Photo */}
              <div className="mt-4 text-center space-y-1">
                <div className="font-outfit font-bold text-base text-[var(--text-primary)]">
                  Full-Stack Engineer &amp; Cloud Builder
                </div>
                <p className="text-xs font-mono text-[var(--accent)]">
                  10+ Live Cloud Systems · FastAPI · React · AWS
                </p>
                <div className="pt-0.5 flex items-center justify-center gap-2 text-[11px] font-mono text-[var(--text-tertiary)]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Open to Remote &amp; Global Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Tech Badge Row */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-mono text-[var(--text-secondary)] pt-2">
              <span className="px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)]">
                FastAPI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)]">
                Django
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)]">
                React
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)]">
                WebSockets
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)]">
                Render
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mountain ridgeline with trees/grass silhouette (quanghuynh.com signature!) */}
      <Ridgeline className="mt-14 -mb-20 md:-mb-28" />
    </section>
  );
};
