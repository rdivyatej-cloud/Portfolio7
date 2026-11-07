import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Shield, Cpu, Terminal } from 'lucide-react';

const CardMesh: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Subtle, elegant oscillation
    meshRef.current.rotation.y = Math.sin(t * 0.8) * 0.45;
    meshRef.current.rotation.x = Math.cos(t * 0.6) * 0.12;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Physical Card Body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 4.6, 0.08]} />
          <meshStandardMaterial
            color="#181512"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        {/* Outer glowing edge ring */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(3.22, 4.62, 0.082)]} />
          <lineBasicMaterial color="#00e5ff" linewidth={1.5} transparent opacity={0.6} />
        </lineSegments>

        {/* High-Fidelity Embedded HTML Card Face */}
        <Html
          transform
          occlude
          position={[0, 0, 0.045]}
          distanceFactor={3.2}
          className="select-none pointer-events-none"
        >
          <div className="w-[320px] h-[460px] bg-gradient-to-b from-[#1c1815] via-[#14110f] to-[#110e0c] rounded-2xl border border-[#00e5ff]/30 p-6 flex flex-col justify-between text-[#f4f0eb] shadow-[0_0_40px_rgba(0,229,255,0.15)] overflow-hidden">
            
            {/* Card Header */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-[#00e5ff] font-bold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>SRM UNIVERSITY-AP</span>
                </div>
                <span className="text-[9px] font-mono text-[#9e9891] px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                  ID: #DR-2024
                </span>
              </div>

              {/* Photo / Avatar & Status */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.3)] flex items-center justify-center bg-[#1c1815]">
                  <img src="./images/profile.jpg" alt="Divyatej Rallapalli" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-[#9e9891] uppercase tracking-wider">
                    Engineer Pass
                  </div>
                  <div className="text-sm font-bold tracking-tight text-[#f4f0eb] leading-tight">
                    Divyatej Rallapalli
                  </div>
                  <div className="inline-flex items-center gap-1 text-[9px] font-mono text-[#00e5ff]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
                    <span>LEVEL 01 CLEARANCE</span>
                  </div>
                </div>
              </div>

              {/* Role & Specialization */}
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#f4f0eb]">
                  <Terminal className="w-3 h-3 text-[#00e5ff]" />
                  <span>Backend &amp; AI Engineer</span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#9e9891]">
                  <Cpu className="w-3 h-3 text-[#38bdf8]" />
                  <span>Cybersecurity Undergraduate</span>
                </div>
              </div>
            </div>

            {/* Bottom Barcode & Verification */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[8px] font-mono text-[#6e6761]">
                <span>AUTH_TOKEN: 0x7E3A99F</span>
                <span>STATUS: VERIFIED</span>
              </div>

              {/* Simulated Barcode */}
              <div className="flex justify-between items-center h-7 bg-white/[0.03] px-2 rounded border border-white/5">
                {[4, 2, 6, 3, 1, 5, 2, 4, 6, 2, 3, 5, 1, 4, 6, 2, 4, 3, 5, 2].map((w, i) => (
                  <span
                    key={i}
                    className="bg-[#d8d3cc] opacity-80 h-full"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>
            </div>

          </div>
        </Html>
      </group>
    </Float>
  );
};

export const ThreeIDCard: React.FC = () => {
  return (
    <div className="w-[340px] sm:w-[400px] h-[480px] sm:h-[540px] relative">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 6, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-4, -3, 3]} intensity={1.5} color="#ccff00" />
        <CardMesh />
      </Canvas>
    </div>
  );
};

export default ThreeIDCard;

