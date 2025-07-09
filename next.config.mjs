/** @type {import('next').NextConfig} */
const nextConfig = {allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.50.210:3000" // Add your LAN IP here
  ],images: {
    domains: ["avatars.githubusercontent.com"],
  },};

export default nextConfig;
