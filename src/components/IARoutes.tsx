'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
    Sparkles, User, Users, Building2, TrendingUp, Award, Zap, Target, ArrowRight,
    X, Video, BookOpen, MessageSquare, Calendar, BrainCircuit,
    CheckCircle, Shield, Play, Lightbulb, AlertTriangle, Rocket, Eye
} from 'lucide-react';

// --- INTERFACES Y TIPOS ---
interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ClubModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// --- COMPONENTE MODAL DEL CLUB (INTEGRADO Y COMPLETO) ---
const ClubModal: React.FC<ClubModalProps> = ({ isOpen, onClose }) => {
    const benefits: Benefit[] = [
        { icon: <Video className="w-6 h-6 text-purple-400" />, title: "Masterclasses Exclusivas", description: "Sesiones en vivo con casos reales de implementación de IA" },
        { icon: <BookOpen className="w-6 h-6 text-purple-400" />, title: "Biblioteca de Recursos", description: "Guías, plantillas y frameworks para acelerar tu aprendizaje" },
        { icon: <Users className="w-6 h-6 text-purple-400" />, title: "Comunidad Privada", description: "Red de profesionales donde resolver dudas y compartir avances" },
        { icon: <MessageSquare className="w-6 h-6 text-purple-400" />, title: "Mentoría Colectiva", description: "Sesiones grupales de Q&A para desbloquear tus proyectos" },
        { icon: <Zap className="w-6 h-6 text-purple-400" />, title: "Desafíos Prácticos", description: "Ejercicios para aplicar IA en tu contexto profesional real" },
        { icon: <Calendar className="w-6 h-6 text-purple-400" />, title: "Eventos VIP", description: "Acceso prioritario a talleres y lanzamientos exclusivos" }
    ];

    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
        exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }
    };

    const benefitVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 25 }
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
                         <div className="relative p-8 pb-6">
                            <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full p-2">
                                <X className="w-6 h-6" />
                            </button>
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-full">
                                    <Award className="w-5 h-5 text-purple-400" />
                                    <span className="text-purple-400 font-semibold text-sm">Membresía Exclusiva</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-3">Altius Ignite Club</h2>
                                <p className="text-lg text-purple-300 font-medium">Tu Ecosistema de Aprendizaje Continuo en IA</p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                                <div className="lg:col-span-2 space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                            <TrendingUp className="w-6 h-6 text-purple-400" />¿Por qué unirte?
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            La IA evoluciona a diario. El Club es tu acceso directo y constante a conocimiento curado, implementaciones reales y una red de profesionales con tus mismos desafíos.
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
                                                    <p className="text-gray-300 text-sm">Conecta con líderes de IA de empresas en Chile, Brasil y Bolivia.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-1">
                                    <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl p-6 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                                        <div className="relative z-10">
                                            <div className="inline-flex items-center justify-center gap-2 mb-3 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                                                <Award className="w-4 h-4 text-purple-400" /><span className="text-purple-400 font-semibold text-xs">OFERTA LIMITADA</span>
                                            </div>
                                            <p className="text-gray-400 text-sm mb-2">Membresía Mensual</p>
                                            <div className="mb-4">
                                                <span className="text-4xl font-bold text-white">$10</span><span className="text-lg text-gray-400">/mes</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mb-6">Cancela en cualquier momento</p>
                                            <motion.a href="/club/inscripcion" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="block w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300">
                                                Unirme Ahora
                                            </motion.a>
                                            <p className="text-xs text-gray-400 mt-3">✓ Garantía de 30 días</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white text-center mb-8">Qué Incluye Tu Membresía</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {benefits.map((benefit, index) => (
                                        <motion.div key={benefit.title} custom={index} variants={benefitVariants} initial="hidden" animate="visible" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 group">
                                            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                                            <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
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


