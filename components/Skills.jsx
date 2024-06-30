/* eslint-disable */
import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5b5b5b]'>Skills</p>
            <h2 className='py-4'>Technologies I use</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/html.png' alt='/' width='64' height='64' style={{ height: 'auto', width:'auto'  }} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/css.png' alt='/' width='64' height='64' style={{ height: 'auto', width:'auto'  }} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/tailwind1.png' alt='/' width='64' height='64' style={{ height: 'auto', width:'auto' }} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>TAILWIND</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/javascript.png' alt='/' width='64' height='64' style={{ height: 'auto', width: 'auto' }} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/github1.png' alt='/' width='64' height='64' style={{ height: 'auto', width: 'auto' }} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>GITHUB</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/react1.png' alt='/' width='64' height='64' style={{ height: 'auto', width: 'auto' }} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>REACT</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/nextjs1.png' alt='/' width='64' height='64' style={{ height: 'auto', width: 'auto' }} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NEXTJS</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/firebase.png' alt='/' width='64' height='64' style={{ height: 'auto', width: 'auto' }} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>FIREBASE</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/Supabase.jpg' alt='/' width='64' height='64' style={{ height: 'auto' , width: 'auto' }}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>SUPABASE</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/mongo1.png' alt='/' width='64' height='64' style={{ height: 'auto' , width: 'auto' }}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MONGODB</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/node.png' alt='/' width='64' height='64' style={{ height: 'auto' , width: 'auto' }}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NODEJS</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/scratch.jpg' alt='/' width='64' height='64' style={{ height: 'auto', width: 'auto' }}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>SCRATCH</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/vbnet1.png' alt='/' width='64' height='64' style={{ height: 'auto', width: 'auto' }}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>VB.NET</h3>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Skills