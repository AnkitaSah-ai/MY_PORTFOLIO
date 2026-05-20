"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Starfield() {
  const mesh = useRef<THREE.Points>(null);
  const [count, setCount] = useState(1800);

  useEffect(() => {
    // Fewer particles on mobile for perf
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setCount(1200);
    } else {
      setCount(2400);
    }
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.015;
    mesh.current.rotation.x = t * 0.006;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.1}
        sizeAttenuation
        transparent
        opacity={0.7}
        fog={false}
      />
    </points>
  );
}
