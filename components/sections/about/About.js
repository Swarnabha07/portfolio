import BackgroundLighting from "@/components/common/BackgroundLighting/BackgroundLighting";

import AboutGrid from "./AboutGrid";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative
        isolate
        scroll-mt-28
        overflow-hidden
        py-28
        sm:py-32
      "
    >
      {/* <BackgroundLighting variant="about" /> */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* Section Label */}
        <span
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
          About
        </span>

        {/* Section Divider */}
        <div aria-hidden="true" className="mt-5 h-px w-full bg-border" />

        <AboutGrid />
      </div>
    </section>
  );
}
