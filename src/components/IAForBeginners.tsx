'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Lightbulb, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Play,
  BookOpen,
  Users,
  Zap
} from 'lucide-react';

const IAForBeginners = () => {
  const [activeMyth, setActiveMyth] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const myths = [
    {
      myth: "La IA es solo para programadores",
      reality: "Hoy existen herramientas visuales que cualquier persona puede usar sin escribir código.",
      icon: <Brain className="w-5 h-5" />
    },
    {
      myth: "Es muy costoso implementar IA",
      reality: "Muchas herramientas de IA son gratuitas o tienen costos muy accesibles para empezar.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      myth: "Toma meses ver resultados",
      reality: "Puedes automatizar tu primer proceso en menos de una semana.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      myth: "La IA reemplazará mi trabajo",
      reality: "La IA te libera de tareas repetitivas para que te enfoques en lo estratégico.",
      icon: <Lightbulb className="w-5 h-5" />
    }
  ];

  const firstSteps = [
    {
      step: "Identifica qué te consume tiempo",
      description: "Anota durante una semana qué tareas repetitivas haces diariamente.",
      time: "30 min",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      step: "Elige tu primera automatización",
      description: "Selecciona la tarea más simple y repetitiva de tu lista.",
      time: "15 min", 
      icon: <Zap className="w-5 h-5" />
    },
    {
      step: "Implementa con herramientas simples",
      description: "Usa herramientas como Zapier, Make o ChatGPT para automatizar.",
      time: "2-3 horas",
      icon: <Play className="w-5 h-5" />
    },
    {
      step: "Mide y optimiza",
      description: "Calcula cuánto tiempo ahorraste y mejora el proceso.",
      time: "30 min",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm">IA para Principiantes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              ¿Nuevo en{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Inteligencia Artificial?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Empezar con IA no tiene que ser intimidante. Te explico los conceptos básicos 
              y te muestro cómo dar tus primeros pasos sin complicaciones técnicas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* ¿Qué es la IA en palabras simples? */}
            <motion.div variants={itemVariants}>
              <div className="p-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent h-full">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 h-full">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-cyan-400" />
                    ¿Qué es la IA en palabras simples?
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      La Inteligencia Artificial es como tener un asistente muy inteligente 
                      que puede hacer tareas repetitivas por ti, las 24 horas del día.
                    </p>
                    <div className="bg-gray-800/50 border border-white/10 rounded-lg p-4">
                      <p className="font-medium text-white mb-2">Ejemplos cotidianos:</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span>Responder emails automáticamente</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span>Organizar tu calendario</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span>Crear contenido para redes sociales</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span>Analizar datos y generar reportes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mitos sobre IA */}
            <motion.div variants={itemVariants}>
              <div className="p-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent h-full">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 h-full">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-cyan-400" />
                    Mitos que debes olvidar
                  </h3>
                  <div className="space-y-3">
                    {myths.map((item, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                          activeMyth === index 
                            ? 'bg-cyan-400/10 border-cyan-400/30' 
                            : 'bg-gray-800/50 border-white/10 hover:border-cyan-400/20'
                        }`}
                        onClick={() => setActiveMyth(index)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-cyan-400 mt-1">{item.icon}</div>
                          <div>
                            <h4 className="font-medium text-white text-sm mb-1">
                              ❌ {item.myth}
                            </h4>
                            <AnimatePresence>
                              {activeMyth === index && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="text-xs text-gray-400"
                                >
                                  ✅ {item.reality}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tu primer paso hacia la automatización */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="p-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                  <Play className="w-6 h-6 text-cyan-400" />
                  Tu primer paso hacia la automatización
                </h3>
                <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                  Sigue estos 4 pasos simples para automatizar tu primer proceso en menos de una semana.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {firstSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                        activeStep === index 
                          ? 'bg-cyan-400/10 border-cyan-400/30 scale-105' 
                          : 'bg-gray-800/50 border-white/10 hover:border-cyan-400/20'
                      }`}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="text-cyan-400">{step.icon}</div>
                        </div>
                        <div className="text-xs text-cyan-400 font-medium mb-2">
                          Paso {index + 1} • {step.time}
                        </div>
                        <h4 className="font-bold text-white text-sm mb-3">
                          {step.step}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">
                ¿Listo para automatizar tu primer proceso?
              </h3>
              <p className="text-gray-300 mb-6">
                Te acompaño paso a paso para que implementes tu primera automatización 
                sin complicaciones técnicas.
              </p>
              <motion.a
                href="https://wa.me/59177028880"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-bold px-6 py-3 rounded-lg transition-all text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Comenzar Mi Primera Automatización
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IAForBeginners;