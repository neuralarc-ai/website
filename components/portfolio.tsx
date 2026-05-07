"use client";

import { useState } from "react";

interface Company {
  name: string;
  description: string;
  website: string;
  logo: string;
}

const companies: Company[] = [
  {
    name: "Kashew AI",
    description:
      "AI powered prospecting, pipeline, and relationship intelligence.",
    website: "#",
    logo: "/kashew-logo.svg",
  },
  {
    name: "Ninth",
    description: "Next-generation infrastructure for modern teams.",
    website: "#",
    logo: "/ninth-logo.svg",
  },
  {
    name: "Company Three",
    description: "Redefining how data moves through organizations.",
    website: "#",
    logo: "",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + companies.length) % companies.length);
  const next = () => setActive((i) => (i + 1) % companies.length);

  const prevIndex = (active - 1 + companies.length) % companies.length;
  const nextIndex = (active + 1) % companies.length;

  return (
    <section
      id="products"
      className="relative bg-[#f0efed] px-6 min-h-screen flex flex-col justify-center py-24 overflow-hidden"
    >
      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-zinc-300"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section label */}
        <p className="text-xs tracking-widest text-zinc-400 mb-4 font-mono text-center">
          01 // PORTFOLIO
        </p>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[0.12em] uppercase text-zinc-900 leading-tight mb-20 text-center"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Our companies dont just enter
          <br />
          markets they define them
        </h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-12">
          {/* Prev ghost card */}
          <div className="hidden lg:flex flex-col items-center gap-4 opacity-30 select-none pointer-events-none w-32">
            <span className="text-sm tracking-[0.2em] uppercase text-zinc-500 font-mono">
              {companies[prevIndex].name}
            </span>
            {companies[prevIndex].logo ? (
              <img
                src={companies[prevIndex].logo}
                alt=""
                className="w-14 h-14 object-contain"
              />
            ) : (
              <div className="w-14 h-14 bg-zinc-400 rounded-sm" />
            )}
          </div>

          {/* Active card */}
          <div className="relative border border-zinc-300 bg-white w-[360px] sm:w-[500px] min-h-[700px] flex flex-col items-center px-12 pt-16 pb-10 gap-6">
            {/* Corner brackets */}
            <span className="absolute top-4 left-4 text-zinc-400 text-base leading-none select-none font-mono">
              &#x250C;
            </span>
            <span className="absolute top-4 right-4 text-zinc-400 text-base leading-none select-none font-mono">
              &#x2510;
            </span>
            <span className="absolute bottom-4 left-4 text-zinc-400 text-base leading-none select-none font-mono">
              &#x2514;
            </span>
            <span className="absolute bottom-4 right-4 text-zinc-400 text-base leading-none select-none font-mono">
              &#x2518;
            </span>

            {/* Company name */}
            <p className="text-lg tracking-[0.2em] uppercase text-zinc-800 font-mono font-semibold">
              {companies[active].name}
            </p>

            {/* Logo */}
            {companies[active].logo ? (
              <img
                src={companies[active].logo}
                alt={`${companies[active].name} logo`}
                className="w-16 h-16 my-4 object-contain"
              />
            ) : (
              <div className="w-16 h-16 bg-zinc-200 rounded-md flex items-center justify-center my-4">
                <span className="text-xs text-zinc-400 font-mono">LOGO</span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-zinc-500 text-center leading-relaxed max-w-[280px]">
              {companies[active].description}
            </p>

            {/* Spacer to push website to bottom */}
            <div className="flex-1" />

            {/* Website link */}
            <a
              href={companies[active].website}
              className="text-xs tracking-[0.2em] uppercase text-zinc-600 hover:text-zinc-900 transition-colors font-mono border-b border-zinc-300 pb-0.5"
            >
              Website
            </a>
          </div>

          {/* Next ghost card */}
          <div className="hidden lg:flex flex-col items-center gap-4 opacity-30 select-none pointer-events-none w-32">
            <span className="text-sm tracking-[0.2em] uppercase text-zinc-500 font-mono">
              {companies[nextIndex].name}
            </span>
            {companies[nextIndex].logo ? (
              <img
                src={companies[nextIndex].logo}
                alt=""
                className="w-14 h-14 object-contain"
              />
            ) : (
              <div className="w-14 h-14 bg-zinc-400 rounded-sm" />
            )}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            aria-label="Previous company"
            className="w-10 h-10 border border-zinc-400 flex items-center justify-center text-zinc-500 hover:border-zinc-800 hover:text-zinc-800 transition-colors text-base"
          >
            &larr;
          </button>
          <button
            onClick={next}
            aria-label="Next company"
            className="w-10 h-10 border border-zinc-400 flex items-center justify-center text-zinc-500 hover:border-zinc-800 hover:text-zinc-800 transition-colors text-base"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
