// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <style jsx global>{`
        .logo-glow {
          filter: drop-shadow(0 0 3px rgba(101, 217, 252, 0.5));
          -webkit-filter: drop-shadow(0 0 3px rgba(101, 217, 252, 0.5));
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-1 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="relative max-w-7xl mx-auto flex items-center justify-between h-16">
          {/* Logo centrado y sobresaliente */}
          <div className="relative h-full w-[360px] flex-shrink-0">
            <Link href="/" className="absolute top-1/2 left-0 -translate-y-1/2">
              <Image
                src="/Logo_HH.svg"
                alt="HUGO Logo"
                width={360}
                height={108}
                priority
                className="w-auto h-[108px] object-contain logo-glow"
              />
            </Link>
          </div>

          {/* Links de navegación */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#servicios" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium group"
            >
              Servicios
              <div className="h-0.5 bg-transparent group-hover:bg-cyan-500 mt-1 w-5 transition-all duration-300"></div>
            </Link>
            <Link 
              href="#proceso" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium group"
            >
              Proceso
              <div className="h-0.5 bg-transparent group-hover:bg-cyan-500 mt-1 w-5 transition-all duration-300"></div>
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium group"
            >
              Inteligencia Aplicada
              <div className="h-0.5 bg-transparent group-hover:bg-purple-500 mt-1 w-5 transition-all duration-300"></div>
            </Link>
            <Link 
              href="#superpoderes" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium group"
            >
              Superpoderes IA
              <div className="h-0.5 bg-transparent group-hover:bg-purple-500 mt-1 w-5 transition-all duration-300"></div>
            </Link>
            <Link 
              href="#contacto" 
              className="ml-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
            >
              Contacto
            </Link>
          </div>

          {/* Menú móvil */}
          <button 
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}