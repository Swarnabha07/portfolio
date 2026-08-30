"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function EngineeringChallenges({ section }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      aria-labelledby="engineering-challenges-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="
        relative
        py-24
        sm:py-28
        lg:my-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[100rem]
          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* Section Header */}

        <motion.div variants={revealVariants} className="max-w-3xl">
          <h2
            id="engineering-challenges-heading"
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-text-primary

              sm:text-4xl

              lg:text-5xl
            "
          >
            {section.title}
          </h2>
        </motion.div>

        {/* Questions */}

        <motion.div
          variants={revealVariants}
          transition={{
            duration: 0.75,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            border-t
            border-border

            sm:mt-16

            lg:mt-20
          "
        >
          {section.questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className="
                  border-b
                  border-border
                "
              >
                {/* Question */}

                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`engineering-answer-${index}`}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-8
                    py-7
                    text-left

                    sm:py-8

                    lg:py-9

                    focus-visible:outline-none
                  "
                >
                  <div className="flex min-w-0 items-start gap-5">
                    {/* Question Text */}

                    <span
                      className="
                        max-w-4xl
                        text-sm
                        font-medium
                        leading-7
                        text-text-primary

                        transition-colors
                        duration-300

                        group-hover:text-text-primary/80

                        sm:text-xl
                        sm:leading-8

                        lg:text-2xl
                        lg:leading-9
                      "
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Expand Icon */}

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-border

                      bg-surface/40

                      text-text-secondary

                      transition-all
                      duration-300

                      group-hover:bg-surface
                      group-hover:text-text-primary

                      group-focus-visible:ring-2
                      group-focus-visible:ring-text-primary/40

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={1.7}
                      className={`
                        transition-transform
                        duration-300
                        ease-out

                        ${isOpen ? "rotate-180" : "rotate-0"}
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}

                <div
                  id={`engineering-answer-${index}`}
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-400
                    ease-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        pb-8
                        pl-[calc(0.75rem+1.25rem)]
                        pr-2

                        sm:pb-10
                        sm:pl-[calc(0.75rem+1.25rem)]
                        sm:pr-12

                        lg:pb-12
                        lg:pl-[calc(0.75rem+1.25rem)]
                        lg:pr-20
                      "
                    >
                      {/* Regular Answer */}

                      {item.answer?.length > 0 && (
                        <div
                          className="
                            max-w-4xl
                            space-y-5

                            text-xs
                            leading-7
                            text-text-secondary

                            sm:space-y-6
                            sm:text-lg
                            sm:leading-8
                          "
                        >
                          {item.answer.map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex}>{paragraph}</p>
                          ))}
                        </div>
                      )}

                      {/* Security / Structured Subsections */}

                      {item.subsections?.length > 0 && (
                        <div className="mt-8 max-w-4xl space-y-8 sm:mt-10 sm:space-y-10">
                          {item.subsections.map(
                            (subsection, subsectionIndex) => (
                              <div key={subsectionIndex}>
                                <h3
                                  className="
                                    text-xs
                                    font-medium
                                    tracking-tight
                                    text-text-primary

                                    sm:text-lg
                                  "
                                >
                                  {subsection.title}
                                </h3>

                                <div
                                  className="
                                    mt-3
                                    space-y-4

                                    text-[10px]
                                    leading-7
                                    text-text-secondary

                                    sm:mt-4
                                    sm:space-y-5
                                    sm:text-lg
                                    sm:leading-8
                                  "
                                >
                                  {subsection.paragraphs.map(
                                    (paragraph, paragraphIndex) => (
                                      <p key={paragraphIndex}>{paragraph}</p>
                                    ),
                                  )}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
