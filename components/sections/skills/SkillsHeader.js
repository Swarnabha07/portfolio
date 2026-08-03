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
  max-w-3xl
      "
    >
      {/* Section Label */}

      <span
        id="skills-heading"
        className="
    inline-block
          text-xs
          md:text-lg
          font-semibold
          uppercase
          tracking-[0.28em]
          text-text-muted
  "
      >
        Skills
      </span>

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
