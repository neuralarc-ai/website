"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { k2d } from "@/lib/fonts";

const NAV_SECTIONS = [
  { id: "highlights", label: "Highlights" },
  { id: "how-it-works", label: "How it works" },
  { id: "specifications", label: "Specifications" },
  { id: "coverage", label: "Coverage" },
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
        <svg
          viewBox="0 0 480 270"
          className="w-full max-w-[440px]"
          aria-label="TLM positioning quadrant chart"
        >
          {/* subtle grid */}
          {[160, 260, 360].map((x) => (
            <line key={x} x1={x} y1={24} x2={x} y2={240} stroke="#f4f4f5" strokeWidth="1" />
          ))}
          {[80, 140, 190].map((y) => (
            <line key={y} x1={72} y1={y} x2={450} y2={y} stroke="#f4f4f5" strokeWidth="1" />
          ))}

          {/* X axis */}
          <line x1={72} y1={240} x2={448} y2={240} stroke="#d4d4d8" strokeWidth="1.5" />
          <polygon points="446,235 453,240 446,245" fill="#d4d4d8" />
          <text x={456} y={244} textAnchor="start" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            generality
          </text>

          {/* Y axis */}
          <line x1={72} y1={240} x2={72} y2={24} stroke="#d4d4d8" strokeWidth="1.5" />
          <polygon points="67,26 72,19 77,26" fill="#d4d4d8" />
          <text
            x={16}
            y={130}
            textAnchor="middle"
            fontSize="10"
            fill="#a1a1aa"
            fontFamily="monospace"
            transform="rotate(-90 16 130)"
          >
            specialization
          </text>

          {/* FR-Lex dot */}
          <circle
            cx={128}
            cy={72}
            r={hovered === "frlex" ? 11 : 8}
            fill={hovered === "frlex" ? "#ef4444" : "#F87171"}
            style={{ transition: "r 0.15s ease, fill 0.15s ease", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frlex")}
            onMouseLeave={() => setHovered(null)}
          />
          <text x={146} y={66} fontSize="12" fontWeight="600" fill="#202020">
            FR-Lex 1.7B
          </text>
          <text x={146} y={82} fontSize="10" fill="#71717a" fontFamily="monospace">
            narrow · local · cheap
          </text>

          {/* Frontier LLM dot */}
          <circle
            cx={392}
            cy={192}
            r={hovered === "frontier" ? 11 : 8}
            fill={hovered === "frontier" ? "#4f46e5" : "#818cf8"}
            style={{ transition: "r 0.15s ease, fill 0.15s ease", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frontier")}
            onMouseLeave={() => setHovered(null)}
          />
          <text x={304} y={216} fontSize="12" fontWeight="600" fill="#202020">
            Frontier LLM
          </text>
          <text x={304} y={232} fontSize="10" fill="#71717a" fontFamily="monospace">
            broad · hosted · costly
          </text>

          {/* Hover tooltip — FR-Lex */}
          {hovered === "frlex" && (
            <g>
              <rect x={90} y={40} width={148} height={24} rx={4} fill="#202020" />
              <text x={164} y={56} textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">
                1.7B params · Apple Silicon
              </text>
            </g>
          )}

          {/* Hover tooltip — Frontier */}
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

/* ─── Architecture Flow Diagram ─────────────────────────────────────────────── */

function ArchitectureFlowDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-5">
        Processing pipeline
      </p>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 580 370"
          className="w-full min-w-[480px]"
          aria-label="FR-Lex architecture flow diagram"
        >
          <defs>
            <marker id="arch-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#a1a1aa" />
            </marker>
          </defs>

          {/* Input box */}
          <rect x={170} y={14} width={240} height={46} rx={5} fill="#f9f9f9" stroke="#d4d4d8" strokeWidth="1.5" />
          <text x={290} y={33} textAnchor="middle" fontSize="12" fill="#71717a" fontFamily="monospace">
            Legal query
          </text>
          <text x={290} y={50} textAnchor="middle" fontSize="12" fill="#71717a" fontFamily="monospace">
            + source text
          </text>

          {/* Arrow 1 */}
          <line x1={290} y1={60} x2={290} y2={94} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#arch-arr)" />

          {/* FR-Lex box */}
          <rect
            x={148}
            y={98}
            width={284}
            height={64}
            rx={7}
            fill={hovered === "frlex" ? "#fff5f5" : "white"}
            stroke={hovered === "frlex" ? "#F87171" : "#202020"}
            strokeWidth="2"
            style={{ transition: "fill 0.2s, stroke 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frlex")}
            onMouseLeave={() => setHovered(null)}
          />
          <text
            x={290}
            y={121}
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill={hovered === "frlex" ? "#c53030" : "#202020"}
            style={{ transition: "fill 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frlex")}
            onMouseLeave={() => setHovered(null)}
          >
            FR-Lex 1.7B
          </text>
          <text
            x={290}
            y={139}
            textAnchor="middle"
            fontSize="10"
            fill="#71717a"
            fontFamily="monospace"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("frlex")}
            onMouseLeave={() => setHovered(null)}
          >
            enrich → jurisdiction · citations · routing
          </text>
          <text
            x={290}
            y={154}
            textAnchor="middle"
            fontSize="9"
            fill={hovered === "frlex" ? "#F87171" : "#c4c4c8"}
            fontFamily="monospace"
            style={{ transition: "fill 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("frlex")}
            onMouseLeave={() => setHovered(null)}
          >
            hover to inspect
          </text>

          {/* Fork stem */}
          <line x1={290} y1={162} x2={290} y2={188} stroke="#a1a1aa" strokeWidth="1.5" />

          {/* Horizontal fork line */}
          <line x1={110} y1={188} x2={470} y2={188} stroke="#a1a1aa" strokeWidth="1.5" />

          {/* Left branch down */}
          <line x1={110} y1={188} x2={110} y2={214} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#arch-arr)" />

          {/* Right branch down */}
          <line x1={470} y1={188} x2={470} y2={214} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#arch-arr)" />

          {/* standalone label chip */}
          <rect x={65} y={193} width={90} height={18} rx={4} fill="#f4f4f5" />
          <text x={110} y={206} textAnchor="middle" fontSize="10" fill="#71717a" fontFamily="monospace">
            standalone
          </text>

          {/* lens mode label chip */}
          <rect x={425} y={193} width={90} height={18} rx={4} fill="#f4f4f5" />
          <text x={470} y={206} textAnchor="middle" fontSize="10" fill="#71717a" fontFamily="monospace">
            lens mode
          </text>

          {/* Standalone output box */}
          <rect x={24} y={218} width={172} height={70} rx={5} fill="#f9f9f9" stroke="#d4d4d8" strokeWidth="1.5" />
          <text x={110} y={239} textAnchor="middle" fontSize="12" fontWeight="600" fill="#202020">
            Grounded output
          </text>
          <text x={110} y={256} textAnchor="middle" fontSize="9" fill="#71717a" fontFamily="monospace">
            summary · holdings
          </text>
          <text x={110} y={270} textAnchor="middle" fontSize="9" fill="#71717a" fontFamily="monospace">
            issues · citations
          </text>

          {/* LLM box */}
          <rect
            x={384}
            y={218}
            width={172}
            height={46}
            rx={5}
            fill={hovered === "llm" ? "#eef2ff" : "#f9f9f9"}
            stroke={hovered === "llm" ? "#818cf8" : "#d4d4d8"}
            strokeWidth="1.5"
            style={{ transition: "fill 0.2s, stroke 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("llm")}
            onMouseLeave={() => setHovered(null)}
          />
          <text
            x={470}
            y={237}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill={hovered === "llm" ? "#4338ca" : "#202020"}
            style={{ transition: "fill 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("llm")}
            onMouseLeave={() => setHovered(null)}
          >
            Large general LLM
          </text>
          <text
            x={470}
            y={253}
            textAnchor="middle"
            fontSize="9"
            fill="#a1a1aa"
            fontFamily="monospace"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("llm")}
            onMouseLeave={() => setHovered(null)}
          >
            frontier model
          </text>

          {/* Arrow LLM → enriched */}
          <line x1={470} y1={264} x2={470} y2={294} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#arch-arr)" />

          {/* Enriched answer box */}
          <rect x={384} y={298} width={172} height={48} rx={5} fill="#202020" />
          <text x={470} y={318} textAnchor="middle" fontSize="12" fontWeight="600" fill="white">
            Enriched legal answer
          </text>
          <text x={470} y={334} textAnchor="middle" fontSize="9" fill="#8b8b9a" fontFamily="monospace">
            scoped + authoritative
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ─── Coverage Bar Chart ─────────────────────────────────────────────────────── */

function CoverageChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = [
    { name: "United States", pct: 100, status: "shipped (v0.1)", filled: true },
    { name: "Australia", pct: 100, status: "shipped (v0.1)", filled: true },
    { name: "India", pct: 30, status: "in pipeline", filled: false },
    { name: "UAE", pct: 20, status: "in pipeline", filled: false },
  ];

  return (
    <div ref={ref} className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-6">
        Jurisdiction coverage
      </p>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={item.name}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm text-zinc-700">{item.name}</span>
              <span className="text-xs font-mono text-zinc-400">{item.status}</span>
            </div>
            <div className="h-[6px] bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: animated ? `${item.pct}%` : "0%",
                  backgroundColor: item.filled ? "#202020" : "#d4d4d8",
                  transition: `width 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Data Mix Chart ─────────────────────────────────────────────────────────── */

function DataMixChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = [
    { name: "United States", pct: 50 },
    { name: "Australia", pct: 50 },
  ];

  return (
    <div ref={ref} className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-6">
        Data mix
      </p>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={item.name}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm text-zinc-700">{item.name}</span>
              <span className="text-xs font-mono text-zinc-500">~{item.pct}%</span>
            </div>
            <div className="h-[6px] bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-[#202020]"
                style={{
                  width: animated ? `${item.pct}%` : "0%",
                  transition: `width 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Training Pipeline Flow ─────────────────────────────────────────────────── */

function TrainingFlow() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 my-8">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-5">
        Training pipeline
      </p>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 640 148"
          className="w-full min-w-[520px]"
          aria-label="Training pipeline flow"
        >
          <defs>
            <marker id="train-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#a1a1aa" />
            </marker>
          </defs>

          {/* US caselaw box */}
          <rect
            x={8}
            y={22}
            width={148}
            height={40}
            rx={5}
            fill={hovered === "us" ? "#f0f9ff" : "#f9f9f9"}
            stroke={hovered === "us" ? "#7dd3fc" : "#d4d4d8"}
            strokeWidth="1.5"
            style={{ transition: "fill 0.2s, stroke 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("us")}
            onMouseLeave={() => setHovered(null)}
          />
          <text
            x={82}
            y={38}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#202020"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("us")}
            onMouseLeave={() => setHovered(null)}
          >
            US caselaw
          </text>
          <text
            x={82}
            y={53}
            textAnchor="middle"
            fontSize="9"
            fill="#71717a"
            fontFamily="monospace"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("us")}
            onMouseLeave={() => setHovered(null)}
          >
            CAP via Common Pile
          </text>

          {/* Open AU box */}
          <rect
            x={8}
            y={86}
            width={148}
            height={40}
            rx={5}
            fill={hovered === "au" ? "#f0fdf4" : "#f9f9f9"}
            stroke={hovered === "au" ? "#86efac" : "#d4d4d8"}
            strokeWidth="1.5"
            style={{ transition: "fill 0.2s, stroke 0.2s", cursor: "pointer" }}
            onMouseEnter={() => setHovered("au")}
            onMouseLeave={() => setHovered(null)}
          />
          <text
            x={82}
            y={102}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#202020"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("au")}
            onMouseLeave={() => setHovered(null)}
          >
            Open AU Legal Corpus
          </text>
          <text
            x={82}
            y={117}
            textAnchor="middle"
            fontSize="9"
            fill="#71717a"
            fontFamily="monospace"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered("au")}
            onMouseLeave={() => setHovered(null)}
          >
            CC BY 4.0
          </text>

          {/* Fork paths */}
          <path d="M 156 42 H 182 V 74" fill="none" stroke="#a1a1aa" strokeWidth="1.5" />
          <path d="M 156 106 H 182 V 74" fill="none" stroke="#a1a1aa" strokeWidth="1.5" />
          <line x1={182} y1={74} x2={210} y2={74} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#train-arr)" />

          {/* Balance box */}
          <rect x={214} y={56} width={128} height={36} rx={5} fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <text x={278} y={71} textAnchor="middle" fontSize="11" fontWeight="600" fill="#1d4ed8">
            balance ~50/50
          </text>
          <text x={278} y={84} textAnchor="middle" fontSize="9" fill="#3b82f6" fontFamily="monospace">
            + teacher-distilled
          </text>

          {/* Arrow balance → LoRA */}
          <line x1={342} y1={74} x2={370} y2={74} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#train-arr)" />

          {/* LoRA box */}
          <rect x={374} y={56} width={124} height={36} rx={5} fill="#faf5ff" stroke="#d8b4fe" strokeWidth="1.5" />
          <text x={436} y={71} textAnchor="middle" fontSize="11" fontWeight="600" fill="#7c3aed">
            LoRA fine-tune
          </text>
          <text x={436} y={84} textAnchor="middle" fontSize="9" fill="#9333ea" fontFamily="monospace">
            MLX · Apple Silicon
          </text>

          {/* Arrow LoRA → output */}
          <line x1={498} y1={74} x2={524} y2={74} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#train-arr)" />

          {/* FR-Lex output box */}
          <rect x={528} y={56} width={104} height={36} rx={5} fill="#202020" />
          <text x={580} y={71} textAnchor="middle" fontSize="11" fontWeight="600" fill="white">
            FR-Lex 1.7B
          </text>
          <text x={580} y={84} textAnchor="middle" fontSize="9" fill="#8b8b9a" fontFamily="monospace">
            v0.1
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ─── FR-Lex Handles Tree ────────────────────────────────────────────────────── */

function HandlesTree() {
  const tasks = [
    { label: "Summarization", desc: "condense a judgment to its essence" },
    { label: "Holding extraction", desc: "pull the binding rule" },
    { label: "Issue spotting", desc: "surface the legal questions" },
    { label: "Citation extraction", desc: "normalize the authorities cited" },
  ];

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 my-6">
      <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-4">
        FR-Lex handles
      </p>
      <div className="font-mono text-sm space-y-0">
        {tasks.map((task, i) => {
          const isLast = i === tasks.length - 1;
          return (
            <div key={task.label} className="flex gap-2 py-2 border-b border-zinc-100 last:border-0">
              <span className="text-zinc-300 shrink-0 select-none">{isLast ? "└─" : "├─"}</span>
              <div>
                <span className="text-zinc-800 font-semibold">{task.label}</span>
                <span className="text-zinc-400 ml-2">— {task.desc}</span>
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
      <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mr-1">
        Share:
      </span>
      <a
        href="#"
        className="text-zinc-400 hover:text-zinc-700 transition-colors"
        aria-label="Share on X"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href="#"
        className="text-zinc-400 hover:text-zinc-700 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href="#"
        className="text-zinc-400 hover:text-zinc-700 transition-colors"
        aria-label="Share on Reddit"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      </a>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────────── */

export default function FRLexPage() {
  const [activeSection, setActiveSection] = useState("highlights");

  useEffect(() => {
    const sectionEls = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

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
          {/* MODELS chip */}
          <span className="inline-block text-[11px] font-mono tracking-[0.22em] uppercase border border-zinc-400 text-zinc-600 px-3 py-[5px]">
            MODELS
          </span>

          {/* Title */}
          <h1
            className={`${k2d.className} text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.07] font-semibold text-zinc-900 mt-6 mb-5 max-w-3xl`}
          >
            FR-Lex-1.7B: A Thin Language Model for Law
          </h1>

          {/* Version / maintainer line */}
          <p className="font-mono text-xs text-zinc-500 mb-8 leading-relaxed">
            Version: 0.1 (early build: United States + Australia)&nbsp;&nbsp;·&nbsp;&nbsp;Maintainer: Fahrenheit Research (f-r.co)
          </p>

          {/* Divider + metadata */}
          <div className="border-t border-zinc-300" />
          <div className="grid grid-cols-2 py-5 gap-6 max-w-xl">
            <div>
              <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-zinc-400 mb-1.5">
                Authors
              </p>
              <p className={`${k2d.className} text-base text-zinc-800`}>Fahrenheit Research</p>
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-zinc-400 mb-1.5">
                Published
              </p>
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

          {/* ── Highlights ── */}
          <section id="highlights" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              Highlights
            </h2>
            <p className={`${k2d.className} text-xl text-zinc-700 leading-relaxed mb-4`}>
              FR-Lex-1.7B is a{" "}
              <strong className="text-zinc-900">Thin Language Model (TLM)</strong>: a small,
              domain-specialized model that runs standalone for narrow legal tasks, or as a{" "}
              <em>Lens</em> that sits in front of a larger general LLM and enriches a query
              (jurisdiction, citations, routing) before the expensive computation. It is designed to
              process legal text you give it, not to recall case law from memory.
            </p>
            <TLMPositioningChart />
          </section>

          {/* ── How it works ── */}
          <section id="how-it-works" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              How it works
            </h2>
            <ArchitectureFlowDiagram />
            <p className={`${k2d.className} text-xl text-zinc-600 leading-relaxed mt-4`}>
              <strong className="text-zinc-800">Two modes, one model:</strong> run it alone for
              fast, grounded legal text processing, or place it ahead of a frontier model so the
              expensive call arrives already scoped to the right jurisdiction and authorities.
            </p>
          </section>

          {/* ── Specifications ── */}
          <section id="specifications" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              Specifications
            </h2>
            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
              {[
                { label: "Base", value: "Qwen3-1.7B (4-bit, MLX)" },
                { label: "Parameters", value: "1.7B · 4-bit" },
                { label: "Runtime", value: "MLX (Apple Silicon)" },
                { label: "Languages", value: "English" },
                { label: "Jurisdictions", value: "United States, Australia" },
                { label: "License", value: "Apache-2.0" },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex items-start px-6 py-4 ${
                    i < arr.length - 1 ? "border-b border-zinc-100" : ""
                  }`}
                >
                  <span className="w-36 shrink-0 text-[11px] font-mono text-zinc-400 tracking-widest uppercase pt-0.5">
                    {row.label}
                  </span>
                  <span className={`${k2d.className} text-base text-zinc-800`}>{row.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Coverage ── */}
          <section id="coverage" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              Coverage
            </h2>
            <CoverageChart />
          </section>

          {/* ── Intended use ── */}
          <section id="intended-use" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              Intended use
            </h2>
            <p className={`${k2d.className} text-xl text-zinc-700 leading-relaxed mb-6`}>
              Grounded summarization, holding extraction, issue spotting, plain-language explanation,
              and citation extraction over United States and Australian court documents. Best results
              come from supplying the source text as context.
            </p>
            <HandlesTree />
            <div className="mt-5 bg-white border border-zinc-200 rounded-xl p-6">
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-3">
                Out of scope
              </p>
              <p className={`${k2d.className} text-base text-zinc-600 leading-relaxed`}>
                Open-ended legal recall without source text; jurisdictions outside the US and
                Australia; any use where an error carries legal or financial consequence without
                attorney review.
              </p>
            </div>
          </section>

          {/* ── Evaluation ── */}
          <section id="evaluation" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              Evaluation
            </h2>
            <p className={`${k2d.className} text-xl text-zinc-700 leading-relaxed`}>
              FR-Lex v0.1 is evaluated qualitatively on grounded legal tasks (summarization, holding
              and issue extraction, citation extraction) over held-out US and Australian documents. A
              quantitative, reproducible benchmark across jurisdictions is in progress and will be
              published here with the next release. Treat current outputs as research-grade
              assistance, not graded performance.
            </p>
          </section>

          {/* ── Limitations ── */}
          <section id="limitations" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              Limitations
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "Not legal advice.",
                  body: "Outputs are legal information for research and drafting assistance only. They are not a substitute for a licensed attorney, and must not be relied on for any decision with legal consequence.",
                },
                {
                  title: "Early build.",
                  body: "Trained on US and Australian material only; India and the UAE are in the pipeline but not yet in these weights.",
                },
                {
                  title: "Not a knowledge base.",
                  body: "Ungrounded recall will confabulate; always supply the source text for factual output.",
                },
                {
                  title: "Small model.",
                  body: "For anything that must be exact (citations, clause text), verify against the controlling source.",
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
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              Training
            </h2>
            <TrainingFlow />
            <DataMixChart />
            <div className="space-y-3 mt-2">
              <p className={`${k2d.className} text-base text-zinc-700 leading-relaxed`}>
                <strong className="text-zinc-900">Base:</strong> Qwen3-1.7B (Apache 2.0), 4-bit,
                fine-tuned with LoRA via MLX on Apple Silicon.
              </p>
              <p className={`${k2d.className} text-base text-zinc-700 leading-relaxed`}>
                <strong className="text-zinc-900">Data:</strong> public-domain US caselaw (Caselaw
                Access Project via the Common Pile) and the Open Australian Legal Corpus (CC BY
                4.0), balanced ~50/50.
              </p>
              <p className={`${k2d.className} text-base text-zinc-700 leading-relaxed`}>
                <strong className="text-zinc-900">Targets:</strong> teacher-distilled summaries,
                holdings, issues, and plain-language explanations; rule-based citation targets.
              </p>
            </div>
          </section>

          {/* ── Get Started ── */}
          <section id="get-started" className="scroll-mt-24 mb-16">
            <h2 className={`${k2d.className} text-2xl font-semibold text-zinc-900 mb-5`}>
              Get Started
            </h2>

            {/* Citation note */}
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-3">
              Citation
            </p>
            <p className={`${k2d.className} text-base text-zinc-600 leading-relaxed mb-4`}>
              Built on Qwen3 (Alibaba Cloud, Apache 2.0). Training data per source licenses; see
              the project repository for full attribution.
            </p>

            {/* Citation code block */}
            <div className="bg-zinc-900 rounded-xl p-5 font-mono text-xs text-zinc-300 leading-relaxed mb-10 overflow-x-auto">
              <pre>{`@software{fr_lex_2026,
  title  = {FR-Lex-1.7B: a thin language model for law},
  author = {Fahrenheit Research},
  year   = {2026},
  note   = {Fine-tuned from Qwen3-1.7B (4-bit) with MLX/LoRA}
}`}</pre>
            </div>

            {/* HuggingFace download button */}
            <a
              href="https://huggingface.co/FahrenheitResearch/FR-Lex-1.7B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-6 bg-white border border-zinc-300 px-6 py-4 hover:bg-zinc-50 hover:border-[#202020] transition-all duration-200 group w-full max-w-[360px]"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl leading-none" role="img" aria-label="HuggingFace">
                  🤗
                </span>
                <span className={`${k2d.className} text-base font-semibold text-zinc-800`}>
                  Download on Hugging Face
                </span>
              </div>
              <svg
                className="text-zinc-400 group-hover:text-[#202020] transition-colors shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
