import React, { useState } from 'react';
import { HypeLogo } from './HypeLogo';
import { Globe, Shield, Sparkles, ChevronRight, ChevronLeft, Target, Eye, Flame } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "L'IMAGE N'EST PAS UN DÉTAIL.",
      highlight: "C'EST UN POUVOIR.",
      body: "Dans le football contemporain, le talent athlétique est la condition d'entrée, mais l'image est le multiplicateur de valeur. Une image maîtrisée transforme un joueur talentueux en icône recherchée par les marques et respectée par les clubs.",
      tag: "Principe Fondateur",
      stat: "x4",
      statLabel: "Multiplicateur de valeur commerciale"
    },
    {
      title: "FORMER UNE NOUVELLE GÉNÉRATION",
      highlight: "DE SPORTIFS CONSCIENTS.",
      body: "Nous accompagnons les jeunes talents et les pros aguerris pour qu'ils prennent les rênes de leur propre narration. Ne laissez personne écrire votre histoire à votre place : de vos premiers pas en pro jusqu'au sommet mondial.",
      tag: "Mission Éducative & Pro",
      stat: "100%",
      statLabel: "Contrôle de la narration médiatique"
    },
    {
      title: "PERFORMANCE SUR LE TERRAIN.",
      highlight: "CRÉDIBILITÉ EN DEHORS.",
      body: "Influence maîtrisée, prises de parole chirurgicales et éthique irréprochable. Nous garantissons qu'aucun bruit parasite n'altère votre concentration sportive tout en construisant une notoriété digne des plus grands.",
      tag: "Équilibre & Rigueur",
      stat: "0",
      statLabel: "Bruit parasite durant les matchs"
    },
    {
      title: "DÉPASSER LE CADRE SPORTIF.",
      highlight: "DEVENIR UNE MARQUE DURABLE.",
      body: "Une carrière sur les pelouses est éphémère, mais une marque personnelle forte est éternelle. Nous bâtissons les piliers qui feront de vous un entrepreneur, un mentor et une référence culturelle pour les décennies à venir.",
      tag: "Vision Long-Terme",
      stat: "15+ ans",
      statLabel: "Pérennité au-delà de la retraite sportive"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-[#09090b] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              <span className="text-white">01</span>
              <span>/</span>
              <span>Manifeste Fondateur</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              C'est Quoi HYPE ?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-light">
            Une agence spécialisée dans l’accompagnement, la communication et la gestion de l’image des sportifs qui visent l'excellence.
          </p>
        </div>

        {/* Dynamic Manifesto Grid & Interactive Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-stretch">
          
          {/* Left Column: Interactive Slide Showcase (Black & White Editorial) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-neutral-950 border border-white/15 rounded-xl p-8 sm:p-12 relative overflow-hidden">
            
            {/* Background Graphic Elements: Wireframe Globe from the user's poster */}
            <div className="absolute top-4 right-4 opacity-15 pointer-events-none">
              <svg width="220" height="220" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white">
                <circle cx="50" cy="50" r="45" strokeWidth="1" />
                <ellipse cx="50" cy="50" rx="45" ry="20" strokeWidth="1" />
                <ellipse cx="50" cy="50" rx="20" ry="45" strokeWidth="1" />
                <line x1="5" y1="50" x2="95" y2="50" strokeWidth="1" />
                <line x1="50" y1="5" x2="50" y2="95" strokeWidth="1" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="uppercase tracking-widest text-white">
                  Slide {activeSlide + 1} / {slides.length}
                </span>
                <span className="border border-white/20 px-2.5 py-0.5 rounded text-[11px] text-neutral-300">
                  {slides[activeSlide].tag}
                </span>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight uppercase">
                  {slides[activeSlide].title}<br />
                  <span className="text-neutral-400">{slides[activeSlide].highlight}</span>
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed pt-2">
                  {slides[activeSlide].body}
                </p>
              </div>
            </div>

            {/* Slide Navigation Controls & Metric */}
            <div className="pt-10 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                  {slides[activeSlide].stat}
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">
                  {slides[activeSlide].statLabel}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
                  className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  aria-label="Slide précédente"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
                  className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  aria-label="Slide suivante"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Editorial Truth Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="p-6 rounded-xl border border-white/15 bg-neutral-950/70 hover:border-white/30 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Axe 01</span>
                <Target className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-display text-lg font-bold text-white uppercase">
                Structurer
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Créer l’écosystème juridique, visuel et éditorial indispensable. Protéger votre nom, vos droits d’image et votre contrat de travail.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/15 bg-neutral-950/70 hover:border-white/30 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Axe 02</span>
                <Flame className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-display text-lg font-bold text-white uppercase">
                Valoriser
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Attirer les annonceurs majeurs (Puma, marques premium) et créer des productions de niveau magazine international (FLINGUEUR 2026).
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/15 bg-neutral-950/70 hover:border-white/30 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Axe 03</span>
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-display text-lg font-bold text-white uppercase">
                Protéger
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Veille e-réputation 24h/24, gestion de crise, filtre strict des sollicitations et préparation d’interviews d'après-match sous tension.
              </p>
            </div>

            {/* Bottom Quote Banner */}
            <div className="p-5 rounded-xl border border-white/20 bg-white text-black flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider">
                  "L'image n'est pas un détail. C'est un pouvoir."
                </p>
                <p className="text-[11px] text-neutral-700">
                  HYPE SPORT COMMUNICATION · Dakar - Paris - Europe
                </p>
              </div>
              <HypeLogo size={36} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
