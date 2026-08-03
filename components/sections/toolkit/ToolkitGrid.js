"use client";

import ToolkitCard from "./ToolkitCard";

import { TOOLKIT } from "@/constants/toolkit";

export default function ToolkitGrid() {
  return (
    <div
      className="
        grid
        gap-6

        md:auto-rows-fr
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {TOOLKIT.map((category, index) => (
        <ToolkitCard key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}
