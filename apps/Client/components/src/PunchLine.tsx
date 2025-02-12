
import { ArrowDown } from "lucide-react";
import { SmoothScrollProvider } from "../../components/src/SmoothScrollProvider";
import useLenis from "../../lib/hooks/useLenis";

export const PunchLine = () => {
  const lenis = useLenis(); // ✅ Now it returns Lenis | null

  const handleScroll = () => {
    if (lenis) {
      lenis.scrollTo("#heroMessage_head", {
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  return (
    <>
      <SmoothScrollProvider /> {/* Ensures smooth scrolling is activated */}
      <div className="pt-24 sm:pt-24 md:pt-32 lg:pt-40 flex flex-col items-center justify-center w-[90vw] mx-auto relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 mb-5 sm:mb-10 text-center max-w-6xl">
          Unleashing the Power of Performance <br /> to Make Your Website Invincible.
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-zinc-400 sm:text-lg md:text-xl font-medium mb-5 sm:mb-16 md:mb-20 sm:max-w-2xl md:max-w-3xl leading-8   text-center max-w-3xl">
            Say goodbye to messy website management. Cleven Studios makes maintaining,
            optimizing, and enhancing your site effortless. Reliable. Scalable. Stress-free.
            Simple. Intuitive. And never boring.
          </p>
          {/* Smooth Scroll Trigger */}
          <div className="h-28 flex flex-col items-center group cursor-pointer" onClick={handleScroll}>
            <p className="text-md font-semibold text-zinc-400 hover:font-bold">Learn More</p>
            <ArrowDown className="group-hover:translate-y-2 text-white duration-500 transition-transform" />
          </div>
        </div>
      </div>
    </>
  );
};
