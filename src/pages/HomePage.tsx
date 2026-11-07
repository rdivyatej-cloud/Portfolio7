import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { DoorsSection } from '../sections/DoorsSection';
import { StorySection } from '../sections/StorySection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Phase 3: The Doors Section */}
      <DoorsSection />

      {/* Phase 4: Story Timeline */}
      <StorySection />

      {/* Placeholder Anchors for Subsequent Phases */}
      <div id="projects" className="py-8 border-t border-white/5 text-center">
        <span className="font-mono text-xs text-[#6e6761]">
          [ Next: Phase 5 — Projects &amp; Skills ]
        </span>
      </div>
      <div id="contact" />
    </div>
  );
};
