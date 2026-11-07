import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SkipToContent } from '../components/SkipToContent';
import { CustomCursor } from '../components/CustomCursor';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#08080a] text-[#ededed] relative selection:bg-[#00e5ff] selection:text-[#09090b]">
      <CustomCursor />
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="flex-grow focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
};
