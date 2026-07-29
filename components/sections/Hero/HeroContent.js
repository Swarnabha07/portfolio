"use client";

import { motion } from "framer-motion";

import HeroActions from "./HeroActions";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
        relative
        z-10
        mx-auto
        flex
        max-w-4xl
        flex-col
        items-center
        text-center
      "
    >
      {/* Availability */}
      <motion.div variants={itemVariants}>
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-border
            bg-[var(--glass-bg)]
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-text-secondary
            backdrop-blur-md
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-500
            "
          />
          Available for Internships & Opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        id="hero-heading"
        variants={itemVariants}
        className="
          mt-8
          text-5xl
          font-black
          tracking-[-0.05em]
          text-text-primary
          sm:text-6xl
          lg:text-7xl
          xl:text-8xl
        "
      >
        Swarnabha
        <br />
        Banerjee
      </motion.h1>

      {/* Role */}
      <motion.p
        variants={itemVariants}
        className="
          mt-6
          text-lg
          font-medium
          text-text-muted
          sm:text-xl
        "
      >
        Full-Stack Web Developer
      </motion.p>

      {/* Introduction */}
      <motion.p
        variants={itemVariants}
        className="
          mt-8
          max-w-2xl
          text-base
          leading-8
          text-text-secondary
          sm:text-lg
        "
      >
        Building production-oriented full-stack web applications with modern
        JavaScript technologies, focusing on scalable architecture, clean code,
        and thoughtful user experiences.
      </motion.p>

      {/* CTA */}
      <motion.div variants={itemVariants}>
        <HeroActions />
      </motion.div>
    </motion.div>
  );
}
