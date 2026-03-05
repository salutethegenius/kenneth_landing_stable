import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/pages/my_philosophy", permanent: false },
    ];
  },
};

export default nextConfig;
