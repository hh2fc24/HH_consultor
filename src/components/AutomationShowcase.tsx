
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Workflow, ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';

// Asegúrate que la ruta a tus iconos es correcta
import {
  CaptureIcon, AIAnalysisIcon, SegmentationIcon, ResponseIcon, CRMIcon,
  DocumentIcon, OCRIcon, ValidationIcon, ClassificationIcon, NotificationIcon,
  QueryIcon, UnderstandingIcon, SearchIcon, InsightIcon, EscalationIcon,
  MakeIcon, ZapierIcon, N8nIcon, OpenAIIcon, ChatGPTIcon, ClaudeIcon
} from './svg-icons'; 

const AutomationShowcase = () => {
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

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500/30 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            <Workflow className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">IA + Automatización</span>
          </div>
          
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
                <button
                  key={index}
                  onClick={() => setActiveFlow(index)}
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    index === activeFlow ? theme.gradient : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Ver flujo ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsPlaying(!isPlaying)} className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors">
                {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
              </button>
              <button onClick={() => setActiveFlow(0)} className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors">
                <RotateCcw className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <motion.div
              key={activeFlow}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{currentFlow.title}</h3>
                <p className="text-gray-300 text-lg mb-4">{currentFlow.description}</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {currentFlow.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
                {currentFlow.steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <React.Fragment key={index}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center group w-28"
                      >
                        <div className={`p-0.5 rounded-full ${theme.gradient} group-hover:scale-110 transition-all duration-300`}>
                          <div className="bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center">
                             <IconComponent className="w-10 h-10 text-cyan-400 group-hover:text-white transition-colors" />
                          </div>
                        </div>
                        <h4 className="font-semibold text-white mt-4 mb-1">{step.name}</h4>
                        <p className="text-xs text-gray-400 leading-tight">{step.description}</p>
                      </motion.div>

                      {index < currentFlow.steps.length - 1 && (
                        <div className="hidden lg:block h-0.5 w-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/50 to-cyan-400/20 mx-2" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Herramientas que <span className={`bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>Dominamos</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Nuestro arsenal tecnológico para construir automatizaciones robustas y escalables.
            </p>
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
                        ref={(el) => { cardsRef.current[index] = el; }}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        className="group relative rounded-2xl border border-white/10 bg-gray-900 p-6 text-center transition-all duration-300 hover:border-white/20"
                    >
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(0, 229, 255, 0.15), transparent 80%)`,
                            }}
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4 border border-white/10">
                                <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-cyan-300 transition-colors duration-300" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">{tool.name}</h4>
                        </div>
                    </motion.div>
                );
            })}
          </div>
        </motion.div>
        
        {/* --- SECCIÓN CTA CON DISEÑO REFINADO --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          {/* Contenedor con el nuevo "Resplandor Superior" */}
          <div className="relative bg-gray-900/40 rounded-2xl border-t border-cyan-400/30 p-8 md:p-12 backdrop-blur-lg">
            {/* Efecto de luz sutil en el fondo */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-400/10 to-transparent -z-10"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para Automatizar tu Negocio?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Agenda una consulta estratégica y diseñaremos un plan de automatización a la medida de tus desafíos y oportunidades.
            </p>
            <motion.a
              href="https://wa.me/59177028880?text=Hola,%20quisiera%20agendar%20una%20consulta%20estratégica%20sobre%20automatización."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.2)' }}
              className={`inline-flex items-center gap-2 ${theme.gradient} text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/30`}
            >
              <span>Agendar Consulta Estratégica</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
