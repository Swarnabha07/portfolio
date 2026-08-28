import Image from "next/image";

export default function ProjectOverview({ project }) {
  return (
    <section
      aria-labelledby="project-overview-heading"
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

          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-20
          lg:px-10

          xl:gap-24
        "
      >
        {/* Content */}

        <div className="relative z-10 max-w-xl">
          <h1
            id="project-overview-heading"
            className="
              text-4xl
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
              text-base
              leading-7
              text-text-secondary

              sm:text-lg
              sm:leading-8
            "
          >
            {project.overview}
          </p>
        </div>

        {/* Project Image */}

        <div className="relative min-w-0">
          {/* =====================================================
              AGGRESSIVE AMBIENT LIGHT
              ===================================================== */}

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

          {/* =====================================================
              PROJECT IMAGE
              ===================================================== */}

          <div className="relative z-10">
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
        </div>
      </div>
    </section>
  );
}
