"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"

export default function Recomendedfood() {

    const recommendedfood = [
        {
            name: "Khana set", price: "Npr.125", category: "MainCourse",
            pic: "https://www.beyultreks.com/wp-content/uploads/2017/06/dal-bhat-Nepalese-food.jpg", id: "1"
        },
        { name: "Chicken:momo", price: "Npr.150", category: "savory snack", pic: "https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg?impolicy=Medium_Widthonly&w=350&h=263", id: "2" },
        { name: "Chowmein", price: "Npr.110", category: "savory snack", pic: "https://i.ytimg.com/vi/gbygXUDbf2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCbRvjuTJjSuiR5OSYJuE9AKfsDg", id: "3" }
    ]

    return (
        <main className=' flex justify-center  items-center w-full flex-col bg-black min-h-screen '>

                <motion.section
                className='flex flex-col items-center'
                initial={{opacity:0 , y:40}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:0.6 , delay:0.1

                    
                }}
                >
                     
            <section>
                <p className='text-white text-center text-[28px] pt-5 lg:text-[50px] font-bold pb-6'>Recommended <span className='text-red-500'>Cuisines</span></p>
            </section>

            <section className=' flex flex-col lg:flex-row items-center justify-between gap-8  pt-10 w-full shadow-lg'>
                {recommendedfood.map((food) => (
                    <div
                        className='  bg-black outline shadow-gray-600 shadow-md  flex flex-col w-[95%]  lg:w-100 h-100 rounded-lg  hover:scale-105 duration-300 transition-transform '
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
                        <Link href="/menu" className=' bg-red-700 text-center p-2 rounded-md w-full transition-transform duration-300 text-white hover:scale-105 '>Order Now</Link>
                        </div>
                        
                       </div>
                       
                ))}
                
            </section>
  
                </motion.section>
           

        </main>
    )
}
