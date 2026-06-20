"use client";

import { useState } from "react";
import { majorMono, k2d } from "@/lib/fonts";
import Link from "next/link";
import { PixelFloat } from "./PixelFloat";
import { GlitchImage } from "./GlitchImage";

const companies = [
  {
    id: "kashew",
    name: "Kashew AI",
    description:
      "AI powered prospecting, pipeline,\nand relationship intelligence.\nTurn signals into pipeline.\nAutomate outreach at scale.\nSmarter deals, faster closes.",
    website: "https://kashew.ai",
    logo: "/kashew-logo.svg",
    hoverBg: "#103C28",
    hoverTextDark: false,
  },
  {
    id: "ninth",
    name: "Ninth",
    description:
      "Venture intelligence for smarter\nfundraising and introductions.\nData-driven dealflow, simplified.\nConnect with the right investors.\nBuild networks that compound.",
    website: "https://ninth.vc",
    logo: "/ninth-logo.svg",
    hoverBg: "linear-gradient(to bottom, #FBC439, #F47437)",
    hoverTextDark: true,
  },
];

export default function Portfolio() {
  return (
    <section
      id="products"
      className="relative bg-[#f0efed] px-4 sm:px-6 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen overflow-hidden"
    >
      {/* Top pixel pattern */}
      <img
        src="/images/pixels-2.png"
        alt=""
        className="absolute top-0 left-0 w-full max-h-[100px] sm:max-h-[140px] md:max-h-[180px] lg:max-h-[220px] xl:max-h-none object-cover object-top"
        style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.18) 0px 4px 8px)" }}
      />

      {/* Left border rail */}
      {/* <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#202020]"
        aria-hidden="true"
      /> */}

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-10 pt-32 sm:pt-40 md:pt-48 lg:pt-64 xl:pt-80">
        {/* Two-column layout: text left, cards right */}
        <div className="flex flex-col xl:flex-row xl:items-start xl:gap-24 gap-8 sm:gap-12">
          {/* Left side: section label + heading */}
          <div className="xl:w-2/5 flex-shrink-0">
            {/* Section label */}
            <p className="text-[10px] sm:text-xs tracking-widest text-[#202020] mb-3 sm:mb-4 font-mono">
              03 // PORTFOLIO
            </p>

            {/* Heading */}
            <h2
              className={`${majorMono.className} lowercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-normal text-stroke-black text-[#202020]`}
            >
              Products that
              <br />
              define markets
            </h2>
          </div>

          {/* Right side: cards */}
          <div className="xl:w-3/5 flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-4 lg:gap-8 w-full">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyCard({
  company,
}: {
  company: {
    id: string;
    name: string;
    description: string;
    website: string;
    logo: string;
    hoverBg: string;
    hoverTextDark: boolean;
  };
}) {
  const [hovered, setHovered] = useState(false);

  const bgStyle = hovered
    ? company.hoverBg.startsWith("linear")
      ? { background: company.hoverBg }
      : { backgroundColor: company.hoverBg }
    : { backgroundColor: "#ffffff" };

  const textColor = hovered
    ? company.hoverTextDark
      ? "#202020"
      : "#ffffff"
    : "#202020";

  const mutedColor = hovered
    ? company.hoverTextDark
      ? "rgba(32,32,32,0.7)"
      : "rgba(255,255,255,0.75)"
    : "#71717a";

  const borderColor = hovered ? "transparent" : "#d4d4d8";

  const cornerColor = hovered
    ? company.hoverTextDark
      ? "rgba(0,0,0,0.3)"
      : "rgba(255,255,255,0.5)"
    : "#202020";

  return (
    <div
      className="relative flex flex-col items-center px-4 sm:px-6 pt-6 sm:pt-8 pb-4 sm:pb-6 w-full sm:flex-1 sm:min-w-0 xl:min-w-[240px] min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] border transition-all duration-400 ease-in-out cursor-pointer"
      style={{ ...bgStyle, borderColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner brackets */}
      {[
        "top-4 left-4",
        "top-4 right-4",
        "bottom-4 left-4",
        "bottom-4 right-4",
      ].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} w-4 h-4 transition-colors duration-300`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {i === 0 && <path d="M0 16V0H16" stroke={cornerColor} strokeWidth="2.5" />}
            {i === 1 && <path d="M16 16V0H0" stroke={cornerColor} strokeWidth="2.5" />}
            {i === 2 && <path d="M0 0V16H16" stroke={cornerColor} strokeWidth="2.5" />}
            {i === 3 && <path d="M16 0V16H0" stroke={cornerColor} strokeWidth="2.5" />}
          </svg>
        </span>
      ))}

      {/* Company name */}
      <p
        className={`${majorMono.className} lowercase text-center text-2xl leading-none tracking-normal transition-colors duration-300`}
        style={{
          color: "transparent",
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: textColor,
        }}
      >
        {company.name}
      </p>

      {/* Logo */}
      <div className="mt-6">
        <img
          src={company.logo}
          alt={company.name}
          className="w-10 h-10 object-contain transition-all ease-in-out duration-300"
          style={{
            filter:
              hovered && !company.hoverTextDark
                ? "brightness(0) invert(1)"
                : "none",
          }}
        />
      </div>

      {/* Description */}
      <p
        className={`${k2d.className} text-center max-w-[240px] mt-6 font-normal text-xs leading-snug tracking-normal transition-colors duration-300 whitespace-pre-line`}
        style={{ color: mutedColor }}
      >
        {company.description}
      </p>

      <div className="flex-1" />

      {/* Website link */}
      <Link
        target="_blank"
        href={company.website}
        className="text-xs tracking-[0.2em] uppercase font-mono pb-0.5 transition-colors duration-300 border-b"
        style={{
          color: mutedColor,
          borderBottomColor: hovered
            ? company.hoverTextDark
              ? "rgba(0,0,0,0.3)"
              : "rgba(255,255,255,0.4)"
            : "#d4d4d8",
        }}
      >
        Website
      </Link>
    </div>
  );
}
