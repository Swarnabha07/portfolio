"use client";

import { motion } from "framer-motion";
import JourneyItem from "./JourneyItem";
import { journey } from "@/constants/journey";

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="toolkit-heading"
      className="
        relative
        isolate
        overflow-hidden
        scroll-mt-10

        py-24
        sm:py-28
        lg:py-32
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl

          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className=""
        >
          <span
            id="toolkit-heading"
            className="
          text-sm
          md:text-xl
          font-semibold
          uppercase
          tracking-[0.28em]
          text-text-muted
        "
          >
            Journey
          </span>

          {/* Section Divider */}
          <div aria-hidden="true" className="mt-5 h-px w-full bg-border" />

          <p
            className="
          mt-6
    max-w-2xl
    text-base
    leading-8
    text-text-secondary
    sm:text-lg
    sm:leading-9
        "
          >
            A timeline of how I went from writing my first lines of code and
            learning the fundamentals to building and shipping full-stack
            applications
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE
            ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
          className="
            relative
            mt-16

            sm:mt-20

            lg:mt-28
          "
        >
          {/* =================================================
              VERTICAL TIMELINE LINE
              ================================================= */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[7px]
              top-2
              bottom-2
              w-px

              bg-border

              sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          {/* =================================================
              TIMELINE ITEMS
              ================================================= */}

          <div className="relative ">
            {journey.map((item, index) => (
              <JourneyItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
