export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#f0efed] px-6 text-center">
      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-zinc-300"
        aria-hidden="true"
      />
      {/* Logo mark */}
      <div className="mb-24">
        <LogoMark />
      </div>

      {/* Wordmark */}
      <h1
        className="text-[clamp(2.5rem,8vw,6rem)] font-light tracking-[0.25em] uppercase text-zinc-800 leading-tight"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        Fahrenheit
        <br />
        Research
      </h1>

      {/* Tagline */}
      <p className="mt-8 text-sm tracking-wide text-zinc-500 leading-relaxed">
        We build intelligence at the edge of what is known.
        <br />
        Our research becomes product.
      </p>
    </section>
  );
}

function LogoMark() {
  return (
    <svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fahrenheit Research logo mark"
    >
      {/* Three stacked horizontal bars, offset like the screenshot */}
      <rect x="0" y="0" width="48" height="4" rx="2" fill="#2a2a2a" />
      <rect x="6" y="12" width="42" height="4" rx="2" fill="#2a2a2a" />
      <rect x="0" y="24" width="36" height="4" rx="2" fill="#2a2a2a" />
    </svg>
  );
}
