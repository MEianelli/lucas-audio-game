import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hiinnoepvfmkkdioyanc.supabase.co",
      },
    ],
  },
  turbopack: {},
};

export default nextConfig;
