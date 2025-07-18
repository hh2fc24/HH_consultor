// src/components/IAJourney.tsx
'use client';

import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, Rocket, Layers, BarChart, Lightbulb, GraduationCap, Users, TrendingUp } from 'lucide-react';


const IAJourney = () => {
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

  const itemVariants = {
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

  const pathwayData = [
    {
      level: "A",
      title: "Taller de Iniciación",
      subtitle: "Despierta tu IA",
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      insight: "Hoy todos hablan de IA, pero nadie te explica cómo ni por qué usarla.",
      objective: "Que cualquier persona entienda los principios clave de la IA moderna",
      activity: "Taller de 45 minutos, semanal, valor simbólico",
      benefit: "Despertar del desconocimiento y habilitación de primeros pasos lógicos",
      color: "from-cyan-900/20 to-cyan-900/5"
    },
    {
      level: "B",
      title: "Desafío de Aplicación",
      subtitle: "IA en Acción: 10 días",
      icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
      insight: "Saber que existe IA no sirve si no sabes usarla para ti.",
      objective: "Aplicar IA a un caso real de tu trabajo o vida",
      activity: "Reto guiado de 10 días, con comunidad y mentoría",
      benefit: "Dominio práctico, confianza y desbloqueo de nuevas ideas",
      color: "from-purple-900/20 to-purple-900/5"
    },
    {
      level: "C",
      title: "Ruta Avanzada",
      subtitle: "Orquesta de IAs",
      icon: <Layers className="w-8 h-8 text-yellow-400" />,
      insight: "La verdadera ventaja viene cuando combinas inteligencias",
      objective: "Usar múltiples herramientas en conjunto para crear flujos inteligentes",
      activity: "Clases grabadas, guías de prompts y sesiones interactivas",
      benefit: "Pasas de usuario a estratega elevando tu rendimiento exponencialmente",
      color: "from-yellow-900/20 to-yellow-900/5"
    },
    {
      level: "D",
      title: "Consultoría Personalizada",
      subtitle: "IA para tu Ecosistema",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      insight: "Las empresas no necesitan IA genérica, sino soluciones para su entorno",
      objective: "Detectar oportunidades de automatización y escalamiento",
      activity: "Diagnóstico + acompañamiento + desarrollo (agnóstico en tecnología)",
      benefit: "Resultado tangible implementado con foco en ROI y equipo empoderado",
      color: "from-green-900/20 to-green-900/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background inteligente mejorado */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Propuesta de valor central mejorada */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Tu Evolución con IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tu Camino con <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">Inteligencia Artificial</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                No importa si eres un emprendedor curioso, una empresa en expansión o alguien que aún no entiende qué es un prompt. 
                <span className="text-white font-medium"> Lo importante es que empieces.</span>
              </p>
              
              <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl border border-cyan-500/20">
                <p className="text-lg text-white leading-relaxed">
                  Aquí tienes un camino pensado para enseñarte, acompañarte y darte resultados reales con IA. 
                  <span className="block mt-3 text-cyan-300 font-medium">
                    No se trata de por dónde partes, sino de que ya no puedes quedarte fuera.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Niveles de entrada mejorados */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {pathwayData.map((path, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 212, 255, 0.15)' }}
                className="h-full flex flex-col group"
              >
                <div className={`p-6 bg-gradient-to-br ${path.color} rounded-xl border border-white/10 flex-1 flex flex-col transition-all duration-300 group-hover:border-cyan-400/50`}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {path.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400">Nivel {path.level}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{path.title}</h3>
                      <div className="text-cyan-300 font-medium text-sm">{path.subtitle}</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-cyan-300 uppercase mb-1">Insight</div>
                      <p className="text-gray-300 italic text-sm">{path.insight}</p>
                    </div>
                    
                    <div>
                      <div className="text-xs font-semibold text-cyan-300 uppercase mb-1">Objetivo</div>
                      <p className="text-white text-sm">{path.objective}</p>
                    </div>
                    
                    <div>
                      <div className="text-xs font-semibold text-cyan-300 uppercase mb-1">Actividad</div>
                      <p className="text-gray-300 text-sm">{path.activity}</p>
                    </div>
                    
                    <div>
                      <div className="text-xs font-semibold text-cyan-300 uppercase mb-1">Beneficio</div>
                      <p className="text-white font-medium text-sm">{path.benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Cierre reflexivo mejorado */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="max-w-2xl mx-auto">
              <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-6 animate-bounce" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                El Primer Paso Es Siempre El Más Importante
              </h3>
              
              <div className="p-6 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-cyan-500/20">
                <p className="text-lg text-white leading-relaxed">
                  No necesitas entenderlo todo para empezar. Solo necesitas el coraje de dar el primer paso.
                  <span className="block mt-4 text-cyan-300 font-medium">
                    Yo me encargo de acompañarte en los siguientes.
                  </span>
                </p>
              </div>
              
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0, 212, 255, 0.25)' }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Explorar Rutas Disponibles
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IAJourney;

