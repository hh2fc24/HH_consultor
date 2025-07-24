import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CanvasSpotlight from "@/components/CanvasSpotlight";
import FloatingLogo from "@/components/FloatingLogo";
import FloatingChatWidget from "@/components/FloatingChatWidget"; // <-- NUEVO: Widget de chat

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

export const metadata: Metadata = {
  title: "Hugo Hormazábal | IA Personalizada con Propósito",
  description:
    "Consultoría estratégica premium en inteligencia artificial con enfoque humano y resultados reales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetBrains_Mono.variable} antialiased text-white bg-black`}
      >
        <FloatingLogo />
        <FloatingChatWidget /> {/* <-- NUEVO: Chat flotante con glassmorphism */}
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
        
        <CanvasSpotlight />
      </body>
    </html>
  );
}
