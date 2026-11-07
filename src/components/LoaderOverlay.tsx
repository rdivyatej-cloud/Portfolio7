import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/content';
import { ArrowRight, Shield, Terminal, Cpu, FastForward } from 'lucide-react';

// Lazy load the 3D Canvas so it doesn't block initial rendering
const ThreeIDCard = lazy(() => import('./ThreeIDCard'));

interface LoaderOverlayProps {
  onComplete: () => void;
}

export const LoaderOverlay: React.FC<LoaderOverlayProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setUseFallback(true);
      }
    } catch {
      setUseFallback(true);
    }

    // High-speed smooth progress ticker (reaches 100% in ~1.6s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
        // Accelerating curve
        const step = Math.max(2, Math.floor((100 - prev) * 0.18));
        return Math.min(100, prev + step);
      });
    }, 45);

    // Failsafe timeout: guarantee the user is NEVER blocked (max 2.2s)
    const failsafe = setTimeout(() => {
      setProgress(100);
      setIsLoaded(true);
    }, 2200);

    // Keyboard listener: Escape key skips intro immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      clearTimeout(failsafe);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 bg-[#14110f] flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/6 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Bar: Security clearance & Skip option */}
      <div className="w-full max-w-5xl flex items-center justify-between text-xs font-mono text-[#9e9891] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
          <span className="text-[#f4f0eb]">ENGINEER CREDENTIALS // SYSTEM LOAD</span>
        </div>

        <button
          type="button"
          onClick={onComplete}
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-[#9e9891] hover:text-[#ccff00] border border-white/5 transition-all cursor-pointer"
          aria-label="Skip introduction"
        >
          <span>Skip [ESC]</span>
          <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Centerpiece: 3D ID Card or CSS 3D Fallback */}
      <div className="my-auto flex flex-col items-center justify-center relative z-10">
        {!useFallback ? (
          <Suspense
            fallback={
              <div className="w-[320px] h-[460px] rounded-2xl bg-[#181512] border border-white/10 flex items-center justify-center font-mono text-xs text-[#9e9891] animate-pulse">
                Initializing 3D Access Badge...
              </div>
            }
          >
            <ThreeIDCard />
          </Suspense>
        ) : (
          /* CSS 3D Card Fallback for low-spec / non-WebGL devices */
          <div className="w-[300px] sm:w-[320px] h-[440px] sm:h-[460px] bg-gradient-to-b from-[#1c1815] via-[#14110f] to-[#110e0c] rounded-2xl border border-[#ccff00]/40 p-6 flex flex-col justify-between text-[#f4f0eb] shadow-[0_0_40px_rgba(204,255,0,0.15)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-[#ccff00] font-bold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>SRM UNIVERSITY-AP</span>
                </div>
                <span className="text-[9px] font-mono text-[#9e9891] px-1.5 py-0.5 rounded bg-white/5">
                  ID: #DR-2024
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#26211c] to-[#14110f] border-2 border-[#ccff00] flex items-center justify-center text-[#ccff00] font-mono font-bold text-xl shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                  DR
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-[#9e9891] uppercase">Engineer Pass</div>
                  <div className="text-sm font-bold text-[#f4f0eb]">{PERSONAL_INFO.name}</div>
                  <div className="text-[9px] font-mono text-[#ccff00]">LEVEL 01 CLEARANCE</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#f4f0eb]">
                  <Terminal className="w-3 h-3 text-[#ccff00]" />
                  <span>Backend &amp; AI Engineer</span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#9e9891]">
                  <Cpu className="w-3 h-3 text-[#38bdf8]" />
                  <span>Cybersecurity Undergraduate</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[8px] font-mono text-[#6e6761]">
                <span>AUTH_TOKEN: 0x7E3A99F</span>
                <span>STATUS: VERIFIED</span>
              </div>
              <div className="flex justify-between items-center h-6 bg-white/[0.03] px-2 rounded border border-white/5">
                {[4, 2, 6, 3, 1, 5, 2, 4, 6, 2, 3, 5, 1, 4, 6, 2].map((w, i) => (
                  <span key={i} className="bg-[#d8d3cc] opacity-80 h-full" style={{ width: `${w}px` }} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Progress Tracker & "Click to enter" action */}
      <div className="w-full max-w-md flex flex-col items-center space-y-4 relative z-10">
        {/* Numerical Ticker & Progress Bar */}
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between font-mono text-xs text-[#9e9891]">
            <span>INITIALIZING ENVIRONMENT</span>
            <span className="text-[#ccff00] font-bold">{progress}%</span>
          </div>

          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#ccff00] shadow-[0_0_10px_#ccff00]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>
        </div>

        {/* Action Button: "Click to enter" */}
        <div className="h-14 flex items-center justify-center">
          <AnimatePresence>
            {isLoaded ? (
              <motion.button
                key="enter-btn"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={onComplete}
                className="px-8 py-3.5 rounded-full text-sm font-mono font-bold bg-[#ccff00] text-[#14110f] hover:bg-[#d9ff33] hover:shadow-[0_0_35px_rgba(204,255,0,0.45)] transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Click to enter</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.span
                key="loading-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs font-mono text-[#6e6761] tracking-widest uppercase"
              >
                Calibrating systems...
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
