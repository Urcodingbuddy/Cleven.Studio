import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis(): Lenis | null {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      syncTouch: true,
      lerp: 0.1,
    });

    setLenis(lenisInstance); // ✅ Store Lenis instance in state

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy(); // Cleanup when unmounting
      setLenis(null);
    };
  }, []);

  return lenis; // ✅ Now the hook returns Lenis | null
}
