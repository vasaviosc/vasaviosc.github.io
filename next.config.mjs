/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/vosc",

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
