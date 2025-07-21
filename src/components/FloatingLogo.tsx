'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';
import Image from 'next/image';

export default function FloatingLogo() {
  // Valores de Framer Motion para la posición X e Y
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs para un movimiento suave y elástico
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Variantes para la animación de entrada y bucle del logo
  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.9,
      scale: 1,
      transition: { type: 'spring', damping: 15, stiffness: 100, delay: 1 }
    },
    loop: {
      scale: [1, 1.05, 1],
      rotate: [0, -3, 3, 0],
      transition: {
        scale: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
        rotate: { repeat: Infinity, duration: 12, ease: 'easeInOut' }
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Dividimos la pantalla en 4 cuadrantes.
      // El objetivo del logo será la esquina opuesta al cuadrante del mouse.
      let targetX, targetY;

      // Definimos un margen para que no se pegue a los bordes
      const margin = 80;

      if (clientY < innerHeight / 2) { // Mouse en la mitad superior
        targetY = innerHeight - margin;
      } else { // Mouse en la mitad inferior
        targetY = margin;
      }

      if (clientX < innerWidth / 2) { // Mouse en la mitad izquierda
        targetX = innerWidth - margin;
      } else { // Mouse en la mitad derecha
        targetX = margin;
      }
      
      // Actualizamos los motion values que los springs seguirán
      mouseX.set(targetX);
      mouseY.set(targetY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        left: 0,
        top: 0,
        x: springX,
        y: springY,
        // Centramos el logo en su punto de anclaje
        translateX: '-50%',
        translateY: '-50%',
      }}
      variants={logoVariants}
      initial="hidden"
      animate={["visible", "loop"]}
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-4 bg-[#00E5FF] opacity-25 blur-2xl rounded-full"
        />
        <Image src="/Logo_HH.svg" alt="Logo Flotante" width={80} height={80} />
      </div>
    </motion.div>
  );
}