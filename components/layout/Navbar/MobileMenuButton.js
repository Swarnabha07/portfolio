"use client";

import { Menu, X } from "lucide-react";

export default function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-border
        bg-[var(--glass-bg)]
        text-text-primary
        transition-all
        duration-300
        hover:bg-surface
        lg:hidden
      "
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
