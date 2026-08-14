"use client";

import { motion } from "framer-motion";

import { ABOUT } from "@/constants/about";

import SocialLinks from "./SocialLinks";

export default function AboutText() {
  const [intro, ...rest] = ABOUT.paragraphs;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl"
    >
      {/* Paragraphs */}
      <div className="mt-8 space-y-6">
        <p
          className="
            text-base
            leading-8
            text-text-secondary
            sm:text-lg
            sm:leading-9
          "
        >
          I'm{" "}
          <span className="font-semibold text-text-primary">
            Swarnabha Banerjee
          </span>
          {intro.split("I'm Swarnabha Banerjee")[1]}
        </p>

        {rest.map((paragraph, index) => (
          <p
            key={index}
            className="
              text-base
              leading-8
              text-text-secondary
              sm:text-lg
              sm:leading-9
            "
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <SocialLinks />
      </div>
    </motion.div>
  );
}
