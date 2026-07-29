"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "tech-stack",
  "projects",
  "journey",
  "hire-me",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (!visible.length) return;

        const id = visible[0].target.id;

        setActiveSection((prev) =>
          prev === id ? prev : id
        );
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return activeSection;
}