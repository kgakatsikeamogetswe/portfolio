import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import mongodbImg from '../public/assets/projects/mongodb.png'

const projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5b5b5b]'>Projects</p>
        <h2 className='py-4'>What I've build!</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#333333] to-[#afafaf]'>
            <Image className='rounded-xl group-hover:opacity-10' src={mongodbImg} alt='/' />
            <div className='hidden group-hover:black absolute top-[50%] left-[50%] transale-x-[-50%] translate-y-[50%]'>
              <h3 className='text-2xl text-white tracking-widest text-center'>Mongodb project</h3>
              <p className='pb-4 pt-2 text-white text-center'>JAvascript</p>
              <Link href='/'>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects