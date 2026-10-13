import React, { useState, useEffect } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import {
  Menu,
  X,
  Terminal,
  FileText,
  Sparkles,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  openTerminal: () => void;
  openResume: () => void;
  openMeetTanu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  openTerminal,
  openResume,
  openMeetTanu,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navProgress, setNavProgress] = useState(0); // 0 (top) to 1 (scrolled)
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Smooth progressive interpolation over 360px on desktop, 180px on mobile (quanghuynh.com feel!)
          const threshold = window.innerWidth >= 1024 ? 360 : 180;
          const p = Math.min(1, Math.max(0, scrollY / threshold));
          setNavProgress(p);

          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress((scrollY / totalHeight) * 100);
          }

          const sections = ['home', 'work', 'skills', 'experience', 'contact'];
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 160 && rect.bottom >= 160) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured Work', href: '#work', id: 'work' },
    { label: 'Skills & Stack', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  // Continuous interpolated styles for buttery smooth transition (quanghuynh.com signature!)
  // Extra big cute cat avatar (requested by user!)
  const avatarSize = 5.85 - navProgress * 2.35; // from 5.85rem (~94px) to 3.5rem (56px)
  const headerPy = 1.35 - navProgress * 0.7; // from 1.35rem to 0.65rem

  return (
    <>
      {/* Top Animated Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-[var(--accent)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          '--p': navProgress,
          paddingTop: `calc(1.35rem + (0.65rem - 1.35rem) * ${navProgress})`,
          paddingBottom: `calc(1.35rem + (0.65rem - 1.35rem) * ${navProgress})`,
          backgroundColor: navProgress > 0.05 ? `var(--surface)` : 'transparent',
          borderColor: navProgress > 0.1 ? 'var(--border)' : 'transparent',
          boxShadow: navProgress > 0.15 ? '0 1px 3px rgba(0, 0, 0, 0.2)' : 'none',
          backdropFilter: navProgress > 0.05 ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: navProgress > 0.05 ? 'blur(12px)' : 'none',
          transition: 'padding 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand with Exact Cat Face Avatar size from quanghuynh.com */}
            <a
              href="#home"
              onClick={() => handleLinkClick('home')}
              className="brand-lockup group focus:outline-none"
              style={{ '--p': navProgress } as React.CSSProperties}
            >
              {/* Exact brand-cat avatar matching quanghuynh.com */}
              <div
                className="brand-cat"
                style={{ '--p': navProgress } as React.CSSProperties}
              >
                <img
                  src="/chi-the-cat.png"
                  alt="Chi the cat"
                  className="select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center">
                <span className="font-outfit font-bold tracking-tight text-[var(--text-primary)] text-lg sm:text-xl group-hover:text-[var(--accent)] transition-colors">
                  tanuvishwakarma
                </span>
                <span
                  className="brand-tld select-none"
                  style={{ '--p': navProgress } as React.CSSProperties}
                >
                  .dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[var(--surface-elevated)]/80 px-3 py-1.5 rounded-full border border-[var(--border)] backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-[var(--surface)] text-[var(--accent)] shadow-xs font-bold border border-[var(--border)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Tools */}
            <div className="flex items-center gap-2.5">
              {/* Meet Tanu trigger */}
              <button
                onClick={() => openMeetTanu?.()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border)] transition-all"
                title="A little more about me"
              >
                <span>Bio</span>
              </button>

              {/* Developer CLI Button */}
              <button
                onClick={openTerminal}
                title="Launch Developer CLI"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border)] transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span className="hidden sm:inline">CLI</span>
              </button>

              {/* Resume Button */}
              <button
                onClick={openResume}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[var(--accent)]/15 text-[var(--accent)] hover:bg-[var(--accent)]/25 border border-[var(--accent)]/30 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Résumé</span>
              </button>

              {/* GitHub Pages ZIP Download */}
              <a
                href="/portfolio-github-pages.zip"
                download="portfolio-github-pages.zip"
                title="Download GitHub Pages ZIP"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">ZIP</span>
              </a>

              {/* Theme Switcher Button */}
              <div className="scale-90 sm:scale-95">
                <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="md:hidden mt-2 px-4 pt-2 pb-5 bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--border)] shadow-xl transition-all">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-bold'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)]'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    openMeetTanu?.();
                    setIsOpen(false);
                  }}
                  className="flex-1 py-2 text-xs font-mono font-medium rounded-lg bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border)]"
                >
                  Meet Tanu
                </button>

                <button
                  onClick={() => {
                    openResume();
                    setIsOpen(false);
                  }}
                  className="flex-1 py-2 text-xs font-mono font-medium rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)]"
                >
                  View Résumé
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
