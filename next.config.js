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
    ignoreDuringBuilds: true, // útil en Vercel si no querés que falle por lint
  },
  typescript: {
    ignoreBuildErrors: false, // te avisa si hay errores TS, bueno mantenerlo
  },
  // 👇 se eliminó 'experimental' porque ya no aplica en Next 15.3.4
};

module.exports = nextConfig;