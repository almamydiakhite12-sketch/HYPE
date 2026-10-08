import React from 'react';
import { HypeLogo } from './HypeLogo';
import { SOCIAL_LINKS } from '../data/hypeData';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <HypeLogo size={48} />
              <div>
                <div className="font-display font-black text-white text-lg tracking-wider">
                  HYPE<span className="text-[10px] ml-0.5 text-neutral-400">™</span>
                </div>
                <div className="text-[9px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                  SPORT COMMUNICATION
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-300 max-w-sm font-light leading-relaxed">
              Agence spécialisée dans l'accompagnement, la communication et la gestion de l'image des sportifs de haut niveau.
            </p>

            <div className="italic text-neutral-200 text-xs font-serif border-l border-white/20 pl-3">
              "L'image n'est pas un détail. C'est un pouvoir."
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#vision" className="hover:text-white transition-colors">Notre Vision</a>
              </li>
              <li>
                <a href="#pourquoi-signer" className="hover:text-white transition-colors">Pourquoi Signer chez Hype</a>
              </li>
              <li>
                <a href="#athletes" className="hover:text-white transition-colors">Athlètes & Partenariats</a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">Nos Expertises</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Professionnel</a>
              </li>
            </ul>
          </div>

          {/* Social Networks & Contact */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Réseaux Sociaux Officiels
            </div>
            
            <div className="flex flex-col space-y-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors p-2 rounded border border-white/10 hover:border-white/30"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram @hypesportcom</span>
              </a>

              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors p-2 rounded border border-white/10 hover:border-white/30"
              >
                <span className="font-bold text-xs px-1">𝕏</span>
                <span>X (Twitter) @HypeSportCom</span>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors p-2 rounded border border-white/10 hover:border-white/30"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Hype Sport Communication</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-neutral-500 font-mono">
              Email : contact@hypesportcom.com
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} HYPE SPORT COMMUNICATION™. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <span>Dakar · Paris · Europe</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Haut de page <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
