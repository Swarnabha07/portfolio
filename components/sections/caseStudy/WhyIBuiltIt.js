"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function WhyIBuiltIt({ section }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section
      aria-labelledby="why-i-built-it-heading"
      className="
        relative
        py-24
        sm:py-28
        lg:py-32
        lg:my-32
      "
    >
      <div
        className="
    mx-auto
    grid
    w-full
    max-w-[100rem]
    items-center
    gap-12
    px-6

    sm:px-8

    lg:grid-cols-[1.35fr_1fr]
    lg:gap-16
    lg:px-10

    xl:gap-36
  "
      >
        {/* =====================================================
            HEADING — MOBILE / TABLET ONLY
            ===================================================== */}

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            max-w-xl

            lg:hidden
          "
        >
          <h2
            id="why-i-built-it-heading"
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-text-primary

              sm:text-4xl
            "
          >
            {section.title}
          </h2>
        </motion.div>

        {/* =====================================================
            PROJECT IMAGE
            ===================================================== */}

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            min-w-0
          "
        >
          {/* Ambient Light */}

          {isDark && (
            <>
              <div
                aria-hidden="true"
                className="
        pointer-events-none
        absolute
        inset-[-18%]
        z-0

        bg-white/[0.16]

        blur-[100px]
      "
              />

              <div
                aria-hidden="true"
                className="
        pointer-events-none
        absolute
        inset-[-10%]
        z-0

        bg-white/[0.18]

        blur-[65px]
      "
              />

              <div
                aria-hidden="true"
                className="
        pointer-events-none
        absolute
        inset-[-5%]
        z-0

        bg-white/[0.12]

        blur-[35px]
      "
              />
            </>
          )}

          {/* Image */}

          <div
            className={`relative z-10 ${
              !isDark ? "shadow-[0_30px_100px_rgba(0,0,0,0.25)]" : ""
            }`}
          >
            <Image
              src={section.image}
              alt="StoryHub development and engineering overview"
              width={1600}
              height={1000}
              sizes="
      (max-width: 1024px) 100vw,
      68vw
    "
              className="
      block
      h-auto
      w-full
      object-contain
    "
            />
          </div>
        </motion.div>

        {/* =====================================================
            CONTENT
            ===================================================== */}

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
    relative
    z-10
    min-w-0
    max-w-lg
  "
        >
          {/* Desktop Heading */}

          <h2
            id="why-i-built-it-heading"
            className="
      hidden

      lg:block

      text-5xl
      font-semibold
      tracking-tight
      text-text-primary
    "
          >
            {section.title}
          </h2>

          {/* Paragraphs */}

          <div
            className="
      mt-0
      space-y-3.5

      text-sm
      leading-[1.58]
      text-text-secondary

      sm:space-y-4
      sm:text-base
      sm:leading-[1.65]

      lg:mt-5
      lg:space-y-3.5
      lg:text-[0.93rem]
      lg:leading-[1.58]

      xl:text-[0.95rem]
      xl:leading-[1.62]
    "
          >
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
