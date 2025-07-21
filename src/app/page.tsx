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

// --- 1. Importamos el nuevo componente que creamos ---
import LearningEcosystem from '@/components/LearningEcosystem';


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

      {/* --- 2. AQUÍ INTEgramos LA NUEVA SECCIÓN --- */}
      {/* Fase 3: El Ecosistema (La Oferta Formativa) */}
      <section id="ecosistema-aprendizaje">
        <LearningEcosystem />
      </section>

      {/* Fase 4: El Arsenal (Capacidad Técnica) - Renumerado */}
      <section id="ecosistema-tecnico">
        <AutomationShowcase />
      </section>
      
      {/* Fase 5: Los Superpoderes (Propuesta de Valor y Soluciones) - Renumerado */}
      <section id="superpoderes">
        <IAPowers />
      </section>

      {/* Fase 6: La Evidencia (Prueba Social y Resultados) - Renumerado */}
      <section id="casos-de-exito">
        <ResultsShowcase />
      </section>

      {/* Fase 7: El Camino (Las Vías de Colaboración) - Renumerado */}
      <section id="comienza-aqui">
        <EngagementPathways />
      </section>

      {/* Fase 8: La Decisión (Cierre y Siguiente Paso) - Renumerado */}
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