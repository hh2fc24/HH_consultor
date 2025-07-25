
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Users, Target, Zap, Brain, Rocket, Eye, Play, ArrowRight, X, ChevronRight, Heart } from 'lucide-react'
import { useChatStore } from '@/store/chatStore' // << IMPORTACIÓN DEL STORE

// --- DATOS ---
interface Formation {
  id: string; title: string; problem: string; promise: string; duration: string; result: string; cta: string; icon: React.ComponentType<{ className?: string }>; type: string; accessibility: string;
}
interface Route {
  id: string; title: string; description: string; promise: string; sequence: string[];
}
const formationsData: Record<string, Formation[]> = {
  talleres: [
    { 
      id: 'recupera-tiempo', 
      title: 'Recupera 2 Horas Diarias con IA', 
      problem: '¿Sientes que el día no te alcanza y pierdes tiempo en tareas que podrían automatizarse?', 
      promise: 'Aprenderás a crear automatizaciones simples que te devuelvan 2 horas cada día, sin necesidad de saber programar. Te enseñaré paso a paso, como si fuera tu amigo explicándote.', 
      duration: '3 horas', 
      result: 'Tus primeras automatizaciones funcionando al final del taller.', 
      cta: 'Quiero recuperar mi tiempo', 
      icon: Clock, 
      type: 'Taller',
      accessibility: 'Para cualquier persona | Sin requisitos técnicos'
    },
    { 
      id: 'asistente-personal', 
      title: 'Tu Primer Asistente de IA', 
      problem: '¿Tu agenda es un caos y necesitas ayuda para organizarte mejor?', 
      promise: 'Configuraremos juntos tu asistente personal de IA que organice tu día, te recuerde tareas importantes y te ayude a ser más productivo. Todo explicado de manera sencilla.', 
      duration: '2 horas', 
      result: 'Tu asistente de IA personal listo y funcionando.', 
      cta: 'Necesito mi asistente', 
      icon: Brain, 
      type: 'Taller',
      accessibility: 'Ideal para principiantes | Explicación paso a paso'
    }
  ],
  cursos: [
    { 
      id: 'primer-copilot', 
      title: 'Crea Tu Primer Copilot de Negocio', 
      problem: '¿Tienes un negocio y quieres que la IA te ayude pero no sabes por dónde empezar?', 
      promise: 'Te guiaré para crear tu primer copilot que automatice las tareas más repetitivas de tu negocio. Sin tecnicismos, con ejemplos reales y aplicables desde el día 1.', 
      duration: '7 días (1h diaria)', 
      result: 'Tu copilot personalizado automatizando procesos reales de tu negocio.', 
      cta: 'Quiero mi copilot', 
      icon: Rocket, 
      type: 'Curso',
      accessibility: 'Para emprendedores | Sin experiencia técnica necesaria'
    },
    { 
      id: 'ia-sin-miedo', 
      title: 'IA Sin Miedo: De Cero a Experto', 
      problem: '¿La IA te parece complicada y sientes que te estás quedando atrás?', 
      promise: 'Desmitificaremos la IA juntos. Aprenderás a usar las mejores herramientas de manera práctica, con confianza y sin miedo. Como aprender a manejar, pero con IA.', 
      duration: '5 semanas', 
      result: 'Dominio práctico de IA + confianza para seguir aprendiendo.', 
      cta: 'Quiero perder el miedo', 
      icon: Target, 
      type: 'Curso',
      accessibility: 'Para todos | Ritmo adaptable a tu tiempo'
    }
  ],
  seminarios: [
    { 
      id: 'futuro-trabajo', 
      title: 'El Futuro del Trabajo con IA', 
      problem: '¿Te preocupa cómo la IA va a cambiar tu trabajo o industria?', 
      promise: 'Entenderás realmente qué está pasando con la IA, cómo afectará tu sector y qué puedes hacer para adaptarte y prosperar. Sin alarmismo, con datos reales.', 
      duration: '4 horas', 
      result: 'Claridad sobre el futuro + plan personal de adaptación.', 
      cta: 'Quiero entender el futuro', 
      icon: Eye, 
      type: 'Seminario',
      accessibility: 'Abierto a todos | Lenguaje claro y directo'
    },
    { 
      id: 'casos-exito', 
      title: 'Casos de Éxito Reales con IA', 
      problem: '¿Quieres ver ejemplos concretos de cómo otros han usado IA para mejorar sus negocios?', 
      promise: 'Analizaremos casos reales de empresas pequeñas y medianas que han implementado IA con éxito. Verás qué hicieron, cómo lo hicieron y cómo puedes aplicarlo.', 
      duration: '3 horas', 
      result: 'Ideas concretas aplicables a tu situación + contactos útiles.', 
      cta: 'Quiero ver casos reales', 
      icon: Zap, 
      type: 'Seminario',
      accessibility: 'Para empresarios | Casos adaptados a diferentes sectores'
    }
  ],
  webinars: [
    { 
      id: 'automatiza-conmigo', 
      title: 'Automatiza Algo Conmigo en Vivo', 
      problem: '¿Necesitas ver cómo se hace realmente antes de animarte a intentarlo?', 
      promise: 'Te mostraré en tiempo real cómo automatizo una tarea completa desde cero. Podrás hacer preguntas y seguir el proceso paso a paso.', 
      duration: '45 minutos', 
      result: 'Una automatización creada en vivo + grabación para repasar.', 
      cta: 'Quiero verlo en acción', 
      icon: Play, 
      type: 'Webinar',
      accessibility: 'Totalmente abierto | Preguntas en vivo bienvenidas'
    },
    { 
      id: 'errores-comunes', 
      title: 'Los 5 Errores Más Comunes con IA', 
      problem: '¿Has intentado usar IA pero no obtienes los resultados que esperabas?', 
      promise: 'Te mostraré los errores más frecuentes que comete la gente al empezar con IA y cómo evitarlos. Aprenderás de los errores de otros para no repetirlos.', 
      duration: '60 minutos', 
      result: 'Lista de verificación + soluciones prácticas inmediatas.', 
      cta: 'Quiero evitar errores', 
      icon: Users, 
      type: 'Webinar',
      accessibility: 'Para principiantes | Ambiente de aprendizaje sin juicios'
    }
  ]
};

