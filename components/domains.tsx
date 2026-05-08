import { majorMono, k2d } from "@/lib/fonts";

const domains = [
  {
    id: "001",
    title: "Deep Data Architecture",
    description:
      "Building proprietary data pipelines that surface signal from noise at scale, semantically indexing billions of data points.",
    tags: ["Data Infrastructure", "Semantic Indexing", "Pipeline Engineering"],
  },
  {
    id: "002",
    title: "Small Language Models (SLM)",
    description:
      "Distilling frontier-level reasoning into models under 7B parameters that outperform 70B baselines on domain-specific tasks.",
    tags: ["Model Compression", "Knowledge Distillation", "Edge Inference"],
  },
  {
    id: "003",
    title: "Autonomous Reasoning Architectures",
    description:
      "Multi-step inference engines that decompose novel problems, form hypotheses, and self-correct in real time without supervision.",
    tags: ["Chain-of-Thought", "Self-Correction", "Hypothesis Formation"],
  },
  {
    id: "004",
    title: "Synthetic Data Generation",
    description:
      "Proprietary pipelines producing training data indistinguishable from real-world distributions, closing the data scarcity gap.",
    tags: ["Synthetic Corpora", "Distribution Matching", "Domain Adaptation"],
  },
  {
    id: "005",
    title: "Multi-Agent Emergent Behavior",
    description:
      "Mapping the boundary between programmed behavior and spontaneous cooperation to engineer systems that exploit emergent dynamics.",
    tags: ["Multi-Agent RL", "Emergent Coordination", "Swarm Intelligence"],
  },
  {
    id: "006",
    title: "Compressed Intelligence",
    description:
      "10x size reduction with under 3% accuracy degradation — large-scale capabilities on constrained hardware at production scale.",
    tags: ["Quantization", "Pruning", "LoRA Fine-tuning"],
  },
];

export default function Domains() {
  return (
    <section id="research" className="relative bg-[#f0efed] py-56 pb-[35rem]">
      <img
        src="/images/pixels-3.png"
        className="absolute bottom-0 left-0 w-full z-10"
        alt=""
        aria-hidden="true"
      />

      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#202020] z-20"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 z-10">
        {/* Section header */}
        <div className="mb-6 lg:mb-8">
          <p className="text-xs tracking-widest text-[#202020] mb-4 font-mono">
            02 // DOMAINS_OF_INQUIRY
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={`${majorMono.className} lowercase text-3xl sm:text-4xl md:text-5xl leading-none tracking-normal text-stroke-black`}
              style={{ color: "#202020" }}
            >
              domain of
              <br />
              inquiry
            </h2>
            <p
              className={`${k2d.className} text-zinc-500 text-sm leading-relaxed max-w-md`}
            >
              Our research agenda spans the hardest problems in applied AI from
              deep data infrastructure to emergent model behaviour.
            </p>
          </div>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#21212166]">
          {domains.map((domain) => (
            <DomainCard key={domain.id} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DomainCard({
  domain,
}: {
  domain: {
    id: string;
    title: string;
    description: string;
    tags: string[];
  };
}) {
  return (
    <div className="relative bg-[#F2F2F2] hover:bg-[#212121] border border-[#21212166] p-6 lg:p-8 flex flex-col gap-5 h-[300px] transition-colors duration-300 group">
      {/* Top row: number + arrow */}
      <div className="flex items-start justify-between">
        <span className="text-xs lg:text-xs tracking-widest text-zinc-400 group-hover:text-zinc-500 font-mono transition-colors duration-300">
          {domain.id}
        </span>
        <ArrowUpRight />
      </div>

      {/* Title */}
      <h3
        className={`${k2d.className} text-zinc-900 group-hover:text-white text-2xl leading-none font-semibold tracking-normal transition-colors duration-300`}
      >
        {domain.title}
      </h3>

      {/* Description */}
      <p
        className={`${k2d.className} text-zinc-500 group-hover:text-zinc-300 text-sm leading-relaxed line-clamp-3 flex-1 pr-16 transition-colors duration-300`}
      >
        {domain.description}
      </p>

      {/* Dot grid — vertically centered, right side */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <DotGrid />
      </div>

      {/* Tags — 2 per row */}
      <div className="grid grid-cols-2 gap-1.5 mt-auto">
        {domain.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] tracking-wider uppercase text-zinc-500 group-hover:text-zinc-300 border border-zinc-300 group-hover:border-zinc-600 px-2 py-0.5 font-mono text-center transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom-right corner bracket */}
      <CornerBracket />
    </div>
  );
}

function DotGrid() {
  const cols = 5;
  const rows = 5;
  return (
    <div
      className="shrink-0 self-center"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 5px)`,
        gap: "8px",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div
          key={i}
          className="w-[4px] h-[4px] rounded-full bg-zinc-900 group-hover:bg-white transition-colors duration-300"
        />
      ))}
    </div>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="text-zinc-900 group-hover:text-white shrink-0 transition-colors duration-300"
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CornerBracket() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="absolute bottom-4 right-4 text-zinc-400 group-hover:text-white transition-colors duration-300"
      aria-hidden="true"
    >
      <path
        d="M18 11V18H11"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
