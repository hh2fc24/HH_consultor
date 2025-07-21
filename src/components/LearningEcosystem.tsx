'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tipos para el componente de iconos
type IconType = 'WORKSHOP' | 'TRAINING' | 'CONSULTING' | 'STRATEGY';

interface IconComponentProps {
  type: IconType;
  className?: string;
}

// Datos de los servicios con enfoque profesional real
const services = [
  {
    id: 'talleres',
    title: 'Talleres Especializados',
    subtitle: 'Capacitación Práctica en Inteligencia Artificial',
    description:
      'Talleres diseñados para equipos que buscan implementar soluciones de IA en sus operaciones. Trabajamos con casos reales de la industria del cliente, desarrollando competencias específicas en automatización de procesos, análisis de datos y toma de decisiones basada en IA. Modalidad presencial en Perú y virtual para otros países de la región.',
    target: 'Equipos técnicos y gerenciales de empresas en proceso de transformación digital.',
    cta: 'Solicitar Información',
    icon: 'WORKSHOP' as IconType,
    industries: 'Banca, Fintech, Farmacéuticas, Tecnología, Educación',
    modality: 'Presencial (Perú) | Virtual (Latinoamérica)',
    duration: '1-2 días intensivos'
  },
  {
    id: 'capacitacion',
    title: 'Programas de Capacitación',
    subtitle: 'Desarrollo de Competencias en IA para Organizaciones',
    description:
      'Programas estructurados de capacitación que combinan fundamentos teóricos con aplicaciones prácticas. Adaptamos el contenido según la industria y necesidades específicas de cada organización. Incluye seguimiento post-capacitación y material de consulta especializado.',
    target: 'Profesionales y líderes que requieren actualización en tecnologías de IA.',
    cta: 'Consultar Programa',
    icon: 'TRAINING' as IconType,
    industries: 'Sectores diversos con enfoque en casos de uso específicos',
    modality: 'Híbrida: presencial y virtual según requerimientos',
    duration: 'Módulos de 4-8 semanas'
  },
  {
    id: 'consultoria',
    title: 'Consultoría Estratégica',
    subtitle: 'Asesoramiento en Implementación de IA',
    description:
      'Consultoría especializada para organizaciones que buscan integrar IA en sus procesos de negocio. Realizamos diagnósticos, diseñamos roadmaps de implementación y acompañamos en la ejecución de proyectos piloto. Experiencia comprobada en diferentes sectores industriales.',
    target: 'Directivos y gerentes responsables de la estrategia tecnológica empresarial.',
    cta: 'Agendar Consulta',
    icon: 'CONSULTING' as IconType,
    industries: 'Banca, Farmacéuticas, Fintech, Manufactura, Servicios',
    modality: 'Presencial y virtual según fase del proyecto',
    duration: 'Proyectos de 3-12 meses'
  },
  {
    id: 'estrategia',
    title: 'Planificación Estratégica',
    subtitle: 'Desarrollo de Estrategias de IA a Medida',
    description:
      'Trabajamos con equipos directivos para desarrollar estrategias integrales de adopción de IA. Incluye análisis de madurez digital, identificación de oportunidades, definición de casos de uso prioritarios y planificación de implementación por fases.',
    target: 'Comités ejecutivos y equipos de dirección estratégica.',
    cta: 'Solicitar Propuesta',
    icon: 'STRATEGY' as IconType,
    industries: 'Organizaciones medianas y grandes de diversos sectores',
    modality: 'Sesiones ejecutivas presenciales y virtuales',
    duration: 'Engagement de 2-6 meses'
  },
];

// Componente de iconos profesionales
const IconComponent = ({ type, className = "w-6 h-6" }: IconComponentProps) => {
  const icons = {
    WORKSHOP: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    TRAINING: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    CONSULTING: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    STRATEGY: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    )
  };
  
  return icons[type];
};

