import React, { useMemo } from 'react';

interface RidgelineProps {
  className?: string;
}

/**
 * Topographic mountain ridgeline with grass & pine trees silhouette from quanghuynh.com.
 * Renders multi-layer undulating mountain ridges with micro-trees and grass blades.
 */
export const Ridgeline: React.FC<RidgelineProps> = ({ className = '' }) => {
  const { layer1, layer2, layer3 } = useMemo(() => {
    // Deterministic pseudo-random generator
    const makeGenerator = (seed: number) => {
      let s = seed;
      return () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
      };
    };

    const buildPath = ({
      seed,
      base,
      amplitude,
      roughness,
      width = 1600,
      height = 320,
      points = 36,
      trees = false,
    }: {
      seed: number;
      base: number;
      amplitude: number;
      roughness: number;
      width?: number;
      height?: number;
      points?: number;
      trees?: boolean;
    }) => {
      const rand = makeGenerator(seed);
      const l = rand() * Math.PI * 2;
      const u = rand() * Math.PI * 2;
      let d = `M 0 ${height}`;

      for (let e = 0; e <= points; e += 1) {
        const x = (e / points) * width;
        const f = e / points;
        const y =
          base -
          Math.sin(f * Math.PI * 1.6 + l) * amplitude -
          Math.sin(f * Math.PI * 4.3 + u) * amplitude * 0.35 -
          (rand() - 0.5) * roughness;

        d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;

        // Micro-trees / grass blades on the closest ridge layer (trees: true)
        if (trees && e < points) {
          for (let t = 1; t <= 4; t += 1) {
            const treeX = x + (t / 5) * (width / points);
            const treeHeight = y - 7 - rand() * 15;
            d += ` L ${(treeX - 2.5).toFixed(1)} ${(y - rand() * 2).toFixed(1)} L ${treeX.toFixed(
              1
            )} ${treeHeight.toFixed(1)} L ${(treeX + 2.5).toFixed(1)} ${(y - rand() * 2).toFixed(1)}`;
          }
        }
      }

      d += ` L ${width} ${height} Z`;
      return d;
    };

    return {
      layer1: buildPath({ seed: 3, base: 140, amplitude: 50, roughness: 20 }),
      layer2: buildPath({ seed: 17, base: 200, amplitude: 34, roughness: 14 }),
      layer3: buildPath({ seed: 41, base: 255, amplitude: 18, roughness: 8, points: 55, trees: true }),
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none w-full overflow-hidden leading-none ${className}`}
    >
      <svg
        viewBox="0 0 1600 320"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-24 md:h-28 lg:h-32 block text-[var(--border)]"
      >
        {/* Layer 1: Distant misty ridge */}
        <path
          d={layer1}
          className="fill-[var(--ridge-1)] opacity-40 dark:opacity-50 transition-colors duration-500"
        />
        {/* Layer 2: Mid-ground mountain ridge */}
        <path
          d={layer2}
          className="fill-[var(--ridge-2)] opacity-70 dark:opacity-80 transition-colors duration-500"
        />
        {/* Layer 3: Foreground ridge with little pine trees & grass blades */}
        <path
          d={layer3}
          className="fill-[var(--ridge-3)] transition-colors duration-500"
        />
      </svg>
    </div>
  );
};
