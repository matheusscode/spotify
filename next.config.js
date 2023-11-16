/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/99546472?v=4",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname:
          "/wikipedia/pt/0/02/Camisa10_-Joga_Bola_At%C3%A9_na_Chuva.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
