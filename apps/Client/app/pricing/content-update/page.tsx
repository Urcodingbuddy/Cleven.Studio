"use client";
import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { AppBar } from "@repo/components/AppBar";
import Footer from "@repo/components/Footer";

export default function WebMaintenance() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: isYearly ? "$421.2" : "$39",
      features: [
        "Product Management (Add or update up to 20 products monthly)",
        "Backup of website content after updates (once a month)",
        "2 minor design tweaks (like changing button colours or font sizes) per month",
        "Monthly performance report on content engagement",
        "Product Management (Add or update up to 20 products monthly)",
        "Email support for content-related queries",
      ],
      buttonVariant: "outline" as const,
    },
    {
      name: "Standard",
      price: isYearly ? "$637.2" : "$59",
      features: [
        "Product Management (Add or update up to 100 products monthly)",
        "Monthly performance report with actionable recommendations",
        "Integration of SEO best practices for updates",
        "Social media sharing of updated content on 2 platforms",
        "Content calendar for planned updates (quarterly)",
        "1 blog post writing (up to 500 words) per month",
        "Graphic design support for visual content updates (up to 2 graphics/month)",
        "Priority email support with a response within 24 hours",
      ],
      buttonVariant: "default" as const,
      popular: true,
      savings: isYearly ? "Save $20" : null,
    },
    {
      name: "Premium",
      price: isYearly ? "$853.2" : "$79",
      features: [
        "Product Management (Unlimited product updates and inventory management.)",
        "Content Updates (Weekly updates on banners, promotions, and new product lines).",
        "Monthly performance report with in-depth analytics and actionable insights",
        "SEO optimization for all updates",
        "Social media promotion of updated content (up to 3 platforms)",
        "Dedicated content manager for personalised support",
        "2 blog posts writing (up to 500 words each) per month",
        "Graphic design support for visual content updates (up to 4 graphics/month)",
        "Content calendar with strategic recommendations",
        "Priority email support with a response within 12 hours",
      ],
      buttonVariant: "outline" as const,
      savings: isYearly ? "Save $40" : null,
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-black to-black text-white overflow-x-hidden">
      <main className="container mx-auto pt-16 md:pt-24 lg:pt-32 pb-16 px-4">
        <AppBar />
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-8xl lg:text-[150px] font-bold leading-none text-transparent bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text tracking-tighter">
            Pricing
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/65">
            Choose the perfect plan for your needs
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          <span
            className={`text-xs md:text-sm font-medium ${!isYearly ? "text-white" : "text-gray-400"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 md:h-7 w-11 md:w-12 items-center rounded-full bg-white/30 transition-colors hover:bg-white/50"
          >
            <span
              className={`inline-block h-4 md:h-5 w-4 md:w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-xs md:text-sm font-medium ${isYearly ? "text-white" : "text-gray-400"}`}
          >
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
              className={`relative rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-b from-white/15 to-black border-white/50"
                  : "bg-white/5 border-white/10"
              } backdrop-blur-xl border p-6 md:p-8 overflow-hidden group hover:border-white/50 transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/5 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  BEST VALUE
                </div>
              )}

              {/* Gradient Orb */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-300 ${
                  plan.popular ? "bg-white/25" : "bg-white/10"
                } group-hover:opacity-75`}
              />

              <div className="relative">
                <h3 className="text-sm text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-3xl md:text-4xl font-bold mb-6">
                    {plan.price}
                  </div>
                  {plan.price !== "Free" && (
                    <div className="text-xs md:text-sm text-gray-400">
                      {isYearly ? "/year" : "/month"}
                    </div>
                  )}
                </div>
                {plan.savings && (
                  <div className="text-xs md:text-sm text-white mb-6">
                    {plan.savings}
                  </div>
                )}

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-300"
                    >
                      <Check
                        className={`w-4 h-4 md:w-5 md:h-5 shrink-0 ${plan.popular ? "text-white" : "text-white/65"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2.5 md:py-3 px-4 rounded-full text-sm md:text-base cursor-pointer font-medium transition-all duration-200 ${
                    plan.buttonVariant === "default"
                      ? "bg-white/10 text-white hover:bg-white/20"
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
      <Footer />
    </div>
  );
}
