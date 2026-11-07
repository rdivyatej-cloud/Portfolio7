import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DOORS, PROJECTS } from '../data/content';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const DoorDetailPage: React.FC = () => {
  const { doorId } = useParams<{ doorId: string }>();
  const door = DOORS.find((d) => d.id === doorId);

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

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#9e9891] hover:text-[#ccff00] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to all doors
      </Link>

      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-sm px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#ccff00]">
            DOOR {door.doorNumber}
          </span>
          <span className="font-mono text-xs text-[#9e9891] uppercase tracking-wider">
            Specialization Detail
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#f4f0eb] tracking-tight">
          {door.title}
        </h1>
        <p className="mt-3 text-lg text-[#9e9891]">
          {door.description}
        </p>

        {/* Stack chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {door.highlightedStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-[#f4f0eb] border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Projects under this door */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold font-mono text-[#f4f0eb] flex items-center gap-2">
          <span>Demonstrated Projects</span>
          <span className="text-xs font-normal text-[#9e9891]">({relatedProjects.length})</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {relatedProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-[#1c1815] border border-white/5 hover:border-[#ccff00]/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-[#ccff00] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#f4f0eb] mt-1">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f4f0eb] border border-white/10 transition-colors self-start sm:self-center"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#9e9891]" />
                </a>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-[#9e9891]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 text-sm text-[#9e9891] list-disc list-inside">
                {project.description.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="text-[#f4f0eb]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
