import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

function Main() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-grey-600'>Feel free to browse my portfolio</p>
                <h1 className='py-4 text-[#5b5b5b]  animate-bounce animate-infinite animate-duration-[5000ms] animate-delay-[10ms] animate-ease-in-out animate-alternate-reverse'>Hi, I'm <span className='text-[#302f2f]'>Keamogetswe</span></h1>
                <h1 className='py-2 text-[#5b5b5b]'>A Front-End Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                  As a front-end developer with expertise in building responsive web applications using React, Next.js, JavaScript, HTML, and CSS, I am currently honing my backend skills with a focus on MongoDB. I acquired these skills through my education at Codespace, where I graduated and specialized in JavaScript. I am dedicated to furthering my knowledge and proficiency in backend development, particularly in MongoDB, to complement my front-end expertise. My goal is to become a well-rounded full-stack developer capable of delivering end-to-end solutions that meet the highest standards of performance, functionality, and user experience.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                    <FaLinkedin/>
                  </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main