import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/company',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/other',
        destination: '/',
        permanent: true,
      },
      {
        source: '/other/',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;