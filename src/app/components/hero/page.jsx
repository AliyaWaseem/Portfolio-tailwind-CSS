"use client"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 w-full mt-5'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
      <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hi, I am{" "}</span>
        <br></br>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Aliya Waseem',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000,
        'Freelancer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  
        </h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl sm:mr-10 md:mr-0'>
        I am here to help you create amazing websites and applications.</p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mb-4 mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
        </div>
      </div>
      <div className='col-span-5 place-self-center mt-6 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] lg:w-[450px] lg:h-[450px] relative'>
        <Image
          src='/assets/profile-pic.webp'
          alt='Hero Image'
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={500}
          height={300}
        />
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection;