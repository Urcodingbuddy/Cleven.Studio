"use client";

import { Check, X, Twitter } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import { useState } from "react";
import { useEffect } from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "#" },
];

const plans = [
  {
    name: "Basic",
    price: "$59/m",
    yearlyPrice: "$632.7/y",
    features: [
      "Website Health Check",
      "Backup Services",
      "Content Updates",
      "Support: Unlimited email and chat support, plus 2 hours of call support",
      "Bug Fixing Minor fixes",
      "Basic Security Monitoring",
      "Basic SEO Review: Monthly review of SEO status with simple suggestions",
    ],
  },
  {
    name: "Standard Plan",
    price: "$79/m",
    yearlyPrice: "$853.2/y",
    features: [
      "Bi-Weekly Website Health Check",
      "Backup Services: Bi-weekly backups with automated recovery",
      "Content Updates",
      "Support: Unlimited email/chat support, plus 6 hours of call support",
      "Priority Bug Fixing & Debugging",
      "Performance Optimization: Speed improvements (caching, image compression)",
      "Enhanced Security Monitoring: Regular malware checks and patching",
      "Monthly Performance Report",
      "Basic SEO Optimization",
      "Uptime Monitoring: 24/7 website uptime monitoring",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$99/m",
    yearlyPrice: "$1069.2/y",
    features: [
      "Weekly Website Health Check",
      "Backup Services: Weekly backups with automatic failover",
      "Content Updates",
      "Support: Unlimited email/chat support and 10 hours of call support",
      "Advanced Bug Fixing & Debugging",
      "Advanced Performance Optimization: Database cleaning, advanced caching, CDN integration",
      "Security Monitoring & Protection: Firewall setup, regular malware scans, and advanced protection",
      "SEO Improvements: On-page SEO updates, meta tags, keyword optimization",
      "Uptime Monitoring",
      "Quarterly Strategy Consultation: 1-hour consultation to review website performance and plan future improvements",
    ],
  },
];

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  function cn(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Main Content */}
        <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-8xl font-bold tracking-tight mb-16 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-fade-in"
              style={{ animation: "fadeSlideUp 0.8s ease-out both" }}
            >
              Pricing
            </h1>
          </div>

          {/* Pricing Toggle */}
          <div
            className="flex justify-center items-center space-x-4 mb-16"
            style={{ animation: "fadeSlideUp 0.8s ease-out 0.2s both" }}
          >
            <span
              className={cn(
                "transition-colors duration-300",
                !isYearly && "text-white"
              )}
            >
              Bill Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300",
                isYearly ? "bg-white" : "bg-gray-700"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-black transition-transform duration-300",
                  isYearly ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span
              className={cn(
                "transition-colors duration-300",
                isYearly && "text-white"
              )}
            >
              Bill Yearly
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-2xl backdrop-blur-xl p-8 transform transition-all duration-300 hover:scale-105",
                  plan.featured
                    ? "bg-white/10 border border-white/20"
                    : "bg-white/5 border border-white/10"
                )}
                style={{
                  animation: `fadeSlideUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="mb-8">
                  <h3 className="text-lg font-medium">{plan.name}</h3>
                  <p className="mt-4 text-4xl font-bold transition-all duration-300">
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </p>
                  {isYearly && (
                    <p className="mt-2 text-sm text-gray-400">
                      Save up to 10% with yearly billing
                    </p>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2"
                      style={{
                        animation: `fadeSlideIn 0.5s ease-out ${index * 0.2 + featureIndex * 0.1}s both`,
                      }}
                    >
                      <Check className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10">
          <div
            className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
            style={{ animation: "fadeSlideUp 0.8s ease-out 0.6s both" }}
          >
            <div className="flex justify-center space-x-6">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function customUseEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
