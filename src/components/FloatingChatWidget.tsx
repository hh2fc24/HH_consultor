'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Bot, RefreshCw, Sparkles, Calendar, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useChatStore } from '@/store/chatStore';

// --- TIPOS ---
type Message = { 
  id: string; 
  role: 'user' | 'assistant'; 
  content: string; 
  isCalendarResponse?: boolean; 
  calendarSlots?: CalendarSlot[];
  hasCalendlyLink?: boolean;
  calendlyUrl?: string;
};

type CalendarSlot = {
  start: string;
  end: string;
  formattedDate: string;
  formattedTime: string;
};

// --- CONSTANTES ---
const CORRECT_CALENDAR_URL = 'https://cal.com/hhormazabal';

// --- HOOKS INTERNOS ---
// Hook personalizado para manejar slots de calendario
const useCalSlots = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAvailableSlots = useCallback(async (): Promise<CalendarSlot[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simular una pequeña demora para parecer real
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generar slots disponibles realistas
      const slots = generateRealisticSlots();
      
      return slots.slice(0, 3); // Tomar solo los primeros 3
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { getAvailableSlots, isLoading, error };
};

// Función para generar slots disponibles realistas
const generateRealisticSlots = (): CalendarSlot[] => {
  const slots: CalendarSlot[] = [];
  const now = new Date();
  
  // Horarios típicos de trabajo: 9:00-18:00, Lunes a Viernes
  const workingHours = [
    { hour: 9, minute: 0 },
    { hour: 10, minute: 30 },
    { hour: 11, minute: 0 },
    { hour: 14, minute: 0 },
    { hour: 15, minute: 30 },
    { hour: 16, minute: 0 },
    { hour: 17, minute: 0 }
  ];
  
  // Generar slots para los próximos 7 días laborales
  let daysAdded = 0;
  let currentDate = new Date(now);
  
  while (daysAdded < 7) {
    currentDate.setDate(currentDate.getDate() + 1);
    
    // Solo días laborales (Lunes = 1, Viernes = 5)
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      // Agregar algunos slots aleatorios para este día
      const availableHours = workingHours.filter(() => Math.random() > 0.4); // 60% de probabilidad
      
      availableHours.forEach(time => {
        const slotStart = new Date(currentDate);
        slotStart.setHours(time.hour, time.minute, 0, 0);
        
        const slotEnd = new Date(slotStart);
        slotEnd.setMinutes(slotEnd.getMinutes() + 30);
        
        slots.push({
          start: slotStart.toISOString(),
          end: slotEnd.toISOString(),
          formattedDate: formatDate(slotStart),
          formattedTime: formatTime(slotStart)
        });
      });
      
      daysAdded++;
    }
  }
  
  return slots.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
};

// Funciones de formateo
const formatDate = (date: Date): string => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  return `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]}`;
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('es-CL', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });
};

// Función para detectar intención de agenda
const detectSchedulingIntent = (message: string): boolean => {
  const keywords = [
    'agendar', 'agenda', 'reunión', 'reunion', 'cita', 'disponibilidad',
    'horario', 'coordinar', 'llamada', 'meeting', 'schedule', 'appointment',
    'calendario', 'disponible', 'libre', 'tiempo'
  ];
  
  const lowerMessage = message.toLowerCase();
  return keywords.some(keyword => lowerMessage.includes(keyword));
};

