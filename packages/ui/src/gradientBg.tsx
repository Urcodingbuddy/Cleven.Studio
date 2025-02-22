export default function AnimatedGradientBackgroud(){
    return(
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] rounded-b-lg bg-white blur-[100px] "></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px]  bg-white blur-[100px]"></div>
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#0c0c0c] blur-[100px] animate-pulse delay-700"></div>
        </div>
      
    )
}