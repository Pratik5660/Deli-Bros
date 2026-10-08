import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Coffee, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  onOpenOwnerPitch: () => void;
  onOpenFullMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOwnerPitch, onOpenFullMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Demo Bar for Owner Presentation */}
      <div className="bg-[#2C221A] text-[#E6DCD2] text-xs py-2 px-4 transition-all border-b border-[#423429]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate">
              <strong>Client Concept Demo:</strong> Tailored web design proposal for <strong>Deli Bros Cafe</strong> (Titiwangsa Sentral)
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenOwnerPitch}
              className="text-xs font-medium text-amber-200 hover:text-white underline decoration-amber-300/40 hover:decoration-white transition-all flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Owner Pitch Notes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Adhering to Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DCCF]'
            : 'bg-[#FAF7F2]/80 backdrop-blur-xs border-b border-[#E8DCCF]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <a
            href="#home"
            className="font-serif-display text-2xl sm:text-3xl font-semibold tracking-wider text-[#2C221A] hover:text-[#423429] transition-colors whitespace-nowrap"
          >
            {CAFE_INFO.brandName}
          </a>

          {/* Zone 2: Navigation Links (Text with subtle hover styles) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5E4C3D]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="hover:text-[#2C221A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#826E5D] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenFullMenu}
              className="px-5 py-2.5 text-sm font-medium text-[#FAF7F2] bg-[#2C221A] hover:bg-[#423429] rounded-xl transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              View Menu
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 text-[#2C221A] hover:bg-[#F1ECE6] rounded-lg transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DCCF] px-5 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="text-base font-medium text-[#423429] hover:text-[#1F1712] py-2 border-b border-[#E8DCCF]/50 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#AB9785]">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenFullMenu();
                }}
                className="w-full py-3 text-center text-sm font-medium text-[#FAF7F2] bg-[#2C221A] hover:bg-[#423429] rounded-xl cursor-pointer"
              >
                View Full Menu
              </button>

              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-center text-sm font-medium text-[#2C221A] bg-[#F1ECE6] hover:bg-[#E6DCD2] rounded-xl flex items-center justify-center gap-1.5"
              >
                <span>Find Us on Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
