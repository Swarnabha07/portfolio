"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { ABOUT } from "@/constants/about";

export default function CurrentlyExploring() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.15,
      }}
      className={`
        rounded-2xl
        border
        bg-surface/50
        p-8
        backdrop-blur-sm
        lg:mt-14

        shadow-[var(--shadow-md)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1.5

        ${
          isDark
            ? `
              border-border
              hover:border-white/15
              hover:shadow-[0_12px_32px_rgba(0,0,0,0.25),0_0_24px_rgba(255,255,255,0.14)]
            `
            : `
              border-border
              hover:shadow-[0_12px_32px_rgba(0,0,0,0.25),0_0_24px_rgba(255,255,255,0.14)]
            `
        }
      `}
    >
      {/* Label */}

      <span
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.28em]
          text-text-muted
        "
      >
        Currently Exploring
      </span>

      {/* List */}

      <ul className="mt-8 space-y-5">
        {ABOUT.currentlyExploring.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="flex items-start gap-4"
          >
            <ChevronRight
              size={22}
              strokeWidth={3}
              className="
                mt-1
                shrink-0
                text-text-muted
              "
            />

            <p
              className="
                text-sm
                leading-7
                text-text-secondary
                sm:text-base
              "
            >
              {item.text}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.aside>
  );
}
