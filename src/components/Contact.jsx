'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='flex items-center justify-center flex-col pt-[100px] min-h-screen'>
      <Image
        src={'/1.png'}
        alt='logo'
        width={10000}
        height={10000}
        priority={true}
        quality={100}
        className='h-[140vh] w-full object-cover'
      />
      <div className='absolute flex items-center justify-center flex-col'>
        <span
          data-aos='fade-up'
          className='text-4xl tracking-widest font-bold pb-5'
        >
          CONTACT
        </span>
        <hr
          data-aos='fade-up'
          className='w-[5vw] border-b-8 border-b-indigo-500'
        />
        <span data-aos='fade-up' className='py-10 text-xl w-[40vw] text-center'>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </span>
        <div data-aos='fade-up' className='w-full h-full bg-white'>
          <form
            noValidate=''
            className='w-full p-8  space-y-6 rounded-lg shadow'
          >
            <div>
              <label
                htmlFor='name'
                className='block mb-1 ml-1 font-semibold py-2'
              >
                Name
              </label>
              <input
                id='name'
                type='text'
                placeholder='Enter Your Name'
                required=''
                className='block w-full h-[70px] p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-1 ml-1 font-semibold py-2'
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                placeholder='Enter Your Email'
                required=''
                className='block w-full h-[70px] p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block mb-1 ml-1 font-semibold py-2'
              >
                Message
              </label>
              <textarea
                id='message'
                type='text'
                placeholder='Enter Your Message'
                className='block w-full p-2 h-[250px] rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100'
              ></textarea>
            </div>
            <div className='flex items-end justify-end'>
              <button
                type='submit'
                className='px-4 py-2 w-[10vw] h-[5vh] text-xl font-bold rounded shadow btn btn-primary text-white'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
