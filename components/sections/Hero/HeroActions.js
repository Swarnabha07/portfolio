"use client";

import { ArrowDown, ArrowRight, Folder } from "lucide-react";

import Button from "@/components/common/Button";

export default function HeroActions() {
  return (
    <div
      className="
        mt-10
        flex
        flex-col
        items-stretch
        gap-4
        sm:flex-row
        sm:flex-wrap
      "
    >
      <Button href="#hire-me" variant="primary" icon={<ArrowRight size={18} />}>
        Hire Me
      </Button>

      <Button href="#projects" variant="secondary" icon={<Folder size={18} />}>
        View Projects
      </Button>

      <Button href="#about" variant="secondary" icon={<ArrowDown size={18} />}>
        Know more about me
      </Button>

      {/* <Button
        href="/Swarnabha-Banerjee_Resume.pdf"
        download="Swarnabha-Banerjee_Resume.pdf"
        variant="secondary"
        icon={<Download size={18} />}
      >
        Download Resume
      </Button> */}
    </div>
  );
}