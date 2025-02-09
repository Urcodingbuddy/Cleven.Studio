"use client";

import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-b-lg bg-white blur-[100px]  "></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-b-lg bg-white blur-[100px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-md space-y-8 relative">
        {/* Glass card */}
        <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl shadow-2xl border border-white/10">
        {/* Logo */}
        <div className="flex justify-center mb-2">
            <div className="relative">
            <a href="/">
            <img src="./Cleven removeBg.png" alt="cleven.studio" className="h-16 object-cover cursor-pointer" />
            </a>
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
            </div>
          </div>

          <div className="text-center space-y-2 mb-1">
            <h1 className="text-2xl font-semibold text-white"></h1>
            <p className="text-xl font-semibold text-white">
            Orchestrating Solutions Beyond the Obvious!{" "}</p>
          </div>


          <div className="text-center space-y-2 mb-5">
            <h1 className="text-2xl font-semibold text-white"></h1>
            <p className="text-gray-300 text-sm">
            Already have account{" "}
              <a href="/signin" className="text-white underline hover:text-gray-200">
                Sign in
              </a>
            </p>
          </div>



          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name*"
                  className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name*"
                  className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
                />
              </div>
            </div>
            
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
            />
            
            <input
              type="password"
              placeholder="Password*"
              className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
            />
            
            <input
              type="password"
              placeholder="Confirm password*"
              className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
            />

            <button
              type="submit"
              className="w-full bg-[#1c1c1c] hover:bg-[#2c2c2c] text-white font-medium py-3 rounded-xl cursor-pointer transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Sign up</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
            </div>
          </div>


          {/* Social Logins */}
          <div className="space-y-3 mt-8">  
            <button
              type="button"
              className="w-full flex justify-center cursor-pointer items-center px-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/5 text-white hover:bg-[#2c2c2c] transition-colors"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-3"
              />
              <span> Continue with Google</span>
            </button>
            
          </div>
        </div>
      </div>
    </main>
  );
}
