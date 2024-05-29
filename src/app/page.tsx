"use client";
import Header from "../ui/header";
import About from "../pages/about";
import Skill from "../pages/skill";
import Project from "../pages/project";
import Contact from "../pages/contact";
import AboutMe from "../pages/AboutMe";
import Experience from "../pages/exp";
import "../app/globals.css";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { extend } from "@react-three/fiber";

export default function Home() {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco-gltf/");

  return (
    <div
      className={
        " bg-customShadowG text-black font-sans h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden"
      }
    >
      <Header />
      <div className="overflow-y-scroll">
        <main className="max-w-7xl mx-auto">
          <About />
          <AboutMe />
          <Experience />
          <Skill />
          <Project />
          <Contact />
        </main>
      </div>
      <footer/>
    </div>
  );
}

extend({ DRACOLoader });

// #F3FFF9
// |
// #FAF8F1
