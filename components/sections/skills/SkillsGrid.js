"use client";

import SkillCard from "./SkillCard";

import { SKILLS } from "@/constants/skills";

export default function SkillsGrid() {
  return (
    <div
      className="
        grid
        gap-6

        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {SKILLS.map((skill, index) => (
        <SkillCard key={skill.id} skill={skill} index={index} />
      ))}
    </div>
  );
}
