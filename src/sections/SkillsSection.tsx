import React from 'react';
import { SKILL_CATEGORIES, type SkillCategory } from '../data/content';
import { Code2, Server, Database, Cpu, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const getCategoryIcon = (title: string) => {
  switch (title) {
    case 'Languages':
      return <Code2 className="w-5 h-5 text-[#ccff00]" />;
    case 'Backend & APIs':
      return <Server className="w-5 h-5 text-[#38bdf8]" />;
    case 'Databases':
      return <Database className="w-5 h-5 text-[#f59e0b]" />;
    case 'AI & Engineering':
      return <Cpu className="w-5 h-5 text-[#a855f7]" />;
    case 'Tools & DevOps':
      return <Wrench className="w-5 h-5 text-[#06b6d4]" />;
    case 'CS Foundations':
      return <ShieldCheck className="w-5 h-5 text-[#10b981]" />;
    default:
      return <Code2 className="w-5 h-5 text-[#ccff00]" />;
  }
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#14110f] py-24 sm:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#ccff00]/3 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f0eb]">
            Skills &amp; Tooling.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-mono text-[#9e9891] leading-relaxed">
            Core stack competencies developed across backend engineering, relational and document databases, generative AI integrations, and computer science foundations.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((cat: SkillCategory, idx: number) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl p-6 sm:p-8 bg-[#181512] border border-white/5 hover:border-[#ccff00]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                      {getCategoryIcon(cat.title)}
                    </div>
                    <h3 className="font-mono text-base font-bold text-[#f4f0eb] group-hover:text-white transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#6e6761]">
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.03] hover:bg-[#ccff00]/10 text-[#d8d3cc] hover:text-[#ccff00] border border-white/5 hover:border-[#ccff00]/30 transition-all duration-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#ccff00]/60" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Category Status */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#6e6761]">
                <span>Category verified</span>
                <span className="text-[#9e9891]">0{idx + 1} / 06</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
