import ProjectsHeader from "./ProjectsHeader";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import MoreProjects from "./MoreProjects/MoreProjects";

import { FEATURED_PROJECT } from "@/constants/featuredProject";
import { PROJECTS } from "@/constants/moreProjects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden scroll-mt-10 py-24 sm:py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <ProjectsHeader />

        {/* Featured Project */}
        <div className="mt-12 sm:mt-16">
          <FeaturedProject project={FEATURED_PROJECT} />
        </div>

        {/* More Projects */}
        <div className="mt-20 sm:mt-24">
          <MoreProjects projects={PROJECTS} />
        </div>
      </div>
    </section>
  );
}
