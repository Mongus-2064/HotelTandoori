import React from 'react'

    interface wrapper {
        children:React.ReactNode
    }

export default function Maxwidthwrapper({children}:wrapper) {
  return (
    <main className='max-w-7xl mx-auto bg-white'>
      {children}
    </main>
  )
}
