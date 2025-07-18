
'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Award, Users, Clock, ArrowRight, Sparkles, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // =====> 1. AÑADE EL ESTADO PARA CONTROLAR EL MONTAJE <=====
  const [isMounted, setIsMounted] = useState(false);

  // =====> 2. USA useEffect PARA CAMBIAR EL ESTADO SOLO EN EL CLIENTE <=====
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmailInput('');
    }
  };

  const services = [
    { name: 'Consultoría Estratégica', href: '/consultoria', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Implementación de IA', href: '/implementacion', icon: <Zap className="w-4 h-4" /> },
    { name: 'Capacitación Corporativa', href: '/capacitacion', icon: <Users className="w-4 h-4" /> },
    { name: 'Desarrollo Personalizado', href: '/desarrollo', icon: <Award className="w-4 h-4" /> },
    { name: 'Altius Ignite Club', href: '/club', icon: <Sparkles className="w-4 h-4" />, featured: true }
  ];

  const insights = [
    "La IA no reemplaza humanos, potencia decisiones",
    "Automatización inteligente libera creatividad estratégica",
    "Datos sin acción son solo ruido digital",
    "La mejor IA es la que se siente invisible"
  ];

  const [currentInsight, setCurrentInsight] = useState(0);

  // Rotar insights cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInsight(prev => (prev + 1) % insights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [insights.length]); // Añadido insights.length como dependencia

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-cyan-500/20 overflow-hidden">
      {/* Elementos decorativos mejorados */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
        
        {/* Partículas de conexión */}
        <div className="absolute inset-0">
          {/* =====> 3. RENDERIZA LAS PARTÍCULAS SOLO SI EL COMPONENTE ESTÁ MONTADO <===== */}
          {isMounted && [...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Sección superior con CTA destacado mejorado */}
        <div className="py-16 border-b border-white/10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Insight rotativo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <div className="h-6 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentInsight * 24}px)` }}
                >
                  {insights.map((insight, index) => (
                    <div key={index} className="h-6 flex items-center">
                      <span className="text-yellow-400 font-medium text-sm">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              No esperes más. La IA ya está aquí, 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400"> y tu competencia también la está usando</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Únete a más de 50 empresas que ya transformaron su operación con nuestras soluciones de IA
            </p>
            
            {/* CTAs mejorados con métricas */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2">
                  Iniciar Conversación Estratégica
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  Ver Casos de Éxito
                  <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              {/* Métricas de confianza */}
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>50+ empresas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Respuesta 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>98% satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección principal del footer mejorada */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Columna 1: Información de la empresa con personalidad mejorada */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <span className="text-white font-bold text-xl relative z-10">H</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Hugo Hormazábal</h3>
                  <p className="text-cyan-400 font-medium">Consultor Estratégico en IA</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                No traduzco código. Traduzco complejidad en resultados estratégicos. 
                Mi obsesión es ayudarte a pensar mejor, decidir con claridad y liderar con impacto real.
              </p>

              {/* Credenciales destacadas mejoradas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="group bg-gradient-to-br from-cyan-900/20 to-cyan-900/5 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">50+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Proyectos IA</p>
                </div>
                <div className="group bg-gradient-to-br from-purple-900/20 to-purple-900/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">12+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Años Experiencia</p>
                </div>
                <div className="group bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">98%</span>
                  </div>
                  <p className="text-gray-400 text-sm">Satisfacción</p>
                </div>
              </div>

              {/* Redes sociales mejoradas */}
              <div>
                <p className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Sígueme para insights diarios sobre IA
                </p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/hugohormazabal" 
                     className="group bg-gradient-to-br from-cyan-900/20 to-cyan-900/5 hover:from-cyan-500/20 hover:to-cyan-500/10 border border-cyan-500/20 hover:border-cyan-400/50 rounded-lg p-3 transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" 
                     className="group bg-gradient-to-br from-purple-900/20 to-purple-900/5 hover:from-purple-500/20 hover:to-purple-500/10 border border-purple-500/20 hover:border-purple-400/50 rounded-lg p-3 transition-all duration-300">
                    <Twitter className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" 
                     className="group bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 hover:from-yellow-500/20 hover:to-yellow-500/10 border border-yellow-500/20 hover:border-yellow-400/50 rounded-lg p-3 transition-all duration-300">
                    <Youtube className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Columna 2: Servicios con iconos mejorados */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                Servicios
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className={`group flex items-center gap-3 transition-all duration-300 ${
                        service.featured 
                          ? 'text-cyan-400 hover:text-white font-semibold' 
                          : 'text-gray-400 hover:text-cyan-400'
                      }`}
                    >
                      <div className={`transition-transform group-hover:scale-110 ${
                        service.featured ? 'text-cyan-400' : ''
                      }`}>
                        {service.icon}
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {service.name}
                      </span>
                      {service.featured && (
                        <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Columna 3: Contacto mejorado */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                Contacto Directo
              </h4>
              
              <div className="space-y-4 mb-8">
                <div className="group flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">hugo@altiusignite.com</p>
                    <p className="text-gray-400 text-sm">Respuesta en 24h</p>
                  </div>
                </div>
                
                <a
                  href="https://wa.me/569XXXXXXXX?text=Hola%20Hugo%2C%20quiero%20asesoría%20en%20IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Hablemos por WhatsApp</p>
                    <p className="text-gray-400 text-sm">Respuesta en 24h</p>
                  </div>
                </a>
                
                <div className="group flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Santiago, Chile - Santa cruz de la sierra, Bolivia</p>
                    <p className="text-gray-400 text-sm">Consultoría global</p>
                  </div>
                </div>
              </div>

              {/* Newsletter mejorado */}
              <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-yellow-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  IA Weekly Insights
                </h5>
                <p className="text-gray-300 text-sm mb-4">
                  Estrategias prácticas de IA cada martes en tu inbox
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input 
                      type="email" 
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="tu@email.com" 
                      className="bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-300"
                      required
                    />
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Suscribirme Gratis
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-green-400 font-medium">¡Suscripción exitosa!</p>
                    <p className="text-gray-400 text-sm">Revisa tu email para confirmar</p>
                  </div>
                )}
                
                <p className="text-gray-400 text-xs mt-3 text-center">
                  +2,500 profesionales ya suscritos • Sin spam, solo valor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de clientes destacados mejorada */}
        <div className="py-12 border-t border-white/10">
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-4 flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              Empresas que confían en nuestras soluciones
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Cencosud', 'Scotiabank', 'SONDA', 'BancoEstado', 'MetLife', 'Tenpo'].map((company, index) => (
                <div key={index} className="text-white font-bold text-lg hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom mejorado */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Hugo Hormazábal - Altius Ignite. Todos los derechos reservados.
              </p>
              <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Hecho con IA y propósito
                </span>
              </div>
            </div>
            <div className="flex gap-6">
              <Link href="/terminos" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Términos
              </Link>
              <Link href="/privacidad" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
