import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { useLoader } from "@react-three/fiber";
import styled from "styled-components";

function Model({ url }) {
  const mesh = useRef();
  const stl = useLoader(STLLoader, url);

  return (
    <mesh ref={mesh} scale={[0.1, 0.1, 0.1]}>
      <primitive object={stl} />
    </mesh>
  );
}

export default function App() {
  return (
    <SApp>
      <Canvas>
        <OrbitControls />
        <Model url="/stl/pikachu.stl" />
      </Canvas>
    </SApp>
  );
}

const SApp = styled.div`
  height: 100vh;
  width: 100vw;
`;
