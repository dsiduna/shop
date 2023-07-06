/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: [],
    },
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
      };
    },
    
    output: {
      dir: 'out',
    },
  };
  
  module.exports = nextConfig;


