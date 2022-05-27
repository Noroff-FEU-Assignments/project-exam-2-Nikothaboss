/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.trvl-media.com",
      "a.cdn-hotels.com",
      "www.visitbergen.com",
      "gifsoutloud.com",
      "toppng.com",
    ],
  },
};

module.exports = nextConfig;
