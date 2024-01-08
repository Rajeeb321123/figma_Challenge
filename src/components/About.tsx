import { BrainCircuit } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


export default function About() {

  return (
    <section>

      <div
        className='grid grid-cols-2 w-full gap-20'
      >
        <div className='col-span-1'>
          <Image
            alt=''
            src='/about.png'
            height={800}
            width={800}
            className='rounded-xl'
          />
        </div>
        <div className='col-span-1 '>
          <div className="text-blue-600 font-bold text-6xl text-start">
            About us
          </div>

          <div
            className='mt-8  justify-items-start grid grid-rows-2 gap-10 content-center '
          >
            <div className="row-span-1 rounded-xl h-auto w-full border-2  border-blue-400">
              <div
                className='flex gap-5 items-center justify-start p-4'
              >
                <BrainCircuit className='h-8 w-8 text-orange-500' />
                <div
                  className='flex-1 flex-col justify-between '
                >
                  <div
                    className='text-xl text-blue-500 font-bold text-start'
                  >
                    Connecting Future
                  </div>
                  <div
                    className='text-md font-semibold text-start  text-gray-500'
                  >
                    Right trail leads students and Universities to academics success
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1 rounded-xl h-auto w-full border-2  border-blue-400">
              <div
                className='flex gap-5 items-center justify-start p-4'
              >
                <BrainCircuit className='h-8 w-8 text-orange-500' />
                <div
                  className='flex-1 flex-col justify-between '
                >
                  <div
                    className='text-xl text-blue-500 font-bold text-start'
                  >
                    Connecting Future
                  </div>
                  <div
                    className='text-md font-semibold text-start  text-gray-500'
                  >
                    Right trail leads students and Universities to academics success
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1 rounded-xl h-auto w-full border-2  border-blue-400">
              <div
                className='flex gap-5 items-center justify-start p-4'
              >
                <BrainCircuit className='h-8 w-8 text-orange-500' />
                <div
                  className='flex-1 flex-col justify-between '
                >
                  <div
                    className='text-xl text-blue-500 font-bold text-start'
                  >
                    Connecting Future
                  </div>
                  <div
                    className='text-md font-semibold text-start  text-gray-500'
                  >
                    Right trail leads students and Universities to academics success
                  </div>
                </div>
              </div>
            </div>
           


          </div>

        </div>
      </div>

    </section>
  )
}
