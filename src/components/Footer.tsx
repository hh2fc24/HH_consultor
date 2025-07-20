
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
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        
        {/* --- SECCIÓN PRINCIPAL DEL FOOTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
          
          {/* Columna 1: El Mensaje Final (Filosofía) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 ${theme.gradient} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Hugo Hormazábal</h3>
                <p className={`font-medium ${theme.textGradient} bg-clip-text text-transparent`}>Consultor Estratégico en IA</p>
              </div>
            </div>
            <p className="text-2xl text-gray-300 leading-snug">
              "La tecnología es solo el medio. Mi verdadera obsesión es el <strong className="text-white font-semibold">impacto estratégico</strong> y la <strong className="text-white font-semibold">claridad</strong> que esta puede traer a tu negocio."
            </p>
          </motion.div>

          {/* Columna 2: La Conexión (Newsletter) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-gray-900/40 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-cyan-400"/>
              <h4 className="text-xl font-bold text-white">Únete a los Pioneros de IA</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Recibe un insight semanal, práctico y accionable sobre IA y estrategia de negocio. Cero humo, 100% valor.
            </p>
            
            {formState === 'success' ? (
              <div className="text-center py-4 flex items-center justify-center gap-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <p className="font-medium text-green-400">¡Suscripción exitosa! Revisa tu email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input 
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="tu@email.com" 
                  className="bg-gray-800/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                  required
                  disabled={formState === 'submitting'}
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formState === 'submitting'}
                  className={`flex-shrink-0 px-4 py-3 ${theme.gradient} text-white rounded-lg font-semibold transition-all duration-300 disabled:opacity-50`}
                >
                  <ArrowRight className="w-6 h-6"/>
                </motion.button>
              </form>
            )}
             <p className="text-gray-500 text-xs mt-3 text-center">
              +2,500 profesionales ya suscritos • Sin spam.
            </p>
          </motion.div>
        </div>

        {/* --- BARRA INFERIOR (NAVEGACIÓN Y SOCIAL) --- */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Hugo Hormazábal - Altius Ignite. Todos los derechos reservados.
            </p>
            
            <div className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

