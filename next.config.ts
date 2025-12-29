import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "images.stockcake.com"
    },
    { hostname: "img.freepik.com" },

    { hostname: "www.beyultreks.com" },
    { hostname: "i.ytimg.com" },
    {hostname : "static.india.com"}
    ]
  }
};

export default nextConfig;
