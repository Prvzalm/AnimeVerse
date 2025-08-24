import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 's4.anilist.co' },
      { protocol: 'https', hostname: 'cdn.myanimelist.net' },
      { protocol: 'https', hostname: 'res.cloudinary.com' }
    ]
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  }
}

export default withContentlayer(nextConfig)
