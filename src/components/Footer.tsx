'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Youtube, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (emailInput && formState === 'idle') {
      setFormState('submitting');
      // Simulación de una llamada a API
      setTimeout(() => {
        setFormState('success');
        setEmailInput('');
        setTimeout(() => setFormState('idle'), 4000); // Resetear el formulario después de 4 segundos
      }, 1000);
    }
  };
  
  const theme = {
    gradient: 'bg-gradient-to-r from-cyan-400 to-indigo-500',
    textGradient: 'from-cyan-400 to-indigo-500',
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/hugohormazabal' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const navLinks = [
    { name: 'Superpoderes', href: '#superpoderes' },
    { name: 'Casos de Éxito', href: '#casos-de-exito' },
    { name: 'Elige tu Camino', href: '#comienza-aqui' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Efectos de fondo más sutiles */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        
        {/* --- SECCIÓN PRINCIPAL DEL FOOTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
          
          {/* Columna 1: Información Personal (más compacta) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 ${theme.gradient} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-semibold text-lg">H</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Hugo Hormazábal</h3>
                <p className={`text-sm font-medium ${theme.textGradient} bg-clip-text text-transparent`}>
                  Consultor Estratégico en IA
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
              "La tecnología es solo el medio. Mi verdadera obsesión es el{' '}
              <span className="text-white font-medium">impacto estratégico</span> y la{' '}
              <span className="text-white font-medium">claridad</span> que esta puede traer a tu negocio."
            </p>
          </motion.div>

          {/* Columna 2: Newsletter (más compacta) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/30 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-cyan-400"/>
              <h4 className="text-base font-semibold text-white">Newsletter</h4>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Insights semanales sobre IA y estrategia. Cero spam, 100% valor.
            </p>
            
            {formState === 'success' ? (
              <div className="text-center py-3 flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <p className="text-sm font-medium text-green-400">¡Suscripción exitosa!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="tu@email.com" 
                  className="w-full bg-gray-800/50 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                  required
                  disabled={formState === 'submitting'}
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formState === 'submitting'}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 ${theme.gradient} text-white text-sm font-medium rounded-lg transition-all duration-300 disabled:opacity-50`}
                >
                  {formState === 'submitting' ? 'Enviando...' : 'Suscribirse'}
                  <ArrowRight className="w-4 h-4"/>
                </motion.button>
              </form>
            )}
            <p className="text-gray-500 text-xs mt-3 text-center">
              +2,500 profesionales suscritos
            </p>
          </motion.div>
        </div>

        {/* --- NAVEGACIÓN RÁPIDA --- */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            
            {/* Links de navegación */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Redes sociales */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="border-t border-white/5 py-4">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Hugo Hormazábal - Altius Ignite. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;