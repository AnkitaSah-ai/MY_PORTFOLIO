"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingObject() {
  const mesh = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();

    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.18;
    mesh.current.position.y = Math.sin(t * 0.5) * 0.2;

    if (!isMobile) {
      mesh.current.rotation.x += (pointer.y * 0.25 - mesh.current.rotation.x) * 0.03;
      mesh.current.rotation.y += (pointer.x * 0.25 - mesh.current.rotation.y) * 0.03;
    }
  });

  // Hide the foreground mesh on mobile for cleaner look
  if (isMobile) return null;

  return (
    <mesh ref={mesh} position={[3, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 140, 16, 2, 3]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#4c1d95"
        emissiveIntensity={0.5}
        metalness={0.5}
        roughness={0.25}
      />
    </mesh>
  );
}
