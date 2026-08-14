import Image from "next/image";

import ProjectCardActions from "./MoreProjectCardActions";

export default function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col

        overflow-hidden
        rounded-3xl
        border
        border-border

        bg-surface/60
        backdrop-blur-sm

        transition-all
        duration-300

        hover:-translate-y-1
      "
    >
      {/* Project Image */}

      <div
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
          border-b
          border-border
          bg-surface
        "
      >
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1280px) 50vw,
            33vw
          "
          className="
            object-cover
            object-top

            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* Content */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-6
        "
      >
        {/* Title */}

        <h3
          className="
            text-xl
            font-semibold
            tracking-tight
            text-text-primary
          "
        >
          {project.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            max-w-md
            text-sm
            leading-6
            text-text-secondary
          "
        >
          {project.description}
        </p>

        {/* Actions */}

        <div className="mt-auto pt-6">
          <ProjectCardActions
            github={project.github}
            liveDemo={project.liveDemo}
          />
        </div>
      </div>
    </article>
  );
}
