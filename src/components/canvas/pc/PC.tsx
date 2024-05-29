import React, { useState, useEffect } from 'react';
import { useGLTF, Environment, PresentationControls } from '@react-three/drei';

const CutePC = () => {
  const model = useGLTF("/model/pc.glb");
  const [scale, setScale] = useState(1);
  const [positionY, setPositionY] = useState(0);
  // const [enableDrag, setEnableDrag] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(1.5); // 较小的缩放比例适用于手机屏幕
        setPositionY(-2); // 较低的位置适用于手机屏幕
      } else if (window.innerWidth < 1024) {
        setScale(1.2); // 正常缩放比例适用于平板屏幕
        setPositionY(-1);
      } else {
        setScale(1.2); // 较大的缩放比例适用于大屏幕
        setPositionY(-.5); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Environment preset="warehouse" />
      <PresentationControls global polar={[0, 0]} azimuth={[-0.4, 0.2]}>
        <primitive
          object={model.scene}
          position-y={positionY}
          scale={scale}
          rotation-y={0}
        ></primitive>
      </PresentationControls>
    </>
  );
};

export default CutePC;