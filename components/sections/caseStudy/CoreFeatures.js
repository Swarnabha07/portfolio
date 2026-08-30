"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CoreFeatures({ section }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(null);

  const cards = section.cards;
  const totalCards = cards.length;
  const activeCard = cards[activeIndex];

  const goToPrevious = useCallback(() => {
    setDirection(-1);

    setActiveIndex((current) => (current === 0 ? totalCards - 1 : current - 1));
  }, [totalCards]);

  const goToNext = useCallback(() => {
    setDirection(1);

    setActiveIndex((current) => (current === totalCards - 1 ? 0 : current + 1));
  }, [totalCards]);

  const goToCard = (index) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  /* Keyboard navigation */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

  /* Touch swipe */

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    const swipeThreshold = 50;

    if (Math.abs(distance) >= swipeThreshold) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStart(null);
  };

  const cardVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 28 : -28,
    }),

    center: {
      opacity: 1,
      x: 0,
    },

    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -28 : 28,
    }),
  };

  return (
    <motion.section
      aria-labelledby="core-features-heading"
      initial={{
        opacity: 0,
        y: 32,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
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

        <div className="max-w-2xl">
          <h2
            id="core-features-heading"
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
        </div>

        {/* Feature Carousel */}

        <div
          className="
            relative
            mt-12
            sm:mt-16
            lg:mt-20
          "
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0

              h-[65%]
              w-[75%]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-white/[0.10]

              blur-[110px]
            "
          />

          {/* Lower Glow */}

          {/* <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-8%]
              left-1/2
              z-0

              h-[35%]
              w-[60%]

              -translate-x-1/2

              rounded-full

              bg-white/[0.07]

              blur-[90px]
            "
          /> */}

          {/* Feature Container */}

          <div
            className="
              relative
              z-10
              mx-auto

              h-[600px]
              w-full

              touch-pan-y
              select-none

              overflow-hidden

              rounded-3xl

              px-7
              py-8


              backdrop-blur-xl

              sm:h-[580px]
              sm:px-10
              sm:py-10

              lg:h-[560px]
              lg:px-14
              lg:py-12
            "
          >
            {/* Inner Highlight */}

            {/* <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-3xl

                bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.07),transparent_45%)]
              "
            /> */}

            {/* Animated Card Content */}

            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  inset-x-7
                  inset-y-8

                  z-10
                  flex
                  flex-col

                  sm:inset-x-10
                  sm:inset-y-10

                  lg:inset-x-14
                  lg:inset-y-12
                "
              >
                {/* Feature Header */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-xs
                      sm:text-sm
                      font-medium
                      tracking-[0.2em]
                      text-text-muted
                      uppercase
                    "
                  >
                    Feature
                  </span>

                  <span
                    className="
                      text-xs
                      sm:text-sm
                      font-medium
                      tabular-nums
                      text-text-muted
                    "
                  >
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(totalCards).padStart(2, "0")}
                  </span>
                </div>

                {/* Divider */}

                {/* <div
                  className="
                    mt-6
                    h-px
                    w-full
                    shrink-0
                    bg-border/70
                  "
                /> */}

                {/* Feature Content */}

                <div
                  className="
                    mt-10
                    min-h-0
                    flex-1
                    overflow-hidden
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-semibold
                      tracking-tight
                      text-text-primary

                      sm:text-3xl

                      lg:text-4xl
                    "
                  >
                    {activeCard.title}
                  </h3>

                  <ul
                    className="
                      mt-7
                      space-y-4

                      text-sm
                      leading-7
                      text-text-secondary

                      sm:mt-8
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    {activeCard.items.map((item, index) => (
                      <li
                        key={index}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            mt-[0.7rem]
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-text-muted
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation */}

                <div
                  className="
                    mt-auto
                    flex
                    shrink-0
                    items-center
                    justify-between
                    pt-10
                  "
                >
                  {/* Progress Indicators */}

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                    "
                    aria-label="Feature carousel position"
                  >
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Go to feature ${index + 1}`}
                        aria-current={
                          index === activeIndex ? "true" : undefined
                        }
                        onClick={() => goToCard(index)}
                        className={`
                          h-1.5
                          rounded-full
                          transition-all
                          duration-300

                          ${
                            index === activeIndex
                              ? "w-7 bg-text-primary"
                              : "w-1.5 bg-text-muted/40 hover:bg-text-muted/70"
                          }
                        `}
                      />
                    ))}
                  </div>

                  {/* Arrow Controls */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <button
                      type="button"
                      onClick={goToPrevious}
                      aria-label="Previous feature"
                      className="
                        inline-flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-border

                        bg-surface/50

                        text-text-primary

                        backdrop-blur-sm

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-surface

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-text-primary/50
                      "
                    >
                      <ArrowLeft size={17} strokeWidth={1.8} />
                    </button>

                    <button
                      type="button"
                      onClick={goToNext}
                      aria-label="Next feature"
                      className="
                        inline-flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-border

                        bg-surface/50

                        text-text-primary

                        backdrop-blur-sm

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-surface

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-text-primary/50
                      "
                    >
                      <ArrowRight size={17} strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
