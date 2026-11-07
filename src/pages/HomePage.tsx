import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { DoorsSection } from '../sections/DoorsSection';
import { StorySection } from '../sections/StorySection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* The Doors Section */}
      <DoorsSection />

      {/* Story Timeline */}
      <StorySection />

      {/* Projects & Skills */}
      <ProjectsSection />
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
