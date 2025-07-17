// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignora errores de ESLint en Vercel
  },
};

export default nextConfig;