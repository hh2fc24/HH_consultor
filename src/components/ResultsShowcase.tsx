// src/components/ResultsShowcase.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Zap, Clock, TrendingUp, Award } from 'lucide-react';

const ResultsShowcase = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const finalResults = [
    { icon: <BarChart className="w-8 h-8 text-cyan-400" />, finalValue: 45, label: "Reducción de costos operativos", description: "En procesos administrativos", suffix: "%", color: "cyan" },
    { icon: <Zap className="w-8 h-8 text-purple-400" />, finalValue: 20, label: "Aceleración de análisis", description: "De datos complejos", suffix: "x", color: "purple" },
    { icon: <Clock className="w-8 h-8 text-yellow-400" />, finalValue: 30, label: "Tiempo recuperado", description: "Para liderazgo estratégico", suffix: "h/sem", color: "yellow" },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, finalValue: 67, label: "Mejora en CX", description: "Con IA predictiva", prefix: "+", suffix: "%", color: "green" }
  ];

  const testimonials = [
     {
      quote: "Trabajar con Hugo fue el punto de inflexión. En 3 meses implementamos soluciones de IA que nos ahorran $20k mensuales.",
      author: "Equipo Directivo Retail Financiero",
      company: "Cencosud Scotiabank",
    },
    {
      quote: "La metodología de Hugo nos permitió identificar oportunidades que no veíamos. Ahora nuestro equipo es 40% más productivo.",
      author: "Director de Operaciones",
      company: "Tenpo",
    }
  ];

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  return (
    <section id="casos-de-exito" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">La Evidencia</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Resultados, No Promesas
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            El impacto agregado de implementar Superpoderes de IA en empresas que ya dieron el salto.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {finalResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-lg text-center`}
            >
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4 border-2 border-white/10">
                {result.icon}
              </div>
              <div className={`text-4xl font-bold text-${result.color}-400 mb-2`}>
                {result.prefix}{result.finalValue}{result.suffix}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{result.label}</h3>
              <p className="text-gray-400 text-sm">{result.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
        >
             <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 text-center">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <p className="text-xl md:text-2xl italic text-white mb-6">
                      “{testimonials[currentTestimonial].quote}”
                  </p>
                  <div>
                      <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].author}</div>
                      <div className="text-cyan-400 font-medium">{testimonials[currentTestimonial].company}</div>
                  </div>
                </motion.div>
             </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResultsShowcase;