import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box/Box'
import styled from 'styled-components'
import Form from '../module/Form/Form'

export default function BoxesPage() {
  return (
    <SApp>
      <Form />
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Box position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </SApp>
  )
}

const SApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;
