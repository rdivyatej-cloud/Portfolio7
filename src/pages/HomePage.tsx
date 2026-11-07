import React from 'react';
import { HeroSection } from '../sections/HeroSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Placeholder Anchor for Subsequent Phases */}
      <div id="doors" className="py-12 border-t border-white/5 text-center">
        <span className="font-mono text-xs text-[#6e6761]">
          [ Next: Phase 3 — The "Doors" Section &amp; Skill Specializations ]
        </span>
      </div>
      <div id="story" />
      <div id="projects" />
      <div id="contact" />
    </div>
  );
};
