"use client"

import React, { addTransitionType } from 'react'
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useorderstore } from '@/app/store/addorder'
import { toast } from 'react-toastify'
import IFood from '@/app/Types/food'

export default function page() {

  const addorder= useorderstore((state)=> state.addtoorder);

    const handleaddorder = (food:IFood)=>{
      addorder({
        id: food.id,
        name: food.name,
        quantity:food.qty,
        pic:food.pic,
        category:food.category,
        price: food.price,

      })

      toast.success("Added to cart Successfully");
    }


  const menu = [
        {
            name: "Khana set", price:125, category: "MainCourse",
            pic: "https://www.beyultreks.com/wp-content/uploads/2017/06/dal-bhat-Nepalese-food.jpg", id: "1",qty:1
        },
        { name: "Chicken:momo", price: 150, category: "savory snack", pic: "https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg?impolicy=Medium_Widthonly&w=350&h=263", id: "2" ,qty:1},
        { name: "Chowmein", price: 110, category: "savory snack", pic: "https://i.ytimg.com/vi/gbygXUDbf2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCbRvjuTJjSuiR5OSYJuE9AKfsDg", id: "3",qty:1 },
         {
            name: "Khana set", price: 125, category: "MainCourse",
            pic: "https://www.beyultreks.com/wp-content/uploads/2017/06/dal-bhat-Nepalese-food.jpg", id: "4",qty:1
        },
        { name: "Chicken:momo", price: 150, category: "savory snack", pic: "https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg?impolicy=Medium_Widthonly&w=350&h=263", id: "5",qty:1 },
        { name: "Chowmein", price: 110, category: "savory snack", pic: "https://i.ytimg.com/vi/gbygXUDbf2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCbRvjuTJjSuiR5OSYJuE9AKfsDg", id: "6",qty:1 }
    ]

   

   


  return (
    <main className='bg-black min-h-screen pt-20 w-full flex p-10'>
      <motion.section
        className='w-full pt-10'
      >

        <p className='text-white md:text-[25px] lg:text-[40px] font-bold text-center pb-10'>Tandoori Hotel Menu</p>

        <section className='w-full  flex  gap-2 '>

        {/* SEARCH BOX FOR FOOD */}

          <div className='relative flex w-full items-center gap-2 flex-col lg:flex-row'>
            <p className='text-gray-600 absolute px-2'><Typewriter
            words={['Search your favorite food','Find your favorite dish','What are you craving ? ','Type your food name here momo,pizza']}
            cursor
            cursorStyle= "|"
            loop={0}
            delaySpeed={1200}
            typeSpeed={100}
            deleteSpeed={100}
            /></p>


<div className='w-full flex flex-col lg:flex-row justify-center '>
   <input className='bg-gray-200 w-full py-2 rounded-md px-2 shadow-sm shadow-white' />
          </div>

        {/* SEARCH BUTTON */}

          <button className='bg-red-500 flex hover:scale-102 transition-transform duration 300 hover:cursor-pointer justify-center gap-2 text-white p-2 rounded-md w-full lg:w-60'><Search/>Search</button>
</div>
         
        </section>
        <section>


    {/* FOOD CARDS */}

<motion.section
                className='flex flex-col items-center justify-center w-full '
                initial={{opacity:0 , y:40}}
                whileInView={{opacity:1 , y:0}}
                viewport={{once:true}}
                transition={{duration:0.6 , delay:0.1

                    
                }}
                >
                     
          

            <section className='  grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  gap-8 w-full lg:max-w-screen justiy-center  pt-10  shadow-lg'>
                {menu.map((food) => (
                    <div
                        className='  bg-black w-full lg:w-96  outline shadow-gray-600 shadow-md  flex flex-col   h-100 rounded-lg  hover:scale-105 duration-300 transition-transform '
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
                            <p hidden className='text-gray-400'>{food.qty}</p>
                        </div>
                        <div className='bg-black w-full flex justify-center p-2 rounded-lg'>
                        <button
                     onClick={()=> handleaddorder(food)}
                           className=' bg-red-700 text-center p-2 rounded-md w-full transition-transform duration-300 text-white hover:scale-105 hover:w-[90%]'>Order Now</button>
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
