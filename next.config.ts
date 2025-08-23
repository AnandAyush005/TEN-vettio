import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vettio.com",
        pathname: "/assets/Images/landingAssetsR/**",
      },
    ],
  },
};

export default nextConfig;
