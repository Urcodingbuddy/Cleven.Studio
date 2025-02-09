"use client";

import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] rounded-b-lg bg-white blur-[100px] "></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px]  bg-white blur-[100px]"></div>
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#0c0c0c] blur-[100px] animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="w-full max-w-md space-y-8 relative">

        <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl shadow-2xl border border-white/10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
            <a href="/">
            <img src="./Cleven removeBg.png" alt="cleven.studio" className="h-16 object-cover cursor-pointer" />
            </a>
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
            </div>
          </div>

          <div className="text-center space-y-2 mb-8">
            <h1 className="text-2xl font-semibold text-white">Yoo, Welcome back!</h1>
            <p className="text-gray-300 text-sm">
              First time here?{" "}
              <a href="/signup" className="text-white underline hover:text-gray-200">
                Sign up
              </a>
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400  focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="w-full bg-[#1c1c1c] hover:bg-[#2c2c2c] text-white font-medium py-3 rounded-xl cursor-pointer transition-colors flex items-center justify-center space-x-2 group"
            >
              Sign In
              <ArrowRight className=" ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>


          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2  text-gray-400">OR</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl cursor-pointer backdrop-blur-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with google</span>
          </button>
        </div>
      </div>
    </main>
  );
}