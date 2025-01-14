'use client'

import { useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Environment, OrbitControls, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const NovaMaterial = shaderMaterial(
  {
    time: 0,
    color1: new THREE.Color('#ffd700'),
    color2: new THREE.Color('#ff4400'),
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    
    void main() {
      vec3 color = mix(color1, color2, vUv.y + sin(vUv.x * 10.0 + time) * 0.2);
      float alpha = 0.5 + 0.3 * sin(time + vUv.x * 10.0) * sin(time + vUv.y * 10.0);
      gl_FragColor = vec4(color, alpha);
    }
  `
)

extend({ NovaMaterial })

function Nova() {
  const mesh = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
    if (materialRef.current) {
      materialRef.current.time = state.clock.getElapsedTime()
    }
  })

  return (
    <group>
      <mesh ref={mesh} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[1, 64, 64]} />
        {/* @ts-ignore */}
        <novaMaterial ref={materialRef} transparent />
      </mesh>
    </group>
  )
}

export default function NovaScene() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#ff4400" intensity={0.5} />
      <Nova />
      <Environment preset="night" />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

