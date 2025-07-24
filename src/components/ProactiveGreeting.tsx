'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ProactiveGreeting = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasBeenShown = sessionStorage.getItem('greetingShown');
        if (!hasBeenShown) {
            const showTimer = setTimeout(() => {
                setIsVisible(true);
                sessionStorage.setItem('greetingShown', 'true');
            }, 5000); // Aparece después de 5 segundos

            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 12000); // Se oculta después de 7 segundos visible

            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        }
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                    className="absolute -top-16 right-0 w-max bg-gray-800 border border-blue-500/50 rounded-lg px-4 py-2 shadow-xl"
                >
                    <p className="text-white text-sm font-medium">¡Hola! ¿Necesitas ayuda?</p>
                    <div className="absolute right-8 -bottom-2 w-4 h-4 bg-gray-800 transform rotate-45" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};