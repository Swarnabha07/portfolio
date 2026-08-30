import Image from "next/image";
import { motion } from "framer-motion";

export default function SystemArchitecture({ section }) {
  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      aria-labelledby="system-architecture-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
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
          w-full
          max-w-[100rem]
          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* Section Header */}

        <motion.div variants={revealVariants} className="max-w-2xl">
          <h2
            id="system-architecture-heading"
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

        {/* Architecture Diagram */}

        <motion.div
          variants={revealVariants}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
    relative
    mt-12
    sm:mt-16
    lg:mt-20

    lg:mx-auto
    lg:w-[88%]
  "
        >
          {/* Ambient Background Glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-[-12%]
              z-0

              bg-[radial-gradient(
                ellipse_at_center,
                rgba(255,255,255,0.14)_0%,
                rgba(255,255,255,0.08)_30%,
                rgba(255,255,255,0.035)_50%,
                transparent_75%
              )]

              blur-[90px]
            "
          />

          {/* Diagram */}

          <div
            className="
              relative
              z-10
              overflow-hidden
              border
              border-white/[0.10]

              bg-white/[0.02]

              shadow-[0_30px_100px_rgba(0,0,0,0.25)]

              backdrop-blur-sm
            "
          >
            <Image
              src={section.image}
              alt={section.alt}
              width={2400}
              height={1400}
              sizes="100vw"
              className="
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
