'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Video, MessageSquare, Zap, Calendar, LockKeyhole } from 'lucide-react';

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
        type: 'spring', 
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
      icon: <Users className="w-6 h-6 text-cyan-300" />,
      title: "Comunidad Privada",
      description: "Red de profesionales donde resolver dudas y compartir avances"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-300" />,
      title: "Mentoría Colectiva",
      description: "Sesiones grupales de Q&A con Hugo cada semana"
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Desafíos Prácticos",
      description: "Ejercicios para aplicar IA en tu contexto profesional real"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Eventos VIP",
      description: "Acceso prioritario a talleres y lanzamientos exclusivos"
    }
  ];

  const testimonios = [
    {
      nombre: "Raquel Arevalo",
      rol: "Cirujano Dentista",
      mensaje:
        "Gracias al Club entendí cómo aplicar la IA en mi consulta. En menos de 3 meses descubrí Atlas Copilot Dental y pasé de llenar fichas a mano a enfocarme 100% en mis pacientes. Hoy, mi tiempo rinde más, mis atenciones son mejores… y mi cabeza está tranquila.",
    },
    {
      nombre: "Paula Guerra",
      rol: "Agente Inmobiliaria - Century21",
      mensaje:
        "Atlas Copilot Inmobiliario me ayudó a organizar mis grupos de WhatsApp y contactos. Pero lo más importante: ¡me ayudó a vender más! Hoy puedo enfocarme en clientes reales y cerrar operaciones más rápido.",
    },
    {
      nombre: "David Cantillana",
      rol: "Subdirector de Admisión - UDLA",
      mensaje:
        "Gracias al Club y a la integración de IA, simplificamos el manejo de datos, automatizamos reportes y mejoramos el seguimiento de indicadores clave. Ahora los informes son claros, accionables y en tiempo real.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { nombre, rol, mensaje } = testimonios[index];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Encabezado */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Altius Ignite Club</span> - Tu Ventaja en IA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un espacio donde la curiosidad se transforma en dominio estratégico de la inteligencia artificial
            </p>
          </motion.div>
          
          {/* Valor propositivo */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16"
          >
            <div className="lg:col-span-2">
              <div className="p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¿Por Qué Unirte al Club?
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    En un mundo donde la IA evoluciona diariamente, mantenerse relevante requiere más que cursos aislados. Necesitas un <span className="text-white font-medium">ecosistema de aprendizaje continuo</span>.
                  </p>
                  
                  <p className="text-gray-300">
                    El Altius Ignite Club es tu acceso a:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center mt-0.5">
                        <LockKeyhole className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-white">Contenido premium actualizado semanalmente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5">
                        <LockKeyhole className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-white">Implementaciones reales antes del mercado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center mt-0.5">
                        <LockKeyhole className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-white">Red de profesionales con desafíos similares</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/30 rounded-2xl border border-white/10 p-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Membresía Exclusiva
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-cyan-300 text-4xl font-bold">$10/mes</div>
                    <div className="text-gray-400">Cancelas cuando quieras</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-white">Acceso inmediato a todo el contenido</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-white">2 Masterclasses en vivo por mes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-white">Comunidad privada en Discord</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.a 
                href="/club/inscripcion"
                whileHover={{ scale: 1.03 }}
                className="mt-8 w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-semibold text-center"
              >
                Unirme Ahora
              </motion.a>
            </div>
          </motion.div>
          
          {/* Beneficios */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              Qué Incluye Tu Membresía
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Testimonio rotativo */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="text-xl italic text-white mb-6">
                {`"${mensaje}"`}
              </p>
              <div>
                <div className="font-bold text-white">{nombre}</div>
                <div className="text-gray-400">{rol}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IAClub;