
// src/components/EngagementPathways.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, Award, ArrowRight, Sparkles, X, Video, BookOpen, 
    MessageSquare, Zap, Calendar, LockKeyhole, Building, 
    BrainCircuit, CheckCircle 
} from 'lucide-react';

// --- Componente Modal (sin cambios) ---
const ClubModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
  const benefits = [
    { icon: <Video className="w-6 h-6 text-cyan-400" />, title: "Masterclasses Exclusivas", description: "Sesiones en vivo con casos reales de implementación de IA" },
    { icon: <BookOpen className="w-6 h-6 text-cyan-400" />, title: "Biblioteca de Recursos", description: "Guías, plantillas y frameworks para acelerar tu aprendizaje" },
    { icon: <Users className="w-6 h-6 text-cyan-400" />, title: "Comunidad Privada", description: "Red de profesionales donde resolver dudas y compartir avances" },
    { icon: <MessageSquare className="w-6 h-6 text-cyan-400" />, title: "Mentoría Colectiva", description: "Sesiones grupales de Q&A para desbloquear tus proyectos" },
    { icon: <Zap className="w-6 h-6 text-cyan-400" />, title: "Desafíos Prácticos", description: "Ejercicios para aplicar IA en tu contexto profesional real" },
    { icon: <Calendar className="w-6 h-6 text-cyan-400" />, title: "Eventos VIP", description: "Acceso prioritario a talleres y lanzamientos exclusivos" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gray-900 border border-cyan-500/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Altius Ignite Club</h2>
              <p className="text-lg text-cyan-300">Tu Ecosistema de Aprendizaje Continuo en IA</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">¿Por qué unirte?</h3>
                    <p className="text-gray-300 mb-4">La IA evoluciona a diario. El Club es tu acceso directo y constante a conocimiento curado, implementaciones reales y una red de profesionales con tus mismos desafíos.</p>
                     <ul className="space-y-2">
                        <li className="flex items-start gap-3"><LockKeyhole className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" /><span className="text-white">Contenido premium actualizado semanalmente.</span></li>
                        <li className="flex items-start gap-3"><LockKeyhole className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" /><span className="text-white">Implementaciones reales antes que el mercado.</span></li>
                    </ul>
                </div>
                <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6 text-center">
                    <p className="text-gray-400">Membresía Exclusiva</p>
                    <p className="text-5xl font-bold text-cyan-400 my-2">$10<span className="text-2xl text-gray-400">/mes</span></p>
                    <p className="text-xs text-gray-500 mb-4">Cancela en cualquier momento</p>
                    <motion.a href="/club/inscripcion" whileHover={{ scale: 1.05 }} className="block w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-lg">Unirme Ahora</motion.a>
                </div>
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-6">Qué Incluye Tu Membresía</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map(b => (
                    <div key={b.title} className="bg-gray-800/50 p-4 rounded-lg border border-white/10">
                        {b.icon}
                        <h4 className="font-semibold text-white mt-2 mb-1">{b.title}</h4>
                        <p className="text-xs text-gray-400">{b.description}</p>
                    </div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// --- Componente Principal Re-Ingenierizado ---
const EngagementPathways = () => {
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
  
  const theme = { gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500' };

  return (
    <>
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm">Tu Siguiente Nivel</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              ¿Buscas transformar tu empresa o potenciar tus habilidades?
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              He creado dos caminos distintos, uno para los arquitectos de negocios y otro para los pioneros de la IA. Elige tu identidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
            
            {/* --- Opción 1: Alianza Estratégica (DOMINANTE) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 group relative rounded-2xl border border-white/10 bg-gray-900/60 p-8"
              ref={(el) => { cardsRef.current[0] = el; }}
              onMouseMove={(e) => handleMouseMove(e, 0)}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 229, 255, 0.15), transparent 80%)`}}/>
              <div className="relative z-10">
                <p className="font-semibold text-cyan-400 mb-4">PARA ARQUITECTOS DE NEGOCIOS</p>
                <div className="flex items-center gap-4 mb-4">
                  <Building className="w-10 h-10 text-white" />
                  <h3 className="text-3xl font-bold text-white">Alianza Estratégica</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Nos enfocamos en el resultado de negocio, no en la tecnología. Co-creamos una solución a medida para generar un ROI medible y transformar tu operación.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" /><div><strong className="text-white">Soluciones a Medida:</strong> Diseñamos un "Copilot" específico para tu ROI.</div></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" /><div><strong className="text-white">Implementación End-to-End:</strong> Nos encargamos de todo, del diagnóstico al despliegue.</div></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" /><div><strong className="text-white">Empoderamiento de tu Equipo:</strong> Garantizamos la adopción y el éxito a largo plazo.</div></li>
                </ul>
                <motion.a href="#contacto" whileHover={{ scale: 1.05 }} className={`inline-flex items-center justify-center gap-2 px-8 py-3 ${theme.gradient} text-white font-bold rounded-lg transition-transform`}>
                  <span>Agendar Consulta Estratégica</span><ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* --- Opción 2: Altius Ignite Club (SECUNDARIA) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-2 group relative rounded-2xl border border-white/10 bg-gray-900/60 p-8"
              ref={(el) => { cardsRef.current[1] = el; }}
              onMouseMove={(e) => handleMouseMove(e, 1)}
            >
               <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(124, 58, 237, 0.1), transparent 80%)`}}/>
              <div className="relative z-10">
                <p className="font-semibold text-purple-400 mb-4">PARA PIONEROS DE IA</p>
                <div className="flex items-center gap-4 mb-4">
                  <BrainCircuit className="w-10 h-10 text-white" />
                  <h3 className="text-3xl font-bold text-white">Altius Ignite Club</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Nos enfocamos en la habilidad y la comunidad. Te unes a una red de vanguardia para dominar la IA por ti mismo y mantenerte siempre relevante.
                </p>
                 <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" /><div><strong className="text-white">Aprendizaje Continuo:</strong> Masterclasses y recursos actualizados.</div></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" /><div><strong className="text-white">Red de Contactos:</strong> Conecta con otros profesionales y pioneros.</div></li>
                 </ul>
                <motion.button onClick={() => setIsClubModalOpen(true)} whileHover={{ scale: 1.05 }} className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white/10 border border-white/20 text-white font-bold rounded-lg transition-transform hover:bg-white/20">
                  <span>Ver Beneficios del Club</span><ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ClubModal isOpen={isClubModalOpen} onClose={() => setIsClubModalOpen(false)} />
    </>
  );
};

export default EngagementPathways;
