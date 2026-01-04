"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Mobilemenu() {
  const pathname = usePathname();
  const router = useRouter();
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const [name , setName] = useState<string>("")

  const handlelogout = ()=>{
    localStorage.removeItem("token");
    router.push("/");
    localStorage.removeItem("username");
  }

  useEffect(()=>{
    const nameofuser =  localStorage.getItem("username");
    if (nameofuser)
    {
    setName(nameofuser);
    }
    const tokenofuser = localStorage.getItem("token");
  },[pathname])

  return (
    <main className='bg-black flex justify-center w-full'>
      <section className='flex flex-col gap-2 justify-center items-center w-full  text-white'>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/Menu">Menu</Link>
        <Link href="/cart">Cart</Link>

        {name ? <div className='flex flex-col gap-2'>

          <p className='bg-gray-800/40 p-2 rounded-md'>Hello {username}</p>
          <button
          onClick={handlelogout}
           className='text-red-500 hover:cursor-pointer'>Logout</button>

        </div> : <div className='flex flex-col gap-2 items-center'>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/signup">Signup</Link>
        </div>}


        <div>
          <hr className='text-white w-full pb-5' />
        </div>


      </section>
    </main>
  )
}
