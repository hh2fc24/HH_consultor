'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, MessageSquare, ChevronDown, ChevronUp, Code, Play, Pause } from 'lucide-react';

const Article1 = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Lógica para demostración de ejecución autónoma
  };

  const ethicalConsiderations = [
    "Autonomía vs Control: ¿Hasta dónde debe operar sin supervisión humana?",
    "Responsabilidad legal: ¿Quién responde cuando un agente autónomo comete errores?",
    "Seguridad de datos: ¿Cómo proteger información sensible durante operaciones autónomas?",
    "Transparencia: ¿Deben los agentes IA revelar su naturaleza artificial?"
  ];

  const comparisonData = [
    { feature: "Autonomía completa", manus: "✅", others: "❌" },
    { feature: "Ejecución de código", manus: "✅", others: "⚠️" },
    { feature: "Toma de decisiones complejas", manus: "✅", others: "❌" },
    { feature: "Adaptación en tiempo real", manus: "✅", others: "⚠️" },
    { feature: "Integración multiplataforma", manus: "✅", others: "❌" }
  ];

  return (
    <article className="max-w-5xl mx-auto px-4 py-16 text-gray-300">
      {/* Encabezado con gradiente */}
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Manus AI: <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            La Revolución de los Agentes Autónomos
          </span>
        </motion.h1>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>6 Marzo 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>10 min de lectura</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-cyan-300" />
            <span>Análisis Tecnológico</span>
          </div>
        </div>
        
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Un análisis profundo de cómo Manus AI, desarrollado por la startup china Monica, está redefiniendo la autonomía de los agentes de IA.
        </motion.p>
      </div>

      {/* Imagen destacada con demostración interactiva */}
      <motion.div 
        className="mb-12 rounded-2xl overflow-hidden border border-white/10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative w-full h-96 overflow-hidden rounded-2xl">
          <video
            src="/111.mp4"
            className="w-full h-full object-cover"
            muted
            loop
            autoPlay={isPlaying}
            playsInline
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-500/30 transition-all"
            >
              {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white" />}
            </button>
          </div>

          <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>Demostración interactiva</span>
          </div>
        </div>
      </motion.div>

      {/* Contenido del artículo */}
      <div className="prose prose-invert prose-lg max-w-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-900/30 to-cyan-900/10 inline-block px-4 py-2 rounded-lg">
            El Nacimiento de una Nueva Era
          </h2>
          
          <p className="mb-6">
            Manus (mano en latín) representa un salto cuántico en agentes autónomos. Desarrollado por la startup china Monica, este agente IA puede realizar tareas complejas sin supervisión humana continua:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-5 bg-gradient-to-r from-cyan-900/10 to-cyan-900/5 rounded-xl border border-cyan-500/20">
              <h3 className="font-bold text-white mb-3">Agentes Tradicionales</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                  <span>Requieren supervisión constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                  <span>Limitados a tareas predefinidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                  <span>Incapacidad para adaptarse a cambios</span>
                </li>
              </ul>
            </div>
            
            <div className="p-5 bg-gradient-to-r from-purple-900/10 to-purple-900/5 rounded-xl border border-purple-500/20">
              <h3 className="font-bold text-white mb-3">Manus AI</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span>Autonomía completa en tareas complejas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span>Capacidad para escribir e implementar código</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span>Resolución de problemas no previstos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-10 p-6 border-l-4 border-cyan-400 bg-gradient-to-r from-cyan-900/10 to-cyan-900/5 rounded-r-lg">
            <blockquote className="text-xl italic text-white border-none p-0 m-0">
              "Manus no es solo una herramienta, es un colaborador digital. Su lanzamiento el 6 de marzo de 2025 marca un antes y después en la automatización inteligente."
            </blockquote>
          </div>
        </motion.div>

        {/* Sección expandible: Implicaciones estratégicas */}
        <div className="mt-16 border border-white/10 rounded-xl overflow-hidden">
          <button 
            className="w-full p-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 text-left flex justify-between items-center"
            onClick={() => toggleSection('strategic')}
          >
            <h2 className="text-2xl font-bold text-white">Revolución por Industria</h2>
            {expandedSection === 'strategic' ? 
              <ChevronUp className="w-6 h-6 text-cyan-400" /> : 
              <ChevronDown className="w-6 h-6 text-cyan-400" />
            }
          </button>
          
          {expandedSection === 'strategic' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-black/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-cyan-400 mb-3">Desarrollo de Software</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span>Automatización completa del ciclo de desarrollo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span>Detección y corrección de bugs en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span>Implementación continua sin intervención humana</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-purple-400 mb-3">Operaciones Empresariales</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      </div>
                      <span>Gestión autónoma de procesos complejos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      </div>
                      <span>Integración de sistemas multiplataforma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      </div>
                      <span>Optimización de recursos en tiempo real</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-white mb-3">Transformación Digital</h3>
                <p className="text-gray-300 mb-4">
                  Manus AI permite:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <span><span className="text-white">Automatización de flujos de trabajo</span> complejos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <span><span className="text-white">Reducción de costos operativos</span> en un 40-60%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <span><span className="text-white">Escalabilidad ilimitada</span> sin restricciones geográficas</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>

        {/* Comparación técnica */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Manus AI vs. Soluciones Tradicionales
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-left font-semibold text-cyan-300">Capacidad</th>
                  <th className="pb-4 text-center font-semibold text-cyan-400">Manus AI</th>
                  <th className="pb-4 text-center font-semibold text-gray-400">Otros</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="py-3 px-4">{item.feature}</td>
                    <td className="py-3 px-4 text-center text-2xl">{item.manus}</td>
                    <td className="py-3 px-4 text-center text-2xl">{item.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-gray-400 text-sm">
            <p>⚠️ = Implementación limitada o básica</p>
          </div>
        </div>

        {/* Consideraciones éticas */}
        <div className="mt-16 border border-white/10 rounded-xl overflow-hidden">
          <button 
            className="w-full p-6 bg-gradient-to-r from-purple-900/20 to-purple-900/10 text-left flex justify-between items-center"
            onClick={() => toggleSection('ethics')}
          >
            <h2 className="text-2xl font-bold text-white">Dilemas Éticos</h2>
            {expandedSection === 'ethics' ? 
              <ChevronUp className="w-6 h-6 text-purple-400" /> : 
              <ChevronDown className="w-6 h-6 text-purple-400" />
            }
          </button>
          
          {expandedSection === 'ethics' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-black/30"
            >
              <div className="space-y-6">
                {ethicalConsiderations.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5">
                      <div className="text-lg font-bold text-purple-400">{index + 1}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item}</h3>
                      <p className="text-gray-300 mt-2">
                        Esta pregunta plantea desafíos regulatorios y filosóficos que la sociedad apenas comienza a abordar.
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/10 to-purple-900/10 rounded-lg border border-white/10">
                  <p className="text-white font-medium">
                    "La verdadera prueba para Manus AI no será tecnológica, sino ética. ¿Cómo equilibrar eficiencia con responsabilidad?"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Hoja de ruta estratégica */}
        <motion.div 
          className="mt-16 p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Implementación Estratégica</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-black/30 rounded-xl border border-white/10">
              <div className="text-cyan-400 font-bold text-xl mb-3">Inmediato (0-6 meses)</div>
              <ul className="space-y-3 text-gray-300">
                <li>Identificar procesos automatizables</li>
                <li>Establecer protocolos de seguridad</li>
                <li>Implementar pilotos controlados</li>
              </ul>
            </div>
            
            <div className="p-5 bg-black/30 rounded-xl border border-white/10">
              <div className="text-purple-400 font-bold text-xl mb-3">Mediano Plazo (6-18 meses)</div>
              <ul className="space-y-3 text-gray-300">
                <li>Integración con sistemas existentes</li>
                <li>Desarrollo de agentes especializados</li>
                <li>Capacitación de equipos humanos</li>
              </ul>
            </div>
            
            <div className="p-5 bg-black/30 rounded-xl border border-white/10">
              <div className="text-white font-bold text-xl mb-3">Largo Plazo (18+ meses)</div>
              <ul className="space-y-3 text-gray-300">
                <li>Ecosistemas autónomos completos</li>
                <li>Agentes de toma de decisiones estratégicas</li>
                <li>Reestructuración organizacional</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Llamado a la reflexión profesional */}
      <motion.div 
        className="mt-20 pt-10 border-t border-white/10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-white mb-6">La Pregunta Definitiva</h3>
        
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <p className="text-xl text-white">
            Cuando los agentes autónomos puedan realizar cualquier tarea compleja sin supervisión humana,
            <span className="block mt-4 text-cyan-300 font-bold">
              ¿Cómo redefinirá esto el concepto mismo de trabajo humano?
            </span>
          </p>
        </div>
        
        <p className="mt-8 text-gray-300 max-w-2xl mx-auto">
          La respuesta determinará el futuro de las organizaciones en la próxima década.
        </p>
      </motion.div>

      {/* Autor y créditos */}
      <motion.div 
        className="mt-16 flex flex-col md:flex-row gap-8 p-8 bg-black rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/AL.svg"
            alt="Foto de Hugo Hormazabal"
            width={96}
            height={96}
          />
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-white text-xl mb-2">Hugo Hormazabal</h4>
          <p className="text-cyan-400 text-sm mb-4">Consultor Estratégico en IA & Transformación Digital</p>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Este análisis fue desarrollado utilizando técnicas avanzadas de investigación asistida por IA:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
                <span>Evaluación técnica de capacidades</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
                <span>Modelado de impacto económico</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
                <span>Análisis de implicaciones sociales</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
                <span>Proyección de escenarios futuros</span>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              El informe completo está disponible para suscriptores premium.
            </p>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default Article1;

