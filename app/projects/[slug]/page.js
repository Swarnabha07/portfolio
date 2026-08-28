import { notFound } from "next/navigation";

import CaseStudyPage from "@/components/page/CaseStudyPage";
import { CASE_STUDY_STORYHUB } from "@/constants/caseStudyStoryHub";

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;

  const project = CASE_STUDY_STORYHUB;

  if (slug !== project.slug) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
