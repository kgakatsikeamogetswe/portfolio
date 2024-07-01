/* eslint-disable */
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f3297')
  const router = useRouter

  useEffect(() => {
  if(
    router.asPath === "/blog" ||
    router.asPath === "/foodies"
  ) {
    setNavBg("transperant")
    setLinkColor("#ecf0f3")
  } else {
    setNavBg("#ecf0f3")
    setLinkColor("#1f3297")

  }

  },[router])

  const handleNav = () => {
    setNav(!nav)
  }
  
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90){
        setShadow(true);
      } else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow);
  },[])

  return (
    // Navbar container
    <div styles={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      {/* Navbar content */}
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* Logo */}
        <Link href='/'>        
        <Image
          src="/assets/navBarLogo.png"
          alt="/"
          width={50} 
          height={50}
          style={{ height: 'auto', width:'auto'  }}
          className='h-20'
        />
        </Link>

        {/* Desktop navigation links */}
        <ul styles={{color: `${linkColor}`}} className='hidden md:flex'>
          <Link href="/">
          <li className='py-4 text-sm relative group'><span className="uppercase m-4">Home</span> <span className="absolute left-0 -bottom-1 w-full h-2 bg-gray-400 -z-10 group-hover:h-full group-hover:transition-all"></span></li>
          </Link>
          <Link href="/#abouts">
          <li className='py-4 text-sm relative group'><span className="uppercase m-4">About</span> <span className="absolute left-0 -bottom-1 w-full h-2 bg-gray-400 -z-10 group-hover:h-full group-hover:transition-all"></span></li>
          </Link>
          <Link href="/#skills">
          <li className='py-4 text-sm relative group'><span className="uppercase m-4">Skills</span> <span className="absolute left-0 -bottom-1 w-full h-2 bg-gray-400 -z-10 group-hover:h-full group-hover:transition-all"></span></li>
          </Link>
          <Link href="/#projects">
          <li className='py-4 text-sm relative group'><span className="uppercase m-4">Projects</span> <span className="absolute left-0 -bottom-1 w-full h-2 bg-gray-400 -z-10 group-hover:h-full group-hover:transition-all"></span></li>
          </Link>
          <Link href="/#contacts">
          <li className='py-4 text-sm relative group'><span className="uppercase m-4">Contact</span> <span className="absolute left-0 -bottom-1 w-full h-2 bg-gray-400 -z-10 group-hover:h-full group-hover:transition-all"></span></li>
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
            <Link href='/'>
            <Image 
            src="/assets/navBarLogo.png"  
            width={35} 
            height={5}
            className='h-20' 
            alt="/" 
            style={{ height: 'auto', width:'auto'  }}
            />
            </Link>
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
            <Link onClick={() => setNav(false)}  href='/'>
            <li className='py-4 text-sm'>Home</li>
            </Link>
            <Link onClick={() => setNav(false)} href='/#abouts'>
            <li className='py-4 text-sm'>About</li>
            </Link>
            <Link onClick={() => setNav(false)} href='/#skills'>
            <li className='py-4 text-sm'>Skills</li>
            </Link>
            <Link onClick={() => setNav(false)} href='/#projects'>
            <li className='py-4 text-sm'>Projects</li>
            </Link>
            <Link onClick={() => setNav(false)} href='/#contacts'>
            <li className='py-4 text-sm'>Contact</li>
            </Link>
          </ul>

          <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#2c1101e3]'>Connect with me</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

              <Link href='https://www.linkedin.com/in/keamogetswe-kgakatsi-388239267'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <FaLinkedinIn/>
              </div>
              </Link>

              <Link href='https://github.com/kgakatsikeamogetswe'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <FaGithub/>
              </div>
              </Link>

              <Link href="keamogetswekgakatsi11@gmail.com">
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <AiOutlineMail/>
              </div>
              </Link>

              <Link href= '+27 679 777 367'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <BsFillPersonLinesFill/>
              </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
