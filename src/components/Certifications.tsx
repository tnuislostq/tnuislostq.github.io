import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certificate } from '../types';
import { CertificateModal } from './CertificateModal';
import { ShieldCheck, ExternalLink, ZoomIn, Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-24 bg-[var(--surface-sunken)]/20 border-b border-[var(--border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <p className="eyebrow">Achievements & credentials</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-outfit tracking-tight text-[var(--text-primary)]">
            Professional <span className="text-[var(--accent)]">certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
            Industry-recognized credentials in AWS Cloud architecture, Full-Stack engineering, and core computer science verified with direct certificate IDs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="group p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs hover:border-[var(--border-strong)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Thumbnail Preview Container */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--surface-elevated)] border border-[var(--border)] cursor-pointer mb-4 group-hover:scale-[1.01] transition-transform"
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-medium">
                    <ZoomIn className="w-4 h-4 text-[var(--accent)]" />
                    <span>Quick Preview</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono font-semibold text-[var(--accent)]">
                    {cert.issuer}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--accent)]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="font-outfit font-bold text-base text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {cert.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Inspect details
                </button>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:underline"
                >
                  <span>Verify PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note beneath */}
        <div className="text-center mt-12 text-xs font-mono text-[var(--text-tertiary)]">
          Currently deepening expertise in distributed cloud architectures, SQL query optimization, and asynchronous task queues.
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
