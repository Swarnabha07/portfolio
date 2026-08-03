import BackgroundLighting from "@/components/common/BackgroundLighting/BackgroundLighting";

import ToolkitHeader from "./ToolkitHeader";
import ToolkitGrid from "./ToolkitGrid";

export default function Toolkit() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="
        relative
        isolate
        overflow-hidden
        scroll-mt-32

        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Background */}

      {/* <BackgroundLighting variant="toolkit" /> */}

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl

          px-6
          sm:px-8
          lg:px-12
        "
      >
        <ToolkitHeader />

        <ToolkitGrid />
      </div>
    </section>
  );
}
