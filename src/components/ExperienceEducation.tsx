import React, { useState } from 'react';
import { EXPERIENCE_EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = EXPERIENCE_EDUCATION.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  const experienceCount = EXPERIENCE_EDUCATION.filter((i) => i.type === 'experience').length;
  const educationCount = EXPERIENCE_EDUCATION.filter((i) => i.type === 'education').length;

  return (
    <section id="experience" className="py-24 relative bg-[var(--surface-sunken)]/40 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <p className="eyebrow">Career journey & track record</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-outfit tracking-tight text-[var(--text-primary)]">
            Experience & <span className="text-[var(--accent)]">education</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
            From hands-on bootcamp training to independent production engineering and verified cloud certifications.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 mb-14 overflow-x-auto pb-2 scrollbar-none select-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
            }`}
          >
            All Milestones ({EXPERIENCE_EDUCATION.length})
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'experience'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience ({experienceCount})</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'education'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education & Bootcamps ({educationCount})</span>
          </button>
        </div>

        {/* Timeline Stream */}
        <div className="max-w-4xl space-y-6 relative before:absolute before:inset-0 before:left-5 sm:before:left-6 before:w-[2px] before:bg-[var(--border)]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative pl-12 sm:pl-16 group"
            >
              {/* Timeline Node Badge */}
              <div className="absolute left-2 sm:left-3 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--accent)] shadow-sm flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                {item.type === 'experience' ? (
                  <Briefcase className="w-3.5 h-3.5" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs hover:border-[var(--border-strong)] transition-all space-y-4">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                    <span className="text-[var(--text-tertiary)]">•</span>
                    <MapPin className="w-3 h-3 text-[var(--text-tertiary)]" />
                    <span className="text-[var(--text-secondary)]">{item.location}</span>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-tertiary)] uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="font-outfit font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                    {item.role}
                  </h3>
                  <div className="text-sm font-mono font-medium text-[var(--accent)] mt-0.5">
                    {item.company}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                    Key Highlights & Shipped Outcomes:
                  </h4>
                  <ul className="space-y-1.5">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Skills Tagged */}
                <div className="pt-3 border-t border-[var(--border)] flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-[var(--text-tertiary)] mr-1">
                    Applied:
                  </span>
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
