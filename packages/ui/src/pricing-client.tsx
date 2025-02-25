"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free Plan",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    features: [
      "Send up to 3 transfers per month",
      "Basic transaction history",
      "Email support",
      "Limited currency support (USD, EUR, GBP)",
      "Basic security features",
    ],
  },
  {
    name: "Standard Plan",
    monthlyPrice: "$9.99/m",
    yearlyPrice: "$99.99/y",
    features: [
      "Unlimited transfers",
      "Transaction history with export options",
      "Priority email support",
      "Expanded currency support",
      "Advanced security features",
    ],
    popular: true,
  },
  {
    name: "Pro Plan",
    monthlyPrice: "$19.99/m",
    yearlyPrice: "$199.99/y",
    features: [
      "Unlimited transfers with priority processing",
      "Comprehensive transaction analytics",
      "24/7 priority support",
      "Full currency support",
      "Enhanced security features",
    ],
  },
];

export default function PricingClient() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <button
          onClick={() => setIsYearly(false)}
          className={`text-sm font-medium transition-colors ${!isYearly ? "text-white" : "text-gray-500"}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="relative w-12 h-6 rounded-full bg-white/10 transition-colors"
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
              isYearly ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`text-sm font-medium transition-colors ${isYearly ? "text-white" : "text-gray-500"}`}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl bg-white/5 backdrop-blur-xl border ${
              plan.popular ? "border-white/20" : "border-white/10"
            } p-8 hover:border-white/30 transition-all duration-300 group`}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity blur-xl" />
            
            {/* Content */}
            <div className="relative">
              <h3 className="text-sm text-gray-400 mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 shrink-0 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-full font-medium transition-all ${
                  plan.popular
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}