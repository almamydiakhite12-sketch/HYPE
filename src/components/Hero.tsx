import React from 'react';
import { HypeLogo } from './HypeLogo';
import { ArrowDown, ArrowUpRight, ShieldCheck, Trophy, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#09090b] border-b border-white/10">
      {/* Background with dark overlay & subtle grid */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_hype_editorial_1791470838109.jpg"
          alt="Hype Sport Communication athlètes en entraînement"
          className="w-full h-full object-cover object-center opacity-30 filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/50" />
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Meta kicker with clean unboxed text */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-neutral-400">
              <span className="text-white">Agence De Marketing Sportif</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Personal Branding</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span className="text-amber-400 font-bold">Partenaire Puma</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] max-w-3xl">
              L'IMAGE N'EST PAS UN DÉTAIL.<br />
              <span className="text-neutral-300">C'EST UN</span>{' '}
              <span className="underline decoration-1 underline-offset-8 decoration-white/40">POUVOIR.</span>
            </h1>

            {/* Body copy */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
              <strong className="text-white font-semibold">HYPE SPORT COMMUNICATION</strong> accompagne les sportifs de haut niveau pour bâtir des carrières qui dépassent le terrain : valorisation contractuelle, personal branding, négociation d’équipements et gestion d’image pérenne.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-white rounded hover:bg-neutral-200 transition-all shadow-xl active:scale-95 cursor-pointer"
              >
                Signer chez Hype
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <a
                href="#athletes"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white border border-white/20 rounded hover:bg-white/5 hover:border-white/40 transition-colors"
              >
                Explorer nos Athlètes
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Proof metrics row */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  6+
                </div>
                <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                  Athlètes Roster Élite
                </div>
              </div>

              <div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  PUMA
                </div>
                <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                  Collaboration Actée
                </div>
              </div>

              <div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  100%
                </div>
                <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                  Droits d’Image Maîtrisés
                </div>
              </div>

              <div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  CAN & UCL
                </div>
                <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                  Trophées & Compétitions
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm rounded-xl border border-white/15 bg-neutral-950/80 backdrop-blur-xl p-8 shadow-2xl space-y-6 text-center">
              
              {/* Circular Emblem with Pulse */}
              <div className="relative mx-auto flex items-center justify-center">
                <HypeLogo size={120} />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
                  Manifeste Officiel
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Performance sur le terrain.<br />
                  Crédibilité en dehors.
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed pt-2">
                  "Former une nouvelle génération de sportifs conscients de leur image, capables de devenir des marques fortes, crédibles et durables."
                </p>
              </div>

              {/* Status Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Roster Ouvert
                </span>
                <span className="text-neutral-400">Saison 2026/2027</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
