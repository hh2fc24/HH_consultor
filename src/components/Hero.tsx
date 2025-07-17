
'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);
  const [showAITooltip, setShowAITooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = (delay) => ({
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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>
      
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
            opacity: 0.5,
            filter: 'brightness(0.85) contrast(1.1)',
          }}
        >
          <source src="/22.mp4" type="video/mp4" />
        </video>
        
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)',
        }}/>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px',
        width: '90%',
        textAlign: 'center',
        padding: '5rem 2rem 2rem',
      }}>
        
        <div style={fadeInUp(0.1)}>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 3.75rem)', // Integrado de text-5xl a md:text-6xl
            fontWeight: 700, // Integrado de font-bold
            lineHeight: 1.1,
            margin: '0 0 1.5rem 0', // Integrado de mb-6
            color: '#ffffff', // Integrado de text-white
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
          }}>
            Convierte la IA en tu
            <span style={{
              display: 'block',
              marginTop: '0.5rem', // Integrado de mt-2
              backgroundImage: 'linear-gradient(to right, #22d3ee, #a855f7)', // Integrado de gradient
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
              Ventaja Competitiva
            </span>
          </h1>
        </div>

        <div style={fadeInUp(0.3)}>
          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', // Mantenido, similar a text-xl
            fontWeight: 400,
            color: '#d1d5db', // Integrado de text-gray-300
            margin: '0 auto 2rem auto', // Integrado de mb-8 y centrado
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            maxWidth: '42rem', // Integrado de max-w-2xl
          }}>
            Descubre cómo profesionales como tú están multiplicando sus ingresos y recuperando su tiempo con soluciones de IA a medida
          </p>
        </div>

        {/* El resto del componente permanece sin cambios visuales */}

        <div style={fadeInUp(0.5)}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
          }}>
            <div style={{
              fontSize: '1.125rem',
              fontWeight: 400,
              color: '#d4d4d8',
              lineHeight: 1.6,
              margin: 0,
              textAlign: 'left',
            }}>
              <strong style={{ color: '#f5f5f7', fontWeight: 500 }}>Bienvenido.</strong> Soy Hugo, tu consultor estratégico especializado en{' '}
              <span 
                style={{ 
                  color: '#007aff',
                  fontWeight: 500,
                  cursor: 'pointer',
                  position: 'relative',
                  textDecoration: 'none',
                  borderBottom: '1px dotted rgba(0, 122, 255, 0.5)',
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
                  borderRadius: '8px',
                  background: 'rgba(0, 0, 0, 0.9)',
                  color: '#f5f5f7',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  width: '240px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  opacity: showAITooltip ? 1 : 0,
                  visibility: showAITooltip ? 'visible' : 'hidden',
                  transition: 'all 0.2s ease',
                  pointerEvents: 'none',
                  zIndex: 10,
                }}>
                  Implementación estratégica de IA para resultados medibles
                </div>
              </span>
              . Mi misión es democratizar el conocimiento complejo y ayudarte a tomar decisiones más inteligentes, ahorrar tiempo valioso y escalar tu negocio con un enfoque profundamente humano.
            </div>
          </div>
        </div>

        <div style={{
          ...fadeInUp(0.7),
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button 
            onMouseEnter={() => setIsPrimaryHovered(true)}
            onMouseLeave={() => setIsPrimaryHovered(false)}
            style={{
              background: isPrimaryHovered 
                ? 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)' 
                : '#007aff',
              color: '#ffffff',
              padding: '0.875rem 2rem',
              borderRadius: '980px',
              fontWeight: 500,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              transform: isPrimaryHovered ? 'scale(1.02)' : 'scale(1)',
              boxShadow: isPrimaryHovered 
                ? '0 8px 25px rgba(0, 122, 255, 0.3)' 
                : '0 4px 15px rgba(0, 122, 255, 0.2)',
              letterSpacing: '-0.01em',
            }}
          >
            Iniciar Conversación
          </button>
          
          <button 
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(245, 245, 247, 0.3)',
              padding: '0.875rem 2rem',
              borderRadius: '980px',
              color: '#f5f5f7',
              fontWeight: 500,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              transform: isSecondaryHovered ? 'scale(1.02)' : 'scale(1)',
              backgroundColor: isSecondaryHovered ? 'rgba(245, 245, 247, 0.1)' : 'transparent',
              borderColor: isSecondaryHovered ? 'rgba(245, 245, 247, 0.5)' : 'rgba(245, 245, 247, 0.3)',
              letterSpacing: '-0.01em',
            }}
          >
            Ver Casos de Éxito
          </button>
        </div>

        <div style={{
          ...fadeInUp(0.9),
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
        }}>
          {[
            { number: '50+', label: 'Proyectos IA' },
            { number: '15+', label: 'Sectores' },
            { number: '98%', label: 'Satisfacción' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#f5f5f7',
                marginBottom: '0.25rem',
                letterSpacing: '-0.02em',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#86868b',
                fontWeight: 400,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
