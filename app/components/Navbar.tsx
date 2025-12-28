import Image from 'next/image'
import React from 'react'
import logo from "@/images/images-copy2.png"
import Maxwidthwrapper from '@/Layout/Maxwidthwrapper'
import Link from 'next/link'

export default function Navbar() {

    const navlinks = [
        { label: "Home", href: "/" ,id:"1" },
        { label: "Menu", href: "/Menu",id:"2" },
        { label: "About", href: "/About",id:"3" },
        {label:"Contact" , href:"/contact",id:"4"}
    ]

    return (

        <main className='bg-black flex justify-between border border-b-white backdrop-blur-lg lg:px-8 px-4 fixed z-10 w-full  items-center gap-2 '>
            <section className=' p-2 flex items-center'>
                <Image
                    src={logo}
                    alt='logo'
                    width={56}
                    height={48}
                />
                <p className='logo text-red-500 text-[40px]'>Tandoori</p>
            </section>
            <section className=' lg:flex hidden gap-4 text-[18px] text-gray-400'>

            {navlinks.map((link)=>(
                <div
                 key={link.id}>
                    <Link
                      className='hover:bg-red-600 inline-block  hover:text-white p-2 rounded-md hover:scale-105 transition-transform duration-300'
                    href={link.href}>
                    {link.label}
                    </Link>
                </div>
            ))}
            </section>
            <section className='lg:flex hidden gap-4 items-center'>
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
