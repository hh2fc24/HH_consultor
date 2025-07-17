'use client';

import { motion } from 'framer-motion';
import { Zap, User } from 'lucide-react';

const IAPowers = () => {
  const solutions = [
    {
      icon: <User className="w-8 h-8 text-cyan-400" />,
      title: "Atlas IA para Inmobiliarias",
      description: "Tu asistente inmobiliario que automatiza fichas de propiedades mientras atiendes clientes",
      benefit: "+40% eficiencia en gestión de propiedades",
      video: "/1.mp4"
    },
    {
      icon: <User className="w-8 h-8 text-purple-400" />,
      title: "Asistente Dental IA",
      description: "Crea fichas clínicas automáticamente mientras examinas pacientes",
      benefit: "Ahorra 2 horas diarias de trabajo administrativo",
      video: "/2.mp4"
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-300" />,
      title: "Prompt Mastery",
      description: "Aprende a crear soluciones reales con IA, sin saber programar",
      benefit: "Desarrolla soluciones sin ser programador",
      video: "/3.mp4"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Superpoderes Profesionales</span> con IA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones prácticas que multiplican tu productividad e ingresos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900/50 rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-cyan-900/20 to-purple-900/30 flex items-center justify-center">
                <video
                  src={solution.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-5">{solution.description}</p>
                
                <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg border border-cyan-500/20">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-medium">{solution.benefit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto text-center">
          <p className="text-2xl font-bold text-white mb-4">
            “Este sitio fue creado con IA usando solo prompts estratégicos. Imagina lo que podrías hacer en tu industria con estas herramientas.”
          </p>
          <div>
            <div className="font-bold text-white">Hugo Hormazábal</div>
            <div className="text-gray-400">Fundador, Altius Ignite</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAPowers;