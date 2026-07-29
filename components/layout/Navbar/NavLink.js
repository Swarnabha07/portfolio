"use client";

import { motion } from "framer-motion";

export default function NavLink({
  link,
  active = false,
  onClick,
}) {
  return (
    <a
      href={link.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`
        group
        relative
        inline-flex
        items-center
        py-2
        text-sm
        font-medium
        transition-colors
        transition-opacity
        duration-300
        ${
          active
            ? "text-text-primary"
            : "text-text-secondary hover:text-text-primary"
        }
      `}
    >
      {link.label}

      {active && (
        <motion.span
          layoutId="navbar-indicator"
          className="
            absolute
            -bottom-0.5
            left-0
            h-0.5
            w-full
            rounded-full
            bg-accent
          "
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
          }}
        />
      )}

      {!active && (
        <span
          className="
            absolute
            -bottom-0.5
            left-0
            h-0.5
            w-0
            rounded-full
            bg-accent
            transition-all
            duration-300
            group-hover:w-full
          "
        />
      )}
    </a>
  );
}