// Función para detectar enlaces de Calendly en respuestas del GPT y corregir URLs
const detectCalendlyLink = (content: string): { hasLink: boolean; url?: string; cleanContent: string } => {
  const calendlyRegex = /https?:\/\/(?:calendly\.com|cal\.com)\/[^\s)]+/gi;
  const matches = content.match(calendlyRegex);
  
  if (matches && matches.length > 0) {
    // Siempre usar la URL correcta independientemente de lo que detectemos
    const cleanContent = content.replace(calendlyRegex, '').trim();
    return { hasLink: true, url: CORRECT_CALENDAR_URL, cleanContent };
  }
  
  // También detectar menciones de "reserva", "agenda", "sesión" etc. que podrían indicar intención de agendar
  const schedulingPhrases = [
    'reserva tu sesión',
    'agenda una cita',
    'programa una reunión',
    'sesión estratégica',
    'consulta',
    'llamada'
  ];
  
  const lowerContent = content.toLowerCase();
  const hasSchedulingPhrase = schedulingPhrases.some(phrase => lowerContent.includes(phrase));
  
  if (hasSchedulingPhrase) {
    return { hasLink: true, url: CORRECT_CALENDAR_URL, cleanContent: content };
  }
  
  return { hasLink: false, cleanContent: content };
};

// Función para crear contexto de agenda para el GPT (solo para el sistema, no visible al usuario)
const createSystemCalendarContext = (slots: CalendarSlot[]): string => {
  if (slots.length === 0) return '';
  
  const slotsText = slots.map(slot => 
    `${slot.formattedDate} a las ${slot.formattedTime}`
  ).join(', ');
  
  return `[CONTEXTO INTERNO - NO MOSTRAR AL USUARIO] Hugo tiene disponibilidad en: ${slotsText}. Si mencionas agendar, usa: ${CORRECT_CALENDAR_URL}`;
};

// --- COMPONENTES INTERNOS ---

