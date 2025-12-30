import Footer from "@/app/components/Footer";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="pt-25 min-h-screen bg-black flex flex-col gap-8 justify-center items-center">
      <section className="bg-[linear-gradient(to_right,#111,#222,#333,#444)] px-6 w-72 lg:w-5xl shadow-md rounded-md shadow-white h-128 flex items-center justify-center ">

        {/* TEXT SECTION */}
        <section className="h-full flex flex-col w-full justify-center items-center">
          <p className="text-white text-[25px] lg:text-[50px] font-bold leading-tight text-nowrap">
            About <span className="bg-red-500 text-white px-2 rounded-md">Hotel</span> Tandoori
          </p>

          <p className="text-gray-300  lg:max-w-md pt-6 leading-relaxed">
            Hotel Tandoori is where authentic flavors meet modern hospitality.
            We serve rich, traditional recipes crafted with fresh ingredients,
            delivering a dining experience that feels both premium and homely.
          </p>

          <p className="text-gray-300 max-w-md pt-4 leading-relaxed">
            From sizzling tandoori specials to comforting classics, our mission
            is simple — great taste, warm service, and unforgettable moments.
          </p>

          {/* STATS / HIGHLIGHTS */}
          <div className="flex gap-6 pt-8">
            <div>
              <p className="text-red-500 text-2xl font-bold">10+</p>
              <p className="text-white text-sm">Years of Taste</p>
            </div>
            <div>
              <p className="text-red-500 text-2xl font-bold">5000+</p>
              <p className="text-white text-sm">Happy Guests</p>
            </div>
            <div>
              <p className="text-red-500 text-2xl font-bold">100%</p>
              <p className="text-white text-sm">Authentic Recipes</p>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </main>
  );
}
