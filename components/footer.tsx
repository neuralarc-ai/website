import Link from "next/link";
import { majorMono } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden">

      {/* Left border rail */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-[#F2F2F2]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 min-h-[600px] flex flex-col justify-end px-6 pb-8 max-w-6xl mx-auto w-full">

        {/* Bottom row: logo + nav */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pb-6 border-b border-zinc-700/50">

          {/* Logo + wordmark */}
          <div className="flex items-center gap-4">
            <LogoMark />
            <span
              className={`${majorMono.className} text-white lowercase leading-tight text-xl tracking-[0.06em]`}
            >
              fahrenheit
              <br />
              research
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 flex-wrap">
            {["Research", "SLM", "Products", "Kashew.ai", "Ninth.vc"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs tracking-widest text-zinc-300 hover:text-white transition-colors font-mono"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <p className="text-[11px] tracking-wide text-zinc-500 mt-6 font-mono">
          2025 Fahrenheit Research. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg
      width="48"
      height="34"
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fahrenheit Research logo"
    >
      <rect x="0" y="0" width="48" height="4" rx="2" fill="white" />
      <rect x="6" y="12" width="42" height="4" rx="2" fill="white" />
      <rect x="0" y="24" width="36" height="4" rx="2" fill="white" />
    </svg>
  );
}
