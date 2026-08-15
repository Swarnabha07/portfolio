export default function ProjectsHeader() {
  return (
    <header className="mb-12 sm:mb-14 lg:mb-16">
      {/* Section Label */}
      <span
        id="projects-heading"
        className="
          inline-block
          text-sm
          md:text-xl
          font-semibold
          uppercase
          tracking-[0.28em]
          text-text-muted
  "
      >
        Projects
      </span>

      {/* Section Divider */}
      <div aria-hidden="true" className="mt-5 h-px w-full bg-border" />
    </header>
  );
}
