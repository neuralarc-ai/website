"use client";

import { useEffect, useRef } from "react";

interface Block {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
  phase: number;
}

export function PixelFloat({
  count = 30,
  color = "#202020",
}: {
  count?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let blocks: Block[] = [];

    const seed = () => {
      blocks = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 2,
        opacity: Math.random() * 0.4 + 0.05,
        speed: Math.random() * 0.4 + 0.1,
        drift: (Math.random() - 0.5) * 0.3,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    resize();
    window.addEventListener("resize", resize);

    const width = () => canvas.offsetWidth;
    const height = () => canvas.offsetHeight;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width(), height());
      for (const b of blocks) {
        b.y -= b.speed;
        b.x += b.drift + Math.sin(t * 0.001 + b.phase) * 0.3;
        b.opacity =
          0.05 + Math.abs(Math.sin(t * 0.0005 + b.phase)) * 0.3;
        if (b.y < -10) {
          b.y = height() + 10;
          b.x = Math.random() * width();
        }
        if (b.x < -10) b.x = width() + 10;
        if (b.x > width() + 10) b.x = -10;
        ctx.globalAlpha = b.opacity;
        ctx.fillStyle = color;
        ctx.fillRect(b.x, b.y, b.size, b.size);
      }
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
