'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  MessageSquare, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap
} from 'lucide-react';

interface LeadCaptureFormProps {
  isVisible: boolean;
  onSubmit: (data: any) => void;
  onSkip: () => void;
  initialProblem?: string;
}

export default function LeadCaptureForm({ 
  isVisible, 
  onSubmit, 
  onSkip, 
  initialProblem = '' 
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    problem: initialProblem,
    budget: '',
    urgency: 'medium'
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    {
      title: 'Información básica',
      fields: ['name', 'company']
    },
    {
      title: 'Contacto',
      fields: ['email', 'phone']
    },
    {
      title: 'Tu proyecto',
      fields: ['problem', 'budget', 'urgency']
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit({
      ...formData,
      timestamp: new Date(),
      source: 'chat_form'
    });
    
    setIsSubmitting(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Zap className="text-white" size={24} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Consulta Gratuita Personalizada
            </h3>
            <p className="text-slate-300 text-sm">
              Completa estos datos para que Hugo pueda preparar una propuesta específica para ti
            </p>
          </div>

          {/* Progress bar */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index <= currentStep
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                  animate={index === currentStep ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {index < currentStep ? <CheckCircle2 size={16} /> : index + 1}
                </motion.div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-2 rounded-full ${
                      index < currentStep ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-slate-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 mb-6"
              >
                {/* Step 0: Información básica */}
                {currentStep === 0 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <User size={16} className="inline mr-2" />
                        ¿Cómo te llamas?
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Building2 size={16} className="inline mr-2" />
                        ¿Cuál es tu empresa? (opcional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateField('company', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </>
                )}

                {/* Step 1: Contacto */}
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Mail size={16} className="inline mr-2" />
                        Email de contacto
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="tu@empresa.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Phone size={16} className="inline mr-2" />
                        WhatsApp (opcional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </>
                )}

                {/* Step 2: Proyecto */}
                {currentStep === 2 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare size={16} className="inline mr-2" />
                        ¿Qué proceso quieres automatizar?
                      </label>
                      <textarea
                        value={formData.problem}
                        onChange={(e) => updateField('problem', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                        placeholder="Describe el proceso que más tiempo te consume..."
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Presupuesto aproximado (opcional)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => updateField('budget', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="<500">Menos de $500 USD</option>
                        <option value="500-2000">$500 - $2,000 USD</option>
                        <option value="2000-5000">$2,000 - $5,000 USD</option>
                        <option value="5000+">Más de $5,000 USD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Clock size={16} className="inline mr-2" />
                        ¿Qué tan urgente es?
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'low', label: 'Explorando', color: 'from-slate-600 to-slate-700' },
                          { value: 'medium', label: 'Este mes', color: 'from-yellow-600 to-orange-600' },
                          { value: 'high', label: 'Urgente', color: 'from-red-600 to-pink-600' }
                        ].map((option) => (
                          <motion.button
                            key={option.value}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateField('urgency', option.value)}
                            className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                              formData.urgency === option.value
                                ? `bg-gradient-to-r ${option.color} text-white`
                                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                            }`}
                          >
                            {option.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between">
              <div>
                {currentStep > 0 && (
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevStep}
                    className="px-4 py-2 rounded-xl bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-all duration-300"
                  >
                    Anterior
                  </motion.button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onSkip}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-slate-300 transition-all duration-300"
                >
                  Saltar por ahora
                </motion.button>

                {currentStep < steps.length - 1 ? (
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                  >
                    Siguiente
                    <ArrowRight size={16} />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:from-green-500 hover:to-emerald-500 disabled:from-slate-600 disabled:to-slate-700 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Clock size={16} />
                        </motion.div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar consulta
                        <CheckCircle2 size={16} />
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
