

import Link from "next/link";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import NavItems from "./NavItems";




const Navbar = () => {

    

    return (
        <nav
            className="
            sticky h-20 inset-x-0 top-0  w-full   backdrop-blur-lg transition-all bg-blue-400 z-50
        "
        >
            <MaxWidthWrapper>
                <div
                    className="
                flex h-20 items-center justify-between 
                "
                >
                    <div
                        className="flex items-center justify-between gap-16"
                    >
                        <Link
                            href='/'
                            className=" flex z-40 font-semibold"
                        >
                            <Image
                                alt="Right Trails"
                                height={30}
                                width={300}
                                src='/logo.png'


                            />
                        </Link>
                        <div
                            className='flex gap-4 justify-between text-xl text-center items-center text-white'
                        >
                            <NavItems/>
                        </div>
                    </div>

                    <div
                        className=" items-center space-x-4 flex text-blue-400"
                    >
                        <div
                            className='flex gap-4'
                        >
                            <button className=" text-xl bg-white px-4 py-2 w-40 rounded-full">
                                Login
                            </button>
                            <button className=" text-xl bg-white px-4 py-2 w-40 rounded-full">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;