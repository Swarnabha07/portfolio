"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SOCIAL_LINKS } from "@/constants/socials";

export default function SocialLinks() {
  return (
    <motion.nav
      aria-label="Social links"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      className="flex flex-wrap items-center gap-8"
    >
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="
            group
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-text-secondary
            transition-colors
            duration-300
            hover:text-text-primary
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white/30
            focus-visible:ring-offset-4
            focus-visible:ring-offset-background
          "
        >
          <span className="relative">
            {social.label}

            <span
              className="
                absolute
                -bottom-1
                left-0
                h-px
                w-0
                bg-current
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </span>

          <ArrowUpRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>
      ))}
    </motion.nav>
  );
}
