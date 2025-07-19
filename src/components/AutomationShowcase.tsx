'use client';

import { motion } from 'framer-motion';
import { Workflow, ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';

// Importar los iconos SVG profesionales
import {
  CaptureIcon,
  AIAnalysisIcon,
  SegmentationIcon,
  ResponseIcon,
  CRMIcon,
  DocumentIcon,
  OCRIcon,
  ValidationIcon,
  ClassificationIcon,
  NotificationIcon,
  QueryIcon,
  UnderstandingIcon,
  SearchIcon,
  InsightIcon,
  EscalationIcon,
  MakeIcon,
  ZapierIcon,
  N8nIcon,
  OpenAIIcon,
  ChatGPTIcon,
  ClaudeIcon
} from './svg-icons';

const AutomationShowcase = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const automationFlows = [
    {
      title: "Captura de Leads con IA",
      description: "Automatización completa desde el primer contacto hasta la conversión",
      tools: ["Make", "ChatGPT", "CRM"],
      steps: [
        { 
          name: "Captura", 
          icon: CaptureIcon, 
          description: "Lead llega por formulario web",
          ariaLabel: "Icono de captura de leads por email"
        },
        { 
          name: "Análisis IA", 
          icon: AIAnalysisIcon, 
          description: "IA analiza perfil y necesidades",
          ariaLabel: "Icono de análisis con inteligencia artificial"
        },
        { 
          name: "Segmentación", 
          icon: SegmentationIcon, 
          description: "Clasifica automáticamente",
          ariaLabel: "Icono de segmentación y clasificación"
        },
        { 
          name: "Respuesta", 
          icon: ResponseIcon, 
          description: "Email personalizado instantáneo",
          ariaLabel: "Icono de respuesta automatizada"
        },
        { 
          name: "CRM", 
          icon: CRMIcon, 
          description: "Registro automático en sistema",
          ariaLabel: "Icono de sistema CRM"
        }
      ],
      color: "cyan"
    },
    {
      title: "Procesamiento de Documentos",
      description: "Extracción y análisis inteligente de información",
      tools: ["Zapier", "OpenAI", "Google Sheets"],
      steps: [
        { 
          name: "Recepción", 
          icon: DocumentIcon, 
          description: "Documento llega por email",
          ariaLabel: "Icono de recepción de documentos"
        },
        { 
          name: "OCR + IA", 
          icon: OCRIcon, 
          description: "Extrae y analiza contenido",
          ariaLabel: "Icono de reconocimiento óptico de caracteres"
        },
        { 
          name: "Validación", 
          icon: ValidationIcon, 
          description: "Verifica datos automáticamente",
          ariaLabel: "Icono de validación de datos"
        },
        { 
          name: "Clasificación", 
          icon: ClassificationIcon, 
          description: "Organiza por categorías",
          ariaLabel: "Icono de clasificación de documentos"
        },
        { 
          name: "Notificación", 
          icon: NotificationIcon, 
          description: "Alerta al equipo responsable",
          ariaLabel: "Icono de notificación al equipo"
        }
      ],
      color: "purple"
    },
    {
      title: "Atención al Cliente 24/7",
      description: "Soporte inteligente que nunca duerme",
      tools: ["n8n", "WhatsApp API", "Knowledge Base"],
      steps: [
        { 
          name: "Consulta", 
          icon: QueryIcon, 
          description: "Cliente envía mensaje",
          ariaLabel: "Icono de consulta del cliente"
        },
        { 
          name: "Comprensión", 
          icon: UnderstandingIcon, 
          description: "IA entiende la intención",
          ariaLabel: "Icono de comprensión de intención"
        },
        { 
          name: "Búsqueda", 
          icon: SearchIcon, 
          description: "Consulta base de conocimiento",
          ariaLabel: "Icono de búsqueda en base de conocimiento"
        },
        { 
          name: "Respuesta", 
          icon: InsightIcon, 
          description: "Genera respuesta personalizada",
          ariaLabel: "Icono de generación de respuesta inteligente"
        },
        { 
          name: "Escalación", 
          icon: EscalationIcon, 
          description: "Deriva a humano si es necesario",
          ariaLabel: "Icono de escalación a agente humano"
        }
      ],
      color: "yellow"
    }
  ];

  const tools = [
    { 
      name: "Make", 
      icon: MakeIcon, 
      description: "Automatización visual de procesos", 
      color: "bg-blue-500",
      ariaLabel: "Herramienta Make para automatización visual"
    },
    { 
      name: "Zapier", 
      icon: ZapierIcon, 
      description: "Conecta más de 5000 aplicaciones", 
      color: "bg-orange-500",
      ariaLabel: "Herramienta Zapier para conectar aplicaciones"
    },
    { 
      name: "n8n", 
      icon: N8nIcon, 
      description: "Automatización open-source avanzada", 
      color: "bg-pink-500",
      ariaLabel: "Herramienta n8n para automatización open-source"
    },
    { 
      name: "OpenAI", 
      icon: OpenAIIcon, 
      description: "Inteligencia artificial conversacional", 
      color: "bg-green-500",
      ariaLabel: "Plataforma OpenAI para inteligencia artificial"
    },
    { 
      name: "ChatGPT", 
      icon: ChatGPTIcon, 
      description: "Procesamiento de lenguaje natural", 
      color: "bg-purple-500",
      ariaLabel: "ChatGPT para procesamiento de lenguaje natural"
    },
    { 
      name: "Claude", 
      icon: ClaudeIcon, 
      description: "IA para análisis y escritura", 
      color: "bg-indigo-500",
      ariaLabel: "Claude IA para análisis y escritura"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setActiveFlow(prev => (prev + 1) % automationFlows.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, automationFlows.length]);

  const currentFlow = automationFlows[activeFlow];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Workflow className="w-6 h-6 text-cyan-400" aria-label="Icono de flujo de trabajo" />
            <span className="text-cyan-400 font-semibold">IA + Automatización</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ecosistema de <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">Automatización Inteligente</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo integramos las mejores herramientas de automatización con IA para crear soluciones que trabajan 24/7
          </p>
        </motion.div>

        {/* Interactive Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          {/* Flow Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex gap-2">
              {automationFlows.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFlow(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFlow 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Ver flujo ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                aria-label={isPlaying ? "Pausar presentación automática" : "Reproducir presentación automática"}
              >
                {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
              </button>
              <button
                onClick={() => setActiveFlow(0)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                aria-label="Reiniciar al primer flujo"
              >
                <RotateCcw className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Flow Display */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden">
            <motion.div
              key={activeFlow}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Flow Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentFlow.title}
                </h3>
                <p className="text-gray-300 text-lg mb-4">
                  {currentFlow.description}
                </p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-sm text-gray-400">Herramientas:</span>
                  {currentFlow.tools.map((tool, index) => (
                    <span key={index} className={`px-3 py-1 bg-${currentFlow.color}-500/20 text-${currentFlow.color}-400 rounded-full text-sm`}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flow Steps */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
                {currentFlow.steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col items-center text-center group relative"
                    >
                      {/* Step Circle */}
                      <div className={`w-16 h-16 rounded-full bg-${currentFlow.color}-500/20 border-2 border-${currentFlow.color}-400/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:border-${currentFlow.color}-400`}>
                        <IconComponent 
                          className="w-8 h-8" 
                          color={`rgb(var(--${currentFlow.color}-400))`}
                          aria-label={step.ariaLabel}
                        />
                      </div>
                      
                      {/* Step Info */}
                      <h4 className={`font-semibold text-${currentFlow.color}-400 mb-1`}>
                        {step.name}
                      </h4>
                      <p className="text-xs text-gray-400 max-w-24 leading-tight">
                        {step.description}
                      </p>

                      {/* Arrow (except for last step) */}
                      {index < currentFlow.steps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full">
                          <ArrowRight className={`w-6 h-6 text-${currentFlow.color}-400/50 transform translate-x-2`} />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tools Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Herramientas que <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Dominamos</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nuestro arsenal de tecnologías para crear automatizaciones que realmente funcionan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/30 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center relative overflow-hidden transition-all duration-300 hover:border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className={`w-12 h-12 mx-auto rounded-full ${tool.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent 
                          className="w-6 h-6" 
                          color="white"
                          aria-label={tool.ariaLabel}
                        />
                      </div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-yellow-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para Automatizar tu Negocio?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Descubre cómo estas automatizaciones pueden transformar tu empresa. 
              Agenda una consulta y te mostramos el potencial específico para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/59177028880"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                aria-label="Contactar por WhatsApp para ver automatización personalizada"
              >
                <span>Ver Mi Automatización</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                className="inline-flex items-center gap-2 border-2 border-cyan-400/40 hover:border-cyan-400 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-cyan-400/10"
                aria-label="Ver demostración en vivo del sistema"
              >
                <Play className="w-5 h-5" />
                <span>Ver Demo en Vivo</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* TODO: Insertar video explicativo desde /public/ */}
      {/* TODO: Considerar agregar más casos de uso específicos por industria */}
    </section>
  );
};

export default AutomationShowcase;
