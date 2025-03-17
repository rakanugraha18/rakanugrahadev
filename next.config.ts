/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/groq/:path*",
        destination: "http://localhost:5000/api/groq/:path*",
      },
    ];
  },
};

export default nextConfig;
