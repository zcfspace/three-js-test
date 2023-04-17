import styled from "styled-components";
import { StlViewer } from "react-stl-viewer";
import { Line, LineDashedMaterial, BufferGeometry, Vector3 } from "three";

export default function PikachuModel({ marker }) {
  const markerMeshes = marker.map((m, index) => (
    <mesh key={index} position={[m.x, m.y, m.z]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  ));

  const xLine = new Line(
    new BufferGeometry().setFromPoints([
      new Vector3(-10, 0, 0),
      new Vector3(100, 0, 0),
    ]),
    new LineDashedMaterial({
      color: "red",
    })
  );

  const yLine = new Line(
    new BufferGeometry().setFromPoints([
      new Vector3(0, -10, 0),
      new Vector3(0, 100, 0),
    ]),
    new LineDashedMaterial({
      color: "green",
    })
  );

  const zLine = new Line(
    new BufferGeometry().setFromPoints([
      new Vector3(0, 0, -10),
      new Vector3(0, 0, 100),
    ]),
    new LineDashedMaterial({
      color: "blue",
    })
  );

  return (
    <SStlViewer url="/stl/pikachu.stl" orbitControls shadows>
      {markerMeshes}
      <primitive object={xLine} />
      <primitive object={yLine} />
      <primitive object={zLine} />
    </SStlViewer>
  );
}

const SStlViewer = styled(StlViewer)`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;
