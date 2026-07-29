"use client";

import { useEffect, useRef } from "react";

import Glow from "./Glow";
import { lightingVariants } from "./variants";

import useLightingEngine from "@/hooks/useLightingEngine";

export default function BackgroundLighting({ variant = "hero" }) {
  const containerRef = useRef(null);

  const { engineRef } = useLightingEngine();

  const glows = lightingVariants[variant] || [];

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let frameId;

    const update = () => {
      const engine = engineRef.current;

      if (engine.enabled) {
        // Convert normalized mouse position
        // into a tiny movement range.

        const offsetX = (engine.normalizedX - 0.5) * 24;
        const offsetY = (engine.normalizedY - 0.5) * 24;

        // Distance from center (0 → ~0.7)

        const dx = engine.normalizedX - 0.5;
        const dy = engine.normalizedY - 0.5;

        const distance = Math.sqrt(dx * dx + dy * dy);

        // 1 → 1.35

        const intensity = 1 + (0.35 - distance * 0.25);

        // 1 → 1.04

        const scale = 1 + (0.04 - distance * 0.02);

        container.style.setProperty("--lighting-offset-x", `${offsetX}px`);

        container.style.setProperty("--lighting-offset-y", `${offsetY}px`);

        container.style.setProperty(
          "--lighting-intensity",
          intensity.toFixed(3),
        );

        container.style.setProperty("--lighting-scale", scale.toFixed(3));
      }

      frameId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(frameId);
  }, [engineRef]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
      style={{
        "--lighting-offset-x": "0px",
        "--lighting-offset-y": "0px",
        "--lighting-intensity": 1,
        "--lighting-scale": 1,
      }}
    >
      {glows.map((glow, index) => (
        <Glow key={index} {...glow} />
      ))}

      {/* Top Fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-28
          bg-gradient-to-b
          from-background
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-background
          to-transparent
        "
      />
    </div>
  );
}
