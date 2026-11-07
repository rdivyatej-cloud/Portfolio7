import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DOORS, PROJECTS } from '../data/content';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { SafeImage } from '../components/SafeImage';

export const DoorDetailPage: React.FC = () => {
  const { doorId } = useParams<{ doorId: string }>();
  const door = DOORS.find((d) => d.id === doorId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doorId]);

  if (!door) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold font-mono text-[#f4f0eb]">Door Not Found</h1>
        <p className="mt-4 text-[#9e9891]">The requested specialization door does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#ccff00] text-[#14110f] rounded-full text-xs font-mono font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Return to overview
        </Link>
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) =>
    p.doorCategories.includes(door.id)
  );

  const currentIndex = DOORS.findIndex((d) => d.id === door.id);
  const nextDoor = DOORS[(currentIndex + 1) % DOORS.length];
  const prevDoor = DOORS[(currentIndex - 1 + DOORS.length) % DOORS.length];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#9e9891] hover:text-[#ccff00] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all doors
        </Link>

        <div className="flex items-center gap-4 text-xs font-mono text-[#9e9891]">
          <Link
            to={`/door/${prevDoor.id}`}
            className="hover:text-[#ccff00] transition-colors"
          >
            ← Door {prevDoor.doorNumber}
          </Link>
          <span className="text-white/20">|</span>
          <Link
            to={`/door/${nextDoor.id}`}
            className="hover:text-[#ccff00] transition-colors"
          >
            Door {nextDoor.doorNumber} →
          </Link>
        </div>
      </div>

      {/* Door Header Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#1c1815] to-[#14110f] border border-white/10 mb-16 overflow-hidden">
        {/* Glow */}
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[140px] pointer-events-none opacity-25"
          style={{ backgroundColor: door.accent }}
        />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold px-3 py-1 rounded border tracking-wider"
              style={{
                borderColor: `${door.accent}50`,
                color: door.accent,
                backgroundColor: `${door.accent}15`,
              }}
            >
              DOOR {door.doorNumber}
            </span>
            <span className="font-mono text-xs text-[#9e9891] uppercase tracking-wider">
              {door.subtitle}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#f4f0eb] tracking-tight">
            {door.title}
          </h1>

          <p className="text-base sm:text-lg text-[#9e9891] leading-relaxed">
            {door.description}
          </p>

          {/* Key Strengths Pills */}
          <div className="pt-4 flex flex-wrap gap-2">
            {door.keyStrengths.map((strength) => (
              <span
                key={strength}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-[#d8d3cc]"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: door.accent }} />
                <span>{strength}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <h2 className="text-2xl font-bold font-mono text-[#f4f0eb] flex items-center gap-3">
            <span>Production Projects</span>
            <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#ccff00]">
              {relatedProjects.length}
            </span>
          </h2>
          <span className="text-xs font-mono text-[#9e9891] hidden sm:inline">
            Tested &amp; Documented Architectures
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {relatedProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-[#181512] border border-white/5 hover:border-[#ccff00]/40 transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
            >
              {/* Screenshot or Blueprint preview */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <SafeImage
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fallbackType="project"
                  fallbackText={project.title}
                  categoryText={project.category}
                  className="w-full h-56 sm:h-64 object-cover rounded-xl border border-white/5"
                  loading="lazy"
                />
              </div>

              {/* Project Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-mono text-[#ccff00] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f4f0eb] border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-[#9e9891]" />
                    </a>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#f4f0eb] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-[#9e9891] border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 text-sm text-[#9e9891]">
                    {project.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                        <span className="text-[#d8d3cc]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#6e6761]">
                  <span>Source Code Verified</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9e9891] hover:text-[#ccff00] flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect code on GitHub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Next Door Navigation Card */}
      <div className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-[#9e9891] uppercase tracking-wider block">
            Continue exploring
          </span>
          <h4 className="text-xl font-bold text-[#f4f0eb] mt-1">
            Door {nextDoor.doorNumber}: {nextDoor.title}
          </h4>
        </div>
        <Link
          to={`/door/${nextDoor.id}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-medium bg-[#ccff00] text-[#14110f] hover:bg-[#d9ff33] transition-all"
        >
          <span>Open Next Door</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
