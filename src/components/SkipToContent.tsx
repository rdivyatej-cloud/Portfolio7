import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#ccff00] text-[#14110f] font-mono text-sm font-semibold rounded shadow-lg transition-transform"
    >
      Skip to content
    </a>
  );
};

