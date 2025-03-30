import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const ShirtViewer = ({ modelUrl }: { modelUrl: string }) => {
  const { scene } = useGLTF(modelUrl);

  const scale = window.innerWidth < 768 ? 0.6 : 1;

  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 45 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          minPolarAngle={Math.PI / 2}  // Prevents up-down movement
          maxPolarAngle={Math.PI / 2}  // Locks vertical rotation
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <primitive object={scene} scale={scale} />
      </Suspense>
    </Canvas>
  );
};

export default ShirtViewer;
