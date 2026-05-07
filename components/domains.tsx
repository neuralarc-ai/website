const domains = [
  {
    id: "001",
    title: "Deep Data\nArchitecture",
    description:
      "Building proprietary data pipelines that surface signal from noise at scale. Our deep data systems ingest, structure, and semantically index billions of data points — creating training substrates that give our models an unfair advantage.",
    tags: ["Data Infrastructure", "Semantic Indexing", "Pipeline Engineering"],
  },
  {
    id: "002",
    title: "Deep Data\nArchitecture",
    description:
      "Building proprietary data pipelines that surface signal from noise at scale. Our deep data systems ingest, structure, and semantically index billions of data points — creating training substrates that give our models an unfair advantage.",
    tags: ["Data Infrastructure", "Semantic Indexing", "Pipeline Engineering"],
  },
  {
    id: "003",
    title: "Deep Data\nArchitecture",
    description:
      "Building proprietary data pipelines that surface signal from noise at scale. Our deep data systems ingest, structure, and semantically index billions of data points — creating training substrates that give our models an unfair advantage.",
    tags: ["Data Infrastructure", "Semantic Indexing", "Pipeline Engineering"],
  },
  {
    id: "004",
    title: "Deep Data\nArchitecture",
    description:
      "Building proprietary data pipelines that surface signal from noise at scale. Our deep data systems ingest, structure, and semantically index billions of data points — creating training substrates that give our models an unfair advantage.",
    tags: ["Data Infrastructure", "Semantic Indexing", "Pipeline Engineering"],
  },
  {
    id: "005",
    title: "Deep Data\nArchitecture",
    description:
      "Building proprietary data pipelines that surface signal from noise at scale. Our deep data systems ingest, structure, and semantically index billions of data points — creating training substrates that give our models an unfair advantage.",
    tags: ["Data Infrastructure", "Semantic Indexing", "Pipeline Engineering"],
  },
  {
    id: "006",
    title: "Deep Data\nArchitecture",
    description:
      "Building proprietary data pipelines that surface signal from noise at scale. Our deep data systems ingest, structure, and semantically index billions of data points — creating training substrates that give our models an unfair advantage.",
    tags: ["Data Infrastructure", "Semantic Indexing", "Pipeline Engineering"],
  },
];

export default function Domains() {
  return (
    <section
      id="research"
      className="relative bg-[#f0efed] px-6 py-32 overflow-hidden"
    >
      {/* Left border rail */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px bg-zinc-300"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-widest text-zinc-400 mb-4 font-mono">
              02 // DOMAINS_OF_INQUIRY
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-zinc-900 leading-tight font-mono">
              Domain of
              <br />
              Inquiry
            </h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-500 leading-relaxed md:pt-10 italic">
            Our research agenda spans the hardest problems in applied AI from
            deep data infrastructure to emergent model behaviour.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-300 border border-zinc-300">
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
  domain: { id: string; title: string; description: string; tags: string[] };
}) {
  return (
    <div className="bg-white p-6 flex flex-col gap-4 relative min-h-[280px]">
      {/* Top row: number + arrow */}
      <div className="flex items-start justify-between">
        <span className="text-[10px] tracking-widest text-zinc-400 font-mono uppercase">
          {domain.id}
        </span>
        <ArrowUpRight />
      </div>

      {/* Title + dot grid */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 font-mono whitespace-pre-line leading-snug">
          {domain.title}
        </h3>
        <DotGrid />
      </div>

      {/* Description */}
      <p className="text-[11px] text-zinc-500 leading-relaxed flex-1">
        {domain.description}
      </p>

      {/* Tags + bottom arrow */}
      <div className="flex items-end justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {domain.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-wider uppercase text-zinc-500 border border-zinc-300 px-2 py-0.5 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowBottomRight />
      </div>
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
      xmlns="http://www.w3.org/2000/svg"
      className="text-zinc-400"
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function ArrowBottomRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-zinc-400 shrink-0"
    >
      <path
        d="M4 4L12 12M12 12H6M12 12V6"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function DotGrid() {
  return (
    <div className="grid grid-cols-4 gap-[3px] shrink-0 mt-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="w-[3px] h-[3px] rounded-full bg-zinc-300" />
      ))}
    </div>
  );
}
