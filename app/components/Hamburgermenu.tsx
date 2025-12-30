import Link from 'next/link'
import React from 'react'

export default function Mobilemenu() {
  return (
    <main className='bg-black flex justify-center w-full'>
        <section className='flex flex-col gap-2 justify-center items-center w-full  text-white'>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Menu">Menu</Link>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/signup">Signup</Link>
            <div>
              <hr className='text-white w-full pb-5'/>
            </div>


        </section>
    </main>
  )
}
