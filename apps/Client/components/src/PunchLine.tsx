import { BackgroundBeamsWithCollision } from "../../@/components/ui/background-beams-with-collision";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
export const PunchLine = () => {
    return (
    
        <div className="mt-24 md:mt-60 text-center w-[90vw] mx-auto relative">

            <h1 className=" text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 mb-10">
                Unleashing the Power of Performance <br /> to Make Your Website Invincible.</h1>
                <div>
                <p className={`text-zinc-400 text-xl leading-8 font-medium mb-20`}>Say goodbye to messy website management. Cleven Studios makes maintaining, <br/> optimizing, and enhancing your site effortless. Reliable. Scalable. Stress-free. <br /> Simple. Intuitive. And never boring.</p>
                <div className="h-28 flex flex-col items-center group cursor-pointer ">
                <p className="text-md font-semibold text-zinc-400 hover:font-bold "><a href="./Services">Learn more</a></p>
                <ArrowDown className="group-hover:translate-y-2 text-white duration-500 transition-transform "/>
                </div>
                </div>
        </div>
    
    )
}