"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center mb-2 p-4">
      <div className="text-center">
        <div className="relative">
          <h1 className="text-[12rem] md:text-[20rem] font-bold text-transparent bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="mt-[-2rem] relative z-10">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-4">
            Oops, page not found
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
          It looks like the page you're searching for has either moved or never existed. But don’t worry, you’re not lost—we’re here to guide you back. Click the button below to return home or explore other parts of our site!
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}