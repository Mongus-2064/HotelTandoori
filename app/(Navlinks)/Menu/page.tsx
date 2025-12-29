"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {

  const menu = [
        {
            name: "Khana set", price: "Npr.125", category: "MainCourse",
            pic: "https://www.beyultreks.com/wp-content/uploads/2017/06/dal-bhat-Nepalese-food.jpg", id: "1"
        },
        { name: "Chicken:momo", price: "Npr.150", category: "savory snack", pic: "https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg?impolicy=Medium_Widthonly&w=350&h=263", id: "2" },
        { name: "Chowmein", price: "Npr.110", category: "savory snack", pic: "https://i.ytimg.com/vi/gbygXUDbf2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCbRvjuTJjSuiR5OSYJuE9AKfsDg", id: "3" },
         {
            name: "Khana set", price: "Npr.125", category: "MainCourse",
            pic: "https://www.beyultreks.com/wp-content/uploads/2017/06/dal-bhat-Nepalese-food.jpg", id: "4"
        },
        { name: "Chicken:momo", price: "Npr.150", category: "savory snack", pic: "https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg?impolicy=Medium_Widthonly&w=350&h=263", id: "5" },
        { name: "Chowmein", price: "Npr.110", category: "savory snack", pic: "https://i.ytimg.com/vi/gbygXUDbf2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCbRvjuTJjSuiR5OSYJuE9AKfsDg", id: "6" }
    ]



  return (
    <main className='bg-black min-h-screen pt-20 w-full'>
      <motion.section
        className='w-full pt-10'
      >

        <p className='text-white text-[40px] font-bold text-center pb-10'>Tandoori Hotel Menu</p>

        <section className='w-full flex px-10 gap-2 '>


          <div className='relative flex w-full items-center'>
            <p className='text-gray-800 absolute px-2'><Typewriter
            words={['Search your favorite food','Find your favorite dish','What are you craving ? ','Type your food name here momo,pizza']}
            cursor
            cursorStyle= "|"
            loop={0}
            delaySpeed={1200}
            typeSpeed={100}
            deleteSpeed={100}
            /></p>



            <input className='bg-gray-200 w-full py-2 rounded-md px-2 shadow-sm shadow-white' />
          </div>


          <button className='bg-red-500 flex hover:scale-102 transition-transform duration 300 hover:cursor-pointer justify-center gap-2 text-white p-2 rounded-md w-60'><Search/>Search</button>
        </section>
        <section>
<motion.section
                className='flex flex-col items-center'
                initial={{opacity:0 , y:40}}
                whileInView={{opacity:1 , y:0}}
                viewport={{once:true}}
                transition={{duration:0.6 , delay:0.1

                    
                }}
                >
                     
          

            <section className='  grid grid-cols-4  gap-8  pt-10 w-[90%] shadow-lg'>
                {menu.map((food) => (
                    <div
                        className='  bg-black outline shadow-gray-600 shadow-md  flex flex-col w-full h-100 rounded-lg  hover:scale-105 duration-300 transition-transform '
                        key={food.id}>


                        {/* FOOD IMAGES */}

                        <div className='h-[70%] relative overflow-hidden '>
                            <Image
                                src={food.pic}
                                alt='food-pic'
                                fill
                                className='object-cover rounded-lg hover:scale-125 transition-transform duration-300 '
                            />
                        </div>

                        {/* FOOD ITEMS DESCRIPTIONS */}

                         <div className='bg-black h-[30%] w-full p-2  '>
                            <p className='text-white font-bold text-[22px]'>{food.name}</p>
                            <p className='text-gray-400'>{food.price}</p>
                            <p className='text-gray-400'>{food.category}</p>
                            
                        </div>
                        <div className='bg-black w-full flex justify-center p-2 rounded-lg'>
                        <Link href="/menu" className=' bg-red-700 text-center p-2 rounded-md w-full transition-transform duration-300 text-white hover:scale-105 hover:w-[90%]'>Order Now</Link>
                        </div>
                        
                       </div>
                       
                ))}
                
            </section>
  
                </motion.section>
        </section>
      </motion.section>
    </main>
  )
}
