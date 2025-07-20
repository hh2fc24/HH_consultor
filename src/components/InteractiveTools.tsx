'use client';

import { useState } from 'react';
import InteractiveModal from './InteractiveModal';
import ROICalculator from './tools/ROICalculator'; // Componente de la calculadora
import AIMaturityTest from './tools/AIMaturityTest'; // Componente del test

const InteractiveTools = () => {
  const [modal, setModal] = useState<'roi' | 'maturity' | null>(null);

  return (
    <>
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Herramientas Interactivas</h2>
          <p className="text-gray-400">Evalúa el potencial de IA en tu negocio</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta Calculadora ROI */}
          <div onClick={() => setModal('roi')} className="cursor-pointer p-6 bg-gray-900 border border-transparent hover:border-cyan-400 rounded-xl transition-all">
             {/* Tu diseño de tarjeta aquí */}
             <h3 className="text-white font-bold">Calculadora ROI IA</h3>
             <p className="text-gray-400">Estima el retorno de inversión...</p>
          </div>

          {/* Tarjeta Test de Madurez */}
          <div onClick={() => setModal('maturity')} className="cursor-pointer p-6 bg-gray-900 border border-transparent hover:border-purple-400 rounded-xl transition-all">
            {/* Tu diseño de tarjeta aquí */}
            <h3 className="text-white font-bold">Test de Madurez IA</h3>
            <p className="text-gray-400">Evalúa qué tan preparada está tu empresa...</p>
          </div>
        </div>
        {/* ... tu sección de Demostración en vivo ... */}
      </section>

      {/* Modales */}
      <InteractiveModal isOpen={modal === 'roi'} onClose={() => setModal(null)}>
        <ROICalculator />
      </InteractiveModal>

      <InteractiveModal isOpen={modal === 'maturity'} onClose={() => setModal(null)}>
        <AIMaturityTest />
      </InteractiveModal>
    </>
  );
};

export default InteractiveTools;