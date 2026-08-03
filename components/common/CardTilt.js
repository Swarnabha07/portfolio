"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function CardTilt({
  children,
  className = "",
  maxTilt = 5,
  scale = 1.02,
}) {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 680,
    damping: 24,
    mass: 0.22,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 680,
    damping: 24,
    mass: 0.22,
  });

  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);

  const springLightX = useSpring(lightX, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  const springLightY = useSpring(lightY, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  const cardScale = useTransform([springRotateX, springRotateY], ([x, y]) =>
    Math.abs(x) + Math.abs(y) > 0.2 ? scale : 1,
  );

  const spotlight = useMotionTemplate`
  radial-gradient(
    220px circle at
    ${springLightX}% ${springLightY}%,
    rgba(255,255,255,0.08),
    transparent 70%
  )
`;

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    rotateY.set(-(px - 0.5) * maxTilt * 2);
    rotateX.set((py - 0.5) * maxTilt * 2);

    lightX.set(px * 100);
    lightY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);

    lightX.set(50);
    lightY.set(50);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: cardScale,
        transformPerspective: 1600,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <motion.div
        className="
    pointer-events-none
    absolute
    inset-0
    rounded-[inherit]
    z-0
  "
        style={{
          background: spotlight,
        }}
      />
      <div className="relative z-10 flex flex-col items-center">{children}</div>
    </motion.div>
  );
}
