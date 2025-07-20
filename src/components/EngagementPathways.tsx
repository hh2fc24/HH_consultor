'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
    Users, Award, ArrowRight, Sparkles, X, Video, BookOpen, 
    MessageSquare, Zap, Calendar, LockKeyhole, Building, 
    BrainCircuit, CheckCircle, Star, TrendingUp, Shield
} from 'lucide-react';

// Interfaces TypeScript
interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MousePosition {
  x: number;
  y: number;
}

// Componente Modal Mejorado
const ClubModal: React.FC<ClubModalProps> = ({ isOpen, onClose }) => {
  const benefits: Benefit[] = [
    { 
      icon: <Video className="w-6 h-6 text-purple-400" />, 
      title: "Masterclasses Exclusivas", 
      description: "Sesiones en vivo con casos reales de implementación de IA" 
    },
    { 
      icon: <BookOpen className="w-6 h-6 text-purple-400" />, 
      title: "Biblioteca de Recursos", 
      description: "Guías, plantillas y frameworks para acelerar tu aprendizaje" 
    },
    { 
      icon: <Users className="w-6 h-6 text-purple-400" />, 
      title: "Comunidad Privada", 
      description: "Red de profesionales donde resolver dudas y compartir avances" 
    },
    { 
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />, 
      title: "Mentoría Colectiva", 
      description: "Sesiones grupales de Q&A para desbloquear tus proyectos" 
    },
    { 
      icon: <Zap className="w-6 h-6 text-purple-400" />, 
      title: "Desafíos Prácticos", 
      description: "Ejercicios para aplicar IA en tu contexto profesional real" 
    },
    { 
      icon: <Calendar className="w-6 h-6 text-purple-400" />, 
      title: "Eventos VIP", 
      description: "Acceso prioritario a talleres y lanzamientos exclusivos" 
    }
  ];

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const benefitVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 300,
        damping: 25
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-purple-500/20 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl shadow-2xl shadow-purple-500/10"
          >
            {/* Header del Modal */}
            <div className="relative p-8 pb-6">
              <button 
                onClick={onClose} 
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-full">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm">Membresía Exclusiva</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-3">Altius Ignite Club</h2>
                <p className="text-xl text-purple-300 font-medium">Tu Ecosistema de Aprendizaje Continuo en IA</p>
              </div>

              {/* Contenido Principal */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Descripción */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                      ¿Por qué unirte?
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      La IA evoluciona a diario. El Club es tu acceso directo y constante a conocimiento curado, 
                      implementaciones reales y una red de profesionales con tus mismos desafíos.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-purple-500/10">
                        <Shield className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Contenido Premium Actualizado</h4>
                          <p className="text-gray-300 text-sm">Acceso semanal a implementaciones reales antes que el mercado.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-purple-500/10">
                        <Users className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Red de Profesionales Elite</h4>
                          <p className="text-gray-300 text-sm">Conecta con líderes de IA de empresas Fortune 500.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Card */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center gap-2 mb-3 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                        <Award className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold text-xs">OFERTA LIMITADA</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">Membresía Mensual</p>
                      <div className="mb-4">
                        <span className="text-5xl font-bold text-white">$10</span>
                        <span className="text-xl text-gray-400">/mes</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-6">Cancela en cualquier momento</p>
                      <motion.a 
                        href="/club/inscripcion" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="block w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                      >
                        Unirme Ahora
                      </motion.a>
                      <p className="text-xs text-gray-400 mt-3">✓ Garantía de 30 días</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beneficios Grid */}
              <div>
                <h3 className="text-2xl font-bold text-white text-center mb-8">
                  Qué Incluye Tu Membresía
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      custom={index}
                      variants={benefitVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 group"
                    >
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-white mb-2 text-lg">{benefit.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Componente Principal Mejorado
const EngagementPathways: React.FC = () => {
  const [isClubModalOpen, setIsClubModalOpen] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number): void => {
    const card = cardsRef.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      setMousePosition({ x, y });
    }
  };

  // Variants para animaciones
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const theme = { 
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    purpleGradient: 'bg-gradient-to-r from-purple-500 to-indigo-500'
  };

  return (
    <>
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Fondo mejorado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header mejorado */}
            <motion.div
              variants={cardVariants}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm">Tu Siguiente Nivel</span>
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                ¿Buscas transformar tu empresa
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  o potenciar tus habilidades?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                He creado dos caminos distintos, uno para los <span className="text-cyan-400 font-semibold">arquitectos de negocios</span> y otro para los <span className="text-purple-400 font-semibold">pioneros de la IA</span>. Elige tu identidad.
              </p>

              {/* Métricas de credibilidad */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">+500</div>
                  <div className="text-sm text-gray-400">Empresas Transformadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-400">Satisfacción Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-400">Soporte Premium</div>
                </div>
              </div>
            </motion.div>

            {/* Cards Grid Mejorado */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              
              {/* Opción 1: Alianza Estratégica (DOMINANTE) */}
              <motion.div
                variants={cardVariants}
                className="lg:col-span-3 group relative rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl overflow-hidden"
                ref={(el) => { cardsRef.current[0] = el; }}
                onMouseMove={(e) => handleMouseMove(e, 0)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                  style={{ 
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 229, 255, 0.15), transparent 80%)`
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10 p-8 lg:p-10">
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-full">
                    <Building className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-bold text-sm">PARA ARQUITECTOS DE NEGOCIOS</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-6 mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center"
                    >
                      <Building className="w-8 h-8 text-cyan-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">Alianza Estratégica</h3>
                      <p className="text-cyan-400 font-semibold text-lg">Transformación End-to-End</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Nos enfocamos en el <span className="text-white font-semibold">resultado de negocio</span>, no en la tecnología. 
                    Co-creamos una solución a medida para generar un <span className="text-cyan-400 font-semibold">ROI medible</span> y transformar tu operación.
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Soluciones a Medida</h4>
                        <p className="text-gray-300 text-sm">Diseñamos un "Copilot" específico para tu ROI y objetivos únicos.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Implementación End-to-End</h4>
                        <p className="text-gray-300 text-sm">Nos encargamos de todo, del diagnóstico al despliegue y adopción.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Empoderamiento de tu Equipo</h4>
                        <p className="text-gray-300 text-sm">Garantizamos la adopción y el éxito a largo plazo con formación incluida.</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a 
                    href="#contacto" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 ${theme.gradient} text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 text-lg`}
                  >
                    <span>Agendar Consulta Estratégica</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Opción 2: Altius Ignite Club (SECUNDARIA) */}
              <motion.div
                variants={cardVariants}
                className="lg:col-span-2 group relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl overflow-hidden"
                ref={(el) => { cardsRef.current[1] = el; }}
                onMouseMove={(e) => handleMouseMove(e, 1)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                  style={{ 
                    background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.15), transparent 80%)`
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10 p-8">
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full">
                    <BrainCircuit className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-400 font-bold text-sm">PARA PIONEROS DE IA</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center"
                    >
                      <BrainCircuit className="w-7 h-7 text-purple-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">Altius Ignite Club</h3>
                      <p className="text-purple-400 font-semibold">Comunidad Elite</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Nos enfocamos en la <span className="text-white font-semibold">habilidad y la comunidad</span>. 
                    Te unes a una red de vanguardia para dominar la IA por ti mismo y mantenerte siempre relevante.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg border border-purple-500/10">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold text-sm">Aprendizaje Continuo</h4>
                        <p className="text-gray-400 text-xs">Masterclasses y recursos actualizados semanalmente.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg border border-purple-500/10">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold text-sm">Red de Contactos Elite</h4>
                        <p className="text-gray-400 text-xs">Conecta con otros profesionales y pioneros de IA.</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button 
                    onClick={() => setIsClubModalOpen(true)} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-white font-bold rounded-xl hover:from-purple-500/30 hover:to-indigo-500/30 transition-all duration-300"
                  >
                    <span>Ver Beneficios del Club</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <ClubModal isOpen={isClubModalOpen} onClose={() => setIsClubModalOpen(false)} />
    </>
  );
};

export default EngagementPathways;
