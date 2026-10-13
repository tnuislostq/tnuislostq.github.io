import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Linkedin,
  Github,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { TopoCirclesBackground } from './TopoCirclesBackground';
import { Ridgeline } from './Ridgeline';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {}

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
    } catch {}

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[var(--surface-sunken)]/40 relative overflow-hidden">
      {/* Topographic circles background (quanghuynh.com signature!) */}
      <TopoCirclesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (quanghuynh.com editorial styling) */}
        <div className="max-w-3xl mb-12 space-y-2 text-left">
          <p className="eyebrow">Contact</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-outfit tracking-tight text-[var(--text-primary)]">
            Let’s talk about building <span className="text-[var(--accent)]">useful software</span>.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
            I’m open to full-stack and backend engineering opportunities, especially in Python (FastAPI, Django), React/Next.js, and cloud deployments. I’m always glad to connect with recruiters, engineering teams, and other developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs space-y-5">
              <h3 className="text-lg font-bold font-outfit text-[var(--text-primary)]">
                Contact Information
              </h3>

              {/* Email with 1-click copy */}
              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)] block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--accent)] border border-[var(--border)] shadow-xs transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)] block">Phone & WhatsApp</span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-medium transition-colors whitespace-nowrap shadow-xs"
                >
                  WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface)] text-[var(--text-secondary)] flex items-center justify-center shrink-0 border border-[var(--border)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[var(--text-tertiary)] block">Engineering Hub</span>
                  <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Direct Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface)] text-[var(--text-primary)] text-xs font-mono font-medium border border-[var(--border)] hover:border-[var(--accent)] transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface)] text-[var(--text-primary)] text-xs font-mono font-medium border border-[var(--border)] hover:border-[var(--accent)] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold font-outfit text-[var(--text-primary)] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-[var(--text-tertiary)] mb-6">
                Have a job opportunity, technical question, or project inquiry?
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-outfit font-bold text-[var(--text-primary)] text-lg">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
                    Your email client has opened with the formatted message draft to <strong>{PERSONAL_INFO.email}</strong>. Tanu typically responds promptly within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-[var(--accent)] hover:underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-mono placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-mono placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Role: Full-Stack Developer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-mono placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Tanu, we saw your work on SitePulse, ASALPS & TUKO and would love to chat..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-sans placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Tanu</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mountain ridgeline with trees/grass silhouette (quanghuynh.com signature!) */}
      <Ridgeline className="mt-16 -mb-24" />
    </section>
  );
};
