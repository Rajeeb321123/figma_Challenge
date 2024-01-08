import { CircleUserRound } from "lucide-react"

export default function IntroCard() {

    const introCardItems = [
        {
            number: 500,
            title: "Users"
        },
        {
            number: 100,
            title: "Institutions"
        },
        {
            number: 80,
            title: "Counselers"
        }
    ]
    return (

        <>
            {introCardItems.map((item, index) =>
            (<div
                key={index}
                className="bg-blue-600/70 rounded-3xl "
            >
                <div
                    className="h-36 w-36  bg-white flex flex-col items-center justify-between p-6   hover:translate-x-1 hover:-translate-y-1 border-2 border-blue-600/70 rounded-3xl cursor-pointer transition-all"
                >
                    <div>
                        <CircleUserRound className="h-12 w-12 text-blue-400 rounded-full" />
                    </div>

                    <div
                        className="flex flex-col w-full gap-1 justify-center font-semibold "
                    >

                        <div
                            className="leading-none text-xl text-blue-400 text-center items-center"
                        >
                            {item.number}+
                        </div>
                        <div
                            className="leading-none"
                        >
                            {item.title}
                        </div>
                    </div>
                </div>
            </div>))}
        </>
    )
}
