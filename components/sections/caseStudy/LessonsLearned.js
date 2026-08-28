"use client";

import { motion } from "framer-motion";

export default function LessonsLearned({ section }) {
  return (
    <section
      aria-labelledby="lessons-learned-heading"
      className="
        relative
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[110rem]
          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* Section Header */}

        <div className="max-w-3xl">
          <h2
            id="lessons-learned-heading"
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-text-primary

              sm:text-4xl

              lg:text-5xl
            "
          >
            {section.title}
          </h2>
        </div>

        {/* Lessons */}

        <div
          className="
            relative
            mt-14

            sm:mt-18

            lg:mt-24
          "
        >
          {/* Reading Track */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[1.35rem]
              top-0
              w-px
              bg-border/70

              sm:left-[1.55rem]
            "
          />

          <div className="space-y-20 sm:space-y-24 lg:space-y-28">
            {section.items.map((item, index) => (
              <motion.article
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  grid
                  grid-cols-[2.75rem_minmax(0,1fr)]
                  gap-6

                  sm:grid-cols-[3.25rem_minmax(0,1fr)]
                  sm:gap-8

                  lg:grid-cols-[4rem_minmax(0,1fr)]
                  lg:gap-10
                "
              >
                {/* Lesson Number */}

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-border

                      bg-background

                      text-xs
                      font-medium
                      tabular-nums
                      tracking-[0.08em]
                      text-text-muted

                      sm:h-12
                      sm:w-12

                      lg:h-13
                      lg:w-13
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Lesson Content */}

                <div
                  className="
                    min-w-0
                    max-w-4xl
                    pt-1
                  "
                >
                  {/* Lesson Title */}

                  <h3
                    className="
                      max-w-3xl
                      text-2xl
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-text-primary

                      sm:text-3xl
                      sm:leading-tight

                      lg:text-4xl
                      lg:leading-[1.15]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Lesson Description */}

                  <div
                    className="
                      mt-7
                      max-w-3xl
                      space-y-5

                      text-base
                      leading-7
                      text-text-secondary

                      sm:mt-8
                      sm:space-y-6
                      sm:text-lg
                      sm:leading-8

                      lg:mt-9
                    "
                  >
                    {item.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Takeaway */}

                  <div
                    className="
                      relative
                      mt-9
                      max-w-3xl
                      border-l
                      border-text-primary/30
                      pl-5

                      sm:mt-10
                      sm:pl-6

                      lg:mt-12
                    "
                  >
                    <span
                      className="
                        text-[0.68rem]
                        font-medium
                        tracking-[0.2em]
                        text-text-muted
                        uppercase

                        sm:text-xs
                      "
                    >
                      Real lesson
                    </span>

                    <p
                      className="
                        mt-3
                        text-base
                        font-medium
                        leading-7
                        text-text-primary

                        sm:text-lg
                        sm:leading-8

                        lg:text-xl
                        lg:leading-8
                      "
                    >
                      {item.takeaway.replace(/^Real lesson:\s*/i, "")}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
