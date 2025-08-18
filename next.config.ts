import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
        protocol: 'https',
        port: '',
        search: '',
      }, {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "thissidemayur.me",
        protocol: "https",
      }

    ]
  }
};

export default nextConfig;
