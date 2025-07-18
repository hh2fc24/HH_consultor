// src/components/ConsultationCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, ArrowRight, Clock, Target, TrendingUp, Sparkles, CheckCircle, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const ConsultationCTA = () => {
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Smart CTAs que cambian según el comportamiento del usuario
  const smartOffers = [
    {
      title: "Consulta Estratégica Gratuita",
      subtitle: "Perfecto para comenzar",
      description: "Análisis inicial de oportunidades de IA en tu negocio",
      urgency: "Agenda hoy",
      color: "cyan"
    },
    {
      title: "Diagnóstico IA Completo",
      subtitle: "Para empresas serias",
      description: "Evaluación profunda + roadmap personalizado de implementación",
      urgency: "Solo 3 cupos esta semana",
      color: "purple"
    },
    {
      title: "Transformación IA Express",
      subtitle: "Para líderes visionarios",
      description: "Implementación rápida de tu primera solución de IA",
      urgency: "Resultados en 30 días",
      color: "yellow"
    }
  ];

  // Cambiar oferta según tiempo en página
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeOnPage > 30 && timeOnPage <= 60) {
      setCurrentOffer(1);
    } else if (timeOnPage > 60) {
      setCurrentOffer(2);
    }
  }, [timeOnPage]);

  const currentOfferData = smartOffers[currentOffer];

  const benefits = [
    {
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      title: "Enfoque Personalizado",
      description: "Soluciones específicas para tu industria y desafíos únicos"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
      title: "Diagnóstico Preciso",
      description: "Identificamos oportunidades reales de implementación"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-yellow-400" />,
      title: "ROI Garantizado",
      description: "Planes con impacto medible en tus resultados"
    }
  ];

  const processSteps = [
    { step: "1", title: "Análisis", description: "Evaluamos tu situación actual" },
    { step: "2", title: "Estrategia", description: "Diseñamos tu roadmap de IA" },
    { step: "3", title: "Implementación", description: "Ejecutamos la solución" },
    { step: "4", title: "Optimización", description: "Medimos y mejoramos resultados" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background inteligente */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-900/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-yellow-500/10 blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Encabezado dinámico */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">
                {timeOnPage > 30 ? "¡Perfecto timing!" : "Momento ideal para actuar"}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para multiplicar tus ingresos con
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                Superpoderes de IA?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Agenda una consultoría estratégica donde definiremos cómo la IA puede potenciar tu operación específicamente
            </p>
          </motion.div>

          {/* CTA principal inteligente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className={`max-w-4xl mx-auto bg-gradient-to-r ${
              currentOfferData.color === 'cyan' ? 'from-cyan-900/30 to-blue-900/30' :
              currentOfferData.color === 'purple' ? 'from-purple-900/30 to-indigo-900/30' :
              'from-yellow-900/30 to-orange-900/30'
            } backdrop-blur-sm rounded-2xl border ${
              currentOfferData.color === 'cyan' ? 'border-cyan-500/20' :
              currentOfferData.color === 'purple' ? 'border-purple-500/20' :
              'border-yellow-500/20'
            } p-8 relative overflow-hidden`}>
              
              {/* Efecto de urgencia */}
              <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                {currentOfferData.urgency}
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                    <CalendarCheck className={`w-6 h-6 ${
                      currentOfferData.color === 'cyan' ? 'text-cyan-400' :
                      currentOfferData.color === 'purple' ? 'text-purple-400' :
                      'text-yellow-400'
                    }`} />
                    <span className={`text-sm font-semibold ${
                      currentOfferData.color === 'cyan' ? 'text-cyan-400' :
                      currentOfferData.color === 'purple' ? 'text-purple-400' :
                      'text-yellow-400'
                    }`}>
                      {currentOfferData.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {currentOfferData.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {currentOfferData.description}
                  </p>
                  
                  {/* Indicadores de valor */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">30 min</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-400">1:1 Personal</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-400">Resultados inmediatos</span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="flex-shrink-0"
                >
                  <button className={`px-8 py-4 bg-gradient-to-r ${
                    currentOfferData.color === 'cyan' ? 'from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' :
                    currentOfferData.color === 'purple' ? 'from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500' :
                    'from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500'
                  } rounded-xl text-white font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg ${
                    currentOfferData.color === 'cyan' ? 'hover:shadow-cyan-500/25' :
                    currentOfferData.color === 'purple' ? 'hover:shadow-purple-500/25' :
                    'hover:shadow-yellow-500/25'
                  }`}>
                    Agendar Ahora
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Proceso de transformación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Tu <span className="text-cyan-400">Pathway de Transformación</span>
              </h3>
              <p className="text-gray-400">Proceso probado para maximizar tu ROI en IA</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-white/10 p-6 text-center relative overflow-hidden">
                    {/* Número del paso */}
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    
                    <h4 className="font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                    
                    {/* Conector */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Beneficios clave */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-xl border border-white/10 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-black/30 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Garantía y confianza */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl border border-green-500/20 px-6 py-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <div className="font-bold text-white">Garantía de Satisfacción</div>
                <div className="text-green-400 text-sm">Si no ves valor claro, no pagas nada</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;