const routes: Route[] = [
  { 
    id: 'empezar-desde-cero', 
    title: 'Empezar Desde Cero', 
    description: 'Para personas que nunca han usado IA y quieren empezar de manera gradual', 
    promise: 'De principiante total a usuario confiado en 30 días', 
    sequence: ['errores-comunes', 'asistente-personal', 'ia-sin-miedo', 'automatiza-conmigo'] 
  },
  { 
    id: 'mejorar-negocio', 
    title: 'Mejorar Mi Negocio', 
    description: 'Para emprendedores y dueños de negocio que quieren usar IA prácticamente', 
    promise: 'De negocio tradicional a negocio potenciado con IA', 
    sequence: ['casos-exito', 'recupera-tiempo', 'primer-copilot', 'futuro-trabajo'] 
  },
  { 
    id: 'preparar-futuro', 
    title: 'Prepararme para el Futuro', 
    description: 'Para profesionales que quieren entender y adaptarse a los cambios que vienen', 
    promise: 'De incertidumbre a confianza sobre tu futuro profesional', 
    sequence: ['futuro-trabajo', 'ia-sin-miedo', 'automatiza-conmigo', 'primer-copilot'] 
  }
];

const FormationCard: React.FC<{ formation: Formation }> = ({ formation }) => {
  const { openChat } = useChatStore(); // << USO DEL HOOK
  const IconComponent = formation.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-gradient-to-br from-slate-900/80 to-slate-950/90 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-400/30 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 p-4 rounded-2xl">
              <IconComponent className="w-7 h-7 text-blue-400" />
            </div>
          </div>
        </div>
        <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
          {formation.type}
        </span>
      </div>

      <h3 className="relative z-10 text-xl font-bold text-slate-100 leading-tight mb-4 group-hover:text-white transition-colors duration-300">
        {formation.title}
      </h3>

      <div className="relative z-10 mb-6">
        <div className="border-l-2 border-blue-500/30 pl-4">
          <p className="text-sm text-slate-400 italic leading-relaxed">
            "{formation.problem}"
          </p>
        </div>
      </div>

      <p className="relative z-10 text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
        {formation.promise}
      </p>

      <div className="relative z-10 space-y-4 mb-8">
        <div className="flex items-center gap-3 text-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50">
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <span className="text-slate-500 text-xs uppercase tracking-wide">Duración</span>
            <p className="text-slate-300 font-medium">{formation.duration}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50">
            <Target className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <span className="text-slate-500 text-xs uppercase tracking-wide">Qué lograrás</span>
            <p className="text-slate-300 font-medium">{formation.result}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50">
            <Heart className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <span className="text-slate-500 text-xs uppercase tracking-wide">Para quién</span>
            <p className="text-slate-300 font-medium">{formation.accessibility}</p>
          </div>
        </div>
      </div>

      {/* vvv BOTÓN MODIFICADO vvv */}
      <motion.button
        onClick={openChat}
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-4 px-6 rounded-2xl text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 group/btn"
      >
        <span className="flex items-center justify-center gap-2">
          {formation.cta}
          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </span>
      </motion.button>
    </motion.div>
  )
};

