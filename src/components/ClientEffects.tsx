// src/components/ClientEffects.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ClientEffects() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        id="aurora-spotlight"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '600px',
          height: '600px',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          zIndex: 9999, // Z-index alto para estar en la capa superior
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          opacity: 0,
          transition: 'opacity 0.5s', // Simplificamos la transición para mayor fluidez
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const spotlight = document.getElementById('aurora-spotlight');
            if (spotlight) {
              let animationFrameId = null;
              
              const updateSpotlight = (e) => {
                spotlight.style.transform = \`translate(\${e.clientX}px, \${e.clientY}px) translate(-50%, -50%)\`;
              };

              document.addEventListener('mousemove', (e) => {
                if (animationFrameId) {
                  cancelAnimationFrame(animationFrameId);
                }
                animationFrameId = requestAnimationFrame(() => updateSpotlight(e));
              });

              document.body.addEventListener('mouseenter', () => {
                spotlight.style.opacity = 0.6;
              });

              document.body.addEventListener('mouseleave', () => {
                spotlight.style.opacity = 0;
              });
            }
          `,
        }}
      />
    </>
  );
}