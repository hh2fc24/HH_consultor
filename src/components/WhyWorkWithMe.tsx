
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Heart, LucideIcon } from 'lucide-react';

interface MethodStep {
  icon: LucideIcon;
  step: string;
  title: string;
  content: string;
  borderColor: string;
  gradient: string;
}

const WorldClassMethod: React.FC = () => {
  const methodology: MethodStep[] = [
    {
      icon: Brain,
      step: "Paso 1: Claridad Estratégica",
      title: "Diagnosticamos y Trazamos la Ruta",
      content: "Traducimos el potencial de la IA en una hoja de ruta clara, priorizada y alineada con tus objetivos de negocio.",
      borderColor: "hover:border-cyan-400/80",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: TrendingUp,
      step: "Paso 2: Impacto Medible",
      title: "Construimos e Implementamos la Solución",
      content: "Desarrollamos e integramos herramientas de IA a medida que generan un retorno de inversión tangible y liberan a tu equipo.",
      borderColor: "hover:border-purple-400/80",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Heart,
      step: "Paso 3: Empoderamiento Humano",
      title: "Empoderamos y Garantizamos la Adopción",
      content: "La mejor tecnología es la que se siente invisible. Te entregamos soluciones intuitivas que potencian el talento humano.",
      borderColor: "hover:border-indigo-400/80",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  // ... (variantes de animación sin cambios)

  return (
    <section className="relative overflow-hidden py-28 bg-black">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          // ... (animación sin cambios)
          className="text-center mb-20"
        >
           {/* ✅ Título con tamaño reducido y acentos de color de marca */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-100 tracking-tighter">
            El Método: <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Claridad, Impacto y Humanidad</span>
          </h1>
           {/* ✅ Subtítulo con tamaño reducido para más "aire" */}
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mt-6">
            Para navegar la era de la IA no necesitas más complejidad, sino un socio con un método probado para entregar resultados.
          </p>
        </motion.div>

        {/* ✅ Testimonio más compacto y elegante */}
        <motion.div
         // ... (animación sin cambios)
          className="mb-24 max-w-3xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-6">
            <Image
  src="/T.png" // Asegúrate de tener esta imagen en /public
  alt="Testimonio de Tenpo"
  width={80}
  height={80}
  className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover border-2 border-white/20"
/>
<div className="text-left">
  <p className="text-base md:text-lg italic text-gray-300">
    “Con Hugo rediseñamos nuestra operación de contact center, mejorando significativamente la <span className="text-white font-medium">experiencia de cliente</span> y los tiempos de respuesta.”
  </p>
  <p className="mt-3 text-sm font-semibold text-white">
    Equipo de Operaciones, Tenpo
  </p>
</div>
            </div>
          </div>
        </motion.div>
        
        {/* ✅ Tarjetas con proporciones y tipografía reducidas */}
        <motion.div
          // ... (animación sin cambios)
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {methodology.map((step) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                // ... (animación sin cambios)
                className="group relative"
              >
                <div className={`relative h-full p-6 rounded-xl border border-white/10 bg-zinc-900/50 transition-colors duration-300 ${step.borderColor}`}>
                  <div className="mb-5">
                    <IconComponent className="w-7 h-7 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-white/70 tracking-wider">{step.step}</p>
                    {/* ✅ Título de la tarjeta ahora usa el gradiente de marca */}
                    <h4 className={`text-xl font-semibold leading-tight bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* ... (CTA sin cambios) */}
      </div>
    </section>
  );
};

export default WorldClassMethod;
