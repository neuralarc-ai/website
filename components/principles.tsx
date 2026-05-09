"use client";

import { useEffect, useRef, useState } from "react";
import { k2d } from "@/lib/fonts";

const lines = [
  "We do not license our breakthroughs.",
  "We do not outsource our thinking.",
  "Every model we train.",
  "Every system we build.",
  "Every product we ship.",
  "Is ours.",
];

// Each line's reveal window covers RANGE of total scroll progress.
// Starts are spread evenly so the last line completes at progress = 1.
const RANGE = 0.3;

export default function Principles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Small entry buffer so the first line doesn't pop the moment
      // the section's top crosses into view.
      const delay = vh * 0.1;
      // Reveal completes when the section is centered in the viewport
      // (i.e. tied to the section's actual scroll-through, not a fixed
      // multiple of vh). Floored to avoid being too fast on short sections.
      const scrollWindow = Math.max(
        (vh + rect.height) / 2 - delay,
        vh * 0.5,
      );
      const scrolled = vh - rect.top - delay;
      const p = Math.min(1, Math.max(0, scrolled / scrollWindow));
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#212121]" id="principles">
      <div className="flex flex-col justify-center px-6 py-24 md:py-36 bg-[#212121]">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section label */}
          <p className="text-xs tracking-widest text-white/80 mb-16 font-mono">
            03 // OPERATING PRINCIPLES
          </p>

          {/* Lines */}
          <div className="flex flex-col gap-1">
            {lines.map((line, i) => {
              const start =
                lines.length > 1
                  ? (i / (lines.length - 1)) * (1 - RANGE)
                  : 0;
              const lineProgress = Math.min(
                1,
                Math.max(0, (progress - start) / RANGE),
              );
              return (
                <p
                  key={i}
                  className={`${k2d.className} uppercase font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(2rem,4vw,3.5rem)] leading-[120%] tracking-normal`}
                  style={{
                    opacity: lineProgress,
                    transform: `translateY(${(1 - lineProgress) * 24}px)`,
                    filter: `blur(${(1 - lineProgress) * 12}px)`,
                    color: "#ffffff",
                    willChange: "opacity, transform, filter",
                  }}
                >
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
