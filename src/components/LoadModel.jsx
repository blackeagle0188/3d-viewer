import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LoadModel = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        rotation={[0, 0, 0]}
        scale={scale}
      />
    </>
  );
};

export default LoadModel;