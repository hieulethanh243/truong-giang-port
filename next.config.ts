import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config image can import hót name images.unsplash.com
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.prod.website-files.com",
      "source.unsplash.com",
    ],
  },
};

export default nextConfig;
