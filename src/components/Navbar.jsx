import React from 'react';
import { IoFolderOpenOutline } from 'react-icons/io5';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='text-black p-4 sticky top-0 z-20 bg-white shadow-xl'>
      <div className='px-[100px] flex justify-between items-center font-serif'>
        <div className='text-2xl tracking-wide font-bold flex items-center gap-5'>
          <Image
            src={'/poto.jpg'}
            alt='logo'
            width={10000}
            height={10000}
            priority={true}
            quality={100}
            className='rounded-full w-[70px] h-[60px] object-cover'
          />
          <a href='/'>
            <span className='hover:text-blue-700'>Nurul Musthofa</span>
          </a>
        </div>
        <div className='hidden md:flex space-x-4 font-bold text-lg gap-10'>
          <a href='/'>
            <span className='hover:underline hover:underline-offset-4 hover:text-blue-700'>
              ABOUT
            </span>
          </a>
          <a href='/projects'>
            <span className='hover:underline hover:underline-offset-4 hover:text-blue-700'>
              PROJECTS
            </span>
          </a>
          <a href='/contact'>
            <span className='hover:underline hover:underline-offset-4 hover:text-blue-700'>
              CONTACT
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
