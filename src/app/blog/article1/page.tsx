
// src/app/blog/article1/page.tsx
import { Metadata } from 'next';
import Article1 from './Article1';

export const metadata: Metadata = {
  title: 'Manus AI: La Revolución de los Agentes Autónomos | Hugo Hormazábal',
  description: 'Un análisis profundo de cómo Manus AI está redefiniendo la autonomía de los agentes de IA y transformando industrias completas.',
  keywords: 'Manus AI, agentes autónomos, inteligencia artificial, automatización, transformación digital',
  openGraph: {
    title: 'Manus AI: La Revolución de los Agentes Autónomos',
    description: 'Análisis estratégico sobre el futuro de la automatización inteligente',
    images: ['/1b.png'],
  },
};

export default function Article1Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navegación de regreso */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <a 
            href="/blog" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Volver al blog
          </a>
        </div>
      </div>
      
      <Article1 />
    </div>
  );
}

