import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { ArrowDown, Terminal, Cpu, ShieldCheck } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-18rem)] px-4 sm:px-6 lg:px-8 text-center py-20">
      {/* Aesthetic ambient glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Status Chip */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#9e9891] mb-8">
        <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
        <span>Phase 1 Initialized — Dark Theme &amp; Architecture Ready</span>
      </div>

      {/* Main Headline Placeholder */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4f0eb] max-w-4xl mx-auto">
        {PERSONAL_INFO.name}
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-[#9e9891] font-mono max-w-2xl mx-auto">
        {PERSONAL_INFO.roleTitle}
      </p>

      {/* Mini Feature Badges */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full text-left">
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/30 transition-all">
          <Terminal className="w-5 h-5 text-[#ccff00] mb-3" />
          <h2 className="text-sm font-semibold text-[#f4f0eb]">Backend Systems</h2>
          <p className="text-xs text-[#9e9891] mt-1">Node.js, Express, PostgreSQL, REST APIs &amp; Docker.</p>
        </div>
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/30 transition-all">
          <Cpu className="w-5 h-5 text-[#38bdf8] mb-3" />
          <h2 className="text-sm font-semibold text-[#f4f0eb]">AI &amp; LLM</h2>
          <p className="text-xs text-[#9e9891] mt-1">Generative AI workflows, Gemini API, token metering engines.</p>
        </div>
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/30 transition-all">
          <ShieldCheck className="w-5 h-5 text-[#10b981] mb-3" />
          <h2 className="text-sm font-semibold text-[#f4f0eb]">Cybersecurity</h2>
          <p className="text-xs text-[#9e9891] mt-1">Cryptographic webhooks, JWT auth, secure software design.</p>
        </div>
      </div>

      {/* Scroll cue hint */}
      <div className="mt-16 flex flex-col items-center gap-2 text-xs font-mono text-[#6e6761]">
        <span>Awaiting Phase 2: Hero &amp; Interactive Navigation</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#ccff00]" />
      </div>
    </div>
  );
};
