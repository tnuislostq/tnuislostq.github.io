import React from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { X, Download, ExternalLink, FileText, CheckCircle, Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[var(--surface-elevated)] text-[var(--text-primary)] rounded-2xl shadow-2xl border border-[var(--border-strong)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with Cat Seal and Resume Branding */}
        <div className="p-5 sm:p-6 pb-4 border-b border-[var(--border)] flex items-center justify-between bg-[var(--surface)]">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[var(--border)] shadow-xs bg-[var(--bg-secondary)] shrink-0">
              <img
                src="/chi-the-cat.png"
                alt="Chi the cat companion"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--surface)]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent)]/15 text-[var(--accent)] font-bold tracking-wider">
                  VERIFIED CURRICULUM VITAE
                </span>
                <span className="text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-1">
                  🐾 Chi Verified
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[var(--text-primary)]">
                Tanu Vishwakarma
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-mono">
                Junior Full-Stack Developer • AWS Cloud Practitioner
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

        {/* Content Preview */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Quick Contact Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
              <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
              <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>
          </div>

          {/* Chi the Cat Quality Verification Card */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-[var(--surface)] to-[var(--surface-sunken)] border border-[var(--border)] flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[var(--border-strong)] bg-black/10 shrink-0">
              <img
                src="/chi-the-cat.png"
                alt="Chi the developer companion cat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)]">
                <Heart className="w-3.5 h-3.5 text-[var(--accent)] inline" />
                <span>Production-Tested Engineering Standard 🐾</span>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-0.5">
                Every project is verified live on Render/Netlify with real screenshots, responsive UX, and production-tested code.
              </p>
            </div>
          </div>

          {/* Core Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
              Executive Summary
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
              Junior Full-Stack Developer with demonstrable execution across <strong className="text-[var(--text-primary)]">React, Next.js, FastAPI, Flask, and Django</strong>. Ten+ self-driven applications deployed on real cloud infrastructure (Render, Netlify, AWS) with zero broken repos. Certified AWS Cloud Practitioner with solid fundamentals in cloud architecture, security, and RESTful APIs.
            </p>
          </div>

          {/* 10+ Live Projects Summary with Screenshots & URLs */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                10+ Shipped Live Projects & Real Screenshots
              </h4>
              <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                100% Cloud Deployed
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <strong className="font-outfit font-bold text-[var(--text-primary)] text-xs truncate">
                      {proj.title}
                    </strong>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--accent)]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] line-clamp-1 mb-1.5">
                    {proj.subtitle}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-mono pt-1 border-t border-[var(--border)]/50">
                    <span className="text-emerald-500 font-medium">● Live Production</span>
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--accent)] hover:underline flex items-center gap-0.5"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Credentials */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
              Verified Certifications
            </h4>
            <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-1.5 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[var(--text-primary)]">AWS Cloud Practitioner</span>
                <span className="font-mono text-[10px] text-[var(--accent)]">Score: 816 / 1000</span>
              </div>
              <p className="text-[11px] text-[var(--text-tertiary)]">
                GeeksforGeeks Full-Stack Bootcamp • JavaScript ES6+ • Product Management
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[var(--surface)] border-t border-[var(--border)] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface)] text-[var(--text-primary)] text-xs font-mono border border-[var(--border)] transition-colors"
            >
              <span>View PDF ↗</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Tanu_Kumari_Vishwakarma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] text-xs font-mono font-bold transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
