import { Loader2 } from 'lucide-react'
import React from 'react'

export default function Circleloader() {
  return (
    <div className=' inset-0 animate-spin'>
      <Loader2 size={30}/>
    </div>
  )
}
