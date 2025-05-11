const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: [],
    },
    images: {
      domains: ['localhost'],
    },
  };
  
  module.exports = nextConfig;