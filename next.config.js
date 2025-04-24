/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['vercel.app', 'off-the-dock-charters.vercel.app'],
  },
  output: 'standalone',
}

module.exports = nextConfig
