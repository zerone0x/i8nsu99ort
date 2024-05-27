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

const Portal = lazy(() => import("./Portal"));

export default function PortalCanvas() {
  return (
    <div className="w-[35vw] md:w-[50vw] h-[50vh] m-0 p-0 overflow-hidden min-w-[300px]">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 400,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            // autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Portal />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
