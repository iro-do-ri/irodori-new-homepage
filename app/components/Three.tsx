"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyModel from "../../public/models/Mymodel";

export default function Three() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  return (
    <div style={{ width: "100%", height: isMobile ? "105svh" : "100dvh", position: "fixed", zIndex: "-1", background: "radial-gradient(circle at 17% 77%, rgba(17, 17, 17,0.04) 0%, rgba(17, 17, 17,0.04) 50%,rgba(197, 197, 197,0.04) 50%, rgba(197, 197, 197,0.04) 100%),radial-gradient(circle at 26% 17%, rgba(64, 64, 64,0.04) 0%, rgba(64, 64, 64,0.04) 50%,rgba(244, 244, 244,0.04) 50%, rgba(244, 244, 244,0.04) 100%),radial-gradient(circle at 44% 60%, rgba(177, 177, 177,0.04) 0%, rgba(177, 177, 177,0.04) 50%,rgba(187, 187, 187,0.04) 50%, rgba(187, 187, 187,0.04) 100%),linear-gradient(19deg, rgb(28, 117, 250),rgb(34, 2, 159))" }}>
      <Canvas shadows camera={{ position: [39.6, 15.4, 44.5], fov: 10 }}>
        <ambientLight intensity={1.2} />
        <directionalLight
          castShadow
          position={[5, 10, 5]}
          intensity={2}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-5, 3, -5]} intensity={0.3} />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        <MyModel castShadow position={isMobile ? [7 - 6, -1, 1.2] : [7, -2, 1.2]} />
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[7, -2, 1.2]}>
          <planeGeometry args={[30, 30]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      </Canvas>
    </div>
  );
}
