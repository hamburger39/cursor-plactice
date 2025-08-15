import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.BACKEND_ORIGIN || "http://localhost:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;
