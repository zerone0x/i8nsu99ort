import { Environment, PresentationControls, useGLTF } from "@react-three/drei";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import React from "react";

const Portal = () => {
  const model = useGLTF("/model/portal.glb");

  return (
    <>
      <Environment preset="warehouse" />

      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive
          object={model.scene}
          position-y={0}
          scale={0.08}
          rotation-y={-2.4}
        ></primitive>
      </PresentationControls>
    </>
  );
};

export default Portal;
