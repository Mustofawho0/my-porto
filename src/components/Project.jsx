'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='flex items-center justify-center flex-col pt-[100px] min-h-screen'>
      <span
        data-aos='fade-up'
        className='text-4xl tracking-widest font-bold pb-5'
      >
        PROJECT
      </span>
      <hr
        data-aos='fade-up'
        className='w-[5vw] border-b-8 border-b-indigo-500'
      />
      <span data-aos='fade-up' className='py-10 text-xl w-[40vw] text-center'>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </span>
      <div className='grid grid-cols-2 w-[70vw] pt-36 gap-10'>
        <div className='' data-aos='fade-right'>
          <Image
            src={'/dopefolio.jpeg'}
            alt='logo'
            width={10000}
            height={10000}
            priority={true}
            quality={100}
            className='w-[40vw] h-[40vh] object-cover'
          />
        </div>
        <div
          data-aos='fade-left'
          className='text-justify flex flex-col items-start justify-center'
        >
          <h1 className='font-bold text-2xl'>Dopefolio</h1>
          <p className='py-10'>
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <button className='btn btn-primary text-white w-[10vw]'>
            CASE STUDY
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 w-[70vw] pt-36 gap-10'>
        <div className='' data-aos='fade-right'>
          <Image
            src={'/crown-template.jpeg'}
            alt='logo'
            width={10000}
            height={10000}
            priority={true}
            quality={100}
            className='w-[40vw] h-[40vh] object-cover'
          />
        </div>
        <div
          data-aos='fade-left'
          className='text-justify flex flex-col items-start justify-center'
        >
          <h1 className='font-bold text-2xl'>Crown Template</h1>
          <p className='py-10'>
            Crown is a web template that I created targeting the restaurant and
            food industry which anyone can use to present their business online.
          </p>
          <button className='btn btn-primary text-white w-[10vw]'>
            CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
}
