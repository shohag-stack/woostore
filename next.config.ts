import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [ {
            protocol: 'http', // or 'https'
            hostname: 'woostore.local', // or your specific hostname, e.g., 'your-backend-server.com'
            port: '', // Only if applicable, e.g., for localhost with a specific port
            pathname: '/wp-content/uploads/**', // Adjust this to match your image paths
    } ]
  }
};

export default nextConfig;
