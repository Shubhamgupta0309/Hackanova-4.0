/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "assets.devfolio.co",
        },
        {
          protocol: "https",
          hostname: "v0.blob.com",
        },
        {
          protocol: "https",
          hostname: "sjc.microlink.io",
        },
      ],
    },
  }
  
  module.exports = nextConfig
  
  