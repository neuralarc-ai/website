import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-8 py-5 bg-[#f0efed]">
      {/* Centered nav links */}
      <nav className="flex items-center gap-8">
        <Link
          href="#research"
          className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
        >
          Research
        </Link>
        <Link
          href="#products"
          className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
        >
          Products
        </Link>
        <Link
          href="#about"
          className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
