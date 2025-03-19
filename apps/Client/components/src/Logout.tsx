"use client";

import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";

export default function Home() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-zinc-800">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="bg-zinc-800/50 p-4 rounded-full">
              <LogOut className="w-12 h-12 text-zinc-400" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-zinc-100">
                Logged Out Successfully
              </h1>
              <p className="text-zinc-400">
                You have been logged out from Cleven.Studio
              </p>
            </div>

            <div className="w-full space-y-4">
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-zinc-600 transition-all duration-1000 ease-linear"
                  style={{ width: `${(countdown / 5) * 100}%` }}
                />
              </div>
              
              <p className="text-zinc-500">
                Redirecting in <span className="text-zinc-300 font-semibold">{countdown}</span> seconds...
              </p>
            </div>

            <button 
              className="mt-4 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => window.location.href = "/"}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}