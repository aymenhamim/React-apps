/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trmbzwgavmniitlcfjxm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins-images/**",
        search: "",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
