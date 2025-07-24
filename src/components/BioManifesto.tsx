

'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Linkedin, BookOpen, Award, Briefcase, Sparkles, Clock, Target, Heart, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

const BioManifesto = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const theme = {
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    textGradient: 'from-cyan-400 to-indigo-500',
  };

  const professionalJourney = [
    { 
      year: "2015", 
      title: "Fundamentos Comerciales & Analíticos", 
      description: "Inicio en ventas consultivas, análisis económico y operaciones en banca y retail.", 
      icon: <Briefcase className="w-5 h-5" />, 
      color: "cyan" 
    },
    { 
      year: "2020", 
      title: "Formación Ejecutiva con Foco Estratégico", 
      description: "Ingeniero Comercial (UNAB) + Diplomado en Marketing & Analytics (UAI).", 
      icon: <BookOpen className="w-5 h-5" />, 
      color: "purple" 
    },
    { 
      year: "2023", 
      title: "El Momento Aha: Especialización & Nacimiento de Atlas Copilot", 
      description: "Tesis: 'El Paradigma del Crecimiento Exponencial' aplicada a IA y negocios en LATAM.", 
      icon: <Award className="w-5 h-5" />, 
      color: "yellow" 
    },
    { 
      year: "2024", 
      title: "CEO & Partner – Altius LATAM", 
      description: "Desde Bolivia lidero soluciones de IA y automatización con impacto real.", 
      icon: <Sparkles className="w-5 h-5" />, 
      color: "indigo" 
    }
  ];

  const colorStyles: { [key: string]: { text: string; border: string; bg: string; shadow: string } } = {
    cyan: { text: 'text-cyan-400', border: 'border-cyan-400/50', bg: 'bg-cyan-400/10', shadow: 'shadow-cyan-500/20' },
    purple: { text: 'text-purple-400', border: 'border-purple-400/50', bg: 'bg-purple-400/10', shadow: 'shadow-purple-500/20' },
    yellow: { text: 'text-yellow-400', border: 'border-yellow-400/50', bg: 'bg-yellow-400/10', shadow: 'shadow-yellow-500/20' },
    indigo: { text: 'text-indigo-400', border: 'border-indigo-400/50', bg: 'bg-indigo-400/10', shadow: 'shadow-indigo-500/20' },
  };
  
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 }}};
  const itemVariants: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 }}};

  return (
    <section className="py-24 bg-black relative">
       <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm">El Humano detrás de la IA</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Democratizando la{' '}
              <span className={`bg-clip-text text-transparent ${theme.gradient}`}>
                Inteligencia Artificial
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Transformo complejidad tecnológica en una ventaja competitiva decisiva para líderes y empresas visionarias de LATAM.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <div className="flex flex-col gap-12">
              
              {/* === PERFIL EDITORIAL RE-INGENIERIZADO === */}
              <motion.div variants={itemVariants} className="group relative">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateZ: '1deg' }}
                    className="sm:col-span-1"
                  >
                    <Image 
                      src="/HHweb.svg"
                      alt="Hugo Hormazábal" 
                      width={180} height={180}
                      className="rounded-2xl mx-auto border-2 border-white/10"
                    />
                  </motion.div>
                  <div className="sm:col-span-2 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-white">Hugo Hormazábal</h3>
                    <p className="text-lg font-medium text-cyan-400">Fundador & Consultor Estratégico</p>
                     <div className="flex items-center gap-3 mt-2 justify-center sm:justify-start">
                      <Award className="w-4 h-4 text-cyan-400/70 flex-shrink-0" />
                      <span className="text-sm text-gray-400">MBA & Máster en Negocios Digitales</span>
                     </div>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 text-center p-4 rounded-2xl bg-gray-900/40 border border-white/10">
                  <div>
                    <p className="text-2xl font-bold text-white">12+</p>
                    <p className="text-xs text-gray-400">Años de Experiencia</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-xs text-gray-400">Proyectos Liderados</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-xs text-gray-400">Tasa de Éxito</p>
                  </div>
                </div>
              </motion.div>

              {/* === NUEVA SECCIÓN: LA HISTORIA PERSONAL === */}
              <motion.div variants={itemVariants}>
                <div className="p-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent h-full">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 h-full">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <Heart className="w-6 h-6 text-cyan-400" />
                      Mi Obsesión: La Brecha que Cambió Todo
                    </h2>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        En 2020, mientras trabajaba con grandes corporaciones, vi algo que me obsesionó: 
                        empresas multinacionales usaban IA para crecer exponencialmente, mientras las PyMEs 
                        de LATAM seguían luchando con procesos manuales que les robaban horas preciosas.
                      </p>
                      <div className="bg-gray-800/50 border border-cyan-400/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-white mb-2">El momento "aha":</p>
                            <p className="text-sm text-gray-300">
                              "Vi a un emprendedor trabajar 14 horas diarias haciendo manualmente lo que 
                              una automatización simple podría resolver en minutos. Esa noche decidí que 
                              mi misión sería democratizar estas herramientas para que cualquier persona 
                              o empresa pudiera acceder a los superpoderes de la automatización."
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>
                        No se trataba solo de tecnología. Se trataba de justicia: que el acceso a herramientas 
                        poderosas no dependiera del tamaño de tu empresa o tu presupuesto, sino de tu voluntad 
                        de aprender y crecer.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* === VISIÓN PARA LATAM === */}
              <motion.div variants={itemVariants}>
                 <div className="p-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent h-full">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 h-full">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <Target className="w-6 h-6 text-cyan-400" />
                      Mi Visión para LATAM
                    </h2>
                    <p className="text-gray-300 mb-4">
                      Imagino una Latinoamérica donde cada emprendedor, cada profesional, cada empresa 
                      tenga acceso a las mismas herramientas que usan las corporaciones más avanzadas del mundo.
                    </p>
                    <div className="bg-gray-800/50 border border-white/10 rounded-lg p-4">
                       <p className="font-medium text-white mb-2">En Altius Ignite:</p>
                       <p className="text-sm text-gray-300">
                         Bajamos la IA del pedestal técnico. Creamos soluciones reales, accesibles y, 
                         sobre todo, accionables. Porque la verdadera revolución no está en la tecnología, 
                         sino en democratizar su acceso.
                       </p>
                    </div>
                 </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-12">
              <motion.div variants={itemVariants} className="p-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-cyan-400" /> 
                    Mi Journey Profesional
                  </h3>
                  <div className="flex flex-col gap-4">
                    {professionalJourney.map((milestone) => {
                      const colors = colorStyles[milestone.color];
                      return (
                        <motion.div 
                          key={milestone.year} 
                          whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300 }}}
                          className={`p-4 rounded-lg border transition-all duration-300 ${colors.bg} ${colors.border}`}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center ${colors.border}`}>
                               <div className={colors.text}>{milestone.icon}</div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-sm">
                                {milestone.title} 
                                <span className={`text-xs font-normal ${colors.text} ml-2`}>
                                  ({milestone.year})
                                </span>
                              </h4>
                              <p className="text-xs text-gray-400 mt-1">{milestone.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* === DESAFÍO SUPERADO === */}
              <motion.div variants={itemVariants}>
                <div className="p-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                      El Desafío que Me Definió
                    </h3>
                    <div className="space-y-4 text-gray-300">
                      <p className="text-sm">
                        Mi mayor desafío no fue técnico, fue humano: ¿cómo hacer que la IA deje de ser 
                        intimidante y se convierta en una herramienta accesible?
                      </p>
                      <div className="bg-gray-800/50 border border-white/10 rounded-lg p-4">
                        <p className="text-xs text-gray-300">
                          "Desarrollé un método que convierte conceptos complejos en pasos simples. 
                          Hoy, personas sin conocimiento técnico implementan automatizaciones que 
                          antes solo estaban al alcance de equipos especializados."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                <motion.a href="/blog" whileHover={{ y: -4, scale: 1.02, boxShadow: '0 10px 20px rgba(0, 229, 255, 0.1)' }} className={`group p-0.5 rounded-xl ${theme.gradient}`}>
                  <div className="flex items-center gap-4 p-5 bg-gray-900 rounded-lg h-full">
                    <BookOpen className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h4 className="font-bold text-white text-lg">Explora mi Blog</h4>
                      <p className="text-sm text-gray-400">Insights y estrategias sobre IA y negocios.</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-500 ml-auto transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/hugo-felipe-hormazabal-561005332/" whileHover={{ y: -4, scale: 1.02, boxShadow: '0 10px 20px rgba(0, 229, 255, 0.1)' }} className={`group p-0.5 rounded-xl ${theme.gradient}`}>
                  <div className="flex items-center gap-4 p-5 bg-gray-900 rounded-lg h-full">
                    <Linkedin className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h4 className="font-bold text-white text-lg">Conectar en LinkedIn</h4>
                      <p className="text-sm text-gray-400">Sigamos la conversación en mi red profesional.</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-500 ml-auto transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioManifesto;