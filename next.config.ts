import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
