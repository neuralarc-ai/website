"use client";

import { majorMono, k2d } from "@/lib/fonts";
import { useState } from "react";

export default function FieldTransmission() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative bg-[#212121] text-white px-6 pt-24 pb-24 md:pt-32 md:pb-32 min-h-[500px] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-32 items-center">
        {/* LEFT — text */}
        <div className="md:w-[380px] shrink-0">
          <p className="text-xs tracking-widest text-white/80 mb-6 font-mono">
            05 // VIDEO_LIBRARY
          </p>
          <h2
            className={`${majorMono.className} lowercase text-transparent mb-6 text-3xl sm:text-4xl md:text-5xl leading-none tracking-[0.04em] text-stroke-white`}
          >
            field
            <br />
            transmission
          </h2>
          <p
            className={`${k2d.className} text-zinc-400 max-w-[320px] text-base sm:text-lg md:text-xl leading-relaxed`}
          >
            Product walkthroughs, research updates, and system deep dives from
            the Fahrenheit Team.
          </p>

          {/* CTA button */}
          <a
            href="https://youtube.com/@FahrenheitResearch-m5h"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 mt-30 border border-white px-6 py-4 hover:bg-white hover:border-white transition-all duration-200 group"
          >
            {/* YouTube logo */}
            <span className="relative w-5 h-5 shrink-0">
              <img
                src="/images/youtube logo white.svg"
                alt=""
                className="absolute inset-0 w-full h-full transition-opacity duration-200 group-hover:opacity-0"
              />
              <img
                src="/images/youtube logo black.svg"
                alt=""
                className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </span>
            <span
              className={`${majorMono.className} lowercase text-xs sm:text-sm tracking-widest  text-white group-hover:text-black font-mono transition-colors duration-200`}
            >
              Visit YouTube Channel
            </span>
            {/* Arrow */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-white group-hover:text-black transition-colors duration-200"
            >
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>

          {/* URL */}
          <div className="relative inline-block mt-8 px-3 py-1">
            {/* Top-left corner bracket */}
            <span
              className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white"
              aria-hidden="true"
            />
            {/* Bottom-right corner bracket */}
            <span
              className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white"
              aria-hidden="true"
            />
            <p
              className={`${majorMono.className} lowercase text-[10px] sm:text-xs tracking-widest text-white whitespace-nowrap `}
            >
              youtube.com / @fahrenheitresearch-m5h
            </p>
          </div>
        </div>

        {/* RIGHT — YouTube image */}
        <div
          className="flex-1 max-w-[800px] relative cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src="/images/youtube static.svg"
            alt="YouTube channel preview"
            className="w-full h-auto transition-opacity duration-300"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            src="/images/youtube hover.svg"
            alt="YouTube channel preview hover"
            className="absolute inset-0 w-full h-auto transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          />
        </div>
      </div>
    </section>
  );
}
