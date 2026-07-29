"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-zinc-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:bg-white/10
        hover:text-white
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-zinc-400
        dark:border-white/10
        dark:bg-white/5
        dark:text-zinc-300
        dark:hover:bg-white/10
        dark:hover:text-white

        light:border-zinc-300
      "
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
