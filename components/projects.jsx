import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import mongodbImg from '../public/assets/projects/mongodb.png'
import nextjsImg from '../public/assets/projects/nextjs,png'
import ProjectItem from './ProjectItem'

const projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5b5b5b]'>Projects</p>
        <h2 className='py-4'>What I've build!</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem 
          title='mongodb projects' 
          backgroundImg={mongodbImg} 
          projectUrl='/'
          />
          <ProjectItem 
          title='nextjs' 
          backgroundImg={nextjsImg} 
          projectUrl='/'
          />
          <ProjectItem 
          title='mongodb projects' 
          backgroundImg={mongodbImg} 
          projectUrl='/'
          />
          <ProjectItem 
          title='mongodb projects' 
          backgroundImg={mongodbImg} 
          projectUrl='/'
          />
        </div>
      </div>
    </div>
  )
}

export default projects