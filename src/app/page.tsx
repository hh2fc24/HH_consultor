// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import BioManifesto from '@/components/BioManifesto';
import IAJourney from '@/components/IAJourney';
import IAClub from '@/components/IAClub';
import IAPowers from '@/components/IAPowers'; // Nueva sección de superpoderes
import ResultsShowcase from '@/components/ResultsShowcase';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative w-full bg-black">
      <Navbar />
      <Hero />
      <WhyWorkWithMe />
      <BioManifesto />
      <IAJourney />
      <IAClub />
      <IAPowers /> {/* Nueva sección de superpoderes */}
      <ResultsShowcase />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}