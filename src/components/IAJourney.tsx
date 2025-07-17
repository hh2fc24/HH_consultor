// src/components/IAJourney.tsx
'use client';

import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, Rocket, Layers, BarChart } from 'lucide-react';
import type { Variants } from 'framer-motion';

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // ✅ usar literal exacto
        stiffness: 120,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const pathwayData = [
    {
      level: "A",
      title: "Taller de Iniciación",
      subtitle: "Despierta tu IA",
      icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
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
      icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
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
      icon: <Layers className="w-8 h-8 text-cyan-300" />,
      insight: "La verdadera ventaja viene cuando combinas inteligencias",
      objective: "Usar múltiples herramientas en conjunto para crear flujos inteligentes",
      activity: "Clases grabadas, guías de prompts y sesiones interactivas",
      benefit: "Pasas de usuario a estratega elevando tu rendimiento exponencialmente",
      color: "from-cyan-800/20 to-cyan-800/5"
    },
    {
      level: "D",
      title: "Consultoría Personalizada",
      subtitle: "IA para tu Ecosistema",
      icon: <BarChart className="w-8 h-8 text-purple-300" />,
      insight: "Las empresas no necesitan IA genérica, sino soluciones para su entorno",
      objective: "Detectar oportunidades de automatización y escalamiento",
      activity: "Diagnóstico + acompañamiento + desarrollo (agnóstico en tecnología)",
      benefit: "Resultado tangible implementado con foco en ROI y equipo empoderado",
      color: "from-purple-800/20 to-purple-800/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Propuesta de valor central */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tu Camino con <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Inteligencia Artificial</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-300 mb-6">
                No importa si eres un emprendedor curioso, una empresa en expansión o alguien que aún no entiende qué es un prompt. 
                <span className="text-white font-medium"> Lo importante es que empieces.</span>
              </p>
              
              <div className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10">
                <p className="text-xl text-white font-light">
                  Aquí tienes un camino pensado para enseñarte, acompañarte y darte resultados reales con IA. 
                  <span className="block mt-3 text-cyan-300 font-medium">
                    No se trata de por dónde partes, sino de que ya no puedes quedarte fuera.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Niveles de entrada */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {pathwayData.map((path, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="h-full flex flex-col"
              >
                <div className={`p-6 bg-gradient-to-b ${path.color} rounded-xl border border-white/10 flex-1 flex flex-col`}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center">
                      {path.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400">Nivel {path.level}</div>
                      <h3 className="text-xl font-bold text-white">{path.title}</h3>
                      <div className="text-cyan-300 font-medium">{path.subtitle}</div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-5">
                      <div className="text-xs font-semibold text-cyan-300 uppercase mb-1">Insight</div>
                      <p className="text-gray-300 italic">{path.insight}</p>
                    </div>
                    
                    <div className="mb-5">
                      <div className="text-xs font-semibold text-cyan-300 uppercase mb-1">Objetivo</div>
                      <p className="text-white">{path.objective}</p>
                    </div>
                    
                    <div className="mb-5">
                      <div className="text-xs font-semibold text-cyan-300 uppercase mb-1">Actividad</div>
                      <p className="text-gray-300">{path.activity}</p>
                    </div>
                    
                    <div>
                      <div className="text-xs font-semibold text-cyan-300 uppercase mb-1">Beneficio</div>
                      <p className="text-white font-medium">{path.benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Cierre reflexivo */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="max-w-2xl mx-auto">
              <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              
              <h3 className="text-3xl font-bold text-white mb-6">
                El Primer Paso Es Siempre El Más Importante
              </h3>
              
              <div className="p-6 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-white/10">
                <p className="text-xl text-white">
                  No necesitas entenderlo todo para empezar. Solo necesitas el coraje de dar el primer paso.
                  <span className="block mt-4 text-cyan-300 font-medium">
                    Yo me encargo de acompañarte en los siguientes.
                  </span>
                </p>
              </div>
              
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-semibold text-lg"
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