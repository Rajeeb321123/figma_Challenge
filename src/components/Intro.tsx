"use client"

import Image from 'next/image'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import IntroCard from './introCard'

export default function Intro() {
  return (
    <section
      className='w-full h-[700px] '
    >
      <MaxWidthWrapper className=' relative mb-12 gap-40  flex flex-col items-center justify-between text-center'>
      <Image
        src='/femaleLaptop.png'
        alt='femaleLaptop'
        height={700}
        width={466}
        className='absolute  right-20 top-0'
      />

      <div
        className=' mt-40  text-white flex-col flex gap-8 items-center text-start   mr-auto'
      >
        
        <div className=" flex flex-col gap-3 font-bold text-nowrap mr-auto ">
          <span className='block w-full text-5xl drop-shadow-lg '>Find Your Dream</span>
          <span className=' inline text-2xl drop-shadow-lg'>University with</span>
          <span className=' inline text-6xl font-extrabold drop-shadow-xl '> Right Trails</span>
        </div>

        <div
          className='text-wrap font-semibold whitespace-normal max-w-[400px] mr-auto'
        >
          Right trails assist Students in selecting optimal path by considering skills and interests
        </div>

        <button
        className='text-xl bg-white text-blue-400 px-4 py-2 w-40 rounded-xl mr-auto'
        >
          Join Us
        </button>
        
      </div>

      <div className='flex  gap-10 flex-row mr-auto ml-32'>
        <IntroCard />
      </div>

      </MaxWidthWrapper>
     
    </section>
  )
}
