"use client";

import { motion } from "framer-motion";

export default function SkillsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        mb-16
      "
    >
      {/* Section Label */}

      <span
        id="skills-heading"
        className="
          inline-block
          text-sm
          md:text-xl
          font-semibold
          uppercase
          tracking-[0.28em]
          text-text-muted
  "
      >
        Skills
      </span>

      {/* Section Divider */}
      <div aria-hidden="true" className="mt-5 h-px w-full bg-border" />

      {/* Description */}

      <p
        className="
          mt-6
    max-w-2xl
    text-base
    leading-8
    text-text-secondary
    sm:text-lg
    sm:leading-9
        "
      >
        Five core areas where I design, build, and solve engineering problems
        across modern software products.
      </p>
    </motion.div>
  );
}
