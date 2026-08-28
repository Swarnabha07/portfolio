"use client";

import { useState } from "react";

export default function TechnicalStack({ section }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const categories = section.categories;
  const category = categories[activeCategory];
  const item = category.items[activeItem];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setActiveItem(0);
  };

  return (
    <section
      aria-labelledby="technical-stack-heading"
      className="
        relative
        py-24
        sm:py-28
        lg:py-32
        my-16
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

        <div className="max-w-2xl">
          <h2
            id="technical-stack-heading"
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

        {/* Stack Explorer */}

        <div
          className="
            relative
            mt-12
            grid
            min-h-[620px]
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-white/[0.02]
            shadow-[0_30px_100px_rgba(0,0,0,0.20)]
            backdrop-blur-xl

            sm:mt-16

            lg:mt-20
            lg:grid-cols-[280px_1fr]
          "
        >
          {/* Ambient Glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[35%]
              top-1/2
              z-0
              h-[55%]
              w-[45%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.035]
              blur-[120px]
            "
          />

          {/* Category Navigation */}

          <aside
            className="
              relative
              z-10
              border-b
              border-white/[0.08]
              p-5

              sm:p-7

              lg:border-b-0
              lg:border-r
              lg:p-8
          "
          >
            <div
              className="
                mb-5
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-text-muted
              "
            >
              Categories
            </div>

            <nav
              aria-label="Technical stack categories"
              className="
                flex
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
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-medium
                      transition-all
                      duration-300

                      lg:w-full

                      ${
                        isActive
                          ? "bg-white/[0.07] text-text-primary"
                          : "text-text-muted hover:bg-white/[0.035] hover:text-text-secondary"
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
              min-w-0
              flex-col
              p-6

              sm:p-8

              lg:p-12
          "
          >
            {/* Category Header */}

            <div
              className="
                flex
                items-end
                justify-between
                gap-6
              "
            >
              <div>
                <span
                  className="
                    text-xs
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
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-text-primary

                    sm:text-3xl
                  "
                >
                  {category.title}
                </h3>
              </div>

              <span
                className="
                  text-sm
                  tabular-nums
                  text-text-muted
                "
              >
                {String(activeItem + 1).padStart(2, "0")} /{" "}
                {String(category.items.length).padStart(2, "0")}
              </span>
            </div>

            {/* Technology List */}

            <div
              className="
                mt-8
                grid
                gap-2
                border-t
                border-white/[0.08]
                pt-3

                sm:grid-cols-2
              "
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
                      rounded-xl
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300

                      ${isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.025]"}
                    `}
                  >
                    <div className="flex items-center gap-3">
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
                          text-sm
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
              className="
                relative
                mt-auto
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6

                sm:p-8

                lg:mt-12
              "
            >
              {/* Detail Glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-white/[0.045]
                  blur-[70px]
                "
              />

              <div className="relative">
                <span
                  className="
                    text-xs
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
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-text-primary

                    sm:text-3xl
                  "
                >
                  {item.name}
                </h4>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-base
                    leading-7
                    text-text-secondary

                    sm:text-lg
                    sm:leading-8
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
