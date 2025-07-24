/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    // ✅ Necesario para compilar correctamente con la SDK oficial de OpenAI en Next.js 15+
    serverComponentsExternalPackages: ['openai'],
  },
};

module.exports = nextConfig;