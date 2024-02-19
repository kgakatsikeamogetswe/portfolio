import Image from 'next/image'
import blogImg from '../public/assets/projects/blog.png';
import React from 'react'

const blog = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image
            src={blogImg}
            atl='/'
            />
        </div>
    </div>
  )
}

export default blog