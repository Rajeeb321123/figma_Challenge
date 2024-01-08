'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"

export default function NavItems() {
    const navbarItems: string[] = ['Students', "Counseler", "Institution"]
    const [activeItem, setActiveItem] = useState<string>("Students")

    return (
        <>
            {navbarItems.map((item) => (
                <div
                    key={item}
                    className={cn(
                        'cursor-pointer capitalize text-white/60 relative after:w-4 after:h-[2px]  after:bg-white/75 after:absolute after:-bottom-1 after:left-0',
                        {'text-white after:w-[100%] after:bg-blue-900 after:transition-all after:duration-300': item === activeItem }
                    )}
                    onClick={() => setActiveItem(item)}
                >
                    {item}
                </div>
            )
            )}
        </>
    )
}
