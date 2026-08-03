"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ToolkitItem({ item }) {
  return (
    <motion.li
      whileHover="hover"
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="
        group
        flex
        items-start
        gap-3
        w-full
        rounded-xl
        px-3
        py-2.5

        transition-colors
        duration-200

        hover:bg-white/[0.03]
        dark:hover:bg-white/[0.03]
      "
    >
      {/* Icon */}

      <motion.div
        variants={{
          hover: {
            x: 3,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 26,
        }}
        className="
          mt-0.5
          shrink-0
          text-text-muted
          group-hover:text-text-primary
          transition-colors
        "
      >
        <ChevronRight size={18} strokeWidth={2.4} />
      </motion.div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <h4
          className="
            text-sm
            font-medium
            text-text-primary
          "
        >
          {item.name}
        </h4>

        <p
          className="
            mt-1
            text-sm
            leading-6
            text-text-muted
            transition-colors
            group-hover:text-text-secondary
          "
        >
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
