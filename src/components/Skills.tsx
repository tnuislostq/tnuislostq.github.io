import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  Server,
  Cloud,
  Cpu,
  Layers,
  Sparkles,
  Search,
  CheckCircle2,
  Database,
  Terminal,
  Zap,
  Globe,
  GitBranch,
  ShieldCheck,
  Layout,
  Boxes,
  FileCode,
  Palette
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  if (category.includes('Frontend')) return <Layout className="w-4 h-4 text-[var(--accent)]" />;
  if (category.includes('Backend')) return <Server className="w-4 h-4 text-indigo-400" />;
  if (category.includes('Cloud')) return <Cloud className="w-4 h-4 text-sky-500" />;
  return <Cpu className="w-4 h-4 text-purple-400" />;
};

const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Atom':
    case 'Layout':
      return <Layout className="w-3.5 h-3.5 text-[var(--accent)]" />;
    case 'Layers':
      return <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />;
    case 'Palette':
      return <Palette className="w-3.5 h-3.5 text-cyan-400" />;
    case 'Server':
      return <Server className="w-3.5 h-3.5 text-indigo-400" />;
    case 'Zap':
      return <Zap className="w-3.5 h-3.5 text-amber-400" />;
    case 'Database':
      return <Database className="w-3.5 h-3.5 text-indigo-400" />;
    case 'Cloud':
      return <Cloud className="w-3.5 h-3.5 text-sky-400" />;
    case 'GitBranch':
      return <GitBranch className="w-3.5 h-3.5 text-orange-400" />;
    case 'Globe':
      return <Globe className="w-3.5 h-3.5 text-blue-400" />;
    case 'Terminal':
      return <Terminal className="w-3.5 h-3.5 text-teal-400" />;
    case 'Cpu':
      return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
    default:
      return <Code2 className="w-3.5 h-3.5 text-[var(--accent)]" />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const displayedCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      cat.category.toLowerCase().includes(q) ||
      cat.skills.some((s) => s.name.toLowerCase().includes(q))
    );
  });

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative bg-[var(--surface-sunken)]/20 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 space-y-2 text-left">
          <p className="eyebrow">Technical capabilities</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-outfit tracking-tight text-[var(--text-primary)]">
            Skills & <span className="text-[var(--accent)]">tech stack</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
            A battle-tested production toolkit connecting modern reactive front ends with resilient Python APIs, WebSocket engines, and cloud runtimes.
          </p>
        </div>

        {/* Filter Pills & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none select-none">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? totalSkillsCount
                  : SKILL_CATEGORIES.find((c) => c.category === cat)?.skills.length || 0;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                      : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
                  }`}
                >
                  {cat === 'All' ? `All (${count})` : `${cat.split(' ')[0]} (${count})`}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. FastAPI)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs font-mono rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((catGroup) => {
            const filteredSkills = catGroup.skills.filter((skill) => {
              if (!searchQuery.trim()) return true;
              const q = searchQuery.toLowerCase();
              return skill.name.toLowerCase().includes(q) || catGroup.category.toLowerCase().includes(q);
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={catGroup.category}
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)]">
                        {getCategoryIcon(catGroup.category)}
                      </div>
                      <div>
                        <h3 className="font-outfit font-bold text-base text-[var(--text-primary)]">
                          {catGroup.category}
                        </h3>
                        <p className="text-[11px] font-mono text-[var(--text-tertiary)]">
                          {catGroup.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-secondary)]">
                      {filteredSkills.length} tools
                    </span>
                  </div>

                  {/* Skills Pills in Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {filteredSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="shrink-0 p-1 rounded-md bg-[var(--surface)] border border-[var(--border)]">
                            {getSkillIcon(skill.icon)}
                          </span>
                          <span className="font-outfit font-semibold text-xs text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {skill.favorite && (
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/20">
                              Core
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer insight */}
                <div className="mt-5 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)]">
                  <span className="flex items-center gap-1 text-[var(--accent)]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Production tested</span>
                  </span>
                  <span>10+ Live Apps</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
