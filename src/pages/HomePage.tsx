import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { DoorsSection } from '../sections/DoorsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Phase 3: The Doors Section */}
      <DoorsSection />

      {/* Placeholder Anchors for Subsequent Phases */}
      <div id="story" className="py-8 border-t border-white/5 text-center">
        <span className="font-mono text-xs text-[#6e6761]">
          [ Next: Phase 4 — Story Timeline: "Let's go back in time" ]
        </span>
      </div>
      <div id="projects" />
      <div id="contact" />
    </div>
  );
};
