"use client";

import { useState } from "react";
import Link from "next/link";
import { majorMono, k2d } from "@/lib/fonts";
import { GlitchImage } from "./GlitchImage";
import { PixelFloat } from "./PixelFloat";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const models = [
  {
    id: "forge",
    nameLine1: "FR-Forge",
    nameLine2: "1.7B",
    fullName: "FR-Forge-1.7B",
    subtitle: "Precision Intelligence for the Factory Floor",
    type: "TLM · Manufacturing",
    gridColor: "#60A5FA",
    hoverBg: "#202020",
    hoverText: "#ffffff",
    href: "/models/forge" as string | null,
  },
  {
    id: "lex",
    nameLine1: "FR-Lex",
    nameLine2: "1.7B",
    fullName: "FR-Lex-1.7B",
    subtitle: "Thin Language Model for Legal Reasoning",
    type: "TLM · Law",
    gridColor: "#F87171",
    hoverBg: "#202020",
    hoverText: "#ffffff",
    href: "/models/lex" as string | null,
  },
];

export default function Models() {
  return (
    <section
      id="models"
      className="relative bg-[#f0efed] px-6 min-h-screen flex flex-col justify-center py-24 overflow-hidden"
    >
      {/* Top pixel pattern — connects with Hero's bottom pattern */}
      <GlitchImage
        src="/images/pixels-2.png"
        className="absolute top-0 left-0 w-full"
        alt=""
        align="top"
      />
      <PixelFloat count={40} color="#202020" />

      <div className="relative z-10 max-w-6xl mx-auto w-full py-20 pt-32 lg:py-32 lg:pt-48">
        {/* Section label */}
        <p className="text-xs tracking-widest text-[#202020] mb-4 font-mono text-center">
          01 // MODELS
        </p>

        {/* Heading */}
        <h2
          className={`${majorMono.className} lowercase text-center mb-16 lg:mb-40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none tracking-normal text-stroke-black`}
          style={{ color: "#202020" }}
        >
          Thin language models
          <br />
          built for the real world
        </h2>

        {/* Two square cards */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-8">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelCard({
  model,
}: {
  model: {
    id: string;
    nameLine1: string;
    nameLine2: string;
    fullName: string;
    subtitle: string;
    type: string;
    gridColor: string;
    hoverBg: string;
    hoverText: string;
    href: string | null;
  };
}) {
  const [hovered, setHovered] = useState(false);

  const bgColor = hovered ? model.hoverBg : "#ffffff";
  const textColor = hovered ? model.hoverText : "#202020";
  const mutedColor = hovered ? "rgba(255,255,255,0.6)" : "#71717a";
  const borderColor = hovered ? "transparent" : "#d4d4d8";
  const cornerColor = hovered ? "rgba(255,255,255,0.4)" : "#202020";
  const tagBorderColor = hovered ? "rgba(255,255,255,0.25)" : "#d4d4d8";
  const tagTextColor = hovered ? "rgba(255,255,255,0.7)" : "#71717a";

  const inner = (
    <>
      {/* Corner brackets */}
      {(["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"] as const).map(
        (pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} text-base leading-none select-none font-mono transition-colors duration-300 z-20`}
            style={{ color: cornerColor }}
          >
            {["┌", "┐", "└", "┘"][i]}
          </span>
        )
      )}

      {/* Upper area: circular flickering pattern + model name */}
      <div className="relative flex-1 flex items-center justify-center min-h-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <FlickeringGrid
            className="mask-[radial-gradient(220px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color={model.gridColor}
            maxOpacity={hovered ? 0.65 : 0.45}
            flickerChance={0.1}
            width={440}
            height={440}
          />
        </div>

        <div className="relative z-10 text-center select-none">
          <p
            className={`${majorMono.className} lowercase leading-none tracking-wide`}
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "transparent",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: textColor,
              transition: "color 0.3s, -webkit-text-stroke-color 0.3s",
            }}
          >
            {model.nameLine1}
            <br />
            {model.nameLine2}
          </p>
        </div>
      </div>

      {/* Bottom info area */}
      <div className="relative z-10 flex flex-col items-center gap-3 pb-10 px-8">
        <span
          className="text-[9px] tracking-[0.25em] uppercase font-mono px-3 py-1 border transition-colors duration-300"
          style={{ borderColor: tagBorderColor, color: tagTextColor }}
        >
          MODELS
        </span>

        <p
          className={`${k2d.className} text-center text-sm leading-snug transition-colors duration-300`}
          style={{ color: textColor }}
        >
          {model.fullName}: {model.subtitle}
        </p>

        <p
          className="font-mono text-[10px] tracking-widest transition-colors duration-300"
          style={{ color: mutedColor }}
        >
          {model.type}
        </p>
      </div>
    </>
  );

  const sharedClassName =
    "relative flex flex-col w-full lg:w-auto lg:min-w-100 lg:max-w-115 aspect-square border transition-all duration-400 ease-in-out cursor-pointer overflow-hidden";

  if (model.href) {
    return (
      <Link
        href={model.href}
        className={sharedClassName}
        style={{ backgroundColor: bgColor, borderColor }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div
      className={sharedClassName}
      style={{ backgroundColor: bgColor, borderColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </div>
  );
}
