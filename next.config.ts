import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/yhteydenotto',
        destination: '/tapahtumatiedot#ukk',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
