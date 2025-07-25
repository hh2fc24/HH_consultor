// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Inicio',
      href: '#inicio',
      description: 'Conecta con la IA',
      color: 'cyan'
    },
    {
      label: 'El Estratega',
      href: '#sobre-mi',
      description: 'Sobre Mí y Manifiesto',
      color: 'purple',
      submenu: [
        { label: 'Bio y Manifiesto', href: '#sobre-mi' },
        { label: 'Superpoderes IA', href: '#superpoderes' },
        { label: 'Ecosistema Técnico', href: '#ecosistema-tecnico' }
      ]
    },
    {
      label: 'Formación',
      href: '#ecosistema-aprendizaje',
      description: 'Mi Ecosistema Formativo',
      color: 'cyan'
    },
    {
      label: 'Resultados',
      href: '#casos-de-exito',
      description: 'Casos de Éxito',
      color: 'purple'
    },
    {
      label: 'Colaboración',
      href: '#comienza-aqui',
      description: 'Comienza tu Viaje',
      color: 'yellow'
    }
  ];

  return (
    <>
      <style jsx global>{`
        .logo-glow {
          filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.5));
          transition: all 0.3s ease;
        }
        
        .logo-glow:hover {
          filter: drop-shadow(0 0 25px rgba(0, 212, 255, 0.8));
          transform: scale(1.02);
        }

        .nav-gradient {
          background: ${isScrolled 
            ? 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(15, 23, 42, 0.9) 100%)'
            : 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(15, 23, 42, 0.7) 100%)'
          };
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,212,255,0.15);
        }

        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #00D4FF, #A78BFA);
          transition: width 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .dropdown-menu {
          background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,212,255,0.2);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        
        .cta-button {
          position: relative;
          background: linear-gradient(135deg, #00D4FF 0%, #A78BFA 100%);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 8px;
          transition: all 0.2s ease;
          font-weight: 600;
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #00D4FF 0%, #A78BFA 100%);
          border-color: rgba(0, 212, 255, 0.6);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
          transform: translateY(-1px);
        }

        /* NUEVO: Contenedor del logo que permite overflow */
        .logo-container {
          position: relative;
          overflow: visible !important;
          z-index: 60;
        }

        /* NUEVO: El logo ahora es más grande y se posiciona absolutamente */
        .logo-oversized {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 61;
        }
      `}</style>

      {/* NAVBAR ULTRA DELGADO - SIN PADDING */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 nav-gradient overflow-visible">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
          
          {/* LOGO GIGANTE - Posicionado para no tapar el menú */}
          <div className="flex-shrink-0 logo-container" style={{ width: '300px', height: '64px' }}>
            <Link href="#inicio" className="group">
              <Image
                src="/Logo_HH.svg"
                alt="HUGO - Consultor Estratégico en IA"
                width={1200}  
                height={300} 
                priority
                className="h-28 w-auto object-contain logo-glow logo-oversized"
              />
            </Link>
          </div>

          {/* Navegación principal - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.submenu ? item.label : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="nav-item flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium group"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className={`transition-colors ${
                      item.color === 'cyan' ? 'group-hover:text-cyan-400' :
                      item.color === 'purple' ? 'group-hover:text-purple-400' :
                      'group-hover:text-yellow-400'
                    }`}>
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {item.description}
                    </span>
                  </div>
                  {item.submenu && (
                    <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 dropdown-menu p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                    <div className="space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              href="#contacto" 
              className="ml-4 px-4 py-2 text-white text-sm cta-button group flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Empieza Ahora</span>
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 px-3 text-gray-300 hover:bg-white/5 hover:text-cyan-400 rounded-md transition-colors duration-200"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.description}</span>
                    </div>
                  </Link>
                  
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-gray-700 pl-3">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1.5 px-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 px-3">
                <Link
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                 className="w-full px-4 py-2 text-white text-center cta-button flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Empieza Ahora</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}