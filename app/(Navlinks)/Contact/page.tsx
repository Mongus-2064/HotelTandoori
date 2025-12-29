import Image from 'next/image'
import React from 'react'
import contact from "@/images/Contac.png"

export default function page() {
  return (
    <main className='pt-20 min-h-screen bg-black flex justify-center items-center'>
      <section className='bg-[linear-gradient(to_right,#111,#222,#333,#444)] px-3 w-5xl shadow-md rounded-md shadow-white h-128 flex items-center lg:flex-row flex-col justify-between'>

        {/* HEADER TEXT */}

        <section className='h-full'>
          <p className='text-white text-[50px] font-bold'>How can we <span className='bg-red-500 text-white px-1  rounded-md'>Assist</span> you?</p>

          {/* FORM STARTED */}

          <form className='flex gap-5 flex-col'>

            {/* EMAIL INPUT */}

            <div className='flex flex-col w-sm gap-2 pt-5'>
              <label className='text-white'>Email</label>
              <input
                placeholder='e.g: Some@gmail.com'
                type='email' className='bg-transparent border-b text-white border-white outline-none' />
            </div>

            {/* MESSAGE INPUT */}

            <div className='flex flex-col w-sm  gap-2'>
              <label className='text-white'>Message</label>
              <textarea
                placeholder='Enter Your Message....'
                className='bg-gray-700 rounded-md h-32 placeholder:text-white p-2 text-white'
              />
            </div>

            SUBMIT BUTTON

            <div className='w-sm pt-8'>
              <button className='text-center bg-red-500 w-full hover:cursor-pointer hover:scale-105 transition-transform rounded-md p-2 text-white'>Send Message</button>

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

    </main>
  )
}
