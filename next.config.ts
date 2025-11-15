import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
         destination: 'https://jimlad-property-listing-backend-production.up.railway.app/:path*',
        // destination: 'http://localhost:3000/:path*',
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
        {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9002',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https' as const,
        hostname: 'images.nigeriapropertycentre.com',
        port: '',
        pathname: '/**',
      },
      {
         protocol: 'https' as const,
        hostname: 'jimlad-property-listing-backend-production.up.railway.app',
        port: '',
        pathname: '/**',
      },
       {
         protocol: 'http',
        hostname: 'jimlad-property-listing-backend-production.up.railway.app',
        port: '',
        pathname: '/**',
      },

       {
         protocol: 'https' as const,
        hostname: 'jimlad-property-listing-frontend.vercel.app/list-property',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
