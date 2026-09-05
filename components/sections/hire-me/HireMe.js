"use client";

import { motion } from "framer-motion";
import HireMeForm from "./HireMeForm";
import ContactLinks from "./ContactLinks";

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

export default function HireMe() {
  return (
    <section
      id="hire-me"
      aria-labelledby="hire-me-heading"
      className="relative isolate scroll-mt-10 py-24 sm:py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 sm:px-8">
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
          className="text-center"
        >
          <h2
            id="hire-me-heading"
            className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
          >
            Hire Me
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
            Have a project in mind or looking for someone to build with? Send me
            a message and let&apos;s talk.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT FORM
            ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.65,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 sm:mt-14 lg:mt-16"
        >
          <HireMeForm />
        </motion.div>

        {/* =====================================================
            CONTACT LINKS
            ===================================================== */}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 border-t border-border pt-8 sm:mt-14"
        >
          <ContactLinks />
        </motion.div>
      </div>
    </section>
  );
}
