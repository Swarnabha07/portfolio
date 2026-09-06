import { notFound } from "next/navigation";

import CaseStudyPage from "@/components/page/CaseStudyPage";
import { CASE_STUDY_STORYHUB } from "@/constants/caseStudyStoryHub";

export const metadata = {
  title: "StoryHub | Full Stack Web Application",
  description:
    "Explore StoryHub, a full-stack blogging platform built with Next.js, MongoDB, NextAuth, and modern web technologies, with a focus on scalable architecture, rich content creation, and user engagement.",
};

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;

  const project = CASE_STUDY_STORYHUB;

  if (slug !== project.slug) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
