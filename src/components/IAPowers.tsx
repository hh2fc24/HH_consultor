'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Sparkles, User, Users, Building2, Clock, TrendingUp, Award, Zap, Target, ArrowRight } from 'lucide-react';

const IAPowersImproved = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const theme = {
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    textGradient: 'from-cyan-400 to-indigo-500',
    goldAccent: 'from-amber-400 to-yellow-500',
  };

  const targetAudiences = [
    { 
      icon: <User className="w-8 h-8 text-cyan-400" />, 
      title: "¿Quieres usar IA pero no sabes por dónde empezar?", 
      subtitle: "Para personas naturales", 
      description: "Sientes que la IA podría ayudarte, pero te abruma la cantidad de herramientas. Pierdes tiempo en tareas repetitivas que podrían automatizarse. Quieres crear contenido de calidad pero te falta inspiración o te toma demasiado tiempo.",
      solution: "Te enseñamos a usar IA práctica desde cero. Aprenderás a crear contenido, automatizar tareas y organizar tu trabajo sin necesidad de conocimientos técnicos.",
      benefit: "Recupera 10 horas semanales",
      buttonText: "Quiero aprender desde cero",
      color: "cyan",
      painPoints: ["Tareas repetitivas que consumen tiempo", "Falta de ideas para contenido", "Sensación de quedarse atrás tecnológicamente"]
    },
    { 
      icon: <Users className="w-8 h-8 text-purple-400" />, 
      title: "¿Tu equipo necesita ser más eficiente?", 
      subtitle: "Para equipos de trabajo", 
      description: "Tu equipo de ventas, marketing o atención al cliente está saturado. Las tareas manuales consumen tiempo que podrían dedicar a actividades estratégicas. Necesitas que todos trabajen de forma más inteligente, no más duro.",
      solution: "Implementamos talleres prácticos donde tu equipo aprende a usar IA para automatizar procesos, crear contenido y mejorar la atención al cliente. Todo adaptado a tu industria.",
      benefit: "85% más productividad por persona",
      buttonText: "Necesito un taller para mi equipo",
      color: "purple",
      painPoints: ["Equipos sobrecargados de trabajo manual", "Falta de consistencia en procesos", "Necesidad de escalar sin contratar más personal"]
    },
    { 
      icon: <Building2 className="w-8 h-8 text-amber-400" />, 
      title: "¿Quieres que tu empresa crezca con IA?", 
      subtitle: "Para empresas", 
      description: "Tu empresa necesita crecer pero los recursos son limitados. La competencia ya está usando IA y tú no puedes quedarte atrás. Necesitas soluciones que mejoren la experiencia del cliente y optimicen tus operaciones.",
      solution: "Diseñamos e implementamos soluciones de IA personalizadas para tu empresa. Desde automatización de procesos hasta mejora en la experiencia del cliente, todo sin que necesites un equipo técnico.",
      benefit: "300% de retorno de inversión",
      buttonText: "Quiero transformar mi empresa",
      color: "amber",
      painPoints: ["Competencia que ya usa IA", "Recursos limitados para crecer", "Procesos ineficientes que frenan el crecimiento"]
    }
  ];
  
  const caseStudies = [
    {
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      title: "Atlas Inmobiliario",
      description: "Una inmobiliaria que ahora crea fichas de propiedades automáticamente, gestiona leads y analiza el mercado mientras se enfoca en cerrar ventas.",
      video: "/1.mp4",
      metrics: [
        { value: "3 horas", label: "Ahorradas diarias" },
        { value: "40%", label: "Más ventas" },
        { value: "2 meses", label: "ROI recuperado" },
      ],
      color: "cyan"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "Copilot Dental",
      description: "Un dentista que ahora crea historias clínicas por voz durante la consulta, dedicando 100% de su atención al paciente.",
      video: "/2.mp4",
      metrics: [
        { value: "2 horas", label: "Ahorradas diarias" },
        { value: "98%", label: "Satisfacción pacientes" },
        { value: "30%", label: "Más citas atendidas" },
      ],
      color: "purple"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Prompt Mastery",
      description: "Una empresa que capacitó a su equipo para crear soluciones con IA sin programar, transformando su cultura de trabajo.",
      video: "/3.mp4",
      metrics: [
        { value: "10 horas", label: "Ahorradas por persona" },
        { value: "92%", label: "Confianza del equipo" },
        { value: "200%", label: "Aumento productividad" },
      ],
      color: "yellow"
    }
  ];

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
          <motion.div 
            variants={cardVariants}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-full">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm">Transformación real para personas y empresas</span>
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              ¿Qué lugar ocupa la IA
              <br />
              <span className={`bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>
                en tu día a día?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              No necesitas saber programar, necesitas saber aplicarla. <span className="text-cyan-400 font-semibold">Te ayudamos a integrar IA de forma práctica</span> para recuperar tiempo, crear mejor contenido y hacer crecer tu negocio.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">15 horas</div>
                <div className="text-sm text-gray-400">Recuperadas por semana</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">1 día</div>
                <div className="text-sm text-gray-400">Para ver resultados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-400">Satisfacción</div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {targetAudiences.map((audience, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.02 : 1,
                    y: hoveredIndex === index ? -8 : 0,
                  }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
                  className={`h-full w-full rounded-2xl border transition-all duration-500 ${
                    hoveredIndex === index 
                      ? `border-${audience.color}-400/50 shadow-2xl shadow-${audience.color}-500/20` 
                      : 'border-white/10 shadow-xl shadow-black/20'
                  }`}
                >
                  <div className="h-full w-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div 
                        animate={{ 
                          scale: hoveredIndex === index ? 1.1 : 1,
                          rotate: hoveredIndex === index ? 5 : 0 
                        }}
                        transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
                        className={`flex-shrink-0 w-16 h-16 rounded-xl bg-${audience.color}-500/10 border border-${audience.color}-500/20 flex items-center justify-center`}
                      >
                        {audience.icon}
                      </motion.div>
                      <div className="flex-1">
                        <span className={`text-xs font-bold text-${audience.color}-400 bg-${audience.color}-400/10 px-3 py-1 rounded-full`}>
                          {audience.subtitle}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white leading-tight mb-4">{audience.title}</h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 flex-1">{audience.description}</p>

                    <div className="mb-6 p-4 bg-black/30 rounded-lg border border-white/10">
                      <p className="text-sm text-gray-300 mb-3"><span className="text-cyan-400 font-semibold">La solución:</span></p>
                      <p className="text-sm text-gray-200 leading-relaxed">{audience.solution}</p>
                    </div>

                    <div className="mb-6 text-center p-4 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-lg border border-cyan-500/20">
                      <div className="text-2xl font-bold text-cyan-400">{audience.benefit}</div>
                      <div className="text-xs text-gray-400">Resultado promedio</div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 bg-gradient-to-r from-${audience.color}-500 to-${audience.color}-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-${audience.color}-500/25 transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      {audience.buttonText}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={cardVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-full">
              <Clock className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm">Casos de Éxito Reales</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Personas y Empresas que ya Transformaron su Trabajo
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Estos son ejemplos reales de cómo la IA está transformando negocios y vidas de personas que, como tú, decidieron dar el primer paso hacia la transformación.
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