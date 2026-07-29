"use client";

export default function Glow({
  className = "",
  size = "32rem",
  opacity = 0.08,
  blur = "220px",

  movement = 1,
  intensity = 1,
  scale = 1,

  style = {},
}) {
  return (
    <div
      aria-hidden="true"
      className={`
        absolute
        rounded-full
        pointer-events-none
        will-change-transform
        ${className}
      `}
      style={{
        width: size,
        height: size,

        opacity: `calc(${opacity} * var(--lighting-intensity, ${intensity}))`,

        transform: `
          translate(
            calc(var(--lighting-offset-x, 0px) * ${movement}),
            calc(var(--lighting-offset-y, 0px) * ${movement})
          )
          scale(calc(var(--lighting-scale, 1) * ${scale}))
        `,

        filter: `blur(${blur})`,

        background: `
          radial-gradient(
            circle,
            rgba(255,255,255,.88) 0%,
            rgba(255,255,255,.18) 18%,
            rgba(255,255,255,.08) 40%,
            transparent 100%
          )
        `,

        transition:
          "opacity 220ms ease-out, transform 220ms ease-out",

        ...style,
      }}
    />
  );
}