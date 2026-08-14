"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FeaturedProjectImage({
  src,
  alt = "StoryHub project preview",
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="relative w-full">
      {/* =========================================================
          DARK THEME — TOP AMBIENT GLOW
      ========================================================= */}

      {isDark && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            md:-top-26
            -top-30
            left-1/2
            z-0

            md:h-42
            h-30
            w-full
         

            -translate-x-1/2

            rounded-full

            bg-white/[0.72]
            blur-[120px]
          "
        />
      )}

      {/* =========================================================
          PROJECT IMAGE
      ========================================================= */}

      <div
        className={`
          relative
          z-10
          w-full

          ${
            isDark
              ? `
                [mask-image:
                  linear-gradient(
                    to_bottom,
                    black 0%,
                    black 58%,
                    rgba(0,0,0,0.98) 66%,
                    rgba(0,0,0,0.82) 73%,
                    rgba(0,0,0,0.55) 81%,
                    rgba(0,0,0,0.25) 89%,
                    transparent 100%
                  )
                ]

                [-webkit-mask-image:
                  linear-gradient(
                    to_bottom,
                    black 0%,
                    black 58%,
                    rgba(0,0,0,0.98) 66%,
                    rgba(0,0,0,0.82) 73%,
                    rgba(0,0,0,0.55) 81%,
                    rgba(0,0,0,0.25) 89%,
                    transparent 100%
                  )
                ]
              `
              : "border-border shadow-[0_12px_32px_rgba(0,0,0,0.55),0_0_24px_rgba(255,255,255,0.8)]"
          }
        `}
      >
        <div
          className="
            relative
            aspect-[18/9]
            w-full
          "
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="
              (max-width: 1024px) 100vw,
              65vw
            "
            className="
              object-contain
              object-center
            "
            priority
          />
        </div>
      </div>

      {/* =========================================================
          DARK THEME — ORGANIC BOTTOM FADE
      ========================================================= */}

      {isDark && (
        <>
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-10%]
              left-1/2
              z-20

              h-[22%]
              w-[126%]
              -translate-x-1/2

              bg-black
              blur-[12px]
              opacity-100
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-10%]
              left-1/2
              z-20

              h-[22%]
              w-[126%]
              -translate-x-1/2

              bg-black
              blur-[12px]
              opacity-100
            "
          />
        </>
      )}

      {/* =========================================================
          LIGHT THEME — SUBTLE BACKGROUND SHADOW
      ========================================================= */}

      {mounted && !isDark && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0

          "
        />
      )}
    </div>
  );
}