import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PortalCanvas from "../components/canvas/portal/PortalCanvas";
import PCCanvas from "../components/canvas/pc/PCCanvas";
import SocialIcon from "../components/SocialIcon";

function about() {
  return (
    <section id="about" className="user-select-none">
      <div className="mx-auto flex flex-col justify-between gap-4 overflow-hidden pt-20 sm:pt-40 px-4 sm:px-8 lg:max-w-7xl lg:flex-row lg:gap-10">
        <div className="flex-1">
          <span className="text-xl md:text-2xl font-medium text-gray-700">{`Hey there!👋, I'm-`}</span>
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 leading-tight mt-2 sm:leading-tight md:leading-tight lg:leading-tight">
            Manlun Zhang
          </h1>
          <span className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mt-4">
            Frontend Developer.
          </span>
          <p className="mt-4 text-base md:text-2xl text-gray-600 pt-5">
          A self-motivated Frontend Web Developer, lifelong learner
          </p>
          <p className="text-base md:text-xl text-gray-500 mt-4">
          🚀 Currently specializing in Frontend (React / Next.js)
          </p>
          <p className="text-base md:text-xl text-gray-500 mt-4">
          🛠️ Crafting valuable applications
          </p>
          <div className="flex justify-start pt-5">
            <SocialIcon /></div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* <p>Try to rotate me</p> */}
          <PCCanvas />
        </div>
      </div>
    </section>
  );
}

export default about;
