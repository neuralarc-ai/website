import { majorMono, k2d } from "@/lib/fonts";

const stats = [
  { value: "10B+", label: "Data points indexed" },
  { value: "47", label: "Proprietary datasets" },
  { value: "99.2%", label: "Annotation accuracy" },
  { value: "12ms", label: "Avg. inference latency" },
];

export default function DeepData() {
  return (
    <section className="relative bg-[#111111] text-white px-6 py-24 min-h-[500px] flex items-center">
      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#F2F2F2]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">

        {/* LEFT */}
        <div className="md:w-[380px] shrink-0">
          <p className="text-xs tracking-widest text-zinc-500 mb-6 font-mono">
            04 // DEEP DATA
          </p>
          <h2
            className={`${majorMono.className} lowercase text-white mb-6 text-3xl sm:text-4xl md:text-5xl leading-none font-bold tracking-[0.04em]`}
          >
            data is
            <br />
            the moat
          </h2>
          <p className={`${k2d.className} text-zinc-400 max-w-[320px] text-base sm:text-lg md:text-xl leading-relaxed`}>
            Years of proprietary data infrastructure, annotation, and enrichment
            power models that perform on real problems with real users.
          </p>
        </div>

        {/* RIGHT — 2×2 stat grid */}
        <div className="flex-1 grid grid-cols-2 border border-zinc-700">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border border-zinc-700 px-8 py-8 flex flex-col gap-2"
            >
              <span className={`${k2d.className} text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-none`}>
                {stat.value}
              </span>
              <span className={`${k2d.className} text-zinc-400 font-normal text-xs leading-snug`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
