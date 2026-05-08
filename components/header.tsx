import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-8 py-5 bg-[#f0efed]">
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#202020]"
        aria-hidden="true"
      />
      {/* Centered nav links */}
      {/* <nav className="flex items-center gap-8">
        <Link
          href="#research"
          className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
        >
          Research
        </Link>
        <Link
          href="#products"
          className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
        >
          Products
        </Link>
        <Link
          href="#about"
          className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
        >
          Contact
        </Link>
      </nav> */}
      <img src="/images/logo-black.svg" alt="" />
    </header>
  );
}
