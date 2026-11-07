import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL } from '../data/content';
import { ArrowDown, ArrowUpRight, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient radial gradients & fine grid */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[350px] bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[300px] bg-blue-600/4 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none -z-10" />

      {/* Top Meta Line: Editorial Sub-header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-white/[0.08] font-mono text-xs text-[#9e9e9e]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#ededed] font-bold tracking-widest uppercase">
            {PERSONAL.name}
          </span>
          <span className="text-[#666666]">/</span>
          <span className="text-[#00e5ff] tracking-wider uppercase">
            {PERSONAL.roleHeadline}
          </span>
        </div>

        {/* Clean status indicator without false claims */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]" />
          </span>
          <span className="text-[#9e9e9e] text-[11px] font-mono">
            {PERSONAL.contact.statusText}
          </span>
        </div>
      </motion.div>

      {/* Main Editorial Hero Centerpiece */}
      <div className="my-auto py-12 sm:py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="space-y-8"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-[#9e9e9e]">
            <Terminal className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span>Systems Architecture • AI Integration • Cybersecurity</span>
          </div>

          {/* Large Main Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#ededed] leading-[1.02]">
            I build systems.
            <br />
            <span className="text-[#00e5ff] underline decoration-[#00e5ff]/20 decoration-2 underline-offset-8">
              I engineer intelligence.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-2xl text-[#9e9e9e] max-w-3xl font-normal leading-relaxed pt-2">
            {PERSONAL.supportingText}
          </p>

          {/* Introduction snippet */}
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl font-mono leading-relaxed">
            {PERSONAL.introduction}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-mono font-semibold bg-[#00e5ff] text-[#09090b] hover:bg-[#33ebff] hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 text-[#09090b]" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-mono font-medium text-[#ededed] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00e5ff]/40 transition-all duration-300 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#00e5ff]" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Bar & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center justify-between border-t border-white/[0.08] pt-6 text-xs font-mono text-[#666666]"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
          <span>{PERSONAL.education.institution} • {PERSONAL.education.degree}</span>
        </div>

        <button
          onClick={() => scrollTo('projects')}
          className="group flex items-center gap-2 text-[#9e9e9e] hover:text-[#00e5ff] transition-colors cursor-pointer"
          aria-label="Scroll to explore projects"
        >
          <span>Scroll to explore</span>
          <span className="w-6 h-6 rounded-full border border-white/10 group-hover:border-[#00e5ff] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#00e5ff]" />
          </span>
        </button>

        <div className="hidden sm:block">
          <span>[ 01 / 05 ] Showcase</span>
        </div>
      </motion.div>
    </section>
  );
};
