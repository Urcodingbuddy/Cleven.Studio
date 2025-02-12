import { BackgroundBeamsWithCollision } from "../../@/components/ui/background-beams-with-collision";
import { ArrowDown } from "lucide-react";
import { SmoothScrollProvider } from "../../components/src/SmoothScrollProvider";
import useLenis from "../../lib/hooks/useLenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export const PunchLine = () => {
  
  //Lenis for getting scroll down
  const lenis = useLenis(); // ✅ Now it returns Lenis | null
  const handleScroll = () => {
    if (lenis) {
      lenis.scrollTo("#heroMessage_head", {
        duration: 2.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  //Gsap for punchLine




  return (
    <>
      <SmoothScrollProvider /> {/* Ensures smooth scrolling is activated */}
      <div className="pt-32 sm:pt-24 md:pt-32 lg:pt-40 flex flex-col items-center justify-center w-[90vw] mx-auto relative">
        <h1 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 mb-10 text-center max-w-6xl">
          Unleashing the Power of Performance <br /> to Make Your Website Invincible.
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-zinc-400 text-xl leading-8 font-medium mb-20 text-center max-w-3xl">
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
