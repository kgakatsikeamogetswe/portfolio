import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div id='abouts' className='w-full md:h-screen p-2 flex items-center py-16'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='cols-span-2'>
            <p className='text-xl uppercase tracking-widest text-[#5b5b5b]'>About</p>
            <h2 className='py-4'>WHO I AM?</h2>
            <p className='py-2 text-gray-300 tracking-widest'>I am not your developer</p>
            <p className='py-2 text-gray-500'>This assignment agdgad gshsd sahdashis optional. Its sole purpose is to ensure that you can write simple Java programs, use algs4.jar, and submit them to the Coursera autograder.</p>
            <p className='py-2 text-gray-500'>Write a program HelloGoodbye.javadsfsdfsd dfdss fdsdf that takes two names as command-line arguments and prints hello and goodbye messages as shown below (with the names for the hello message in the same order as the command-line arguments and with the names for the goodbye message in reverse order).</p>
            <p className='underline cursor-pointer py-2 text-gray-400'>text e underline</p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image
          src="/assets/profile/7B_361A5100.jpg"
          alt="/"
          width="500"
          height="50"
          className="rounded-xl animate-flip-up animate-twice animate-duration-[5000ms] animate-delay-100 "
        />
        </div>
    </div>
    </div>
  )
}

export default AboutMe