import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SkipToContent } from '../components/SkipToContent';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#14110f] text-[#f4f0eb] relative selection:bg-[#ccff00] selection:text-[#14110f]">
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="flex-grow pt-18 focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
};

