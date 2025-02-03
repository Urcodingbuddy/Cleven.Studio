"use client"

import { CirculerBtn } from "./CirculerBtn";

export const AppBar = () => {
    return (
     <nav>
         <div id="navBar" className="flex justify-between items-center px-5 py-6" >
             <div id="cleven_logo">
                <img src="./Cleven removeBg.png" alt="cleven.studio" className=" h-16 object-cover cursor-pointer " />
              </div>
              <ul id="anchor_links" className="flex items-center gap-14  text-[#D9D9D9]" >
                <a href="#" className="text-[1.1rem] hover:scale-[1.1] transition duration-200 ease-in-out active:scale-[1] " >Home</a>
                <a href="#" className="text-[1.1rem] hover:scale-[1.1] transition duration-200 ease-in-out active:scale-[1] " >Services</a>
                <a href="#" className="text-[1.1rem] hover:scale-[1.1] transition duration-200 ease-in-out active:scale-[1] " >Help</a>
                <a href="#" className="text-[1.1rem] hover:scale-[1.1] transition duration-200 ease-in-out active:scale-[1] " >Insight’s </a>
                <CirculerBtn className="bg-[#D9D9D9] text-black text-[1rem] cursor-pointer font-semibold w-20 h-8 rounded-3xl  transition duration-200 ease-in hover:bg-black hover:text-white hover:border-1 active:scale-[0.95] border-white " >Join Us</CirculerBtn>
             </ul>
         </div>
     </nav>
    )
}