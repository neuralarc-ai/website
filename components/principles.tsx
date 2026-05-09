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

// Delay (ms) before each line fades in after the section enters view
const DELAYS = [0, 1000, 2000, 3000, 4000, 5000];

export default function Principles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Clear any existing timers
          timersRef.current.forEach(clearTimeout);
          timersRef.current = [];

          // Schedule each line to appear at its delay
          DELAYS.forEach((delay, i) => {
            const t = setTimeout(() => {
              setVisibleCount((prev) => Math.max(prev, i + 1));
            }, delay);
            timersRef.current.push(t);
          });

          // Stop observing after first trigger
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timersRef.current.forEach(clearTimeout);
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
              const visible = visibleCount > i;
              return (
                <p
                  key={i}
                  className={`${k2d.className} uppercase font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(2rem,4vw,3.5rem)] leading-[120%] tracking-normal`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0px)" : "translateY(24px)",
                    filter: visible ? "blur(0px)" : "blur(12px)",
                    color: "#ffffff",
                    transition:
                      "opacity 1.6s cubic-bezier(0.4,0,0.2,1), transform 1.6s cubic-bezier(0.4,0,0.2,1), filter 1.6s cubic-bezier(0.4,0,0.2,1)",
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
