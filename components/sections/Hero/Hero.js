import BackgroundLighting from "@/components/common/BackgroundLighting/BackgroundLighting";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        flex
        min-h-screen
        items-center
        overflow-clip
        scroll-mt-32
        bg-background
        pt-32
        pb-20
      "
    >
      {/* Background Lighting */}
      {/* <BackgroundLighting variant="hero" /> */}

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          justify-center
          px-6
          sm:px-8
          lg:px-12
        "
      >
        <HeroContent />
      </div>
    </section>
  );
}
