import Navbar from "../layout/Navbar/Navbar";
import About from "../sections/about/About";
import Hero from "../sections/Hero/Hero";
import HireMe from "../sections/hire-me/HireMe";
import Journey from "../sections/journey/Journey";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/skills/Skills";
import Toolkit from "../sections/toolkit/Toolkit";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeClient({}) {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Toolkit />

      <Projects />

      <Journey />

      <HireMe />

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        Bounce={Bounce}
      />
    </>
  );
}
