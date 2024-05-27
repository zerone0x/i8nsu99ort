import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PortalCanvas from "../components/canvas/portal/PortalCanvas";
import PCCanvas from "../components/canvas/pc/PCCanvas";
import SocialInfo from "../components/SocialInfo";

function about() {
  return (
    <section id="about">
      <div className="mx-auto flex flex-col justify-between gap-4 overflow-hidden pt-30 md:pt-40 px-4 sm:px-8 lg:max-w-7xl lg:flex-row lg:gap-8">
        <div className="flex-1">
          <span className="text-xl md:text-2xl font-medium text-gray-700">{`Hey there!👋, I'm-`}</span>
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 leading-tight mt-2 sm:leading-tight md:leading-tight lg:leading-tight">
            HaoLan Zhang
          </h1>
          <span className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mt-4">
            Frontend Developer.
          </span>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            🚀 Currently specializing in Frontend (React / Next.js)
          </p>
          <p className="text-base md:text-lg text-gray-500 mt-4">
            TODO - Introduction placeholder
          </p>
          <div>{/* <SocialInfo /> */}</div>
        </div>
        <div className="w-full  lg:w-1/2 flex justify-center">
          <PCCanvas />
        </div>
      </div>
    </section>
  );
}

export default about;
