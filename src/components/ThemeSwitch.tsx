import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeSwitchProps {
  theme: 'dark' | 'light';
  toggleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

/**
 * Editorial theme switch inspired by quanghuynh.com.
 * Supports View Transitions API for full-viewport circular reveal.
 */
export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, toggleTheme, className = '' }) => {
  const isDark = theme === 'dark';
  const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] transition-all cursor-pointer select-none text-xs font-mono group active:scale-95 shadow-xs ${className}`}
      aria-pressed={!isDark}
      aria-label={label}
      title={label}
    >
      <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--accent)] group-hover:scale-110 transition-transform">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-amber-300 transition-transform group-hover:rotate-45" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-indigo-500 transition-transform group-hover:-rotate-12" />
        )}
      </span>
      <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors font-medium">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};
