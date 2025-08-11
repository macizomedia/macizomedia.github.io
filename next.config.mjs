/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export", // Re-enabled for production builds
  distDir: "out", // Re-enabled for production builds  
  images: {
    unoptimized: true,
  },
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
  },
};

export default nextConfig;
