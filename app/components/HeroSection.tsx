"use client"
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className='pt-20 bg-black h-screen '>

      <section className='max-w-7xl mx-auto pt-8 flex justify-between'>
        <section>
          <p className='text-white text-[55px] font-bold '>We are ready to <span className='text-red-500'>
            <Typewriter
              words={['Cook', 'Serve', 'Deliver']}
              cursor
              cursorStyle="|"
              loop={0}
              typeSpeed={120}
              delaySpeed={1200}
              deleteSpeed={150}
            />
          </span></p>
          <p className='text-gray-500 pt-8 text-[18px]'>“Good food is more than just sustenance — it’s a story, a memory,<br /> a moment shared with others. Every dish has the power to bring people together,<br /> to comfort, to inspire, and to celebrate life.”</p>
          <div className='flex pt-10 items-center gap-4'>
            <Link
              className='text-white border hover:scale-105 transition-transform duration-300 hover:bg-transparent hover:text-red-700 border-red-700 bg-red-700 px-10 py-2 rounded-md'
              href="/book">Book a Reservation</Link>
            <Link
            className='text-white 
            hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300
            border border-white px-15 py-2 rounded-md'
            href="/menu">Order Now</Link>
          </div>

        </section>
        <section>
          <div className='bg-white w-lg h-96 relative rounded-md'>
          <Image
          src={"https://images.stockcake.com/public/f/b/1/fb19e250-2549-4daf-a880-179538d0f7f2_large/chef-cooking-flambe-stockcake.jpg"}
          alt='chef-pic'
          
          fill
          unoptimized 
          className=' object-cover rounded-md'
          />
          </div>
         
        </section>
      </section>



    </main>

  );
}
