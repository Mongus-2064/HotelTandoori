"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "@/images/images-copy2.png"
import Maxwidthwrapper from '@/Layout/Maxwidthwrapper'
import Link from 'next/link'
import { Contact, Cross, HamburgerIcon, Home, InfoIcon, Menu, ShoppingBag, SquareX } from 'lucide-react'
import Mobilemenu from './Hamburgermenu'
import { usePathname } from 'next/navigation'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'






export default function Navbar() {

    const [isopen , setIsOpen] =useState(false)
    const pathname = usePathname();
    const [showusername , setShowUserName] = useState<string>("");
    const router = useRouter()

    const handlelogout = async ()=>{
        
        localStorage.removeItem("token");
        setShowUserName("");
        localStorage.removeItem("username");
        toast.success("Logged out");
    }

    useEffect(()=>{
            const tokenchecker = localStorage.getItem("token");
            const username = localStorage.getItem("username");
        
             if(username && tokenchecker)
             {
            setShowUserName(username)

             }

    } , [pathname])

    const navlinks = [
        { label: "Home", href: "/" ,id:"1",icon:Home },
        { label: "Menu", href: "/Menu",id:"2",icon:Menu },
        { label: "About", href: "/About",id:"3",icon:InfoIcon},
        {label:"Contact" , href:"/Contact",id:"4",icon:Contact},
        {label:"Cart", href:"/cart",id:"5",icon:ShoppingBag}
    ]

    return (

        <main className={` ${pathname === "/cart" ?"bg-black" : "bg-black/40" }   flex  justify-between items-center flex-col lg:flex-row border-b border-white backdrop-blur-lg lg:px-8 px-2 fixed z-10 w-full   gap-2`}>
            <section className=' flex flex-row items-center justify-between w-full'>
      <section className=' p-2 flex items-center '>
                <Image
                    src={logo}
                    alt='logo'
                    width={48}
                    height={48}
                />
                <p className='logo text-red-500 text-[32px] text-center lg:text-[40px]'>Tandoori</p>
            </section>
            <section className=' lg:flex hidden gap-4 text-[18px] text-gray-400'>

            {navlinks.map((link)=>(
                <div
                className='flex'
                 key={link.id}>
                    <Link
                      className='hover:bg-red-600 flex items-center gap-2 justify-center hover:text-white p-2 rounded-md hover:scale-105 transition-transform duration-300'
                    href={link.href}>
                    <link.icon className='text-white'size={14}/>
                    {link.label}
                    </Link>
                </div>
            ))}
            </section>
            {/* HAMBURGER ICON  */}

             
                <div 
            onClick={()=> setIsOpen(!isopen)}
            className='lg:hidden inline'>
                {isopen ? <SquareX className='text-white' size={24}/> : <Menu className='text-white' size={24}/>}
            </div>


            { showusername ? <div className='lg:flex hidden  gap-2'>

                <p className='bg-gray-800 px-8 text-white rounded-2xl p-2 text-[14px]'>Hello {showusername}</p> 

            <button 
            onClick={handlelogout}
            className='px-8 rounded-md hover:cursor-pointer hover:bg-red-600  bg-red-500 text-white'>Logout</button></div> : 
            
            
            
            <div><section className='lg:flex hidden gap-4 items-center'>
                <Link className='rounded-md border hover:border-white hover:bg-white hover:text-black hover:scale-105 duration-300  text-white px-10 py-2' href="/auth/login">Login</Link>
                <Link
                    className='
                hover:scale-105 hover:bg-transparent transition-transform duration-300 hover:text-red-500  
                rounded-md border border-red-500 bg-red-600 text-white px-10 py-2'
                    href="/auth/signup">Signup</Link>


            </section></div>}
            
            </section>
            <div className='lg:hidden self-center w-full flex justify-center items-center  '>
           {isopen ? <Mobilemenu/> : ""}

</div>
      

            

             
        </main>


    )
}
