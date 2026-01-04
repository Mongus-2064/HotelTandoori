"use client"
import { useorderstore } from '@/app/store/addorder'
import IFood from '@/app/Types/food'
import Image from 'next/image'
import React, { useState } from 'react'
import Esewaerror from '@/dialog/Esewaerror'
import Orderplaced from '@/dialog/Orderplaced'
export default function Cart() {

  const items = useorderstore((state) => state.orders)
  const increaseqty = useorderstore((state)=> state.increaseqty)
  const decreaseqty = useorderstore((state)=> state.decreaseqty);

  const totalprice = useorderstore((state)=>
  state.orders.reduce((sum , item)=> sum+item.price*item.quantity ,0)
  )

  const [esewa , setEsewa] = useState<boolean>(false);
  const [successfull , setSuccessfull] = useState<boolean>(false)


    




  return (
    <main className='pt-20 min-h-screen w-full flex px-4 gap-8 lg:px-8 lg:flex-row flex-col  '>
      <section className='w-full  '>
        <p className='font-bold text-center text-[40px]'>Your Orders</p>
        <div className=' flex gap-5 flex-col '>
          {
            items.map((item) => (
              <div
                className='flex items-center'
                key={item.id}
              >
                <div className='flex items-center  rounded-md justify-between bg-gray-200 w-full lg:w-[90%] mx-auto h-full px-2  '>
                
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


          {/* CART SUMMARY */}

      <section className='bg-gray-200  rounded-lg w-[95%]  lg:w-[30%] h-96'>
        <div className='flex flex-col justify-center h-full items-center'>
          <p className='text-center text-[25px] font-bold'>Cart Summary</p>
        <p className='text-black text-center pt-8 text-[20px]'>Total: Npr. {totalprice}</p>
        <div className='w-full flex flex-col gap-2 pt-7 px-2'>

          <button 
          onClick={()=> setEsewa(true)}
          className='bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white px-8 p-2 w-full rounded-md'>Pay Via Esewa</button>


          <button 
          onClick={()=> setSuccessfull(true)}
          className='bg-yellow-300 hover:cursor-pointer hover:bg-yellow-400 w-full px-8 p-2 rounded-md'>Cash on Delivery</button>
        </div>
          

        </div>
      </section>
          <Esewaerror show={esewa} onclose={()=> setEsewa(false)}/>
            <Orderplaced success={successfull} onclose={()=> setSuccessfull(false)}  />
    </main>
  )
}
