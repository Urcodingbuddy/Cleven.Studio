import { BackgroundBeamsWithCollision } from "../../@/components/ui/background-beams-with-collision";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export const PunchLine = () => {
    return (
        <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 flex flex-col items-center justify-center w-[90vw] mx-auto relative">
            <h1 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 mb-10 text-center max-w-6xl">
                Unleashing the Power of Performance <br /> to Make Your Website Invincible.
            </h1>
            <div className="flex flex-col items-center">
                <p className="text-zinc-400 text-xl leading-8 font-medium mb-20 text-center max-w-3xl">
                    Say goodbye to messy website management. Cleven Studios makes maintaining, 
                    optimizing, and enhancing your site effortless. Reliable. Scalable. Stress-free. 
                    Simple. Intuitive. And never boring.
                </p>
                <div className="h-28 flex flex-col items-center group cursor-pointer">
                    <p className="text-md font-semibold text-zinc-400 hover:font-bold">
                        <Link href="./Services">Learn more</Link>
                    </p>
                    <ArrowDown className="group-hover:translate-y-2 text-white duration-500 transition-transform"/>
                </div>
            </div>
        </div>
    );
};