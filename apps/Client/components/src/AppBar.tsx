"use client"
import { useEffect, useState } from "react";
import { CirculerBtn } from "./CirculerBtn";
export const AppBar = () => {
    const [isHidden, setIsHidden] = useState(false); // Track navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Store last scroll position

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY > lastScrollY) {
            // Scrolling Down
            setIsHidden(true);
          } else {
            // Scrolling Up
            setIsHidden(false);
          }
    
          setLastScrollY(currentScrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [lastScrollY]); // Dependency on lastScrollY
    
    return (
        <nav
        className={`fixed top-0 left-0 w-full transition-transform duration-700 ease-in-out backdrop-blur-lg  bg-transparent  shadow-md z-10 ${
            isHidden ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div id="navBar" className="flex justify-between items-center px-4 pt-4">
          <div id="cleven_logo">
            <img src="./Cleven removeBg.png" alt="cleven.studio" className="h-16 object-cover cursor-pointer" />
          </div>
          <ul id="anchor_links" className="flex items-center gap-14 text-[#D9D9D9]">
            <a href="#" className="text-[1.1rem] hover:scale-[1.1] transition duration-200 ease-in-out">Home</a>
            <a href="#" className="text-[1.1rem] hover:scale-[1.1] transition duration-200 ease-in-out">Services</a>
            <a href="#" className="text-[1.1rem] hover:scale-[1.1] transition duration-200 ease-in-out">Help</a>
            <a href="#" className="text-[1.1rem] hover:scale-[1.1] transition duration-200 ease-in-out">Insight’s</a>
            <CirculerBtn className="bg-[#D9D9D9] mr-3 text-black text-[1rem] cursor-pointer font-semibold w-20 h-8 rounded-3xl transition duration-400 ease-in hover:bg-black hover:text-white">
              Join Us
            </CirculerBtn>
          </ul>
        </div>
      </nav>
    )
}