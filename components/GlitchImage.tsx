"use client";

import type { CSSProperties } from "react";

type Block = {
  top: number;
  left: number;
  w: number;
  h: number;
  delay: number;
  dx: number;
  dy: number;
  color: string;
};

const BLOCKS: Block[] = [
  { top: 12, left: 4,  w: 38, h: 22, delay: 0.10, dx: -10, dy: 3,  color: "#0a0a0a" },
  { top: 38, left: 14, w: 28, h: 18, delay: 0.45, dx: 14,  dy: -2, color: "#202020" },
  { top: 64, left: 8,  w: 52, h: 30, delay: 0.80, dx: -16, dy: 0,  color: "#0a0a0a" },
  { top: 22, left: 30, w: 24, h: 16, delay: 0.20, dx: 12,  dy: 4,  color: "#404040" },
  { top: 78, left: 26, w: 44, h: 26, delay: 1.10, dx: -12, dy: 0,  color: "#202020" },
  { top: 48, left: 46, w: 36, h: 22, delay: 0.55, dx: 18,  dy: -3, color: "#0a0a0a" },
  { top: 18, left: 60, w: 30, h: 20, delay: 1.40, dx: -14, dy: 2,  color: "#202020" },
  { top: 58, left: 68, w: 42, h: 30, delay: 0.95, dx: 20,  dy: 0,  color: "#0a0a0a" },
  { top: 82, left: 56, w: 26, h: 18, delay: 1.75, dx: -10, dy: -2, color: "#404040" },
  { top: 30, left: 78, w: 34, h: 22, delay: 1.25, dx: 16,  dy: 4,  color: "#202020" },
  { top: 70, left: 86, w: 22, h: 18, delay: 1.95, dx: -8,  dy: 0,  color: "#0a0a0a" },
  { top: 50, left: 2,  w: 20, h: 14, delay: 2.30, dx: 10,  dy: 0,  color: "#202020" },
  { top: 88, left: 40, w: 32, h: 18, delay: 1.55, dx: -14, dy: 0,  color: "#0a0a0a" },
  { top: 8,  left: 48, w: 28, h: 18, delay: 2.50, dx: 12,  dy: -2, color: "#202020" },
  { top: 60, left: 36, w: 18, h: 14, delay: 2.85, dx: -8,  dy: 2,  color: "#404040" },
  { top: 26, left: 88, w: 24, h: 16, delay: 2.10, dx: -10, dy: 0,  color: "#0a0a0a" },
  { top: 74, left: 16, w: 16, h: 12, delay: 3.10, dx: 6,   dy: 0,  color: "#202020" },
  { top: 44, left: 24, w: 22, h: 14, delay: 1.05, dx: -12, dy: 0,  color: "#f0efed" },
  { top: 36, left: 72, w: 18, h: 12, delay: 2.40, dx: 10,  dy: 0,  color: "#ffffff" },
  { top: 66, left: 50, w: 20, h: 14, delay: 2.65, dx: -8,  dy: 2,  color: "#f0efed" },
  { top: 16, left: 22, w: 26, h: 18, delay: 0.30, dx: 12,  dy: -3, color: "#202020" },
  { top: 54, left: 20, w: 32, h: 20, delay: 0.65, dx: -14, dy: 2,  color: "#0a0a0a" },
  { top: 72, left: 38, w: 24, h: 16, delay: 0.90, dx: 10,  dy: 0,  color: "#202020" },
  { top: 28, left: 42, w: 30, h: 20, delay: 1.30, dx: -16, dy: 3,  color: "#0a0a0a" },
  { top: 86, left: 70, w: 28, h: 18, delay: 1.60, dx: 14,  dy: 0,  color: "#202020" },
  { top: 42, left: 8,  w: 22, h: 16, delay: 1.85, dx: -10, dy: -2, color: "#404040" },
  { top: 62, left: 78, w: 36, h: 22, delay: 2.20, dx: 18,  dy: 4,  color: "#0a0a0a" },
  { top: 14, left: 76, w: 22, h: 14, delay: 0.75, dx: -12, dy: 0,  color: "#202020" },
  { top: 80, left: 6,  w: 28, h: 20, delay: 1.50, dx: 12,  dy: 0,  color: "#0a0a0a" },
  { top: 34, left: 56, w: 16, h: 12, delay: 2.95, dx: -6,  dy: 0,  color: "#404040" },
  { top: 56, left: 88, w: 18, h: 14, delay: 1.20, dx: -8,  dy: 2,  color: "#202020" },
  { top: 90, left: 22, w: 20, h: 14, delay: 2.05, dx: 10,  dy: 0,  color: "#0a0a0a" },
  { top: 20, left: 12, w: 16, h: 12, delay: 1.70, dx: -6,  dy: 0,  color: "#f0efed" },
];

export function GlitchImage({
  src,
  className,
  alt = "",
  align = "bottom",
}: {
  src: string;
  className?: string;
  alt?: string;
  align?: "top" | "bottom";
}) {
  // Constrain blocks to the silhouette region within each wrapper.
  // pixels-1 (hero, align="bottom"): silhouette in bottom ~50% of PNG → map to 50-95%.
  // pixels-2 (portfolio, align="top"): silhouette in top ~35% of PNG → map to 0-35%.
  const [rangeStart, rangeEnd] = align === "top" ? [0, 35] : [50, 95];

  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        className="block w-full h-auto"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.18))" }}
      />
      {BLOCKS.map((b, i) => {
        const top = rangeStart + (b.top / 100) * (rangeEnd - rangeStart);
        const dy = align === "top" ? -b.dy : b.dy;
        const blockStyle = {
          top: `${top}%`,
          left: `${b.left}%`,
          width: `${b.w}px`,
          height: `${b.h}px`,
          backgroundColor: b.color,
          animationDelay: `${b.delay}s`,
          boxShadow: "2px 2px 0 rgba(0,0,0,0.35)",
          "--dx": `${b.dx}px`,
          "--dy": `${dy}px`,
        } as CSSProperties & Record<string, string>;
        return (
          <span
            key={i}
            aria-hidden="true"
            className="glitch-block absolute pointer-events-none"
            style={blockStyle}
          />
        );
      })}
    </div>
  );
}
