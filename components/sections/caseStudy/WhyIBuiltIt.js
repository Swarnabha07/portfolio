import Image from "next/image";

export default function WhyIBuiltIt({ section }) {
  return (
    <section
      aria-labelledby="why-i-built-it-heading"
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
          grid
          w-full
          max-w-[110rem]
          items-center
          gap-14
          px-6

          sm:px-8

          lg:grid-cols-[1.2fr_0.8fr]
          lg:gap-20
          lg:px-10

          xl:gap-24
        "
      >
        {/* =====================================================
            PROJECT IMAGE
            ===================================================== */}

        <div className="relative min-w-0">
          {/* Aggressive ambient light */}

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

          {/* Image */}

          <div className="relative z-10">
            <Image
              src={section.image}
              alt="StoryHub development and engineering overview"
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
            />
          </div>
        </div>

        {/* =====================================================
            CONTENT
            ===================================================== */}

        <div className="relative z-10 max-w-xl">
          <h2
            id="why-i-built-it-heading"
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

          <div
            className="
              mt-6
              space-y-5
              text-base
              leading-7
              text-text-secondary

              sm:mt-7
              sm:space-y-6
              sm:text-lg
              sm:leading-8
            "
          >
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
