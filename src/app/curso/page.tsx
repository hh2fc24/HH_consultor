'use client';

import { useState, useEffect } from 'react';
// Ya no necesitamos importar 'supabase' aquí, ¡el frontend se vuelve más simple!
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

// Definición de la estructura de datos del formulario
interface FormData {
  nombre: string;
  profesion: string;
  email: string;
  acepta: boolean;
}

// Componente para la notificación flotante de éxito/error
const FloatingNotification = ({ message, isSuccess }: { message: string; isSuccess: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.3 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.5 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 p-4 rounded-lg shadow-2xl border ${
      isSuccess
        ? 'bg-green-100 border-green-300 text-green-800'
        : 'bg-red-100 border-red-300 text-red-800'
    }`}
  >
    {isSuccess ? <FiCheckCircle className="w-6 h-6" /> : <FiXCircle className="w-6 h-6" />}
    <span className="font-medium">{message}</span>
  </motion.div>
);

// --- TU COMPONENTE DE PÁGINA ---
export default function CursoPage() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    profesion: '',
    email: '',
    acepta: false
  });

  // Estados para manejar la UI durante el envío
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Maneja los cambios en los inputs del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ==================================================================
  // handleSubmit FINAL - Usa nuestra propia API Route (Plan B Infalible)
  // ==================================================================
  const handleSubmit = async () => {
    if (!isFormValid || loading) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Hacemos una petición POST a nuestra propia API en /api/registro
      const response = await fetch('/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          profesion: formData.profesion,
          email: formData.email,
          acepta: formData.acepta,
        }),
      });

      // Si la respuesta de nuestra API no es exitosa (ej. status 500), lanzamos un error
      if (!response.ok) {
        const errorData = await response.json();
        // Usamos el mensaje de error que nos devuelve nuestra propia API
        throw new Error(errorData.error || 'Ocurrió un error en el servidor.');
      }

      // Si todo va bien, mostramos el mensaje de éxito y limpiamos el formulario
      setSuccess(true);
      setFormData({ nombre: '', profesion: '', email: '', acepta: false });

    } catch (error: any) {
      // Capturamos cualquier error (de red o del servidor) y lo mostramos
      console.error('Error al contactar la API de registro:', error);
      setError(error.message || 'Hubo un problema en el proceso. Intenta de nuevo.');
    } finally {
      // Esto se ejecuta siempre, al final del proceso
      setLoading(false);
    }
  };

  // Efecto para limpiar los mensajes de notificación después de 5 segundos
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  // Calcula si el formulario es válido para activar el botón
  const isFormValid = formData.acepta && formData.nombre && formData.email && formData.profesion;

  // ==================================================================
  // TU JSX ORIGINAL (SIN CAMBIOS)
  // ==================================================================
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Contenedor para las notificaciones flotantes */}
      <AnimatePresence>
        {success && (
          <FloatingNotification 
            isSuccess={true} 
            message="¡Cupo reservado! Revisa tu email para la confirmación." 
          />
        )}
        {error && (
          <FloatingNotification 
            isSuccess={false} 
            message={error} 
          />
        )}
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="pt-24 text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-medium">
              ÚLTIMOS 12 CUPOS • CIERRA EN 24H • <span className="text-white font-bold">79 BOB</span>
            </span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Column - Content */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                <span className="text-white">Domina la</span>
                  

                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  IA Práctica
                </span>
                  

                <span className="text-white">en 90 min</span>
              </h1>
              
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Aprende a automatizar tu trabajo real con herramientas de IA que puedes usar desde mañana
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-3">
              {[
                { icon: "🚀", text: "Herramientas específicas para tu profesión" },
                { icon: "⚡", text: "Casos prácticos aplicables inmediatamente" },
                { icon: "🎯", text: "Automatiza tareas en menos de 2 horas" },
                { icon: "💡", text: "Diagnóstico IA personalizado incluido" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-base">{item.icon}</span>
                  </div>
                  <span className="text-gray-200 text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Event Details */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="text-cyan-400 text-sm font-semibold mb-1">📅 FECHA</div>
                  <div className="text-white font-medium">Viernes 01 Agosto</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm font-semibold mb-1">⏰ HORARIO</div>
                  <div className="text-white font-medium">20:00 - 21:30 </div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm font-semibold mb-1">💻 MODALIDAD</div>
                  <div className="text-white font-medium">Zoom en Vivo</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm font-semibold mb-1">💡 ACTIVACIÓN IA PERSONAL</div>
                  <div className="text-white font-medium">Descubre en qué nivel estás, desbloquea tu hoja de ruta y empieza a automatizar tu trabajo hoy.</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-3">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold text-black">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-gray-300 text-sm">
                <span className="text-cyan-400 font-semibold">+247 profesionales</span> ya automatizaron su trabajo
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:justify-self-end w-full max-w-sm">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 glow-border animate-float-glow">
              
              {/* Form Header */}
              <div className="text-center mb-6">
                <h2 className="text-xl font-black text-gray-900 mb-2">
                  Reserva tu Cupo
                </h2>
                <p className="text-sm text-gray-600">
                  Solo para profesionales serios
                </p>
                <div className="mt-3 text-center">
                  <span className="inline-block bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
                    12 cupos restantes
                  </span>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-5">
                
                <div className="space-y-3">
                  
                  <div>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white transition-all duration-200 outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="profesion"
                      placeholder="Tu profesión actual"
                      value={formData.profesion}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white transition-all duration-200 outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white transition-all duration-200 outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acepta"
                    checked={formData.acepta}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500"
                  />
                  <label className="text-sm text-gray-600 leading-relaxed">
                    Acepto recibir información del curso y confirmo que busco aplicar IA en mi trabajo profesional
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || loading}
                  className={`w-full py-3 px-5 rounded-lg font-bold text-base transition-all duration-300 ${
                    isFormValid && !loading
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {loading ? 'Reservando...' : (isFormValid ? '🚀 Reservar Mi Cupo Ahora' : 'Completa el formulario')}
                </button>

                {/* 🔥 Precio visible debajo del botón */}
                <div className="text-center mt-3">
                  <p className="text-sm text-gray-700 font-semibold">
                    🔒 Accede por solo <span className="text-cyan-600 font-bold text-lg">79 BOB</span>
                  </p>
                </div>
              </div>

              {/* Form Footer */}
              <div className="mt-5 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                <div className="text-center">
                  <div className="text-cyan-800 text-sm font-semibold mb-1">
                    ⚡ Acceso Inmediato
                  </div>
                  <div className="text-cyan-700 text-xs">
                    Recibirás el link de Zoom + diagnóstico personalizado
                  </div>
                </div>
              </div>

              {/* Urgency Footer */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">
                  🔥 Este precio solo está disponible por 24 horas más
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
