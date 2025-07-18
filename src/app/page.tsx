import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import BioManifesto from '@/components/BioManifesto';
import IAJourney from '@/components/IAJourney';
import IAClub from '@/components/IAClub';
import IAPowers from '@/components/IAPowers';
import ResultsShowcase from '@/components/ResultsShowcase';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative w-full bg-black">
      <Navbar />
      <Hero />
      
      {/* 1. Descubre (¿Por qué IA?) - Ya cubierto por Hero */}

      {/* 2. Explora (Servicios y Metodología) */}
      <section id="servicios">
        <WhyWorkWithMe />
      </section>

      {/* BioManifesto también encaja aquí para establecer credibilidad y propósito */}
      <BioManifesto />

      {/* 3. Experimenta (Casos de Estudio y Herramientas) */}
      <section id="superpoderes">
        <IAPowers />
      </section>

      {/* Resultados y testimonios para reforzar la experiencia */}
      <ResultsShowcase />

      {/* 4. Evoluciona (Proceso de Trabajo) */}
      <section id="proceso">
        <IAJourney />
      </section>

      {/* IAClub como una extensión del camino de evolución y comunidad */}
      <IAClub />

      {/* 5. Empieza (Contacto y Onboarding) */}
      <section id="contacto">
        <ConsultationCTA />
      </section>

      <Footer />
    </main>
  );
}

