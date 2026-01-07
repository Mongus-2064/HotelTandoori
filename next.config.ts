import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "images.stockcake.com"
    },
    { hostname: "img.freepik.com" },

    { hostname: "media.istockphoto.com" },
    { hostname: "i.ytimg.com" },
    {hostname : "static.india.com"},
    {hostname: "eastbaygaslines.com"},
    {hostname: "www.beyultreks.com"},
    {hostname: "plus.unsplash.com"},
    {hostname: "encrypted-tbn0.gstatic.com"}
    ]
  }
};

export default nextConfig;
