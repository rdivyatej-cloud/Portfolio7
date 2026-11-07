import React from 'react';
import { PERSONAL } from '../data/content';
import { ArrowUp, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070709] text-[#9e9e9e] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Identity & Status */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
            <span className="text-[#ededed] font-mono text-sm font-semibold tracking-wide">
              {PERSONAL.name}
            </span>
          </div>
          <p className="text-xs text-[#666666] font-mono">
            {PERSONAL.education.institution} • {PERSONAL.contact.location}
          </p>

          <a
            href="https://rdivyatej-cloud.github.io/divyatejportfolio2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#666666] hover:text-[#00e5ff] transition-colors mt-1"
          >
            <span>Previous portfolio (Archive)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Social & Contact Channels */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono">
          <a
            href={PERSONAL.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#9e9e9e] hover:text-[#00e5ff] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={PERSONAL.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#9e9e9e] hover:text-[#00e5ff] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL.contact.email}`}
            className="flex items-center gap-2 text-[#9e9e9e] hover:text-[#00e5ff] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>

          <a
            href={`tel:${PERSONAL.contact.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-[#9e9e9e] hover:text-[#00e5ff] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Telephone"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Phone</span>
          </a>
        </div>

        {/* Back to top action */}
        <button
          onClick={scrollToTop}
          type="button"
          className="group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-[#9e9e9e] hover:text-[#ededed] bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#00e5ff]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#666666] gap-4">
        <p>© {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.</p>
        <p>Architected with React, TypeScript, GSAP &amp; Tailwind</p>
      </div>
    </footer>
  );
};
