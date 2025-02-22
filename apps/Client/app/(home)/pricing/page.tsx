"use client";

import { AppBar } from "@repo/components/AppBar";
import { Check, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      price:isYearly ? "$637" : "$59",
      features: [
        " Site Wellness Check",
        "Secure Backups",
        "Content Updates",
        "Support",
        "Bug Fixing",
        "Basic Security Monitoring",
        "Basic SEO Review",
      ],
      buttonVariant: "outline" as const,
    },
    {
      name: "Standard",
      price: isYearly ? "$853" : "$79",
      features: [
        "Bi-Weekly Website Health Check",
        "Backup Services",
        "Content Updates",
        "Support",
        "Priority Bug Fixing & Debugging",
        "Performance Optimization",
        "Enhanced Security Monitoring",
        "Monthly Performance Report",
        "Basic SEO Optimization",
        "Uptime Monitoring",
      ],
      buttonVariant: "default" as const,
      popular: true,
      savings: isYearly ? "Save $20" : null,
    },
    {
      name: "Premium",
      price: isYearly ? "$1069" : "$99",
      features: [
        "Weekly Website Health Check",
        "Weekly Website Health Check",
        "Content Updates",
        "Support",
        "Advanced Bug Fixing & Debugging",
        "Advanced Performance Optimization",
        "Security Monitoring & Protection",
        "SEO Improvements",
        "Uptime Monitoring",
        "Quarterly Strategy Consultation",
      ],
      buttonVariant: "outline" as const,
      savings: isYearly ? "Save $40" : null,
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900 via-black to-black text-white">
      {/* Navigation */}
      <AppBar />
      <main className="pt-32 pb-16 px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-[150px] font-bold leading-none text-transparent bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text tracking-tighter">
            Pricing
          </h1>
          <p className="mt-6 text-lg text-violet-200">
            Choose the perfect plan for your needs
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`text-sm font-medium ${!isYearly ? "text-white" : "text-gray-400"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-7 w-12 items-center rounded-full bg-violet-900/50 transition-colors hover:bg-violet-900/70"
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${isYearly ? "text-white" : "text-gray-400"}`}
          >
            Yearly
            <span className="ml-2 text-xs text-violet-400">
              (Save up to 10%)
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-b from-violet-900/50 to-black border-violet-500/50"
                  : "bg-white/5 border-white/10"
              } backdrop-blur-xl border p-8 overflow-hidden group hover:border-violet-500/50 transition-all duration-300 hover:scale-105`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  BEST VALUE
                </div>
              )}

              {/* Gradient Orb */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-300 ${
                  plan.popular ? "bg-violet-500/30" : "bg-white/10"
                } group-hover:opacity-75`}
              />

              <div className="relative">
                <h3 className="text-sm text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-4xl font-bold mb-6 ">{plan.price}</div>
                  {plan.price !== "Free" && (
                    <div className="text-sm text-gray-400">
                      {isYearly ? "/year" : "/month"}
                    </div>
                  )}
                </div>
                {plan.savings && (
                  <div className="text-sm text-violet-400 mb-6">
                    {plan.savings}
                  </div>
                )}

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <Check
                        className={`w-5 h-5 shrink-0 ${plan.popular ? "text-violet-400" : "text-white"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-full cursor-pointer font-medium transition-all duration-200 ${
                    plan.buttonVariant === "default"
                      ? "bg-violet-500 text-white hover:bg-violet-600 hover:scale-105"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
