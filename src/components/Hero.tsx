
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import Image from 'next/image';
import { useChatStore } from "@/store/chatStore"; // << 1. IMPORTACIÓN DEL STORE

// Hook de Typewriter CORREGIDO y MÁS ROBUSTO
const useTypewriter = (text: string, speed: number = 50) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText(''); 

    if (text) {
      const startTypingTimeout = setTimeout(() => {
        let i = 0;
        const intervalId = setInterval(() => {
          setTypedText(text.substring(0, i + 1));
          i++;
          if (i >= text.length) {
            clearInterval(intervalId);
          }
        }, speed);
        return () => clearInterval(intervalId);
      }, 200);
      return () => clearTimeout(startTypingTimeout);
    }
  }, [text, speed]);

  return typedText;
};

export default function HeroSectionNeuro() {
  const { openChat } = useChatStore(); // << 2. USO DEL HOOK PARA OBTENER LA FUNCIÓN
  const heroRef = useRef<HTMLElement>(null);
  const [currentCount, setCurrentCount] = useState(1247);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [logoAnimation, setLogoAnimation] = useState("hidden");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: -40, scale: 0.8 },
    visible: {
      opacity: 0.9,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 }
    },
    loop: {
      y: [0, -10, 0],
      scale: [1, 1.03, 1],
      rotate: [0, 2, -2, 0],
      transition: {
        y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        scale: { repeat: Infinity, duration: 5, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 10, ease: "easeInOut" },
      }
    }
  };
  
  // MENSAJE UNIFICADO - Headlines coherentes con el tema central
  const animatedHeadlines = [
    {
      id: 1,
      parts: [
        { text: "Automatiza " },
        { text: "lo que te consume horas", highlight: true },
        { text: " y " },
        { text: "recupera tu libertad.", highlight: true },
      ]
    },
    {
      id: 2,
      parts: [
        { text: "Mientras otros hacen " },
        { text: "todo manual,", highlight: true },
        { text: " tú puedes " },
        { text: "automatizar en 7 días.", highlight: true },
      ]
    },
    {
      id: 3,
      parts: [
        { text: "Transforma " },
        { text: "procesos repetitivos", highlight: true },
        { text: " en " },
        { text: "tiempo para lo importante.", highlight: true },
      ]
    },
  ];
  
  const notifications = [
    { name: "Carlos M.", action: "automatizó su gestión de clientes", time: "hace 12 min" },
    { name: "Roberto S.", action: "recuperó 15 horas semanales", time: "hace 15 min" },
    { name: "Ana P.", action: "duplicó su productividad", time: "hace 6 min" }
  ];

  const fullTextToType = animatedHeadlines[currentHeadlineIndex].parts.map(p => p.text).join("");
  const typedText = useTypewriter(fullTextToType, 40);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setCurrentHeadlineIndex(prev => (prev + 1) % animatedHeadlines.length);
    }, 8000);
    return () => clearInterval(headlineInterval);
  }, [animatedHeadlines.length]);

  useEffect(() => {
    const timer = setTimeout(() => setLogoAnimation("visible"), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const showNotificationCycle = () => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
      setTimeout(() => setCurrentNotification(prev => (prev + 1) % notifications.length), 5500);
    };
    const timer = setTimeout(showNotificationCycle, 4000);
    const interval = setInterval(showNotificationCycle, 15000);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, [notifications.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const renderTypedHeadline = () => {
    let charCount = 0;
    return animatedHeadlines[currentHeadlineIndex].parts.map((part, index) => {
      const startIndex = charCount;
      const endIndex = startIndex + part.text.length;
      charCount = endIndex;
      
      if (typedText.length < startIndex) {
        return <span key={index}></span>;
      }

      const visibleText = typedText.substring(startIndex, endIndex);

      return (
        <span key={index} className={part.highlight ? "bg-gradient-to-r from-[#00E5FF] via-[#00B8E6] to-[#0099CC] bg-clip-text text-transparent" : ""}>
          {visibleText}
        </span>
      );
    });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.5]">
          <source src="/22.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <motion.div 
          className="absolute w-[600px] h-[600px] bg-gradient-radial from-[#00E5FF]/4 to-transparent rounded-full blur-3xl"
          style={{
            x: useTransform(springX, [-300, 300], [-30, 30]),
            y: useTransform(springY, [-300, 300], [-30, 30]),
            left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      
      <motion.div
        className="absolute top-24 right-6 z-30 pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: showNotification ? 1 : 0, x: showNotification ? 0 : 100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="bg-black/70 backdrop-blur-xl border border-white/15 rounded-lg px-4 py-3 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
            <div className="text-sm">
              <span className="text-white/95 font-medium">{notifications[currentNotification].name}</span>
              <div className="text-white/70 text-xs mt-1">{notifications[currentNotification].action}</div>
              <div className="text-xs text-white/50 mt-1">{notifications[currentNotification].time}</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <motion.div
          className="w-full py-12 px-6 sm:px-16 border-y border-white/25 backdrop-blur-lg relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 229, 255, 0.03) 50%, rgba(0, 0, 0, 0.3) 100%)',
            boxShadow: '0 8px 32px rgba(0, 229, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          }}
        >
          <div className="max-w-5xl mx-auto text-left relative">
            <motion.div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/25">
              <div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
              <span className="text-xs text-white/80 font-medium">Sin programar, sin complicaciones técnicas</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white/95 leading-snug mb-6 min-h-[110px] sm:min-h-[128px]">
              {renderTypedHeadline()}
              {typedText.length === fullTextToType.length && (
                <span className="inline-block w-1 h-8 sm:h-10 bg-cyan-400 animate-pulse ml-1" />
              )}
            </h1>
            <p className="text-base text-white/90 mb-8 max-w-2xl leading-relaxed">
              No necesitas saber programar ni ser un experto en tecnología. 
              Te enseño a automatizar procesos paso a paso, con herramientas simples 
              que puedes implementar desde el primer día.
            </p>
            
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {/* vvv 3. BOTÓN MODIFICADO vvv */}
              <motion.button
                onClick={openChat}
                type="button"
                className="group relative bg-gradient-to-r from-[#00E5FF] to-[#0099CC] text-black font-bold px-6 py-3 rounded-lg shadow-lg transition-all text-sm overflow-hidden"
                whileHover={{ scale: 1.02, y: -2, boxShadow: '0 8px 25px rgba(0, 229, 255, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  Quiero Recuperar Mi Tiempo
                  <span className="block text-xs opacity-80 font-normal">Conversación sin compromiso</span>
                </span>
              </motion.button>
              {/* ^^^ FIN DE LA MODIFICACIÓN ^^^ */}
              <motion.a
                href="#casos-de-exito"
                className="group text-white/90 hover:text-white text-sm transition-all duration-300 relative"
                whileHover={{ x: 5 }}
              >
                <span className="border-b border-white/30 group-hover:border-[#00E5FF] pb-1 transition-colors duration-300">
                  Ver cómo otros recuperaron su tiempo
                </span>
                <motion.span
                  className="inline-block ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-8 text-xs text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { metric: '1,247', label: 'personas ya automatizaron' },
                { metric: '15h', label: 'recuperadas cada semana' },
                { metric: '7 días', label: 'para ver resultados' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  />
                  <span className="text-[#00E5FF] font-medium">{item.metric}</span>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
