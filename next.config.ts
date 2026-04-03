import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🔥 Image fix (external API images allow)
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "187.124.157.146",
        port: "5001",
        pathname: "/uploads/**",
      },
    ],
  },

  // 🔥 React routes handle (your existing logic)
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/", // sab routes React app ko bhejega
      },
    ];
  },
};

export default nextConfig;