import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisionSection } from './components/VisionSection';
import { WhySignSection } from './components/WhySignSection';
import { AthletesSection } from './components/AthletesSection';
import { ExpertisesSection } from './components/ExpertisesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [prefilledAthlete, setPrefilledAthlete] = useState<string | undefined>(undefined);

  const handleOpenContact = (athleteName?: string) => {
    if (athleteName) {
      setPrefilledAthlete(athleteName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* Vision / Manifeste : C'est quoi Hype ? */}
        <VisionSection />

        {/* Pourquoi signer chez Hype Sport ? */}
        <WhySignSection onOpenContact={() => handleOpenContact()} />

        {/* Athlètes Accompagnés avec leurs images et Partenariat PUMA */}
        <AthletesSection onSelectAthleteForContact={(name) => handleOpenContact(name)} />

        {/* Nos Expertises: Structurer, Valoriser, Protéger */}
        <ExpertisesSection onOpenContact={() => handleOpenContact()} />

        {/* Formulaire de Contact Professionnel */}
        <ContactSection prefilledSubject={prefilledAthlete} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
