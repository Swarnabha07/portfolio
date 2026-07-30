"use client";

import Glow from "./Glow";
import { lightingVariants } from "./variants";

export default function BackgroundLighting({ variant = "hero" }) {
  const glows = lightingVariants[variant] || [];

  return (
    <div
      aria-hidden="true"
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >
      {glows.map((glow, index) => (
        <Glow key={index} {...glow} />
      ))}

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