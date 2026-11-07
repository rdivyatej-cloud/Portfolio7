import React, { useState } from 'react';
import { TIMELINE, type TimelineEntry } from '../data/content';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const currentItem = TIMELINE[activeTab];

  return (
    <section
      id="experience"
      className="relative w-full bg-[#09090b] py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Chronological Storytelling</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#ededed]">
            Experience &amp; Education.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-mono text-[#9e9e9e] leading-relaxed">
            Practical backend engineering internship combined with rigorous computer science and cybersecurity foundations.
          </p>
        </div>

        {/* Interactive Era Switcher & Storyboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Era Selector Pills */}
          <div className="lg:col-span-5 space-y-3">
            {TIMELINE.map((item: TimelineEntry, idx: number) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#121215] border-[#00e5ff] shadow-[0_0_25px_rgba(0,229,255,0.12)]'
                      : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30'
                          : 'bg-white/5 text-[#9e9e9e]'
                      }`}
                    >
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-[#666666]">
                      {item.type === 'experience' ? 'Engineering' : 'Academic'}
                    </span>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold transition-colors ${
                      isActive ? 'text-[#ededed]' : 'text-[#9e9e9e]'
                    }`}
                  >
                    {item.role}
                  </h3>

                  <p className="text-xs font-mono text-[#666666] mt-1">
                    {item.organization}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Animated Story Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="p-8 sm:p-10 rounded-3xl bg-[#121215] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.4)] space-y-6"
              >
                {/* Milestone Badge & Type */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      {currentItem.type === 'experience' ? (
                        <Briefcase className="w-4 h-4 text-[#00e5ff]" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider font-semibold">
                      {currentItem.badge}
                    </span>
                  </div>

                  <span className="font-mono text-sm text-[#9e9e9e] font-bold">
                    {currentItem.period}
                  </span>
                </div>

                {/* Role & Org */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#ededed]">
                    {currentItem.role}
                  </h3>
                  <p className="text-sm sm:text-base font-mono text-[#00e5ff] mt-1">
                    {currentItem.organization}
                  </p>
                </div>

                {/* Bulleted Points */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block">
                    Key Focus &amp; Responsibilities:
                  </span>
                  <ul className="space-y-3">
                    {currentItem.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#9e9e9e] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                        <span className="text-[#d4d4d8]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

