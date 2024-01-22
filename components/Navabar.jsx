import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import React from 'react'

const Navbar = () => {
  return (
    // Navbar container
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      {/* Navbar content */}
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* Logo */}
        <Image
          src="/assets/projects/nextjs.png"
          alt="/"
          width="125"
          height="50"
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
        <div className='md:hidden'>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile view - Overlay */}
      <div className='fixed left-0 top-0 w-full h-screen bg-black/75'>
      <div className='fixed left-0 top-0 w=[75%] sm:w=[60%] md:w=[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
        <div>
          <div>
            <Image src="/assets/navBarLogo.png"  width='87' height='35' alt="/" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
