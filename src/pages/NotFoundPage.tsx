import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-6xl font-bold font-mono text-[#ccff00]">404</span>
      <h1 className="text-2xl font-bold text-[#f4f0eb] mt-4">Page not found</h1>
      <p className="text-sm font-mono text-[#9e9891] mt-2 max-w-md">
        The route you are looking for does not exist or has been relocated.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#ccff00] text-[#14110f] rounded-full text-xs font-mono font-medium hover:bg-[#d8ff33] transition-all"
      >
        <Home className="w-4 h-4" /> Return to Home
      </Link>
    </div>
  );
};

