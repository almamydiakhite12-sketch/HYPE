import React, { useState } from 'react';
import { ATHLETES, Athlete } from '../data/hypeData';
import { HypeLogo } from './HypeLogo';
import { Trophy, Handshake, X, ArrowUpRight } from 'lucide-react';

interface AthletesSectionProps {
  onSelectAthleteForContact?: (athleteName: string) => void;
}

export const AthletesSection: React.FC<AthletesSectionProps> = ({ onSelectAthleteForContact }) => {
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  return (
    <section id="athletes" className="py-24 bg-[#09090b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              <span className="text-white">03</span>
              <span>/</span>
              <span>Roster d'Élite</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Athlètes Accompagnés
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-light">
            Découvrez nos talents professionnels sous contrat avec HYPE SPORT COMMUNICATION.
          </p>
        </div>

        {/* Athletes Grid - Pure Intact Posters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {ATHLETES.map((athlete, index) => {
            return (
              <div
                key={athlete.id}
                onClick={() => setSelectedAthlete(athlete)}
                className="group relative bg-[#09090b] border border-white/20 rounded-xl overflow-hidden hover:border-white/70 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Authentic Intact Poster Image - Uncropped */}
                <div className="relative w-full bg-black overflow-hidden flex items-center justify-center">
                  <img
                    src={athlete.image}
                    alt={`${athlete.name} - ${athlete.role} - ${athlete.club}`}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Information Bar */}
                <div className="p-4 bg-neutral-950 border-t border-white/10 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-neutral-400 font-semibold">0{index + 1}</span>
                      <h3 className="font-display font-black text-white text-base tracking-wide uppercase leading-tight">
                        {athlete.name}
                      </h3>
                    </div>
                    <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider pl-5">
                      {athlete.role} · <span className="text-white font-medium">{athlete.club}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-white bg-white/10 group-hover:bg-white group-hover:text-black px-3 py-1.5 rounded transition-colors uppercase tracking-wider shrink-0">
                    <span>Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Partenaires Officiels & Collaboration Puma */}
        <div className="mt-20 pt-16 border-t border-white/10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
                <Handshake className="w-4 h-4 text-white" />
                <span>Réseau & Partenariats</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
                Collaboration Actée avec PUMA
              </h3>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              Partenariat officiel pour le Challenge Détection Puma Football et équipement des athlètes sous contrat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Puma Collaboration Poster (Using exact requested visual) */}
            <div className="lg:col-span-7 rounded-xl border border-white/20 bg-black overflow-hidden flex flex-col justify-between relative shadow-2xl">
              
              {/* Header with Puma & Challenge Detection Badges */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neutral-950">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-black font-display text-white tracking-widest uppercase">
                    PUMA
                  </span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    Challenge Détection Puma Football
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-red-600/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  Acté
                </span>
              </div>

              {/* Poster Photo with Athlete in Puma Hoodie - Intact without alteration */}
              <div className="relative bg-neutral-950 flex items-center justify-center p-2 sm:p-4">
                <img
                  src="/src/assets/images/puma_collaboration_official_1791473743165.jpg"
                  alt="Collaboration Actée avec Puma Football"
                  className="w-full h-auto max-h-[580px] object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Poster Footer Note with Brand Credentials */}
              <div className="p-4 sm:p-5 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <HypeLogo size={24} />
                  <span className="text-[11px] font-mono tracking-widest text-white uppercase font-bold">
                    HYPE SPORT COMMUNICATION
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Partenariat Officiel Equipementier
                </span>
              </div>

            </div>

            {/* Club Partners & Institution Grid */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              <div className="p-6 rounded-xl border border-white/15 bg-neutral-950 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Clubs Européens & Nationaux Associés
                </div>
                
                <ul className="space-y-3 text-xs text-neutral-300">
                  <li className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <div className="font-bold text-white text-sm">SK Slavia Praha</div>
                      <div className="text-[11px] text-neutral-400">Club UEFA de Youssoupha Mbodj</div>
                    </div>
                    <span className="text-neutral-400 font-mono text-[10px] border border-white/15 px-2 py-0.5 rounded">
                      Rép. Tchèque
                    </span>
                  </li>

                  <li className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <div className="font-bold text-white text-sm">Samsunspor</div>
                      <div className="text-[11px] text-neutral-400">Club Süper Lig de Chérif Ndiaye</div>
                    </div>
                    <span className="text-neutral-400 font-mono text-[10px] border border-white/15 px-2 py-0.5 rounded">
                      Turquie
                    </span>
                  </li>

                  <li className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <div className="font-bold text-white text-sm">Dynamo Kiev</div>
                      <div className="text-[11px] text-neutral-400">Club européen de Samba Diallo</div>
                    </div>
                    <span className="text-neutral-400 font-mono text-[10px] border border-white/15 px-2 py-0.5 rounded">
                      Ukraine
                    </span>
                  </li>

                  <li className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">Ajel de Rufisque</div>
                      <div className="text-[11px] text-neutral-400">Club de Mansour Gaye</div>
                    </div>
                    <span className="text-neutral-400 font-mono text-[10px] border border-white/15 px-2 py-0.5 rounded">
                      Sénégal
                    </span>
                  </li>
                </ul>
              </div>

              {/* Institutional Assurance */}
              <div className="p-6 rounded-xl border border-white/15 bg-neutral-950 space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Garantie & Mandat Officiel
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  HYPE SPORT négocie directement avec les directions marketing des équipementiers mondiaux et les directions sportives de clubs sans intermédiaires.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Athlete Detail Modal */}
      {selectedAthlete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-neutral-950 border border-white/20 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HypeLogo size={36} />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Dossier Athlète · HYPE SPORT
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase">
                    {selectedAthlete.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedAthlete(null)}
                className="p-2 rounded border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row max-h-[75vh]">
              {/* Athlete Original Intact Photo Display */}
              <div className="md:w-5/12 bg-black p-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 shrink-0">
                <img
                  src={selectedAthlete.image}
                  alt={selectedAthlete.name}
                  className="w-full h-auto max-h-[460px] object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
                <span className="mt-3 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Visuel Officiel · Hype Sport
                </span>
              </div>

              <div className="md:w-7/12 p-6 sm:p-8 space-y-6 overflow-y-auto">
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-neutral-900 border border-white/10 text-xs">
                  <div>
                    <div className="text-neutral-400 font-mono uppercase">Poste</div>
                    <div className="text-white font-semibold mt-0.5">{selectedAthlete.role}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 font-mono uppercase">Club / Équipe</div>
                    <div className="text-white font-semibold mt-0.5">{selectedAthlete.club}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 font-mono uppercase">Statut Agence</div>
                    <div className="text-emerald-400 font-semibold mt-0.5">{selectedAthlete.statusTag}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Profil & Trajectoire
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {selectedAthlete.bio}
                  </p>
                </div>

                {selectedAthlete.quote && (
                  <div className="p-4 rounded-lg border-l-2 border-white bg-white/5 italic text-sm text-neutral-200">
                    "{selectedAthlete.quote}"
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Palmarès & Réalisations
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {selectedAthlete.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white font-bold">―</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Partenaires Associés
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {selectedAthlete.keyPartnerships.map((p, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded bg-neutral-900 border border-white/15 text-white font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="p-6 border-t border-white/10 bg-neutral-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Opportunité de sponsoring ou transfert pour cet athlète ?
              </span>
              <button
                onClick={() => {
                  const name = selectedAthlete.name;
                  setSelectedAthlete(null);
                  if (onSelectAthleteForContact) onSelectAthleteForContact(name);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-white rounded hover:bg-neutral-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                Prendre contact
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
