"use client"
import { useorderstore } from '@/app/store/addorder'
import IFood from '@/app/Types/food'
import Image from 'next/image'
import React from 'react'

export default function Cart() {

  const items = useorderstore((state) => state.orders)
  const increaseqty = useorderstore((state)=> state.increaseqty)
  const decreaseqty = useorderstore((state)=> state.decreaseqty)

    




  return (
    <main className='pt-20 min-h-screen w-full '>
      <section className='w-full'>
        <p className='font-bold text-center text-[40px]'>Your Orders</p>
        <div>
          {
            items.map((item) => (
              <div
                className='flex items-center gap-2'
                key={item.id}
              >
                <div className='flex items-center rounded-md justify-between bg-gray-200 w-[90%] px-2 mx-auto gap-2'>
                
                {/* LEFT CONTAINER OF CART */}
                
                 <div className='flex items-center gap-2'>
                   <div className='h-20 w-16  relative'>
                    <Image src={item.pic}
                      alt='food-pic'
                      fill
                      className='object-contain rounded-full'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-gray-500 text-xl font-bold'>{item.name}</p>
                  <p className='text-gray-500 text-sm'> Quantity:{item.quantity}</p>
                  </div>
                 </div>

                 {/* RIGHT CONTAINER OF CART */}

                 <div className='flex flex-col items-center gap-2'>
                  <p>Npr:{item.price * item.quantity}</p>
                  <div className='flex items-center gap-3 flex-row'>
                     <button 
                     onClick={()=> increaseqty(item.id)}
                     className='bg-gray-500 text-black rounded-full p-2'>+</button>
                  <p>{item.quantity}</p>
                  <button 
                  onClick={()=> decreaseqty(item.id)}
                  className='bg-gray-500 text-black rounded-full p-2'>-</button>

                    </div>

                 
                 </div>

                </div>
              </div>


            ))
          }
        </div>
      </section>
    </main>
  )
}
