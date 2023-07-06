/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: [],
      unoptimized: true 
    },
    output: 'export',
  };
  
  module.exports = nextConfig;


