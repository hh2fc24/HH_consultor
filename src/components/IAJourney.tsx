
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Layers, Lightbulb, GraduationCap, TrendingUp } from 'lucide-react';

const IAJourney = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // --- Paleta de colores y tema unificado ---
  const theme = {
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    textGradient: 'from-cyan-400 to-indigo-500',
  };

  const pathwayData = [
    {
      level: "A",
      title: "Taller de Iniciación",
      subtitle: "Despierta tu Curiosidad",
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      insight: "La IA generativa es la nueva electricidad. Entenderla no es una opción, es una necesidad.",
      objective: "Comprender los principios fundamentales y el potencial real de la IA moderna.",
      activity: "Taller práctico de 45 minutos. Dinámico, sin tecnicismos y 100% aplicable.",
      benefit: "Claridad total, confianza para experimentar y una visión para tus próximos pasos."
    },
    {
      level: "B",
      title: "Desafío de Aplicación",
      subtitle: "IA en Acción: 10 Días",
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />,
      insight: "Saber de IA es inútil si no la aplicas para resolver un problema real.",
      objective: "Implementar IA en un caso de uso concreto de tu trabajo o proyecto personal.",
      activity: "Reto guiado de 10 días con comunidad, recursos y mentoría directa.",
      benefit: "Una victoria tangible, dominio práctico y un portafolio de habilidades validado."
    },
    {
      level: "C",
      title: "Ruta de Estratega",
      subtitle: "Orquesta de IAs",
      icon: <Layers className="w-8 h-8 text-cyan-400" />,
      insight: "El verdadero poder no está en usar una IA, sino en hacer que múltiples IAs trabajen juntas.",
      objective: "Diseñar y construir flujos de trabajo que combinen varias herramientas de IA y automatización.",
      activity: "Programa avanzado con masterclasses, blueprints de sistemas y sesiones de co-creación.",
      benefit: "Evolucionas de usuario a arquitecto de soluciones, logrando un impacto exponencial."
    },
    {
      level: "D",
      title: "Alianza Estratégica",
      subtitle: "IA para tu Ecosistema",
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      insight: "Las soluciones genéricas de IA fallan. El éxito requiere una integración a medida en tu negocio.",
      objective: "Co-desarrollar e implementar una solución de IA y automatización con foco en el ROI.",
      activity: "Consultoría end-to-end: Diagnóstico, diseño de arquitectura, desarrollo e implementación.",
      benefit: "Un activo tecnológico que genera resultados medibles y empodera a tu equipo."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.7} } }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm">Tu Evolución con IA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              De Cero a Estratega en Inteligencia Artificial
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              He diseñado un camino claro y progresivo para llevarte desde la curiosidad inicial hasta el dominio estratégico, sin importar tu punto de partida.
            </p>
          </motion.div>
          
          <div 
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Líneas conectoras del Journey (solo en desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                <div className="h-full w-full border-t-2 border-dashed border-gray-700/50"></div>
            </div>

            {pathwayData.map((path, index) => (
              <motion.div 
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1 }}
                className="relative z-10 h-full"
              >
                <div className={`p-0.5 rounded-2xl h-full w-full transition-all duration-500 ${hoveredIndex === index ? `bg-gradient-to-br ${theme.textGradient}` : 'bg-white/10'}`}>
                  <motion.div
                    animate={{ height: hoveredIndex === index ? 'auto' : '180px' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="bg-gray-900/80 backdrop-blur-lg rounded-xl h-full w-full p-6 flex flex-col overflow-hidden"
                  >
                    {/* --- Cabecera visible siempre --- */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}>{path.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{path.title}</h3>
                        <p className="font-medium text-cyan-400 text-sm">{path.subtitle}</p>
                      </div>
                    </div>

                    {/* --- Contenido que se revela en hover --- */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="space-y-4 pt-4 border-t border-white/10"
                    >
                      <p className="text-sm text-gray-300 italic">"{path.insight}"</p>
                      <div className="space-y-3 text-sm">
                        <p><strong className="text-cyan-400 font-medium">Objetivo:</strong> <span className="text-gray-200">{path.objective}</span></p>
                        <p><strong className="text-cyan-400 font-medium">Beneficio:</strong> <span className="text-gray-200">{path.benefit}</span></p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.7, delay: 0.8} } }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto">
              <Rocket className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">El Primer Paso es Tuyo</h3>
              <p className="text-lg text-gray-300 mb-8">
                No necesitas ser un experto para empezar, solo tener la visión para no quedarte atrás. Yo me encargo de guiarte en el resto del camino.
              </p>
              
              <motion.a
                href="https://wa.me/59177028880?text=Hola,%20quisiera%20saber%20más%20sobre%20el%20camino%20de%20evolución%20con%20IA."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.2)' }}
                className={`inline-block px-10 py-4 ${theme.gradient} rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 no-underline`}
              >
                Comenzar Mi Evolución
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IAJourney;
