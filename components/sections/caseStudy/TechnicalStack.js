"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function TechnicalStack({ section }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const categories = section.categories;
  const category = categories[activeCategory];
  const item = category.items[activeItem];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setActiveItem(0);
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
      aria-labelledby="technical-stack-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        relative
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div
        className="
  mx-auto
  w-full
  min-w-0
  max-w-[100rem]
  px-5
  sm:px-8
  lg:px-10
"
      >
        {/* Section Header */}

        <motion.div variants={revealVariants} className="max-w-2xl">
          <h2
            id="technical-stack-heading"
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

        {/* Stack Explorer */}

        <motion.div
          variants={revealVariants}
          transition={{
            duration: 0.75,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
  relative
  mt-10
  grid
  w-full
  min-w-0
  min-h-0
  grid-cols-1
  overflow-hidden
  rounded-3xl

  sm:mt-14

  lg:mt-20
  lg:min-h-[620px]
  lg:grid-cols-[280px_minmax(0,1fr)]
"
        >
          {/* Category Navigation */}

          <aside
            className={`
              relative
              z-10
              w-full
              border-b
              ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}
              p-4

              sm:p-6

              lg:border-b-0
              lg:border-r
              lg:p-8
            `}
          >
            <div
              className="
                mb-4
                text-[10px]
                sm:text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-text-muted

                sm:mb-5
              "
            >
              Categories
            </div>

            <nav
              aria-label="Technical stack categories"
              className="
                flex
                w-full
                gap-2
                overflow-x-auto
                pb-1

                lg:flex-col
                lg:overflow-visible
              "
            >
              {categories.map((categoryItem, index) => {
                const isActive = index === activeCategory;

                return (
                  <button
                    key={categoryItem.title}
                    type="button"
                    onClick={() => handleCategoryChange(index)}
                    aria-current={isActive ? "true" : undefined}
                    className={`
                      group
                      relative
                      shrink-0
                      rounded-xl
                      px-3.5
                      py-3
                      text-left
                      text-sm
                      font-medium
                      transition-all
                      duration-300

                      sm:px-4

                      lg:w-full

                      ${
                        isActive
                          ? isDark
                            ? "bg-white/[0.07] text-text-primary"
                            : "bg-black/[0.05] text-text-primary"
                          : isDark
                            ? "text-text-muted hover:bg-white/[0.035] hover:text-text-secondary"
                            : "text-text-muted hover:bg-black/[0.035] hover:text-text-secondary"
                      }
                    `}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span>{categoryItem.title}</span>

                      <span
                        className={`
                          hidden
                          text-xs
                          tabular-nums
                          lg:inline

                          ${
                            isActive
                              ? "text-text-secondary"
                              : "text-text-muted/60"
                          }
                        `}
                      >
                        {String(categoryItem.items.length).padStart(2, "0")}
                      </span>
                    </span>

                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          left-0
                          top-1/2
                          h-5
                          w-px
                          -translate-y-1/2
                          bg-text-primary
                        "
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Explorer Content */}

          <div
            className="
              relative
              z-10
              flex
              w-full
              min-w-0
              flex-col
              p-5

              sm:p-7

              lg:p-12
            "
          >
            {/* Category Header */}

            <div
              className="
                flex
                w-full
                min-w-0
                items-end
                justify-between
                gap-4

                sm:gap-6
              "
            >
              <div className="min-w-0">
                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-text-muted
                  "
                >
                  Exploring
                </span>

                <h3
                  className="
                    mt-2
                    text-lg
                    font-semibold
                    tracking-tight
                    text-text-primary

                    sm:text-2xl

                    lg:text-3xl
                  "
                >
                  {category.title}
                </h3>
              </div>

              <span
                className="
                  shrink-0
                  text-[10px]
                  tabular-nums
                  text-text-muted

                  sm:text-sm
                "
              >
                {String(activeItem + 1).padStart(2, "0")} /{" "}
                {String(category.items.length).padStart(2, "0")}
              </span>
            </div>

            {/* Technology List */}

            <div
              className={`
                mt-6
                grid
                w-full
                gap-2
                border-t
                ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}
                pt-3

                sm:mt-7
                sm:grid-cols-2

                lg:mt-8
              `}
            >
              {category.items.map((technology, index) => {
                const isActive = index === activeItem;

                return (
                  <button
                    key={technology.name}
                    type="button"
                    onClick={() => setActiveItem(index)}
                    aria-current={isActive ? "true" : undefined}
                    className={`
                      group
                      relative
                      w-full
                      min-w-0
                      rounded-xl
                      px-4
                      py-3.5
                      text-left
                      transition-all
                      duration-300

                      sm:py-4

                      ${
                        isActive
                          ? isDark
                            ? "bg-white/[0.06]"
                            : "bg-black/[0.05]"
                          : isDark
                            ? "hover:bg-white/[0.025]"
                            : "hover:bg-black/[0.025]"
                      }
                    `}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-text-primary"
                              : "bg-text-muted/40 group-hover:bg-text-muted"
                          }
                        `}
                      />

                      <span
                        className={`
                          min-w-0
                          text-xs
                          sm:text-sm
                          font-medium
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-text-primary"
                              : "text-text-secondary group-hover:text-text-primary"
                          }
                        `}
                      >
                        {technology.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Technology Detail */}

            <div
              className={`
                relative
                mt-8
                w-full
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}
                ${isDark ? "bg-white/[0.025]" : "bg-black/[0.02]"}

                p-5

                sm:mt-10
                sm:p-7

                lg:mt-12
                lg:p-8
              `}
            >
              {/* Detail Glow */}

              <div
                aria-hidden="true"
                className={`
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  ${isDark ? "bg-white/[0.045]" : "bg-black/[0.035]"}
                  blur-[70px]
                `}
              />

              <div className="relative min-w-0">
                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-text-muted
                  "
                >
                  Selected technology
                </span>

                <h4
                  className="
                    mt-3
                    text-lg
                    font-semibold
                    tracking-tight
                    text-text-primary

                    sm:text-2xl

                    lg:text-3xl
                  "
                >
                  {item.name}
                </h4>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-xs
                    leading-6
                    text-text-secondary

                    sm:mt-4
                    sm:text-base
                    sm:leading-7

                    lg:text-lg
                    lg:leading-8
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
