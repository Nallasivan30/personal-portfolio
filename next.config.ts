/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org", // MATLAB, Verilog, Arduino, Raspberry Pi
      },
      {
        protocol: "https",
        hostname: "www.docker.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // Circuit, PCB, IoT icons
      },
      {
        protocol: "https",
        hostname: "iconscout.com", // Embedded Systems icon
      },
      {
        protocol: "https",
        hostname: "logos-world.net", // MATLAB logo
      },
      {
        protocol: "https",
        hostname: "www.logic-fruit.com", // VHDL vs Verilog infographic
      },
      {
        protocol: "https",
        hostname: "www.vecteezy.com", // PCB / Circuit icons
      },
      {
        protocol: "https",
        hostname: "www.iconfinder.com", // Signal Processing icon
      },
      {
        protocol: "https",
        hostname: "www.flaticon.com", // 👈 Added this
      },
    ],
  },
};

export default nextConfig;
