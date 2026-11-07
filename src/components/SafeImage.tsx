import React, { useState } from 'react';
import { Layers, Terminal, Sparkles } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'profile' | 'project';
  fallbackText?: string;
  categoryText?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = '',
  className = '',
  fallbackType = 'project',
  fallbackText,
  categoryText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    if (fallbackType === 'profile') {
      return (
        <div
          className={`flex items-center justify-center bg-gradient-to-br from-[#1c1815] to-[#14110f] border border-[#ccff00]/30 text-[#ccff00] font-mono font-bold tracking-wider rounded-full shadow-[0_0_20px_rgba(204,255,0,0.15)] ${className}`}
          role="img"
          aria-label={alt || "Profile photo placeholder"}
        >
          <span className="text-xl sm:text-2xl">DR</span>
        </div>
      );
    }

    // Project image fallback
    return (
      <div
        className={`relative overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-br from-[#1c1815] via-[#14110f] to-[#181512] border border-white/5 rounded-xl ${className}`}
        role="img"
        aria-label={alt || "Project placeholder illustration"}
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ccff00]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#ccff00]">
            {categoryText || 'ENGINEERING'}
          </span>
          <Terminal className="w-4 h-4 text-[#9e9891]" />
        </div>

        <div className="relative z-10 my-auto py-6">
          <Layers className="w-8 h-8 text-[#ccff00]/60 mb-2" />
          <h4 className="font-mono text-sm font-semibold text-[#f4f0eb] line-clamp-1">
            {fallbackText || 'System Architecture'}
          </h4>
          <p className="text-[11px] text-[#9e9891] font-mono mt-0.5">
            Production Service &amp; Implementation
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-1.5 text-[10px] font-mono text-[#6e6761]">
          <Sparkles className="w-3 h-3 text-[#ccff00]" />
          <span>Interactive preview</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
};

