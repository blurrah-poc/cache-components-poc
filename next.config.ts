import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cacheComponents: true,
    ppr: true,
    useCache: true,
  }
};

export default nextConfig;
