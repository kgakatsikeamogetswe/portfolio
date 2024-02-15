import React from 'react'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5b5b5b]'>Contact</p>
            <h2 className='py-4'>Connect with me</h2>
            <div className='grid lg:grid-cols-5 gap-8'></div>
            {/**left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <img className='rounded-xl hover:scale-105 ease-in duration-300' src="" alt="/" />
                    </div>
                    <div>
                        <h2 className='py-2'>Name here</h2>
                        <p>Front-End Developer</p>
                        <p>I am available anytime for any role</p>
                    </div>

                </div>
            </div>


            {/**right */}
        </div>

    </div>
  )
}

export default Contact