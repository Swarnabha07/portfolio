"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp } from "lucide-react";

import CoreFeatures from "../sections/caseStudy/CoreFeatures";
import EngineeringChallenges from "../sections/caseStudy/EngineeringChallenges";
import FutureRoadmap from "../sections/caseStudy/FutureRoadmap";
import LessonsLearned from "../sections/caseStudy/LessonsLearned";
import ProjectOverview from "../sections/caseStudy/ProjectOverview";
import SystemArchitecture from "../sections/caseStudy/SystemArchitecture";
import TechnicalStack from "../sections/caseStudy/TechnicalStack";
import WhyIBuiltIt from "../sections/caseStudy/WhyIBuiltIt";

export default function CaseStudyPage({ project }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
          fixed
          left-5
          top-5
          z-50

          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-border

          bg-background/70

          px-4
          py-2.5

          text-sm
          font-medium
          text-text-secondary

          shadow-[0_10px_40px_rgba(0,0,0,0.18)]

          backdrop-blur-xl

          transition-all
          duration-300

          hover:-translate-x-0.5
          hover:bg-surface
          hover:text-text-primary

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-text-primary/50

          sm:left-7
          sm:top-7

          lg:left-10
          lg:top-8
        "
      >
        <ArrowLeft size={16} strokeWidth={1.8} />

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
          bottom-5
          right-5
          z-50

          inline-flex
          h-11
          w-11
          items-center
          justify-center

          rounded-full

          border
          border-border

          bg-background/70

          text-text-secondary

          shadow-[0_10px_40px_rgba(0,0,0,0.20)]

          backdrop-blur-xl

          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-surface
          hover:text-text-primary

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-text-primary/50

          sm:bottom-7
          sm:right-7

          lg:bottom-8
          lg:right-10

          ${
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }
        `}
      >
        <ArrowUp size={17} strokeWidth={1.8} />
      </button>
    </>
  );
}
