'use client';

import { motion } from 'framer-motion';
import { BarChart, Zap, Clock, TrendingUp } from 'lucide-react';

const ResultsShowcase = () => {
  const results = [
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      value: "45%",
      label: "Reducción de costos operativos",
      description: "En procesos administrativos mediante IA"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      value: "20x",
      label: "Aceleración de análisis",
      description: "De datos financieros complejos"
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-300" />,
      value: "30h/sem",
      label: "Tiempo recuperado",
      description: "Para liderazgo estratégico"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-300" />,
      value: "+67%",
      label: "Mejora en CX",
      description: "Con sistemas de IA predictiva"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resultados <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Transformadores</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Impacto real generado en empresas que implementaron nuestras soluciones de IA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/20 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-black/30 flex items-center justify-center mb-4">
                {result.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{result.value}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{result.label}</h3>
              <p className="text-gray-300">{result.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl italic text-white">
                "Trabajar con Hugo fue el punto de inflexión para nuestra transformación digital. En 3 meses implementamos soluciones de IA que nos ahorran $20k mensuales."
              </p>
              <div className="mt-4">
                <div className="font-bold text-white">Equipo Directivo Retail Financiero</div>
                <div className="text-gray-400">Cencosud Scotiabank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;