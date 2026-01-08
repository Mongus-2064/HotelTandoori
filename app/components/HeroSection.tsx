"use client"

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import hero from "@/images/hero.jpeg"
import { ArrowRight } from "lucide-react";


export default function HeroSection() {
return (
  <main className="">

  {/* IMAGE SECTION */}

  <section className="">
    <div className="relative min-h-screen w-full">
      <Image
      src={hero}
      alt="hero-image"
      fill
      className="absolute"
      />
    </div>

    {/* HERO TEXT */}

    <div className="absolute top-25 z-10 w-full flex justify-center ">


      <div className="flex justify-center items-center flex-col ">


 <p className="text-red-600 text-center bg-gray-800/30 border border-red-500  rounded-2xl py-1 px-4">Authentic Nepali Flavors</p>

    <p className="text-[75px] font-bold text-white">We are <span className="text-red-500">Ready</span> to</p>


    <div className="relative bg-red-500/80 flex justify-center items-center px-10 rounded-lg w-72 h-20">

      <p className="text-[75px] font-bold text-center text-white absolute "><Typewriter
    words={['Cook','Deliver','Serve']}
    delaySpeed={1200}
    cursor
    cursorStyle= "|"
    typeSpeed={200}
    deleteSpeed={200}
    loop={true}
    /></p>
    </div>

     <p className="text-center text-white text-[20px] pt-6">From Steaming momo to aromatic dal bhat - Experience the rich flavors<br/> of Nepal Delivered straight to your doorstep</p>

  {/* HERO SECTION BUTTONS */}

     <div className="flex  flex-row w-full gap-3 pt-4">
      <button className="bg-red-500 w-full rounded-md text-white hover:cursor-pointer hover:scale-105 transition-transform duration-300 flex py-4 justify-center gap-2">Order Now <ArrowRight/></button>
      
      <button className=" w-full rounded-md bg-gray-500/20 border border-white text-white hover:bg-white hover:text-black hover:cursor-pointer ">View Menu</button>
     </div>
    
      </div>

     
     

    </div>
  </section>

    {/* GRADIENT */}

      <div className="flex absolute inset-0 bg-linear-to-b from-black/50  to-black">
      </div>

       {/* HORIZONTAL LINE */}

      <div className="flex justify-center w-[90%]">
        <hr className="w-full border-t border-white" />
      </div>

    </main>
);
}
