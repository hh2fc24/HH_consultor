// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // ✅ CORRECCIÓN: Especificando HTTPS
        hostname: 'googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;