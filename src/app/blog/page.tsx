// src/app/blog/page.tsx
// ❌ SIN 'use client'
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inteligencia Aplicada | Hugo Hormazábal',
  description: 'Análisis estratégico, casos de estudio y reflexiones sobre IA aplicada a los negocios',
};

const BlogPage = () => {
  const articles = [
    {
      slug: 'article1', // ✅ ruta fija
      title: "Manus AI: La Revolución de los Agentes Autónomos",
      excerpt: "De preguntas y respuestas a un equipo de IA orquestado",
      category: "IA",
      date: "15 Mayo 2024",
      readTime: "8 min",
      image: "/1b.png",
    },
    {
      slug: 'article2',
      title: "El Futuro de la Experiencia del Cliente: IA Conversacional",
      excerpt: "Por qué los chatbots tradicionales están obsoletos y qué viene después",
      category: "Customer Experience",
      date: "8 Mayo 2024",
      readTime: "6 min",
      image: "/2b.png",
    },
    {
      slug: 'article3',
      title: "Democratizando IA: Estrategias para PyMEs",
      excerpt: "Cómo las pequeñas empresas pueden implementar soluciones de IA sin grandes inversiones",
      category: "Transformación Digital",
      date: "1 Junio 2024",
      readTime: "10 min",
      image: "/3b.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-cyan-900/10 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Inteligencia <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Aplicada</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Análisis estratégico, casos de estudio y reflexiones profundas sobre IA en los negocios
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Artículos */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Artículos <span className="text-cyan-400">Recientes</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                  <div className="h-full bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-cyan-500/50">
                    <div className="h-48 w-full relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-semibold bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-3 text-gray-400 text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{article.excerpt}</p>
                      <div className="flex items-center text-cyan-400 font-medium text-sm">
                        Leer artículo
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/blog/todos" className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 transition-colors">
                Ver todos los artículos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Redes y suscripción */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Seguimos <span className="text-purple-400">conectados</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Sigo compartiendo herramientas, ideas y casos de IA aplicada en otras plataformas.
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <Link href="https://www.linkedin.com/in/hugohormazabal" target="_blank" className="text-sm text-cyan-400 hover:underline">LinkedIn</Link>
              <Link href="https://www.instagram.com/hugohormazabal" target="_blank" className="text-sm text-pink-400 hover:underline">Instagram</Link>
              <Link href="https://www.tiktok.com/@hugohormazabal" target="_blank" className="text-sm text-white hover:underline">TikTok</Link>
            </div>

            <div>
              <p className="text-gray-400 mb-4">¿Prefieres una dosis mensual directa en tu inbox?</p>
              <div className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 transition-colors">
                Próximamente: boletín inteligente.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;