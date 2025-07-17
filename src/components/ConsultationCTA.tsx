
// src/components/ConsultationCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, ArrowRight } from 'lucide-react';

const ConsultationCTA = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-900/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Encabezado modificado */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para multiplicar tus ingresos con
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Superpoderes de IA?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Agenda una consultoría estratégica donde definiremos cómo la IA puede potenciar tu operación específicamente
          </p>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-black/30 flex items-center justify-center">
                <CalendarCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-cyan-300">Sesión 1:1</div>
                <div className="text-xl font-bold text-white">Consulta Estratégica</div>
              </div>
            </div>
            
            <motion.a
              href="/consulta"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white font-semibold flex items-center gap-2"
            >
              Agendar Ahora
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <h4 className="font-bold text-white mb-2">Enfoque Personalizado</h4>
              <p className="text-gray-300 text-sm">Soluciones específicas para tu industria y desafíos únicos</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <h4 className="font-bold text-white mb-2">Diagnóstico Preciso</h4>
              <p className="text-gray-300 text-sm">Identificamos oportunidades reales de implementación</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <h4 className="font-bold text-white mb-2">ROI Garantizado</h4>
              <p className="text-gray-300 text-sm">Planes con impacto medible en tus resultados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
