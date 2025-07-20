'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Sparkles, Eye, Zap, Wind, Shield, Users, Award, TrendingUp, Clock } from 'lucide-react';

const IAPowersImproved = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const theme = {
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    textGradient: 'from-cyan-400 to-indigo-500',
    goldAccent: 'from-amber-400 to-yellow-500',
  };

  const superpowers = [
    { 
      level: "I", 
      title: "Visión Aumentada", 
      subtitle: "El Poder de Ver lo Invisible", 
      icon: <Eye className="w-8 h-8 text-cyan-400" />, 
      insight: "Tus datos esconden patrones y oportunidades que el ojo humano no puede ver. La IA te da un nuevo par de ojos.", 
      objective: "Transformar datos brutos en insights estratégicos y decisiones predictivas que te pongan por delante de la competencia.", 
      benefit: "Claridad absoluta. Anticipación. Decisiones basadas en evidencia, no en intuición.",
      metrics: { value: "85%", label: "Precisión Predictiva" }
    },
    { 
      level: "II", 
      title: "Creación Acelerada", 
      subtitle: "El Poder de la Generación Infinita", 
      icon: <Zap className="w-8 h-8 text-cyan-400" />, 
      insight: "La página en blanco es el mayor enemigo de la productividad. La IA es tu musa y tu asistente incansable.", 
      objective: "Producir contenido, código, estrategias y creatividades de alta calidad a una velocidad 10x.", 
      benefit: "Agilidad sin precedentes. Vence el bloqueo creativo. Lanza más rápido y con mejor calidad.",
      metrics: { value: "10x", label: "Velocidad de Creación" }
    },
    { 
      level: "III", 
      title: "Hiper-Eficiencia", 
      subtitle: "El Poder de Eliminar el Desperdicio", 
      icon: <Wind className="w-8 h-8 text-cyan-400" />, 
      insight: "El 70% de las tareas de oficina son repetitivas. Son un ancla que frena tu verdadero potencial.", 
      objective: "Automatizar flujos de trabajo completos, desde la captura de un lead hasta la facturación.", 
      benefit: "Recupera tu tiempo para la estrategia. Reduce errores a cero. Haz que tu operación sea ligera y letal.",
      metrics: { value: "70%", label: "Reducción de Tareas" }
    },
    { 
      level: "IV", 
      title: "Omnipresencia Operativa", 
      subtitle: "El Poder de Estar en Todas Partes", 
      icon: <Shield className="w-8 h-8 text-cyan-400" />, 
      insight: "Tu negocio no puede depender de tu presencia física o de un horario de 9 a 5.", 
      objective: "Construir un 'Copilot' para tu empresa: un sistema autónomo que atiende clientes, gestiona procesos y opera 24/7.", 
      benefit: "Escalabilidad real. Experiencia de cliente excepcional. Tranquilidad de saber que tu negocio nunca duerme.",
      metrics: { value: "24/7", label: "Operación Continua" }
    }
  ];
  
  const caseStudies = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Atlas IA para Inmobiliarias",
      description: "Tu asistente inmobiliario que automatiza fichas de propiedades, integra con CRM y analiza el mercado mientras atiendes clientes.",
      video: "/1.mp4",
      metrics: [
        { value: "+40%", label: "Eficiencia" },
        { value: "300%", label: "ROI (3 meses)" },
        { value: "2.5h/día", label: "Ahorradas" },
      ],
      color: "cyan"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "Asistente Dental IA",
      description: "Crea fichas clínicas automáticamente por voz durante el examen, permitiendo un enfoque 100% en el paciente.",
      video: "/2.mp4",
      metrics: [
        { value: "+60%", label: "Eficiencia" },
        { value: "98%", label: "Satisfacción Paciente" },
        { value: "2h/día", label: "Ahorradas" },
      ],
      color: "purple"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Prompt Mastery",
      description: "Metodología de formación para que equipos no-técnicos aprendan a crear soluciones reales con IA sin programar.",
      video: "/3.mp4",
      metrics: [
        { value: "+200%", label: "Productividad" },
        { value: "92%", label: "Confianza del Equipo" },
        { value: "10h/sem", label: "Ahorradas" },
      ],
      color: "yellow"
    }
  ];

  // Variants correctamente tipadas
  const containerVariants: Variants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    } 
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Fondo mejorado con más capas */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header mejorado - Consultoría World Class */}
          <motion.div 
            variants={cardVariants}
            className="text-center mb-20"
          >
            {/* Badge de credibilidad */}
            <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-full">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm">Metodología Probada en +50 Empresas Fortune 500</span>
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Transformación Empresarial
              <br />
              <span className={`bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>
                Impulsada por IA
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              No vendemos tecnología. <span className="text-cyan-400 font-semibold">Entregamos superpoderes empresariales</span> que transforman tu operación en una máquina de crecimiento imparable.
            </p>

            {/* Métricas de credibilidad */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">+300%</div>
                <div className="text-sm text-gray-400">ROI Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">72h</div>
                <div className="text-sm text-gray-400">Implementación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-400">Satisfacción</div>
              </div>
            </div>
          </motion.div>
          
          {/* Grid de superpoderes mejorado */}
          <div className="relative mb-24">
            {/* Línea de conexión animada */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2 z-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {superpowers.map((power, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  className="relative z-10"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card principal con altura fija */}
                  <div className="relative h-80 group">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.02 : 1,
                        y: hoveredIndex === index ? -4 : 0,
                      }}
                      transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
                      className={`h-full w-full rounded-2xl border transition-all duration-500 ${
                        hoveredIndex === index 
                          ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                          : 'border-white/10 shadow-xl shadow-black/20'
                      }`}
                    >
                      <div className="h-full w-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col">
                        {/* Header de la card */}
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div 
                            animate={{ 
                              scale: hoveredIndex === index ? 1.1 : 1,
                              rotate: hoveredIndex === index ? 5 : 0 
                            }}
                            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
                            className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center"
                          >
                            {power.icon}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                                NIVEL {power.level}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-white leading-tight">{power.title}</h3>
                            <p className="text-sm text-cyan-400 font-medium">{power.subtitle}</p>
                          </div>
                        </div>

                        {/* Métrica destacada */}
                        <div className="mb-4 p-3 bg-black/30 rounded-lg border border-cyan-500/10">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{power.metrics.value}</div>
                            <div className="text-xs text-gray-400">{power.metrics.label}</div>
                          </div>
                        </div>

                        {/* Insight visible */}
                        <p className="text-sm text-gray-300 italic flex-1 leading-relaxed">
                          "{power.insight}"
                        </p>
                      </div>
                    </motion.div>

                    {/* Overlay expandible - NO afecta el layout */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 20, scale: 0.95 }}
                          transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
                          className="absolute -top-4 -left-4 -right-4 z-20 pointer-events-none"
                        >
                          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 p-6">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                                  {power.icon}
                                </div>
                                <div>
                                  <h4 className="text-lg font-bold text-white">{power.title}</h4>
                                  <p className="text-sm text-cyan-400">{power.subtitle}</p>
                                </div>
                              </div>
                              
                              <div className="space-y-3 text-sm">
                                <div className="p-3 bg-black/20 rounded-lg border border-cyan-500/10">
                                  <p className="text-cyan-400 font-medium mb-1">Objetivo:</p>
                                  <p className="text-gray-200 leading-relaxed">{power.objective}</p>
                                </div>
                                
                                <div className="p-3 bg-black/20 rounded-lg border border-cyan-500/10">
                                  <p className="text-cyan-400 font-medium mb-1">Beneficio:</p>
                                  <p className="text-gray-200 leading-relaxed">{power.benefit}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sección Atlas Copilot - Mantenida igual */}
          <motion.div 
            variants={cardVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-full">
              <Clock className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm">Casos de Éxito Reales</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Superpoderes en Acción: <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Atlas Copilot</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Así se ven estos conceptos abstractos convertidos en soluciones reales que ya están transformando negocios como el tuyo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
                className="group relative rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="relative min-h-[200px] overflow-hidden">
                  <video
                    src={study.video}
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${study.color}-500/10 border border-${study.color}-500/20 flex items-center justify-center`}>
                      {study.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{study.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 min-h-[60px] leading-relaxed">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metric.label} className="p-2 bg-black/20 rounded-lg border border-white/5">
                        <div className={`text-2xl font-bold text-${study.color}-400`}>{metric.value}</div>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IAPowersImproved;