import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Main() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='max-w-[1240px] w-full p-2'>
        
        <div className='h-20 flex flex-col items-center'></div>

        <div className='flex flex-col items-center'>
          <p className='uppercase text-sm tracking-widest text-gray-600 py-4 max-w-[70%] text-center'>Feel free to browse my portfolio</p>
          <h1 className='py-4 text-[#5b5b5b] max-w-[70%] text-center animate-bounce animate-infinite animate-duration-[5000ms] animate-delay-[10ms] animate-ease-in-out animate-alternate-reverse'>
            Hi, I'm 
            <span className='text-[#302f2f]'>Keamogetswe</span>
          </h1>
          <h1 className='py-2 text-[#5b5b5b] max-w-[70%] text-center'>A Front-End Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] text-center'>
          As a front-end developer with expertise in building responsive web applications using React, Next.js, JavaScript, HTML, and CSS, I am currently honing my backend skills with a focus on MongoDB. I acquired these skills through my education at Codespace, where I graduated and specialized in JavaScript. I am dedicated to furthering my knowledge and proficiency in backend development, particularly in MongoDB, to complement my front-end expertise.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
              <FaLinkedin/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
              <FaGithub/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
              <AiOutlineMail/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
              <BsFillPersonLinesFill/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
