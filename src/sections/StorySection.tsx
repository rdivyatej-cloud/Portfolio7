import React, { useState, useEffect, useRef } from 'react';
import { TIMELINE, type TimelineEntry } from '../data/content';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Award, Trophy, Clock } from 'lucide-react';

const getMilestoneIcon = (badge?: string) => {
  switch (badge) {
    case 'Internship':
      return <Briefcase className="w-4 h-4 text-[#ccff00]" />;
    case 'Education':
    case 'Pre-University':
      return <GraduationCap className="w-4 h-4 text-[#38bdf8]" />;
    case 'Certifications':
      return <Award className="w-4 h-4 text-[#f59e0b]" />;
    case 'Milestones':
      return <Trophy className="w-4 h-4 text-[#10b981]" />;
    default:
      return <Calendar className="w-4 h-4 text-[#ccff00]" />;
  }
};

export const StorySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const total = TIMELINE.length;
  const currentEntry = TIMELINE[activeIndex] || TIMELINE[0];

  return (
    <section
      id="story"
      className="relative w-full bg-[#14110f] py-24 sm:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#ccff00]/4 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-amber-500/4 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Timeline &amp; Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4f0eb]">
            Let's go back in time.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9e9891] leading-relaxed font-mono">
            A chronological trace through engineering internships, systems development, foundational computer science degree, and continuous problem-solving.
          </p>
        </div>

        {/* Two-Column Grid: Sticky Ticker on Left, Timeline Stream on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Left Rail (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-8 rounded-3xl bg-[#181512] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md">
              {/* Dynamic 01 / 0N Counter */}
              <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-6">
                <span className="font-mono text-xs text-[#9e9891] uppercase tracking-wider">
                  Timeline Cursor
                </span>
                <div className="font-mono text-2xl font-bold text-[#f4f0eb]">
                  <span className="text-[#ccff00]">
                    0{activeIndex + 1}
                  </span>
                  <span className="text-[#6e6761]"> / 0{total}</span>
                </div>
              </div>

              {/* Year Ticker */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono text-[#6e6761] uppercase tracking-wider block">
                  Highlighted Era
                </span>
                <div className="font-mono text-3xl font-extrabold text-[#f4f0eb] tracking-tight transition-all duration-300">
                  {currentEntry.period}
                </div>
                <div className="text-xs font-mono text-[#ccff00] truncate">
                  {currentEntry.organization}
                </div>
              </div>

              {/* Progress Steps Indicator */}
              <div className="space-y-2 pt-4 border-t border-white/5">
                {TIMELINE.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      itemRefs.current[idx]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                      activeIndex === idx
                        ? 'bg-white/10 text-[#f4f0eb] border border-[#ccff00]/40'
                        : 'text-[#6e6761] hover:text-[#9e9891] hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                    <span className="text-[10px] text-[#9e9891]">{item.period}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Cards Stream on Right */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-10 space-y-12 sm:space-y-16">
            {/* Glowing Vertical Rail Line */}
            <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#ccff00] via-white/10 to-transparent" />

            {TIMELINE.map((item: TimelineEntry, index: number) => {
              const isCurrent = activeIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="relative group"
                >
                  {/* Glowing Node Dot on Timeline Rail */}
                  <div
                    className={`absolute -left-[30px] sm:-left-[46px] top-7 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-[#14110f] ${
                      isCurrent
                        ? 'border-[#ccff00] shadow-[0_0_15px_#ccff00] scale-125'
                        : 'border-white/20 group-hover:border-white/50'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isCurrent ? 'bg-[#ccff00]' : 'bg-[#6e6761]'
                      }`}
                    />
                  </div>

                  {/* Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className={`rounded-3xl p-6 sm:p-8 bg-[#181512] border transition-all duration-500 ${
                      isCurrent
                        ? 'border-[#ccff00]/50 shadow-[0_15px_40px_rgba(204,255,0,0.06)]'
                        : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    {/* Header Row: Badge + Period + Mobile Counter */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                          {getMilestoneIcon(item.badge)}
                        </span>
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f4f0eb]">
                          {item.badge || 'Experience'}
                        </span>
                        {item.notes && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            {item.notes}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#ccff00] px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/20">
                          {item.period}
                        </span>
                        <span className="lg:hidden font-mono text-xs text-[#6e6761]">
                          0{index + 1} / 0{total}
                        </span>
                      </div>
                    </div>

                    {/* Milestone Title & Organization */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#f4f0eb] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-mono text-[#9e9891] mt-1 mb-4 flex items-center gap-2">
                      <span className="text-[#f4f0eb]">{item.organization}</span>
                    </p>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base text-[#9e9891] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Skill / Technology Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-[#9e9891] border border-white/5 hover:text-[#f4f0eb] hover:border-white/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
