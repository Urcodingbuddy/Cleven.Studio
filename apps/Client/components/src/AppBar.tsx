"use client"

import { CirculerBtn } from "./CirculerBtn";

export const AppBar = () => {
    return (
     <nav>
         <div id="navBar" className="flex justify-between items-center px-5 py-3" >
             <div id="cleven_logo">
                <img src="./Cleven removeBg.png" alt="cleven.studio" className=" h-20 object-cover" />
              </div>
              <ul id="anchor_links" className="flex items-center text- gap-14 text-[1.1rem] text-[#D9D9D9]" >
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Help</a>
                <a href="#">Insight’s </a>
                <CirculerBtn className="bg-[#D9D9D9] text-black font-semibold w-24 h-10 rounded-3xl" >Join Us</CirculerBtn>
             </ul>
         </div>
     </nav>
    )
}