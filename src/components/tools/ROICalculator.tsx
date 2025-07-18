'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, DollarSign, Send, ArrowLeft } from 'lucide-react';


// Definimos los pasos de la calculadora
const calculatorSteps = [
  {
    key: 'employees',
    icon: <Users className="w-8 h-8 mx-auto mb-4 text-cyan-400" />,
    question: '¿Cuántos empleados realizan tareas que podrían ser optimizadas?',
    min: 1,
    max: 200,
    unit: 'empleados',
  },
  {
    key: 'hours',
    icon: <Clock className="w-8 h-8 mx-auto mb-4 text-purple-400" />,
    question: 'En promedio, ¿cuántas horas a la SEMANA dedica cada uno a estas tareas?',
    min: 1,
    max: 40,
    unit: 'horas/sem',
  },
  {
    key: 'cost',
    icon: <DollarSign className="w-8 h-8 mx-auto mb-4 text-yellow-400" />,
    question: '¿Cuál es el costo promedio por hora de estos empleados (en USD)?',
    min: 5,
    max: 100,
    unit: 'USD/hora',
  },
];

const ROICalculator = () => {
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState({
    employees: 10,
    hours: 5,
    cost: 15,
  });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (key: string, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Lead ROI Capturado:', { email, inputs });
      setSubmitted(true);
    }
  };

  const calculateResults = () => {
    const { employees, hours, cost } = inputs;
    // Cálculo anual: horas/semana * 52 semanas/año
    const annualHoursSaved = employees * hours * 52;
    const annualCostSaved = annualHoursSaved * cost;
    const productivityGain = Math.round((hours / 40) * 100); // % de la semana laboral de 40h

    const chartData = [
      {
        name: 'Costos',
        'Costo Actual': annualCostSaved,
        'Costo con IA': annualCostSaved * 0.2, // Asumiendo un costo del 20% para la solución IA
      },
    ];

    return { annualHoursSaved, annualCostSaved, productivityGain, chartData };
  };

  const renderContent = () => {
    if (submitted) {
      const { annualHoursSaved, annualCostSaved, productivityGain } = calculateResults();
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Tu Potencial de Ahorro Anual
          </h2>
          <div className="my-8">
            <p className="text-lg text-gray-400">Ahorro Estimado</p>
            <p className="text-6xl font-bold text-cyan-400 my-2">
              ${annualCostSaved.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-lg text-gray-400">USD / Año</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white mb-8">
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <p className="text-3xl font-bold text-purple-400">{annualHoursSaved.toLocaleString()}</p>
              <p className="text-gray-400">Horas recuperadas al año</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <p className="text-3xl font-bold text-yellow-400">+{productivityGain}%</p>
              <p className="text-gray-400">Aumento de productividad</p>
            </div>
          </div>
          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold text-lg">
            Agendar Consulta de ROI
          </button>
        </motion.div>
      );
    }

    if (step >= calculatorSteps.length) {
      return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">¡Cálculos listos!</h2>
          <p className="text-gray-400 mb-6">Ingresa tu email para ver tu reporte de ROI personalizado.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-0 outline-none transition-all"
            />
            <button type="submit" className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold">
              <span>Ver Mi Reporte</span>
              <Send size={16} />
            </button>
             <button type="button" onClick={handleBack} className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2 mt-2">
                <ArrowLeft size={16} />
                Volver
            </button>
          </form>
        </motion.div>
      );
    }

    const currentStep = calculatorSteps[step];
    const value = inputs[currentStep.key as keyof typeof inputs];

    return (
      <div className="p-8 text-center relative">
        <div className="h-2 w-full bg-gray-700 rounded-full mb-8">
          <motion.div
            className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            animate={{ width: `${((step + 1) / (calculatorSteps.length + 1)) * 100}%` }}
            transition={{ type: 'spring', stiffness: 50 }}
          />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep.icon}
            <h2 className="text-2xl font-bold text-white mb-6 mt-2 max-w-md mx-auto">{currentStep.question}</h2>
            <div className="my-8">
              <span className="text-4xl font-bold text-white">{value.toLocaleString()}</span>
              <span className="text-lg text-gray-400 ml-2">{currentStep.unit}</span>
            </div>
            <input
              type="range"
              min={currentStep.min}
              max={currentStep.max}
              value={value}
              onChange={(e) => handleInputChange(currentStep.key, Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg accent-cyan-400"
            />
             <div className="flex justify-between w-full text-xs text-gray-400 mt-2">
                <span>{currentStep.min}</span>
                <span>{currentStep.max}</span>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-10">
          <button onClick={handleBack} disabled={step === 0} className="px-6 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:hover:text-gray-400 transition-all">
            Atrás
          </button>
          <button onClick={handleNext} className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-cyan-500 transition-all">
            Siguiente
          </button>
        </div>
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default ROICalculator;