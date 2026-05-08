"use client";

import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  LayoutGroup,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { majorMono, k2d } from "@/lib/fonts";
import { ArrowLeft, ArrowRight } from "lucide-react";

const companies = [
  {
    id: "kashew",
    name: "Kashew AI",
    description:
      "AI powered prospecting, pipeline, and relationship intelligence.",
    bullets: [
      "AI-powered invoice automation",
      "Real-time cash flow intelligence",
      "SLM-driven financial forecasting",
      "Zero-setup business intelligence",
    ],
    website: "#",
    logo: "/kashew-logo.svg",
    hoverBg: "#103C28",
    hoverTextDark: false,
  },
  {
    id: "ninth",
    name: "Ninth",
    description:
      "Venture intelligence for smarter fundraising and introductions.",
    bullets: [
      "AI-driven deal flow analysis",
      "Market signal pattern recognition",
      "Portfolio intelligence dashboard",
      "Founder-investor matching engine",
    ],
    website: "#",
    logo: "/ninth-logo.svg",
    hoverBg: "linear-gradient(to bottom, #FBC439, #F47437)",
    hoverTextDark: true,
  },
];

const CARD_SPRING = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
  mass: 1,
};

const CURSOR_SPRING = {
  stiffness: 600,
  damping: 45,
  mass: 0.5,
};

