/** @type {import('next').NextConfig} */
// Add image url : https://picsum.photos
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "http",
        hostname: "videodrive.fr",
        port: "",
      },
    ],
  },
};

export default nextConfig;
