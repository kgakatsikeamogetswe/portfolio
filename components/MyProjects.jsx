import React from 'react';
import blogImg from '../public/assets/projects/blog.png';
import foodiesImg from '../public/assets/projects/foodies.png';
import ProjectItem from './ProjectItem';

const MyProjects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5b5b5b]'>Projects</p>
        <h2 className='py-4'>What I have built!</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem 
            title='Foodies Delight' 
            type='Nextjs'
            backgroundImg={foodiesImg}
            projectUrl='/foodies' 
          />

          <ProjectItem 
            title='Nextjs Blog' 
            type='Nextjs'
            backgroundImg={blogImg}
            projectUrl='/blog' 
          />

        </div>
      </div>
    </div>
  );
};

export default MyProjects;
