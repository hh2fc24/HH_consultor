'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Textos dinámicos más tech y profesionales
  const dynamicTexts = [
    "Transformando empresas con IA estratégica",
    "Convirtiendo datos en ventajas competitivas", 
    "Democratizando la inteligencia artificial"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Efecto de escritura más fluido
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
        }, 3000);
        clearInterval(typeWriter);
      }
    }, 50);

    return () => clearInterval(typeWriter);
  }, [textIndex]);

  // Mouse tracking para efectos parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = (delay: number) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}s`,
  });

  const parallaxStyle = {
    transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
    transition: 'transform 0.1s ease-out',
  };

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
      paddingTop: '100px',
    }}>
      
      {/* Video de fondo restaurado con mejor integración */}
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
            filter: 'brightness(0.6) contrast(1.3) saturate(1.1)',
          }}
        >
          <source src="/22.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay gradiente más sofisticado */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,212,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(107,70,193,0.12) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(245,158,11,0.08) 0%, transparent 40%),
            linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)
          `,
          transition: 'background 0.3s ease-out',
        }}/>

        {/* Partículas animadas más tech */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,212,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(107,70,193,0.08) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(245,158,11,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 120px 120px, 160px 160px',
          animation: 'float 25s ease-in-out infinite, pulse 8s ease-in-out infinite alternate',
          ...parallaxStyle,
        }}/>

        {/* Grid tech pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.3,
          animation: 'gridMove 20s linear infinite',
        }}/>
      </div>

      {/* Contenedor principal con layout asimétrico más tech */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '4rem',
        alignItems: 'center',
        minHeight: 'calc(100vh - 100px)',
      }}>
        
        {/* Columna izquierda: Contenido principal */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem', // Reducido ligeramente
        }}>
          
          {/* Subtítulo dinámico más tech */}
          <div style={fadeInUp(0.1)}>
            <div style={{
              fontSize: 'clamp(0.85rem, 1.6vw, 1rem)', // Reducido
              fontWeight: 500,
              color: '#F59E0B',
              marginBottom: '1rem',
              height: '1.4rem', // Reducido
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.8px', // Reducido
              textTransform: 'uppercase',
            }}>
              <span style={{
                width: '6px', // Reducido
                height: '6px',
                backgroundColor: '#00D4FF',
                borderRadius: '50%',
                marginRight: '10px', // Reducido
                animation: 'pulse 2s ease-in-out infinite',
              }}/>
              {currentText}
              <span style={{
                animation: 'blink 1s infinite',
                marginLeft: '3px', // Reducido
                color: '#00D4FF',
                fontSize: '1.1em', // Reducido
              }}>|</span>
            </div>
          </div>

          {/* Título principal más refinado y proporcionado */}
          <div style={fadeInUp(0.2)}>
            <h1 style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)', // Reducido para mejor proporción
              fontWeight: 700,
              lineHeight: 1.2, // Mejorado
              margin: 0,
              color: '#ffffff',
              letterSpacing: '-0.015em', // Ajustado
              fontFamily: 'Inter, sans-serif',
            }}>
              Convierte la IA en tu
              <span style={{
                display: 'block',
                marginTop: '0.4rem', // Reducido
                backgroundImage: 'linear-gradient(135deg, #00D4FF 0%, #6B46C1 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 800,
                position: 'relative',
              }}>
                Ventaja Competitiva
                {/* Efecto de brillo sutil */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  animation: 'shimmer 3s ease-in-out infinite',
                  pointerEvents: 'none',
                }}/>
              </span>
            </h1>
          </div>

          {/* Propuesta de valor más directa */}
          <div style={fadeInUp(0.3)}>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', // Reducido para mejor proporción
              fontWeight: 400,
              color: '#e2e8f0',
              lineHeight: 1.55, // Ajustado
              margin: 0,
              maxWidth: '480px', // Reducido
              opacity: 0.95,
            }}>
              Multiplica tus ingresos y recupera tu tiempo con soluciones de IA estratégicas.{' '}
              <span style={{ 
                color: '#00D4FF', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(0,212,255,0.3)',
              }}>
                Resultados medibles, implementación humana.
              </span>
            </p>
          </div>

          {/* CTAs con animaciones más sofisticadas */}
          <div style={{
            ...fadeInUp(0.4),
            display: 'flex',
            gap: '1.15rem', // Reducido
            flexWrap: 'wrap',
            marginTop: '0.75rem', // Reducido
          }}>
            {/* CTA Principal con efectos avanzados */}
            <a 
              href="https://wa.me/59177028880"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsPrimaryHovered(true)}
              onMouseLeave={() => setIsPrimaryHovered(false)}
              style={{
                background: isPrimaryHovered 
                  ? 'linear-gradient(135deg, #0099CC 0%, #5a3ba1 100%)' 
                  : 'linear-gradient(135deg, #00D4FF 0%, #6B46C1 100%)',
                color: '#ffffff',
                padding: '0.9rem 2.2rem', // Reducido
                borderRadius: '45px', // Reducido
                fontWeight: 600,
                fontSize: '0.95rem', // Reducido
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: isPrimaryHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                boxShadow: isPrimaryHovered 
                  ? '0 12px 40px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)' 
                  : '0 6px 25px rgba(0, 212, 255, 0.25)',
                letterSpacing: '-0.01em',
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>
                Iniciar Conversación
              </span>
              {/* Efecto de onda en hover */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: isPrimaryHovered ? '300%' : '0%',
                height: isPrimaryHovered ? '300%' : '0%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.6s ease',
                pointerEvents: 'none',
              }}/>
            </a>
            
            {/* CTA Secundario más elegante */}
            <a
              href="#casos-de-exito"
              onMouseEnter={() => setIsSecondaryHovered(true)}
              onMouseLeave={() => setIsSecondaryHovered(false)}
              style={{
                background: isSecondaryHovered 
                  ? 'rgba(255,255,255,0.1)'
                  : 'transparent',
                border: '1.5px solid rgba(255,255,255,0.3)',
                padding: '0.9rem 2.2rem', // Reducido
                borderRadius: '45px', // Reducido
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.95rem', // Reducido
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: isSecondaryHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                borderColor: isSecondaryHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)',
                letterSpacing: '-0.01em',
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
                display: 'inline-block',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              Ver Casos de Éxito
              {/* Efecto de línea animada */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: isSecondaryHovered ? 0 : '50%',
                width: isSecondaryHovered ? '100%' : '0%',
                height: '2px',
                background: 'linear-gradient(90deg, #00D4FF, #6B46C1)',
                transition: 'all 0.4s ease',
              }}/>
            </a>
          </div>

          {/* Indicadores de confianza más tech */}
          <div style={{
            ...fadeInUp(0.5),
            display: 'flex',
            gap: '1.25rem', // Reducido
            marginTop: '1.5rem', // Reducido
            flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem', // Reducido
              padding: '0.45rem 0.9rem', // Reducido
              background: 'rgba(0,212,255,0.1)',
              borderRadius: '22px', // Reducido
              border: '1px solid rgba(0,212,255,0.2)',
              fontSize: '0.8rem', // Reducido
              color: '#00D4FF',
              fontWeight: 500,
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                width: '5px', // Reducido
                height: '5px',
                backgroundColor: '#00D4FF',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite',
              }}/>
              Consultor Certificado IA
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              background: 'rgba(245,158,11,0.1)',
              borderRadius: '22px',
              border: '1px solid rgba(245,158,11,0.2)',
              fontSize: '0.8rem',
              color: '#F59E0B',
              fontWeight: 500,
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                width: '5px',
                height: '5px',
                backgroundColor: '#F59E0B',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite 0.5s',
              }}/>
              +5 años experiencia
            </div>
          </div>
        </div>

        {/* Columna derecha: Estadísticas ALINEADAS correctamente */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem', // Espaciado uniforme
          alignItems: 'center', // Centradas horizontalmente
          justifyContent: 'center', // Centradas verticalmente
        }}>
          
          {/* Estadísticas con alineación perfecta */}
          {[
            { number: '50+', label: 'Proyectos IA', color: '#00D4FF', delay: 0.6 },
            { number: '15+', label: 'Sectores', color: '#6B46C1', delay: 0.7 },
            { number: '98%', label: 'Satisfacción', color: '#F59E0B', delay: 0.8 },
          ].map((stat, index) => (
            <div 
              key={index} 
              style={{
                ...fadeInUp(stat.delay),
                padding: '1.25rem 1.75rem', // Reducido
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '18px', // Reducido
                border: `1px solid ${stat.color}30`,
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
                width: '130px', // Ancho fijo para alineación perfecta
                position: 'relative',
                overflow: 'hidden',
                // REMOVIDO: transform: `translateX(${index * 20}px)` - esto causaba la desalineación
              }}
            >
              {/* Efecto de brillo de fondo */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, ${stat.color}20, transparent)`,
                animation: `slideRight 3s ease-in-out infinite ${index * 0.5}s`,
              }}/>
              
              <div style={{
                fontSize: '1.75rem', // Reducido
                fontWeight: 800,
                color: stat.color,
                marginBottom: '0.4rem', // Reducido
                letterSpacing: '-0.02em',
                fontFamily: 'Inter, sans-serif',
                position: 'relative',
                zIndex: 1,
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.8rem', // Reducido
                color: '#94a3b8',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.4px', // Reducido
                position: 'relative',
                zIndex: 1,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos CSS para animaciones avanzadas */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(8px) rotate(-1deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideRight {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        /* Responsive optimizado */
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center !important;
          }
          
          div[style*="alignItems: 'center'"] {
            align-items: center !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="gap: '1.15rem'"] {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          div[style*="gap: '1.75rem'"] {
            gap: 1.25rem !important;
          }
          
          div[style*="gap: '1.5rem'"] {
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;