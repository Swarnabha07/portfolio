"use client";

import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import { NAV_LINKS } from "@/constants/navigation";
import useActiveSection from "@/hooks/useActiveSection";

export default function MobileNav({ isOpen, closeMenu }) {
  const activeSection = useActiveSection();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            left-0
            right-0
            top-[88px]
            mx-4
            rounded-2xl
            border
            border-border
            bg-[var(--glass-bg)]
            p-6
            shadow-lg
            backdrop-blur-xl
            lg:hidden
          "
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  link={link}
                  active={activeSection === link.href.replace("#", "")}
                  onClick={closeMenu}
                />
              </li>
            ))}
          </ul>

          <a
            href="#hire-me"
            onClick={closeMenu}
            className="
              mt-6
              flex
              justify-center
              rounded-full
              bg-accent
              px-5
              py-3
              text-sm
              font-medium
              text-accent-foreground
            "
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
