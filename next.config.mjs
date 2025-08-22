/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vettio.com",
      },
    ],
  },
};

export default nextConfig;
