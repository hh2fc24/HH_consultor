'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Clock, DollarSign, Zap, Shield } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: <HelpCircle className="w-5 h-5 text-cyan-400" />,
      question: "¿Qué hace exactamente un consultor estratégico en IA?",
      answer: "Como consultor estratégico en IA, mi trabajo es traducir la complejidad tecnológica en ventaja competitiva real. No me enfoco en la tecnología por sí misma, sino en cómo puede ayudarte a pensar mejor, decidir con más claridad y liderar con mayor impacto. Analizo tu negocio, identifico oportunidades específicas donde la IA puede generar valor, y diseño soluciones a medida que se integran naturalmente en tus procesos existentes.",
      category: "Servicios"
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-400" />,
      question: "¿Cuánto tiempo toma implementar una solución de IA?",
      answer: "El tiempo varía según la complejidad del proyecto, pero mi metodología está diseñada para generar resultados rápidos. Para soluciones específicas como Atlas IA para Inmobiliarias o el Asistente Dental IA, el tiempo de implementación es de 2-4 semanas. Para proyectos de transformación más amplios, trabajamos en fases de 4-8 semanas cada una, asegurando que veas valor desde la primera fase.",
      category: "Proceso"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-yellow-400" />,
      question: "¿Cuál es la inversión típica y el ROI esperado?",
      answer: "La inversión varía según el alcance del proyecto, pero mis clientes típicamente ven un ROI del 250-400% en los primeros 3-6 meses. Por ejemplo, nuestros clientes han ahorrado desde $20k mensuales hasta $2M+ en costos operativos. Ofrezco una consulta estratégica inicial gratuita donde evaluamos tu caso específico y proyectamos el ROI esperado antes de cualquier compromiso.",
      category: "Inversión"
    },
    {
      icon: <Zap className="w-5 h-5 text-green-400" />,
      question: "¿Necesito conocimientos técnicos para trabajar contigo?",
      answer: "Absolutamente no. Mi especialidad es democratizar la IA, lo que significa que trabajo con líderes y empresarios que no necesitan volverse expertos técnicos. Mi rol es ser el puente entre la complejidad tecnológica y tus objetivos de negocio. Te entrego soluciones que se sienten intuitivas y naturales, con toda la capacitación necesaria para que tu equipo las adopte sin fricción.",
      category: "Requisitos"
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      question: "¿Cómo garantizas la seguridad y privacidad de los datos?",
      answer: "La seguridad es fundamental en todas mis implementaciones. Trabajo con estándares de seguridad empresarial, incluyendo encriptación de datos, accesos controlados y cumplimiento de regulaciones como GDPR. Todas las soluciones se diseñan con privacidad por diseño, y puedo trabajar tanto con soluciones en la nube como on-premise según tus requerimientos de seguridad específicos.",
      category: "Seguridad"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-indigo-400" />,
      question: "¿Qué diferencia a Altius Ignite de otros consultores de IA?",
      answer: "La diferencia está en mi enfoque profundamente humano y mi metodología probada. Mientras otros se enfocan en la tecnología, yo me enfoco en el impacto. Mi experiencia combinada en ventas consultivas, análisis económico, y liderazgo en Fortune 500 me permite entender tanto el lado técnico como el estratégico. Además, mi compromiso es con resultados medibles: no cobro por horas de consultoría, sino por valor entregado.",
      category: "Diferenciación"
    }
  ];

  const categories = ["Todos", "Servicios", "Proceso", "Inversión", "Requisitos", "Seguridad", "Diferenciación"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredFaqs = selectedCategory === "Todos" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background inteligente */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Encabezado */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Preguntas Frecuentes</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">Respuestas Claras</span> para Decisiones Inteligentes
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Las respuestas a las preguntas más comunes sobre trabajar conmigo y implementar IA en tu negocio
            </p>
          </div>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Lista de FAQs */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden relative group"
              >
                {/* Efecto "forged in stone" */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0"></div>
                </div>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative z-10 w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-16">
                        <div className="border-l-2 border-cyan-500/30 pl-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full">
                            <span className="text-xs text-cyan-400 font-medium">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Tienes una pregunta específica?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Agenda una consulta estratégica gratuita y resolvamos juntos cómo la IA puede transformar tu negocio específico.
              </p>
              
              <motion.a
                href="https://wa.me/59177028880"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-xl text-white font-semibold shadow-lg shadow-cyan-500/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Hacer mi Pregunta
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

