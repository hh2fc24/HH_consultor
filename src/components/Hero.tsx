'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);
  const [showAITooltip, setShowAITooltip] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  // Textos dinámicos para el efecto de escritura
  const dynamicTexts = [
    "Convirtiendo complejidad en claridad...",
    "Traduciendo datos en decisiones...",
    "Transformando empresas en líderes del futuro"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Efecto de escritura dinámica
  useEffect(() => {
    const text = dynamicTexts[textIndex];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex < text.length) {
        setCurrentText(text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
          setCurrentText('');
        }, 2000);
        clearInterval(typeWriter);
      }
    }, 80);

    return () => clearInterval(typeWriter);
  }, [textIndex]);

  const fadeInUp = (delay: number) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    transitionDelay: `${delay}s`,
  });

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#000000',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      
      {/* Background inteligente con partículas sutiles */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0 
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            opacity: 0.4,
            filter: 'brightness(0.7) contrast(1.2)',
          }}
        >
          <source src="/22.mp4" type="video/mp4" />
        </video>
        
        {/* Gradiente mejorado con colores de la nueva paleta */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(31,41,55,0.6) 50%, rgba(107,70,193,0.3) 100%)',
        }}/>

        {/* Partículas sutiles de conexión neuronal */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(0,212,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(107,70,193,0.1) 1px, transparent 1px),
            radial-gradient(circle at 60% 20%, rgba(245,158,11,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px',
          animation: 'float 20s ease-in-out infinite',
        }}/>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '900px',
        width: '90%',
        textAlign: 'center',
        padding: '5rem 2rem 2rem',
      }}>
        
        {/* Título principal con tipografía mejorada */}
        <div style={fadeInUp(0.1)}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 3.5rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            margin: '0 0 1.5rem 0',
            color: '#f8fafc',
            letterSpacing: '-0.025em',
            fontFamily: 'Poppins, Inter, sans-serif',
          }}>
            Convierte la IA en tu
            <span style={{
              display: 'block',
              marginTop: '0.5rem',
              backgroundImage: 'linear-gradient(135deg, #00D4FF 0%, #6B46C1 50%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
            }}>
              Ventaja Competitiva
            </span>
          </h1>
        </div>

        {/* Subtítulo con efecto de escritura */}
        <div style={fadeInUp(0.2)}>
          <div style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            fontWeight: 400,
            color: '#F59E0B',
            margin: '0 auto 1rem auto',
            height: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'JetBrains Mono, monospace',
          }}>
            {currentText}
            <span style={{
              animation: 'blink 1s infinite',
              marginLeft: '2px',
            }}>|</span>
          </div>
        </div>

        <div style={fadeInUp(0.3)}>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.8vw, 1.5rem)',
            fontWeight: 400,
            color: '#e2e8f0',
            margin: '0 auto 2rem auto',
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
            maxWidth: '42rem',
          }}>
            Descubre cómo profesionales como tú están multiplicando sus ingresos y recuperando su tiempo con soluciones de IA a medida
          </p>
        </div>

        {/* Tarjeta de presentación mejorada */}
        <div style={fadeInUp(0.4)}>
          <div style={{
            maxWidth: '650px',
            margin: '0 auto 3rem auto',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(107,70,193,0.08) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(0,212,255,0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,212,255,0.1)',
          }}>
            <div style={{
              fontSize: '1.125rem',
              fontWeight: 400,
              color: '#e2e8f0',
              lineHeight: 1.6,
              margin: 0,
              textAlign: 'left',
            }}>
              <strong style={{  
                fontWeight: 600,
                background: 'linear-gradient(135deg, #00D4FF, #6B46C1)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>Bienvenido.</strong> Soy Hugo, tu consultor estratégico especializado en{' '}
              <span 
                style={{ 
                  color: '#00D4FF',
                  fontWeight: 500,
                  cursor: 'pointer',
                  position: 'relative',
                  textDecoration: 'none',
                  borderBottom: '1px dotted rgba(0, 212, 255, 0.5)',
                }}
                onMouseEnter={() => setShowAITooltip(true)}
                onMouseLeave={() => setShowAITooltip(false)}
              >
                Inteligencia Artificial
                <div style={{
                  position: 'absolute',
                  bottom: '130%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(31,41,55,0.95))',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  width: '260px',
                  textAlign: 'center',
                  border: '1px solid rgba(0,212,255,0.3)',
                  opacity: showAITooltip ? 1 : 0,
                  visibility: showAITooltip ? 'visible' : 'hidden',
                  transition: 'all 0.3s ease',
                  pointerEvents: 'none',
                  zIndex: 10,
                  boxShadow: '0 8px 32px rgba(0,212,255,0.2)',
                }}>
                  Implementación estratégica de IA para resultados medibles
                </div>
              </span>
              . Mi misión es democratizar el conocimiento complejo y ayudarte a tomar decisiones más inteligentes, ahorrar tiempo valioso y escalar tu negocio con un enfoque profundamente humano.
            </div>
          </div>
        </div>

        {/* --- CAMBIO AQUÍ --- Botones convertidos a enlaces <a> */}
        <div style={{
          ...fadeInUp(0.5),
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {/* Botón de WhatsApp */}
          <a 
            href="https://wa.me/59177028880"
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer"
            onMouseEnter={() => setIsPrimaryHovered(true)}
            onMouseLeave={() => setIsPrimaryHovered(false)}
            style={{
              background: isPrimaryHovered 
                ? 'linear-gradient(135deg, #0099CC 0%, #6B46C1 100%)' 
                : 'linear-gradient(135deg, #00D4FF 0%, #6B46C1 100%)',
              color: '#ffffff',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: isPrimaryHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              boxShadow: isPrimaryHovered 
                ? '0 12px 40px rgba(0, 212, 255, 0.4)' 
                : '0 6px 20px rgba(0, 212, 255, 0.25)',
              letterSpacing: '-0.01em',
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none', // Quita el subrayado del enlace
            }}
          >
            Iniciar Conversación
          </a>
          
          {/* Botón a la sección Casos de Éxito */}
          <a
            href="#casos-de-exito" // Enlace de ancla
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
            style={{
              background: isSecondaryHovered 
                ? 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(107,70,193,0.15))'
                : 'transparent',
              border: '2px solid rgba(0,212,255,0.4)',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: isSecondaryHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              borderColor: isSecondaryHovered ? 'rgba(0,212,255,0.8)' : 'rgba(0,212,255,0.4)',
              letterSpacing: '-0.01em',
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none', // Quita el subrayado del enlace
            }}
          >
            Ver Casos de Éxito
          </a>
        </div>

        {/* Estadísticas mejoradas */}
        <div style={{
          ...fadeInUp(0.6),
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
        }}>
          {[
            { number: '50+', label: 'Proyectos IA', color: '#00D4FF' },
            { number: '15+', label: 'Sectores', color: '#6B46C1' },
            { number: '98%', label: 'Satisfacción', color: '#F59E0B' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: stat.color,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
                fontFamily: 'Poppins, sans-serif',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        html {
          scroll-behavior: smooth; /* Para que el scroll sea suave */
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;