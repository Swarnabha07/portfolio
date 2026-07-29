export default function Logo() {
  return (
    <a
      href="#home"
      aria-label="Go to Home"
      className="group inline-flex flex-col leading-none"
    >
      <span
        className="
          text-lg
          font-bold
          tracking-tight
          text-text-primary
          transition-colors
          duration-300
          group-hover:text-accent
        "
      >
        Swarnabha Banerjee
      </span>

      {/* <span
        className="
          mt-1
          text-xs
          font-medium
          uppercase
          tracking-[0.18em]
          text-text-muted
        "
      >
        Full-Stack Developer
      </span> */}
    </a>
  );
}
