import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/company',
        destination: '/',
        permanent: true, // 301リダイレクト
      },
    ]
  },
}

export default nextConfig;