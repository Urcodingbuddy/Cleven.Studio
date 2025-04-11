"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services does Cleven.studios offer?",
    answer: "We offer a range of services, including website maintenance & support, SEO optimization, website speed optimization, bug fixing & debugging, content management for e-commerce, and social media integration. Our goal is to provide startups and businesses with high-quality yet affordable web solutions.",
  },
  {
    question: "What is Cleven.studios' refund policy?",
    answer: "We offer a 7-day refund policy on all our service packages. If you're not satisfied with our service within the first 7 days, you can request a full refund. However, refunds are not applicable once the project is completed or delivered. For more details, please check our refund policy page",
  },
  {
    question: "How does the pricing work for your packages?",
    answer: "Our packages come in Basic, Standard, and Premium plans to suit different needs and budgets. We also provide Add-On features for extended services. Pricing is transparent, and you only pay for what you need..",
  },
  {
    question: "Can I customize a package based on my requirements?",
    answer: "Absolutely! While our pre-built packages cover most needs, we understand that every business is unique. You can customize a package or opt for Add-On services to get exactly what you need.",
  },
  {
    question: "How do I get started with Cleven.studios?",
    answer: "You can sign up on our website and log in to your dashboard. From there, you can manage your services, choose a package, track your project progress, and access support. Our team will assist you every step of the way to ensure a smooth experience.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Frequently Asked Questions&apos;s
          </h1>
          <p className="text-gray-400 text-sm sm:text-md md:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-2 sm:px-0">
            Find answers to commonly asked questions about our services and processes.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden transition-colors duration-500 hover:border-white/30 hover:bg-white/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full cursor-pointer flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 text-left"
                >
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold pr-4 sm:pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0 cursor-pointer p-1.5 sm:p-2 rounded-full transition-colors duration-300 hover:bg-white/10">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 transition-transform duration-300 transform rotate-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 transition-transform duration-300 transform rotate-0" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                    isOpen ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
                  }`}
                >
                  <div className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default FAQ;