import React, { useState } from 'react';
import { EXPERTISES } from '../data/hypeData';
import { Check, ArrowRight, ShieldCheck, Camera, Share2, Handshake, Newspaper } from 'lucide-react';

interface ExpertisesSectionProps {
  onOpenContact: () => void;
}

export const ExpertisesSection: React.FC<ExpertisesSectionProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Camera, Share2, Handshake, Newspaper];

  return (
    <section id="expertises" className="py-24 bg-[#09090b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              <span className="text-white">05</span>
              <span>/</span>
              <span>Nos Métiers</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Nos Expertises
            </h2>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Structurer · Valoriser · Protéger
            </div>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-light">
            Une approche globale à 360° pour faire de votre nom une marque pérenne et rentable, sans compromettre votre performance sportive.
          </p>
        </div>

        {/* Tab Selector on Desktop / Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-8">
          {EXPERTISES.map((exp, idx) => {
            const Icon = icons[idx];
            return (
              <button
                key={exp.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  activeTab === idx
                    ? 'border-white bg-white text-black shadow-lg'
                    : 'border-white/10 bg-neutral-950 text-neutral-300 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`font-mono text-xs font-bold ${activeTab === idx ? 'text-black' : 'text-neutral-500'}`}>
                    {exp.number}
                  </span>
                  <Icon className={`w-4 h-4 ${activeTab === idx ? 'text-black' : 'text-neutral-400'}`} />
                </div>
                <div className="font-display font-bold text-xs sm:text-sm uppercase leading-snug">
                  {exp.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Expertise Detail Display */}
        <div className="rounded-xl border border-white/15 bg-neutral-950 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300">
              <span>Expertise {EXPERTISES[activeTab].number}</span>
              <span className="text-neutral-600">/</span>
              <span className="text-white font-semibold">{EXPERTISES[activeTab].title}</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase leading-snug">
              {EXPERTISES[activeTab].subtitle}
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {EXPERTISES[activeTab].description}
            </p>

            <div className="pt-2 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Livrables Clés Inclus :
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-200">
                {EXPERTISES[activeTab].deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-xl border border-white/10 bg-neutral-900/60 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Impact Garanti
              </span>
              <div className="text-sm text-neutral-200 font-medium leading-relaxed">
                "{EXPERTISES[activeTab].impact}"
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
              <span className="text-xs text-neutral-400">
                Besoin d'un accompagnement sur cette expertise ?
              </span>
              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-white rounded hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Prendre rendez-vous avec l'agence
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
