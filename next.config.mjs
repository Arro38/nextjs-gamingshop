/** @type {import('next').NextConfig} */
// Add image url : https://picsum.photos
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "videodrive.fr",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.jeuxvideo.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
