"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../../@/components/ui/glowing-effect"
import type React from "react" // Import React

export function GlowCards() {
  return (
<div className="container mx-auto px-4 py-8">
  <ul className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-[repeat(3,minmax(220px,1fr))] lg:gap-8">
    {/* Top row */}
    <GridItem
      className="md:col-span-6 lg:col-span-4 group"
      icon={
        <Box className="h-6 w-6 text-blue-500 transition-transform group-hover:scale-110" />
      }
      title="Codebase Optimization"
      description="We enhance performance by restructuring and optimizing your existing website code."
      imgSrc="./code-optimization.jpeg"
    />
    <GridItem
      className="md:col-span-6 lg:col-span-8 group"
      icon={
        <Settings className="h-6 w-6 text-green-500 transition-transform group-hover:rotate-90 duration-1000" />
      }
      title="Website Redesign & Maintenance"
      description="From minor UI tweaks to full redesigns, we provide scalable and modern solutions."
      imgSrc="website Redesign and Maintenance.jpeg"
    />

    {/* Middle row */}
    <GridItem
      className="md:col-span-12 lg:col-span-6 lg:row-span-2 group"
      icon={
        <Lock className="h-6 w-6 text-red-500 transition-all duration-300 group-hover:scale-90 group-hover:opacity-50" />
      }
      title="Security & Performance Audits"
      description="We analyze vulnerabilities and optimize speed for a seamless user experience."
      imgSrc="Security & Performance Audits.jpeg"
    />

    {/* Bottom row */}
    <GridItem
      className="md:col-span-6 lg:col-span-6 group"
      icon={
        <Sparkles className="h-6 w-6 text-yellow-500 transition-all duration-300 group-hover:text-pink-500" />
      }
      title="Custom Feature Development"
      description="Need a unique feature? We build custom integrations tailored to your business."
      imgSrc="Custom Feature Development.jpeg"
    />
    <GridItem
      className="md:col-span-6 lg:col-span-6 group"
      icon={
        <Search className="h-6 w-6 text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400" />
      }
      title="SEO & Accessibility Improvements"
      description="We ensure your site is optimized for search engines and accessible to all users."
      imgSrc="SEO & Accessibility Improvements.jpeg"
    />
  </ul>
</div>
  )
}

interface GridItemProps {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  className?: string
  imgSrc?: string
}

const GridItem = ({ icon, title, description, className, imgSrc }: GridItemProps) => {
  return (
    <li className={`min-h-[200px] list-none ${className}`}>
      <div className="relative h-full rounded-3xl border border-neutral-800 bg-[#0c0c0c] p-2 transition-all duration-300">
        <GlowingEffect spread={25} glow={true} disabled={false} proximity={60} inactiveZone={0.01} />

        {/* Background Image */}
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border-neutral-800 p-6 transition-all duration-300">
          <div className="absolute inset-0">
            <img src={imgSrc} alt="Background" className="h-full w-full object-cover" />
            {/* Black Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative flex flex-1 flex-col justify-between gap-4 z-10">
            <div className="w-fit rounded-xl border border-neutral-800 text-white bg-neutral-900/60 p-3">{icon}</div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">{title}</h3>
              <p className="text-xs text-neutral-400 md:text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
