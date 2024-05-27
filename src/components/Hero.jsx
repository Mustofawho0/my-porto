'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Image
        src={'/1.png'}
        alt='logo'
        width={10000}
        height={10000}
        priority={true}
        quality={100}
        className='h-[100vh] w-full object-cover'
      />
      <div className='absolute text-center w-[50vw]'>
        <h1 data-aos='fade-right' className='text-5xl font-bold'>
          HEY, I`M NURUL MUSTHOFA
        </h1>
        <h1 data-aos='fade-left' className='text-2xl py-10'>
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </h1>
        <div data-aos='fade-right'>
          <button className='btn btn-primary text-white w-[20vw] h-[60px] text-xl'>
            PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
}
