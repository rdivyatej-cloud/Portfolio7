import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { DoorsSection } from '../sections/DoorsSection';
import { StorySection } from '../sections/StorySection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Phase 2: Hero Section */}
      <HeroSection />

      {/* Phase 3: The Doors Section */}
      <DoorsSection />

      {/* Phase 4: Story Timeline */}
      <StorySection />

      {/* Phase 5: Projects & Skills */}
      <ProjectsSection />
      <SkillsSection />

      {/* Placeholder Anchor for Subsequent Phase 6 */}
      <div id="contact" className="py-8 border-t border-white/5 text-center">
        <span className="font-mono text-xs text-[#6e6761]">
          [ Next: Phase 6 — Interactive Contact &amp; Inquiry Portal ]
        </span>
      </div>
    </div>
  );
};
