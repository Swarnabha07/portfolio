export default function ToolkitHeader() {
  return (
    <div className="mb-14 max-w-3xl lg:mb-16">
      {/* Section Label */}

      <span
        id="toolkit-heading"
        className="
          text-xs
          md:text-lg
          font-semibold
          uppercase
          tracking-[0.28em]
          text-text-muted
        "
      >
        Developer's Toolkit
      </span>

      {/* Supporting Text */}

      <p
        className="
          mt-6
          max-w-2xl
          text-base
          leading-8
          text-text-secondary

          sm:text-lg
        "
      >
        A curated collection of the frameworks, services, and development tools
        I rely on to build scalable, production-ready web applications.
      </p>
    </div>
  );
}
