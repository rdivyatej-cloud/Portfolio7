import React, { useState, useEffect } from 'react';
import { PERSONAL, NAV_LINKS } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'projects', 'experience', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-[#ededed] hover:text-[#00e5ff] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#141418] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#00e5ff] group-hover:border-[#00e5ff]/50 transition-colors">
            DR
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-wider text-[#ededed] group-hover:text-white transition-colors">
              {PERSONAL.name.toUpperCase()}
            </span>
            <span className="text-[10px] font-mono text-[#666666]">
              {PERSONAL.roleHeadline}
            </span>
          </div>
        </a>

        {/* Center Floating Glass Pill (Reference signature) */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#121216]/80 border border-white/[0.08] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white/10 text-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.25)] font-semibold'
                    : 'text-[#9e9e9e] hover:text-[#ededed] hover:bg-white/[0.03]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide bg-white/[0.03] hover:bg-white/[0.08] text-[#ededed] hover:text-[#00e5ff] border border-white/10 hover:border-[#00e5ff]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00e5ff]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-[#00e5ff] text-[#09090b]"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9e9e9e] hover:text-white rounded-lg focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00e5ff]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-auto rounded-2xl border border-white/10 bg-[#0c0c0e]/98 backdrop-blur-2xl p-5 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm text-[#9e9e9e] hover:text-[#00e5ff] transition-colors py-2 px-3 rounded-lg hover:bg-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-[#666666]">#</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
