import Link from "next/link";
import { majorMono } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="relative bg-[#212121] text-white overflow-hidden">
      {/* Left border rail — stops at horizontal line, not below */}
      {/* <div
        className="absolute left-16 top-0 w-px bg-[#F2F2F2]"
        style={{ bottom: "calc(1px + 2.75rem)" }}
        aria-hidden="true"
      /> */}

      <img
        src="/images/planet.svg"
        alt="Planet"
        className="absolute translate-x-180 -translate-y-60 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="min-h-[80dvh] flex flex-col justify-end w-full">
        {/* Bottom row: logo + nav */}
        <div className="flex w-full items-end justify-between gap-8 pb-6 px-28 z-10">
          {/* Logo + wordmark */}
          <div className="flex items-center gap-4">
            <img
              src="/images/logo-white-big.svg"
              alt=""
              className="w-20 h-auto"
            />
            <span
              className={`${majorMono.className} text-white lowercase leading-tight text-4xl tracking-[0.06em] text-stroke`}
            >
              fahrenheit
              <br />
              research
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 flex-wrap">
            {[
              { label: "Research", href: "#research" },
              { label: "Products", href: "#products" },
              { label: "Contact", href: "#contact" },
              { label: "Kashew.ai", href: "https://kashew.ai", external: true },
              { label: "Ninth.vc", href: "https://ninth.vc", external: true },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-xs tracking-widest text-zinc-300 hover:text-white transition-colors font-mono"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Full-width divider above copyright */}
        <div className="w-full h-px bg-[#F2F2F2] z-10" aria-hidden="true" />

        {/* Copyright */}
        <p className="text-[11px] tracking-wide text-zinc-500 mt-3 mb-4 font-mono px-28 z-10">
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
