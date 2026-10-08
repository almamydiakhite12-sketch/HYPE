import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../data/hypeData';
import { HypeLogo } from './HypeLogo';
import { Send, CheckCircle2, Mail, Phone, MapPin, Instagram, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  prefilledSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profile: 'athlete_pro',
    currentClub: '',
    service: 'personal_branding',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        message: `Bonjour l'équipe Hype Sport Communication,\n\nJe vous contacte concernant l'athlète ${prefilledSubject} pour une opportunité de partenariat / collaboration.\n\n`
      }));
    }
  }, [prefilledSubject]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Veuillez renseigner votre nom complet.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Veuillez saisir une adresse email valide.';
    }
    if (!formData.message.trim()) errs.message = 'Veuillez détailler votre demande.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@hypesportcom.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#09090b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              <span className="text-white">07</span>
              <span>/</span>
              <span>Rejoindre L'Agence</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Contact Professionnel
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-light">
            Athlète professionnel, espoir prometteur, représentant ou marque partenaire : contactez notre cellule management en toute confidentialité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          
          {/* Left Column: Direct Info & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-xl border border-white/15 bg-neutral-950 space-y-6">
              <HypeLogo size={64} />
              
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-white uppercase">
                  Cellule Management & Partenariats
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Notre équipe traite chaque dossier avec discrétion absolue, rigueur contractuelle et réactivité sous 24 heures.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-start gap-3 text-neutral-300">
                  <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">Email Officiel</div>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className="font-semibold text-white">contact@hypesportcom.com</span>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer"
                        title="Copier l'email"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-neutral-300">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">Présence Internationale</div>
                    <div className="text-neutral-200 mt-0.5">Dakar · Paris · Hubs Football Européens</div>
                  </div>
                </div>
              </div>

              {/* Verified Social Media Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Canaux Officiels Vérifiés
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>@hypesportcom sur Instagram</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-xs px-1">𝕏</span>
                      <span>@HypeSportCom sur X (Twitter)</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>Hype Sport Communication sur LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl border border-white/15 bg-neutral-950">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-white uppercase">
                      Demande Transmise avec Succès
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                      Merci <strong className="text-white">{formData.name}</strong>. Votre dossier a été transmis à la direction de HYPE SPORT COMMUNICATION. Un responsable d'agence prendra contact avec vous sous 24h.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        profile: 'athlete_pro',
                        currentClub: '',
                        service: 'personal_branding',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-white rounded hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nom */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        Nom & Prénom <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Sadio Barry"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded bg-neutral-900 border text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        Email Professionnel <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="contact@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded bg-neutral-900 border text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Téléphone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        Téléphone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+221 ... ou +33 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-neutral-900 border border-white/15 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                      />
                    </div>

                    {/* Profil */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        Votre Profil
                      </label>
                      <select
                        value={formData.profile}
                        onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:ring-1 focus:ring-white transition-colors cursor-pointer"
                      >
                        <option value="athlete_pro">Athlète Professionnel</option>
                        <option value="espoir">Jeune Espoir / Académie</option>
                        <option value="agent">Agent / Représentant de joueur</option>
                        <option value="sponsor">Marque / Sponsor / Équipementier</option>
                        <option value="club">Club / Direction Sportive</option>
                        <option value="presse">Média / Presse / Journaliste</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Club / Organisation Actuelle */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        Club / Organisation Actuelle
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Samsunspor, Slavia Prague, etc."
                        value={formData.currentClub}
                        onChange={(e) => setFormData({ ...formData, currentClub: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-neutral-900 border border-white/15 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                      />
                    </div>

                    {/* Service Requis */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        Expertise Principale
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:ring-1 focus:ring-white transition-colors cursor-pointer"
                      >
                        <option value="personal_branding">Gestion d'image & Personal Branding</option>
                        <option value="sponsoring">Partenariat & Sponsoring (Puma, etc.)</option>
                        <option value="digital">Stratégie Réseaux Sociaux & Vidéo</option>
                        <option value="medias">Relations Presse & E-Réputation</option>
                        <option value="signature">Campagne New Signing / Transfert</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Message & Objectifs <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Décrivez votre situation sportive ou votre proposition commerciale..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded bg-neutral-900 border text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                        errors.message ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black bg-white rounded hover:bg-neutral-200 transition-all shadow-xl active:scale-[0.99] cursor-pointer"
                  >
                    Envoyer ma demande confidentielle
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[11px] text-neutral-500 text-center">
                    Confidentialité garantie · Accord de non-divulgation (NDA) disponible sur demande
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
