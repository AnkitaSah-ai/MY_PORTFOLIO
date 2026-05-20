"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import Starfield from "./Starfield";
import FloatingObject from "./FloatingObject";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.25]}
        performance={{ min: 0.5 }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7c3aed" />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#06b6d4" />
        <Suspense fallback={null}>
          <Starfield />
          <FloatingObject />
        </Suspense>
      </Canvas>
    </div>
  );
}
