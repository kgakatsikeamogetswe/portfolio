/* eslint-disable */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div id='abouts' className='w-full md:h-screen p-2 flex items-center py-16'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='cols-span-2'>
            <p className='text-xl uppercase tracking-widest text-[#5b5b5b]'>About</p>
            <h2 className='py-4'>WHO I AM?</h2>
            <p className='py-2 text-gray-300 tracking-widest'>I am trying my best to be your developer!</p>
            <p className='py-2 text-gray-500'>
              I am a software engineer from South Africa with a robust academic background in Information Technology and Computer Science from Orbit TVET College. Additionally, I hold a Software Engineering certificate from Codespace Academy.
            </p>
            <p className='py-2 text-gray-500'>
            My technical expertise spans both front-end and back-end development. On the front end, I utilize HTML, CSS, React, Next.js, and JavaScript, while my back-end skills include MongoDB, Firebase, and Supabase. Driven by a curiosity for technology, I have also completed introductory courses in Cybersecurity and the Internet of Things with Cisco.
            </p>
            <p className='underline cursor-pointer py-2 text-gray-400'>
            <Link href="https://padlet.com/stimulatekay11ew/my-portfolio-gspts0wmmxnxgikp">Padlet portfolio</Link>
            </p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image
          src="/assets/profile/7b_361A5100.jpg"
          alt="/"
          width="500"
          height="50"
          style={{ height: 'auto', width:'auto'  }}
          className="rounded-xl animate-flip-up animate-twice animate-duration-[5000ms] animate-delay-100 "
        />
        </div>
    </div>
    </div>
  )
}

export default AboutMe