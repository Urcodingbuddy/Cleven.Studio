"use client"

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: "What services does Cleven.studios offer?", answer: "We offer a range of services, including website maintenance & support, SEO optimization, website speed optimization, bug fixing & debugging, content management for e-commerce, and social media integration. Our goal is to provide startups and businesses with high-quality yet affordable web solutions." },
  { question: "What is Cleven.studios’ refund policy?", answer: "We offer a 7-day refund policy on all our service packages. If you’re not satisfied with our service within the first 7 days, you can request a full refund. However, refunds are not applicable once the project is completed or delivered. For more details, please check our refund policy page." },
  { question: "How does the pricing work for your packages?", answer: "Our packages come in Basic, Standard, and Premium plans to suit different needs and budgets. We also provide Add-On features for extended services. Pricing is transparent, and you only pay for what you need.." },
  { question: "Can I customize a package based on my requirements?", answer: "Absolutely! While our pre-built packages cover most needs, we understand that every business is unique. You can customize a package or opt for Add-On services to get exactly what you need." },
  { question: "How do I get started with Cleven.studios?", answer: "You can sign up on our website and log in to your dashboard. From there, you can manage your services, choose a package, track your project progress, and access support. Our team will assist you every step of the way to ensure a smooth experience." },
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="FAQ_main" className="text-white h-min-screen w-screen p-24">
      <div id="FAQ_content">
        <h1 className="text-5xl font-bold">FAQ's</h1>
        <div id="FAQ_containers" className="flex flex-col items-center gap-8 mt-20">
          {faqItems.map((item, index) => (
            <div
              key={index}
              id="FAQ_box"
              className="w-7xl rounded-xl border border-white p-4 cursor-pointer hover:border-yellow-400 transition duration-300 ease-in-out " //Div changes
              onMouseEnter={() => toggleFAQ(index)}
              // onMouseLeave={() => toggleFAQ(index)}

            >
              <h2 className="text-2xl font-semibold">{item.question}</h2>
              {activeIndex === index && (
                <p className="mt-2 text-green-500 text-xl font-light  ">{item.answer}</p> //Text changes
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};