import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CanvasSpotlight from "@/components/CanvasSpotlight";
import FloatingLogo from "@/components/FloatingLogo";
import FloatingChatWrapper from "@/components/FloatingChatWidget";
import FaviconInjector from "@/components/FaviconInjector"; // ⚡ inyecta favicon vía JS

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
        className={`${inter.variable} ${poppins.variable} ${jetBrains_Mono.variable} antialiased text-white bg-black`}
      >
        <FaviconInjector /> {/* 💥 Forzamos el favicon sin depender del head */}
        <FloatingLogo />
        <FloatingChatWrapper />

        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

        <CanvasSpotlight />
      </body>
    </html>
  );
}