/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectItem = ({ title, backgroundImg, projectUrl, type }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#333333] to-[#afafaf]'>
    <Image
      className='rounded-xl group-hover:opacity-10'
      src={backgroundImg}
      alt='/'
      style={{ width: 'auto', height: 'auto', width:'auto'  }}
    />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-2xl text-white tracking-widest text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{type}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