// Global cursor pill — fixed to viewport, follows real mouse coords
function DragCursor({ visible }: { visible: boolean }) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);

  const springX = useSpring(x, CURSOR_SPRING);
  const springY = useSpring(y, CURSOR_SPRING);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            key="drag"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center rounded-full bg-[#0d0d0d]"
            style={{ width: 80, height: 32 }}
          >
            <span
              className={`${k2d.className} text-[11px] tracking-[0.2em] select-none text-white`}
            >
              Drag
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHovered, setCardHovered] = useState(false);
  const [showDrag, setShowDrag] = useState(false);

  const active = companies[activeIndex];

  const inactive = companies[(activeIndex + 1) % companies.length];

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % companies.length);
    setCardHovered(false);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? companies.length - 1 : prev - 1));

    setCardHovered(false);
  };

  const cardStyle = cardHovered
    ? active.hoverBg.startsWith("linear")
      ? {
          background: active.hoverBg,
          borderColor: "transparent",
        }
      : {
          backgroundColor: active.hoverBg,
          borderColor: active.hoverBg,
        }
    : {
        backgroundColor: "#ffffff",
        borderColor: "#d4d4d8",
      };

  const textColor = (base: string) =>
    cardHovered ? (active.hoverTextDark ? "#202020" : "#ffffff") : base;

  const enterInteractive = () => setShowDrag(true);

  const leaveInteractive = () => setShowDrag(false);

  return (
    <>
      {/* Drag cursor rendered at root level, fixed to viewport */}
      <DragCursor visible={showDrag} />

      <section
        id="products"
        className="relative bg-[#f0efed] px-6 min-h-screen flex flex-col justify-center py-24 pt-64 overflow-hidden"
      >
        <img
          src="/images/pixels-2.png"
          className="absolute top-0 left-0 w-full"
          alt=""
        />
        {/* Left border rail */}
        <div
          className="absolute left-16 top-0 bottom-0 w-px bg-[#202020]"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto w-full py-56 z-10">
          {/* Section label */}
          <p className="text-xs tracking-widest text-[#202020] mb-4 font-mono text-center">
            01 // PORTFOLIO
          </p>

          {/* Heading */}
          <h2
            className={`${majorMono.className} lowercase text-center mb-20 text-3xl sm:text-4xl md:text-5xl leading-none tracking-normal text-stroke-black`}
            style={{ color: "#202020" }}
          >
            Our companies dont just enter
            <br />
            markets they define them
          </h2>

          {/* Showcase */}
          <LayoutGroup>
            <div className="relative flex items-center justify-center">
              {/* ── Active card + arrows ── */}
              <div className="flex flex-col items-center">
                <motion.div
                  layout
                  layoutId={`card-${active.id}`}
                  transition={CARD_SPRING}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.08}
                  dragTransition={{
                    bounceStiffness: 500,
                    bounceDamping: 30,
                  }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -120) {
                      goNext();
                    }

                    if (info.offset.x > 120) {
                      goPrev();
                    }
                  }}
                  className="relative border flex flex-col items-center px-12 pt-16 pb-10 w-[500px] min-h-[700px] border cursor-none transition-all duration-400"
                  style={{
                    ...cardStyle,
                  }}
                  onMouseEnter={() => {
                    setCardHovered(true);
                    enterInteractive();
                  }}
                  onMouseLeave={() => {
                    setCardHovered(false);
                    leaveInteractive();
                  }}
                >
                  {/* Corner brackets */}
                  {[
                    "top-4 left-4",
                    "top-4 right-4",
                    "bottom-4 left-4",
                    "bottom-4 right-4",
                  ].map((pos, i) => (
                    <span
                      key={i}
                      className={`absolute ${pos} text-base leading-none select-none font-mono`}
                      style={{
                        color: cardHovered
                          ? active.hoverTextDark
                            ? "rgba(0,0,0,0.8)"
                            : "rgba(255,255,255,0.8)"
                          : "#202020",
                      }}
                    >
                      {["┌", "┐", "└", "┘"][i]}
                    </span>
                  ))}

                  {/* Company name */}
                  <motion.p
                    layout="position"
                    className={`${majorMono.className} lowercase text-center text-3xl leading-none tracking-normal transition-colors duration-300`}
                    style={{
                      color: "transparent",
                      WebkitTextStrokeWidth: "2px",
                      WebkitTextStrokeColor: cardHovered
                        ? active.hoverTextDark
                          ? "#202020"
                          : "#ffffff"
                        : "#202020",
                    }}
                  >
                    {active.name}
                  </motion.p>

                  {/* Logo */}
                  <motion.div layout="position" className="mt-[60px]">
                    <img
                      src={active.logo}
                      alt={active.name}
                      className="w-28 h-28 object-contain transition-[filter] duration-300"
                      style={{
                        filter:
                          cardHovered && !active.hoverTextDark
                            ? "brightness(0) invert(1)"
                            : "none",
                      }}
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    layout="position"
                    className={`${k2d.className} text-center max-w-[280px] mt-[60px] font-normal text-base leading-none tracking-normal transition-colors duration-300`}
                    style={{
                      color: cardHovered
                        ? active.hoverTextDark
                          ? "rgba(32,32,32,0.75)"
                          : "rgba(255,255,255,0.8)"
                        : "rgba(32,32,32,0.75)",
                    }}
                  >
                    {active.description}
                  </motion.p>

                  <div className="flex-1" />

                  {/* Website */}
                  <motion.a
                    layout="position"
                    href={active.website}
                    className="text-xs tracking-[0.2em] uppercase font-mono pb-0.5 cursor-none transition-colors duration-300 border-b"
                    style={{
                      color: textColor("#52525b"),
                      borderBottomColor: cardHovered
                        ? active.hoverTextDark
                          ? "rgba(0,0,0,0.3)"
                          : "rgba(255,255,255,0.4)"
                        : "#d4d4d8",
                    }}
                  >
                    Website
                  </motion.a>
                </motion.div>

                {/* Navigation arrows */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={goPrev}
                    aria-label="Previous company"
                    className="w-[30px] h-[30px] flex items-center justify-center text-white bg-[#909090]"
                  >
                    <span className="leading-none ">
                      <ArrowLeft strokeWidth={1} />
                    </span>
                  </button>

                  <button
                    onClick={goNext}
                    aria-label="Next company"
                    className="w-[30px] h-[30px] flex items-center justify-center text-white bg-[#212121]"
                  >
                    <span className="leading-none">
                      <ArrowRight strokeWidth={1} />
                    </span>
                  </button>
                </div>
              </div>

              {/* ── Inactive logo pill ── */}
              <motion.div
                layout
                layoutId={`card-${inactive.id}`}
                transition={CARD_SPRING}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-40 hover:opacity-70 cursor-none transition-opacity duration-300"
                onClick={() => {
                  goNext();
                  setShowDrag(false);
                }}
                onMouseEnter={enterInteractive}
                onMouseLeave={leaveInteractive}
              >
                <motion.span
                  layout="position"
                  className={`${majorMono.className} lowercase text-center text-zinc-700 font-normal text-3xl leading-none tracking-normal`}
                >
                  {inactive.name}
                </motion.span>

                <motion.img
                  layout="position"
                  src={inactive.logo}
                  alt={inactive.name}
                  className="w-14 h-14 object-contain"
                />
              </motion.div>
            </div>
          </LayoutGroup>
        </div>
      </section>
    </>
  );
}
