"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import contact from "@/images/Contac.png"
import Footer from '@/app/components/Footer'
import { toast } from 'react-toastify';

export default function page() {

  const [message, setMessage] = useState("");

  const handlesendmessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("message", message);
    try {
      const data = await fetch("/api/Contact", {
        method: "POST",
        body: formdata
      });
      const res = await data.json();
      console.log(res);

      if (!data.ok) {
        return toast.error("Error while sending message");
      }
      return toast.success(res.msg);


    } catch (error) {
      return toast.error("Error sending Message");
    }
  }


  return (
    <main className='pt-25 gap-8 min-h-screen w-full bg-black flex flex-col justify-center items-center'>
      <section className='bg-[linear-gradient(to_right,#111,#222,#333,#444)] px-3 lg:w-5xl shadow-md w-[90%] rounded-md shadow-white h-128 flex items-center lg:flex-row flex-col justify-between'>

        {/* HEADER TEXT */}

        <section className='h-full w-[90%] '>
          <p className='text-white lg:text-[50px] text-[20px]
           font-bold'>How can we <span className='bg-red-500 text-white px-1  rounded-md'>Assist</span> you?</p>

          {/* FORM STARTED */}

          <form onSubmit={handlesendmessage} className='flex gap-5 flex-col'>

            {/* EMAIL INPUT */}

            <div className='flex flex-col lg:w-sm w:48 gap-2 pt-5'>
              <label className='text-white'>Email</label>
              <input
                placeholder='e.g: Some@gmail.com'
                type='email' className='bg-transparent border-b text-white border-white outline-none' />
            </div>

            {/* MESSAGE INPUT */}

            <div className='flex flex-col lg:w-sm w-68  gap-2'>
              <label className='text-white'>Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Enter Your Message....'
                className='bg-gray-700 rounded-md h-32 placeholder:text-white p-2 text-white'
              />
            </div>

            {/* SUBMIT BUTTON */}

            <div className='lg:w-sm pt-8 flex items-center justify-center'>
              <button 
              type='submit'
              className='text-center bg-red-500 lg:w-full  w-48 hover:cursor-pointer hover:scale-105 transition-transform rounded-md p-2 text-white'>Send Message</button>

            </div>
          </form>
        </section>


        <section>
          <div className='w-105 hidden lg:inline-block h-96 relative'>
            <Image
              src={contact}
              alt='contact-image'
              fill
              className='object-cover object-center'
            />
          </div>
        </section>
      </section>
      <Footer />
    </main>
  )
}
