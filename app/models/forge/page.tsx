"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { k2d } from "@/lib/fonts";

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How it works" },
  { id: "specifications", label: "Specifications" },
  { id: "intended-use", label: "Intended use" },
  { id: "evaluation", label: "Evaluation" },
  { id: "limitations", label: "Limitations" },
  { id: "training", label: "Training" },
  { id: "get-started", label: "Get Started" },
];

/* ─── TLM Positioning Chart ────────────────────────────────────────────────── */

function TLMPositioningChart() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-5">
        Where a Thin Language Model fits
      </p>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 480 270" className="w-full max-w-[440px]" aria-label="TLM positioning quadrant chart">
          {[160, 260, 360].map((x) => (
            <line key={x} x1={x} y1={24} x2={x} y2={240} stroke="#f4f4f5" strokeWidth="1" />
          ))}
          {[80, 140, 190].map((y) => (
            <line key={y} x1={72} y1={y} x2={450} y2={y} stroke="#f4f4f5" strokeWidth="1" />
          ))}

          <line x1={72} y1={240} x2={448} y2={240} stroke="#d4d4d8" strokeWidth="1.5" />
          <polygon points="446,235 453,240 446,245" fill="#d4d4d8" />
          <text x={456} y={244} textAnchor="start" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            generality
          </text>

          <line x1={72} y1={240} x2={72} y2={24} stroke="#d4d4d8" strokeWidth="1.5" />
          <polygon points="67,26 72,19 77,26" fill="#d4d4d8" />
          <text x={16} y={130} textAnchor="middle" fontSize="10" fill="#a1a1aa" fontFamily="monospace" transform="rotate(-90 16 130)">
            specialization
          </text>

          {/* FR-Forge dot */}
          <circle
            cx={128} cy={72}
            r={hovered === "frforge" ? 11 : 8}
            fill={hovered === "frforge" ? "#2563eb" : "#60A5FA"}
            style={{ transition: "r 0.15s ease, fill 0.15s ease", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frforge")}
            onMouseLeave={() => setHovered(null)}
          />
          <text x={146} y={66} fontSize="12" fontWeight="600" fill="#202020">FR-Forge 1.7B</text>
          <text x={146} y={82} fontSize="10" fill="#71717a" fontFamily="monospace">narrow · local · cheap</text>

          {/* Frontier LLM dot */}
          <circle
            cx={392} cy={192}
            r={hovered === "frontier" ? 11 : 8}
            fill={hovered === "frontier" ? "#4f46e5" : "#818cf8"}
            style={{ transition: "r 0.15s ease, fill 0.15s ease", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frontier")}
            onMouseLeave={() => setHovered(null)}
          />
          <text x={304} y={216} fontSize="12" fontWeight="600" fill="#202020">Frontier LLM</text>
          <text x={304} y={232} fontSize="10" fill="#71717a" fontFamily="monospace">broad · hosted · costly</text>

          {hovered === "frforge" && (
            <g>
              <rect x={90} y={40} width={152} height={24} rx={4} fill="#202020" />
              <text x={166} y={56} textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">
                1.7B params · Apple Silicon
              </text>
            </g>
          )}
          {hovered === "frontier" && (
            <g>
              <rect x={320} y={162} width={140} height={24} rx={4} fill="#202020" />
              <text x={390} y={178} textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">
                100B+ params · cloud API
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

/* ─── Manufacturing Flow Diagram ─────────────────────────────────────────────── */

function ManufacturingFlowDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  const pillars = [
    {
      id: "ops",
      label: "Ops & Maintenance",
      sub1: "SOPs · PM/PdM · OEE",
      sub2: "troubleshooting",
      y: 196,
    },
    {
      id: "quality",
      label: "Quality & Compliance",
      sub1: "ISO 9001 · IATF 16949 · FDA/GMP",
      sub2: "CAPA · FMEA · SPC",
      y: 254,
    },
    {
      id: "supply",
      label: "Supply Chain & Planning",
      sub1: "MRP/ERP · BOMs · inventory",
      sub2: "demand planning",
      y: 316,
    },
  ];

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-5">
        Processing pipeline
      </p>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 640 430" className="w-full min-w-[500px]" aria-label="FR-Forge manufacturing flow">
          <defs>
            <marker id="forge-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#a1a1aa" />
            </marker>
          </defs>

          {/* Input box */}
          <rect x={170} y={12} width={260} height={44} rx={5} fill="#f9f9f9" stroke="#d4d4d8" strokeWidth="1.5" />
          <text x={300} y={30} textAnchor="middle" fontSize="12" fill="#71717a" fontFamily="monospace">Manufacturing question</text>
          <text x={300} y={47} textAnchor="middle" fontSize="9" fill="#a1a1aa" fontFamily="monospace">+ context / document (optional)</text>

          {/* Arrow 1 */}
          <line x1={300} y1={56} x2={300} y2={86} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#forge-arr)" />

          {/* FR-Forge box */}
          <rect
            x={140} y={90} width={320} height={52} rx={7}
            fill={hovered === "frforge" ? "#eff6ff" : "white"}
            stroke={hovered === "frforge" ? "#60A5FA" : "#202020"}
            strokeWidth="2"
            style={{ transition: "fill 0.2s, stroke 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frforge")}
            onMouseLeave={() => setHovered(null)}
          />
          <text
            x={300} y={113} textAnchor="middle" fontSize="14" fontWeight="bold"
            fill={hovered === "frforge" ? "#1d4ed8" : "#202020"}
            style={{ transition: "fill 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frforge")}
            onMouseLeave={() => setHovered(null)}
          >
            FR-Forge 1.7B
          </text>
          <text
            x={300} y={131} textAnchor="middle" fontSize="10" fill="#71717a" fontFamily="monospace"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("frforge")}
            onMouseLeave={() => setHovered(null)}
          >
            reasons across three pillars
          </text>

          {/* Vertical stem from FR-Forge to below last pillar */}
          <line x1={300} y1={142} x2={300} y2={334} stroke="#a1a1aa" strokeWidth="1.5" />

          {/* Three pillar branches */}
          {pillars.map((pillar, i) => {
            const isLast = i === pillars.length - 1;
            const isHovered = hovered === pillar.id;
            return (
              <g key={pillar.id}>
                {/* junction dot */}
                <circle cx={300} cy={pillar.y} r={3} fill="#a1a1aa" />
                {/* horizontal branch line */}
                <line
                  x1={300} y1={pillar.y} x2={348} y2={pillar.y}
                  stroke={isHovered ? "#60A5FA" : "#a1a1aa"} strokeWidth="1.5"
                  style={{ transition: "stroke 0.15s" }}
                />
                {/* branch marker text */}
                <text x={344} y={pillar.y - 2} textAnchor="start" fontSize="9" fill="#c4c4c8" fontFamily="monospace">
                  {isLast ? "└─" : "├─"}
                </text>
                {/* hover overlay rect */}
                <rect
                  x={348} y={pillar.y - 22} width={274} height={44}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHovered(pillar.id)}
                  onMouseLeave={() => setHovered(null)}
                />
                {/* pillar label */}
                <text
                  x={360} y={pillar.y - 6}
                  fontSize="12" fontWeight="600"
                  fill={isHovered ? "#1d4ed8" : "#202020"}
                  style={{ transition: "fill 0.15s" }}
                >
                  {pillar.label}
                </text>
                {/* sub-label line 1 */}
                <text x={360} y={pillar.y + 10} fontSize="9" fill="#71717a" fontFamily="monospace">
                  {pillar.sub1}
                </text>
                {/* sub-label line 2 */}
                <text x={360} y={pillar.y + 22} fontSize="9" fill="#a1a1aa" fontFamily="monospace">
                  {pillar.sub2}
                </text>
              </g>
            );
          })}

          {/* Arrow to output */}
          <line x1={300} y1={334} x2={300} y2={360} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#forge-arr)" />

          {/* Output box */}
          <rect x={140} y={364} width={320} height={48} rx={5} fill="#202020" />
          <text x={300} y={385} textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Grounded, local answer</text>
          <text x={300} y={401} textAnchor="middle" fontSize="9" fill="#8b8b9a" fontFamily="monospace">
            verify exact clauses against the controlling standard
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ─── Evaluation Chart ───────────────────────────────────────────────────────── */

function EvaluationChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rows = [
    { label: "Ops & Maintenance", score: 92.9, overall: false },
    { label: "Quality & Compliance", score: 70.8, overall: false },
    { label: "Supply Chain & Planning", score: 83.3, overall: false },
    { label: "Overall", score: 82.3, overall: true },
  ];

  return (
    <div ref={ref} className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-6">
        Held-out eval, keyword rubric (% coverage)
      </p>
      <div className="space-y-5 mb-8">
        {rows.map((row, i) => (
          <div key={row.label}>
            {row.overall && <div className="border-t border-zinc-200 mb-5" />}
            <div className="flex justify-between items-baseline mb-2">
              <span className={`${k2d.className} text-sm ${row.overall ? "font-semibold text-zinc-900" : "text-zinc-700"}`}>
                {row.label}
              </span>
              <span className="font-mono text-sm text-zinc-500">{row.score}%</span>
            </div>
            <div className="h-[6px] bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: animated ? `${row.score}%` : "0%",
                  backgroundColor: row.overall ? "#202020" : "#60A5FA",
                  transition: `width 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.12}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Score table */}
      <div className="border border-zinc-200 overflow-hidden rounded-lg">
        <div className="grid grid-cols-2 bg-zinc-50 border-b border-zinc-200">
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 px-4 py-2.5">Pillar</span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 px-4 py-2.5">Score</span>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-2 ${i < rows.length - 1 ? "border-b border-zinc-100" : ""} ${row.overall ? "bg-zinc-50" : ""}`}
          >
            <span className={`${k2d.className} text-sm px-4 py-3 ${row.overall ? "font-semibold text-zinc-900" : "text-zinc-700"}`}>
              {row.label}
            </span>
            <span className={`font-mono text-sm px-4 py-3 ${row.overall ? "font-semibold text-zinc-900" : "text-zinc-600"}`}>
              {row.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Training Flow ──────────────────────────────────────────────────────────── */

function TrainingFlow() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-5">
        Training pipeline
      </p>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 680 148" className="w-full min-w-[560px]" aria-label="Training pipeline flow">
          <defs>
            <marker id="forge-train-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#a1a1aa" />
            </marker>
          </defs>

          {/* Data source box */}
          <rect
            x={8} y={16} width={160} height={112} rx={5}
            fill={hovered === "data" ? "#eff6ff" : "#f9f9f9"}
            stroke={hovered === "data" ? "#60A5FA" : "#d4d4d8"}
            strokeWidth="1.5"
            style={{ transition: "fill 0.2s, stroke 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("data")}
            onMouseLeave={() => setHovered(null)}
          />
          <text x={88} y={34} textAnchor="middle" fontSize="10" fontWeight="600" fill="#202020" style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("data")} onMouseLeave={() => setHovered(null)}>
            261 instruction pairs
          </text>
          <line x1={18} y1={40} x2={158} y2={40} stroke="#e4e4e7" strokeWidth="1" />
          <text x={24} y={55} fontSize="9" fill="#71717a" fontFamily="monospace" style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("data")} onMouseLeave={() => setHovered(null)}>
            110  ops &amp; maintenance
          </text>
          <text x={24} y={72} fontSize="9" fill="#71717a" fontFamily="monospace" style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("data")} onMouseLeave={() => setHovered(null)}>
            100  quality &amp; compliance
          </text>
          <text x={24} y={89} fontSize="9" fill="#71717a" fontFamily="monospace" style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("data")} onMouseLeave={() => setHovered(null)}>
             51  supply chain
          </text>
          <text x={24} y={110} fontSize="8" fill="#a1a1aa" fontFamily="monospace" style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("data")} onMouseLeave={() => setHovered(null)}>
            paraphrased + synthetic
          </text>

          {/* Arrow to LoRA */}
          <line x1={168} y1={72} x2={196} y2={72} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#forge-train-arr)" />

          {/* LoRA box */}
          <rect x={200} y={52} width={140} height={40} rx={5} fill="#faf5ff" stroke="#d8b4fe" strokeWidth="1.5" />
          <text x={270} y={69} textAnchor="middle" fontSize="11" fontWeight="600" fill="#7c3aed">LoRA fine-tune</text>
          <text x={270} y={83} textAnchor="middle" fontSize="9" fill="#9333ea" fontFamily="monospace">MLX · iters 800 · lr 1e-5</text>

          {/* Arrow to fuse */}
          <line x1={340} y1={72} x2={368} y2={72} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#forge-train-arr)" />

          {/* Fuse adapters box */}
          <rect x={372} y={52} width={128} height={40} rx={5} fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <text x={436} y={69} textAnchor="middle" fontSize="11" fontWeight="600" fill="#1d4ed8">fuse adapters</text>
          <text x={436} y={83} textAnchor="middle" fontSize="9" fill="#3b82f6" fontFamily="monospace">standalone model</text>

          {/* Arrow to output */}
          <line x1={500} y1={72} x2={526} y2={72} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#forge-train-arr)" />

          {/* FR-Forge output box */}
          <rect x={530} y={52} width={142} height={40} rx={5} fill="#202020" />
          <text x={601} y={69} textAnchor="middle" fontSize="11" fontWeight="600" fill="white">FR-Forge 1.7B</text>
          <text x={601} y={83} textAnchor="middle" fontSize="9" fill="#8b8b9a" fontFamily="monospace">v1</text>
        </svg>
      </div>
    </div>
  );
}

/* ─── Training Data Mix Chart ────────────────────────────────────────────────── */

function TrainingDataChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = [
    { label: "Ops & Maintenance", count: 110, pct: (110 / 261) * 100 },
    { label: "Quality & Compliance", count: 100, pct: (100 / 261) * 100 },
    { label: "Supply Chain & Planning", count: 51, pct: (51 / 261) * 100 },
  ];

  return (
    <div ref={ref} className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-2">
        Training data, 261 instruction pairs
      </p>
      <div className="space-y-5 mt-6">
        {items.map((item, i) => (
          <div key={item.label}>
            <div className="flex justify-between items-baseline mb-2">
              <span className={`${k2d.className} text-sm text-zinc-700`}>{item.label}</span>
              <span className="font-mono text-sm text-zinc-500">{item.count}</span>
            </div>
            <div className="h-[6px] bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-[#202020]"
                style={{
                  width: animated ? `${item.pct}%` : "0%",
                  transition: `width 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.12}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FR-Forge Handles Tree ──────────────────────────────────────────────────── */

function HandlesTree() {
  const pillars = [
    {
      label: "Shop-floor ops & maintenance",
      desc: "SOPs, work instructions, equipment manuals, PM/PdM, OEE, troubleshooting",
    },
    {
      label: "Quality & compliance",
      desc: "ISO 9001, IATF 16949, ISO 13485, FDA/GMP, CAPA, FMEA, SPC, MSA, audits",
    },
    {
      label: "Supply chain & planning",
      desc: "MRP/ERP, procurement, BOMs, inventory, demand planning, suppliers",
    },
  ];

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 my-6">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-4">
        FR-Forge covers
      </p>
      <div className="font-mono text-sm space-y-0">
        {pillars.map((pillar, i) => {
          const isLast = i === pillars.length - 1;
          return (
            <div key={pillar.label} className="flex gap-2 py-3 border-b border-zinc-100 last:border-0">
              <span className="text-zinc-300 shrink-0 select-none mt-0.5">{isLast ? "└─" : "├─"}</span>
              <div>
                <span className={`${k2d.className} text-zinc-800 font-semibold text-base`}>{pillar.label}</span>
                <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Share Icons ───────────────────────────────────────────────────────────── */

function ShareIcons() {
  return (
    <div className="mt-8 flex items-center gap-3">
      <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mr-1">Share:</span>
      <a href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors" aria-label="Share on X">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors" aria-label="Share on LinkedIn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors" aria-label="Share on Reddit">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      </a>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────────── */

export default function FRForgePage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sectionEls = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topmost.target.id);
        }
      },
      { rootMargin: "-10% 0px -65% 0px", threshold: 0 }
    );
    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f0efed]">
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#f0efed]/95 backdrop-blur-sm border-b border-zinc-200/70">
        <div className="max-w-[1300px] mx-auto px-8 py-[14px] flex items-center">
          <Link
            href="/#models"
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-zinc-400 hover:text-zinc-800 transition-colors"
          >
            ← Fahrenheit Research
          </Link>
        </div>
      </div>

      {/* Page header */}
      <div className="max-w-[1300px] mx-auto px-8 pt-[72px]">
        <div className="pt-12">
          <span className="inline-block text-[11px] font-mono tracking-[0.22em] uppercase border border-zinc-400 text-zinc-600 px-3 py-[5px]">
            MODELS
          </span>

          <h1 className={`${k2d.className} text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.07] font-semibold text-zinc-900 mt-6 mb-5 max-w-3xl`}>
            FR-Forge-1.7B: A Thin Language Model for Manufacturing
          </h1>

          <p className="font-mono text-xs text-zinc-500 mb-8 leading-relaxed">
            Version: 1 &nbsp;&nbsp;·&nbsp;&nbsp; Maintainer: Fahrenheit Research (f-r.co)
          </p>

          <div className="border-t border-zinc-300" />
          <div className="grid grid-cols-2 py-5 gap-6 max-w-xl">
            <div>
              <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-zinc-400 mb-1.5">Authors</p>
              <p className={`${k2d.className} text-base text-zinc-800`}>Fahrenheit Research</p>
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-zinc-400 mb-1.5">Published</p>
              <p className={`${k2d.className} text-base text-zinc-800`}>June 2026</p>
            </div>
          </div>
          <div className="border-t border-zinc-300" />
        </div>
      </div>

      {/* Two-column body */}
      <div className="max-w-[1300px] mx-auto px-8 flex gap-14 pt-10 pb-28">

        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block w-[210px] shrink-0">
          <div className="sticky top-[68px] pt-2">
            <nav>
              {NAV_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`${k2d.className} block w-full text-left py-[9px] pr-4 text-base border-b border-zinc-200/70 transition-colors duration-150 ${
                    activeSection === sec.id
                      ? "text-[#202020] font-semibold"
                      : "text-zinc-400 hover:text-[#202020]"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </nav>
            <ShareIcons />
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 max-w-[680px] min-w-0">

          {/* ── Overview ── */}
          <section id="overview" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>Overview</h2>
            <p className={`${k2d.className} text-xl text-zinc-700 leading-relaxed mb-4`}>
              FR-Forge-1.7B is a <strong className="text-zinc-900">Thin Language Model (TLM)</strong> for
              the manufacturing sector, by Fahrenheit Research. Sibling to FR-Lex (legal). It is a small,
              4-bit, MLX model fine-tuned with LoRA adapters on a curated manufacturing instruction
              corpus, designed to run locally on Apple Silicon.
            </p>
            <TLMPositioningChart />
          </section>

          {/* ── How it works ── */}
          <section id="how-it-works" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>How it works</h2>
            <ManufacturingFlowDiagram />
            <p className={`${k2d.className} text-xl text-zinc-600 leading-relaxed mt-4`}>
              It is an assistant, not a certified authority. It is not a substitute for the controlling
              standard, safety sign-off, or regulatory advice.
            </p>
          </section>

          {/* ── Specifications ── */}
          <section id="specifications" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>Specifications</h2>
            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
              {[
                { label: "Base", value: "Qwen3-1.7B (4-bit, MLX)" },
                { label: "Parameters", value: "1.7B · 4-bit" },
                { label: "Method", value: "LoRA adapters, fused" },
                { label: "Runtime", value: "MLX (Apple Silicon)" },
                { label: "Languages", value: "English" },
                { label: "License", value: "Apache-2.0" },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex items-start px-6 py-4 ${i < arr.length - 1 ? "border-b border-zinc-100" : ""}`}
                >
                  <span className="w-36 shrink-0 text-[11px] font-mono text-zinc-400 tracking-widest uppercase pt-0.5">
                    {row.label}
                  </span>
                  <span className={`${k2d.className} text-base text-zinc-800`}>{row.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Intended use ── */}
          <section id="intended-use" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>Intended use</h2>
            <p className={`${k2d.className} text-xl text-zinc-700 leading-relaxed mb-6`}>
              Assisting manufacturing teams with everyday domain questions across three pillars.
            </p>
            <HandlesTree />
            <div className="mt-5 bg-white border border-zinc-200 rounded-xl p-6">
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-3">Out of scope</p>
              <p className={`${k2d.className} text-base text-zinc-600 leading-relaxed`}>
                Safety, regulatory, or compliance sign-off; anything that must be exact (part numbers,
                clause text, customer-specific requirements) without grounding it in your own documents.
              </p>
            </div>
          </section>

          {/* ── Evaluation ── */}
          <section id="evaluation" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>Evaluation</h2>
            <p className={`${k2d.className} text-xl text-zinc-700 leading-relaxed mb-6`}>
              A held-out set of prompts across the three pillars is scored with a deterministic
              keyword-rubric: each item defines groups of required terms, and a group passes if any
              synonym appears in the answer. The item score is the fraction of groups covered; pillar
              and overall scores are averages. Generation uses a 1.15 repetition penalty.
            </p>
            <EvaluationChart />
            <p className={`${k2d.className} text-base text-zinc-500 leading-relaxed mt-4`}>
              This measures domain-term coverage, not eloquence or factual grading, and the held-out
              set is small — treat results as a directional, reproducible yardstick rather than a
              precise grade.
            </p>
          </section>

          {/* ── Limitations ── */}
          <section id="limitations" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>Limitations</h2>
            <div className="space-y-5">
              {[
                {
                  title: "Not a certified authority.",
                  body: "Outputs assist research and drafting only. They are not a substitute for the controlling standard, safety sign-off, or regulatory advice.",
                },
                {
                  title: "English only (v1).",
                  body: "Multi-language support is not included in this release.",
                },
                {
                  title: "Paraphrased, not verbatim.",
                  body: "Trained on domain reasoning, not reproduced standards; always verify clause-level detail against the controlling standard.",
                },
                {
                  title: "Small model.",
                  body: "For facts that must be exact (part numbers, clause text, customer-specific requirements), ground it with retrieval over your own documents rather than relying on memory.",
                },
                {
                  title: "Self-reported metric.",
                  body: "Evaluation is an internal keyword-coverage score on a small held-out set.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                  <p className={`${k2d.className} text-base text-zinc-700 leading-relaxed`}>
                    <strong className="text-zinc-900">{item.title}</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Training ── */}
          <section id="training" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>Training</h2>
            <TrainingFlow />
            <TrainingDataChart />
            <div className="space-y-3 mt-2">
              <p className={`${k2d.className} text-base text-zinc-700 leading-relaxed`}>
                <strong className="text-zinc-900">Base model:</strong> mlx-community/Qwen3-1.7B-4bit (Qwen3 architecture, 4-bit)
              </p>
              <p className={`${k2d.className} text-base text-zinc-700 leading-relaxed`}>
                <strong className="text-zinc-900">Method:</strong> LoRA adapters via mlx-lm, fused into this standalone model.
              </p>
              <p className={`${k2d.className} text-base text-zinc-700 leading-relaxed`}>
                <strong className="text-zinc-900">Data:</strong> 261 curated instruction pairs. Sources: paraphrased domain reasoning plus model-assisted synthetic pairs with human review. No copyrighted standard text is reproduced verbatim.
              </p>
              <p className={`${k2d.className} text-base text-zinc-700 leading-relaxed`}>
                <strong className="text-zinc-900">Hyperparameters:</strong> iters 800, LoRA layers 8, batch size 1, max sequence length 512, learning rate 1e-5, gradient checkpointing on. Peak training memory ~2 GB.
              </p>
            </div>
          </section>

          {/* ── Get Started ── */}
          <section id="get-started" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>Get Started</h2>

            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-3">License</p>
            <p className={`${k2d.className} text-base text-zinc-600 leading-relaxed mb-6`}>
              Apache-2.0. Base model mlx-community/Qwen3-1.7B-4bit is Apache-2.0.
            </p>

            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-3">Citation</p>
            <div className="bg-zinc-900 rounded-xl p-5 font-mono text-xs text-zinc-300 leading-relaxed mb-10 overflow-x-auto">
              <pre>{`@software{fr_forge_2026,
  title  = {FR-Forge-1.7B: a thin language model for manufacturing},
  author = {Fahrenheit Research},
  year   = {2026},
  note   = {Fine-tuned from Qwen3-1.7B (4-bit) with MLX/LoRA}
}`}</pre>
            </div>

            {/* HuggingFace download button */}
            <a
              href="https://huggingface.co/FahrenheitResearch/FR-Forge-1.7B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-6 bg-white border border-zinc-300 px-6 py-4 hover:bg-zinc-50 hover:border-[#202020] transition-all duration-200 group w-full max-w-[360px]"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl leading-none" role="img" aria-label="HuggingFace">🤗</span>
                <span className={`${k2d.className} text-base font-semibold text-zinc-800`}>
                  Download on Hugging Face
                </span>
              </div>
              <svg
                className="text-zinc-400 group-hover:text-[#202020] transition-colors shrink-0"
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </section>

        </main>
      </div>
    </div>
  );
}
