import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Add your existing config options here */
  images: {
    domains: ['mdbcdn.b-cdn.net'], // Add your allowed hostname here
  },
};

export default nextConfig;
