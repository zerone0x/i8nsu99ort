import { Environment, PresentationControls, useGLTF } from "@react-three/drei";
import React from "react";

const CutePC = () => {

  const model = useGLTF("/model/pc.glb");

  return (
    <>
      <Environment preset="warehouse" />

      <PresentationControls global polar={[0, 0]} azimuth={[-0.4, 0.2]}>
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
