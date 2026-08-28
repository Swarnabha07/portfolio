import Image from "next/image";

export default function SystemArchitecture({ section }) {
  return (
    <section
      aria-labelledby="system-architecture-heading"
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
            id="system-architecture-heading"
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

        {/* Architecture Diagram */}

        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          {/* Aggressive background glow */}

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

              rounded-2xl
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
        </div>
      </div>
    </section>
  );
}