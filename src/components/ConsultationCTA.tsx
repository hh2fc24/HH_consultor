
// src/components/ConsultationCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const ConsultationCTA = () => {
  const theme = {
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    textGradient: 'from-cyan-400 to-indigo-500',
  };
  
  // Array con los nombres de las marcas para mostrar como texto
  const partnerNames = ['Cencosud Scotiabank', 'Tenpo', 'SONDA', 'MetLife'];

  return (
    <section id="contacto" className="py-24 bg-black relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-900/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* --- Columna Izquierda: La Propuesta de Valor --- */}
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-sm">El Siguiente Paso</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Una Conversación.
                  <span className={`block ${theme.textGradient} bg-clip-text text-transparent`}>
                    Potencial Infinito.
                  </span>
                </h2>

                <p className="text-lg text-gray-300 mb-6">
                  Esto no es una llamada de ventas. Es la primera sesión de trabajo en la transformación de tu negocio. En 30 minutos, obtendrás:
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-white">Un <strong className="font-semibold">diagnóstico claro</strong> de tus mayores oportunidades de IA.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-white">Al menos <strong className="font-semibold">una estrategia accionable</strong> que puedes implementar de inmediato.</span>
                  </li>
                </ul>

                <motion.a
                  href="https://wa.me/59177028880?text=Hola,%20Hugo.%20Quisiera%20agendar%20mi%20Sesión%20Estratégica%20de%20IA."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.2)' }}
                  className={`inline-flex items-center gap-3 px-8 py-4 ${theme.gradient} rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300`}
                >
                  <span>Solicitar mi Sesión Estratégica</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-green-400">Mi Garantía de Poder:</p>
                  <p className="text-xs text-gray-400">
                    Si al final de nuestra sesión no sientes que recibiste un valor inmenso, haré una donación de $100 a la caridad de tu elección. Tu tiempo es invaluable, y lo respeto.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* --- Columna Derecha: El Elemento Humano y Confianza --- */}
            <div className="relative min-h-[400px] lg:min-h-0">
              <Image
                src="/HHweb.svg" // <-- Tu foto profesional aquí
                alt="Hugo Hormazábal - Consultor Estratégico en IA"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent lg:bg-gradient-to-l lg:from-gray-900/80 lg:via-gray-900/50 lg:to-transparent"></div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute bottom-0 left-0 p-8 md:p-12 w-full"
              >
                <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">CON LA CONFIANZA DE LÍDERES DE LA INDUSTRIA</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {partnerNames.map(name => (
                    <span 
                      key={name} 
                      className="text-gray-500 font-semibold text-sm transition-colors duration-300 hover:text-white"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
