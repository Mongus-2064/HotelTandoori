"use client"
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import Image from 'next/image';
import Recomendedfood from './Recomendedfood';

export default function HeroSection() {
  return (
    <main className=' flex flex-col  pt-20 bg-black h-100vh '>

      <section className=' pt-8  flex justify-center  items-center w-full '>


        <div className=' md:max-w-5xl md:mx-auto lg:max-w-7xl lg:bg-red-500 flex md:flex-wrap lg:w-full  justify-between '>

<div className='flex flex-row w-full'>
 <section className='flex justify-center flex-col items-center w-full'>
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
          <p className='text-gray-500 pt-8 text-[18px]'>“Good food is more than just sustenance — it’s a story, a memory,<br /> a moment shared with others. Every dish has the power to bring <br/>people together, to comfort, to inspire, and to celebrate life.”</p>
          
          
          {/* HERO SECTION BUTTONS */}

          <div className='flex  pt-10 items-center gap-4 pb-10'>
            <Link
              className='text-white border hover:scale-105  transition-transform duration-300 hover:bg-transparent hover:text-red-700 border-red-700 bg-red-700 px-10 py-2 rounded-md'
              href="/book">Book a Reservation</Link>
            <Link
            className='text-white 
            hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300
            border border-white px-15 py-2  rounded-md'
            href="/menu">Order Now</Link>
          </div>




        </section>
</div>
        
       
        <section className='w-full flex '>
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
</div>
      </section>
      <div>
<hr className='text-white max-w-7xl mx-auto mt-10'/>

      </div>

<section>
<Recomendedfood/>
</section>
    </main>

  );
}
