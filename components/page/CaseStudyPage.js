"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";

import CoreFeatures from "../sections/caseStudy/CoreFeatures";
import EngineeringChallenges from "../sections/caseStudy/EngineeringChallenges";
import FutureRoadmap from "../sections/caseStudy/FutureRoadmap";
import LessonsLearned from "../sections/caseStudy/LessonsLearned";
import ProjectOverview from "../sections/caseStudy/ProjectOverview";
import SystemArchitecture from "../sections/caseStudy/SystemArchitecture";
import TechnicalStack from "../sections/caseStudy/TechnicalStack";
import WhyIBuiltIt from "../sections/caseStudy/WhyIBuiltIt";
import ClosingSection from "../sections/caseStudy/ClosingSection";

export default function CaseStudyPage({ project }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  /* =====================================================
     THEME
     ===================================================== */

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  /* =====================================================
     RESET SCROLL POSITION
     ===================================================== */

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  /* =====================================================
     SCROLL TO TOP VISIBILITY
     ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     SCROLL TO TOP
     ===================================================== */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Back to Portfolio */}

      <Link
        href="/"
        aria-label="Back to portfolio"
        className="
    group
    absolute
    left-4
    top-4
    z-50

    inline-flex
    items-center
    gap-1.5

    text-xs
    font-medium
    text-text-muted

    transition-colors
    duration-300

    hover:text-text-primary

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-text-primary/50

    sm:left-7
    sm:top-7
    sm:gap-2
    sm:text-sm

    lg:left-10
    lg:top-10
  "
      >
        <ArrowLeft
          size={15}
          strokeWidth={1.8}
          className="
      transition-transform
      duration-300
      group-hover:-translate-x-1

      sm:h-4
      sm:w-4
    "
        />

        <span>Back to Portfolio</span>
      </Link>

      {/* Case Study Content */}

      <main>
        <ProjectOverview project={project.project} />

        <WhyIBuiltIt section={project.sections.whyIBuiltIt} />

        <CoreFeatures section={project.sections.coreFeatures} />

        <TechnicalStack section={project.sections.technicalStack} />

        <SystemArchitecture section={project.sections.systemArchitecture} />

        <EngineeringChallenges
          section={project.sections.engineeringChallenges}
        />

        <LessonsLearned section={project.sections.lessonsLearned} />

        <FutureRoadmap section={project.sections.futureRoadmap} />

        <ClosingSection project={project.project} />
      </main>

      {/* Scroll To Top */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        aria-hidden={!showScrollTop}
        tabIndex={showScrollTop ? 0 : -1}
        className={`
    fixed
    bottom-4
    right-4
    z-50

    inline-flex
    h-10
    w-10
    items-center
    justify-center

    rounded-full

    border

    shadow-[0_10px_35px_rgba(0,0,0,0.25)]

    transition-all
    duration-300

    hover:-translate-y-1

    focus-visible:outline-none
    focus-visible:ring-2

    ${
      isDark
        ? `
          border-white/10
          bg-white
          text-black
          hover:bg-white/90
          focus-visible:ring-white/60
        `
        : `
          border-black/10
          bg-black
          text-white
          hover:bg-black/90
          focus-visible:ring-black/40
        `
    }

    sm:bottom-6
    sm:right-6
    sm:h-11
    sm:w-11

    lg:bottom-8
    lg:right-10

    ${
      showScrollTop
        ? "translate-y-0 opacity-100"
        : "pointer-events-none translate-y-3 opacity-0"
    }
  `}
      >
        <ArrowUp size={16} strokeWidth={1.8} />
      </button>
    </>
  );
}
