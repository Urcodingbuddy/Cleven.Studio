import { GlowCards } from "./Glow-Cards.js"
import React from "react";
export const EssentialSection = () => {
   return (
      <>
         <section >


            <div id="Essential" className="text-white h-screen  h-min-screen max-w-7xl mx-auto w-full my-48" >
               <div id="essential_text" className="w-full mb-16" >
                  <h1 className="text-5xl font-bold ">Everything you need.</h1>
                  <h2 className="text-5xl font-bold">Nothing you don't</h2>
                  <p className="text-xl mt-7 " >
                     <span className="text-gray-500" >Effortless website management and optimization in one place.</span> <br />
                     Experience tailored solutions that simplify every aspect of your <br />
                     online presence.
                  </p>
               </div>

               <div id="Elements" className="text-center" >
                  <GlowCards />
               </div>
            </div>
         </section>
      </>
   )
}