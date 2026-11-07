import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { ArrowUp, ArrowUpRight, FileDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { useFileExists } from '../hooks/useFileExists';

export const Footer: React.FC = () => {
  const cvExists = useFileExists(PERSONAL_INFO.resumePath);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#100d0b] text-[#9e9891] py-14 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Identity & Status */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ccff00]"></span>
            <span className="text-[#f4f0eb] font-mono text-sm font-semibold tracking-wide">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-[#9e9891] font-mono">
            {PERSONAL_INFO.availability} • {PERSONAL_INFO.location}
          </p>
          
          {/* Previous portfolio link */}
          <a
            href={PERSONAL_INFO.previousPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6e6761] hover:text-[#ccff00] transition-colors mt-1"
          >
            <span>Previous portfolio (Archive)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Social & Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-[#9e9891] hover:text-[#ccff00] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-[#9e9891] hover:text-[#ccff00] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 text-xs font-mono text-[#9e9891] hover:text-[#ccff00] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>

          {/* Conditional Download CV in footer */}
          {cvExists && (
            <a
              href={PERSONAL_INFO.resumePath}
              download="Divyatej_Rallapalli_CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f4f0eb] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>Download CV</span>
            </a>
          )}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          type="button"
          className="group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-[#9e9891] hover:text-[#f4f0eb] bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#ccff00]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#6e6761] gap-4">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        <p>Built with Vite, React, TypeScript, GSAP &amp; Tailwind</p>
      </div>
    </footer>
  );
};
