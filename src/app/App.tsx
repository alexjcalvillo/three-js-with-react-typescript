import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '../components/box';
import './app.css'



const App: React.FC<any> = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
    </Canvas>
  );
}

export default App;
