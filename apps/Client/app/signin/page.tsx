"use client";
import { useState } from 'react'
import InputBox from "@repo/ui/inputBox"
import { ArrowRight } from "lucide-react";
import { GoogleBtn } from "@repo/ui/googleBtn";
import Link from "next/link";
import { GithubBtn } from "@repo/ui/githubBtn";
import { useSignIn } from "../../lib/hooks/handleSignin";



export default function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { handleSignIn } = useSignIn();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    handleSignIn(email, password, setError, setLoading);
  };
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
        <div className="backdrop-blur-xl bg-white/5 px-8 pt-8  rounded-3xl shadow-2xl border border-white/10">
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
            <p className="text-gray-400 text-sm">
              First time here?{" "}
              <Link href="/signup" className="text-white underline hover:text-gray-200">
                Sign up
              </Link>
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} >
            <InputBox
              placeholder={"Email Address*"}
              type={"email"}

              onChange={(value) => setEmail(value)}
            >
            </InputBox>

            <InputBox
              placeholder={"Password*"}
              type={"password"}
              onChange={(value) => setPassword(value)}
            >
            </InputBox>

            <button
              type="submit"
              className="w-full bg-[#1c1c1c] hover:bg-[#2c2c2c] text-white font-medium py-3 rounded-xl cursor-pointer transition-colors flex items-center justify-center space-x-2 group"
            >
              {loading ? (
                <div className="mini-loader"></div>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className=" ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform " />
                </>
              )}
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
            <GoogleBtn /><GithubBtn />
          </div>

          <div className="w-full min-h-8 flex justify-center items-center text-red-500">
            {error}
          </div>

        </div>
      </div>
    </main>
  );
}


