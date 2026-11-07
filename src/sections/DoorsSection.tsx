import React, { useEffect, useRef, useState } from 'react';
import { DOORS, PROJECTS, type Door } from '../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Sparkles, Terminal, Cpu, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getDoorIcon = (id: string) => {
  switch (id) {
    case 'backend-engineering':
      return <Terminal className="w-6 h-6 text-[#ccff00]" />;
    case 'ai-llm-integration':
      return <Cpu className="w-6 h-6 text-[#38bdf8]" />;
    case 'full-stack-apps':
      return <Layers className="w-6 h-6 text-[#f59e0b]" />;
    case 'cybersecurity':
      return <ShieldCheck className="w-6 h-6 text-[#10b981]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#ccff00]" />;
  }
};

export const DoorsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDoor, setActiveDoor] = useState<string | null>(null);

  useEffect(() => {
    // Only apply horizontal scroll-pinning on desktop screens (>= 1024px)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const container = containerRef.current;
      const section = sectionRef.current;
      if (!container || !section) return;

      const totalScroll = container.scrollWidth - window.innerWidth + 120;

      const tween = gsap.to(container, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScroll * 1.2}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="doors"
      className="relative w-full bg-[#14110f] py-20 lg:py-28 overflow-hidden border-t border-white/5"
    >
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ccff00]"></span>
              <span>Specializations &amp; Core Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f0eb]">
              One door per skill.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9e9891] max-w-md">
            Interactive skill vaults. Hover or scroll across each door to inspect demonstrated capabilities and step inside to examine the underlying production projects.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll / Grid Track */}
      <div className="w-full">
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-16 w-full lg:w-max items-stretch"
        >
          {DOORS.map((door: Door) => {
            const relatedCount = PROJECTS.filter((p) =>
              p.doorCategories.includes(door.id)
            ).length;
            const isHovered = activeDoor === door.id;

            return (
              <div
                key={door.id}
                onMouseEnter={() => setActiveDoor(door.id)}
                onMouseLeave={() => setActiveDoor(null)}
                className={`group relative w-full lg:w-[420px] rounded-2xl bg-[#181512] border transition-all duration-500 overflow-hidden flex flex-col justify-between p-8 ${
                  isHovered
                    ? 'border-[#ccff00]/60 shadow-[0_10px_40px_rgba(204,255,0,0.1)] -translate-y-1'
                    : 'border-white/5 hover:border-white/20'
                }`}
              >
                {/* Door Glow Backdrop */}
                <div
                  className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                  style={{ backgroundColor: door.accent }}
                />

                {/* Subtle Grid Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

                {/* Top Door Index & Icon */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded border tracking-wider"
                      style={{
                        borderColor: `${door.accent}40`,
                        color: door.accent,
                        backgroundColor: `${door.accent}10`,
                      }}
                    >
                      DOOR {door.doorNumber}
                    </span>
                    <span className="text-[11px] font-mono text-[#9e9891]">
                      {relatedCount} Projects
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                    {getDoorIcon(door.id)}
                  </div>
                </div>

                {/* Main Door Identity */}
                <div className="relative z-10 my-4 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f0eb] group-hover:text-white transition-colors">
                    {door.title}
                  </h3>
                  <p
                    className="text-xs font-mono tracking-wide"
                    style={{ color: door.accent }}
                  >
                    {door.subtitle}
                  </p>
                  <p className="text-sm text-[#9e9891] leading-relaxed pt-1">
                    {door.description}
                  </p>
                </div>

                {/* Key Strengths & Stack Preview */}
                <div className="relative z-10 mt-6 pt-6 border-t border-white/5 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6e6761] block mb-2">
                      Key Strengths
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs font-mono text-[#9e9891]">
                      {door.keyStrengths.slice(0, 3).map((strength, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: door.accent }}
                          />
                          <span className="text-[#d8d3cc]">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlighted Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {door.highlightedStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-[#9e9891] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Step Inside Action Button */}
                  <div className="pt-4">
                    <Link
                      to={`/door/${door.id}`}
                      className="group/link flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] group-hover:bg-[#ccff00] border border-white/10 group-hover:border-[#ccff00] transition-all duration-300"
                    >
                      <span className="text-xs font-mono font-medium text-[#f4f0eb] group-hover:text-[#14110f] transition-colors">
                        Step inside door
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#ccff00] group-hover:text-[#14110f] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
