import Image from 'next/image'
import React from 'react'
import logo from "@/images/images-copy2.png"
import Maxwidthwrapper from '@/Layout/Maxwidthwrapper'
import Link from 'next/link'

export default function Navbar() {
    return (

        <main className='bg-black flex justify-between border border-b-white backdrop-blur-lg px-8 fixed z-10 w-full  items-center gap-2 '>
            <section className=' p-2 flex items-center'>
                <Image
                    src={logo}
                    alt='logo'
                    width={56}
                    height={48}
                />
                <p className='logo text-red-500 text-[40px]'>Tandoori</p>
            </section>
            <section className='flex gap-4 text-[18px] text-gray-400'>
                <Link
                    className='hover:bg-gray-900 p-2 rounded-md'
                    href="/">Home</Link>
                <Link
                    className='hover:bg-gray-900 p-2 rounded-md'

                    href="/Menu">Menu</Link>
                <Link
                    className='hover:bg-gray-900 p-2 rounded-md'

                    href="/Contact">Contact</Link>
                <Link
                    className='hover:bg-gray-900 p-2 rounded-md'

                    href="/About">About</Link>

            </section>
            <section className='flex gap-4 items-center'>
                <Link className='rounded-md border hover:border-white hover:bg-white hover:text-black hover:scale-105 duration-300  text-white px-10 py-2' href="/login">Login</Link>
                <Link
                className='
                hover:scale-105 hover:bg-transparent transition-transform duration-300 hover:text-red-500  
                rounded-md border border-red-500 bg-red-600 text-white px-10 py-2'
                href="/signup">Signup</Link>
            </section>
        </main>


    )
}
