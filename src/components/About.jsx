'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='flex items-center justify-center flex-col pt-[100px] min-h-screen bg-gray-50'>
      <span
        data-aos='fade-up'
        className='text-4xl tracking-widest font-bold pb-5'
      >
        ABOUT ME
      </span>
      <hr
        data-aos='fade-up'
        className='w-[5vw] border-b-8 border-b-indigo-500'
      />
      <span data-aos='fade-up' className='py-10 text-xl w-[40vw] text-center'>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </span>
      <div className='grid grid-cols-2 w-[70vw] pt-36 gap-10'>
        <div className='text-justify' data-aos='fade-right'>
          <h1 className='font-bold text-2xl py-10'>Get to Know Me!</h1>
          <p className=' text-lg'>
            I'm a <b>Frontend Focused Web Developer</b> building and managing
            the Front-end of Websites and Web Applications that leads to the
            success of the overall product. Check out some of my work in the{' '}
            <b>Projects</b> section.
          </p>
          <br />
          <p className=' text-lg'>
            I also like sharing content related to the stuff that I have learned
            over the years in <b>Web Development</b> so it can help other people
            of the Dev Community. Feel free to Connect or Follow me on my{' '}
            <u>LinkedIn</u> and <u>Instagram</u> where I post useful content
            related to Web Development and Programming
          </p>
          <br />
          <p className=' text-lg'>
            I'm open to <b>Job</b> opportunities where I can contribute, learn
            and grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to <b>contact</b> me.
          </p>
          <br />
          <div className='pb-32'>
            <button className='btn btn-primary text-white w-[10vw]'>
              CONTACT
            </button>
          </div>
        </div>
        <div data-aos='fade-left'>
          <h1 className='font-bold text-2xl py-10'>My Skills</h1>
          <div className='flex gap-5'>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[100px] text-lg text-gray-500 font-semibold tracking-wide'>
              HTML
            </h1>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[150px] text-lg text-gray-500 font-semibold tracking-wide'>
              Tailwind CSS
            </h1>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[140px] text-lg text-gray-500 font-semibold tracking-wide'>
              JavaScript
            </h1>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[140px] text-lg text-gray-500 font-semibold tracking-wide'>
              TypeScript
            </h1>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[100px] text-lg text-gray-500 font-semibold tracking-wide'>
              Github
            </h1>
          </div>
          <div className='pt-5 flex gap-5'>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[100px] text-lg text-gray-500 font-semibold tracking-wide'>
              React
            </h1>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[200px] text-lg text-gray-500 font-semibold tracking-wide'>
              Responsive Design
            </h1>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[100px] text-lg text-gray-500 font-semibold tracking-wide'>
              Next.js
            </h1>
            <h1 className='border bg-base-200 rounded-lg flex items-center justify-center h-[50px] w-[100px] text-lg text-gray-500 font-semibold tracking-wide'>
              Prisma
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
