// src/components/Footer.tsx
import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Altius Ignite</h3>
            <p className="text-gray-400 mb-6">
              Democratizando el acceso a la inteligencia artificial para empresas y profesionales
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Consultoría Estratégica</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Implementación de IA</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Capacitación Corporativa</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Desarrollo Personalizado</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Talleres Gratuitos</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Guías Prácticas</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Podcast</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">hugo@altiusignite.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-gray-400" />
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Conectar en LinkedIn</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Suscríbete al Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="bg-gray-800/50 border border-white/10 rounded-l-lg px-4 py-2 text-white w-full focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Altius Ignite. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">Términos</Link>
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacidad</Link>
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;