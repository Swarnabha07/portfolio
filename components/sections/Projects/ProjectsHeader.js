"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mb-12 sm:mb-14 lg:mb-16"
    >
      {/* Section Label */}
      <span
        id="projects-heading"
        className="inline-block text-sm font-semibold uppercase tracking-[0.28em] text-text-muted md:text-xl"
      >
        Projects
      </span>

      {/* Section Divider */}
      <div aria-hidden="true" className="mt-5 h-px w-full bg-border" />
    </motion.header>
  );
}
