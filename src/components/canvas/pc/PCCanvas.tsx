"use client";

import {
  OrbitControls,
  Preload,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, lazy } from "react";
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed()}%</Html>;
}
const PC = lazy(() => import("./PC"));
export default function PCCanvas() {
  return (
    <div className="w-screen h-[70vh] sm:h-[60vh] md:h-[65vh]">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <PC />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
