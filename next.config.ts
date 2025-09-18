import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true, // safe
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ds.rokomari.store",
        port: "",
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
