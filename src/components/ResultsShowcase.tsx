'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, Variants } from 'framer-motion';
import { BarChart, Zap, Clock, TrendingUp, Award } from 'lucide-react';

const ResultsShowcase = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const finalResults = [
    { icon: <BarChart className="w-8 h-8 text-cyan-400" />, finalValue: 45, label: "Reducción de costos operativos", description: "En procesos administrativos", suffix: "%", color: "cyan" },
    { icon: <Zap className="w-8 h-8 text-purple-400" />, finalValue: 20, label: "Aceleración de análisis", description: "De datos complejos", suffix: "x", color: "purple" },
    { icon: <Clock className="w-8 h-8 text-yellow-400" />, finalValue: 30, label: "Tiempo recuperado", description: "Para liderazgo estratégico", suffix: "h/sem", color: "yellow" },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, finalValue: 67, label: "Mejora en CX", description: "Con IA predictiva", prefix: "+", suffix: "%", color: "green" }
  ];

  const testimonials = [
    {
      quote: "Gracias al trabajo con Hugo, hoy tenemos procesos de admisión más ágiles y dashboards que facilitan la toma de decisiones en tiempo real. Un antes y un después en nuestra operación diaria.",
      author: "David Cantillana",
      company: "Subdirector de Admisión, UDLA",
    },
    {
      quote: "Atlas Copilot transformó mi consulta. Desde la ficha clínica hasta la gestión de pacientes, todo fluye con inteligencia. Es como tener un asistente experto las 24 horas.",
      author: "Dra. Raquel Arévalo",
      company: "Odontóloga, Santa Cruz de la Sierra",
    },
    {
      quote: "Automatizamos la captación de leads con IA y el cambio fue inmediato. Ahora llegamos antes, mejor y con menos esfuerzo. Es una ventaja competitiva real.",
      author: "Miguel Saavedra",
      company: "Líder de Ventas",
    },
  ];

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  // Componente para contador animado
  const AnimatedCounter = ({ value, prefix = "", suffix = "", color }: { value: number, prefix?: string, suffix?: string, color: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, motionValue, value]);

    useEffect(() => {
      return springValue.onChange((latest) => {
        setDisplayValue(Math.round(latest));
      });
    }, [springValue]);

    const getColorClasses = (color: string) => {
      switch (color) {
        case 'cyan': return 'text-cyan-400';
        case 'purple': return 'text-purple-400';
        case 'yellow': return 'text-yellow-400';
        case 'green': return 'text-green-400';
        default: return 'text-white';
      }
    };

    return (
      <motion.div 
        ref={ref}
        className={`text-4xl font-bold ${getColorClasses(color)} mb-2`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {prefix}{displayValue}{suffix}
      </motion.div>
    );
  };

  // Variantes de animación para las tarjetas - CORREGIDAS
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Variantes para los iconos - CORREGIDAS
  const iconVariants: Variants = {
    hidden: { 
      scale: 0, 
      rotate: -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Variantes para efectos de glow - CORREGIDAS
  const glowVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.3, 0.8],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  return (
    <section id="casos-de-exito" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Fondo animado mejorado */}
      <div className="absolute inset-0 z-0 opacity-15">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <span className="text-yellow-400 font-semibold text-sm">La Evidencia</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Resultados, No Promesas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            El impacto agregado de implementar Superpoderes de IA en empresas que ya dieron el salto.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {finalResults.map((result, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              ref={(el) => { if(el) cardsRef.current[index] = el; }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className="group relative p-6 rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-lg text-center overflow-hidden cursor-pointer"
            >
              {/* Efecto de glow que sigue el mouse */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(${
                    result.color === 'cyan' ? '0, 229, 255' :
                    result.color === 'purple' ? '168, 85, 247' :
                    result.color === 'yellow' ? '234, 179, 8' :
                    '34, 197, 94'
                  }, 0.15), transparent 70%)`,
                }}
              />

              {/* Borde gradiente animado */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `conic-gradient(from 0deg, ${
                      result.color === 'cyan' ? 'rgba(0, 229, 255, 0.5)' :
                      result.color === 'purple' ? 'rgba(168, 85, 247, 0.5)' :
                      result.color === 'yellow' ? 'rgba(234, 179, 8, 0.5)' :
                      'rgba(34, 197, 94, 0.5)'
                    }, transparent, ${
                      result.color === 'cyan' ? 'rgba(0, 229, 255, 0.5)' :
                      result.color === 'purple' ? 'rgba(168, 85, 247, 0.5)' :
                      result.color === 'yellow' ? 'rgba(234, 179, 8, 0.5)' :
                      'rgba(34, 197, 94, 0.5)'
                    })`,
                  }}
                />
                <div className="absolute inset-[2px] rounded-2xl bg-gray-900/90" />
              </div>

              <div className="relative z-10">
                {/* Contenedor del icono con efectos mejorados */}
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="relative w-16 h-16 mx-auto mb-4"
                >
                  {/* Glow pulsante detrás del icono */}
                  <motion.div
                    variants={glowVariants}
                    className={`absolute inset-0 rounded-full blur-xl ${
                      result.color === 'cyan' ? 'bg-cyan-400/30' :
                      result.color === 'purple' ? 'bg-purple-400/30' :
                      result.color === 'yellow' ? 'bg-yellow-400/30' :
                      'bg-green-400/30'
                    }`}
                  />
                  
                  {/* Anillos orbitales */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 rounded-full border border-dotted ${
                      result.color === 'cyan' ? 'border-cyan-400/50' :
                      result.color === 'purple' ? 'border-purple-400/50' :
                      result.color === 'yellow' ? 'border-yellow-400/50' :
                      'border-green-400/50'
                    } group-hover:border-opacity-80 transition-all duration-300`}
                    style={{ transform: 'scale(1.3)' }}
                  />
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 rounded-full border border-dotted ${
                      result.color === 'cyan' ? 'border-cyan-400/30' :
                      result.color === 'purple' ? 'border-purple-400/30' :
                      result.color === 'yellow' ? 'border-yellow-400/30' :
                      'border-green-400/30'
                    } group-hover:border-opacity-60 transition-all duration-300`}
                    style={{ transform: 'scale(1.6)' }}
                  />

                  {/* Contenedor del icono */}
                  <motion.div 
                    whileHover={{ 
                      boxShadow: `0 0 30px ${
                        result.color === 'cyan' ? 'rgba(0, 229, 255, 0.5)' :
                        result.color === 'purple' ? 'rgba(168, 85, 247, 0.5)' :
                        result.color === 'yellow' ? 'rgba(234, 179, 8, 0.5)' :
                        'rgba(34, 197, 94, 0.5)'
                      }`
                    }}
                    className={`relative bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center border-2 ${
                      result.color === 'cyan' ? 'border-cyan-400/20 group-hover:border-cyan-400/60' :
                      result.color === 'purple' ? 'border-purple-400/20 group-hover:border-purple-400/60' :
                      result.color === 'yellow' ? 'border-yellow-400/20 group-hover:border-yellow-400/60' :
                      'border-green-400/20 group-hover:border-green-400/60'
                    } transition-all duration-300`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ rotate: { duration: 0.6 } }}
                    >
                      {result.icon}
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Contador animado */}
                <AnimatedCounter 
                  value={result.finalValue} 
                  prefix={result.prefix} 
                  suffix={result.suffix} 
                  color={result.color} 
                />

                {/* Título y descripción */}
                <motion.h3 
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="text-lg font-semibold text-white mb-1 group-hover:text-opacity-90 transition-all duration-300"
                >
                  {result.label}
                </motion.h3>
                <motion.p 
                  whileHover={{ y: -1 }}
                  className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300"
                >
                  {result.description}
                </motion.p>
              </div>

              {/* Partículas flotantes */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className={`absolute top-1/2 left-1/2 w-1 h-1 rounded-full ${
                      result.color === 'cyan' ? 'bg-cyan-400' :
                      result.color === 'purple' ? 'bg-purple-400' :
                      result.color === 'yellow' ? 'bg-yellow-400' :
                      'bg-green-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de testimonios mejorada */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
        >
             <motion.div 
               whileHover={{ scale: 1.02, y: -5 }}
               className="relative bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 text-center overflow-hidden group"
             >
               {/* Efecto de glow animado en el fondo */}
               <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
               
               {/* Líneas de energía */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <motion.div
                   animate={{ x: ['-100%', '100%'] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                 />
                 <motion.div
                   animate={{ x: ['100%', '-100%'] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
                 />
               </div>

               <div className="relative z-10">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={currentTestimonial}
                     initial={{ opacity: 0, y: 20, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -20, scale: 0.95 }}
                     transition={{ duration: 0.6 }}
                   >
                     <motion.p 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.2 }}
                       className="text-xl md:text-2xl italic text-white mb-6 leading-relaxed"
                     >
                         "{testimonials[currentTestimonial].quote}"
                     </motion.p>
                     <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.4 }}
                     >
                         <motion.div 
                           whileHover={{ scale: 1.05 }}
                           className="font-bold text-white text-lg mb-1"
                         >
                           {testimonials[currentTestimonial].author}
                         </motion.div>
                         <motion.div 
                           whileHover={{ scale: 1.05 }}
                           className="text-cyan-400 font-medium"
                         >
                           {testimonials[currentTestimonial].company}
                         </motion.div>
                     </motion.div>
                   </motion.div>
                 </AnimatePresence>

                 {/* Indicadores de testimonios */}
                 <div className="flex justify-center gap-2 mt-6">
                   {testimonials.map((_, index) => (
                     <motion.button
                       key={index}
                       onClick={() => setCurrentTestimonial(index)}
                       whileHover={{ scale: 1.2 }}
                       whileTap={{ scale: 0.9 }}
                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
                         index === currentTestimonial 
                           ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                           : 'bg-gray-600 hover:bg-gray-500'
                       }`}
                     />
                   ))}
                 </div>
               </div>
             </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResultsShowcase;
