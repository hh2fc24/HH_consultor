
// src/components/blog/Article2.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, MessageSquare } from 'lucide-react';

const Article2 = () => {
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
          El Futuro de la Experiencia del Cliente: <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            IA Conversacional como Ventaja Competitiva
          </span>
        </motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>8 Mayo 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>6 min de lectura</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-cyan-300" />
            <span>Customer Experience</span>
          </div>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Imagen destacada */}
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
          poster="/fallback.jpg" // opcional: si tienes una imagen de carga previa
        >
          <source src="/222.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
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
          Cada vez que un cliente llama, escribe o interactúa con una marca, está haciendo una pregunta implícita:
          <span className="text-cyan-300 font-medium"> "¿Me entiendes?"</span>.
          La respuesta tradicional ha sido scripts acartonados y chatbots que parecen operadores de call center en sus primeros días.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mt-16 mb-6 text-white bg-gradient-to-r from-cyan-900/30 to-cyan-900/10 inline-block px-4 py-2 rounded-lg">
            El Cambio Fundamental: De Responder a Comprender
          </h2>

          <p className="mb-6">
            La IA conversacional cambia esa lógica. No solo responde: escucha, interpreta contexto, recuerda y adapta. Implementamos una solución de este tipo para un cliente con más de 150,000 interacciones mensuales. El resultado fue transformador:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="p-5 bg-gradient-to-r from-cyan-900/10 to-cyan-900/5 rounded-xl border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">87%</div>
              <h3 className="font-bold text-white mb-2">Tasa de resolución</h3>
              <p className="text-gray-300 text-sm">En primer contacto con el cliente</p>
            </div>
            <div className="p-5 bg-gradient-to-r from-purple-900/10 to-purple-900/5 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">36%</div>
              <h3 className="font-bold text-white mb-2">Reducción</h3>
              <p className="text-gray-300 text-sm">En tickets gestionados por humanos</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mt-16 mb-6 text-white bg-gradient-to-r from-purple-900/30 to-purple-900/10 inline-block px-4 py-2 rounded-lg">
            Más Que Tecnología: Empatía Programada
          </h2>

          <p className="mb-6">
            Lo poderoso no fue automatizar, sino personalizar a escala. Un cliente que se siente escuchado, vuelve. Y el secreto no está en parecer humano: está en ser útil, rápido y certero.
          </p>

          <div className="my-10 p-6 border-l-4 border-purple-400 bg-gradient-to-r from-purple-900/10 to-purple-900/5 rounded-r-lg">
            <blockquote className="text-xl italic text-white border-none p-0 m-0">
              “El cliente no siempre tiene razón. Pero siempre merece ser escuchado con inteligencia.”
            </blockquote>
          </div>

          <p className="mb-6">
            La revolución de CX no es estética ni cosmética. Es una revolución semántica. La que distingue un chatbot molesto de un copiloto confiable que entiende necesidades complejas y anticipa soluciones.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="text-xl font-semibold text-white mb-4">
            Implementación Estratégica:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-cyan-300 font-bold mb-2">1. Diagnóstico</div>
              <p className="text-gray-300 text-sm">Identificar puntos críticos de contacto con el cliente</p>
            </div>
            <div>
              <div className="text-purple-300 font-bold mb-2">2. Diseño Conversacional</div>
              <p className="text-gray-300 text-sm">Crear flujos que reflejen la voz de tu marca</p>
            </div>
            <div>
              <div className="text-cyan-400 font-bold mb-2">3. Integración</div>
              <p className="text-gray-300 text-sm">Conectar con sistemas CRM y bases de conocimiento</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Caso de estudio */}
      <motion.div
        className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">Caso Real: Transformando Servicio al Cliente</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-cyan-400 mb-3">Desafío Inicial</h4>
            <p className="text-gray-300 mb-6">
              Una empresa líder en retail con alta rotación de personal en servicio al cliente y tiempos de espera de más de 15 minutos para resolver consultas simples.
            </p>

            <h4 className="font-bold text-purple-400 mb-3">Solución IA</h4>
            <p className="text-gray-300">
              Implementamos un asistente conversacional capaz de resolver el 72% de consultas comunes en menos de 2 minutos, escalando casos complejos a agentes humanos con contexto completo.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Resultados Clave</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
                <span className="text-gray-300">Reducción del 40% en costos operativos de servicio al cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
                <span className="text-gray-300">Incremento del 28% en NPS (Satisfacción del cliente)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
                <span className="text-gray-300">Agentes humanos enfocados en consultas de alto valor</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Llamado a la acción profesional */}
      <motion.div
        className="mt-20 pt-10 border-t border-white/10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">¿Listo para transformar tu experiencia de cliente?</h3>
        <p className="mb-6 max-w-2xl mx-auto text-gray-300">
          Agenda una demostración personalizada de cómo la IA conversacional puede revolucionar la relación con tus clientes y optimizar tus operaciones.
        </p>
        <a
          href="/contacto"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white font-medium hover:from-cyan-500 hover:to-purple-500 transition-all"
        >
          Solicitar Demostración
        </a>
      </motion.div>

      {/* Autor y créditos */}
      <motion.div
        className="mt-16 flex flex-col md:flex-row gap-8 p-8 bg-black rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
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
          <h4 className="font-bold text-white mb-1">Hugo Hormazábal</h4>
          <p className="text-gray-400 text-sm mb-3">Consultor Estratégico en IA & Transformación Digital</p>
          <p className="text-sm">
            Este análisis se basa en implementaciones reales con empresas líderes en Latinoamérica. Los resultados pueden variar según el contexto organizacional.
          </p>
        </div>
      </motion.div>
    </article>
  );
};

export default Article2;