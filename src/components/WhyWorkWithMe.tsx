
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Heart, LucideIcon, Sparkles, BarChart3, Users } from 'lucide-react';

interface MethodStep {
  icon: LucideIcon;
  step: string;
  title: string;
  content: string;
  borderColor: string;
  gradient: string;
  metrics: string[];
  hoverIcon: LucideIcon;
}

// =====> NOMBRE CORREGIDO AQUÍ <=====
const WorldClassMethod: React.FC = () => {
  const methodology: MethodStep[] = [
    {
      icon: Brain,
      hoverIcon: BarChart3,
      step: "Paso 1: Claridad Estratégica",
      title: "Diagnosticamos y Trazamos la Ruta",
      content: "Traducimos el potencial de la IA en una hoja de ruta clara, priorizada y alineada con tus objetivos de negocio.",
      borderColor: "hover:border-cyan-400/80",
      gradient: "from-cyan-400 to-blue-500",
      metrics: ["ROI +45%", "Tiempo -30%", "Claridad 100%"]
    },
    {
      icon: TrendingUp,
      hoverIcon: Sparkles,
      step: "Paso 2: Impacto Medible",
      title: "Construimos e Implementamos la Solución",
      content: "Desarrollamos e integramos herramientas de IA a medida que generan un retorno de inversión tangible y liberan a tu equipo.",
      borderColor: "hover:border-purple-400/80",
      gradient: "from-blue-500 to-purple-500",
      metrics: ["Eficiencia +67%", "Costos -40%", "Adopción 95%"]
    },
    {
      icon: Heart,
      hoverIcon: Users,
      step: "Paso 3: Empoderamiento Humano",
      title: "Empoderamos y Garantizamos la Adopción",
      content: "La mejor tecnología es la que se siente invisible. Te entregamos soluciones intuitivas que potencian el talento humano.",
      borderColor: "hover:border-indigo-400/80",
      gradient: "from-purple-500 to-indigo-500",
      metrics: ["Satisfacción 98%", "Productividad +55%", "Retención 100%"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background inteligente mejorado */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold leading-tight text-gray-100 tracking-tight mb-4"
          >
            El Método: <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent font-bold">Claridad, Impacto y Humanidad</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto relative"
          >
            Para navegar la era de la IA no necesitas más complejidad, sino un socio con un método probado para entregar resultados.
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scan-light"></span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-blue-900/10 border border-cyan-500/20 backdrop-blur-md">
            <div className="flex items-center gap-6">
              <Image
                src="/T.png"
                alt="Testimonio de Tenpo"
                width={80}
                height={80}
                className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover border-2 border-cyan-400/30"
              />
              <div className="text-left flex-1">
                <p className="text-base md:text-lg italic text-gray-300 mb-3">
                  Con Hugo rediseñamos nuestra operación de contact center, mejorando significativamente la <span className="text-cyan-400 font-medium">experiencia de cliente</span> y los tiempos de respuesta.
                </p>
                <div className="flex items-center gap-4">
                  <p className="text-sm font-semibold text-white">
                    Equipo de Operaciones, Tenpo
                  </p>
                  <div className="flex items-center gap-2 text-xs text-cyan-400">
                    <Sparkles className="w-3 h-3" />
                    <span>Resultado verificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
        >
          {methodology.map((step) => {
            const IconComponent = step.icon;
            const HoverIconComponent = step.hoverIcon;
            
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`relative h-full p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/50 transition-all duration-500 ${step.borderColor} backdrop-blur-sm`}>
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                  
                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="relative">
                      <IconComponent className="w-8 h-8 text-white/60 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                      <HoverIconComponent className="w-8 h-8 text-cyan-400 absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12" />
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <div className="flex flex-col gap-1">
                        {step.metrics.map((metric, idx) => (
                          <div key={idx} className="text-xs text-cyan-400 font-mono bg-black/30 px-2 py-1 rounded">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    <p className="text-xs font-semibold text-cyan-400/80 tracking-wider uppercase">
                      {step.step}
                    </p>
                    
                    <h4 className={`text-lg md:text-xl font-semibold leading-tight bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {step.title}
                    </h4>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {step.content}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-6 md:p-8">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                ¿Listo para implementar este método en tu empresa?
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Agenda una consulta estratégica y descubre cómo aplicar estas fases a tu negocio específico.
              </p>
            </div>
            
            <motion.a
              href="https://wa.me/59177028880"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-xl text-white font-semibold flex items-center gap-2 whitespace-nowrap shadow-lg shadow-cyan-500/20 transition-all"
            >
              Iniciar Transformación
              <Sparkles className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scan-light {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-scan-light {
          animation: scan-light 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// =====> NOMBRE CORREGIDO AQUÍ <=====
export default WorldClassMethod;
