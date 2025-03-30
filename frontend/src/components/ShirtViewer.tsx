import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const ShirtViewer = ({ modelUrl }: { modelUrl: string }) => {
  const { scene } = useGLTF(modelUrl);

  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 45 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <primitive object={scene} scale={1.5} />
      </Suspense>
    </Canvas>
  );
};

export default ShirtViewer;