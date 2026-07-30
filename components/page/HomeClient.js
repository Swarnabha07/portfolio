"use client";

import Navbar from "../layout/Navbar/Navbar";
import About from "../sections/about/About";
import Hero from "../sections/Hero/Hero";

export default function HomeClient({}) {
  return (
    <>
      <Navbar />

      <Hero/>

      <About/>
    </>
  );
}
