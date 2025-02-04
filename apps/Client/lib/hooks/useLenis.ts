import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust for smoother or faster scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      syncTouch: true, // Ensure touch devices work fine
      lerp: 0.1, // Adjust for smoother scrolling
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup when component unmounts
    };
  }, []);
}