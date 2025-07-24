import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import IAForBeginners from '@/components/IAForBeginners';
import BioManifesto from '@/components/BioManifesto';
import AutomationShowcase from '@/components/AutomationShowcase';
import ResultsShowcase from '@/components/ResultsShowcase';
import IARoutes from '@/components/IARoutes';
import FAQ from '@/components/FAQ';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';
import FormativeSection from '@/components/FormativeSection'; // <- NUEVO

export default function HomePage() {
  return (
    <main className="relative w-full bg-black">
      <Navbar />

      {/* Fase 1: La Conexión */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Fase 2: Educación base */}
      <section id="ia-para-principiantes">
        <IAForBeginners />
      </section>

      {/* Fase 3: Autoridad y Storytelling */}
      <section id="sobre-mi">
        <BioManifesto />
      </section>

      {/* Fase 4: Arsenal técnico */}
      <section id="ecosistema-tecnico">
        <AutomationShowcase />
      </section>

      {/* Fase 5 y 6: Soluciones + Rutas de colaboración */}
      <section id="rutas-ia">
        <IARoutes />
      </section>

      {/* Fase 6.5: Formación aplicada */}
      <section id="formacion">
        <FormativeSection />
      </section>

      {/* Fase 7: Casos reales */}
      <section id="casos-de-exito">
        <ResultsShowcase />
      </section>

      {/* Fase 8: Cierre y conversión */}
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