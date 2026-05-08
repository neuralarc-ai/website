"use client";

import { useState } from "react";
import { majorMono, k2d } from "@/lib/fonts";
import Link from "next/link";

const companies = [
  {
    id: "kashew",
    name: "Kashew AI",
    description:
      "AI powered prospecting, pipeline, and relationship intelligence.",
    website: "https://kashew.ai",
    logo: "/kashew-logo.svg",
    hoverBg: "#103C28",
    hoverTextDark: false,
  },
  {
    id: "ninth",
    name: "Ninth",
    description:
      "Venture intelligence for smarter fundraising and introductions.",
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
      className="relative bg-[#f0efed] px-6 min-h-screen flex flex-col justify-center py-24 overflow-hidden"
    >
      <img
        src="/images/pixels-2.png"
        className="absolute top-0 left-0 w-full"
        alt=""
      />
      {/* Left border rail */}
      {/* <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#202020]"
        aria-hidden="true"
      /> */}

      <div className="max-w-6xl mx-auto w-full py-56 pt-96">
        {/* Section label */}
        <p className="text-xs tracking-widest text-[#202020] mb-4 font-mono text-center">
          01 // PORTFOLIO
        </p>

        {/* Heading */}
        <h2
          className={`${majorMono.className} lowercase text-center mb-40 text-3xl sm:text-4xl md:text-5xl leading-none tracking-normal text-stroke-black`}
          style={{ color: "#202020" }}
        >
          Our companies dont just enter
          <br />
          markets they define them
        </h2>

        {/* Two cards side by side */}
        <div className="w-full flex items-center justify-around gap-8 ">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
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
    : "rgba(32,32,32,0.65)";

  const borderColor = hovered ? "transparent" : "#d4d4d8";

  const cornerColor = hovered
    ? company.hoverTextDark
      ? "rgba(0,0,0,0.3)"
      : "rgba(255,255,255,0.5)"
    : "#202020";

  return (
    <div
      className="relative flex flex-col items-center px-10 pt-14 pb-10 min-w-100 min-h-[600px] border transition-all duration-400 ease-in-out cursor-pointer"
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
          className={`absolute ${pos} text-base leading-none select-none font-mono transition-colors duration-300`}
          style={{ color: cornerColor }}
        >
          {["┌", "┐", "└", "┘"][i]}
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
      <div className="mt-14">
        <img
          src={company.logo}
          alt={company.name}
          className="w-24 h-24 object-contain transition-all ease-in-out duration-300"
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
        className={`${k2d.className} text-center max-w-[240px] mt-14 font-normal text-base leading-snug tracking-normal transition-colors duration-300`}
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
