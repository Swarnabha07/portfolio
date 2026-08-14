import FeaturedProjectActions from "./FeaturedProjectActions";

export default function FeaturedProjectContent({
  title,
  overview,
  caseStudy,
  github,
  liveDemo,
}) {
  return (
    <div className="flex h-full flex-col justify-center">
      {/* Project Title */}

      <h3
        className="
          max-w-xl
          text-4xl
          font-semibold
          tracking-tight
          text-text-primary

          sm:text-5xl
        "
      >
        {title}
      </h3>

      {/* Overview */}

      <p
        className="
          mt-6
          max-w-xl

          text-base
          leading-7
          text-text-secondary

          sm:text-lg
          sm:leading-8
        "
      >
        {overview}
      </p>

      {/* Actions */}

      <div className="mt-8">
        <FeaturedProjectActions
          caseStudy={caseStudy}
          github={github}
          liveDemo={liveDemo}
        />
      </div>
    </div>
  );
}
