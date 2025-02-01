"use client"
import { CirculerBtn } from "./CirculerBtn";


export const AppBar = () => {
    return (
     <nav>
         <div id="navBar" className="flex justify-between items-center" >
             <div id="cleven_logo" className="">
                <img src="./Cleven removeBg.png" alt="cleven.studio" className=" h-20 object-cover" />
              </div>
              <ul id="anchor_links" className="flex gap-10 text-lg " >
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Help</a>
                <a href="#">Insight’s </a>
                <p>this is new</p>
                <CirculerBtn>Join Us</CirculerBtn>
             </ul>
         </div>
     </nav>
    )
}