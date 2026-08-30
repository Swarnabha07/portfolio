"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ClosingSection({ project }) {
  return (
    <section
      aria-labelledby="closing-section-heading"
      className="
        relative
        overflow-hidden
        py-28

        sm:py-32

        lg:py-40
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[110rem]
          px-6

          sm:px-8

          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          {/* Eyebrow */}

          <motion.span
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              inline-block

              text-xs
              font-medium
              tracking-[0.2em]
              text-text-muted
              uppercase

              sm:text-sm
            "
          >
            Explore the project
          </motion.span>

          {/* Heading */}

          <motion.h2
            id="closing-section-heading"
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.55,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-5

              text-2xl
              font-semibold
              tracking-tight
              text-text-primary

              sm:text-5xl

              lg:text-6xl
            "
          >
            See the implementation.
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-sm
              leading-7
              text-text-secondary

              sm:text-lg
              sm:leading-8
            "
          >
            Explore the source code or experience StoryHub yourself.
          </motion.p>

          {/* Actions */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.5,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-7
              gap-y-4

              sm:mt-14
            "
          >
            {/* GitHub */}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2

                  border-b
                  border-border

                  pb-1.5

                  text-sm
                  font-medium
                  text-text-primary

                  transition-all
                  duration-300

                  hover:border-text-primary
                  hover:text-text-primary
                "
              >
                <span>View Source</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            )}

            {/* Separator */}

            {/* {project.github && project.liveDemo && (
              <span
                aria-hidden="true"
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-text-muted/50
                "
              />
            )} */}

            {/* Live Demo */}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} live demo`}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2

                  border-b
                  border-border

                  pb-1.5

                  text-sm
                  font-medium
                  text-text-primary

                  transition-all
                  duration-300

                  hover:border-text-primary
                  hover:text-text-primary
                "
              >
                <span>Live Demo</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
