"use client";

export default function Glow({
  className = "",
  size = "32rem",
  opacity = 0.06,
  blur = "260px",
  style = {},
}) {
  return (
    <div
      aria-hidden="true"
      className={`
        absolute
        rounded-full
        pointer-events-none
        ${className}
      `}
      style={{
        width: size,
        height: size,
        opacity,
        filter: `blur(${blur})`,
        background:
          "radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(255,255,255,.12) 32%, transparent 72%)",
        ...style,
      }}
    />
  );
}
