'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Database, Users, Cpu, Send } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

// Definimos la estructura de nuestro quiz
const quizData = [
  {
    category: 'Datos',
    icon: <Database className="w-6 h-6 mx-auto mb-2 text-cyan-400" />,
    question: '¿Cómo describirías la gestión y acceso a los datos en tu empresa?',
    key: 'data',
    options: [
      { text: 'Descentralizados y de difícil acceso', value: 1 },
      { text: 'Disponibles pero no siempre estandarizados', value: 2 },
      { text: 'Centralizados, limpios y accesibles', value: 3 },
    ],
  },
  {
    category: 'Procesos',
    icon: <BarChart className="w-6 h-6 mx-auto mb-2 text-purple-400" />,
    question: '¿Los procesos clave de tu negocio están digitalizados y automatizados?',
    key: 'process',
    options: [
      { text: 'La mayoría son manuales y dependen de personas', value: 1 },
      { text: 'Algunos están digitalizados, pero no integrados', value: 2 },
      { text: 'Están mayormente automatizados e integrados', value: 3 },
    ],
  },
  {
    category: 'Equipo',
    icon: <Users className="w-6 h-6 mx-auto mb-2 text-yellow-400" />,
    question: '¿Cuál es la actitud de tu equipo frente a la adopción de nuevas tecnologías como la IA?',
    key: 'team',
    options: [
      { text: 'Hay escepticismo y resistencia al cambio', value: 1 },
      { text: 'Hay curiosidad pero poca iniciativa proactiva', value: 2 },
      { text: 'Hay un gran entusiasmo y deseo de experimentar', value: 3 },
    ],
  },
  {
    category: 'Tecnología',
    icon: <Cpu className="w-6 h-6 mx-auto mb-2 text-green-400" />,
    question: '¿Tu infraestructura tecnológica actual es flexible y escalable?',
    key: 'tech',
    options: [
      { text: 'Es rígida y costosa de modificar (legacy)', value: 1 },
      { text: 'Es una mezcla de sistemas nuevos y antiguos', value: 2 },
      { text: 'Es moderna, basada en la nube y escalable', value: 3 },
    ],
  },
];

const AIMaturityTest = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (key: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    // Avanza al siguiente paso automáticamente
    setTimeout(() => {
      if (step < quizData.length) {
        setStep(step + 1);
      }
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Aquí enviarías el lead a tu backend o servicio de email marketing
      console.log('Lead capturado:', { email, answers });
      setSubmitted(true);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    let profile = { title: '', description: '', recommendations: '' };

    if (totalScore <= 5) {
      profile = {
        title: 'Explorador Cauteloso',
        description: 'Tu empresa está en las primeras etapas de la adopción de IA. El potencial de crecimiento es enorme.',
        recommendations: 'Prioridad #1: Organizar y estandarizar tus fuentes de datos.'
      };
    } else if (totalScore <= 9) {
      profile = {
        title: 'Innovador Emergente',
        description: 'Tienes bases sólidas y has comenzado a experimentar. Ahora es el momento de escalar el impacto.',
        recommendations: 'Prioridad #1: Identificar un proyecto piloto de alto ROI para demostrar el valor.'
      };
    } else {
      profile = {
        title: 'Líder Optimizado por IA',
        description: 'Estás a la vanguardia. La IA ya es parte de tu estrategia y operación.',
        recommendations: 'Prioridad #1: Explorar IA generativa y modelos avanzados para crear nuevas ventajas competitivas.'
      };
    }
    
    const chartData = quizData.map(q => ({
        subject: q.category,
        A: answers[q.key] || 0,
        fullMark: 3,
    }));

    return { profile, chartData };
  };

  const { profile, chartData } = submitted ? calculateResults() : { profile: null, chartData: [] };

  const renderStep = () => {
    if (submitted && profile) {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center">
          <h3 className="text-xl font-bold text-white">Tu Perfil de Madurez IA es:</h3>
          <h2 className="text-3xl my-2 font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{profile.title}</h2>
          <p className="text-gray-400 mb-6">{profile.description}</p>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 3]} tick={false} axisLine={false} />
                <Radar name="Tu Puntuación" dataKey="A" stroke="#8884d8" fill="url(#colorUv)" fillOpacity={0.6} />
                <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none', borderRadius: '10px' }}/>
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-yellow-400/30">
            <p className="font-bold text-yellow-400">Próximo Paso Recomendado:</p>
            <p className="text-white">{profile.recommendations}</p>
          </div>
           <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold">
              Agendar Consulta Estratégica
           </button>
        </motion.div>
      );
    }
    
    if (step >= quizData.length) {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">¡Resultados Listos!</h2>
            <p className="text-gray-400 mb-6">Solo un paso más. Te enviaremos un reporte detallado a tu correo.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
                <input
                    type="email"
                    placeholder="Escribe tu mejor email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-0 outline-none transition-all"
                />
                <button type="submit" className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold">
                    <span>Ver Mi Perfil de Madurez</span>
                    <Send size={16} />
                </button>
            </form>
        </motion.div>
      );
    }

    const currentQuestion = quizData[step];
    return (
      <div className="p-8 text-center">
        <div className="h-2 w-full bg-gray-700 rounded-full mb-6">
            <motion.div
                className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                animate={{ width: `${((step + 1) / (quizData.length + 1)) * 100}%` }}
                transition={{ type: 'spring', stiffness: 50 }}
            />
        </div>
        <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
            >
                {currentQuestion.icon}
                <h2 className="text-2xl font-bold text-white mb-6">{currentQuestion.question}</h2>
                <div className="flex flex-col gap-3">
                    {currentQuestion.options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestion.key, option.value)}
                        className="w-full text-left p-4 bg-gray-800/50 rounded-lg border-2 border-gray-700 hover:border-cyan-400 transition-all"
                    >
                        {option.text}
                    </button>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return <>{renderStep()}</>;
};

export default AIMaturityTest;