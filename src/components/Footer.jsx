import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className='px-4 divide-y bg-black text-white'>
      <div className='container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0'>
        <div className='lg:w-1/3'>
          <h1 className='self-center text-2xl font-semibold'>Nurul Musthofa</h1>
          <h1 className='self-center text-sm py-5'>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </h1>
        </div>
        <div className='flex flex-col justify-between space-y-4'>
          <div className='space-y-3 flex flex-col gap-4 items-center'>
            <div className='uppercase text-white font-semibold text-lg'>
              SOCIAL MEDIA
            </div>
            <div className='flex justify-start space-x-3 gap-5'>
              <Link
                href={'https://www.linkedin.com/in/nurul-musthofa'}
                target={'blank'}
              >
                <FaLinkedinIn className='w-7 h-7 fill-current' />
              </Link>
              <Link href={'https://github.com/Mustofawho0'} target={'blank'}>
                <FaGithub className='w-7 h-7 fill-current' />
              </Link>
              <Link href={'https://x.com/mustofawho'} target={'blank'}>
                <FaTwitter className='w-7 h-7 fill-current' />
              </Link>
              <Link
                href={'https://www.instagram.com/mustofawho/'}
                target={'blank'}
              >
                <FaInstagram className='w-7 h-7 fill-current' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='py-6 text-sm text-center text-white'>
        © Copyright 2024 . Made by <u>Nurul Musthofa</u> All Rights Reserved.
      </div>
    </footer>
  );
}
