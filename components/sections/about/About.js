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
        <h2 id="about-heading" className="sr-only">
          About
        </h2>

        <AboutGrid />
      </div>
    </section>
  );
}
