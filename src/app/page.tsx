import About from "@/components/About";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Universities from "@/components/Universities";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <MaxWidthWrapper
        className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center"
      >
        <About />
        <Universities />
      </MaxWidthWrapper>
      <div
        className="w-full h-[700px]"
      >
        <Image
          alt="skill"
          src='/skill.png'
          height={700}
          width={1200}
          className="max-h-[700px] max-w-full w-full h-full"
        />
      </div>
      
      <div
        className="flex flex-row gap-5 mt-32"
      >
        <div className="m-5 p-4 text-6xl flex-1 font-extrabold drop-shadow-xl text-blue-600">
          Subscribe to get Updates
        </div>
        <div
          className="flex flex-row gap-0 justify-center items-center flex-1 m-5 p-4"
        >
          <input type="email" placeholder="Email..." className="flex-1 h-10 text-blue-600 border border-blue-400 rounded-l-xl placeholder:text-blue-400 p-4 focus:border-orange-400 outline-none"/>
          <button type="submit" className="text-2xl w-48 font-bold  bg-gray-400/25 border border-blue-400 rounded-r-xl  h-10 text-blue-600 ">Subscribe</button>
        </div>
      </div>
      <div
        className="mx-5 px-4 text-2xl  text-start font-extrabold drop-shadow-xl text-gray-600"
      >
        Stay in Know!
      </div>
    </>
  )
}
