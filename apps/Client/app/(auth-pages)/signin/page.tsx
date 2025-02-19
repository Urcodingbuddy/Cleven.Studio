"use client";
import InputBox from "@repo/ui/inputBox"
import { ArrowRight } from "lucide-react";
import { GoogleBtn } from "@repo/ui/googleBtn";
import AnimatedGradientBackgroud from "@repo/ui/gradientBg";

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      {/* Animated gradient background */}
      <AnimatedGradientBackgroud/>

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
            <InputBox
              placeholder={"email*"}
              type={"email"}
              onChange={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
            >
            </InputBox>

            <InputBox
              placeholder={"password*"}
              type={"password"}
              onChange={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
            >
            </InputBox>

            <button
              type="submit"
              className="w-full bg-[#1c1c1c] hover:bg-[#2c2c2c] text-white font-medium py-3 rounded-xl cursor-pointer transition-colors flex items-center justify-center space-x-2 group"
            >
              Sign In
              <ArrowRight className=" ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform " />
            </button>
          </form>


          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-1/2 border-t border-white/10"></div>
              <span className="px-2  text-gray-400">OR</span>
              <div className="w-1/2 border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
            </div>
          </div>

          <GoogleBtn />
        </div>
      </div>
    </main>
  );
}