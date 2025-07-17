'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, BookOpen, BarChart, Award, Briefcase } from 'lucide-react';
import CompanyLogos from './CompanyLogos';

const BioManifesto = () => {
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
        type: 'spring', 
        stiffness: 120, 
        damping: 15, 
        duration: 0.7 
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Fondo de partículas digitales */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-cyan-400 blur-sm animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-purple-500 blur-sm animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-cyan-300 blur-sm animate-pulse"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Encabezado estratégico */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Democratizando la <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Inteligencia Artificial</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformando complejidad tecnológica en ventaja estratégica para líderes
            </p>
          </motion.div>
          
          {/* Perfil de experto */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
            {/* Foto y credenciales */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-2/5"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-cyan-500/20 to-purple-600/30 rounded-2xl blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <Image 
                    src="/HHweb.svg"
                    alt="Hugo Hormazábal - Experto en IA" 
                    width={480}
                    height={560}
                    className="w-full object-cover"
                  />
                </div>
                
                <div className="mt-8 p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Hugo Hormazábal
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4">
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
                        <p className="text-gray-300 text-sm">+12 años liderando transformación en empresas TOP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Valor propositivo */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-3/5"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Mi Compromiso: <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">IA con Propósito Real</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-300">
                    "No me interesa la tecnología por la tecnología. Lo que me obsesiona es cómo puede ayudarte a pensar mejor, decidir con más claridad y liderar con más impacto.  
                    Vi demasiadas empresas llenas de dashboards pero vacías de dirección. Ahí entendí algo simple: <span className="text-white font-medium">la IA no vale nada si no te sirve para actuar</span>.  
                    Yo no traduzco código. Yo traduzco complejidad en resultados estratégicos. Y ese es mi trabajo contigo."
                  </p>
                  
                  <div className="p-6 bg-black/30 rounded-xl border border-cyan-500/20 mt-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
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
              
              {/* Beneficios clave */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-5 bg-gradient-to-b from-cyan-900/20 to-cyan-900/5 rounded-xl border border-cyan-500/20">
                  <div className="text-cyan-400 text-2xl font-bold mb-2">01</div>
                  <h4 className="font-bold text-white mb-2">Tiempo para liderar</h4>
                  <p className="text-gray-300 text-sm">Recupera tu capacidad de enfoque estratégico</p>
                </div>
                
                <div className="p-5 bg-gradient-to-b from-purple-900/20 to-purple-900/5 rounded-xl border border-purple-500/20">
                  <div className="text-purple-400 text-2xl font-bold mb-2">02</div>
                  <h4 className="font-bold text-white mb-2">Foco para crear</h4>
                  <p className="text-gray-300 text-sm">Convierte datos en innovación tangible</p>
                </div>
                
                <div className="p-5 bg-gradient-to-b from-gray-800 to-gray-900/5 rounded-xl border border-white/10">
                  <div className="text-white text-2xl font-bold mb-2">03</div>
                  <h4 className="font-bold text-white mb-2">Tranquilidad estratégica</h4>
                  <p className="text-gray-300 text-sm">Opera con seguridad en la era de la disrupción</p>
                </div>
              </div>
              
              {/* Acciones */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href="/blog"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-700/20 to-cyan-900/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all flex-1"
                >
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-xs text-cyan-300">Conocimiento estratégico</div>
                    <div className="font-medium text-white">Explora mi Blog</div>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/hugo-felipe-hormazabal-561005332/"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-700/20 to-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all flex-1"
                >
                  <Linkedin className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-xs text-purple-300">Red profesional</div>
                    <div className="font-medium text-white">Conectar en LinkedIn</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Proyectos destacados */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-24"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Confianza Ganada en Proyectos Reales
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Empresas líderes que han transformado su operación con nuestras soluciones de IA
            </p>
            
            <div className="p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
              <CompanyLogos />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioManifesto;