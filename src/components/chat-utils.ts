// Utilidades para el sistema de chat consultor
import { useState } from 'react';

// Tipo para mensajes
export type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
  isTyping?: boolean;
};

export interface LeadData {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  problem: string;
  budget?: string;
  urgency: 'low' | 'medium' | 'high';
  source: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  leadData: Partial<LeadData>;
  status: 'active' | 'qualified' | 'converted' | 'closed';
  lastActivity: Date;
}

// Función para generar URL de WhatsApp personalizada
export const generateWhatsAppURL = (leadData: Partial<LeadData>, context: string = ''): string => {
  const baseURL = 'https://wa.me/56912345678'; // Reemplazar con el número real
  
  let message = `Hola Hugo, vengo del chat de tu web. `;
  
  if (leadData.name) {
    message += `Soy ${leadData.name}`;
    if (leadData.company) {
      message += ` de ${leadData.company}`;
    }
    message += `. `;
  }
  
  if (leadData.problem) {
    message += `Necesito ayuda con: ${leadData.problem}. `;
  }
  
  if (context) {
    message += `Contexto adicional: ${context}`;
  }
  
  return `${baseURL}?text=${encodeURIComponent(message)}`;
};

// Función para detectar intención de derivación
export const shouldDeriveToWhatsApp = (message: string, conversationLength: number): boolean => {
  const deriveKeywords = [
    'cotización', 'precio', 'costo', 'presupuesto',
    'reunión', 'llamada', 'hablar', 'contacto',
    'urgente', 'rápido', 'ya', 'ahora',
    'contratar', 'implementar', 'empezar',
    'demo', 'prueba', 'ejemplo'
  ];
  
  const hasKeyword = deriveKeywords.some(keyword => 
    message.toLowerCase().includes(keyword)
  );
  
  // Derivar si hay keywords relevantes o si la conversación es larga (más de 6 mensajes)
  return hasKeyword || conversationLength > 6;
};

// Función para extraer datos del lead de la conversación
export const extractLeadData = (messages: Message[], sourceTag: string): Partial<LeadData> => {
  const conversationText = messages
    .filter(m => m.role === 'user')
    .map(m => m.content)
    .join(' ');
  
  const leadData: Partial<LeadData> = {
    source: sourceTag,
    timestamp: new Date(),
    urgency: 'medium'
  };
  
  // Extraer problema principal
  const problemIndicators = ['necesito', 'quiero', 'tengo que', 'me gustaría'];
  const problemSentence = messages
    .filter(m => m.role === 'user')
    .find(m => problemIndicators.some(indicator => 
      m.content.toLowerCase().includes(indicator)
    ));
  
  if (problemSentence) {
    leadData.problem = problemSentence.content;
  }
  
  // Detectar urgencia
  const urgentKeywords = ['urgente', 'rápido', 'ya', 'pronto'];
  if (urgentKeywords.some(keyword => 
    conversationText.toLowerCase().includes(keyword)
  )) {
    leadData.urgency = 'high';
  }
  
  return leadData;
};

// Función para generar respuestas de derivación personalizadas
export const generateDeriveResponse = (leadData: Partial<LeadData>): string => {
  const whatsappURL = generateWhatsAppURL(leadData);
  
  const responses = [
    `Perfecto, veo que tienes un proyecto serio. Te voy a conectar directamente con Hugo para una consulta personalizada.`,
    `Excelente, esto requiere una conversación más detallada. Hugo puede ayudarte mejor en una llamada.`,
    `Me parece que necesitas una solución específica. Mejor hablemos directamente con Hugo.`
  ];
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  return `${randomResponse}

📱 **WhatsApp Directo:** ${whatsappURL}

Hugo te contactará en los próximos 30 minutos durante horario hábil. 

¿Te parece bien que te escriba por WhatsApp?`;
};

// Hook personalizado para gestionar el chat
export const useChatSession = (sourceTag: string) => {
  const [session, setSession] = useState<ChatSession>({
    id: `session_${Date.now()}`,
    messages: [],
    leadData: { source: sourceTag, timestamp: new Date() },
    status: 'active',
    lastActivity: new Date()
  });
  
  const updateLeadData = (newData: Partial<LeadData>) => {
    setSession(prev => ({
      ...prev,
      leadData: { ...prev.leadData, ...newData },
      lastActivity: new Date()
    }));
  };
  
  const addMessage = (message: Message) => {
    setSession(prev => ({
      ...prev,
      messages: [...prev.messages, message],
      lastActivity: new Date()
    }));
    
    // Auto-extraer datos del lead
    if (message.role === 'user') {
      const extractedData = extractLeadData([...session.messages, message], sourceTag);
      updateLeadData(extractedData);
    }
  };
  
  const qualifyLead = () => {
    setSession(prev => ({
      ...prev,
      status: 'qualified',
      lastActivity: new Date()
    }));
  };
  
  return {
    session,
    updateLeadData,
    addMessage,
    qualifyLead
  };
};

// Función para enviar datos del lead a un webhook (opcional)
export const sendLeadToWebhook = async (leadData: LeadData): Promise<void> => {
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });
  } catch (error) {
    console.error('Error enviando lead:', error);
  }
};
