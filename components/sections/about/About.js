"use client";

import { motion } from "framer-motion";

import BackgroundLighting from "@/components/common/BackgroundLighting/BackgroundLighting";

import AboutGrid from "./AboutGrid";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate scroll-mt-28 overflow-hidden py-28 sm:py-32"
    >
      {/* <BackgroundLighting variant="about" /> */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* Section Label */}
          <span
            id="about-heading"
            className="inline-block text-sm font-semibold uppercase tracking-[0.28em] text-text-muted md:text-xl"
          >
            About
          </span>

          {/* Section Divider */}
          <div aria-hidden="true" className="mt-5 h-px w-full bg-border" />
        </motion.div>

        <AboutGrid />
      </div>
    </section>
  );
}
