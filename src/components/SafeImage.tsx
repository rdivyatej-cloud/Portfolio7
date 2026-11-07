import React, { useState } from 'react';
import { Terminal, Cpu, Database, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'profile' | 'project';
  fallbackText?: string;
  categoryText?: string;
  accentColor?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = '',
  className = '',
  fallbackType = 'project',
  fallbackText,
  categoryText,
  accentColor = '#00e5ff',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    if (fallbackType === 'profile') {
      return (
        <div
          className={`flex items-center justify-center bg-gradient-to-br from-[#16161a] to-[#0c0c0e] border border-white/10 text-[#00e5ff] font-mono font-bold tracking-wider rounded-full shadow-[0_0_20px_rgba(0,229,255,0.15)] ${className}`}
          role="img"
          aria-label={alt || "Profile portrait"}
        >
          <span className="text-xl sm:text-2xl">DR</span>
        </div>
      );
    }

    // Creative schematic project preview card
    const getSchematicIcon = () => {
      if (categoryText?.includes('Backend') || categoryText?.includes('Cloud')) return <Terminal className="w-8 h-8 text-[#00e5ff]" />;
      if (categoryText?.includes('AI') || categoryText?.includes('Generative')) return <Cpu className="w-8 h-8 text-[#38bdf8]" />;
      if (categoryText?.includes('Data')) return <Database className="w-8 h-8 text-[#34d399]" />;
      if (categoryText?.includes('Cybersecurity')) return <ShieldCheck className="w-8 h-8 text-[#818cf8]" />;
      return <Layers className="w-8 h-8 text-[#60a5fa]" />;
    };

    return (
      <div
        className={`relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#121215] via-[#0c0c0e] to-[#141418] border border-white/10 rounded-2xl ${className}`}
        role="img"
        aria-label={alt || "Project visual representation"}
      >
        {/* Subtle schematic grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: accentColor }}
        />

        {/* Top Meta Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9e9e9e]">
              {categoryText || 'SYSTEM ARCHITECTURE'}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#666666] px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
            PRODUCTION SERVICE
          </span>
        </div>

        {/* Center Visual Schematic */}
        <div className="relative z-10 my-auto py-8 space-y-3">
          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 w-fit">
            {getSchematicIcon()}
          </div>
          <h4 className="font-mono text-base sm:text-lg font-bold text-[#ededed] tracking-tight">
            {fallbackText || 'Distributed System Engine'}
          </h4>
          <p className="text-xs text-[#9e9e9e] font-mono leading-relaxed line-clamp-2">
            Idempotent endpoints, containerized pipeline, relational database schema &amp; automated execution.
          </p>
        </div>

        {/* Bottom Status Ticker */}
        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/5 text-[10px] font-mono text-[#666666]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#00e5ff]" />
            <span>Interactive Architecture Spec</span>
          </div>
          <span>[ VERIFIED REPO ]</span>
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
