'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

export default function page() {
  const router = useRouter()
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-2'>
      <div className='bg-white w-full h-full'>
         <button className='bg-black text-white px-4 py-2 rounded-md' onClick={() => router.push('/zed-certification')}>
            Zed Certification
         </button>
      </div>
      <div className='bg-white w-full h-full'>
        <button className='bg-black text-white px-4 py-2 rounded-md' onClick={() => router.push('/workwithus')}>
            Work with us
         </button>
      </div>
      <div className='bg-white w-full h-full'>
        <button className='bg-black text-white px-4 py-2 rounded-md' onClick={() => router.push('/contact-us')}>
            Contact us
         </button>
      </div>
      <div className='bg-white w-full h-full'>
        <button className='bg-black text-white px-4 py-2 rounded-md' onClick={() => router.push('/other-services')}>
            Other Services
         </button>
      </div>
      </div>

      
    </div>
  )
}
