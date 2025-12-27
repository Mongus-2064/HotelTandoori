import { databaseconnection } from '@/lib/db'
import React from 'react'
import Navbar from './components/Navbar'
import Maxwidthwrapper from '@/Layout/Maxwidthwrapper'
import HeroSection from './components/HeroSection'

export default function page() {
 
  return (
    <main className='bg-white h-screen'>
<HeroSection/>

      
    </main>
  )
}
