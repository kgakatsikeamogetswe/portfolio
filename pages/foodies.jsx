import Image from 'next/image'
import foodiesImg from '../public/assets/projects/foodies.png';
import React from 'react'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const foodies = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image
            className='absolute z-1' layout='fill' objectFit='cover'
            src={foodiesImg}
            alt='foodies delight'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Foodies Delight</h2>
                <h3>Nextjs/ Tailwind/ Javascript/ MongoDB/ HTML & CSS </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>Summary of the project here: hdbsfjfhjbj hgfdsgfdyfg dgfsdbjsbf hgfg</p>
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                <button className='px-8 py-2 mt-4 '>Demo</button>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>Nextjs</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>Tailwind</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>Javascript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>MongoDB</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>HTML & CSS</p>
                        </div>
                    </div>
                </div>
                <Link  href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default foodies