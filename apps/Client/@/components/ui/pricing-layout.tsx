"use client"

import { Check } from "lucide-react"
import { useState, useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export type PricingPlan = {
  name: string
  price: string
  yearlyPrice: string
  features: string[]
  featured?: boolean
  buttonVariant?: "default" | "outline",
  popular?: boolean,
}

interface PricingLayoutProps {
  title: string
  plans: PricingPlan[]
}

export default function PricingLayout({ title, plans }: PricingLayoutProps) {
  const [isYearly, setIsYearly] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  function cn(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div className="min-h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-black to-black text-white overflow-x-hidden">
      <main className="container mx-auto pt-28 md:pt-24 lg:pt-32 pb-16 px-4">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none text-transparent bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text tracking-tighter">
            {title}
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/65">
            Choose the perfect plan for your needs
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          <span className={`text-xs md:text-sm font-medium ${!isYearly ? "text-white" : "text-gray-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 md:h-7 w-11 md:w-12 items-center rounded-full bg-white/30 transition-colors hover:bg-white/50"
          >
            <span
              className={`inline-block h-4 md:h-5 w-4 md:w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${isYearly ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
          <span className={`text-xs md:text-sm font-medium ${isYearly ? "text-white" : "text-gray-400"}`}>
            Yearly
            <span className="ml-1 md:ml-2 text-[10px] md:text-xs text-white">
              (Save up to 10%)
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${plan.featured ? "bg-gradient-to-b from-white/15 to-black border-white/50" : "bg-white/5 border-white/10"} backdrop-blur-xl border p-6 md:p-8 overflow-hidden group hover:border-white/50 transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="relative">
                <h3 className="text-sm text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-3xl md:text-4xl font-bold mb-6">
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </div>
                
                </div>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-300">
                      <Check className={`w-4 h-4 md:w-5 md:h-5 shrink-0 ${plan.featured ? "text-white" : "text-white/65"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-2.5 md:py-3 px-4 rounded-full text-sm md:text-base cursor-pointer font-medium transition-all duration-200 ${plan.buttonVariant === "default" ? "bg-white/10 text-white hover:bg-white/20" : "bg-white/10 hover:bg-white/20"}`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
