export default function Principles() {
  return (
    <section className="relative bg-[#1a1a1a] text-white px-6 py-32 min-h-screen flex flex-col overflow-hidden">
      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-zinc-700"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        {/* Section label */}
        <p className="text-xs tracking-widest text-zinc-500 mb-12 font-mono">
          03 // OPERATING PRINCIPLES
        </p>

        {/* Manifesto text */}
        <div className="max-w-3xl">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide leading-snug text-white font-mono">
            We do not license our breakthroughs.
            <br />
            We do not outsource our thinking.
            <br />
            Every model we train.
            <br />
            Every system we build.
            <br />
            Every product we ship.
            <br />
            Is ours.
          </p>
        </div>
      </div>

      {/* Planet/moon arc */}
      <div className="absolute bottom-24 right-0 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-t from-zinc-600/30 via-zinc-400/20 to-transparent border-t border-zinc-500/40 shadow-[0_-20px_60px_rgba(255,255,255,0.05)]" />
      </div>
    </section>
  );
}
