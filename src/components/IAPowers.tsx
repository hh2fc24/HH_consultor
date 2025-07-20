
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Zap, Wind, Shield, Users } from 'lucide-react';

const IAPowers = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const theme = {
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    textGradient: 'from-cyan-400 to-indigo-500',
  };

  const superpowers = [
    { level: "I", title: "Visión Aumentada", subtitle: "El Poder de Ver lo Invisible", icon: <Eye className="w-8 h-8 text-cyan-400" />, insight: "Tus datos esconden patrones y oportunidades que el ojo humano no puede ver. La IA te da un nuevo par de ojos.", objective: "Transformar datos brutos en insights estratégicos y decisiones predictivas que te pongan por delante de la competencia.", benefit: "Claridad absoluta. Anticipación. Decisiones basadas en evidencia, no en intuición." },
    { level: "II", title: "Creación Acelerada", subtitle: "El Poder de la Generación Infinita", icon: <Zap className="w-8 h-8 text-cyan-400" />, insight: "La página en blanco es el mayor enemigo de la productividad. La IA es tu musa y tu asistente incansable.", objective: "Producir contenido, código, estrategias y creatividades de alta calidad a una velocidad 10x.", benefit: "Agilidad sin precedentes. Vence el bloqueo creativo. Lanza más rápido y con mejor calidad." },
    { level: "III", title: "Hiper-Eficiencia", subtitle: "El Poder de Eliminar el Desperdicio", icon: <Wind className="w-8 h-8 text-cyan-400" />, insight: "El 70% de las tareas de oficina son repetitivas. Son un ancla que frena tu verdadero potencial.", objective: "Automatizar flujos de trabajo completos, desde la captura de un lead hasta la facturación.", benefit: "Recupera tu tiempo para la estrategia. Reduce errores a cero. Haz que tu operación sea ligera y letal." },
    { level: "IV", title: "Omnipresencia Operativa", subtitle: "El Poder de Estar en Todas Partes", icon: <Shield className="w-8 h-8 text-cyan-400" />, insight: "Tu negocio no puede depender de tu presencia física o de un horario de 9 a 5.", objective: "Construir un 'Copilot' para tu empresa: un sistema autónomo que atiende clientes, gestiona procesos y opera 24/7.", benefit: "Escalabilidad real. Experiencia de cliente excepcional. Tranquilidad de saber que tu negocio nunca duerme." }
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

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

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
          {/* --- Parte 1: El CONCEPTO --- */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.7} } }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm">Tu Ventaja Competitiva</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Adquiere tus <span className={`bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>Superpoderes de IA</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              La tecnología del Arsenal no es el fin, es el medio. Con ella, construyo soluciones que te otorgan estas cuatro capacidades transformadoras.
            </p>
          </motion.div>
          
          <div 
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                <div className="h-full w-full border-t-2 border-dashed border-gray-700/50"></div>
            </div>
            {superpowers.map((power, index) => (
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
                     <div className="flex items-center gap-4 mb-4">
                      <div className={`transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}>{power.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{power.title}</h3>
                        <p className="font-medium text-cyan-400 text-sm">{power.subtitle}</p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="space-y-4 pt-4 border-t border-white/10"
                    >
                      <p className="text-sm text-gray-300 italic">"{power.insight}"</p>
                      <div className="space-y-3 text-sm">
                        <p><strong className="text-cyan-400 font-medium">Objetivo:</strong> <span className="text-gray-200">{power.objective}</span></p>
                        <p><strong className="text-cyan-400 font-medium">Beneficio:</strong> <span className="text-gray-200">{power.benefit}</span></p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Parte 2: El EJEMPLO --- */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Superpoderes en Acción: Atlas Copilot
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Así se ven estos conceptos abstractos convertidos en soluciones reales que ya están transformando negocios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl overflow-hidden"
              >
                <div className="relative min-h-[200px]">
                  <video
                    src={study.video}
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* --- LÍNEA ELIMINADA para quitar la cubierta negra --- */}
                  {/* <div className="absolute inset-0 bg-black/70"></div> */}
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
                  <p className="text-gray-300 text-sm mb-6 min-h-[60px]">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {study.metrics.map(metric => (
                      <div key={metric.label}>
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

export default IAPowers;
