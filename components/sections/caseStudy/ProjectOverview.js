"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

export default function ProjectOverview({ project }) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  /* =====================================================
     THEME
     ===================================================== */

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section
      aria-labelledby="project-overview-heading"
      className="
        relative
        py-24
        sm:py-28
        lg:py-32
        lg:my-32
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[100rem]
          items-center
          gap-14
          px-6

          sm:px-8

          lg:grid-cols-[1fr_1.2fr]
          lg:gap-20
          lg:px-10

          xl:gap-20
        "
      >
        {/* Content */}

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
          className="relative z-10 max-w-xl"
        >
          <h1
            id="project-overview-heading"
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-text-primary

              sm:text-5xl

              lg:text-6xl
            "
          >
            {project.name}
          </h1>

          <p
            className="
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-text-secondary

              sm:text-lg
              sm:leading-8
            "
          >
            {project.overview}
          </p>
        </motion.div>

        {/* Project Image */}

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-w-0"
        >
          {/* =====================================================
    AMBIENT LIGHT
    ===================================================== */}

          {isDark && (
            <>
              <div
                aria-hidden="true"
                className="
        pointer-events-none
        absolute
        inset-[-18%]
        z-0

        bg-white/[0.16]

        blur-[100px]
      "
              />

              <div
                aria-hidden="true"
                className="
        pointer-events-none
        absolute
        inset-[-10%]
        z-0

        bg-white/[0.18]

        blur-[65px]
      "
              />

              <div
                aria-hidden="true"
                className="
        pointer-events-none
        absolute
        inset-[-5%]
        z-0

        bg-white/[0.12]

        blur-[35px]
      "
              />
            </>
          )}

          {/* =====================================================
              PROJECT IMAGE
              ===================================================== */}

         <div
  className={`relative z-10 ${
    !isDark ? "shadow-[0_30px_100px_rgba(0,0,0,0.25)]" : ""
  }`}
>
  <Image
    src={project.image}
    alt={`${project.name} project overview`}
    width={1600}
    height={1000}
    sizes="
      (max-width: 1024px) 100vw,
      60vw
    "
    className="
      block
      h-auto
      w-full
      object-contain
    "
    priority
  />
</div>
        </motion.div>
      </div>
    </section>
  );
}
