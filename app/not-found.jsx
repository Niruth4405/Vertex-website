import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen gap-3'>
        <h1 className='text-xl sm:text-3xl md:text-4xl'>{"404 - Page Not Found :("}</h1>
        <Link href="/"><button className='cursor-pointer rounded-full text-white text-xl sm:text-2xl border border-white/20 bg-white/10 px-4 py-1 hover:bg-white/20'>Home</button></Link>
    </div>
  )
}

export default NotFound