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

const SCROLL_PER_LINE = 100; // px of scroll to reveal each new line
const TOTAL_SCROLL = (lines.length - 1) * SCROLL_PER_LINE;

export default function Principles() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1); // first line visible by default

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      // Once all lines are visible, never reduce the count
      setVisibleCount((prev) => {
        if (prev >= lines.length) return prev;
        const rect = el.getBoundingClientRect();
        const scrolled = Math.min(Math.max(-rect.top, 0), TOTAL_SCROLL);
        const count = Math.floor(scrolled / SCROLL_PER_LINE) + 1;
        return Math.min(count, lines.length);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Outer wrapper provides scroll budget
    <div
      ref={wrapperRef}
      style={{ height: `calc(100vh + ${TOTAL_SCROLL}px)` }}
      className="relative bg-[#212121]"
      id="principles"
    >
      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#F2F2F2] z-20"
        aria-hidden="true"
      />

      {/* Sticky panel */}
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 bg-[#212121] z-10">
        <div className="max-w-6xl mx-auto w-full py-16">
          {/* Section label */}
          <p className="text-xs tracking-widest text-white/80 mb-16 font-mono">
            03 // OPERATING PRINCIPLES
          </p>

          {/* Lines */}
          <div className="flex flex-col gap-1">
            {lines.map((line, i) => (
              <p
                key={i}
                className={`${k2d.className} uppercase font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(2rem,4vw,3.5rem)] leading-[120%] tracking-normal`}
                style={{
                  opacity: visibleCount > i ? 1 : 0,
                  transform:
                    visibleCount > i ? "translateY(0px)" : "translateY(28px)",
                  color: "#ffffff",
                  transition:
                    "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  willChange: "opacity, transform",
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
