"use client";

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import hero from "@/images/hero.jpeg";
import { ArrowRight, StarIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <main className="relative min-h-screen lg:pt-0 pt-14 w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={hero}
        alt="hero-image"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black"></div>

      {/* Hero Content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-20">
        <div className="flex max-w-4xl flex-col items-center text-center">

          {/* Badge */}
          <p className="mb-4 rounded-2xl border border-red-500 bg-gray-800/30 px-4 py-1 text-sm text-red-500">
            Authentic Nepali Flavors
          </p>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-7xl">
            We are <span className="text-red-500">Ready</span> to
          </h1>

          {/* Typewriter Box */}
          <div className="relative mt-4 flex h-16 w-64 items-center justify-center rounded-lg bg-red-500/80 sm:h-20 sm:w-72">
            <p className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              <Typewriter
                words={["Cook", "Deliver", "Serve"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={120}
                delaySpeed={1200}
              />
            </p>
          </div>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-sm text-gray-300 sm:text-base lg:text-lg">
            From steaming momo to aromatic dal bhat — experience the rich
            flavors of Nepal delivered straight to your doorstep.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <button className="flex items-center justify-center gap-2 rounded-md bg-red-500 px-6 py-3 text-white transition hover:scale-105">
              Order Now <ArrowRight />
            </button>

            <button className="rounded-md border border-white bg-gray-500/20 px-6 py-3 text-white transition hover:bg-white hover:text-black">
              View Menu
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 text-white md:pb-0 lg:pb-10">
            
            <div className="text-center">
              <p className="text-2xl font-bold">30+</p>
              <p className="text-sm text-gray-300">Authentic Dishes</p>
            </div>

            <div className="h-10 w-px bg-white lg:inline-block hidden "></div>
            <hr className="h-10 w-32 lg:hidden inline-block border-white"/>

            <div className="text-center">
              <p className="text-2xl font-bold">15min</p>
              <p className="text-sm text-gray-300">Fast Delivery</p>
            </div>

             <div className="h-10 w-px bg-white lg:inline-block hidden "></div>
            <hr className="h-10 w-32 lg:hidden inline-block border-white"/>

            <div className="text-center lg:pb-0 pb-20">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold">
                4.9 <StarIcon className="text-yellow-500" />
              </div>
              <p className="text-sm text-gray-300">Customer Rating</p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="absolute bottom-6 left-1/2 w-[90%]  -translate-x-1/2">
        <hr className="border-white/30" />
      </div>

    </main>
  );
}
