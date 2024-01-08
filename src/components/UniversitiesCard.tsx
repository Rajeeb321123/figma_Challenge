import { Banknote, BookType, CalendarDays, GraduationCap, MapPin } from "lucide-react"


export default function UniversitiesCard() {
    const universitiesCardItems = [
        {
            number: "LAKE TAHOE COLLEGE",
            loacation: "California, USA",
            time: "1 - 8 months",
            cost: "$3755 USD / per Year",
            language: "English as seconday language",

        },
        {
            number: "LAKE TAHOE COLLEGE",
            loacation: "California, USA",
            time: "1 - 8 months",
            cost: "$3755 USD / per Year",
            language: "English as seconday language"
        },
        {
            number: "LAKE TAHOE COLLEGE",
            loacation: "California, USA",
            time: "1 - 8 months",
            cost: "$3755 USD / per Year",
            language: "English as seconday language"
        },


    ]
    return (

        <>
            {universitiesCardItems.map((item, index) =>
            (
                <div
                    key={index}
                    className="h-auto w-full  bg-blue-400 flex flex-col items-center justify-between  border-blue-700 border rounded-xl transition-all  overflow-hidden "
                >
                    <div
                        className="rounded-b-xl bg-white w-full h-36 flex items-center justify-center"
                    >

                        <GraduationCap className="h-12 w-12 text-blue-400 rounded-full" />
                    </div>

                    <div
                        className="h-80 flex flex-col w-full gap-10 items-start pl-4 pt-10 font-semibold  px-4"
                    >

                        <div
                            className="leading-none text-xl text-white text-start items-start"
                        >
                            {item.number}
                        </div>

                        <div
                            className="flex flex-col gap-1"
                        >
                            <div
                                className=" flex flex-row gap-3 justify-start items-centerleading-none text-md text-white/70 text-start items-center"
                            >
                                <MapPin className="h-4 w-4" />
                                <span>{item.loacation}</span>
                            </div>
                            <div
                                className=" flex flex-row gap-3 justify-start items-centerleading-none text-md text-white/70 text-start items-center"
                            >
                                <CalendarDays className="h-4 w-4" />
                                <span>{item.time}</span>
                            </div>
                            <div
                                className=" flex flex-row gap-3 justify-start items-centerleading-none text-md text-white/70 text-start items-center"
                            >
                                <Banknote className="h-4 w-4" />
                                <span>{item.cost}</span>
                            </div>
                            <div
                                className=" flex flex-row gap-3 justify-start items-centerleading-none text-md text-white/70 text-start items-center"
                            >
                                <BookType className="h-4 w-4" />
                                <span>{item.language}</span>
                            </div>
                        </div>

                        <button
                            className='text-xl justify-self-center  mx-auto bg-white text-blue-400 px-4 py-2 w-40 rounded-xl mr-auto'
                        >
                            Learn more
                        </button>

                    </div>
                </div>
            ))}
        </>
    )
}
