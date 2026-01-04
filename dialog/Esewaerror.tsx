import { Cross, CrossIcon, SquareX, X } from 'lucide-react';
import React from 'react';
import {motion} from "framer-motion"

interface EsewaErrorProps {
  show: boolean;
  onclose:()=> void;
}

export default function Esewaerror({ show , onclose}: EsewaErrorProps) {
  if (!show) return null;

  return (
    <div
    onClick={onclose}
    className="fixed 



    inset-0 flex justify-center items-center
     bg-black/50 backdrop-blur-md z-50">
      <div className="bg-white lg:w-full w-[95%] p-8 rounded-md">
        <motion.div
        initial={{opacity:0 , y:40}}
        animate={{opacity:1 , y:0}}

        >
          <div className='flex flex-col items-center gap-4'>
          <X size={50} className='border-2 text-red-500 rounded-full'/>
          <p className='text-nowrap'>Esewa transaction is currently unavailable</p>
        </div>
        </motion.div>
        
      </div>
    </div>
  );
}
