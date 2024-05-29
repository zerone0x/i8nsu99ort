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
import MobieMenu from "@/components/MobieMenu";
import { useState } from "react";
export default function Home() {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco-gltf/");
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <div
      className={
        ` bg-customShadowG text-black font-sans h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden `
      }
    >
      <div className={isMenuOpen ? 'opacity-50' : 'overflow-y-scroll'}>
      <Header setMenuOpen={setMenuOpen}/>
      <div className="">
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
      <MobieMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

extend({ DRACOLoader });

// #F3FFF9
// |
// #FAF8F1
