"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { majorMono, k2d } from "@/lib/fonts";

const domains = [
  {
    id: "001",
    title: "Deep Data Architecture",
    status: "Active",
    description:
      "Building proprietary data pipelines that surface signal from noise at scale. Our deep data systems ingest, structure, and semantically index billions of data points — creating training substrates that give our models an unfair advantage over any competitor relying on public datasets.",
    tags: ["Data Infrastructure", "Semantic Indexing", "Pipeline Engineering"],
  },
  {
    id: "002",
    title: "Small Language Models (SLM)",
    status: "Active",
    description:
      "Distilling frontier-level reasoning into models small enough to run on constrained hardware. Intelligence does not require scale — it requires precision. We build models under 7B parameters that outperform 70B baselines on domain-specific tasks. The future of AI is not bigger. It is smarter.",
    tags: ["Model Compression", "Knowledge Distillation", "Edge Inference"],
  },
  {
    id: "003",
    title: "Autonomous Reasoning Architectures",
    status: "Active",
    description:
      "Systems that reason without supervision. Multi-step inference engines that decompose novel problems, form hypotheses, and self-correct in real time — without human-in-the-loop dependencies at inference time.",
    tags: ["Chain-of-Thought", "Self-Correction", "Hypothesis Formation"],
  },
  {
    id: "004",
    title: "Synthetic Data Generation",
    status: "Deployed",
    description:
      "Proprietary pipelines that produce training data indistinguishable from real-world distributions. Models trained on our synthetic sets consistently outperform baselines — closing the data scarcity gap for niche domains where labeled data does not exist.",
    tags: ["Synthetic Corpora", "Distribution Matching", "Domain Adaptation"],
  },
  {
    id: "005",
    title: "Multi-Agent Emergent Behavior",
    status: "Active",
    description:
      "Studying how coordinated intelligence arises from independent agents. Mapping the boundary between programmed behavior and spontaneous cooperation — and engineering systems that exploit emergent dynamics for real-world tasks.",
    tags: ["Multi-Agent RL", "Emergent Coordination", "Swarm Intelligence"],
  },
  {
    id: "006",
    title: "Compressed Intelligence",
    status: "Shipped",
    description:
      "Distilling large-scale model capabilities into architectures small enough to run on constrained hardware without meaningful performance loss. Our compression techniques achieve 10x size reduction with under 3% accuracy degradation on production benchmarks.",
    tags: ["Quantization", "Pruning", "LoRA Fine-tuning"],
  },
];

const CARD_GAP = 16;

export default function Domains() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardListRef = useRef<HTMLDivElement>(null);
  const cardWindowRef = useRef<HTMLDivElement>(null);

  const [translateY, setTranslateY] = useState(0);
  const [totalScroll, setTotalScroll] = useState(2000);

  // Measure actual DOM heights and compute totalScroll
  const measure = useCallback(() => {
    const list = cardListRef.current;
    const win = cardWindowRef.current;
    if (!list || !win) return;
    const listH = list.scrollHeight;
    const winH = win.clientHeight;
    // How much we need to scroll the list so the last card's bottom aligns with window bottom
    const needed = Math.max(listH - winH, 0);
    setTotalScroll(needed);
  }, []);

  useEffect(() => {
    // Measure after fonts/layout settle
    const t = setTimeout(measure, 200);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);
      setTranslateY(scrolled);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalScroll]);

  // Active card index for progress dots
  const activeIndex = Math.min(
    Math.floor((translateY / Math.max(totalScroll, 1)) * domains.length),
    domains.length - 1
  );

  return (
    <div
      id="research"
      ref={wrapperRef}
      style={{ height: `calc(100vh + ${totalScroll}px)` }}
      className="relative bg-[#f0efed]"
    >
      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#000000] z-20"
        aria-hidden="true"
      />

      {/* Sticky viewport panel */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-6 lg:px-16 flex gap-16 lg:gap-24 xl:gap-32 items-start py-16 lg:py-24">

          {/* LEFT: sticky title */}
          <div className="w-[260px] lg:w-[340px] xl:w-[420px] shrink-0 pt-2">
            <p className="text-xs tracking-widest text-zinc-400 mb-4 font-mono">
              02 // DOMAINS_OF_INQUIRY
            </p>
            <h2
              className={`${majorMono.className} lowercase text-zinc-900 text-3xl sm:text-4xl md:text-5xl leading-none font-bold tracking-normal`}
            >
              domain of
              <br />
              inquiry
            </h2>
            <p className={`${k2d.className} text-zinc-500 mt-4 text-base sm:text-lg md:text-xl leading-relaxed`}>
              Our research agenda spans the hardest problems in applied AI
              from deep data infrastructure to emergent model behaviour.
            </p>
          </div>

          {/* RIGHT: scrolling card column — capped height so scroll animation always works */}
          <div ref={cardWindowRef} className="flex-1 overflow-hidden relative h-[560px] lg:h-[640px] xl:h-[700px]">
            <div
              ref={cardListRef}
              style={{
                transform: `translateY(-${translateY}px)`,
                willChange: "transform",
                display: "flex",
                flexDirection: "column",
                gap: `${CARD_GAP}px`,
                maxWidth: "100%",
              }}
            >
              {domains.map((domain) => (
                <DomainCard key={domain.id} domain={domain} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function DomainCard({
  domain,
}: {
  domain: { id: string; title: string; status: string; description: string; tags: string[] };
}) {
  return (
    <div className="shrink-0 w-full bg-[#F2F2F2] border border-[#212121] p-6 lg:p-8 flex flex-col gap-4">
      {/* Top row: number + status */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] lg:text-xs tracking-widest text-zinc-400 font-mono uppercase">
            {domain.id}
          </span>
          <span className="text-[10px] lg:text-xs border border-zinc-400 text-zinc-500 px-2 py-0.5 font-mono tracking-wider">
            {domain.status}
          </span>
        </div>
        <ArrowUpRight />
      </div>

      {/* Title */}
      <h3 className={`${k2d.className} text-zinc-900 text-2xl lg:text-3xl xl:text-4xl leading-tight font-semibold`}>
        {domain.title}
      </h3>

      {/* Description */}
      <p className={`${k2d.className} text-zinc-500 text-sm lg:text-base xl:text-lg leading-relaxed`}>
        {domain.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {domain.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] lg:text-[10px] tracking-wider uppercase text-zinc-500 border border-zinc-300 px-2 py-0.5 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-zinc-400">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
