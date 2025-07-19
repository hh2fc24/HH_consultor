'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Linkedin, BookOpen, Award, Briefcase, Sparkles, Clock, Target } from 'lucide-react';
import CompanyLogos from './CompanyLogos';
import { useState } from 'react';

const BioManifesto = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring' as const, 
        stiffness: 120, 
        damping: 15, 
        duration: 0.7 
      },
    },
  };

  // Timeline interactivo del journey profesional
  const professionalJourney = [
    {
      year: "2015",
      title: "Fundamentos Comerciales & Analíticos",
      description: "Inicio en ventas consultivas, análisis económico y operaciones en banca y retail",
      icon: <Briefcase className="w-5 h-5" />,
      color: "cyan"
    },
    {
      year: "2020",
      title: "Formación Ejecutiva con Foco Estratégico",
      description: "Ingeniero Comercial (UNAB) + Diplomado en Marketing & Analytics (UAI)",
      icon: <BookOpen className="w-5 h-5" />,
      color: "purple"
    },
    {
      year: "2023",
      title: "Espacialización & Nacimiento de Atlas Copilot",
      description: "Tesis: 'El Paradigma del Crecimiento Exponencial' aplicada a IA y negocios en LATAM",
      icon: <Award className="w-5 h-5" />,
      color: "yellow"
    },
    {
      year: "2024",
      title: "CEO & Partner – Altius LATAM",
      description: "Desde Bolivia lidero soluciones de IA y automatización con impacto real para empresas de LATAM",
      icon: <Sparkles className="w-5 h-5" />,
      color: "green"
    }
  ];

  const methodology = [
    {
      phase: "Análisis",
      description: "Evaluación profunda de procesos y oportunidades",
      tools: ["Diagnóstico 360°", "Mapeo de procesos", "Análisis ROI"],
      duration: "1-2 semanas"
    },
    {
      phase: "Diseño",
      description: "Arquitectura de solución personalizada",
      tools: ["Roadmap estratégico", "Prototipado", "Validación"],
      duration: "2-3 semanas"
    },
    {
      phase: "Implementación",
      description: "Desarrollo y despliegue de la solución",
      tools: ["Desarrollo ágil", "Testing", "Capacitación"],
      duration: "4-8 semanas"
    },
    {
      phase: "Optimización",
      description: "Monitoreo y mejora continua",
      tools: ["Analytics", "Feedback loops", "Escalamiento"],
      duration: "Continuo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background mejorado con elementos neuronales */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-cyan-400 blur-sm animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-purple-500 blur-sm animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-yellow-400 blur-sm animate-pulse"></div>
        
        {/* Conexiones neuronales */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#6B46C1" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M200,400 Q400,300 600,400 T1000,400" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" opacity="0.3"/>
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Encabezado estratégico mejorado */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">El Humano detrás de la IA</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Democratizando la <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">Inteligencia Artificial</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Transformando complejidad tecnológica en ventaja estratégica para líderes visionarios
            </p>
            
            {/* Conexión con automatización */}
            <div className="max-w-4xl mx-auto">
              <div className="p-6 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-yellow-900/20 backdrop-blur-sm rounded-xl border border-cyan-500/20">
                <p className="text-lg text-white leading-relaxed text-center">
                  <span className="text-cyan-400 font-semibold">Mi IA no es solo código, es tu aliado humano</span> para automatizar el éxito. 
                  Combino inteligencia artificial con automatización inteligente para crear soluciones que trabajan 24/7, 
                  <span className="text-purple-400 font-medium"> mientras tú te enfocas en lo que realmente importa.</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Perfil de experto con timeline interactivo */}
          <div className="flex flex-col xl:flex-row gap-12 items-start mb-20">
            {/* Foto y credenciales mejoradas */}
            <motion.div 
              variants={itemVariants}
              className="xl:w-2/5"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-yellow-500/20 rounded-3xl blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 backdrop-blur-sm">
                  <Image 
                    src="/HHweb.svg"
                    alt="Hugo Hormazábal - Experto en IA" 
                    width={480}
                    height={560}
                    className="w-full object-cover"
                  />
                  
                  {/* Overlay con stats en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="grid grid-cols-3 gap-4 w-full text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">12+</div>
                        <div className="text-xs text-gray-300">Años</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">50+</div>
                        <div className="text-xs text-gray-300">Proyectos</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-400">98%</div>
                        <div className="text-xs text-gray-300">Éxito</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Credenciales mejoradas */}
                <div className="mt-8 p-6 bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Hugo Hormazábal
                  </h3>
                  <p className="text-cyan-400 font-medium mb-6">
                    Fundador & Consultor Estratégico en Altius Ignite
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">Credenciales Académicas</h4>
                        <p className="text-gray-300 text-sm">MBA & Máster en Transformación Digital</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">Experiencia Corporativa</h4>
                        <p className="text-gray-300 text-sm">Liderazgo en transformación digital Fortune 500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Valor propositivo con timeline */}
            <motion.div 
              variants={itemVariants}
              className="xl:w-3/5"
            >
              {/* Timeline interactivo */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  Mi Journey Profesional
                </h3>
                
                <div className="space-y-4">
                  {professionalJourney.map((milestone, index) => (
                    <motion.div
                      key={index}
                      onClick={() => setActiveTimeline(index)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                        activeTimeline === index
                          ? `border-${milestone.color}-400/50 bg-${milestone.color}-900/20`
                          : 'border-white/10 bg-gray-900/30 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          milestone.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                          milestone.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                          milestone.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {milestone.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className={`text-sm font-bold ${
                              milestone.color === 'cyan' ? 'text-cyan-400' :
                              milestone.color === 'purple' ? 'text-purple-400' :
                              milestone.color === 'yellow' ? 'text-yellow-400' :
                              'text-green-400'
                            }`}>
                              {milestone.year}
                            </span>
                            <h4 className="font-semibold text-white">{milestone.title}</h4>
                          </div>
                          <p className="text-gray-400 text-sm">{milestone.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Manifiesto personal */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/60 p-8 rounded-2xl border border-white/10 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Mi Compromiso: <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">IA con Propósito Real</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    No me interesa la tecnología por la tecnología. Lo que me obsesiona es cómo puede ayudarte a pensar mejor, decidir con más claridad y liderar con más impacto.  
                    Vi demasiadas empresas llenas de dashboards pero vacías de dirección. Ahí entendí algo simple: <span className="text-white font-medium">la IA no vale nada si no te sirve para actuar</span>.  
                    Yo no traduzco código. Yo traduzco complejidad en resultados estratégicos. Y ese es mi trabajo contigo.
                  </p>
                  
                  <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl border border-cyan-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyan-400" />
                      Democratizando el acceso a la IA
                    </h3>
                    <p className="text-gray-300">
                      En Altius Ignite, bajamos la IA del pedestal técnico.  
                      Creamos soluciones reales, accesibles, accionables.  
                      Para líderes que no necesitan volverse expertos,  
                      pero sí quieren liderar con visión, mientras otros siguen apagando incendios.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Beneficios clave mejorados */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 rounded-xl border border-cyan-500/20"
                >
                  <div className="text-cyan-400 text-2xl font-bold mb-2">01</div>
                  <h4 className="font-bold text-white mb-2">Tiempo para liderar</h4>
                  <p className="text-gray-300 text-sm">Recupera tu capacidad de enfoque estratégico</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-xl border border-purple-500/20"
                >
                  <div className="text-purple-400 text-2xl font-bold mb-2">02</div>
                  <h4 className="font-bold text-white mb-2">Foco para crear</h4>
                  <p className="text-gray-300 text-sm">Convierte datos en innovación tangible</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-gradient-to-br from-yellow-900/30 to-yellow-900/10 rounded-xl border border-yellow-500/20"
                >
                  <div className="text-yellow-400 text-2xl font-bold mb-2">03</div>
                  <h4 className="font-bold text-white mb-2">Tranquilidad estratégica</h4>
                  <p className="text-gray-300 text-sm">Opera con seguridad en la era de la disrupción</p>
                </motion.div>
              </div>
              
              {/* Acciones mejoradas */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href="/blog"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-700/30 to-cyan-900/40 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all flex-1 group"
                >
                  <BookOpen className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-cyan-300">Conocimiento estratégico</div>
                    <div className="font-medium text-white">Explora mi Blog</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/hugo-felipe-hormazabal-561005332/"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-700/30 to-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all flex-1 group"
                >
                  <Linkedin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-purple-300">Red profesional</div>
                    <div className="font-medium text-white">Conectar en LinkedIn</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Metodología visual */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                El Método <span className="text-cyan-400">Altius</span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Proceso probado para transformar complejidad en resultados estratégicos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {methodology.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-white/10 p-6 h-full">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mb-3">
                        {index + 1}
                      </div>
                      <h4 className="font-bold text-white mb-2">{phase.phase}</h4>
                      <p className="text-gray-400 text-sm mb-4">{phase.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {phase.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="text-xs text-cyan-400 font-medium">{phase.duration}</div>
                    </div>
                  </div>
                  
                  {/* Conector */}
                  {index < methodology.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Proyectos destacados */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Confianza Ganada en Proyectos Reales
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Empresas líderes que han transformado su operación con nuestras soluciones de IA
            </p>
            
            <div className="p-8 bg-gradient-to-r from-gray-900/50 to-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
              <CompanyLogos />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioManifesto;

