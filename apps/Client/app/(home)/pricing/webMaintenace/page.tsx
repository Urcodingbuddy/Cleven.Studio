import PricingClient from '@repo/ui/pricing-client'
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <X className="w-6 h-6" />
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#" className="text-sm font-medium text-white">Pricing</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-white/5 rounded-full hover:bg-white/10 transition-all">
              Download
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-[120px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Pricing
          </h1>
        </div>
        <PricingClient />
      </main>
    </div>
  );
}