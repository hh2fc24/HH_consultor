'use client';

import { motion } from 'framer-motion';
import { BarChart, Zap, Clock, TrendingUp, Award, Users, DollarSign, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const ResultsShowcase = () => {
  // Estado para el contador animado
  const [animatedValues, setAnimatedValues] = useState({
    cost: 0,
    analysis: 0,
    time: 0,
    cx: 0
  });

  // 1. ESTADO PARA CONTROLAR SI EL COMPONENTE ESTÁ MONTADO EN EL CLIENTE
  const [isMounted, setIsMounted] = useState(false);

  // 2. EFECTO QUE SE EJECUTA SOLO EN EL CLIENTE PARA ACTUALIZAR EL ESTADO
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const finalResults = [
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      value: "45%",
      finalValue: 45,
      label: "Reducción de costos operativos",
      description: "En procesos administrativos mediante IA",
      color: "cyan",
      prefix: "",
      suffix: "%"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      value: "20x",
      finalValue: 20,
      label: "Aceleración de análisis",
      description: "De datos financieros complejos",
      color: "purple",
      prefix: "",
      suffix: "x"
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      value: "30h/sem",
      finalValue: 30,
      label: "Tiempo recuperado",
      description: "Para liderazgo estratégico",
      color: "yellow",
      prefix: "",
      suffix: "h/sem"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      value: "+67%",
      finalValue: 67,
      label: "Mejora en CX",
      description: "Con sistemas de IA predictiva",
      color: "green",
      prefix: "+",
      suffix: "%"
    }
  ];

  // Animación de contadores
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        cost: Math.floor(45 * progress),
        analysis: Math.floor(20 * progress),
        time: Math.floor(30 * progress),
        cx: Math.floor(67 * progress)
      });

      if (currentStep >= steps) {
        setAnimatedValues({ cost: 45, analysis: 20, time: 30, cx: 67 });
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote: "Trabajar con Hugo fue el punto de inflexión para nuestra transformación digital. En 3 meses implementamos soluciones de IA que nos ahorran $20k mensuales.",
      author: "Equipo Directivo Retail Financiero",
      company: "Cencosud Scotiabank",
      metrics: {
        ahorro: "$20k/mes",
        implementación: "3 meses",
        roi: "300%"
      }
    },
    {
      quote: "La metodología de Hugo nos permitió identificar oportunidades que no veíamos. Ahora nuestro equipo es 40% más productivo.",
      author: "Director de Operaciones",
      company: "Tenpo",
      metrics: {
        productividad: "+40%",
        eficiencia: "+60%",
        satisfacción: "95%"
      }
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  return (
    <section id="casos-de-exito" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background inteligente */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/4 left-20 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
        
        {/* Partículas de datos */}
        <div className="absolute inset-0">
          {/* 3. RENDERIZADO CONDICIONAL DE LAS PARTÍCULAS */}
          {isMounted && [...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Encabezado mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Resultados Verificados</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">Transformadores</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Impacto real generado en empresas que implementaron nuestras soluciones de IA
          </p>
        </motion.div>
        
        {/* Métricas principales con visualización mejorada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {finalResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br from-gray-800/60 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center relative overflow-hidden transition-all duration-300 hover:border-${result.color}-400/50 hover:shadow-2xl hover:shadow-${result.color}-500/20`}>
                {/* Efecto "forged in stone" */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${result.color}-500/0 via-${result.color}-500/5 to-${result.color}-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black/30 to-transparent"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-full bg-black/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                    {result.icon}
                  </div>
                  
                  {/* Visualización de progreso circular */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-700"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={`var(--${result.color}-400)`}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: result.finalValue / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        className={`text-${result.color}-400`}
                        style={{
                          strokeDasharray: "251.2",
                          strokeDashoffset: "251.2",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`text-2xl font-bold text-${result.color}-400 transition-all duration-300 group-hover:scale-110`}>
                        {result.prefix}
                        {index === 0 ? animatedValues.cost :
                         index === 1 ? animatedValues.analysis :
                         index === 2 ? animatedValues.time :
                         animatedValues.cx}
                        {result.suffix}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {result.label}
                  </h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {result.description}
                  </p>
                </div>
                
                {/* Barra de progreso inferior */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={`h-full bg-gradient-to-r from-${result.color}-500 to-${result.color}-400`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Casos de éxito con carrusel interactivo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Casos de <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Éxito Destacados</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Descubre cómo nuestras soluciones de IA han transformado empresas reales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Atlas IA para Inmobiliarias */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Atlas IA para Inmobiliarias</h4>
                    <p className="text-cyan-400 text-sm">Automatización Inteligente</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Tu asistente inmobiliario que automatiza fichas de propiedades mientras atiendes clientes. 
                  Integración completa con CRM y análisis de mercado en tiempo real.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">+40%</div>
                    <div className="text-xs text-gray-400">Eficiencia</div>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">300%</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">2h/día</div>
                    <div className="text-xs text-gray-400">Ahorradas</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Automatización de fichas</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Análisis de mercado</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">CRM integrado</span>
                </div>
              </div>
            </motion.div>

            {/* Asistente Dental IA */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Asistente Dental IA</h4>
                    <p className="text-purple-400 text-sm">Salud Digital</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Crea fichas clínicas automáticamente mientras examinas pacientes. 
                  Diagnóstico asistido y seguimiento inteligente de tratamientos.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">+60%</div>
                    <div className="text-xs text-gray-400">Eficiencia</div>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">250%</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">10h/sem</div>
                    <div className="text-xs text-gray-400">Ahorradas</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Fichas automáticas</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Diagnóstico asistido</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Seguimiento pacientes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonios rotativos mejorados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 relative overflow-hidden">
            <div className="flex justify-center gap-2 mb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <p className="text-lg md:text-xl italic text-white mb-6 leading-relaxed">
                    “{testimonials[currentTestimonial].quote}”
                  </p>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="text-center lg:text-left">
                      <div className="font-bold text-white text-lg">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-cyan-400 font-medium">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    <div className="flex gap-4 justify-center lg:justify-end">
                      {Object.entries(testimonials[currentTestimonial].metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-black/20 rounded-lg">
                          <div className="text-xl font-bold text-purple-400">{value as React.ReactNode}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sección de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl border border-white/10">
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Empresas transformadas</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl border border-white/10">
              <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2">$2M+</div>
              <div className="text-gray-400 text-sm">Ahorros generados</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl border border-white/10">
              <Target className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm">Tasa de éxito</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ResultsShowcase;