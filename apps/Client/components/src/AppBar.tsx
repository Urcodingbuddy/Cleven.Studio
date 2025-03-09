"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import useLenis from "../../lib/hooks/useLenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InteractiveHoverButton } from "../../@/components/ui/hoverBtn";
gsap.registerPlugin(useGSAP,ScrollTrigger);




export const AppBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  


  useEffect(() => {
    if (isSidebarOpen) {
      // Prevent scrolling on the body when sidebar is open
      document.body.style.overflow = 'hidden';
      // Store current scroll position
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Re-enable scrolling when sidebar is closed
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

    //Lenis for getting scroll down
    const lenis = useLenis(); // ✅ Now it returns Lenis | null
    const handleScroll = () => {
      if (lenis) {
        lenis.scrollTo("#services_sec", {
          duration: 2.5,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        });
      }
    };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-700 ease-in-out backdrop-blur-lg bg-transparent shadow-md ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>
        <div id="navBar" className="flex justify-between items-center px-6  p-4">
          <div id="cleven_logo">
            <Link href="/">
            <img src="./Cleven removeBg.png" alt="cleven.studio" className="h-10 object-cover cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-14 text-[#D9D9D9]">
            <a href="" className="text-[1.1rem] hover:scale-110 transition duration-200 ease-in-out">Home</a>
            <a href="#" onClick={handleScroll} className="text-[1.1rem] hover:scale-110 transition duration-200 ease-in-out">Services</a>
            <a href="#" className="text-[1.1rem] hover:scale-110 transition duration-200 ease-in-out">Help</a>
            <a href="#" className="text-[1.1rem] hover:scale-110 transition duration-200 ease-in-out">Insight's</a>

            <Link href="/signup">
              <InteractiveHoverButton>
                Join Us
              </InteractiveHoverButton>
            </Link>
          </ul>

          {/* Mobile Menu Button with Animation */}
          <div className="md:hidden fixed top-4 right-4 z-[60] text-[#D9D9D9]">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white focus:outline-none">
              <motion.div animate={{ rotate: isSidebarOpen ? 180 : 0 }}>
                <AnimatePresence mode="wait">
                  {isSidebarOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <X size={32} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Menu size={32} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar - Hidden on md and larger screens */}
      <div
        className={`md:hidden fixed  top-[80px] right-0 left-auto h-[calc(100vh-80px)] border-t w-full backdrop-blur-3xl text-white transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 z-50 shadow-lg`}
      >
        <ul className="flex flex-col h-full items-center justify-evenly text-lg">
          <a href="#" className="hover:scale-110 border-b h-10 text-center transition duration-200" onClick={() => setIsSidebarOpen(false)}>Home</a>
          <a href="#" className="hover:scale-110 border-b h-10 text-center transition duration-200" onClick={() => setIsSidebarOpen(false)}>Services</a>
          <a href="#" className="hover:scale-110 border-b h-10 text-center transition duration-200" onClick={() => setIsSidebarOpen(false)}>Help</a>
          <a href="#" className="hover:scale-110 border-b h-10 text-center transition duration-200" onClick={() => setIsSidebarOpen(false)}>Insight's</a>

          <a href="/signup">
            <InteractiveHoverButton>
              Join Us
            </InteractiveHoverButton>
          </a>
        </ul>
      </div>
    </>
  );
};