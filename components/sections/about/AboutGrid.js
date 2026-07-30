"use client";

import AboutText from "./AboutText";
import CurrentlyExploring from "./CurrentlyExploring";

export default function AboutGrid() {
  return (
    <div
      className="
        grid
        gap-14
        lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.95fr)]
        lg:items-start
      "
    >
      <AboutText />

      <CurrentlyExploring />
    </div>
  );
}
