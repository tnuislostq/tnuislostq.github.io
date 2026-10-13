/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { MeetTanuModal } from './components/MeetTanuModal';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tkv-portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [meetTanuOpen, setMeetTanuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('tkv-portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;

    const applyTheme = (t: 'dark' | 'light') => {
      if (t === 'dark') {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
        document.body.classList.remove('dark');
      }
      setTheme(t);
      try {
        localStorage.setItem('tkv-portfolio-theme', t);
      } catch (err) {}
    };

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (typeof (document as any).startViewTransition !== 'function' || reduced || !e) {
      applyTheme(next);
      return;
    }

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.style.setProperty('--theme-x', `${x}px`);
    root.style.setProperty('--theme-y', `${y}px`);
    root.style.setProperty('--theme-r', `${radius}px`);

    (document as any).startViewTransition(() => {
      applyTheme(next);
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-w-full min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
      {/* Animated Custom Trailing Cursor with physics, trailing particles & click ripple */}
      <CustomCursor />

      {/* Dynamic Animated Ambient Background with floating orbs, particles, and cursor spotlight */}
      <AnimatedBackground />

      {/* Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openTerminal={() => setTerminalOpen(true)}
        openResume={() => setResumeOpen(true)}
        openMeetTanu={() => setMeetTanuOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main">
        <Hero
          openTerminal={() => setTerminalOpen(true)}
          openResume={() => setResumeOpen(true)}
          openMeetTanu={() => setMeetTanuOpen(true)}
        />
        <Projects />
        <Skills />
        <ExperienceEducation />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Modals & Overlays */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        openResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <MeetTanuModal
        isOpen={meetTanuOpen}
        onClose={() => setMeetTanuOpen(false)}
        openResume={() => {
          setMeetTanuOpen(false);
          setResumeOpen(true);
        }}
      />
    </div>
  );
}
