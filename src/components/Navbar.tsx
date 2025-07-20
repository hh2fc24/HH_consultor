// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Descubre',
      href: '#descubre',
      description: '¿Por qué IA?',
      color: 'cyan'
    },
    {
      label: 'Explora',
      href: '#servicios',
      description: 'Servicios y Metodología',
      color: 'purple',
      submenu: [
        { label: 'Método de Trabajo', href: '#servicios' },
        { label: 'Sobre Hugo', href: '#sobre-hugo' },
        { label: 'Superpoderes IA', href: '#superpoderes' }
      ]
    },
    {
      label: 'Experimenta',
      href: '#casos-de-exito',
      description: 'Casos de Estudio',
      color: 'cyan'
    },
    {
      label: 'Evoluciona',
      href: '#proceso',
      description: 'Proceso de Trabajo',
      color: 'purple'
    },
    {
      label: 'Inteligencia Aplicada',
      href: '/blog',
      description: 'Blog y Recursos',
      color: 'yellow'
    }
  ];

  return (
    <>
      <style jsx global>{`
        .logo-glow {
          filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.4));
          transition: filter 0.3s ease;
        }
        
        .logo-glow:hover {
          filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.6));
        }

        .nav-gradient {
          background: ${isScrolled 
            ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(31,41,55,0.95) 100%)'
            : 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(31,41,55,0.8) 100%)'
          };
          backdrop-filter: blur(20px);
          border-bottom: 1px solid ${isScrolled ? 'rgba(0,212,255,0.2)' : 'rgba(255,255,255,0.1)'};
        }

        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #00D4FF, #6B46C1);
          transition: width 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .dropdown-menu {
          background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(31,41,55,0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,212,255,0.2);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
      `}</style>

      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-2 transition-all duration-300 nav-gradient ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="relative max-w-7xl mx-auto flex items-center justify-between h-16">
          
          {/* Logo mejorado */}
          <div className="relative h-full w-[320px] flex-shrink-0">
            <Link href="/" className="absolute top-1/2 left-0 -translate-y-1/2 group">
              <Image
                src="/Logo_HH.svg"
                alt="HUGO - Consultor Estratégico en IA"
                width={320}
                height={96}
                priority
                className="w-auto h-[96px] object-contain logo-glow"
              />
            </Link>
          </div>

          {/* Navegación principal - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item,) => (
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
                  <div className="flex flex-col items-center">
                    <span className={`${
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
                    <ChevronDown className="w-3 h-3 ml-1 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 dropdown-menu p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA Button mejorado */}
            <Link 
              href="#contacto" 
              className="ml-6 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Empieza Ahora
            </Link>
          </div>

          {/* Menú móvil - Botón */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menú móvil - Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border-b border-white/10"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-500">{item.description}</span>
                    </div>
                  </Link>
                  
                  {/* Submenu móvil */}
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white text-center font-semibold"
              >
                Empieza Ahora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

