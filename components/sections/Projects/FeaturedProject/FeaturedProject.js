import FeaturedProjectContent from "./FeaturedProjectContent";
import FeaturedProjectImage from "./FeaturedProjectImage";

export default function FeaturedProject({ project }) {
  return (
    <article className="relative">
      {/* Main Composition */}

      <div
        className="
          flex
          flex-col
          lg:gap-16

          gap-12
        "
      >
        {/* Project Content */}

        <div className="relative z-10">
          <FeaturedProjectContent
            title={project.title}
            overview={project.overview}
            caseStudy={project.caseStudy}
            github={project.github}
            liveDemo={project.liveDemo}
          />
        </div>

        {/* Project Visual */}

        <div
          className="
            relative
            min-w-0
            w-full
          "
        >
          <FeaturedProjectImage
            src={project.image}
            alt={`${project.title} project preview`}
          />
        </div>
      </div>

      {/* Bottom Divider */}

      <div
        className="
          mt-4
          h-px
          w-full
        "
      />
    </article>
  );
}
