import React, { useState } from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (isHomePage && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#14110f]/85 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link 
          to="/"
          className="group flex items-center gap-2.5 text-[#f4f0eb] hover:text-[#ccff00] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse"></span>
          <span className="font-mono text-sm tracking-wider uppercase font-semibold">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline-block font-mono text-xs text-[#9e9891] px-2 py-0.5 rounded bg-white/5 border border-white/5">
            Backend &amp; AI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const targetHref = isHomePage ? link.href : `/${link.href}`;
            return (
              <a
                key={link.name}
                href={targetHref}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-mono text-[#9e9891] hover:text-[#f4f0eb] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#ccff00] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions / Hire Me */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide bg-[#ccff00] text-[#14110f] hover:bg-[#d8ff33] hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Hire me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={() => handleNavClick('#contact')}
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-[#ccff00] text-[#14110f]"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9e9891] hover:text-white rounded-lg focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ccff00]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#14110f]/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const targetHref = isHomePage ? link.href : `/${link.href}`;
              return (
                <a
                  key={link.name}
                  href={targetHref}
                  onClick={() => handleNavClick(link.href)}
                  className="font-mono text-base text-[#9e9891] hover:text-[#ccff00] transition-colors py-1 border-b border-white/5"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
