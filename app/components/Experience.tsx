import React from 'react'
import Link from 'next/link'
import { CircleArrowRight } from 'lucide-react'
import Footer from './Footer'

export default function Experience() {
  return (
    <main className='bg-black min-h-screen flex flex-col justify-center '>
                   <div className="  flex justify-center ">
<hr className="text-white  w-[90%] text-center"/>
      </div>
        <section className='pt-5 w-full flex flex-col items-center justify-center '>


            {/* HEADER */}

            <p className='text-white text-[25px] lg:text-[60px] font-bold'>Ready to <span className='text-red-600'>Experience</span> Taste</p>

            {/* SUB HEADER */}

            <p className='text-gray-400 text-[18px] lg:text-[22px] pt-8 text-center'>“Freshly cooked, thoughtfully prepared, and delivered straight to your door. <span className='hidden lg:inline'><br/></span>Taste the difference with every bite.”</p>

          {/* JOIN US TODAY */}

            <Link href="/signup" className='flex font-bold justify-center  w-[75%] bg-red-600 p-2 mt-8 text-[24px] gap-4 items-center rounded-md text-white text-center hover:bg-transparent border border-red-600 hover:text-red-600 hover:scale-105 transition-transform duration-300' >Join us Today <CircleArrowRight size={24}/></Link>
        </section>

    </main>
  )
}
