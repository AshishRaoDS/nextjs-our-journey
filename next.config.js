/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.giphy.com'],
    loader: 'imgix',
    path: 'https://media.giphy.com/media/3cKaKpl2OzqpfSPdUF/giphy.gif',
  },
}

module.exports = nextConfig
