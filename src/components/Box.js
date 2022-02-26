import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../images/map.jpg";

function Box(props) {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      <icosahedronGeometry attach="geometry" radius={10} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default Box;
