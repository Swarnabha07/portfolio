"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function FeaturedProjectActions({
  caseStudy,
  github,
  liveDemo,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="flex flex-wrap items-center gap-3"
    >
      {/* View Case Study */}
      <Link
        href={caseStudy}
        className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
      >
        <span>View Case Study</span>
        <BookOpen size={16} strokeWidth={2} />
      </Link>

      {/* GitHub */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-text-primary backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface"
      >
        <FaGithub size={16} />
        <span>GitHub</span>
      </a>

      {/* Live Demo */}
      <a
        href={liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-text-primary backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface"
      >
        <span>Live Demo</span>
        <ArrowUpRight size={16} strokeWidth={2} />
      </a>
    </motion.div>
  );
}
