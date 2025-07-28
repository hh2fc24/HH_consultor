import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import CanvasSpotlight from "@/components/CanvasSpotlight";
import FloatingLogo from "@/components/FloatingLogo";
import FloatingChatWrapper from "@/components/FloatingChatWidget";
import FaviconInjector from "@/components/FaviconInjector";
import CoursePopupWrapper from "@/components/CoursePopupWrapper"; // ✅ Nuevo wrapper

// ✅ IMPORTAR COMPONENTES QUE FALTAN
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hugo Hormazábal | IA Personalizada con Propósito</title>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetBrains_Mono.variable} antialiased text-white bg-[#171c39]`}
      >
        {/* 🔥 ELEMENTOS GLOBALES */}
        <FaviconInjector />
        <CoursePopupWrapper /> {/* ✅ Controlado por ruta */}
        <FloatingLogo />
        <FloatingChatWrapper />

        {/* ✅ NAVBAR */}
        <Navbar />

        {/* ✅ CONTENIDO */}
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>

        {/* ✅ FOOTER */}
        <Footer />

        {/* ✅ FONDO INTERACTIVO */}
        <CanvasSpotlight />
      </body>
    </html>
  );
}