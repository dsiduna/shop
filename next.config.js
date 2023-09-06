/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverActions: true,
    },
    images: {
      domains: [],
      unoptimized: true 
    },
    output: 'export',
  };
  
  module.exports = nextConfig;


