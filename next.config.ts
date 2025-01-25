import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "avatar.iran.liara.run", // Microlink Image Preview
    ],
  },
};

export default nextConfig;
