import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox, Sphere } from "@react-three/drei";

export default function Box(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));

  const handleClick = () => {
    alert("Hola");
  };

  return (
    <NativeBox args={[1, 1, 1]} {...props} ref={mesh} scale={[10, 10, 10]}>
      <meshStandardMaterial attach="material" color="grey" />
      <Sphere args={[0.05]} position={[0, 0.55, 0]} onClick={handleClick}>
        <meshBasicMaterial attach="material" color="red" />
      </Sphere>
      <Sphere args={[0.05]} position={[0.5, 0.0, 0.5]} onClick={handleClick}>
        <meshBasicMaterial attach="material" color="orange" />
      </Sphere>
      <Sphere args={[0.05]} position={[-0.5, 0.55, -0.5]} onClick={handleClick}>
        <meshBasicMaterial attach="material" color="red" />
      </Sphere>
      <Sphere args={[0.05]} position={[-0.1, -0.5, -0.5]} onClick={handleClick}>
        <meshBasicMaterial attach="material" color="green" />
      </Sphere>
      <Sphere args={[0.05]} position={[-0.5, -0.5, 0.5]} onClick={handleClick}>
        <meshBasicMaterial attach="material" color="green" />
      </Sphere>
    </NativeBox>
  );
}
