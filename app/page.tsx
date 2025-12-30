import { databaseconnection } from '@/lib/db'
import React from 'react'
import Navbar from './components/Navbar'
import Maxwidthwrapper from '@/Layout/Maxwidthwrapper'
import HeroSection from './components/HeroSection'
import Recomendedfood from './components/Recomendedfood'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function page() {
 
  return (
    <main className='bg-white h-screen'>
<HeroSection/>
<Recomendedfood/>
<Experience/>
    <Footer/>

      
    </main>
  )
}
