import React from 'react';
import { Certificate } from '../types';
import { X, ExternalLink, ShieldCheck, Award } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111622] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-6 pb-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-outfit font-bold text-gray-900 dark:text-white">
                {certificate.title}
              </h3>
              <p className="text-xs text-gray-500 font-mono">
                Issued by {certificate.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image Preview */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-black/40">
          <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-750 shadow-md max-w-lg w-full bg-white">
            {certificate.previewUrl ? (
              <iframe
                src={certificate.previewUrl}
                title={`${certificate.title} certificate`}
                className="w-full h-[50vh] border-0"
                loading="lazy"
              />
            ) : (
              <div className="min-h-64 p-8 flex flex-col items-center justify-center gap-3 text-center text-gray-600 dark:text-gray-300">
                <Award className="w-10 h-10 text-amber-500" />
                <p className="font-semibold">Certificate preview unavailable</p>
                <p className="text-sm">Make the certificate file publicly viewable to show it here.</p>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {certificate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 pt-3 bg-gray-50 dark:bg-[#0c101a] border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
          <span className="text-xs font-mono text-[var(--accent)] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Verified Credential
          </span>

          <a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-all shadow-md shadow-cyan-600/20"
          >
            <span>View Official PDF</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
