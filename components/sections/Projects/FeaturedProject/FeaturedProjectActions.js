"use client";

import Link from "next/link";
import { ArrowUpRight, GitFork } from "lucide-react";

export default function FeaturedProjectActions({
  caseStudy,
  github,
  liveDemo,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* View Case Study */}

      <Link
        href={caseStudy}
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          bg-text-primary
          px-5
          py-2.5

          text-sm
          font-medium
          text-background

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:opacity-90
        "
      >
        View Case Study
        <ArrowUpRight size={16} strokeWidth={2} />
      </Link>

      {/* GitHub */}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-border

          bg-surface/60

          px-5
          py-2.5

          text-sm
          font-medium
          text-text-primary

          backdrop-blur-sm

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:bg-surface
        "
      >
        <GitFork size={16} strokeWidth={2} />
        GitHub
      </a>

      {/* Live Demo */}

      <a
        href={liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-border

          bg-surface/60

          px-5
          py-2.5

          text-sm
          font-medium
          text-text-primary

          backdrop-blur-sm

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:bg-surface
        "
      >
        Live Demo
        <ArrowUpRight size={16} strokeWidth={2} />
      </a>
    </div>
  );
}
