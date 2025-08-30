import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // option 1
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com", // option 2
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com", // option 3
      },
      {
        protocol: "https",
        hostname: "vettio.com", // your site assets
        pathname: "/assets/Images/landingAssetsR/**",
      },
    ],
  },
};

export default nextConfig;
