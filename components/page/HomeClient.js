"use client";

import Navbar from "../layout/Navbar/Navbar";
import About from "../sections/about/About";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/skills/Skills";
import Toolkit from "../sections/toolkit/Toolkit";

export default function HomeClient({}) {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Toolkit />

      <Projects/>
    </>
  );
}
