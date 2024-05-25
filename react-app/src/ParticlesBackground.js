import React, { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const points = useRef();
  const { mouse, camera } = useThree();
  const particlesCount = 4500;

  // State to hold velocities
  const velocities = useMemo(() => {
    const velocities = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      velocities[i] = 0;
    }
    return velocities;
  }, [particlesCount]);

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 80;
    }
    return positions;
  }, [particlesCount]);

  const raycaster = new THREE.Raycaster();

  useEffect(() => {
    if (points.current) {
      points.current.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );
    }
  }, [positions]);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.002;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(points.current);

      if (intersects.length > 0) {
        const intersectedIndex = intersects[0].index;
        const direction = new THREE.Vector3(
          positions[intersectedIndex * 3],
          positions[intersectedIndex * 3 + 1],
          positions[intersectedIndex * 3 + 2]
        ).normalize();
        velocities[intersectedIndex * 3] += direction.x * 0.1;
        velocities[intersectedIndex * 3 + 1] += direction.y * 0.1;
        velocities[intersectedIndex * 3 + 2] += direction.z * 0.1;
      }

      // Apply velocities to positions and add damping
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Apply damping to slow down particles over time
        velocities[i * 3] *= 0.95;
        velocities[i * 3 + 1] *= 0.95;
        velocities[i * 3 + 2] *= 0.95;
      }

      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.05} />
    </points>
  );
};

const ParticlesBackground = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
};

export default ParticlesBackground;
