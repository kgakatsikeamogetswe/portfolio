/* eslint-disable */
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div id='contacts' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5b5b5b]'>Contact</p>
            <h2 className='py-4'>Where can you connect with me?</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/**left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src="/assets/connect.jpg" width='350' height='350' style={{ height: 'auto', width:'auto'  }} alt="/" />
                        </div>
                        <div>
                            <h2 className='py-2'>Software developer</h2>
                            <p>
                                I am committed to continuous learning and staying current with emerging technologies. You can connect with me on LinkedIn or reach out via phone at +27 679777367 or email at keamogetswekgakatsi11@gmail.com.
                            </p>
                            <p className='py-4 text-gray-300 tracking-widest'>I am available anytime for any role</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8 '>Connect with me</p>
                            <div className='flex items-center justify-between py-4'>
                            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                                <Link href='https://www.linkedin.com/in/keamogetswe-kgakatsi-388239267'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
                                    <FaLinkedin/>
                                </div>
                                </Link>

                                <Link href='https://github.com/kgakatsikeamogetswe'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
                                    <FaGithub/>
                                </div>
                                </Link>

                                <Link href='keamogetswekgakatsi11@gmail.com'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
                                    <AiOutlineMail/>
                                </div>
                                </Link>

                                <Link href='+27 679 777 367'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
                                    <BsFillPersonLinesFill/>
                                </div>
                                </Link>

                                </div>
                            </div>
                    </div>
                    </div>
                </div>


                {/**right */}

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"></textarea>
                            </div>
                            
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Link className='flex justify-center py-12' href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-100 ease-in duration-100'>
                        <HiOutlineChevronDoubleUp className='text-[#333333]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact