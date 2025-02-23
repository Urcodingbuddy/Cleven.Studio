"use client";
import InputBox from "@repo/ui/inputBox"
import { ArrowRight } from "lucide-react";
import { GoogleBtn } from "@repo/ui/googleBtn";
import AnimatedGradientBackgroud from "@repo/ui/gradientBg";
import Link from "next/link";
import { GithubBtn } from "@repo/ui/githubBtn";

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
            <p className="text-gray-400 text-sm">
              Already have account{" "}
              <Link href="/signin" className="text-white underline hover:text-gray-200">
                Sign in
              </Link>
            </p>
          </div>



          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <InputBox
                placeholder={"Fisrt name*"}
                type={"text"}
                onChange={function (value: string): void {
                  throw new Error("Function not implemented.");
                }}
              />

              <InputBox
                placeholder={"Last name*"}
                type={"text"}
                onChange={function (value: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>


            <InputBox
              placeholder={"Email Address*"}
              type={"email"}
              onChange={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
            />

            <InputBox
              placeholder={"Password*"}
              type={"Password"}
              onChange={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
            />

            <InputBox
              placeholder={"Confirm Password*"}
              type={"Password"}
              onChange={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
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
              <div className="w-1/2 border-t border-white/10"></div>
              <span className="px-2  text-gray-400">OR</span>
              <div className="w-1/2 border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
            </div>
          </div>


          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
          <GoogleBtn /><GithubBtn/>
          </div>
        </div>
      </div>
    </main>
  );
}
