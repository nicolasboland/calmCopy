/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    version: process.env.BUILD_ID,
  },
  transpilePackages: ['three'],
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'calmessimple.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const fs = require('fs');
      const path = require('path');
      const cacheDir = path.resolve('.next/cache');
      if (fs.existsSync(cacheDir)) {
        fs.rmSync(cacheDir, { recursive: true, force: true });
      }
    }
    return config;
  },
}

module.exports = nextConfig
