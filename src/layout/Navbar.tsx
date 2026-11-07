import React, { useState, useEffect } from 'react';
import { PERSONAL, NAV_LINKS } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 text-[#ededed] hover:text-[#00e5ff] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
          <span className="font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold text-[#ededed]">
            {PERSONAL.name}
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] text-[#666666] uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
            {PERSONAL.roleHeadline}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#121215]/80 border border-white/[0.08] backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white/10 text-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                    : 'text-[#9e9e9e] hover:text-[#ededed] hover:bg-white/[0.03]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Get in touch */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide bg-white/5 hover:bg-white/10 text-[#ededed] hover:text-[#00e5ff] border border-white/10 hover:border-[#00e5ff]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00e5ff]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#09090b]/98 backdrop-blur-2xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm text-[#9e9e9e] hover:text-[#00e5ff] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
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
