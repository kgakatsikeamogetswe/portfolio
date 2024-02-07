import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import React, {useState} from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    // Navbar container
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      {/* Navbar content */ }
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* Logo */}
        <Image
          src="/assets/navBarLogo.png"
          alt="/"
          width="125"
          height="10"
          className='h-20'
        />

        {/* Desktop navigation links */}
        <ul className='hidden md:flex'>
          <Link href="/">
            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
          </Link>
          <Link href="/">
            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
          </Link>
          <Link href="/">
            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
          </Link>
          <Link href="/">
            <li className='ml-10 text-sm uppercase hover:border-b'>Project</li>
          </Link>
          <Link href="/">
            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
          </Link>
        </ul>

        {/* Mobile view - Menu icon */}
        <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile view - Overlay */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/75' : ''}>
      <div className={nav 
                    ? 'fixed left-0 top-0 w=[75%] sm:w=[60%] md:w=[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        <div>
          <div className='flex w-full text-center justify-between'>
            <Image src="/assets/navBarLogo.png"  width='87' height='25' alt="/" />
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-500 my-4'>
            <p className='w=[85%] md:w=[90%] my-4'>Welcome to my portfolio.</p>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <Link href='/'>
            <li className='py-4 text-sm'>Home</li>
            </Link>
            <Link href='/'>
            <li className='py-4 text-sm'>About</li>
            </Link>
            <Link href='/'>
            <li className='py-4 text-sm'>Skills</li>
            </Link>
            <Link href='/'>
            <li className='py-4 text-sm'>Projects</li>
            </Link>
            <Link href='/'>
            <li className='py-4 text-sm'>Contact</li>
            </Link>
          </ul>

          <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#2c1101e3]'>Connect with me</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <FaLinkedinIn/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <FaGithub/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <AiOutlineMail/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <BsFillPersonLinesFill/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
