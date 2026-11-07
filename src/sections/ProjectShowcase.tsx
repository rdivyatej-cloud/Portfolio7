import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, type Project } from '../data/content';
import { SafeImage } from '../components/SafeImage';
import { GithubIcon } from '../components/Icons';
import { ExternalLink, ArrowRight, X, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      const tween = gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScroll * 1.3}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              PROJECTS.length - 1,
              Math.floor(self.progress * PROJECTS.length)
            );
            setCurrentIndex(idx);
          },
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
      id="projects"
      className="relative w-full bg-[#09090b] py-24 lg:py-32 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#00e5ff]/4 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Showcase Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Space Exploration</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#ededed]">
              Selected Systems.
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs sm:text-sm font-mono text-[#9e9e9e] max-w-md">
              Five production services exploring idempotent metering, generative AI pipelines, and secure cloud backends.
            </p>
            <div className="hidden lg:flex items-center gap-2 font-mono text-sm text-[#ededed]">
              <span className="text-[#00e5ff]">0{currentIndex + 1}</span>
              <span className="text-[#666666]">/</span>
              <span className="text-[#666666]">0{PROJECTS.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Exploration Track */}
      <div className="w-full">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-16 w-full lg:w-max items-stretch"
        >
          {PROJECTS.map((project: Project) => (
            <div
              key={project.id}
              className="group relative w-full lg:w-[580px] rounded-3xl bg-[#121215] border border-white/[0.08] hover:border-[#00e5ff]/50 transition-all duration-500 flex flex-col justify-between p-8 sm:p-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Top Accent Light */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[110px] pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity duration-500"
                style={{ backgroundColor: project.highlightColor }}
              />

              {/* Top Header: Number & Category */}
              <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-xl sm:text-2xl font-extrabold tracking-tighter"
                    style={{ color: project.highlightColor }}
                  >
                    {project.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#9e9e9e]">
                    {project.category}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#666666] px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/5">
                  ROOM {project.number}
                </span>
              </div>

              {/* Visual Preview / Schematic Door Face */}
              <div className="relative z-10 mb-6 overflow-hidden rounded-2xl border border-white/5 group-hover:border-white/15 transition-all">
                <SafeImage
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fallbackType="project"
                  fallbackText={project.title}
                  categoryText={project.category}
                  accentColor={project.highlightColor}
                  className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Identity & Short Description */}
              <div className="relative z-10 space-y-3 mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#ededed] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#00e5ff] tracking-wide">
                  {project.subtitle}
                </p>
                <p className="text-sm text-[#9e9e9e] leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="relative z-10 flex flex-wrap gap-1.5 mb-8">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-[#9e9e9e] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons: View Project & GitHub */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-[#00e5ff] text-[#ededed] hover:text-[#09090b] border border-white/10 hover:border-[#00e5ff] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#ededed] hover:text-[#00e5ff] border border-white/10 transition-colors cursor-pointer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal / Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121215] border border-white/10 p-6 sm:p-10 text-[#ededed] shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#9e9e9e] hover:text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 mb-8 pr-12">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-sm font-bold px-3 py-1 rounded border tracking-wider"
                    style={{
                      borderColor: `${selectedProject.highlightColor}40`,
                      color: selectedProject.highlightColor,
                      backgroundColor: `${selectedProject.highlightColor}10`,
                    }}
                  >
                    PROJECT {selectedProject.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9e9e9e]">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#ededed]">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-[#00e5ff]">
                  {selectedProject.subtitle}
                </p>
                <p className="text-base text-[#9e9e9e] leading-relaxed pt-2">
                  {selectedProject.description}
                </p>
              </div>

              {/* Visual Preview */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
                <SafeImage
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  fallbackType="project"
                  fallbackText={selectedProject.title}
                  categoryText={selectedProject.category}
                  accentColor={selectedProject.highlightColor}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              {/* Deep Architecture Features */}
              <div className="space-y-4 mb-8">
                <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-[#00e5ff] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Engineering Implementations</span>
                </h4>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#9e9e9e] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] mt-2 shrink-0" />
                      <span className="text-[#ededed]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Chips */}
              <div className="space-y-3 mb-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#666666]">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-[#9e9e9e] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#666666]">
                  Open source &amp; documented
                </span>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-semibold bg-[#00e5ff] text-[#09090b] hover:bg-[#33ebff] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
