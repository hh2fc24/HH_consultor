'use client';

import { motion } from 'framer-motion';
import { Zap, User, Calculator, TrendingUp, Clock, Award, ArrowRight, Sparkles, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

const IAPowers = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);


  const [particles, setParticles] = useState<
  { left: string; top: string; delay: string; duration: string }[]
>([]);

useEffect(() => {
  const generated = Array.from({ length: 20 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${2 + Math.random() * 2}s`,
  }));
  setParticles(generated);
}, []);



  const solutions = [
    {
      icon: <User className="w-8 h-8 text-cyan-400" />,
      title: "Atlas IA para Inmobiliarias",
      description: "Tu asistente inmobiliario que automatiza fichas de propiedades mientras atiendes clientes",
      benefit: "+40% eficiencia en gestión de propiedades",
      video: "/1.mp4",
      metrics: {
        timesSaved: "2.5h/día",
        efficiency: "+40%",
        satisfaction: "95%"
      },
      features: ["Automatización de fichas", "Análisis de mercado", "CRM integrado"],
      roi: "ROI 300% en 3 meses"
    },
    {
      icon: <User className="w-8 h-8 text-purple-400" />,
      title: "Asistente Dental IA",
      description: "Crea fichas clínicas automáticamente mientras examinas pacientes",
      benefit: "Ahorra 2 horas diarias de trabajo administrativo",
      video: "/2.mp4",
      metrics: {
        timesSaved: "2h/día",
        efficiency: "+60%",
        satisfaction: "98%"
      },
      features: ["Fichas automáticas", "Diagnóstico asistido", "Seguimiento pacientes"],
      roi: "ROI 250% en 2 meses"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Prompt Mastery",
      description: "Aprende a crear soluciones reales con IA, sin saber programar",
      benefit: "Desarrolla soluciones sin ser programador",
      video: "/3.mp4",
      metrics: {
        timesSaved: "10h/sem",
        efficiency: "+200%",
        satisfaction: "92%"
      },
      features: ["Metodología probada", "Casos reales", "Soporte continuo"],
      roi: "Habilidades para toda la vida"
    }
  ];

  const interactiveTools = [
    {
      id: 'roi-calculator',
      title: 'Calculadora ROI IA',
      description: 'Estima el retorno de inversión de implementar IA en tu negocio',
      icon: <Calculator className="w-6 h-6" />,
      color: 'cyan'
    },
    {
      id: 'readiness-assessment',
      title: 'Test de Madurez IA',
      description: 'Evalúa qué tan preparada está tu empresa para la IA',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background inteligente mejorado */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
        
        {/* Partículas de conexión neuronal */}
        <div className="absolute inset-0">
  {particles.map((dot, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
      style={{
        left: dot.left,
        top: dot.top,
        animationDelay: dot.delay,
        animationDuration: dot.duration
      }}
    />
  ))}
</div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Encabezado mejorado */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">Superpoderes Profesionales</span> con IA
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Soluciones prácticas que multiplican tu productividad e ingresos
            </p>
            
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-cyan-500/20">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Transformación en progreso</span>
                <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tarjetas de soluciones mejoradas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10">
                
                {/* Video con overlay interactivo */}
                <div className="relative h-48 bg-gradient-to-r from-cyan-900/20 to-purple-900/30 overflow-hidden">
                  <video
                    src={solution.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay con métricas en hover */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center">
                      <div className="grid grid-cols-3 gap-4 text-white">
                        <div>
                          <Clock className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
                          <div className="text-sm font-bold">{solution.metrics.timesSaved}</div>
                          <div className="text-xs text-gray-300">Tiempo ahorrado</div>
                        </div>
                        <div>
                          <TrendingUp className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                          <div className="text-sm font-bold">{solution.metrics.efficiency}</div>
                          <div className="text-xs text-gray-300">Eficiencia</div>
                        </div>
                        <div>
                          <Award className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
                          <div className="text-sm font-bold">{solution.metrics.satisfaction}</div>
                          <div className="text-xs text-gray-300">Satisfacción</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{solution.description}</p>
                  
                  {/* Features list */}
                  <div className="mb-4">
                    <div className="grid grid-cols-1 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* ROI y beneficio */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded-lg border border-cyan-500/20">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-white font-medium text-sm">{solution.benefit}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 px-3 py-2 rounded-lg border border-purple-500/20">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-300 font-medium text-sm">{solution.roi}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Herramientas interactivas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Herramientas <span className="text-cyan-400">Interactivas</span>
            </h3>
            <p className="text-gray-400">Evalúa el potencial de IA en tu negocio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {interactiveTools.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  tool.color === 'cyan' 
                    ? 'bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/30 hover:border-cyan-400'
                    : 'bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border-purple-500/30 hover:border-purple-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    tool.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">{tool.title}</h4>
                    <p className="text-gray-400 text-sm">{tool.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonio mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-yellow-900/20 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-scan-light"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Demostración en vivo</span>
            </div>
            
            <p className="text-xl md:text-2xl italic text-white mb-6 leading-relaxed">
              Este sitio fue creado con IA usando solo prompts estratégicos. Imagina lo que podrías hacer en tu industria con estas herramientas.
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-white text-lg">Hugo Hormazábal</div>
                <div className="text-gray-400">Fundador, Altius Ignite</div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100%</div>
                  <div className="text-xs text-gray-400">IA Powered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">0</div>
                  <div className="text-xs text-gray-400">Código manual</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes scan-light {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-scan-light {
          animation: scan-light 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default IAPowers;

