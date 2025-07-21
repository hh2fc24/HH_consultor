import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  Text3D, 
  MeshDistortMaterial, 
  Sphere, 
  Box, 
  Torus, 
  Icosahedron,
  Environment,
  Sparkles,
  Glow,
  EffectComposer,
  Bloom,
  ChromaticAberration
} from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

// Componente de Esfera Flotante con Distorsión
export function FloatingSphere({ position, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[1, 2]}
    >
      <Sphere ref={meshRef} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

// Componente de Icosaedro Giratorio
export function RotatingIcosahedron({ position, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={2}
      floatIntensity={1}
    >
      <Icosahedron ref={meshRef} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          wireframe={true}
          emissive={color}
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.7}
        />
      </Icosahedron>
    </Float>
  );
}

// Componente de Torus con Efecto de Energía
export function EnergyTorus({ position, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <Float
      speed={3}
      rotationIntensity={1.5}
      floatIntensity={3}
    >
      <Torus ref={meshRef} position={position} scale={scale} args={[1, 0.3, 16, 32]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0}
          metalness={1}
          emissive={color}
          emissiveIntensity={0.4}
          transparent={true}
          opacity={0.8}
        />
      </Torus>
    </Float>
  );
}

// Componente de Cubo con Morfing
export function MorphingCube({ position, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Float
      speed={2.5}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Box ref={meshRef} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Box>
    </Float>
  );
}

// Componente de Partículas 3D Inteligentes
export function IntelligentParticles() {
  const particlesRef = useRef();
  const particleCount = 100;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      // Animación de partículas que siguen ondas
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] = Math.sin(state.clock.elapsedTime + positions[i3]) * 2;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00E5FF"
        transparent={true}
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Componente de Texto 3D Flotante
export function FloatingText3D({ text, position, color = "#00E5FF" }) {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <Text3D
        ref={textRef}
        position={position}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  );
}

// Componente de Campo de Energía
export function EnergyField() {
  const fieldRef = useRef();
  
  useFrame((state) => {
    if (fieldRef.current) {
      fieldRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color("#00E5FF") }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          vec3 pos = position;
          pos.z += sin(pos.x * 2.0 + time) * 0.1;
          pos.z += sin(pos.y * 2.0 + time * 1.5) * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float wave = sin(vPosition.x * 3.0 + time) * sin(vPosition.y * 3.0 + time * 1.2);
          float alpha = (wave + 1.0) * 0.1;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
  }, []);

  return (
    <mesh ref={fieldRef} position={[0, 0, -5]} scale={[10, 10, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
}

// Componente Principal de Canvas 3D
export function ThreeDCanvas({ children, className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Iluminación ambiental */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0099CC" />
        
        {/* Entorno */}
        <Environment preset="night" />
        
        {/* Efectos de post-procesamiento */}
        <EffectComposer>
          <Bloom 
            intensity={0.5} 
            luminanceThreshold={0.1} 
            luminanceSmoothing={0.9}
          />
          <ChromaticAberration offset={[0.001, 0.001]} />
        </EffectComposer>
        
        {children}
      </Canvas>
    </div>
  );
}

// Componente de Iconos Flotantes 3D
export function FloatingIcons3D() {
  const icons = [
    { position: [-8, 4, 2], color: "#00E5FF", type: "sphere" },
    { position: [8, -3, 1], color: "#00B8E6", type: "icosahedron" },
    { position: [-6, -4, 3], color: "#0099CC", type: "torus" },
    { position: [7, 5, -1], color: "#00E5FF", type: "cube" },
    { position: [0, 6, 2], color: "#00B8E6", type: "sphere" },
    { position: [-9, 0, -2], color: "#0099CC", type: "icosahedron" }
  ];

  return (
    <>
      {icons.map((icon, index) => {
        switch (icon.type) {
          case "sphere":
            return (
              <FloatingSphere
                key={index}
                position={icon.position}
                color={icon.color}
                scale={0.3 + Math.random() * 0.2}
              />
            );
          case "icosahedron":
            return (
              <RotatingIcosahedron
                key={index}
                position={icon.position}
                color={icon.color}
                scale={0.4 + Math.random() * 0.3}
              />
            );
          case "torus":
            return (
              <EnergyTorus
                key={index}
                position={icon.position}
                color={icon.color}
                scale={0.2 + Math.random() * 0.2}
              />
            );
          case "cube":
            return (
              <MorphingCube
                key={index}
                position={icon.position}
                color={icon.color}
                scale={0.3 + Math.random() * 0.2}
              />
            );
          default:
            return null;
        }
      })}
      
      {/* Partículas inteligentes */}
      <IntelligentParticles />
      
      {/* Campo de energía de fondo */}
      <EnergyField />
      
      {/* Sparkles para más energía */}
      <Sparkles
        count={50}
        scale={[20, 20, 20]}
        size={2}
        speed={0.4}
        color="#00E5FF"
      />
    </>
  );
}
