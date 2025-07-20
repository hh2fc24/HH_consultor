// src/app/page.tsx
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import BioManifesto from '@/components/BioManifesto';
import AutomationShowcase from '@/components/AutomationShowcase';
import IAPowers from '@/components/IAPowers';
import ResultsShowcase from '@/components/ResultsShowcase';
import EngagementPathways from '@/components/EngagementPathways';
import FAQ from '@/components/FAQ';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative w-full bg-black">
      <Navbar />
      
      {/* Fase 1: La Conexión (El Hook Inicial) */}
      <section id="inicio">
        <HeroSection />
      </section>
      
      {/* Fase 2: El Estratega (Autoridad y Confianza) */}
      <section id="sobre-mi">
        <BioManifesto />
      </section>

      {/* Fase 3: El Arsenal (Capacidad Técnica) */}
      <section id="ecosistema">
        <AutomationShowcase />
      </section>
      
      {/* Fase 4: Los Superpoderes (Propuesta de Valor y Soluciones) */}
      <section id="superpoderes">
        <IAPowers />
      </section>

      {/* Fase 5: La Evidencia (Prueba Social y Resultados) */}
      <section id="casos-de-exito">
        <ResultsShowcase />
      </section>

      {/* Fase 6: El Camino (Las Vías de Colaboración) */}
      <section id="comienza-aqui">
        <EngagementPathways />
      </section>

      {/* Fase 7: La Decisión (Cierre y Siguiente Paso) */}
      <section id="faq">
        <FAQ />
      </section>
      <section id="contacto">
        <ConsultationCTA />
      </section>

      <Footer />
    </main>
  );
}