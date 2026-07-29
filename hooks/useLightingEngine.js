"use client";

import { useEffect, useRef } from "react";

export default function useLightingEngine() {
  const engineRef = useRef({
    enabled: true,

    // Current rendered position
    currentX: 0,
    currentY: 0,

    // Target mouse position
    targetX: 0,
    targetY: 0,

    // Normalized values (0 → 1)
    normalizedX: 0.5,
    normalizedY: 0.5,

    animationFrame: null,
  });

  useEffect(() => {
    const engine = engineRef.current;

    // Disable for touch devices
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isTouchDevice || prefersReducedMotion) {
      engine.enabled = false;
      return;
    }

    engine.enabled = true;

    // Start from screen center
    engine.currentX = window.innerWidth / 2;
    engine.currentY = window.innerHeight / 2;

    engine.targetX = engine.currentX;
    engine.targetY = engine.currentY;

    const handleMouseMove = (event) => {
      engine.targetX = event.clientX;
      engine.targetY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    const lerp = (start, end, amount) => {
      return start + (end - start) * amount;
    };

    const animate = () => {
      engine.currentX = lerp(engine.currentX, engine.targetX, 0.08);
      engine.currentY = lerp(engine.currentY, engine.targetY, 0.08);

      engine.normalizedX = engine.currentX / window.innerWidth;
      engine.normalizedY = engine.currentY / window.innerHeight;

      engine.animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (engine.animationFrame) {
        cancelAnimationFrame(engine.animationFrame);
      }
    };
  }, []);

  return {
    engineRef,
  };
}
