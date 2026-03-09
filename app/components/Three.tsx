"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyModel from "../../public/models/Mymodel";

export default function Three() {
  return (
    <div style={{ width: "100%", height: "100dvh", position: "fixed", zIndex: "-1", background: "#0d1b2a" }}>
      <Canvas shadows camera={{ position: [12.2,15,15], fov: 32 }}>
        <ambientLight intensity={2} />
        <directionalLight
          castShadow
          position={[2, 4, 2]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        <MyModel castShadow />
      </Canvas>
    </div>
  );
}