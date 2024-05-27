import { Environment, PresentationControls, useGLTF } from "@react-three/drei";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import React from "react";

const CutePC = () => {
  // const dracoLoader = new DRACOLoader();
  // console.log("dracoLoader", dracoLoader);
  
  // dracoLoader.setDecoderPath("/draco-gltf/");

  const model = useGLTF("/model/pc.glb");


  return (
    <>
      <Environment preset="warehouse" />

      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive
          object={model.scene}
          position-y={0}
          scale={1}
          rotation-y={0}
        ></primitive>
      </PresentationControls>
    </>
  );
};

export default CutePC;