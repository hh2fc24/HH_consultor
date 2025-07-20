// src/components/IAClub.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Video, MessageSquare, Zap, Calendar, LockKeyhole, Sparkles, Award, TrendingUp } from 'lucide-react';

const IAClub = () => {
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

  const benefits = [
    {
      icon: <Video className="w-6 h-6 text-cyan-400" />,
      title: "Masterclasses Exclusivas",
      description: "Sesiones en vivo con casos reales de implementación de IA"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      title: "Biblioteca de Recursos",
      description: "Guías, plantillas y frameworks para acelerar tu aprendizaje"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: "Comunidad Privada",
      description: "Red de profesionales donde resolver dudas y compartir avances"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-cyan-300" />,
      title: "Mentoría Colectiva",
      description: "Sesiones grupales de Q&A con Hugo cada semana"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-300" />,
      title: "Desafíos Prácticos",
      description: "Ejercicios para aplicar IA en tu contexto profesional real"
    },
    {
      icon: <Calendar className="w-6 h-6 text-yellow-300" />,
      title: "Eventos VIP",
      description: "Acceso prioritario a talleres y lanzamientos exclusivos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background inteligente mejorado */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
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
          {/* Encabezado mejorado */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Comunidad Exclusiva</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">Altius Ignite Club</span> - Tu Ventaja en IA
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Un espacio donde la curiosidad se transforma en dominio estratégico de la inteligencia artificial
            </p>
          </motion.div>
          
          {/* Valor propositivo mejorado */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16"
          >
            <div className="lg:col-span-2">
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm rounded-2xl border border-cyan-500/20 h-full">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  ¿Por Qué Unirte al Club?
                </h3>
                
                <div className="space-y-4">
                  <p className="text-base text-gray-300 leading-relaxed">
                    En un mundo donde la IA evoluciona diariamente, mantenerse relevante requiere más que cursos aislados. Necesitas un <span className="text-white font-medium">ecosistema de aprendizaje continuo</span>.
                  </p>
                  
                  <p className="text-base text-gray-300 leading-relaxed">
                    El Altius Ignite Club es tu acceso a:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center mt-0.5">
                        <LockKeyhole className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-white text-base">Contenido premium actualizado semanalmente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5">
                        <LockKeyhole className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-white text-base">Implementaciones reales antes del mercado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5">
                        <LockKeyhole className="w-3 h-3 text-yellow-400" />
                      </div>
                      <span className="text-white text-base">Red de profesionales con desafíos similares</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/30 rounded-2xl border border-cyan-500/20 p-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-400" />
                  Membresía Exclusiva
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-cyan-300 text-4xl font-bold">$10<span className="text-xl text-gray-400">/mes</span></div>
                    <div className="text-gray-400 text-sm">Cancelas cuando quieras</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-white text-sm">Acceso inmediato a todo el contenido</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-white text-sm">2 Masterclasses en vivo por mes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-white text-sm">Comunidad privada en Discord</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.a 
                href="/club/inscripcion"
                whileHover={{ scale: 1.03 }}
                className="mt-8 w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-semibold text-center text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Unirme Ahora
              </motion.a>
            </div>
          </motion.div>
          
          {/* Beneficios mejorados */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-12 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              Qué Incluye Tu Membresía
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 212, 255, 0.15)' }}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Testimonio mejorado */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-yellow-900/20 backdrop-blur-sm rounded-2xl border border-cyan-500/20 relative overflow-hidden">
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-scan-light"></div>
              
              <p className="text-lg md:text-xl italic text-white mb-6 leading-relaxed">
              Gracias al Club entendí cómo aplicar la IA en mi consulta. En menos de 3 meses descubrí Atlas Copilot Dental y pasé de llenar fichas a mano a enfocarme 100% en mis pacientes. Hoy, mi tiempo rinde más, mis atenciones son mejores… y mi cabeza está tranquila.
              </p>
              <div>
                <div className="font-bold text-white text-lg">Raquel Arevalo</div>
                <div className="text-gray-400 text-sm">Cirujano Dentista</div>
              </div>
            </div>
          </motion.div>
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

export default IAClub;

