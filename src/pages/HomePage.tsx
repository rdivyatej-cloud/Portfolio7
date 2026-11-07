import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { ProjectShowcase } from '../sections/ProjectShowcase';
import { ExperienceSection } from '../sections/ExperienceSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full selection:bg-[#00e5ff] selection:text-[#09090b]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Interactive Project Showcase (Rooms / Doors) */}
      <ProjectShowcase />

      {/* 3. Chronological Experience & Education */}
      <ExperienceSection />

      {/* 4. Editorial About Me ("Beyond the code.") with Photo */}
      <AboutSection />

      {/* 5. Technical Skills & Certifications */}
      <SkillsSection />

      {/* 6. High-Impact Contact Section */}
      <ContactSection />
    </div>
  );
};
