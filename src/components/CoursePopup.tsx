'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Importación añadida
import { X, Brain, Rocket, ClipboardCheck, CalendarDays } from 'lucide-react';

const PremiumCoursePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null);
  const router = useRouter(); // Hook de useRouter inicializado

  useEffect(() => {
    // El popup aparece después de 3 segundos
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsOpen(true), 100);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 400);
  };

  // Función handleCTAClick actualizada para redirigir
  const handleCTAClick = () => {
    router.push('/curso');
  };

  // Si no es visible, no renderiza nada.
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* El popup solo se muestra si 'isOpen' es verdadero */}
      {isOpen && (
        <>
          {/* Overlay de fondo */}
          <div
            className="fixed inset-0 z-40 bg-black/10 transition-opacity duration-500"
          />

          {/* Contenedor Principal del Popup */}
          <div
            ref={popupRef}
            className={`fixed bottom-4 left-4 z-50 w-full max-w-sm transform transition-all duration-700 ease-out ${
              isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">

              {/* Fondo con Efecto Vidrio (Glassmorphism) */}
              <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl" />

              {/* Borde superior con animación de pulso */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 animate-pulse" />

              {/* Contenido */}
              <div className="relative z-10 p-5">

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-white flex-shrink-0" />
                    <div>
                      <h2 className="text-base font-bold text-white tracking-tight leading-tight">
                        IA: Más Allá de ChatGPT
                      </h2>
                      <p className="text-sm text-slate-200 font-medium">
                        Deja de improvisar. Empieza a automatizar con propósito.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all duration-300 group"
                    aria-label="Cerrar"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                {/* Pregunta de enganche */}
                <div className="mb-4 p-3.5 rounded-xl bg-black/20 border border-white/10">
                  <p className="text-slate-100 text-sm font-medium leading-relaxed">
                    ¿Sientes que usas la IA de forma aislada, pero sabes que podría transformar tu día si tuvieras un método claro?
                  </p>
                </div>

                {/* Beneficios */}
                <div className="mb-4">
                  <p className="text-white font-semibold text-sm mb-3">¿Qué lograrás en esta sesión en vivo?</p>
                  <div className="space-y-2.5">
                    <p className="text-slate-200 text-sm leading-relaxed">
                      ✅ Tendrás claridad: Identificarás qué tareas son ideales para automatizar en tu caso real.
                    </p>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      ✅ Entenderás el potencial: Conocerás herramientas clave y cómo pueden funcionar juntas.
                    </p>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      ✅ Saldrás con base sólida: Este curso te prepara para construir flujos más avanzados con confianza.
                    </p>
                  </div>
                </div>

                {/* Diagnóstico y Detalles */}
                <div className="space-y-3 mb-5">
                  <div className="p-3 rounded-xl bg-black/20 border border-white/10">
                    <div className="flex items-start gap-3">
                      <ClipboardCheck className="w-5 h-5 text-sky-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-sky-300 text-sm">
                          🧩 Diagnóstico personalizado
                        </h3>
                        <p className="text-slate-300 text-xs mt-1">
                          Al inscribirte recibirás un diagnóstico inicial de tu nivel de digitalización aplicada a IA. Eso nos servirá para establecer un punto de partida honesto y diseñar, juntos, tu hoja de ruta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/20 border border-white/10">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-purple-300 text-sm">
                          📆 Sesión en vivo
                        </h3>
                        <p className="text-slate-300 text-xs mt-1">
                          Viernes 2 de agosto • 20:00 hrs (hora Bolivia)
                          <br />
                          Duración: 45 minutos intensivos
                          <br />
                          Formato: Online, con grupo exclusivo y materiales complementarios.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón CTA */}
                <button
                  onClick={handleCTAClick}
                  className="group relative w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-purple-500 to-cyan-500 group-hover:from-sky-400 group-hover:to-cyan-400 transition-all duration-300" />
                  <div className="relative flex items-center justify-center gap-2 px-6 py-3.5">
                    <span className="font-bold text-white text-sm tracking-wide">
                      Reservar mi cupo
                    </span>
                    <Rocket className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PremiumCoursePopup;