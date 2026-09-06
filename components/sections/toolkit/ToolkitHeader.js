"use client";

import { motion } from "framer-motion";

export default function ToolkitHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mb-14 lg:mb-16"
    >
      {/* Section Label */}
      <span
        id="toolkit-heading"
        className="text-sm font-semibold uppercase tracking-[0.28em] text-text-muted md:text-xl"
      >
        Developer&apos;s Toolkit
      </span>

      {/* Section Divider */}
      <div aria-hidden="true" className="mt-5 h-px w-full bg-border" />

      {/* Supporting Text */}
      <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
        A curated collection of the frameworks, services, and development tools
        I rely on to build scalable, production-ready web applications.
      </p>
    </motion.div>
  );
}