const RouteCard: React.FC<{ route: Route }> = ({ route }) => {
    const allFormations = Object.values(formationsData).flat();
    
    return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-slate-900/90 to-slate-950/95 border border-slate-800/50 rounded-3xl p-8 h-full flex flex-col backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 group"
        >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-3">
                {route.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{route.description}</p>
            </div>

            <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl">
              <p className="text-slate-300 font-semibold text-sm">
                <span className="text-blue-400 text-xs uppercase tracking-wide block mb-2">Tu transformación</span>
                {route.promise}
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Tu ruta de aprendizaje
              </p>
              <div className="space-y-3">
                {route.sequence.map((formationId, index) => {
                  const formation = allFormations.find(f => f.id === formationId);
                  return (
                    <div key={formationId} className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-colors duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-bold rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                        {index + 1}
                      </div>
                      <span className="text-sm text-slate-300 font-medium leading-tight">
                        {formation ? formation.title : formationId}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
        </motion.div>
    )
};

const FormativeSection: React.FC = () => {
    const { openChat } = useChatStore(); // << USO DEL HOOK
    const [activeTab, setActiveTab] = useState<string>('talleres')
    const [showRoutes, setShowRoutes] = useState<boolean>(false)

    const tabDescriptions: Record<string, string> = {
        talleres: "Aprende haciendo. Sesiones cortas e intensivas donde sales con resultados concretos.",
        cursos: "Formación completa y estructurada. Avanza a tu ritmo con acompañamiento personalizado.",
        seminarios: "Entiende el panorama completo. Sesiones para aclarar dudas y ver el futuro con claridad.",
        webinars: "Aprende en comunidad. Sesiones en vivo donde puedes preguntar y ver cómo se hace."
    }

    const tabLabels: Record<string, string> = {
        talleres: "Talleres",
        cursos: "Cursos", 
        seminarios: "Seminarios",
        webinars: "Webinars"
    }

    return (
        <div className="min-h-screen bg-black text-slate-300 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-blue-900/30 via-blue-800/10 to-transparent blur-3xl"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-slate-900/50 to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-gradient-radial from-blue-600/10 to-transparent blur-3xl"></div>
          </div>

          <div className="absolute inset-0 z-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32">
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center space-y-8 max-w-5xl mx-auto mb-24"
            >
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-cyan-400 text-sm font-medium">IA + Automatización</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  <span className="text-white">Formación Estratégica en </span>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    IA
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
                  Aprende IA de manera práctica y sin complicaciones. Diseñado para personas reales que quieren resultados reales.
                  <span className="text-slate-300"> Sin tecnicismos, con mucha práctica.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <motion.button 
                  onClick={() => setShowRoutes(true)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  <span className="flex items-center gap-3">
                    Encuentra tu ruta ideal
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
                
                {/* vvv BOTÓN MODIFICADO vvv */}
                <motion.button 
                  onClick={openChat}
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group text-slate-300 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/30 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3">
                    Ver todas las opciones
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"/>
                  </span>
                </motion.button>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex justify-center mb-12">
                <div className="inline-flex p-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl shadow-2xl">
                  {Object.keys(formationsData).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 text-sm ${
                        activeTab === tab 
                          ? 'text-white' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {activeTab === tab && (
                        <motion.div
                          layoutId="active-formation-pill"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm"
                          style={{ borderRadius: 16 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{tabLabels[tab]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-center text-lg text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                    {tabDescriptions[activeTab]}
                  </p>

                  <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {formationsData[activeTab]?.map((formation, index) => (
                      <motion.div
                        key={formation.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <FormationCard formation={formation} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.section>

            <AnimatePresence>
              {showRoutes && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
                  onClick={() => setShowRoutes(false)}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-slate-950/95 border border-slate-800/50 rounded-3xl p-10 max-w-7xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-3">
                          ¿Por dónde empezar?
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                          Elige la ruta que mejor se adapte a tu situación actual y objetivos.
                        </p>
                      </div>
                      <button 
                        onClick={() => setShowRoutes(false)}
                        className="text-slate-500 hover:text-white transition-colors p-3 rounded-2xl hover:bg-slate-800/50 border border-slate-700/50 hover:border-slate-600"
                      >
                        <X className="w-6 h-6"/>
                      </button>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                      {routes.map((route, index) => (
                        <motion.div
                          key={route.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        >
                          <RouteCard route={route} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
    )
}

export default FormativeSection;