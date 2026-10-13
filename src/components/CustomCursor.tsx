import React, { useEffect, useRef, useState } from 'react';

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trail1Ref = useRef<HTMLDivElement>(null);
  const trail2Ref = useRef<HTMLDivElement>(null);
  const trail3Ref = useRef<HTMLDivElement>(null);

  const [isTouch, setIsTouch] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;

    let ringX = -100;
    let ringY = -100;

    let t1X = -100;
    let t1Y = -100;

    let t2X = -100;
    let t2Y = -100;

    let t3X = -100;
    let t3Y = -100;

    let isVisible = false;
    let isMouseDown = false;
    let isHovering = false;
    let animationFrameId: number;

    const setElementsOpacity = (opacity: string) => {
      if (dotRef.current) dotRef.current.style.opacity = opacity;
      if (ringRef.current) ringRef.current.style.opacity = opacity;
      if (trail1Ref.current) trail1Ref.current.style.opacity = opacity === '1' ? '0.5' : '0';
      if (trail2Ref.current) trail2Ref.current.style.opacity = opacity === '1' ? '0.35' : '0';
      if (trail3Ref.current) trail3Ref.current.style.opacity = opacity === '1' ? '0.2' : '0';
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        t1X = mouseX;
        t1Y = mouseY;
        t2X = mouseX;
        t2Y = mouseY;
        t3X = mouseX;
        t3Y = mouseY;
        setElementsOpacity('1');
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${
          isMouseDown ? 'scale(0.7)' : isHovering ? 'scale(1.3)' : 'scale(1)'
        }`;
      }
    };

    const handleMouseDown = () => {
      isMouseDown = true;
      if (ringRef.current) {
        ringRef.current.classList.add('is-clicking');
      }
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      if (ringRef.current) {
        ringRef.current.classList.remove('is-clicking');
      }
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple: ClickRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);

      // Remove after animation finishes (600ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    const handleMouseLeave = () => {
      setElementsOpacity('0');
      isVisible = false;
    };

    const handleMouseEnter = () => {
      if (isVisible) {
        setElementsOpacity('1');
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('.interactive-target') ||
          target.closest('.personality-button') ||
          target.closest('.meet-tanu-card') ||
          target.closest('input') ||
          target.closest('textarea'))
      ) {
        isHovering = true;
        ringRef.current?.classList.add('is-hovering');
      } else {
        isHovering = false;
        ringRef.current?.classList.remove('is-hovering');
      }
    };

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const loop = () => {
      if (isVisible) {
        // Main trailing ring
        ringX = lerp(ringX, mouseX, 0.18);
        ringY = lerp(ringY, mouseY, 0.18);
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        }

        // Secondary trailing particles for fluid trailing motion
        t1X = lerp(t1X, mouseX, 0.32);
        t1Y = lerp(t1Y, mouseY, 0.32);
        if (trail1Ref.current) {
          trail1Ref.current.style.transform = `translate3d(${t1X}px, ${t1Y}px, 0) translate(-50%, -50%)`;
        }

        t2X = lerp(t2X, t1X, 0.28);
        t2Y = lerp(t2Y, t1Y, 0.28);
        if (trail2Ref.current) {
          trail2Ref.current.style.transform = `translate3d(${t2X}px, ${t2Y}px, 0) translate(-50%, -50%)`;
        }

        t3X = lerp(t3X, t2X, 0.24);
        t3Y = lerp(t3Y, t2Y, 0.24);
        if (trail3Ref.current) {
          trail3Ref.current.style.transform = `translate3d(${t3X}px, ${t3Y}px, 0) translate(-50%, -50%)`;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Expanding Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="cursor-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}

      {/* Trailing Micro Particles */}
      <div
        ref={trail3Ref}
        className="cursor-trail-dot opacity-0"
        style={{ width: '3px', height: '3px' }}
      />
      <div
        ref={trail2Ref}
        className="cursor-trail-dot opacity-0"
        style={{ width: '4px', height: '4px' }}
      />
      <div
        ref={trail1Ref}
        className="cursor-trail-dot opacity-0"
        style={{ width: '5px', height: '5px' }}
      />

      {/* Main Center Dot */}
      <div
        ref={dotRef}
        className="cursor-dot opacity-0"
        style={{
          transition: 'opacity 0.2s ease, transform 0.15s ease-out',
        }}
      />

      {/* Outer Spring Ring */}
      <div
        ref={ringRef}
        className="cursor-ring opacity-0"
        style={{
          transition:
            'opacity 0.2s ease, width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />
    </>
  );
};
