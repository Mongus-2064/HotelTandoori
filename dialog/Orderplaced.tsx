import React from 'react'
import {motion} from "framer-motion"
import { Check } from 'lucide-react'

interface successfull{
    success:boolean;
    onclose:()=>void;
}

export default function Orderplaced({success , onclose}:successfull) {

  if (!success) return null

  return (
    <div
    onClick={onclose}
     className='fixed inset-0 flex  items-center min-h-screen justify-center bg-black/50 backdrop-blur-xl'>
      <motion.div 
      initial={{opacity:0 , y:40}}
      animate={{opacity:1 , y:0}}
      className='flex flex-col items-center justify-center px-8 rounded-md gap-4 w-60 h-96 bg-white'>
        <Check  size={50} className='border-2 rounded-full text-green-600'/>
        <p className='text-center'>Ordered Placed Successfully!</p>
      </motion.div>
    </div>
  )
}
