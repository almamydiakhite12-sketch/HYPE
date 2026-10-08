import React from 'react';
import { WHY_SIGN_PILLARS } from '../data/hypeData';
import { Check, X, ChevronRight, ArrowUpRight } from 'lucide-react';

interface WhySignSectionProps {
  onOpenContact: () => void;
}

export const WhySignSection: React.FC<WhySignSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="pourquoi-signer" className="py-24 bg-[#09090b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="text-white">02</span>
            <span>/</span>
            <span>Valeur Stratégique</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            Pourquoi Signer chez HYPE SPORT ?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Sur le terrain, 90 minutes décident d'un match. En dehors, une stratégie d'image décide de toute une carrière, de vos contrats et de votre patrimoine.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
          {WHY_SIGN_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-7 rounded-xl border border-white/15 bg-neutral-950/70 hover:border-white/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <span className="font-mono text-3xl font-extrabold text-neutral-600 group-hover:text-white transition-colors">
                  {pillar.number}
                </span>
                <h3 className="font-display font-bold text-lg text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-300 font-medium">
                  {pillar.summary}
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                <span>Engagement Hype</span>
                <ChevronRight className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Real Comparison Table: Sans Hype vs Avec Hype */}
        <div className="bg-neutral-950 border border-white/15 rounded-xl p-8 sm:p-12 overflow-hidden">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                La Différence HYPE SPORT sur une Carrière
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
                Analyse concrète du parcours d'un joueur avec et sans accompagnement d'image professionnel.
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-white rounded hover:bg-neutral-200 transition-colors cursor-pointer self-start sm:self-auto"
            >
              Signer chez Hype
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Without Hype */}
            <div className="p-6 rounded-lg border border-red-500/20 bg-red-950/10 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <X className="w-4 h-4" />
                <span>Athlète Sans Agence d'Image Dédiée</span>
              </div>
              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Revenus limités au seul salaire de club :</strong> zéro contrat publicitaire direct ou opportunités mal négociées.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Communication amateur sur les réseaux :</strong> publications impulsives qui risquent d'abîmer un transfert vers l'Europe.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Vulnérabilité face aux médias :</strong> absence de média training, stress lors des interviews d'après-match.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Oubli immédiat à la fin de carrière :</strong> perte d'influence et absence d'opportunités après l'arrêt des crampons.</span>
                </li>
              </ul>
            </div>

            {/* With Hype Sport */}
            <div className="p-6 rounded-lg border border-emerald-500/30 bg-emerald-950/10 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Check className="w-4 h-4" />
                <span>Athlète Accompagné par HYPE SPORT</span>
              </div>
              <ul className="space-y-3 text-xs text-neutral-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>Partenariats directs (ex: Puma Football) :</strong> Accès aux marques d'envergure mondiale et contrats sécurisés juridiquement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>Affiches officielles de signature (New Signing) :</strong> Codes visuels percutants reconnus par les directeurs sportifs et supporters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>Crédibilité et valorisation contractuelle :</strong> Les clubs voient un athlète mature qui apporte de la visibilité et attire les sponsors.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>Marque personnelle pérenne :</strong> Notoriété consolidée pour devenir ambassadeur et bâtir une influence durable après le football.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
