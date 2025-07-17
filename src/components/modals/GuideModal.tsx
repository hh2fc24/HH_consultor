'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GuideModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', job: '', email: '', accepted: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!form.name || !form.job || !form.email.includes('@')) return;

    // 👉 Aquí iría lógica para guardar en Supabase
    // await supabase.from('leads').insert([{ ...form }]);

    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="max-w-xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-white shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Descarga la Guía Gratuita
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">&times;</button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="job"
                  placeholder="Tu profesión o cargo"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={form.job}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={form.email}
                  onChange={handleChange}
                />
                <label className="flex items-start gap-3 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    name="accepted"
                    checked={form.accepted}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  Acepto recibir información estratégica semanal sobre IA aplicada a negocios.
                </label>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 font-semibold text-white transition-all"
                >
                  Acceder a la Guía
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">¡Gracias por registrarte!</h3>
                <p className="mb-6 text-gray-300">Aquí tienes tu acceso directo a la guía:</p>
                <a
                  href="/guia-ia-pymes.pdf"
                  download
                  className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 font-medium"
                >
                  Descargar Guía
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
