import { Environment, PresentationControls, useGLTF } from "@react-three/drei";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import React from "react";

const CutePC = () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco-gltf/");
  const model = useGLTF("/model/pc.glb", dracoLoader);

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