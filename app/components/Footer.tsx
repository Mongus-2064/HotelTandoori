import React from 'react'
import Link from 'next/link'
import { Clock, Mail, MapPinned, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <main className='bg-[#121212] lg:h-75  flex flex-col p-5'>
        <section className='pt-5  flex lg:flex-row flex-col w-full justify-center gap-8 h-full items-center '>
            
            <div className='w-full flex h-full flex-col items-center'>
                <p className='text-red-500 font-bold text-[30px]'>The Tandoori Resort</p>
                <p className='text-center text-white'>Welcome to The Tandoori Resort, where luxury meets comfort. Experience serene stays, exquisite dining, and unforgettable memories in every moment.
</p>
            </div>


            <div className=' w-full flex flex-col items-center h-full'>
                <p className='text-[25px] text-white font-bold'>Quick Links</p>
            <div className='flex text-shadow-white flex-col pt-2 gap-2'>
                <Link
                className='hover:text-red-500 text-white'
                href="/">Home</Link>
                <Link
                className='hover:text-red-500 text-white'
                href="/About">About us</Link>
                <Link 
                className='hover:text-red-500 text-white'
                href="/Menu">Our Menu</Link>
                <Link
                className='hover:text-red-500 text-white'
                href="/Contact">Contact</Link>
            </div>
            </div>

            <div className=' w-full flex flex-col h-full items-center'>
                <p className='text-white text-[25px] font-bold'>Contact</p>
              <div className='flex flex-col gap-2 pt-5'>
                  <p className='flex gap-2 text-white'><MapPinned className='text-red-500'/>Sifal , Mitrapark</p>
                <p className='flex gap-2 text-white'><Phone className='text-red-500'/>+977 9828224543</p>
                <p className='flex gap-2 text-white'><Mail className='text-red-500'/>mongus2064@gmail.com</p>
              </div>
            </div>

            <div className=' w-full flex flex-col h-full items-center lg:items-start'>
                <p className='text-[25px] font-bold text-white'>Hours</p>
                <p className='flex gap-2 text-white'><Clock className='text-red-500'/>Mon-Fri: 7:00 AM-11:00 PM</p>
            </div>
            
        </section>
        <div className="  flex justify-center ">
<hr className="text-white p-2  w-[90%] text-center"/>
      </div>
      <p className='text-center  text-gray-500'>&copy; copyright 2026 - All Rights Reserved</p>
    </main>
  )
}
