"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingObject() {
  const mesh = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();

    // Slow self-rotation
    mesh.current.rotation.x = t * 0.18;
    mesh.current.rotation.y = t * 0.22;

    // Gentle float bob
    mesh.current.position.y = Math.sin(t * 0.6) * 0.25;

    // Mouse parallax — lerp toward mouse influence
    mesh.current.rotation.x += (mouse.y * 0.3 - mesh.current.rotation.x) * 0.04;
    mesh.current.rotation.y += (mouse.x * 0.3 - mesh.current.rotation.y) * 0.04;
  });

  return (
    <mesh ref={mesh} position={[2.8, 0, 0]}>
      <torusKnotGeometry args={[1, 0.32, 160, 16, 2, 3]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#4c1d95"
        emissiveIntensity={0.6}
        metalness={0.4}
        roughness={0.2}
        wireframe={false}
      />
    </mesh>
  );
}
