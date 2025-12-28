import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "images.stockcake.com"
    },
    { hostname: "www.beyultreks.com" },

    { hostname: "static.india.com" },
    { hostname: "i.ytimg.com" }
    ]
  }
};

export default nextConfig;
