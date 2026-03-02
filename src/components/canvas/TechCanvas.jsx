import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position, sharedGeometry, sharedMaterial }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh
        position={position}
        geometry={sharedGeometry}
        castShadow
        receiveShadow
        scale={1.2}
      >
        <primitive object={sharedMaterial} attach="material" />
        <Decal
          position={[0, 0, 0.4]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.4}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const TechCanvas = ({ technologies }) => {
  const cols = 3;
  const spacing = 1.4;

  const sharedGeometry = useMemo(
    () => new THREE.IcosahedronGeometry(0.4, 0),
    []
  );
  const sharedMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#fff8eb",
        flatShading: true,
        polygonOffset: true,
        polygonOffsetFactor: -5,
      }),
    []
  );

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", minHeight: "280px" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 2]} intensity={0.8} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {technologies.map((tech, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = (col - (cols - 1) / 2) * spacing;
          const y = -(row - 1) * spacing;
          return (
            <Ball
              key={tech.name}
              imgUrl={tech.icon}
              position={[x, y, 0]}
              sharedGeometry={sharedGeometry}
              sharedMaterial={sharedMaterial}
            />
          );
        })}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechCanvas;
