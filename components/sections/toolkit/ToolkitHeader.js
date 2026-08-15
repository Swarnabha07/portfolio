export default function ToolkitHeader() {
  return (
    <div className="mb-14 lg:mb-16">
      {/* Section Label */}

      <span
        id="toolkit-heading"
        className="
          text-sm
          md:text-xl
          font-semibold
          uppercase
          tracking-[0.28em]
          text-text-muted
        "
      >
        Developer's Toolkit
      </span>

      {/* Section Divider */}
      <div aria-hidden="true" className="mt-5 h-px w-full bg-border" />

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
