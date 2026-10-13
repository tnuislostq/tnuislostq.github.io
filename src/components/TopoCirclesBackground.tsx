import React, { useMemo } from 'react';

interface TopoCirclesBackgroundProps {
  className?: string;
}

/**
 * Exact mathematical topographic contour circles background from quanghuynh.com.
 * Generates organic concentric contour rings using cubic Bézier splines
 * with 4-harmonic radial perturbation and prominent index elevation contours.
 */
export const TopoCirclesBackground: React.FC<TopoCirclesBackgroundProps> = ({ className = '' }) => {
  const { heroPaths } = useMemo(() => {
    // Linear congruential pseudo-random generator matching quanghuynh.com ft()
    const createPrng = (seed: number) => {
      let t = seed % 2147483647;
      if (t <= 0) t += 2147483646;
      return () => {
        t = (t * 16807) % 2147483647;
        return (t - 1) / 2147483646;
      };
    };

    const round1 = (val: number) => Math.round(val * 10) / 10;

    // Smooth cubic Bézier spline loop matching quanghuynh.com pt()
    const buildClosedSpline = (pts: [number, number][]) => {
      const len = pts.length;
      let d = `M ${round1(pts[0][0])} ${round1(pts[0][1])}`;
      for (let r = 0; r < len; r += 1) {
        const prev = pts[(r - 1 + len) % len];
        const curr = pts[r];
        const next = pts[(r + 1) % len];
        const nextNext = pts[(r + 2) % len];

        const c: [number, number] = [
          curr[0] + (next[0] - prev[0]) / 6,
          curr[1] + (next[1] - prev[1]) / 6,
        ];
        const l: [number, number] = [
          next[0] - (nextNext[0] - curr[0]) / 6,
          next[1] - (nextNext[1] - curr[1]) / 6,
        ];

        d += ` C ${round1(c[0])} ${round1(c[1])} ${round1(l[0])} ${round1(l[1])} ${round1(
          next[0]
        )} ${round1(next[1])}`;
      }
      return `${d} Z`;
    };

    // Organic topographic ring generator matching quanghuynh.com mt()
    const generateCluster = ({
      cx,
      cy,
      rings,
      baseRadius,
      step,
      seed,
      stretch = 1.3,
    }: {
      cx: number;
      cy: number;
      rings: number;
      baseRadius: number;
      step: number;
      seed: number;
      stretch?: number;
    }) => {
      const rand = createPrng(seed);
      // 4 harmonic wave perturbations
      const harmonics = Array.from({ length: 4 }, (_, idx) => ({
        k: idx + 2,
        amp: (0.06 + rand() * 0.12) / (idx + 1),
        phase: rand() * Math.PI * 2,
      }));

      return Array.from({ length: rings }, (_, rIdx) => {
        const rad = baseRadius + rIdx * step;
        const pts: [number, number][] = Array.from({ length: 44 }, (_, pIdx) => {
          const angle = (pIdx / 44) * Math.PI * 2;
          const perturbation = harmonics.reduce(
            (acc, { k, amp, phase }) => acc + amp * Math.sin(k * angle + phase + rIdx * 0.12),
            1
          );
          return [
            cx + Math.cos(angle) * rad * perturbation * stretch,
            cy + Math.sin(angle) * rad * perturbation,
          ];
        });
        return {
          d: buildClosedSpline(pts),
          isIndex: rIdx % 5 === 4,
        };
      });
    };

    // Gentle ambient contour curves situated on the left/lower section (away from the photo)
    const clusterLeft = generateCluster({
      cx: 120,
      cy: 780,
      rings: 14,
      baseRadius: 36,
      step: 28,
      seed: 29,
      stretch: 1.25,
    });

    return {
      heroPaths: clusterLeft,
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}
    >
      {/* Subtle organic ambient haze matching quanghuynh.com (placed away from photo) */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 55% at 20% 70%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 65%)',
        }}
      />

      {/* Topographic Contour Field masked strictly to the left side, guaranteeing zero circles or curves near the photo on the right */}
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        className="hero-topo topo-field topo-animated w-full lg:w-1/2 h-full absolute left-0 top-0"
        style={{
          maskImage:
            'radial-gradient(ellipse 70% 70% at 20% 70%, #000 0%, #0000008c 40%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at 20% 70%, #000 0%, #0000008c 40%, transparent 75%)',
        }}
      >
        <g className="topo-field__drift" fill="none">
          {heroPaths.map((item, idx) => (
            <path
              key={`topo-${idx}`}
              d={item.d}
              className={item.isIndex ? 'topo-field__index' : undefined}
              stroke={item.isIndex ? 'var(--topo-index)' : 'var(--topo)'}
              strokeWidth={item.isIndex ? '1.8' : '1'}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
