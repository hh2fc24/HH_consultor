
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Workflow, ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';
import { useChatStore } from '@/store/chatStore'; // << 1. IMPORTACIÓN DEL STORE

// Asegúrate que la ruta a tus iconos es correcta
import {
  CaptureIcon, AIAnalysisIcon, SegmentationIcon, ResponseIcon, CRMIcon,
  DocumentIcon, OCRIcon, ValidationIcon, ClassificationIcon, NotificationIcon,
  QueryIcon, UnderstandingIcon, SearchIcon, InsightIcon, EscalationIcon,
  MakeIcon, ZapierIcon, N8nIcon, OpenAIIcon, ChatGPTIcon, ClaudeIcon
} from './svg-icons'; 

const AutomationShowcase = () => {
  const { openChat } = useChatStore(); // << 2. USO DEL HOOK
  const [activeFlow, setActiveFlow] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const theme = {
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    textGradient: 'from-cyan-400 to-indigo-500',
  };

  const automationFlows = [
    {
      title: "Captura de Leads con IA",
      description: "Automatización completa desde el primer contacto hasta la conversión.",
      tools: ["Make", "ChatGPT", "CRM"],
      steps: [
        { name: "Captura", icon: CaptureIcon, description: "Lead llega por formulario web" },
        { name: "Análisis IA", icon: AIAnalysisIcon, description: "IA analiza perfil y necesidades" },
        { name: "Segmentación", icon: SegmentationIcon, description: "Clasifica automáticamente" },
        { name: "Respuesta", icon: ResponseIcon, description: "Email personalizado instantáneo" },
        { name: "CRM", icon: CRMIcon, description: "Registro automático en sistema" }
      ],
    },
    {
      title: "Procesamiento Inteligente de Documentos",
      description: "Extrae, analiza y organiza datos de cualquier documento sin intervención manual.",
      tools: ["Zapier", "OpenAI", "Google Sheets"],
      steps: [
        { name: "Recepción", icon: DocumentIcon, description: "Documento llega por email" },
        { name: "OCR + IA", icon: OCRIcon, description: "Extrae y analiza contenido" },
        { name: "Validación", icon: ValidationIcon, description: "Verifica datos automáticamente" },
        { name: "Clasificación", icon: ClassificationIcon, description: "Organiza por categorías" },
        { name: "Notificación", icon: NotificationIcon, description: "Alerta al equipo responsable" }
      ],
    },
    {
      title: "Soporte al Cliente 24/7 con IA",
      description: "Ofrece respuestas instantáneas y precisas a tus clientes, a cualquier hora.",
      tools: ["n8n", "WhatsApp API", "Knowledge Base"],
      steps: [
        { name: "Consulta", icon: QueryIcon, description: "Cliente envía mensaje" },
        { name: "Comprensión", icon: UnderstandingIcon, description: "IA entiende la intención" },
        { name: "Búsqueda", icon: SearchIcon, description: "Consulta base de conocimiento" },
        { name: "Respuesta", icon: InsightIcon, description: "Genera respuesta personalizada" },
        { name: "Escalación", icon: EscalationIcon, description: "Deriva a humano si es necesario" }
      ],
    }
  ];

  const tools = [
    { name: "Make", icon: MakeIcon },
    { name: "Zapier", icon: ZapierIcon },
    { name: "n8n", icon: N8nIcon },
    { name: "OpenAI", icon: OpenAIIcon },
    { name: "ChatGPT", icon: ChatGPTIcon },
    { name: "Claude", icon: ClaudeIcon }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveFlow(prev => (prev + 1) % automationFlows.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, automationFlows.length]);

  const currentFlow = automationFlows[activeFlow];
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stepCardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  const handleStepMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = stepCardsRef.current[index];
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
  };
  
  const ring1Variants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        opacity: { duration: 0.3, ease: 'easeOut' },
        scale: { duration: 0.3, ease: 'easeOut' },
        rotate: { duration: 15, ease: "linear", repeat: Infinity }
      }
    }
  };

  const ring2Variants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -360,
      transition: {
        opacity: { duration: 0.3, ease: 'easeOut' },
        scale: { duration: 0.3, ease: 'easeOut' },
        rotate: { duration: 20, ease: "linear", repeat: Infinity }
      }
    }
  };

  const glowVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500/30 blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Workflow className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-cyan-400 font-semibold text-sm">IA + Automatización</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ecosistema de <span className={`bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>Automatización Inteligente</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Orquestamos las mejores herramientas de IA y automatización para crear flujos de trabajo autónomos que impulsan tu negocio 24/7.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex gap-2">
              {automationFlows.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFlow(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    index === activeFlow ? theme.gradient : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Ver flujo ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button 
                onClick={() => setIsPlaying(!isPlaying)} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors border border-white/10 hover:border-cyan-400/30"
              >
                {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
              </motion.button>
              <motion.button 
                onClick={() => setActiveFlow(0)} 
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors border border-white/10 hover:border-cyan-400/30"
              >
                <RotateCcw className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 relative overflow-hidden hover:border-cyan-400/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-indigo-500/5 to-cyan-400/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="text-center mb-10">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                  >
                    {currentFlow.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-300 text-lg mb-4"
                  >
                    {currentFlow.description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center gap-2 flex-wrap"
                  >
                    {currentFlow.tools.map((tool, index) => (
                      <motion.span 
                        key={index} 
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-400/20 transition-all duration-300"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
                  {currentFlow.steps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <React.Fragment key={index}>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          variants={{ hidden: {opacity: 0, scale: 0.8}, visible: {opacity: 1, scale: 1} }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          ref={(el) => { if(el) stepCardsRef.current[index] = el; }}
                          onMouseMove={(e) => handleStepMouseMove(e, index)}
                          className="group flex flex-col items-center text-center w-28 relative"
                        >
                          <div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                              background: `radial-gradient(120px circle at var(--mouse-x) var(--mouse-y), rgba(0, 229, 255, 0.1), transparent 70%)`,
                            }}
                          />

                          <motion.div
                            initial="hidden"
                            whileHover="visible"
                            className="relative w-24 h-24 flex items-center justify-center z-10"
                          >
                            <motion.div
                              variants={ring1Variants}
                              className="absolute w-[115%] h-[115%] rounded-full border border-dotted border-cyan-400/50 group-hover:border-cyan-400/80 transition-colors duration-300"
                            />
                            <motion.div
                              variants={ring2Variants}
                              className="absolute w-[130%] h-[130%] rounded-full border border-dotted border-indigo-400/50 group-hover:border-indigo-400/80 transition-colors duration-300"
                            />
                            
                            <motion.div
                              variants={glowVariants}
                              className="absolute w-[150%] h-[150%] rounded-full bg-gradient-to-r from-cyan-400/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100"
                            />

                            <motion.div 
                              whileHover={{ 
                                scale: 1.15,
                                rotate: [0, -5, 5, 0],
                                transition: { rotate: { duration: 0.5 } }
                              }}
                              className={`p-0.5 rounded-full ${theme.gradient} group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300`}
                            >
                              <motion.div 
                                whileHover={{ 
                                  boxShadow: "inset 0 0 20px rgba(0, 229, 255, 0.3)" 
                                }}
                                className="bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center relative border border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300"
                              >
                                 <motion.div
                                   whileHover={{ scale: 1.1, rotate: 360 }}
                                   transition={{ rotate: { duration: 0.6 } }}
                                 >
                                   <IconComponent className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg" />
                                 </motion.div>
                              </motion.div>
                            </motion.div>
                          </motion.div>

                          <motion.h4 
                            whileHover={{ y: -2 }}
                            className="font-semibold text-white mt-4 mb-1 group-hover:text-cyan-300 transition-colors duration-300"
                          >
                            {step.name}
                          </motion.h4>
                          <motion.p 
                            whileHover={{ y: -1 }}
                            className="text-xs text-gray-400 leading-tight group-hover:text-gray-300 transition-colors duration-300"
                          >
                            {step.description}
                          </motion.p>
                        </motion.div>

                        {index < currentFlow.steps.length - 1 && (
                          <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                            className="hidden lg:block h-0.5 w-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/50 to-cyan-400/20 mx-2 relative overflow-hidden"
                          >
                            <motion.div
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent w-1/3"
                            />
                          </motion.div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            >
              Herramientas que <span className={`bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>Dominamos</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Nuestro arsenal tecnológico para construir automatizaciones robustas y escalables.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ 
                          y: -8,
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        ref={(el) => { if(el) cardsRef.current[index] = el; }}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        className="group relative rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-white/30 hover:bg-gray-800/80 overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                              background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(0, 229, 255, 0.15), transparent 80%)`,
                            }}
                        />

                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-[1px] rounded-2xl bg-gray-900/90" />
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/50 via-indigo-500/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              background: `conic-gradient(from 0deg, rgba(0, 229, 255, 0.5), rgba(99, 102, 241, 0.5), rgba(0, 229, 255, 0.5))`,
                            }}
                          />
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <motion.div 
                              whileHover={{ 
                                scale: 1.1,
                                rotate: [0, -10, 10, 0],
                                transition: { rotate: { duration: 0.5 } }
                              }}
                              className="w-16 h-16 mx-auto bg-gray-800/80 rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-gray-700/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                            >
                                <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg" />
                            </motion.div>
                            <motion.h4 
                              whileHover={{ scale: 1.05 }}
                              className="font-semibold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300"
                            >
                              {tool.name}
                            </motion.h4>
                        </div>

                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {[...Array(3)].map((_, i) => (
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
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                              className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                            />
                          ))}
                        </div>
                    </motion.div>
                );
            })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gray-900/40 rounded-2xl border-t border-cyan-400/30 p-8 md:p-12 backdrop-blur-lg overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-400/10 to-transparent -z-10 group-hover:from-cyan-400/20 transition-all duration-500"></div>
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(${45 + i * 30}deg, transparent, rgba(0, 229, 255, 0.1), transparent)`,
                    transform: `translateX(${i * 20}px)`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                ¿Listo para Automatizar tu Negocio?
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
              >
                Agenda una consulta estratégica y diseñaremos un plan de automatización a la medida de tus desafíos y oportunidades.
              </motion.p>
              {/* vvv 3. BOTÓN MODIFICADO vvv */}
              <motion.button
                onClick={openChat}
                type="button"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(0, 229, 255, 0.3)',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center gap-2 ${theme.gradient} text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group`}
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative z-10">Agendar Consulta Estratégica</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              {/* ^^^ FIN DE LA MODIFICACIÓN ^^^ */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
