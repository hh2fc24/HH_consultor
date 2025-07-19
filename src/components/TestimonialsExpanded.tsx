'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Play, ArrowLeft, ArrowRight, Building, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsExpanded = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: "Trabajar con Hugo fue el punto de inflexión para nuestra transformación digital. En 3 meses implementamos soluciones de IA que nos ahorran $20k mensuales y mejoraron significativamente la experiencia de cliente.",
      author: "María González",
      position: "Directora de Operaciones",
      company: "Tenpo",
      companyLogo: "🏦", // TODO: insertar logo desde /public/
      avatar: "👩‍💼", // TODO: insertar foto desde /public/
      metrics: {
        ahorro: "$20k/mes",
        implementación: "3 meses",
        roi: "300%",
        satisfacción: "95%"
      },
      industry: "Fintech",
      projectType: "Automatización de Contact Center",
      results: [
        "Reducción del 40% en tiempo de respuesta",
        "Mejora del 60% en satisfacción del cliente",
        "Automatización del 70% de consultas frecuentes"
      ],
      videoThumbnail: "🎥", // TODO: insertar thumbnail desde /public/
      hasVideo: true,
      verified: true
    },
    {
      id: 2,
      quote: "La metodología de Hugo nos permitió identificar oportunidades que no veíamos. Ahora nuestro equipo es 40% más productivo y hemos automatizado procesos que antes nos tomaban horas.",
      author: "Carlos Mendoza",
      position: "CEO",
      company: "Cencosud Scotiabank",
      companyLogo: "🏪", // TODO: insertar logo desde /public/
      avatar: "👨‍💼", // TODO: insertar foto desde /public/
      metrics: {
        productividad: "+40%",
        eficiencia: "+60%",
        ahorro: "$15k/mes",
        implementación: "2 meses"
      },
      industry: "Retail Financiero",
      projectType: "IA para Análisis de Crédito",
      results: [
        "Procesamiento 10x más rápido de solicitudes",
        "Reducción del 50% en errores manuales",
        "Mejora del 35% en aprobación de créditos"
      ],
      videoThumbnail: "🎥", // TODO: insertar thumbnail desde /public/
      hasVideo: true,
      verified: true
    },
    {
      id: 3,
      quote: "Hugo no solo implementó la tecnología, sino que transformó nuestra cultura organizacional. Su enfoque humano de la IA nos permitió adoptar las herramientas sin resistencia del equipo.",
      author: "Ana Rodríguez",
      position: "Gerente General",
      company: "Inmobiliaria Atlas",
      companyLogo: "🏠", // TODO: insertar logo desde /public/
      avatar: "👩‍💼", // TODO: insertar foto desde /public/
      metrics: {
        eficiencia: "+45%",
        ahorro: "2h/día",
        satisfacción: "98%",
        adopción: "100%"
      },
      industry: "Inmobiliario",
      projectType: "Atlas IA - Automatización de Fichas",
      results: [
        "Automatización completa de fichas de propiedades",
        "Integración con CRM y análisis de mercado",
        "Reducción del 80% en trabajo administrativo"
      ],
      videoThumbnail: "🎥", // TODO: insertar thumbnail desde /public/
      hasVideo: false,
      verified: true
    },
    {
      id: 4,
      quote: "La solución de IA que desarrolló Hugo para nuestra clínica dental ha revolucionado nuestra práctica. Ahora podemos enfocarnos 100% en nuestros pacientes mientras la IA maneja toda la documentación.",
      author: "Dr. Roberto Silva",
      position: "Director Médico",
      company: "Clínica Dental Sonrisa",
      companyLogo: "🦷", // TODO: insertar logo desde /public/
      avatar: "👨‍⚕️", // TODO: insertar foto desde /public/
      metrics: {
        ahorro: "10h/sem",
        eficiencia: "+60%",
        precisión: "99%",
        roi: "250%"
      },
      industry: "Salud",
      projectType: "Asistente Dental IA",
      results: [
        "Fichas clínicas automáticas durante consultas",
        "Diagnóstico asistido con IA",
        "Seguimiento inteligente de tratamientos"
      ],
      videoThumbnail: "🎥", // TODO: insertar thumbnail desde /public/
      hasVideo: true,
      verified: true
    }
  ];

  const companyLogos = [
    { name: "Tenpo", logo: "🏦", industry: "Fintech" },
    { name: "Cencosud", logo: "🏪", industry: "Retail" },
    { name: "Scotiabank", logo: "🏛️", industry: "Banca" },
    { name: "Atlas", logo: "🏠", industry: "Inmobiliario" },
    { name: "Sonrisa", logo: "🦷", industry: "Salud" },
    { name: "TechCorp", logo: "💻", industry: "Tecnología" }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, testimonials.length]);

  const currentTest = testimonials[currentTestimonial];

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-20 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Testimonios Verificados</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que Dicen Nuestros <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Historias reales de transformación empresarial con IA y automatización
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Testimonial Content */}
                <div className="flex-1">
                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                    <p className="text-xl md:text-2xl text-white leading-relaxed italic">
                      "{currentTest.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-2xl">
                      {currentTest.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-bold text-white">{currentTest.author}</h4>
                        {currentTest.verified && (
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-cyan-400 font-medium">{currentTest.position}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{currentTest.companyLogo}</span>
                        <span className="text-gray-300">{currentTest.company}</span>
                        <span className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300">
                          {currentTest.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-2">Proyecto: {currentTest.projectType}</h5>
                    <div className="space-y-2">
                      {currentTest.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics & Video */}
                <div className="lg:w-1/3">
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(currentTest.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-black/20 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{value as React.ReactNode}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Video Placeholder */}
                  {currentTest.hasVideo && (
                    <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">{currentTest.videoThumbnail}</div>
                      </div>
                      <button className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors duration-300">
                        <Play className="w-12 h-12 text-white" />
                      </button>
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        LIVE
                      </div>
                    </div>
                  )}

                  {/* Star Rating */}
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                aria-label="Testimonio anterior"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-cyan-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                aria-label="Siguiente testimonio"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Empresas que <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Confían en Nosotros</span>
            </h3>
            <p className="text-gray-300">Desde startups hasta corporaciones, transformamos negocios con IA</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-800 flex items-center justify-center mb-2 group-hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-3xl">{company.logo}</span>
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {company.name}
                </div>
                <div className="text-xs text-gray-500">{company.industry}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl border border-white/10">
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl border border-white/10">
              <Building className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400 text-sm">Industrias</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl border border-white/10">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm">Satisfacción</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl border border-white/10">
              <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">5.0</div>
              <div className="text-gray-400 text-sm">Rating Promedio</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsExpanded;

