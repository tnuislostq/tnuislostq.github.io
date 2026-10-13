import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only track if pointer fine (mouse) and not reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;
    let rafId: number;
    let isMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        if (spotlightRef.current) {
          spotlightRef.current.style.opacity = '1';
        }
      }
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }
    };

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const tick = () => {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Subtle tactile dot-matrix texture matching stone/paper styling */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--accent) 0.85px, transparent 0.85px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* 2. Interactive ambient cursor spotlight (soft luminous aura following mouse smoothly) */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[580px] h-[580px] rounded-full opacity-0 transition-opacity duration-700 pointer-events-none will-change-transform"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent) 0%, color-mix(in srgb, var(--accent) 4%, transparent) 40%, transparent 70%)',
          filter: 'blur(32px)',
        }}
      />

      {/* 3. Floating Organic Luminous Atmosphere Orbs with slow harmonic drift */}
      {/* Orb 1: Upper Right - Soft Emerald/Sage Glow */}
      <div
        className="absolute -top-24 -right-24 w-[38rem] h-[38rem] rounded-full animate-ambient-1 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent) 0%, color-mix(in srgb, var(--accent) 5%, transparent) 50%, transparent 75%)',
          filter: 'blur(64px)',
        }}
      />

      {/* Orb 2: Center Left - Gentle Warm Tone */}
      <div
        className="absolute top-[42%] -left-32 w-[34rem] h-[34rem] rounded-full animate-ambient-2 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--signal) 10%, color-mix(in srgb, var(--accent) 8%, transparent)) 0%, color-mix(in srgb, var(--accent) 4%, transparent) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Orb 3: Bottom Right - Deep Atmospheric Foundation */}
      <div
        className="absolute -bottom-36 right-[15%] w-[42rem] h-[42rem] rounded-full animate-ambient-3 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent) 0%, color-mix(in srgb, var(--accent) 3%, transparent) 55%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />

      {/* 4. Subtle Ambient Floating Micro-Particles (gentle breathing motes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-40">
        {[
          { top: '18%', left: '12%', size: '3px', delay: '0s', duration: '9s' },
          { top: '35%', left: '78%', size: '4px', delay: '2s', duration: '11s' },
          { top: '55%', left: '22%', size: '3px', delay: '4s', duration: '10s' },
          { top: '72%', left: '85%', size: '4px', delay: '1s', duration: '13s' },
          { top: '88%', left: '45%', size: '3px', delay: '3s', duration: '12s' },
          { top: '28%', left: '62%', size: '3px', delay: '5s', duration: '14s' },
          { top: '68%', left: '38%', size: '4px', delay: '2.5s', duration: '10.5s' },
        ].map((particle, idx) => (
          <div
            key={idx}
            className="absolute rounded-full animate-particle pointer-events-none"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              backgroundColor: 'var(--accent)',
              boxShadow: '0 0 8px var(--accent)',
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
};
