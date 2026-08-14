import { ArrowUpRight, GitFork } from "lucide-react";

export default function ProjectCardActions({ github, liveDemo }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* GitHub */}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-1.5

          text-sm
          font-medium
          text-text-secondary

          transition-colors
          duration-300

          hover:text-text-primary
        "
      >
        <GitFork size={15} strokeWidth={2} />
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
          gap-1.5

          text-sm
          font-medium
          text-text-secondary

          transition-colors
          duration-300

          hover:text-text-primary
        "
      >
        Live Demo
        <ArrowUpRight size={15} strokeWidth={2} />
      </a>
    </div>
  );
}
