import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

const Model = ({ fileUrl }) => {
  const [geometry, setGeometry] = useState();

  useEffect(() => {
    const stlLoader = new STLLoader();
    stlLoader.load(fileUrl, (geo) => {
      setGeometry(geo);
    });
  }, []);

  return (
    <SCanvas>
      <ambientLight />
      <mesh geometry={geometry} scale={[0.1, 0.1, 0.1]}>
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      <OrbitControls />
    </SCanvas>
  );
};

const SCanvas = styled(Canvas)`
  height: 100vh;
  width: 100vw;
`;

export default Model;
