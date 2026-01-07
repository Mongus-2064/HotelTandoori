"use client"

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { BookPlus, MoveUpRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion"
import heroimage from "@/images/herosection.jpg"
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Navigation , Pagination} from "swiper/modules"


export default function HeroSection() {

  const images = [ 
    {url:"https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.jpg?s=612x612&w=0&k=20&c=cYxRAfU7OdjJCK4M7dbH4YUIk7SGqETlDvONBEOATuw=" ,id:1 },
    {url:"https://img.freepik.com/free-photo/fried-chicken-breast-cheese-tomato-french-fries-ketchup-green-salad-side-view-jpg_141793-1782.jpg?semt=ais_hybrid&w=740&q=80",id:2},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RnRhiGJxmEcWUGx7zh9SVP888-AO-eC97Q&s",id:3}
  
  ] 


  return (
    <main className="min-h-screen bg-black pt-20 ">

      <section>
        <div className="w-full  flex flex-col items-center  pt-6">


          <p className="text-white flex items-center justify-center text-[60px] text-center w-full font-bold">
            <span className="text-red-500 text-[60px] font-bold"></span>
            <span className="mr-4">We</span>

            <span className="text-red-500 inline-block w-55 text-left">
              <Typewriter
                words={['Cook', 'Deliver', 'Serve']}
                delaySpeed={1200}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={200}
                loop={0}
              />
            </span>

          </p>

         
        </div>
      </section>
      <section>
        <div>
          <Swiper
            modules={[Navigation , Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable:true}}
            autoplay={true}
            className=" flex items-center justify-center bg-red-500 p-5 max-w-4xl mx-auto"
        >
          {images.map((img)=>(
          <SwiperSlide 
            
          key={img.id}>
            <div className="relative w-full h-48">
<Image
            src={img.url}
            alt="hello"
            fill
            className="object-cover w-96 bg-purple-500 p-2"
            />
            </div>
            
          </SwiperSlide>

          ))}
        </Swiper>

          
        </div>
      </section>



      <div className="  flex justify-center pt-12">
        <hr className="text-white  w-[90%] text-center" />
      </div>



    </main>
  );
}
