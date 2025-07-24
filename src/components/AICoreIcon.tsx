'use client';

import { motion } from 'framer-motion';

export const AICoreIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fondo de Gradiente Giratorio */}
    <defs>
      <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="100%" stopColor="#007BFF" />
      </linearGradient>
    </defs>
    <motion.circle
      cx="40" cy="40" r="38"
      stroke="url(#glow)"
      strokeWidth="1.5"
      strokeOpacity="0.5"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    />

    {/* Anillos orbitales */}
    <motion.circle
      cx="40" cy="40" r="28"
      stroke="#00E5FF"
      strokeWidth="1"
      strokeOpacity="0.3"
      strokeDasharray="5 15"
      initial={{ rotate: 0 }}
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Núcleo Central Pulsante */}
    <motion.g>
      <motion.circle
        cx="40" cy="40" r="14"
        fill="#00E5FF"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="40" cy="40" r="18"
        fill="#00E5FF"
        opacity="0.2"
        animate={{ scale: [1.1, 1.2, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.g>
  </svg>
);