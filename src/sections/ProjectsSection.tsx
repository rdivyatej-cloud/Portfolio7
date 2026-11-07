import React, { useState } from 'react';
import { PROJECTS, type Project } from '../data/content';
import { ExternalLink, Layers, Sparkles, Filter } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { SafeImage } from '../components/SafeImage';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'backend-engineering', label: 'Backend' },
  { id: 'ai-llm-integration', label: 'AI & LLM' },
  { id: 'full-stack-apps', label: 'Full-Stack' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
];

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = PROJECTS.filter((project: Project) => {
    if (selectedFilter === 'all') return true;
    return project.doorCategories.includes(selectedFilter as any);
  });

  return (
    <section
      id="projects"
      className="relative w-full bg-[#14110f] py-24 sm:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#ccff00]/4 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Code &amp; Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f0eb]">
              Featured Projects.
            </h2>
            <p className="mt-3 text-sm sm:text-base font-mono text-[#9e9891] max-w-xl">
              End-to-end architectures spanning usage metering, generative AI insight engines, full-stack expense dashboards, and secure backend systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#6e6761] mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                  selectedFilter === cat.id
                    ? 'bg-[#ccff00] text-[#14110f] font-semibold shadow-[0_0_15px_rgba(204,255,0,0.25)]'
                    : 'bg-white/5 text-[#9e9891] hover:text-[#f4f0eb] hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-3xl bg-[#181512] border border-white/5 hover:border-[#ccff00]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 sm:p-8"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/5 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Screenshot / Blueprint Image with SafeImage fallback */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/5 group-hover:border-white/15 transition-all">
                    <SafeImage
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fallbackType="project"
                      fallbackText={project.title}
                      categoryText={project.category}
                      className="w-full h-52 sm:h-60 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Header Row: Category Badge & GitHub Link */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-mono text-[#ccff00] uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f4f0eb] border border-white/10 hover:border-[#ccff00]/40 transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3 text-[#9e9891]" />
                    </a>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f4f0eb] group-hover:text-white transition-colors mb-4">
                    {project.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#9e9891] mb-6">
                    {project.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                        <span className="text-[#d8d3cc]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tech Stack Chips & Action Link */}
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-[#9e9891] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#6e6761] pt-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
                      <span>GitHub Verified</span>
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9e9891] group-hover:text-[#ccff00] flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Repository →</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
