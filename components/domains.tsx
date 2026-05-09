"use client";

import { majorMono, k2d } from "@/lib/fonts";
import { useState } from "react";

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
    <section
      id="research"
      className="relative bg-[#f0efed] py-20 pb-56 md:py-32 md:pb-[30rem]"
    >
      <img
        src="/images/pixels-3.png"
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
        alt=""
        aria-hidden="true"
      />

      {/* Left border rail */}
      {/* <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#202020] z-20"
        aria-hidden="true"
      /> */}

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 z-10">
        {/* Section header */}
        <div className="mb-6 lg:mb-8">
          <p className="text-xs tracking-widest text-[#202020] mb-4 font-mono">
            02 // DOMAINS_OF_INQUIRY
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={`${majorMono.className} lowercase text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-none tracking-normal text-stroke-black text-[#202020]`}
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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative border border-[#21212166] p-5 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5 min-h-[280px] sm:h-[300px] transition-colors duration-300"
      style={{ backgroundColor: hovered ? "#212121" : "#F2F2F2" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row: number + arrow */}
      <div className="flex items-start justify-between">
        <span
          className="text-xs tracking-widest font-mono transition-colors duration-300"
          style={{ color: hovered ? "#71717a" : "#a1a1aa" }}
        >
          {domain.id}
        </span>
        <ArrowUpRight hovered={hovered} />
      </div>

      {/* Title */}
      <h3
        className={`${k2d.className} text-xl sm:text-2xl leading-tight sm:leading-none font-semibold tracking-normal transition-colors duration-300`}
        style={{ color: hovered ? "#ffffff" : "#18181b" }}
      >
        {domain.title}
      </h3>

      {/* Description */}
      <p
        className={`${k2d.className} text-sm leading-relaxed line-clamp-3 flex-1 pr-4 sm:pr-16 transition-colors duration-300`}
        style={{ color: hovered ? "#d4d4d8" : "#71717a" }}
      >
        {domain.description}
      </p>

      {/* Dot grid — vertically centered, right side */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 hidden sm:block">
        <DotGrid hovered={hovered} />
      </div>

      {/* Tags — 2 per row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-1.5 mt-auto">
        {domain.tags.map((tag) => (
          <span
            key={tag}
            className="text-[8px] sm:text-[9px] tracking-wider uppercase px-1.5 sm:px-2 py-0.5 font-mono text-center transition-colors duration-300"
            style={{
              color: hovered ? "#d4d4d8" : "#71717a",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: hovered ? "#52525b" : "#d4d4d8",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom-right corner bracket */}
      <CornerBracket hovered={hovered} />
    </div>
  );
}

function DotGrid({ hovered }: { hovered: boolean }) {
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
          className="w-[4px] h-[4px] rounded-full transition-colors duration-300"
          style={{ backgroundColor: hovered ? "#ffffff" : "#18181b" }}
        />
      ))}
    </div>
  );
}

function ArrowUpRight({ hovered }: { hovered: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0 transition-colors duration-300"
      style={{ color: hovered ? "#ffffff" : "#18181b" }}
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CornerBracket({ hovered }: { hovered: boolean }) {
  const fill = hovered ? "#ffffff" : "#212121";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="absolute bottom-4 right-4"
      aria-hidden="true"
    >
      <rect x="9" y="0" width="7" height="10" fill={fill} />
      <rect x="0" y="7" width="12" height="7" fill={fill} />
    </svg>
  );
}
