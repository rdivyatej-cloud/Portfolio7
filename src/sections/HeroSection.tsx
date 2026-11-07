import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/content';
import { useISTClock } from '../hooks/useISTClock';
import { useFileExists } from '../hooks/useFileExists';
import { SafeImage } from '../components/SafeImage';
import { ArrowDown, ArrowUpRight, Clock, FileDown, Sparkles } from 'lucide-react';

const ROLES = [
  "Backend Engineer",
  "AI Engineer",
  "Cybersecurity"
];

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const istTime = useISTClock();
  const cvExists = useFileExists(PERSONAL_INFO.resumePath);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-8 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#ccff00]/6 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-10 w-[400px] h-[300px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Top Meta Bar: Availability + Live IST Clock */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-white/5 font-mono text-xs text-[#9e9891]"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#ccff00]/30 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
          </span>
          <span className="text-[#f4f0eb] tracking-tight">{PERSONAL_INFO.availability}</span>
        </div>

        {/* Live IST Clock & Location */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
          <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
          <span>{istTime || 'Loading IST...'}</span>
          <span className="text-[#6e6761]">•</span>
          <span className="text-[#9e9891]">{PERSONAL_INFO.location}</span>
        </div>
      </motion.div>

      {/* Main Hero Centerpiece */}
      <div className="my-auto py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 max-w-4xl"
        >
          {/* Profile snippet with stylish avatar fallback */}
          <div className="flex items-center gap-4">
            <SafeImage
              src={PERSONAL_INFO.profileImage}
              alt="Divyatej Rallapalli profile"
              fallbackType="profile"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#ccff00]/40 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            />
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Divyatej Rallapalli</span>
              </div>
              <span className="text-xs font-mono text-[#9e9891]">
                Backend &amp; AI Engineer • {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Primary Cinematic Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f0eb] leading-[1.08]">
            Hi, I'm <span className="text-[#f4f0eb] underline decoration-[#ccff00]/40 decoration-4 underline-offset-8">Divyatej</span>.
            <br />
            I build reliable{' '}
            <span className="text-[#f4f0eb]">backend systems</span> and{' '}
            <span className="text-[#f4f0eb]">AI-powered products</span>.
          </h1>

          {/* Rotating Role Ticker */}
          <div className="flex items-center gap-3 pt-2">
            <span className="font-mono text-base sm:text-xl text-[#9e9891]">Specializing in:</span>
            <div className="relative h-9 sm:h-11 overflow-hidden min-w-[240px] sm:min-w-[320px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute font-mono text-base sm:text-xl font-bold px-3 py-1 rounded bg-white/5 border border-white/10 text-[#ccff00]"
                >
                  &gt; {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Brief Bio / Summary snippet */}
          <p className="text-base sm:text-lg text-[#9e9891] max-w-2xl font-normal leading-relaxed pt-2">
            Computer Science (Cybersecurity) undergraduate at {PERSONAL_INFO.university} with experience from FlyRank AI building scalable REST APIs, token metering engines, and secure architectures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-mono font-semibold bg-[#ccff00] text-[#14110f] hover:bg-[#d9ff33] hover:shadow-[0_0_30px_rgba(204,255,0,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Hire me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#doors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('doors');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-mono font-medium text-[#f4f0eb] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span>See my work</span>
              <ArrowDown className="w-4 h-4 text-[#ccff00]" />
            </a>

            {/* Download CV button - only shown when file exists */}
            {cvExists && (
              <a
                href={PERSONAL_INFO.resumePath}
                download="Divyatej_Rallapalli_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-mono font-medium text-[#9e9891] hover:text-[#f4f0eb] bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 transition-all duration-300"
              >
                <FileDown className="w-4 h-4 text-[#ccff00]" />
                <span>Download CV</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Cue: Scroll to explore */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center justify-between border-t border-white/5 pt-6 text-xs font-mono text-[#6e6761]"
      >
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
          <span>B.Tech CSE (Cybersecurity) @ SRM-AP</span>
        </div>

        <button
          onClick={() => scrollToSection('doors')}
          className="group mx-auto sm:mx-0 flex items-center gap-2.5 text-[#9e9891] hover:text-[#ccff00] transition-colors cursor-pointer"
          aria-label="Scroll to explore work"
        >
          <span>Scroll to explore</span>
          <span className="w-6 h-6 rounded-full border border-white/10 group-hover:border-[#ccff00] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#ccff00]" />
          </span>
        </button>

        <div className="hidden sm:block text-[#6e6761]">
          <span>[ 01 / 05 ] Overview</span>
        </div>
      </motion.div>
    </section>
  );
};
