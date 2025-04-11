import { GlowCards } from "./GlowCards"

export const EssentialSection = () => {
   return (
      <>
         <section >
{/* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 */}

            <div id="Essential" className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto w-full" >
               <div id="essential_text" className="w-full mb-16 px-4" >
                  <div className="bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                  <h1 className="">Everything you need.</h1>
                  <h2 className="">Nothing you don't</h2>
                  </div>
                  <p className="text-sm sm:text-md md:text-lg lg:text-xl font-medium pt-7" >
                     <span className="text-gray-500" >Effortless website management and optimization in one place.</span> <br />
                     <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
                     Experience tailored solutions that simplify every aspect of your <br />
                     online presence.
                     </span>
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