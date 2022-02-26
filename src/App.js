import React, { Suspense } from "react";
import "./App.css";
import styled from "styled-components";
import HeroBackground from "./components/HeroBackground";
import TextSection from "./components/TextSection";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import Box from "./components/Box";

function App() {
  return (
    <Wrapper>
      <HeroBackground />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  .canvas {
    min-height: 500px;
  }
`;
