"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  primary: `
    bg-accent
    text-accent-foreground
    border-transparent
    hover:shadow-lg
  `,

  secondary: `
    bg-transparent
    text-text-primary
    border-border
    hover:bg-surface
  `,

  ghost: `
    bg-transparent
    text-text-secondary
    border-transparent
    hover:text-text-primary
  `,
};

export default function Button({
  href = "#",
  children,
  variant = "primary",
  icon,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Link
        href={href}
        className={`
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          border
          px-6
          py-3
          text-sm
          font-medium
          transition-all
          duration-300
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-accent
          ${variants[variant]}
          ${className}
        `}
      >
        {children}

        {icon}
      </Link>
    </motion.div>
  );
}
