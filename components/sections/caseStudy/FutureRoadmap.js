"use client";

import { motion } from "framer-motion";

export default function FutureRoadmap({ section }) {
  const [recommendation, messaging] = section.items;

  return (
    <section
      aria-labelledby="future-roadmap-heading"
      className="
        relative
        overflow-hidden
         py-24
        sm:py-28
        lg:py-26
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

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <h2
            id="future-roadmap-heading"
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

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-text-secondary

              sm:text-lg
              sm:leading-8
            "
          >
            Where StoryHub could evolve next.
          </p>
        </motion.div>

        {/* Future Directions */}

        <div
          className="
            relative
            mt-20

            sm:mt-24

            lg:mt-32
          "
        >
          {/* Origin */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
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
              relative
              z-10
              flex
              justify-center
            "
          >
            <div
              className="
                relative
                flex
                h-16
                items-center
                justify-center

                rounded-full

                border
                border-white/[0.12]

                bg-white/[0.035]

                px-7

                text-sm
                font-medium
                tracking-wide
                text-text-primary

                shadow-[0_20px_70px_rgba(0,0,0,0.22)]

                backdrop-blur-xl

                sm:h-[4.5rem]
                sm:px-9
                sm:text-base
              "
            >
              StoryHub
              {/* Origin Glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -z-10

                  rounded-full

                  bg-white/[0.04]

                  blur-xl
                "
              />
            </div>
            {/* Mobile / Tablet Connector */}

            <div
              aria-hidden="true"
              className="
      absolute
      left-1/2
      top-full
      h-20
      w-px
      -translate-x-1/2
      bg-border

      sm:h-24

      lg:hidden
    "
            />
          </motion.div>

          {/* Branching Structure */}

          <div
            aria-hidden="true"
            className="
    pointer-events-none
    absolute
    left-1/2
    top-16

    hidden
    h-24
    w-full

    -translate-x-1/2

    sm:top-[4.5rem]
    sm:h-28

    lg:block
  "
          >
            {/* Vertical Stem */}

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.45,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-1/2
                top-0
                h-1/2
                w-px
                origin-top
                -translate-x-1/2
                bg-border
              "
            />

            {/* Horizontal Branch */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.55,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-1/4
right-1/4
                top-1/2
                h-px
                origin-center
                bg-border
              "
            />

            {/* Left Branch */}

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.35,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-1/4
                top-1/2
                h-1/2
                w-px
                origin-top
                bg-border
              "
            />

            {/* Right Branch */}

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.35,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                right-1/4
                top-1/2
                h-1/2
                w-px
                origin-top
                bg-border
              "
            />
          </div>

          {/* Direction Content */}

          <div
            className="
    relative
    z-10
    mt-20

    grid
    grid-cols-1
    gap-14

    sm:mt-24
    sm:gap-16

    lg:mt-32
    lg:grid-cols-2
    lg:gap-24
  "
          >
            {/* Recommendation */}

            <motion.article
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
      relative
      min-w-0
      px-2
      pt-4

      sm:px-4
      sm:pt-6

      lg:overflow-visible
    "
            >
              <div
                aria-hidden="true"
                className="
    absolute
    left-1/2
    top-full
    h-14
    w-px
    -translate-x-1/2
    bg-border

    sm:h-16

    lg:hidden
  "
              />
              <div
                className="
        min-w-0
        overflow-visible
      "
              >
                <h3
                  className="
          whitespace-nowrap
          text-base
          font-semibold
          tracking-tight
          text-text-primary

          sm:text-3xl

          lg:text-4xl
        "
                >
                  {recommendation.title}
                </h3>

                <p
                  className="
          mt-6
          text-xs
          leading-7
          text-text-secondary

          sm:mt-7
          sm:text-lg
          sm:leading-8
        "
                >
                  {recommendation.description}
                </p>
              </div>
            </motion.article>

            {/* Messaging */}

            <motion.article
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
      relative
      min-w-0
      px-2
      pt-4

      sm:px-4
      sm:pt-6
    "
            >
              <div className="min-w-0 overflow-visible">
                <h3
                  className="
          text-base
          font-semibold
          tracking-tight
          text-text-primary

          sm:text-3xl

          lg:text-4xl
        "
                >
                  {messaging.title}
                </h3>

                <p
                  className="
          mt-6
          text-xs
          leading-7
          text-text-secondary

          sm:mt-7
          sm:text-lg
          sm:leading-8
        "
                >
                  {messaging.description}
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
