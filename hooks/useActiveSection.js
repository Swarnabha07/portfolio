"use client";

import { useEffect, useRef, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "toolkit",
  "projects",
  "journey",
  "hire-me",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  const activeRef = useRef("home");
  const ticking = useRef(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean);

    if (!sections.length) return;

    function updateActiveSection() {
      /*
       * Position of the "active line".
       * Slightly below the navbar gives the most natural feeling.
       */
      const marker = 120;

      let current = sections[0].id;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= marker && rect.bottom >= marker) {
          current = section.id;
          break;
        }
      }

      /*
       * If we're at the very bottom of the page,
       * always activate the last section.
       */
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = sections[sections.length - 1].id;
      }

      if (activeRef.current !== current) {
        activeRef.current = current;
        setActiveSection(current);
      }
    }

    function onScroll() {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        updateActiveSection();
        ticking.current = false;
      });
    }

    updateActiveSection();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeSection;
}
