"use client";

import { useEffect, useRef } from "react";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  width?: number;
  height?: number;
}

export function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "#60A5FA",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  width,
  height,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const opacitiesRef = useRef<Float32Array | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = width ?? canvas.offsetWidth;
    const h = height ?? canvas.offsetHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    const cols = Math.ceil(w / (squareSize + gridGap));
    const rows = Math.ceil(h / (squareSize + gridGap));
    const total = cols * rows;

    // Parse hex color to RGB
    let r = 96, g = 165, b = 250;
    const hex = color.replace("#", "");
    if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }

    opacitiesRef.current = new Float32Array(total).map(() => Math.random() * maxOpacity);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const opacities = opacitiesRef.current!;
      for (let i = 0; i < total; i++) {
        if (Math.random() < flickerChance) {
          opacities[i] = Math.random() * maxOpacity;
        }
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = col * (squareSize + gridGap);
        const y = row * (squareSize + gridGap);
        ctx.fillStyle = `rgba(${r},${g},${b},${opacities[i].toFixed(3)})`;
        ctx.fillRect(x, y, squareSize, squareSize);
      }
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animRef.current);
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, width, height]);

  return <canvas ref={canvasRef} className={className} />;
}
