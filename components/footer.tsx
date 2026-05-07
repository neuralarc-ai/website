import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white px-6 pt-12 pb-6">
      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-zinc-700"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Main footer row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-8 border-b border-zinc-700">
          {/* Logo + wordmark */}
          <div className="flex items-center gap-4">
            <LogoMark />
            <span className="text-lg tracking-[0.2em] uppercase font-mono font-semibold text-white">
              Fahrenheit
              <br />
              Research
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 flex-wrap">
            <Link
              href="#research"
              className="text-xs tracking-widest text-zinc-400 hover:text-white transition-colors font-mono"
            >
              Research
            </Link>
            <Link
              href="#"
              className="text-xs tracking-widest text-zinc-400 hover:text-white transition-colors font-mono"
            >
              SLM
            </Link>
            <Link
              href="#products"
              className="text-xs tracking-widest text-zinc-400 hover:text-white transition-colors font-mono"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-xs tracking-widest text-zinc-400 hover:text-white transition-colors font-mono"
            >
              Kashew.ai
            </Link>
            <Link
              href="#"
              className="text-xs tracking-widest text-zinc-400 hover:text-white transition-colors font-mono"
            >
              Ninth.vc
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <p className="text-[11px] tracking-wide text-zinc-500 mt-6">
          2025 Fahrenheit Research. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg
      width="40"
      height="28"
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
