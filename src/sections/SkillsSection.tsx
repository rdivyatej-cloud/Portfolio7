import React from 'react';
import { SKILL_GROUPS, CERTIFICATIONS, ACHIEVEMENTS, type SkillGroup } from '../data/content';
import { Code2, Server, Database, Cpu, Wrench, ShieldCheck, Award, Trophy, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Languages':
      return <Code2 className="w-5 h-5 text-[#00e5ff]" />;
    case 'Backend & APIs':
      return <Server className="w-5 h-5 text-[#38bdf8]" />;
    case 'Databases':
      return <Database className="w-5 h-5 text-[#60a5fa]" />;
    case 'AI & Engineering':
      return <Cpu className="w-5 h-5 text-[#818cf8]" />;
    case 'Tools & DevOps':
      return <Wrench className="w-5 h-5 text-[#34d399]" />;
    case 'Computer Science':
      return <ShieldCheck className="w-5 h-5 text-[#a78bfa]" />;
    default:
      return <Code2 className="w-5 h-5 text-[#00e5ff]" />;
  }
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#09090b] py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-[#00e5ff]/3 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
            <span>Core Competencies &amp; Toolkit</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#ededed]">
            Technical Skills.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-mono text-[#9e9e9e] leading-relaxed">
            Architectural proficiency across backend services, database normalization, generative AI APIs, and theoretical computer science foundations.
          </p>
        </div>

        {/* 6 Category Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {SKILL_GROUPS.map((group: SkillGroup, idx: number) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl p-6 sm:p-8 bg-[#121215] border border-white/[0.08] hover:border-[#00e5ff]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="font-mono text-base font-bold text-[#ededed] group-hover:text-white transition-colors">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#666666]">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-[#9e9e9e] font-mono mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.02] hover:bg-[#00e5ff]/10 text-[#d4d4d8] hover:text-[#00e5ff] border border-white/5 hover:border-[#00e5ff]/30 transition-all duration-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#00e5ff]/60" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#666666]">
                <span>VERIFIED STACK</span>
                <span className="text-[#9e9e9e]">{group.skills.length} TECHNOLOGIES</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Achievements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pt-16 border-t border-white/[0.08]">
          
          {/* Left: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
              <Award className="w-4 h-4" />
              <span>Professional Certifications</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#ededed]">
              Verified Credentials
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-2xl bg-[#121215] border border-white/[0.08] hover:border-[#00e5ff]/40 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-[#ededed]">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-[#9e9e9e] mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#00e5ff] px-2.5 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Achievements & Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
              <Trophy className="w-4 h-4" />
              <span>Competitive Problem Solving</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#ededed]">
              Milestones &amp; Challenges
            </h3>

            <div className="space-y-3">
              {ACHIEVEMENTS.map((ach, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#121215] border border-white/[0.08] hover:border-white/20 transition-colors flex items-start gap-3.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff] mt-2 shrink-0" />
                  <p className="text-sm text-[#d4d4d8] leading-relaxed">
                    {ach}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
