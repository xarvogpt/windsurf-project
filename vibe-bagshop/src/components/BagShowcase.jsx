import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ color }) {
  const { scene } = useGLTF('/black leather briefcase 3d model.glb');
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // You might need to adjust which material to change.
        // This example changes the color of all materials found.
        child.material.color.set(color);
      }
    });
  }, [scene, color]);

  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
}

export default function BagShowcase() {
  const [color, setColor] = useState('mediumpurple');

  return (
    <div className="w-full h-[500px] bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg relative shadow-lg">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Model color={color} />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button onClick={() => setColor('royalblue')} className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white focus:ring-2 ring-offset-2 ring-blue-500"></button>
        <button onClick={() => setColor('indianred')} className="w-8 h-8 rounded-full bg-red-500 border-2 border-white focus:ring-2 ring-offset-2 ring-red-500"></button>
        <button onClick={() => setColor('darkslategray')} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-white focus:ring-2 ring-offset-2 ring-gray-800"></button>
      </div>
    </div>
  );
}
