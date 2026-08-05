import BackgroundLighting from "@/components/common/BackgroundLighting/BackgroundLighting";

import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="
        relative
        isolate
        overflow-hidden
        scroll-mt-10
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Background */}

      {/* <BackgroundLighting variant="skills" /> */}

      {/* Content */}

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
        <SkillsHeader />

        <SkillsGrid />
      </div>
    </section>
  );
}
