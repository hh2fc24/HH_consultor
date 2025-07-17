
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, Zap, BarChart, DollarSign, User } from 'lucide-react';
import GuideModal from '@/components/modals/GuideModal';

const Article3 = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
          Democratizando IA: <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Estrategias Prácticas para PyMEs
          </span>
        </motion.h1>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>1 Mayo 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>10 min de lectura</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-300" />
            <span>Implementación Práctica</span>
          </div>
        </div>
        
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Video destacado */}
      <motion.div 
        className="mb-12 rounded-2xl overflow-hidden border border-white/10 relative aspect-video"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover"
          poster="/fallback.jpg"
        >
          <source src="/333.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </motion.div>

      {/* Contenido del artículo */}
      <div className="prose prose-invert prose-lg max-w-none">
        <motion.p 
          className="lead text-xl text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Por mucho tiempo, la Inteligencia Artificial fue un privilegio reservado para grandes corporaciones. Hoy, ese paradigma está roto. No por tecnología, sino por necesidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="mb-6">
            Las PyMEs en Latinoamérica enfrentan tres realidades simultáneas: inflación operativa, clientes exigentes y mercados saturados. La IA no es un lujo en este escenario: 
            <span className="text-cyan-300 font-medium"> es una herramienta para sobrevivir y crecer.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mt-16 mb-6 text-white bg-gradient-to-r from-cyan-900/30 to-cyan-900/10 inline-block px-4 py-2 rounded-lg">
            IA de Bajo Costo, Alto Impacto
          </h2>
          
          <p className="mb-6">
            En nuestros talleres, mostramos cómo automatizar tareas repetitivas con herramientas accesibles. Sin código. Sin trauma. En menos de 10 días:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="p-5 bg-gradient-to-r from-cyan-900/10 to-cyan-900/5 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white">Asistentes 24/7</h3>
              </div>
              <p className="text-gray-300 text-sm">
                WhatsApp bots que responden consultas por menos de $50/mes
              </p>
            </div>
            <div className="p-5 bg-gradient-to-r from-purple-900/10 to-purple-900/5 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-white">Monitoreo Inteligente</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Scrapers que actualizan precios en tu e-commerce automáticamente
              </p>
            </div>
            <div className="p-5 bg-gradient-to-r from-cyan-800/10 to-cyan-800/5 rounded-xl border border-cyan-400/20">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-cyan-300" />
                <h3 className="font-bold text-white">Copilotos Creativos</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Redacción de propuestas y emails personalizados en segundos
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mt-16 mb-6 text-white bg-gradient-to-r from-purple-900/30 to-purple-900/10 inline-block px-4 py-2 rounded-lg">
            El Verdadero Valor: Liberar Potencial Humano
          </h2>
          
          <p className="mb-6">
            La IA no está reemplazando personas en las PyMEs: las está rescatando del agotamiento. No hay expansión sin foco, y no hay foco si el dueño hace todo.
          </p>

          <div className="my-10 p-6 border-l-4 border-cyan-400 bg-gradient-to-r from-cyan-900/10 to-cyan-900/5 rounded-r-lg">
            <blockquote className="text-xl italic text-white border-none p-0 m-0">
              “La IA democratizada no es sobre tecnología, es sobre tiempo recuperado para estrategia y crecimiento.”
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-6 mb-8">
            <div>
              <h3 className="font-bold text-white mb-3">Antes de IA</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <span>Dueños sobrecargados con tareas operativas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <span>Respuestas lentas a clientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <span>Decisiones basadas en intuición, no datos</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3">Con IA Implementada</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <span>Equipos enfocados en valor estratégico</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <span>Atención inmediata 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <span>Decisiones basadas en análisis en tiempo real</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mt-16 mb-6 text-white bg-gradient-to-r from-cyan-900/30 to-purple-900/30 inline-block px-4 py-2 rounded-lg">
            El Futuro No Es Digital. Es Estratégico.
          </h2>
          
          <p className="mb-6">
            Quien entienda esto, dejará de preguntarse "¿cómo compito contra los grandes?" y empezará a preguntarse 
            <span className="text-purple-300 font-medium"> "¿cómo multiplico lo que ya sé hacer?"</span>. Ahí comienza la verdadera revolución.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Caso Real: Tienda de Ropa Local</h3>
              <p className="text-gray-300">
                Implementamos un asistente de WhatsApp que gestiona pedidos, consultas de stock y seguimiento de envíos. Resultados en 30 días:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span className="text-gray-300">+35% ventas por atención 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span className="text-gray-300">15 horas semanales recuperadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span className="text-gray-300">Inversión recuperada en 18 días</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/30 rounded-xl border border-white/10 p-6 w-full">
                <div className="text-center">
                  <DollarSign className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                  <p className="text-lg font-bold text-white">Costo/Beneficio PyME</p>
                  <div className="text-3xl font-bold text-cyan-400 my-3">1:4.5</div>
                  <p className="text-gray-300">Retorno promedio en primeros 90 días</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Llamado a la acción */}
      <motion.div 
        className="mt-20 pt-10 border-t border-white/10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">¿Listo para implementar IA en tu PyME?</h3>
        <p className="mb-6 max-w-2xl mx-auto text-gray-300">
          Descarga nuestra guía gratuita: "10 Herramientas de IA para PyMEs con Menos de $100/mes"
        </p>
        
        <a
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white font-medium hover:from-cyan-500 hover:to-purple-500 transition-all cursor-pointer"
        >
          Descargar Guía Gratis
          <Zap className="w-5 h-5 ml-2 text-yellow-300" />
        </a>

      </motion.div>

      {/* Autor y créditos */}
      <motion.div 
        className="mt-16 flex flex-col md:flex-row gap-8 p-8 bg-black rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/AL.svg"
            alt="Foto de Hugo Hormazábal"
            width={96}
            height={96}
          />
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-white mb-1">Hugo Hormazábal</h4>
          <p className="text-gray-400 text-sm mb-3">Fundador de Altius Ignite</p>
          <p className="text-sm">
            "Trabajamos con más de 150 PyMEs latinoamericanas implementando soluciones de IA accesibles. Tu tamaño no es un límite, es tu ventaja ágil."
          </p>
        </div>
      </motion.div>

      {/* Componente del Modal */}
      <GuideModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      
    </article>
  );
};

export default Article3;