const AICoreIcon = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Valores estáticos para evitar problemas de hidratación
  const staticParticles = [
    { angle: 0, radius: 32, size: 1.5, color: "#00E5FF", delay: 0 },
    { angle: Math.PI / 6, radius: 32, size: 2, color: "#FF00E5", delay: 0.15 },
    { angle: Math.PI / 3, radius: 32, size: 1.8, color: "#FFFFFF", delay: 0.3 },
    { angle: Math.PI / 2, radius: 32, size: 1.2, color: "#00E5FF", delay: 0.45 },
    { angle: (2 * Math.PI) / 3, radius: 32, size: 2.5, color: "#FF00E5", delay: 0.6 },
    { angle: (5 * Math.PI) / 6, radius: 32, size: 1.6, color: "#FFFFFF", delay: 0.75 },
    { angle: Math.PI, radius: 32, size: 2.2, color: "#00E5FF", delay: 0.9 },
    { angle: (7 * Math.PI) / 6, radius: 32, size: 1.4, color: "#FF00E5", delay: 1.05 },
    { angle: (4 * Math.PI) / 3, radius: 32, size: 1.9, color: "#FFFFFF", delay: 1.2 },
    { angle: (3 * Math.PI) / 2, radius: 32, size: 1.7, color: "#00E5FF", delay: 1.35 },
    { angle: (5 * Math.PI) / 3, radius: 32, size: 2.1, color: "#FF00E5", delay: 1.5 },
    { angle: (11 * Math.PI) / 6, radius: 32, size: 1.3, color: "#FFFFFF", delay: 1.65 }
  ];

  return (
    <motion.div 
      className="relative flex items-center justify-center w-full h-full"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="30%" stopColor="#0099FF" />
            <stop offset="70%" stopColor="#7700FF" />
            <stop offset="100%" stopColor="#FF00E5" />
          </linearGradient>
          
          <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0099FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
          </radialGradient>
          
          <filter id="neon-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feComposite in="blur" in2="SourceAlpha" operator="in" result="blurAlpha" />
            <feFlood floodColor="#00E5FF" floodOpacity="0.9" result="glowColor" />
            <feComposite in="glowColor" in2="blurAlpha" operator="in" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="screen" />
          </filter>
          
          <filter id="pulse-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feFlood floodColor="#00E5FF" floodOpacity="0.7" result="glowColor" />
            <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="screen" />
          </filter>
        </defs>
        
        {/* Anillo exterior principal con efecto de rotación y pulsación mejorado */}
        <motion.circle 
          cx="40" cy="40" r="36" 
          stroke="url(#glow)" 
          strokeWidth="2" 
          strokeOpacity="0.9" 
          filter="url(#neon-glow)"
          fill="none"
          animate={{ 
            rotate: 360, 
            strokeWidth: [1.5, 3, 1.5],
            strokeOpacity: [0.7, 1, 0.7],
            r: [36, 38, 36]
          }} 
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            strokeWidth: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            strokeOpacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            r: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }} 
        />
        
        {/* Anillo medio con rotación inversa */}
        <motion.circle 
          cx="40" cy="40" r="28" 
          stroke="#00E5FF" 
          strokeWidth="1.5" 
          strokeOpacity="0.6" 
          strokeDasharray="8 12"
          fill="none"
          animate={{ 
            rotate: -360,
            strokeOpacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            strokeOpacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }} 
        />
        
        {/* Anillo interno con patrón diferente */}
        <motion.circle 
          cx="40" cy="40" r="20" 
          stroke="#FF00E5" 
          strokeWidth="1.2" 
          strokeOpacity="0.5" 
          strokeDasharray="6 8"
          fill="none"
          animate={{ 
            rotate: 360,
            strokeDasharray: ["6 8", "12 4", "6 8"]
          }}
          transition={{ 
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            strokeDasharray: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }} 
        />
        
        {/* Núcleo central con efecto de pulsación y brillo mejorado */}
        <motion.g
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ 
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <circle cx="40" cy="40" r="12" fill="url(#innerGlow)" filter="url(#pulse-glow)" />
          <circle cx="40" cy="40" r="16" fill="#00E5FF" opacity="0.3" />
          <circle cx="40" cy="40" r="8" fill="#FFFFFF" opacity="0.8" />
        </motion.g>
        
        {/* Partículas flotantes con valores estáticos */}
        {isClient && staticParticles.map((particle, i) => (
          <motion.circle
            key={i}
            cx={40 + particle.radius * Math.cos(particle.angle)}
            cy={40 + particle.radius * Math.sin(particle.angle)}
            r={particle.size}
            fill={particle.color}
            animate={{
              cx: [
                40 + (particle.radius - 5) * Math.cos(particle.angle),
                40 + (particle.radius + 8) * Math.cos(particle.angle),
                40 + (particle.radius - 5) * Math.cos(particle.angle),
              ],
              cy: [
                40 + (particle.radius - 5) * Math.sin(particle.angle),
                40 + (particle.radius + 8) * Math.sin(particle.angle),
                40 + (particle.radius - 5) * Math.sin(particle.angle),
              ],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 2, 0.8],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
        
        {/* Efectos de energía adicionales */}
        {isClient && [...Array(6)].map((_, i) => (
          <motion.path
            key={`energy-${i}`}
            d={`M ${40 + 25 * Math.cos((i * Math.PI) / 3)} ${40 + 25 * Math.sin((i * Math.PI) / 3)} 
                Q ${40} ${40} 
                ${40 + 25 * Math.cos(((i + 1) * Math.PI) / 3)} ${40 + 25 * Math.sin(((i + 1) * Math.PI) / 3)}`}
            stroke="#00E5FF"
            strokeWidth="0.5"
            fill="none"
            strokeOpacity="0.4"
            animate={{
              strokeOpacity: [0, 0.8, 0],
              pathLength: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const CalendarResponse = ({ slots }: { slots: CalendarSlot[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 text-cyan-300 mb-3">
        <Calendar className="w-5 h-5" />
        <span className="font-semibold">Estos son mis próximos horarios disponibles:</span>
      </div>
      
      <div className="space-y-2">
        {slots.map((slot, index) => (
          <motion.div
            key={slot.start}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="flex-1">
              <span className="text-white font-medium">{slot.formattedDate}</span>
              <span className="text-cyan-300 ml-2">a las {slot.formattedTime}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="pt-4"
      >
        <p className="text-gray-300 mb-4">Elige uno y lo agendamos de una!</p>
        
        <motion.a
          href={CORRECT_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar className="w-5 h-5" />
          Agendar Reunión
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const CalendlyButton = ({ url, content }: { url: string; content: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="prose prose-sm prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="pt-2"
      >
        <motion.a
          href={CORRECT_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar className="w-5 h-5" />
          Reserva tu sesión de alto valor
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const ChatMessage = ({ msg }: { msg: Message }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: 0.05 }
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {msg.role === 'assistant' && (
        <motion.div 
          className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-sm"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {msg.isCalendarResponse || msg.hasCalendlyLink ? (
            <Calendar className="w-4 h-4 text-cyan-300" />
          ) : (
            <Bot className="w-4 h-4 text-cyan-300" />
          )}
        </motion.div>
      )}
      
      <motion.div 
        className={`relative max-w-[85%] px-4 py-3 rounded-2xl backdrop-blur-sm
          ${msg.role === 'user' 
            ? 'bg-gradient-to-br from-blue-600/90 to-blue-800/90' 
            : 'bg-gradient-to-br from-gray-800/80 to-gray-900/80'}`}
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered 
            ? msg.role === 'user' 
              ? "0 0 10px rgba(0, 123, 255, 0.6)" 
              : "0 0 10px rgba(0, 229, 255, 0.4)"
            : "none"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {msg.isCalendarResponse && msg.calendarSlots ? (
          <CalendarResponse slots={msg.calendarSlots} />
        ) : msg.hasCalendlyLink ? (
          <CalendlyButton url={CORRECT_CALENDAR_URL} content={msg.content} />
        ) : (
          <div className="prose prose-sm prose-invert max-w-none">
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        )}
        
        <div className={`absolute inset-0 rounded-2xl pointer-events-none 
          ${msg.role === 'user' 
            ? 'border border-blue-400/50' 
            : msg.isCalendarResponse || msg.hasCalendlyLink
              ? 'border border-cyan-400/50'
              : 'border border-cyan-400/30'}`} 
        />
      </motion.div>
    </motion.div>
  );
};

const LoadingDots = () => {
  return (
    <motion.div 
      className="flex items-center justify-center gap-1 py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-cyan-400"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

// --- WIDGET PRINCIPAL ---
export default function FloatingChatWidget() {
  const { isOpen, closeChat } = useChatStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<CalendarSlot[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { getAvailableSlots, isLoading: isLoadingSlots } = useCalSlots();

  // Cargar slots disponibles al inicializar
  useEffect(() => {
    const loadSlots = async () => {
      const slots = await getAvailableSlots();
      setAvailableSlots(slots);
    };
    loadSlots();
  }, [getAvailableSlots]);

  useEffect(() => { 
    const saved = sessionStorage.getItem('chatHistoryAI'); 
    if(saved) setMessages(JSON.parse(saved)); 
  }, []);
  
  useEffect(() => { 
    sessionStorage.setItem('chatHistoryAI', JSON.stringify(messages)); 
  }, [messages]);
  
  useEffect(() => { 
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      timeoutRef.current = setTimeout(() => {
        setShowTooltip(true);
      }, 1000);
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    } else {
      setShowTooltip(false);
    }
  }, [isOpen]);

  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim() || isLoading) return;
    
    const newUserMessage: Message = { 
      id: Date.now().toString(), 
      role: 'user', 
      content: messageContent 
    };
    
    const newMessagesHistory = [...messages, newUserMessage];
    setMessages(newMessagesHistory);
    setInput('');
    setIsLoading(true);
    
    try {
      // Detectar si el usuario quiere agendar directamente
      const isSchedulingRequest = detectSchedulingIntent(messageContent);
      
      if (isSchedulingRequest) {
        // Obtener slots frescos para esta solicitud
        const freshSlots = await getAvailableSlots();
        
        if (freshSlots.length > 0) {
          setMessages(prev => [...prev, {
            id: Date.now().toString(), 
            role: 'assistant', 
            content: '',
            isCalendarResponse: true,
            calendarSlots: freshSlots
          }]);
        } else {
          setMessages(prev => [...prev, {
            id: Date.now().toString(), 
            role: 'assistant', 
            content: `Lo siento, no pude obtener mi disponibilidad en este momento. Puedes agendar directamente en [${CORRECT_CALENDAR_URL}](${CORRECT_CALENDAR_URL}) para ver mis horarios disponibles.`
          }]);
        }
      } else {
        // Flujo normal de chat con API, incluyendo contexto de agenda como mensaje del sistema
        const systemContext = createSystemCalendarContext(availableSlots);
        
        // Crear un mensaje del sistema con el contexto (no visible al usuario)
        const messagesWithSystemContext = [
          ...newMessagesHistory,
          {
            id: 'system-context',
            role: 'system' as const,
            content: systemContext
          }
        ];
        
        const response = await fetch('/api/gpt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: messagesWithSystemContext }),
        });
        
        if (!response.ok) throw new Error('Error en la respuesta del servidor');
        
        const data = await response.json();
        const assistantResponse = data.reply || "No pude procesar tu solicitud. Intenta nuevamente.";
        
        // Detectar si la respuesta contiene enlaces de Calendly o menciones de agendar
        const { hasLink, url, cleanContent } = detectCalendlyLink(assistantResponse);
        
        setMessages(prev => [...prev, {
          id: Date.now().toString(), 
          role: 'assistant', 
          content: cleanContent,
          hasCalendlyLink: hasLink,
          calendlyUrl: CORRECT_CALENDAR_URL // Siempre usar la URL correcta
        }]);
      }
    } catch (error) {
      console.error("Fallo en la comunicación:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(), 
        role: 'assistant', 
        content: 'Lo siento, no puedo responder en este momento. Por favor, inténtalo de nuevo más tarde.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    sessionStorage.removeItem('chatHistoryAI');
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              className="absolute -top-16 right-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotate: [0, 2, -2, 0]
              }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ 
                duration: 0.3,
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <motion.p
                className="text-sm text-cyan-300 font-light whitespace-nowrap"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(0, 229, 255, 0)",
                    "0 0 15px rgba(0, 229, 255, 0.9)",
                    "0 0 5px rgba(0, 229, 255, 0)"
                  ],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ¿Cómo puedo ayudarte?
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* BOTÓN PRINCIPAL MEJORADO */}
        <motion.button 
          onClick={isOpen ? closeChat : () => useChatStore.getState().openChat()}
          className="w-20 h-20 rounded-full flex items-center justify-center group relative overflow-hidden"
          style={{ 
            background: 'transparent',
            border: 'none',
            outline: 'none'
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          animate={{
            filter: "drop-shadow(0 0 0px rgba(0, 229, 255, 0))"
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div 
                key="close" 
                className="flex items-center justify-center w-16 h-16 relative"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  rotate: 0, 
                  scale: 1
                }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ type: "spring", damping: 15, stiffness: 200 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/70 to-purple-900/70 border border-white/20 backdrop-blur-sm" />
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(255, 255, 255, 0)",
                      "0 0 20px rgba(255, 255, 255, 0.5)",
                      "0 0 0px rgba(255, 255, 255, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <X className="w-8 h-8 text-white relative z-10" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                key="open" 
                className="flex items-center justify-center w-16 h-16 relative"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  rotate: 0, 
                  scale: 1
                }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ type: "spring", damping: 15, stiffness: 200 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-900/70 to-blue-900/70 border border-white/20 backdrop-blur-sm" />
                <AICoreIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-32 right-6 z-40 w-[90vw] max-w-sm"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          >
          <div className="relative rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[75vh] max-h-[650px] bg-black/50 backdrop-blur-xl">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"
                animate={{ 
                  x: [-100, 100, -100], 
                  y: [-50, 50, -50],
                  opacity: [0.2, 0.5, 0.2]
                }} 
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} 
              />
              
              <motion.div 
                className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-purple-600/30 to-transparent rounded-full blur-3xl"
                animate={{ 
                  x: [100, -100, 100], 
                  y: [50, -50, 50],
                  opacity: [0.2, 0.5, 0.2]
                }} 
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
              />
              
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                  style={{
                    top: `${(i * 7) % 100}%`,
                    left: `${(i * 13) % 100}%`,
                  }}
                  animate={{
                    y: [0, -25, 0],
                    x: [0, i % 2 === 0 ? -15 : 15, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.8, 1]
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <motion.div 
                className="flex items-center justify-between p-4 border-b border-white/10 shrink-0 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-left">
                  <motion.h3 
                    className="text-lg font-bold text-white flex items-center gap-2"
                    animate={{ 
                      textShadow: ["0 0 0px #fff", "0 0 10px #00E5FF", "0 0 0px #fff"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  >
                    <span>Atlas Assistant</span>
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                  </motion.h3>
                  <p className="text-cyan-300 text-xs bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-2 py-1 rounded-full inline-block">
                    IA con propósito
                  </p>
                </div>
                
                <motion.button 
                  whileTap={{scale:0.9}} 
                  onClick={handleClearChat} 
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10"
                >
                  <RefreshCw className="w-4 h-4"/>
                </motion.button>
              </motion.div>
              
              <div 
                ref={chatContainerRef} 
                className="flex-grow overflow-y-auto p-4 space-y-5"
              >
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center p-4"
                  >
                    <div className="w-24 h-24 mb-6">
                      <AICoreIcon />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Estrategia Inteligente</h3>
                    <p className="text-cyan-200 mb-4">Dime tu desafío y diseñaremos juntos la solución óptima</p>
                    <div className="inline-flex gap-2 flex-wrap justify-center">
                      <span className="text-xs bg-gray-800/50 px-2 py-1 rounded">Automatización</span>
                      <span className="text-xs bg-gray-800/50 px-2 py-1 rounded">IA</span>
                      <span className="text-xs bg-gray-800/50 px-2 py-1 rounded">Agenda</span>
                      <span className="text-xs bg-gray-800/50 px-2 py-1 rounded">Transformación</span>
                    </div>
                  </motion.div>
                )}
                
                {messages.map(msg => <ChatMessage key={msg.id} msg={msg} />)}
                
                {(isLoading || isLoadingSlots) && (
                  <motion.div 
                    className="flex items-end gap-2.5 justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-sm">
                      {isLoadingSlots ? (
                        <Calendar className="w-4 h-4 text-cyan-300" />
                      ) : (
                        <Bot className="w-4 h-4 text-cyan-300" />
                      )}
                    </div>
                    <div className="relative px-4 py-3 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 min-w-[80px]">
                      <LoadingDots />
                      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-cyan-400/30" />
                    </div>
                  </motion.div>
                )}
              </div>
              
              <motion.div 
                className="p-3 border-t border-white/10 shrink-0 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} 
                  className="flex items-center gap-2"
                >
                  <motion.input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder={isLoading || isLoadingSlots ? "Procesando..." : "Describe tu objetivo o escribe 'agendar' para ver mi disponibilidad"} 
                    className="w-full bg-black/40 border border-white/10 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-white placeholder:text-gray-400 focus:outline-none transition-all shadow-lg backdrop-blur-sm"
                    disabled={isLoading || isLoadingSlots}
                    whileFocus={{ 
                      boxShadow: "0 0 0 2px rgba(0, 229, 255, 0.5)",
                      borderColor: "rgba(0, 229, 255, 0.5)"
                    }}
                  />
                  
                  <motion.button 
                    type="submit" 
                    disabled={!input.trim() || isLoading || isLoadingSlots} 
                    className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-700 disabled:to-gray-800 rounded-xl transition-all shrink-0 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: !input.trim() || isLoading || isLoadingSlots
                        ? "none" 
                        : ["0 0 0 rgba(0, 229, 255, 0)", "0 0 15px rgba(0, 229, 255, 0.7)", "0 0 0 rgba(0, 229, 255, 0)"]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity
                      }
                    }}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}