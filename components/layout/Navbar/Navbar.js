"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useActiveSection from "@/hooks/useActiveSection";

import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";

import ThemeToggle from "@/components/common/ThemeToggle";

import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        aria-label="Primary Navigation"
        className="
          relative
          flex
          h-[72px]
          w-full
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-border
          bg-[var(--glass-bg)]
          px-6
          shadow-lg
          backdrop-blur-xl
        "
      >
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                link={link}
                active={activeSection === link.href.replace("#", "")}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#hire-me"
            className="
              hidden
              rounded-full
              bg-accent
              px-5
              py-2.5
              text-sm
              font-medium
              text-accent-foreground
              transition-transform
              duration-300
              hover:scale-[1.03]
              lg:inline-flex
            "
          >
            Hire Me
          </a>

          <ThemeToggle />

          <MobileMenuButton isOpen={mobileOpen} onClick={toggleMenu} />
        </div>

        <MobileNav isOpen={mobileOpen} closeMenu={closeMenu} />
      </nav>
    </motion.header>
  );
}
