import React, { useState, useEffect } from 'react';
import { HypeLogo } from './HypeLogo';
import { SOCIAL_LINKS } from '../data/hypeData';
import { Menu, X, ArrowUpRight, Instagram, Linkedin } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand title & logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <HypeLogo size={42} />
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-white text-base leading-none group-hover:text-neutral-200 transition-colors">
                HYPE<span className="text-[10px] ml-0.5 text-neutral-400">™</span>
              </span>
              <span className="text-[8px] tracking-[0.25em] font-semibold text-neutral-400 uppercase leading-tight mt-0.5">
                SPORT COMMUNICATION
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-neutral-300">
            <a
              href="#vision"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              Vision
            </a>
            <a
              href="#pourquoi-signer"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              Pourquoi Signer
            </a>
            <a
              href="#athletes"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              Athlètes & Partenariats
            </a>
            <a
              href="#expertises"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              Expertises
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Social & Action */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-1.5 border-r border-white/10 pr-3 mr-1">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Hype Sport"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Hype Sport"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Hype Sport"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white rounded hover:bg-neutral-200 transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Signer chez Hype
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-white rounded cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-neutral-300 focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b] border-b border-white/10 px-4 pt-4 pb-6 mt-2 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-semibold tracking-wide uppercase text-neutral-300">
            <a
              href="#vision"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Vision
            </a>
            <a
              href="#pourquoi-signer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Pourquoi Signer
            </a>
            <a
              href="#athletes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Athlètes & Partenariats
            </a>
            <a
              href="#expertises"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Nos Expertises
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border border-white/10 text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border border-white/10 text-white font-bold text-xs"
              >
                𝕏
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border border-white/10 text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white rounded"
            >
              Rejoindre l'Agence
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
