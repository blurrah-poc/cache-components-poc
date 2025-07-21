import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: true,
    cacheComponents: true,
    useCache: true,
  }
};

export default nextConfig;
