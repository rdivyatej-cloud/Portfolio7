import React from 'react';
import { PERSONAL } from '../data/content';
import { SafeImage } from '../components/SafeImage';
import { Server, Cpu, Shield, Layers } from 'lucide-react';

const getPillarIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return <Server className="w-5 h-5 text-[#00e5ff]" />;
    case 1:
      return <Cpu className="w-5 h-5 text-[#38bdf8]" />;
    case 2:
      return <Shield className="w-5 h-5 text-[#818cf8]" />;
    case 3:
      return <Layers className="w-5 h-5 text-[#34d399]" />;
    default:
      return <Server className="w-5 h-5 text-[#00e5ff]" />;
  }
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#09090b] py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#00e5ff]/3 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
            <span>Philosophy &amp; Background</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#ededed]">
            {PERSONAL.about.heading}
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#9e9e9e] leading-relaxed">
            {PERSONAL.about.description}
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Key Identity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <SafeImage
                src="./images/profile.jpg"
                alt="Divyatej Rallapalli portrait"
                fallbackType="profile"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs text-[#ededed]">
                <div>
                  <span className="block font-bold text-sm">{PERSONAL.name}</span>
                  <span className="text-[#9e9e9e] text-[11px]">{PERSONAL.roleHeadline}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#09090b]/80 border border-white/10 text-[10px] text-[#00e5ff]">
                  SRM UNIVERSITY–AP
                </span>
              </div>
            </div>

            {/* Quick Education / Credential Summary Pill */}
            <div className="p-6 rounded-2xl bg-[#121215] border border-white/[0.08] space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[#ededed]">
                <span className="font-semibold">{PERSONAL.education.degree}</span>
                <span className="text-[#00e5ff]">CGPA {PERSONAL.education.cgpa}</span>
              </div>
              <p className="text-[#666666] text-[11px]">
                {PERSONAL.education.institution} • {PERSONAL.education.period}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Engineering Pillars */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Editorial Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#9e9e9e] leading-relaxed">
              {PERSONAL.about.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* 4 Engineering Pillars */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00e5ff] block mb-4">
                Core Engineering Pillars
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERSONAL.about.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-[#121215] border border-white/[0.08] hover:border-[#00e5ff]/40 transition-colors space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        {getPillarIcon(idx)}
                      </div>
                      <h4 className="font-mono text-xs font-bold text-[#ededed]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#9e9e9e] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
