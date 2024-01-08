

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Facebook, Instagram, Mail } from "lucide-react";



export default function Footer() {
    const footerItems = [
        {
            title: "About",
            items: [
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
            ]
        },
        {
            title: "Services",
            items: [
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
            ]
        },
        {
            title: "Resources",
            items: [
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
            ]
        },
        {
            title: "Get in touch",
            items: [
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
                "rrrr",
            ]
        },
    ] as const

    return (
        <section
            className="w-full h-[400px] bg-blue-400"
        >
            <MaxWidthWrapper
                className="mb-12  flex-col sm:mt-40 flex sm:flex-row  justify-between  "
            >

                <div
                    className=" mt-32  mb-10 flex-1 te flex  gap-3 flex-col justify-start pr-20"
                >
                    <div className=" text-white font-bold text-4xl ">
                        Right Trails
                    </div>
                    <div className="text-white font-medium text-md text-nowrap">
                        your bridge to boundless education
                    </div>
                    <div className="flex flex-row items-center gap-1 ">
                        <Facebook  className=" m-2 h-8 w-8 rounded-full p-1  text-white bg-blue-800"/>
                        <Instagram  className=" m-2 h-8 w-8 rounded-full p-1 text-white bg-red-600"/>
                        <Mail  className=" m-2 h-8 w-8 rounded-full p-1 text-white bg-red-900"/>
                    </div>

                </div>

                {
                    footerItems.map((item, index) => (

                        <React.Fragment key={index}>

                            <div
                                className="flex-1 flex flex-col text-start px-2 gap-3"
                            >

                                <div
                                    className=" mt-32  text-lg text-white font-semibold"
                                >
                                    {item.title}
                                </div>

                                <div
                                    className="flex flex-col justify-start gap-1"
                                >

                                </div>
                                {item.items.map((value, index) => (
                                    <div
                                        key={index}
                                        className=" text-md text-white/70 text-start leading-none"
                                    >
                                        {value}
                                    </div>
                                ))}

                            </div>
                        </React.Fragment>



                    ))
                }

                <div
                    className="flex flex-col justify-start gap-2"
                >

                </div>




            </MaxWidthWrapper>

        </section>
    )
}
