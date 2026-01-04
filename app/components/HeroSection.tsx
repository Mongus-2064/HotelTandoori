"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { BookPlus, MoveUpRight, ShoppingCart } from "lucide-react";
import {motion} from "framer-motion"


export default function HeroSection() {
  return (
    <main className="min-h-screen bg-black ">

    

      <motion.section
      initial= {{opacity: 0 , y:40}}

      whileInView={{opacity:1 , y:0}}

      transition={{duration: 1 , delay:0.1}}
      className="flex flex-col-reverse lg:flex-row gap-4 pt-25 px-10">


        <section className=" flex flex-col gap-8 w-full">

          {/* TYPEWRITER EFFECT */}

          <p className="lg:text-start w-full text-center text-white text-[24px] lg:text-[50px] font-bold">We are ready to <span className="text-red-500">
            <Typewriter
              words={['Cook', 'Server', 'Deliver']}
              cursor
              cursorStyle="|"
              loop={0}
              delaySpeed={1200}
              typeSpeed={100}
              deleteSpeed={100}
            />
          </span>

          </p>
          <p className="text-gray-400 text-wrap lg:text-nowrap">“Thoughtfully cooked with love, quality, and the finest ingredients.<span className="hidden lg:inline"><br /></span>Delivered hot,fresh, and ready to make your day better.”</p>


          {/* BUTTONS */}

          <div className=" flex flex-col lg:flex-row pt-5 lg:pt-10 w-full  lg:w-[90%] gap-4">
            <Link className=" w-full flex justify-center items-center text-white bg-red-600 border border-red-600 py-2 rounded-md hover:scale-105 transition-transform duration-300 gap-2 " href="/book">Book a Reservation<span><BookPlus size={19} /></span></Link>

            <Link className=" w-full flex gap-2 items-center justify-center text-black border border-white bg-white  hover:bg-transparent hover:text-white hover:scale-105 transition-transform duration-300 py-2 rounded-md" href="/order">Order Now<span><ShoppingCart size={19} /></span></Link>
          </div>

        </section>



        {/* HERO SECTION IMAGE */}

        <section className=" lg:w-[80%] relative rounded-lg shadow-gray-700/40 shadow-lg h-48 lg:h-96">
          <Image
            src={"https://eastbaygaslines.com/wp-content/uploads/2017/05/AdobeStock_90208011.jpeg"}
            alt="chef-pic"
            fill
            unoptimized
            className=" object-cover rounded-lg object-top-left"
          />
        </section>
      </motion.section>

      <div className="  flex justify-center pt-12">
        <hr className="text-white  w-[90%] text-center" />
      </div>



    </main>
  );
}
