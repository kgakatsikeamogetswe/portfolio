import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="w-full bg-[#ecf0f3] shadow-xl mt-10 py-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-700 text-sm">&copy; {new Date().getFullYear()} Keamogetswe Kgakatsi. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4">
          <Link href='https://www.linkedin.com/in/keamogetswe-kgakatsi-388239267'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <FaLinkedinIn />
            </div>
          </Link>

          <Link href='https://github.com/kgakatsikeamogetswe'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <FaGithub />
            </div>
          </Link>

          <Link href='mailto:keamogetswekgakatsi11@gmail.com'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <AiOutlineMail />
            </div>
          </Link>

          <Link href='tel:+27679777367'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
              <BsFillPersonLinesFill />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