// --- COMPONENTE PRINCIPAL FUSIONADO: IARoutes ---
const IARoutes: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isClubModalOpen, setIsClubModalOpen] = useState<boolean>(false);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number): void => {
        const card = cardsRef.current[index];
        if (card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    // --- DATOS DE LOS COMPONENTES ---
    const theme = {
        gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
        textGradient: 'from-cyan-400 to-indigo-500',
        purpleGradient: 'bg-gradient-to-r from-purple-500 to-indigo-500',
        greenGradient: 'bg-gradient-to-r from-green-400 to-cyan-500',
    };

    const targetAudiences = [
        { 
            icon: <User className="w-8 h-8 text-cyan-400" />, 
            title: "Personas que quieren automatizar su trabajo", 
            subtitle: "Para personas", 
            description: "Pasas horas en tareas repetitivas que podrían hacerse automáticamente. Sabes que la IA podría ayudarte, pero no sabes por dónde empezar.",
            painPoint: "Pierdes 15 horas semanales en tareas que la IA podría hacer por ti",
            solution: "Te enseñamos a usar IA práctica desde cero para automatizar tareas, crear contenido y organizar tu trabajo sin conocimientos técnicos.", 
            benefit: "Recupera 10+ horas semanales", 
            color: "cyan" 
        },
        { 
            icon: <Users className="w-8 h-8 text-purple-400" />, 
            title: "Equipos que necesitan ser más productivos", 
            subtitle: "Para equipos", 
            description: "Tu equipo está saturado con trabajo manual. Las tareas operativas consumen tiempo que podrían dedicar a actividades estratégicas.",
            painPoint: "85% del tiempo se va en tareas que no generan valor real",
            solution: "Implementamos talleres prácticos donde tu equipo aprende a automatizar procesos, crear contenido y mejorar la eficiencia operativa.", 
            benefit: "85% más productividad", 
            color: "purple" 
        },
        { 
            icon: <Building2 className="w-8 h-8 text-amber-400" />, 
            title: "Empresas que quieren crecer con IA", 
            subtitle: "Para empresas", 
            description: "Tu empresa necesita crecer pero los recursos son limitados. La competencia ya está usando IA y no puedes quedarte atrás.",
            painPoint: "Tus competidores ya están 2 años adelante en IA",
            solution: "Diseñamos e implementamos soluciones de IA personalizadas para automatizar procesos y mejorar la experiencia del cliente.", 
            benefit: "300% ROI en 6 meses", 
            color: "amber" 
        }
    ];

    const caseStudies = [
        { 
            icon: <Building2 className="w-8 h-8 text-cyan-400" />, 
            title: "Atlas Inmobiliario", 
            description: "Automatizaron la creación de fichas de propiedades y gestión de leads, liberando tiempo para enfocarse en cerrar ventas.", 
            video: "/1.mp4", 
            metrics: [
                { value: "3 horas", label: "Ahorradas diarias" }, 
                { value: "40%", label: "Más ventas" }, 
                { value: "2 meses", label: "ROI recuperado" }
            ], 
            color: "cyan" 
        },
        { 
            icon: <Sparkles className="w-8 h-8 text-purple-400" />, 
            title: "Copilot Dental", 
            description: "Implementaron historias clínicas por voz durante consultas, dedicando 100% de atención al paciente.", 
            video: "/2.mp4", 
            metrics: [
                { value: "2 horas", label: "Ahorradas diarias" }, 
                { value: "98%", label: "Satisfacción" }, 
                { value: "30%", label: "Más citas" }
            ], 
            color: "purple" 
        },
        { 
            icon: <Zap className="w-8 h-8 text-yellow-400" />, 
            title: "Manejo de Promt para lograrlo todo", 
            description: "Capacitaron a su equipo para crear soluciones con IA sin programar, transformando completamente su cultura de trabajo.", 
            video: "/3.mp4", 
            metrics: [
                { value: "10 horas", label: "Ahorradas" }, 
                { value: "92%", label: "Confianza" }, 
                { value: "200%", label: "Productividad" }
            ], 
            color: "yellow" 
        }
    ];

    // --- VARIANTES DE ANIMACIÓN ---
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <>
            <section className="py-24 bg-black relative overflow-hidden">
                {/* --- FONDO DECORATIVO --- */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="max-w-7xl mx-auto"
                    >
                        {/* --- 1. SHOCK: ¿Por qué esto importa ahora? --- */}
                        <motion.div variants={cardVariants} className="text-center mb-20">
                            <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full">
                                <AlertTriangle className="w-5 h-5 text-red-400" />
                                <span className="text-red-400 font-semibold text-sm">URGENTE: La brecha se agranda cada día</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Mientras lees esto, alguien<br />
                                <span className={`bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>ya automatizó tu trabajo</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                                <span className="text-red-400 font-semibold">73% de las empresas</span> ya están usando IA para tareas que tú sigues haciendo manualmente. 
                                <span className="text-white font-semibold"> Cada día que pasa, la distancia se hace mayor.</span>
                            </p>
                            <div className="flex flex-wrap justify-center gap-8 mt-12">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-red-400">15 horas</div>
                                    <div className="text-sm text-gray-400">Pierdes por semana</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-red-400">73%</div>
                                    <div className="text-sm text-gray-400">Ya usa IA</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-red-400">2 años</div>
                                    <div className="text-sm text-gray-400">Te llevan de ventaja</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* --- 2. ILUMINACIÓN: ¿Qué puede lograr la IA por mí? (SECCIÓN DE VIDEOS RESTAURADA) --- */}
                        <motion.div variants={cardVariants} className="text-center mb-16">
                            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-full">
                                <Eye className="w-5 h-5 text-cyan-400" />
                                <span className="text-cyan-400 font-semibold text-sm">La Transformación Real</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Imagínate recuperando <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">15 horas cada semana</span>
                            </h3>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                                Estos son ejemplos reales de personas y empresas que ya transformaron su forma de trabajar.
                            </p>
                        </motion.div>

                        {/* Casos de Éxito - Antes y Después (SECCIÓN DE VIDEOS RESTAURADA) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                            {caseStudies.map((study, index) => (
                                <motion.div key={index} variants={cardVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="group relative rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10">
                                    <div className="relative min-h-[200px] overflow-hidden">
                                        <video src={study.video} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span className="text-green-400 font-semibold text-xs">CASO REAL</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${study.color}-500/10 border border-${study.color}-500/20 flex items-center justify-center`}>{study.icon}</div>
                                            <div><h4 className="text-xl font-bold text-white">{study.title}</h4></div>
                                        </div>
                                        <p className="text-gray-300 text-sm mb-6 min-h-[60px] leading-relaxed">{study.description}</p>
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            {study.metrics.map((metric) => (
                                                <div key={metric.label} className="p-2 bg-black/20 rounded-lg border border-white/5">
                                                    <div className={`text-2xl font-bold text-${study.color}-400`}>{metric.value}</div>
                                                    <div className="text-xs text-gray-400">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* --- 3. ELECCIÓN GUIADA: ¿Qué camino debo tomar? --- */}
                        <motion.div variants={cardVariants} className="text-center mb-20">
                            <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-full">
                                <Target className="w-5 h-5 text-purple-400" />
                                <span className="text-purple-400 font-semibold text-sm">Encuentra Tu Camino</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                ¿Cuál es tu situación actual?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                                Cada persona y empresa tiene necesidades diferentes. Identifica tu perfil para encontrar la solución perfecta.
                            </p>
                        </motion.div>

                        {/* Cards de Segmentación con CTA */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                            {targetAudiences.map((audience, index) => (
                                <motion.div key={index} variants={cardVariants} className="relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <motion.div
                                        animate={{ scale: hoveredIndex === index ? 1.02 : 1, y: hoveredIndex === index ? -8 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className={`h-full w-full rounded-2xl border transition-all duration-500 ${hoveredIndex === index ? `border-${audience.color}-400/50 shadow-2xl shadow-${audience.color}-500/20` : 'border-white/10 shadow-xl shadow-black/20'}`}
                                    >
                                        <div className="h-full w-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col">
                                            <div className="flex-grow">
                                                <div className="flex items-start gap-4 mb-6">
                                                    <motion.div animate={{ scale: hoveredIndex === index ? 1.1 : 1, rotate: hoveredIndex === index ? 5 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className={`flex-shrink-0 w-16 h-16 rounded-xl bg-${audience.color}-500/10 border border-${audience.color}-500/20 flex items-center justify-center`}>
                                                        {audience.icon}
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <span className={`text-xs font-bold text-${audience.color}-400 bg-${audience.color}-400/10 px-3 py-1 rounded-full`}>{audience.subtitle}</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white leading-tight mb-4">{audience.title}</h3>
                                                <p className="text-gray-300 leading-relaxed mb-6">{audience.description}</p>
                                                
                                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <AlertTriangle className="w-4 h-4 text-red-400" />
                                                        <span className="text-red-400 font-semibold text-sm">Tu realidad actual:</span>
                                                    </div>
                                                    <p className="text-sm text-gray-200">{audience.painPoint}</p>
                                                </div>

                                                <div className="mb-6 p-4 bg-black/30 rounded-lg border border-white/10">
                                                    <p className="text-sm text-gray-300 mb-3"><span className="text-cyan-400 font-semibold">Lo que puedes lograr:</span></p>
                                                    <p className="text-sm text-gray-200 leading-relaxed">{audience.solution}</p>
                                                </div>
                                            </div>

                                            {/* ===== MEJORA: AÑADIDO CTA Y PUENTE NARRATIVO ===== */}
                                            <motion.a 
                                                href="#soluciones"
                                                whileHover={{ scale: 1.05 }} 
                                                whileTap={{ scale: 0.95 }}
                                                className={`mt-auto inline-flex items-center justify-center gap-3 w-full py-3 bg-${audience.color}-500/10 border border-${audience.color}-400/30 text-${audience.color}-400 font-bold rounded-xl hover:bg-${audience.color}-500/20 transition-all duration-300`}
                                            >
                                                <span>Descubre tu Plan de Acción</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* --- 4. CTA ESTRATÉGICO: ¿Y ahora qué? --- */}
                        <motion.div variants={cardVariants} id="soluciones" className="text-center mb-20 scroll-mt-24">
                            <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-full">
                                <Rocket className="w-5 h-5 text-green-400" />
                                <span className="text-green-400 font-semibold text-sm">Es Hora de Actuar</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Elige tu nivel de <br />
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">transformación</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                                Desde automatizar tu primera tarea hasta transformar completamente tu empresa. 
                                <span className="text-white font-semibold"> El momento de empezar es ahora.</span>
                            </p>
                        </motion.div>

                        {/* ===== MEJORA: DISTRIBUCIÓN SIMÉTRICA DE BLOQUES ===== */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
                            {/* IA Starter (4 columnas) */}
                            <motion.div variants={cardVariants} ref={(el) => { cardsRef.current[0] = el; }} onMouseMove={(e) => handleMouseMove(e, 0)} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="lg:col-span-4 group relative rounded-3xl border border-green-500/20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl overflow-hidden">
                                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(34, 197, 94, 0.15), transparent 80%)` }} />
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl"></div>
                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full self-start">
                                        <Play className="w-5 h-5 text-green-400" />
                                        <span className="text-green-400 font-bold text-sm">EMPEZAR AHORA</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30 flex items-center justify-center">
                                            <Lightbulb className="w-7 h-7 text-green-400" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">IA Starter</h3>
                                            <p className="text-green-400 font-semibold">Tu Primera Automatización</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                                        Perfecto si nunca has usado IA. En <span className="text-white font-semibold">2 horas</span> implementas tu primera automatización y ves resultados inmediatos.
                                    </p>
                                    <motion.a href="https://wa.me/59177028880" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`inline-flex items-center justify-center gap-3 w-full py-4 ${theme.greenGradient} text-white font-bold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 mt-auto`}>
                                        <span>Comenzar Ahora</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Alianza Estratégica (4 columnas) */}
                            <motion.div variants={cardVariants} ref={(el) => { cardsRef.current[1] = el; }} onMouseMove={(e) => handleMouseMove(e, 1)} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="lg:col-span-4 group relative rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl overflow-hidden">
                                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 229, 255, 0.15), transparent 80%)` }} />
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl"></div>
                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-full self-start">
                                        <Building2 className="w-5 h-5 text-cyan-400" />
                                        <span className="text-cyan-400 font-bold text-sm">TRANSFORMACIÓN TOTAL</span>
                                    </div>
                                    <div className="flex items-center gap-6 mb-6">
                                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center">
                                            <Building2 className="w-8 h-8 text-cyan-400" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2">Alianza Estratégica</h3>
                                            <p className="text-cyan-400 font-semibold text-lg">Transformación End-to-End</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                                        Nos enfocamos en el <span className="text-white font-semibold">resultado de negocio</span>, no en la tecnología. Co-creamos una solución a medida para generar un <span className="text-cyan-400 font-semibold">ROI medible</span>.
                                    </p>
                                    <motion.a href="#contacto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`inline-flex items-center justify-center gap-3 px-8 py-4 ${theme.gradient} text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 text-lg mt-auto`}>
                                        <span>Agendar Consulta Estratégica</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Ignite Club (4 columnas) */}
                            <motion.div variants={cardVariants} ref={(el) => { cardsRef.current[2] = el; }} onMouseMove={(e) => handleMouseMove(e, 2)} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="lg:col-span-4 group relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl overflow-hidden">
                                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.15), transparent 80%)` }} />
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl"></div>
                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full self-start">
                                        <BrainCircuit className="w-5 h-5 text-purple-400" />
                                        <span className="text-purple-400 font-bold text-sm">APRENDIZAJE CONTINUO</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center">
                                            <BrainCircuit className="w-7 h-7 text-purple-400" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">Ignite Club</h3>
                                            <p className="text-purple-400 font-semibold">Comunidad Elite</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                                        Red de vanguardia para dominar la IA por ti mismo y mantenerte siempre relevante.
                                    </p>
                                    <motion.button onClick={() => setIsClubModalOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-white font-bold rounded-xl hover:from-purple-500/30 hover:to-indigo-500/30 transition-all duration-300 mt-auto">
                                        <span>Ver Beneficios</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 5. RENDERIZADO DEL MODAL --- */}
            <ClubModal isOpen={isClubModalOpen} onClose={() => setIsClubModalOpen(false)} />
        </>
    );
};

export default IARoutes;