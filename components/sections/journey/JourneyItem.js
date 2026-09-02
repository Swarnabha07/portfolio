import { motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function JourneyItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="relative grid min-h-[180px] grid-cols-[16px_1fr] gap-6 sm:min-h-[220px] sm:grid-cols-[1fr_16px_1fr] sm:gap-8 lg:min-h-[240px] lg:gap-12"
    >
      {/* =====================================================
          LEFT CONTENT — DESKTOP
          ===================================================== */}
      <div
        className={`hidden sm:block sm:col-start-1 sm:self-center ${
          isLeft ? "sm:text-right" : "sm:invisible"
        }`}
      >
        {isLeft && <JourneyContent item={item} />}
      </div>

      {/* =====================================================
          TIMELINE NODE
          ===================================================== */}
      <div
        aria-hidden="true"
        className="relative z-10 col-start-1 flex items-start justify-center sm:col-start-2 sm:row-start-1 sm:items-center"
      >
        <span className="mt-1.5 block h-3 w-3 rounded-full border border-border bg-background sm:mt-0 sm:h-3.5 sm:w-3.5" />
      </div>

      {/* =====================================================
          RIGHT CONTENT — DESKTOP
          ===================================================== */}
      <div
        className={`hidden sm:block sm:col-start-3 sm:self-center ${
          !isLeft ? "sm:text-left" : "sm:invisible"
        }`}
      >
        {!isLeft && <JourneyContent item={item} />}
      </div>

      {/* =====================================================
          MOBILE CONTENT
          ===================================================== */}
      <div className="col-start-2 self-start sm:hidden">
        <JourneyContent item={item} />
      </div>
    </motion.div>
  );
}

/* =========================================================
   JOURNEY CONTENT
   ========================================================= */

function JourneyContent({ item }) {
  return (
    <div className="max-w-xl">
      {/* Period */}
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-secondary">
        {item.period}
      </p>

      {/* Title */}
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-text-primary sm:text-2xl lg:text-3xl">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base sm:leading-7">
        {item.description}
      </p>
    </div>
  );
}
