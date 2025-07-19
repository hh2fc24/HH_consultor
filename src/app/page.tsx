import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import BioManifesto from '@/components/BioManifesto';
import AutomationShowcase from '@/components/AutomationShowcase';
import IAJourney from '@/components/IAJourney';
import IAClub from '@/components/IAClub';
import IAPowers from '@/components/IAPowers';
import ResultsShowcase from '@/components/ResultsShowcase';
import TestimonialsExpanded from '@/components/TestimonialsExpanded';
import ConsultationCTA from '@/components/ConsultationCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative w-full bg-black">
      <Navbar />
      
      {/* 1. Descubre (¿Por qué IA?) */}
      <section id="descubre">
        <Hero />
      </section>
      
      {/* 2. Explora (Servicios y Metodología) */}
      <section id="servicios">
        <WhyWorkWithMe />
      </section>

      {/* BioManifesto también encaja aquí para establecer credibilidad y propósito */}
      <section id="sobre-hugo">
        <BioManifesto />
      </section>

      {/* Sección de IA + Automatización */}
      <section id="automatizacion">
        <AutomationShowcase />
      </section>

      {/* 3. Experimenta (Casos de Estudio y Herramientas) */}
      <section id="superpoderes">
        <IAPowers />
      </section>

      {/* Resultados y testimonios para reforzar la experiencia */}
      <section id="casos-de-exito">
        <ResultsShowcase />
      </section>

      {/* Testimonios expandidos */}
      <section id="testimonios">
        <TestimonialsExpanded />
      </section>

      {/* 4. Evoluciona (Proceso de Trabajo) */}
      <section id="proceso">
        <IAJourney />
      </section>

      {/* IAClub como una extensión del camino de evolución y comunidad */}
      <section id="comunidad">
        <IAClub />
      </section>

      {/* FAQ para resolver dudas comunes */}
      <section id="faq">
        <FAQ />
      </section>

      {/* 5. Empieza (Contacto y Onboarding) */}
      <section id="contacto">
        <ConsultationCTA />
      </section>

      <Footer />
    </main>
  );
}