export default function LearningEcosystem() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#00E5FF]/8 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-[#00E5FF]/8 to-transparent blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Encabezado profesional */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold leading-6 text-[#00E5FF] tracking-wide uppercase mb-4">
            Servicios de Consultoría en IA
          </h2>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight mb-6">
            Transformación Digital con{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-white bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </h1>
          <p className="text-lg leading-7 text-white/80 max-w-3xl mx-auto">
            Acompañamos a organizaciones en su proceso de adopción e implementación de tecnologías de 
            Inteligencia Artificial, con experiencia comprobada en diversos sectores industriales 
            y modalidades de trabajo adaptadas a cada contexto empresarial.
          </p>
          
          {/* Indicadores de experiencia */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <span className="text-[#00E5FF]">•</span>
              <span>Experiencia multisectorial</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <span className="text-[#00E5FF]">•</span>
              <span>Modalidad híbrida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <span className="text-[#00E5FF]">•</span>
              <span>Cobertura regional</span>
            </div>
          </div>
        </motion.div>

        {/* Pestañas de Navegación */}
        <div className="mt-16 flex justify-center border-b border-white/10">
          <div className="flex space-x-4 sm:space-x-8" aria-label="Tabs">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                onMouseEnter={() => setHoveredTab(service.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`${
                  activeTab === service.id
                    ? 'border-[#00E5FF] text-white'
                    : 'border-transparent text-white/60 hover:text-white hover:border-white/30'
                } relative group whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base transition-all duration-300`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-2">
                  <IconComponent type={service.icon} className="w-5 h-5" />
                  <span>{service.title}</span>
                </div>
                
                {activeTab === service.id && (
                  <motion.div
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent"
                    layoutId="underline"
                  />
                )}
                
                {hoveredTab === service.id && activeTab !== service.id && (
                  <motion.div
                    className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-white/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Contenido de la Pestaña Activa */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {services.map(
              (service) =>
                activeTab === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ y: 20, opacity: 0, scale: 0.98 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -20, opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden"
                  >
                    {/* Efecto de brillo sutil */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent"></div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-[#00E5FF] mt-1">
                        <IconComponent type={service.icon} className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-3">
                          {service.subtitle}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-white/85 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Información del servicio */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-black/20 border border-[#00E5FF]/20 rounded-lg p-4">
                        <h4 className="text-[#00E5FF] font-semibold text-sm mb-2">SECTORES DE EXPERIENCIA</h4>
                        <p className="text-white/80 text-sm">{service.industries}</p>
                      </div>
                      <div className="bg-black/20 border border-[#00E5FF]/20 rounded-lg p-4">
                        <h4 className="text-[#00E5FF] font-semibold text-sm mb-2">MODALIDAD</h4>
                        <p className="text-white/80 text-sm">{service.modality}</p>
                      </div>
                    </div>

                    {/* Duración */}
                    <div className="bg-gradient-to-r from-[#00E5FF]/10 to-transparent border-l-4 border-[#00E5FF] pl-4 py-3 mb-8">
                      <div className="flex items-center gap-2">
                        <span className="text-[#00E5FF] font-semibold text-sm">DURACIÓN:</span>
                        <span className="text-white/90 text-sm">{service.duration}</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-start gap-2 text-sm font-medium text-white/90 mb-6 bg-white/5 p-4 rounded-lg">
                        <div>
                          <span className="text-[#00E5FF] font-semibold">Dirigido a:</span>
                          <p className="text-white/80 mt-1">{service.target}</p>
                        </div>
                      </div>
                      
                      <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#0099CC] text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 group relative overflow-hidden text-sm"
                        whileHover={{ 
                          scale: 1.02, 
                          boxShadow: "0 10px 25px rgba(0, 229, 255, 0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Efecto de brillo en hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        
                        <span className="relative z-10">{service.cta}</span>
                        <motion.span 
                          className="relative z-10"
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.a>

                      {/* Información de contacto */}
                      <div className="mt-6 text-xs text-white/50">
                        <p>Consultas y cotizaciones sin compromiso</p>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Indicadores de progreso visual */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-2">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === service.id ? 'bg-[#00E5FF] w-8' : 'bg-white/20 w-2 hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveTab(service.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/70 text-base mb-4">
            ¿Interesado en explorar cómo la IA puede transformar tu organización?
          </p>
          <p className="text-[#00E5FF] text-sm font-medium">
            Conversemos sobre las oportunidades específicas para tu sector
          </p>
        </motion.div>
      </div>
    </section>
  );
}
