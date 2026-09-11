"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        min-h-screen
        overflow-clip
        scroll-mt-10
        bg-background
      "
    >
      <h1 id="hero-heading" className="sr-only">
        Swarnabha Banerjee — Full-Stack Web Developer
      </h1>

      {/* =========================================================
          TABLET + MOBILE HERO
          Visible below xl (<1024px)
      ========================================================= */}
      <div
        className="
          relative
          flex
          min-h-screen
          items-center
          pt-20
          pb-20
          xl:hidden
        "
      >
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            justify-center
            px-6
            sm:px-8
          "
        >
          <HeroContent />
        </div>
      </div>

      {/* =========================================================
          LAPTOP + LARGER HERO
          Visible at xl and above (≥1024px)
      ========================================================= */}
      <div
        className="
          relative
          hidden
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          xl:flex
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-hidden="true"
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            px-4
          "
        >
          {/* Background Typography */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-1/2
              z-0
              -translate-y-1/2
              select-none
              text-center
              font-bold
              uppercase
              leading-[0.8]
              tracking-[-0.07em]
              text-text-primary
            "
          >
            <div
              className="
                whitespace-nowrap
                text-[12vw]
              "
            >
              Swarnabha
            </div>

            <div
              className="
                mt-[2.4vw]
                whitespace-nowrap
                text-[12vw]
                bg-gradient-to-b
                from-text-primary
                via-text-primary
                to-text-secondary
                bg-clip-text
                text-transparent
              "
            >
              Banerjee
            </div>
          </div>

          {/* Portrait */}
          <div
            className="
              relative
              z-10
              mt-8
              h-[73vh]
              w-[min(41vw,570px)]
            "
          >
            <Image
              src="/swarnabha-banerjee-image.png"
              alt="Swarnabha Banerjee"
              fill
              priority
              sizes="41vw"
              className="
                object-contain
                object-bottom
                grayscale
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]
              "
            />
          </div>
        </motion.div>

        {/* Full-width Bottom Fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-20
            h-[50%]
            bg-gradient-to-t
            from-background
            via-background/100
            to-transparent
          "
        />
      </div>
    </section>
  );
}
