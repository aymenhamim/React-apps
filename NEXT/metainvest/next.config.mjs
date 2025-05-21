/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["res.cloudinary.com"] },
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: `http://127.0.0.1:8000/:path*`,
      },
    ];
  },
};

export default nextConfig;
