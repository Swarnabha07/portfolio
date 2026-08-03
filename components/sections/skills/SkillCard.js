"use client";

import { motion } from "framer-motion";

import CardTilt from "@/components/common/CardTilt";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SkillCard({ skill, index }) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const Icon = skill.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <CardTilt
        className={`
    group
    relative
    flex
    min-h-[240px]
    flex-col
    items-center
    justify-center
    overflow-hidden
    rounded-3xl
    border
    bg-surface/60
    p-10
    text-center
    backdrop-blur-sm
    transition-all
    duration-300

    ${
      isDark
        ? "border-border hover:border-white/15 hover:shadow-[0_0_45px_rgba(255,255,255,0.05)]"
        : "border-border hover:shadow-xl"
    }
  `}
      >
        {/* Icon Container */}

        <motion.div
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
          className="
            mb-8

            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-full

            border
            border-border

            bg-white/[0.03]
            dark:bg-white/[0.04]
          "
        >
          <Icon size={32} strokeWidth={1.8} className="text-text-primary" />
        </motion.div>

        {/* Skill Title */}

        <h3
          className="
            text-xl
            font-semibold
            leading-tight
            tracking-tight
            text-text-primary
          "
        >
          {skill.title}
        </h3>
      </CardTilt>
    </motion.article>
  );
}
