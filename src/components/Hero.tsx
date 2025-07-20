'use client';

import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeMetric, setActiveMetric] = useState(0);
  const [connectedUsers, setConnectedUsers] = useState(1247);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // SISTEMA MATEMÁTICO DE PROPORCIÓN ÁUREA COMPLETO
  const φ = 1.618033988749;
  const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  
  const φSystem = {
    base: 1,
    space: {
      φ0: `${1 / (φ * φ * φ)}rem`,
      φ1: `${1 / (φ * φ)}rem`,
      φ2: `${1 / φ}rem`,
      φ3: `1rem`,
      φ4: `${φ}rem`,
      φ5: `${φ * φ}rem`,
      φ6: `${φ * φ * φ}rem`,
      φ7: `${φ * φ * φ * φ}rem`,
      φ8: `${φ * φ * φ * φ * φ}rem`,
    },
    text: {
      φ0: `${1 / (φ * φ)}rem`,
      φ1: `${1 / φ}rem`,
      φ2: `${0.764}rem`,
      φ3: `1rem`,
      φ4: `${1.272}rem`,
      φ5: `${φ}rem`,
      φ6: `${φ * 1.272}rem`,
      φ7: `${φ * φ}rem`,
      φ8: `${φ * φ * 1.272}rem`,
      φ9: `${φ * φ * φ}rem`,
    },
    radius: {
      φ1: `${1 / φ}rem`,
      φ2: `1rem`,
      φ3: `${φ}rem`,
      φ4: `${φ * φ}rem`,
    }
  };

  // GRADIENTE EXACTO DEL LOGO HUGO - HORIZONTAL COMO EN EL LOGO
  const hugoGradient = {
    // Gradiente EXACTO del logo - horizontal de izquierda a derecha
    logoExact: 'linear-gradient(90deg, #00E5FF 0%, #00B8E6 25%, #0099CC 50%, #007BB8 75%, #005F9F 100%)',
    // Para el título - mismo gradiente pero optimizado para texto
    titleHorizontal: 'linear-gradient(90deg, #00E5FF 0%, #00D4FF 20%, #00B8E6 40%, #0099CC 60%, #007BB8 80%, #005F9F 100%)',
    // Para acentos - versión más sutil
    accent: 'linear-gradient(90deg, #00D4FF 0%, #00B8E6 50%, #0099CC 100%)',
    // Para elementos sutiles
    subtle: 'linear-gradient(90deg, rgba(0, 229, 255, 0.8) 0%, rgba(0, 184, 230, 0.6) 100%)',
  };

  const hugoColors = {
    primary: '#00E5FF', // Azul más claro del logo
    primaryRgb: '0, 229, 255',
    secondary: '#0099CC', 
    accent: '#00B8E6',
    dark: '#005F9F', // Azul más oscuro del logo
    gradient: hugoGradient,
  };

  const metrics = [
    { label: "Empresarios evaluando ahora", value: connectedUsers, suffix: "", highlight: true },
    { label: "ROI promedio garantizado", value: 300, suffix: "%", highlight: true },
    { label: "Satisfacción del cliente", value: 98, suffix: "%", highlight: false },
    { label: "Tiempo de implementación", value: 90, suffix: " días", highlight: false },
  ];

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, φ * 2500);
    return () => clearInterval(interval);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setConnectedUsers(prev => {
        const seed = Math.floor(Date.now() / 10000);
        const pseudoRandom = (seed * 9301 + 49297) % 233280;
        const change = Math.floor((pseudoRandom / 233280) * 6) - 2;
        return Math.max(1200, Math.min(1300, prev + change));
      });
    }, φ * 5000);
    return () => clearInterval(interval);
  }, [isMounted]);

  const fadeInUp = (delay: number) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : `translateY(${φSystem.space.φ4})`,
    transition: `all ${φ * 0.618}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    transitionDelay: `${delay * φ * 0.1}s`,
  });

  const parallaxTransform = (intensity: number) => ({
    transform: `translate3d(${(mousePosition.x - 0.5) * intensity * φ}px, ${(mousePosition.y - 0.5) * intensity * φ}px, 0)`,
    transition: `transform ${φ * 0.123}s ease-out`,
  });

  if (!isMounted) {
    return (
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          color: '#00E5FF',
          fontSize: '1rem',
          fontFamily: '"SF Pro Display", system-ui, sans-serif',
        }}>
          Cargando...
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `
          radial-gradient(ellipse at top, rgba(${hugoColors.primaryRgb}, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #000000 0%, #0a0a0a 100%)
        `,
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: 'hidden',
      }}
    >
      
      {/* Video de fondo */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0,
        ...parallaxTransform(-1),
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            width: `${100 + φ * 2}%`,
            height: `${100 + φ * 2}%`,
            objectFit: 'cover', 
            opacity: 0.5,
            filter: 'brightness(0.3) contrast(1.1) saturate(0.9)',
            transform: `scale(${1 + φ * 0.01})`,
          }}
        >
          <source src="/22.mp4" type="video/mp4" />
        </video>
        
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: `
            radial-gradient(ellipse at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(${hugoColors.primaryRgb}, 0.02) 0%, 
              rgba(0,0,0,0.3) 50%, 
              rgba(0,0,0,0.8) 100%
            )
          `,
          transition: `background-image ${φ * 0.185}s ease-out`,
        }}/>
      </div>

      {/* Partículas minimalistas */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {fib.slice(0, 5).map((fibNum, i) => {
          const distanceFromMouse = Math.sqrt(
            Math.pow((mousePosition.x * 100) - (φ * 10 + (i * φ * 8)), 2) + 
            Math.pow((mousePosition.y * 100) - (φ * 15 + (i * φ * 6)), 2)
          );
          const isNearMouse = distanceFromMouse < φ * 10;
          
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: isNearMouse ? `${φ}px` : `${1/φ}px`,
                height: isNearMouse ? `${φ}px` : `${1/φ}px`,
                backgroundImage: isNearMouse 
                  ? hugoColors.gradient.accent
                  : 'none',
                backgroundColor: isNearMouse 
                  ? 'transparent'
                  : 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                left: `${φ * 10 + (i * φ * 8)}%`,
                top: `${φ * 15 + (i * φ * 6)}%`,
                ...parallaxTransform(fibNum * 0.5),
                animation: `float ${φ * 5 + i * φ}s ease-in-out infinite`,
                animationDelay: `${i * φ * 0.5}s`,
                transition: `all ${φ * 0.185}s ease-out`,
                boxShadow: isNearMouse 
                  ? `0 0 ${φSystem.space.φ3} rgba(${hugoColors.primaryRgb}, 0.4)` 
                  : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Contenedor principal */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: `${φ * 45}rem`,
        margin: '0 auto',
        padding: `${φSystem.space.φ8} ${φSystem.space.φ6} ${φSystem.space.φ7}`,
        display: 'grid',
        gridTemplateColumns: `${φ * φ}fr 1fr`,
        gap: φSystem.space.φ8,
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        
        {/* Columna principal */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: φSystem.space.φ6,
          ...parallaxTransform(2),
        }}>
          
          {/* TÍTULO CON GRADIENTE EXACTO DEL LOGO HUGO */}
          <div style={fadeInUp(0.1)}>
            <h1 style={{
              fontSize: φSystem.text.φ9, // 68px - Protagonista total
              fontWeight: 700, // Bold para máximo impacto
              lineHeight: 0.95, // Compacto y moderno
              margin: 0,
              fontFamily: '"SF Pro Display", system-ui, sans-serif',
              maxWidth: `${φ * φ * 20}rem`, // Ancho generoso
              marginBottom: φSystem.space.φ4, // Espacio áureo
              position: 'relative',
              letterSpacing: `-${1/φ * 0.08}em`, // Tight y profesional
            }}>
              {/* TÍTULO PRINCIPAL CON GRADIENTE HORIZONTAL EXACTO DEL LOGO */}
              <span style={{
                display: 'block',
                marginBottom: φSystem.space.φ3, // 16px
                // GRADIENTE HORIZONTAL EXACTO DEL LOGO HUGO
                backgroundImage: hugoColors.gradient.titleHorizontal,
                backgroundSize: '100% 100%', // Asegurar que cubra todo el texto
                backgroundRepeat: 'no-repeat',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                // Sombra sutil que realza el gradiente
                filter: `drop-shadow(0 ${φSystem.space.φ2} ${φSystem.space.φ4} rgba(0, 0, 0, 0.4))`,
                // Hover elegante que intensifica el gradiente
                transition: `all ${φ * 0.3}s ease-out`,
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                // En hover, intensificar el gradiente y la sombra
                e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, #00F0FF 0%, #00E5FF 15%, #00D4FF 30%, #00B8E6 50%, #0099CC 70%, #007BB8 85%, #005F9F 100%)';
                e.currentTarget.style.filter = `drop-shadow(0 ${φSystem.space.φ2} ${φSystem.space.φ5} rgba(0, 229, 255, 0.3))`;
                e.currentTarget.style.transform = `translateY(-${φSystem.space.φ0})`;
              }}
              onMouseLeave={(e) => {
                // Volver al gradiente original
                e.currentTarget.style.backgroundImage = hugoColors.gradient.titleHorizontal;
                e.currentTarget.style.filter = `drop-shadow(0 ${φSystem.space.φ2} ${φSystem.space.φ4} rgba(0, 0, 0, 0.4))`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                Multiplica tus ingresos
              </span>

              {/* Subtítulo elegante con gradiente sutil */}
              <span style={{
                fontSize: φSystem.text.φ7, // 42px - Proporción áurea perfecta
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.85)',
                display: 'block',
                // Gradiente sutil solo en hover
                transition: `all ${φ * 0.3}s ease-out`,
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = hugoColors.gradient.subtle;
                e.currentTarget.style.backgroundClip = 'text';
                (e.currentTarget.style as any).WebkitBackgroundClip = 'text';
                (e.currentTarget.style as any).WebkitTextFillColor = 'transparent';
                e.currentTarget.style.color = 'transparent';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = 'none';
                e.currentTarget.style.backgroundClip = 'unset';
                (e.currentTarget.style as any).WebkitBackgroundClip = 'unset';
                (e.currentTarget.style as any).WebkitTextFillColor = 'unset';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
              }}
              >
                mientras recuperas tu tiempo
              </span>

              {/* Línea decorativa con gradiente del logo */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: `-${φSystem.space.φ4}`, // -26px
                  left: 0,
                  width: `${φ * 30}%`, // 48.54% - proporción áurea
                  height: `${φ}px`, // 1.618px
                  backgroundImage: hugoColors.gradient.accent,
                  borderRadius: `${φ}px`,
                  opacity: 0,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: `all ${φ * 0.4}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                  boxShadow: `0 0 ${φSystem.space.φ3} rgba(${hugoColors.primaryRgb}, 0.4)`,
                }}
                className="title-underline"
              />
            </h1>
          </div>

          {/* Descripción */}
          <div style={fadeInUp(0.2)}>
            <div 
              style={{
                padding: φSystem.space.φ5,
                backgroundColor: 'rgba(0, 0, 0, 0.15)',
                backdropFilter: `blur(${φ * 12}px)`,
                border: `${1/φ}px solid rgba(${hugoColors.primaryRgb}, 0.12)`,
                borderRadius: φSystem.radius.φ3,
                position: 'relative',
                overflow: 'hidden',
                transition: `all ${φ * 0.185}s ease-out`,
                maxWidth: `${φ * φ * 18}rem`,
                boxShadow: `
                  0 ${φSystem.space.φ2} ${φSystem.space.φ5} rgba(0, 0, 0, 0.1),
                  inset 0 ${1/φ}px 0 rgba(255, 255, 255, 0.05)
                `,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${hugoColors.primaryRgb}, 0.2)`;
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = `translateY(-${φSystem.space.φ0})`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(${hugoColors.primaryRgb}, 0.12)`;
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: `${1/φ}px`,
                backgroundImage: hugoColors.gradient.accent,
                opacity: 0.6,
              }}/>
              
              <div style={{
                fontSize: φSystem.text.φ5,
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: φ,
                margin: 0,
                fontFamily: '"SF Pro Text", system-ui, sans-serif',
                letterSpacing: `-${1/φ * 0.02}em`,
              }}>
                Automatiza el <span style={{ 
                  fontWeight: 600, 
                  backgroundImage: hugoColors.gradient.accent,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  position: 'relative',
                } as React.CSSProperties}>
                  70%
                </span> de tus tareas repetitivas con IA estratégica.
                <br />
                ROI promedio <span style={{ 
                  fontWeight: 600, 
                  backgroundImage: hugoColors.gradient.accent,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  position: 'relative',
                } as React.CSSProperties}>
                  300%
                </span> en 90 días.
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div style={{
            ...fadeInUp(0.3),
            display: 'flex',
            gap: φSystem.space.φ4,
            flexWrap: 'wrap',
            marginTop: φSystem.space.φ3,
          }}>
            <a 
              href="https://wa.me/59177028880"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: φSystem.space.φ3,
                padding: `${φSystem.space.φ4} ${φSystem.space.φ5}`,
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: '#000000',
                borderRadius: φSystem.radius.φ2,
                fontWeight: 500,
                fontSize: φSystem.text.φ3,
                textDecoration: 'none',
                transition: `all ${φ * 0.185}s ease-out`,
                boxShadow: `
                  0 ${φSystem.space.φ1} ${φSystem.space.φ4} rgba(255, 255, 255, 0.1),
                  0 ${1/φ}px ${φSystem.space.φ2} rgba(0, 0, 0, 0.05)
                `,
                fontFamily: '"SF Pro Display", system-ui, sans-serif',
                letterSpacing: `-${1/φ * 0.015}em`,
                minWidth: `${φ * 8}rem`,
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `translateY(-${φSystem.space.φ1})`;
                e.currentTarget.style.boxShadow = `
                  0 ${φSystem.space.φ3} ${φSystem.space.φ5} rgba(${hugoColors.primaryRgb}, 0.15),
                  0 ${φSystem.space.φ1} ${φSystem.space.φ3} rgba(0, 0, 0, 0.1)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `
                  0 ${φSystem.space.φ1} ${φSystem.space.φ4} rgba(255, 255, 255, 0.1),
                  0 ${1/φ}px ${φSystem.space.φ2} rgba(0, 0, 0, 0.05)
                `;
              }}
            >
              Consulta Estratégica
              <div style={{
                width: φSystem.space.φ4,
                height: φSystem.space.φ4,
                backgroundColor: 'rgba(0,0,0,0.08)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: φSystem.text.φ2,
                transition: `all ${φ * 0.123}s ease`,
              }}>
                →
              </div>
            </a>
            
            <a
              href="#calculadora"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: φSystem.space.φ3,
                padding: `${φSystem.space.φ4} ${φSystem.space.φ5}`,
                backgroundColor: `rgba(${hugoColors.primaryRgb}, 0.08)`,
                backdropFilter: `blur(${φ * 12}px)`,
                border: `${1/φ}px solid rgba(${hugoColors.primaryRgb}, 0.25)`,
                color: 'rgba(255, 255, 255, 0.92)',
                borderRadius: φSystem.radius.φ2,
                fontWeight: 500,
                fontSize: φSystem.text.φ3,
                textDecoration: 'none',
                transition: `all ${φ * 0.185}s ease-out`,
                fontFamily: '"SF Pro Display", system-ui, sans-serif',
                letterSpacing: `-${1/φ * 0.015}em`,
                minWidth: `${φ * 6.5}rem`,
                justifyContent: 'center',
                boxShadow: `
                  0 ${φSystem.space.φ1} ${φSystem.space.φ4} rgba(0, 0, 0, 0.1),
                  inset 0 ${1/φ}px 0 rgba(255, 255, 255, 0.05)
                `,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${hugoColors.primaryRgb}, 0.4)`;
                e.currentTarget.style.backgroundColor = `rgba(${hugoColors.primaryRgb}, 0.12)`;
                e.currentTarget.style.transform = `translateY(-${φSystem.space.φ1})`;
                e.currentTarget.style.color = hugoColors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(${hugoColors.primaryRgb}, 0.25)`;
                e.currentTarget.style.backgroundColor = `rgba(${hugoColors.primaryRgb}, 0.08)`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.92)';
              }}
            >
              Calcular ROI
            </a>
          </div>
        </div>

        {/* Columna lateral - métricas y testimonial (sin cambios) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: φSystem.space.φ5,
          ...parallaxTransform(-3),
        }}>
          
          {/* Métrica principal */}
          <div style={{
            ...fadeInUp(0.2),
            padding: φSystem.space.φ5,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: `blur(${φ * 18}px)`,
            border: `${1/φ}px solid rgba(${hugoColors.primaryRgb}, 0.15)`,
            borderRadius: φSystem.radius.φ4,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: `${φ * φ * 6}rem`,
            width: `${φ * 15}rem`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: `all ${φ * 0.185}s ease-out`,
            boxShadow: `
              0 ${φSystem.space.φ3} ${φSystem.space.φ6} rgba(0, 0, 0, 0.15),
              inset 0 ${1/φ}px 0 rgba(255, 255, 255, 0.05),
              inset 0 -${1/φ}px 0 rgba(0, 0, 0, 0.1)
            `,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `rgba(${hugoColors.primaryRgb}, 0.25)`;
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            e.currentTarget.style.transform = `translateY(-${φSystem.space.φ1})`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `rgba(${hugoColors.primaryRgb}, 0.15)`;
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at ${φ * 20}% ${φ * 20}%, rgba(${hugoColors.primaryRgb}, 0.03) 0%, transparent 50%),
                radial-gradient(circle at ${100 - φ * 20}% ${100 - φ * 20}%, rgba(${hugoColors.primaryRgb}, 0.02) 0%, transparent 50%)
              `,
              animation: `rotate ${φ * 12}s linear infinite`,
            }}/>

            <div style={{
              position: 'absolute',
              top: φSystem.space.φ4,
              right: φSystem.space.φ4,
              display: 'flex',
              alignItems: 'center',
              gap: φSystem.space.φ2,
              fontSize: φSystem.text.φ1,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 500,
              padding: `${φSystem.space.φ2} ${φSystem.space.φ3}`,
              backgroundColor: `rgba(${hugoColors.primaryRgb}, 0.08)`,
              borderRadius: φSystem.radius.φ1,
              border: `${1/φ}px solid rgba(${hugoColors.primaryRgb}, 0.2)`,
              backdropFilter: `blur(${φ * 8}px)`,
            }}>
              <div style={{
                width: φSystem.space.φ1,
                height: φSystem.space.φ1,
                backgroundImage: hugoColors.gradient.accent,
                borderRadius: '50%',
                animation: `pulse ${φ * 1.236}s ease-in-out infinite`,
                boxShadow: `0 0 ${φSystem.space.φ2} rgba(${hugoColors.primaryRgb}, 0.6)`,
              }}/>
              EN VIVO
            </div>

            <div style={{
              fontSize: φSystem.text.φ8,
              fontWeight: 700,
              backgroundImage: metrics[activeMetric].highlight ? hugoColors.gradient.titleHorizontal : 'none',
              backgroundColor: metrics[activeMetric].highlight ? 'transparent' : '#ffffff',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: metrics[activeMetric].highlight ? 'transparent' : '#ffffff',
              color: metrics[activeMetric].highlight ? 'transparent' : '#ffffff',
              marginBottom: φSystem.space.φ4,
              fontFamily: '"SF Pro Display", system-ui, sans-serif',
              letterSpacing: `-${1/φ * 0.04}em`,
              transition: `all ${φ * 0.494}s ease-out`,
              position: 'relative',
              zIndex: 1,
              textShadow: metrics[activeMetric].highlight 
                ? 'none'
                : `0 ${φSystem.space.φ1} ${φSystem.space.φ4} rgba(0, 0, 0, 0.6)`,
            } as React.CSSProperties}>
              {metrics[activeMetric].value}{metrics[activeMetric].suffix}
            </div>
            
            <div style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontWeight: 400,
              fontSize: φSystem.text.φ2,
              fontFamily: '"SF Pro Text", system-ui, sans-serif',
              transition: `all ${φ * 0.494}s ease-out`,
              position: 'relative',
              zIndex: 1,
              lineHeight: φ,
              maxWidth: `${φ * 12}rem`,
              margin: '0 auto',
            }}>
              {metrics[activeMetric].label}
            </div>

            <div style={{
              display: 'flex',
              gap: φSystem.space.φ2,
              justifyContent: 'center',
              marginTop: φSystem.space.φ4,
              position: 'relative',
              zIndex: 1,
            }}>
              {metrics.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: φSystem.space.φ2,
                    height: φSystem.space.φ2,
                    borderRadius: '50%',
                    backgroundImage: index === activeMetric 
                      ? hugoColors.gradient.accent
                      : 'none',
                    backgroundColor: index === activeMetric 
                      ? 'transparent'
                      : 'rgba(255, 255, 255, 0.25)',
                    transition: `all ${φ * 0.247}s ease`,
                    boxShadow: index === activeMetric 
                      ? `0 0 ${φSystem.space.φ3} rgba(${hugoColors.primaryRgb}, 0.6)` 
                      : 'none',
                    border: index === activeMetric 
                      ? `${1/φ}px solid rgba(${hugoColors.primaryRgb}, 0.4)`
                      : `${1/φ}px solid rgba(255, 255, 255, 0.15)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div style={{
            ...fadeInUp(0.3),
            padding: φSystem.space.φ5,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: `blur(${φ * 18}px)`,
            border: `${1/φ}px solid rgba(${hugoColors.primaryRgb}, 0.12)`,
            borderRadius: φSystem.radius.φ3,
            position: 'relative',
            transition: `all ${φ * 0.185}s ease-out`,
            overflow: 'hidden',
            width: `${φ * 15}rem`,
            boxShadow: `
              0 ${φSystem.space.φ2} ${φSystem.space.φ5} rgba(0, 0, 0, 0.1),
              inset 0 ${1/φ}px 0 rgba(255, 255, 255, 0.03)
            `,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `rgba(${hugoColors.primaryRgb}, 0.2)`;
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
            e.currentTarget.style.transform = `translateY(-${φSystem.space.φ0})`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `rgba(${hugoColors.primaryRgb}, 0.12)`;
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: `${1/φ}px`,
              backgroundImage: hugoColors.gradient.accent,
              opacity: 0.4,
            }}/>

            <div style={{
              display: 'flex',
              alignItems: 'start',
              gap: φSystem.space.φ4,
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{
                width: φSystem.space.φ6,
                height: φSystem.space.φ6,
                backgroundColor: `rgba(${hugoColors.primaryRgb}, 0.15)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: hugoColors.primary,
                fontWeight: 600,
                fontSize: φSystem.text.φ4,
                flexShrink: 0,
                fontFamily: '"SF Pro Display", system-ui, sans-serif',
                border: `${φ}px solid rgba(${hugoColors.primaryRgb}, 0.3)`,
                boxShadow: `
                  0 0 ${φSystem.space.φ4} rgba(${hugoColors.primaryRgb}, 0.2),
                  inset 0 ${1/φ}px ${φSystem.space.φ1} rgba(255, 255, 255, 0.1)
                `,
                position: 'relative',
              }}>
                JM
                <div style={{
                  position: 'absolute',
                  top: `-${φSystem.space.φ0}`,
                  right: `-${φSystem.space.φ0}`,
                  width: φSystem.space.φ3,
                  height: φSystem.space.φ3,
                  backgroundImage: hugoColors.gradient.accent,
                  borderRadius: '50%',
                  border: `${φ}px solid #000000`,
                  boxShadow: `0 0 ${φSystem.space.φ2} rgba(${hugoColors.primaryRgb}, 0.8)`,
                }}/>
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: φSystem.space.φ3,
                  fontSize: φSystem.text.φ3,
                  fontFamily: '"SF Pro Display", system-ui, sans-serif',
                  letterSpacing: `-${1/φ * 0.01}em`,
                }}>
                  Juan Martínez, CEO
                </div>
                
                <div style={{
                  color: 'rgba(255, 255, 255, 0.82)',
                  fontSize: φSystem.text.φ2,
                  lineHeight: φ,
                  marginBottom: φSystem.space.φ4,
                  fontFamily: '"SF Pro Text", system-ui, sans-serif',
                  fontStyle: 'italic',
                }}>
                  "En 90 días automatizamos el 70%. Ahora trabajo 30h/semana y ganamos 3x más."
                </div>
                
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: φSystem.space.φ2,
                  color: hugoColors.primary,
                  fontSize: φSystem.text.φ1,
                  fontWeight: 600,
                  padding: `${φSystem.space.φ2} ${φSystem.space.φ3}`,
                  backgroundColor: `rgba(${hugoColors.primaryRgb}, 0.08)`,
                  borderRadius: φSystem.radius.φ1,
                  border: `${1/φ}px solid rgba(${hugoColors.primaryRgb}, 0.25)`,
                  boxShadow: `
                    0 0 ${φSystem.space.φ3} rgba(${hugoColors.primaryRgb}, 0.15),
                    inset 0 ${1/φ}px 0 rgba(255, 255, 255, 0.05)
                  `,
                  backdropFilter: `blur(${φ * 8}px)`,
                }}>
                  <div style={{
                    width: `${φ * 2}px`,
                    height: `${φ * 2}px`,
                    backgroundImage: hugoColors.gradient.accent,
                    borderRadius: '50%',
                    boxShadow: `0 0 ${φSystem.space.φ2} rgba(${hugoColors.primaryRgb}, 0.8)`,
                    animation: `pulse ${φ * 1.236}s ease-in-out infinite`,
                  }}/>
                  +300% ROI verificado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos minimalistas y profesionales */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-${φSystem.space.φ3}) scale(${1 + 1/(φ*φ)}); }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(${φ}); 
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Hover effect para la línea del título */
        h1:hover .title-underline {
          opacity: 1 !important;
          transform: scaleX(1) !important;
        }

        /* Responsive */
        @media (max-width: ${φ * 633}px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: ${φSystem.space.φ6} !important;
            text-align: center !important;
          }
          
          div[style*="width: '${φ * 15}rem'"] {
            width: 100% !important;
            max-width: ${φ * 20}rem !important;
            margin: 0 auto !important;
          }
        }

        @media (max-width: ${φ * 475}px) {
          div[style*="padding: '${φSystem.space.φ8} ${φSystem.space.φ6} ${φSystem.space.φ7}'"] {
            padding: ${φSystem.space.φ6} ${φSystem.space.φ4} ${φSystem.space.φ5} !important;
          }
          
          h1 {
            font-size: ${φSystem.text.φ7} !important;
          }
          
          h1 span:last-child {
            font-size: ${φSystem.text.φ5} !important;
          }
          
          div[style*="fontSize: '${φSystem.text.φ5}'"] {
            font-size: ${φSystem.text.φ4} !important;
          }

          div[style*="gap: '${φSystem.space.φ4}'"] {
            flex-direction: column !important;
            align-items: center !important;
            gap: ${φSystem.space.φ3} !important;
          }
          
          a[style*="minWidth"] {
            min-width: ${φ * 10}rem !important;
          }
        }

        @media (max-width: ${φ * 297}px) {
          div[style*="padding: '${φSystem.space.φ5}'"] {
            padding: ${φSystem.space.φ4} !important;
          }
          
          div[style*="gap: '${φSystem.space.φ5}'"] {
            gap: ${φSystem.space.φ4} !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
