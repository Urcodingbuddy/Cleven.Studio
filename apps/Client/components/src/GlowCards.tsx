"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../../@/components/ui/glowing-effect"
import type React from "react" // Import React

export function GlowCards() {
  return (
    <div className="container mx-auto py-4">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[repeat(3,minmax(200px,1fr))] lg:gap-6">
        {/* Top row */}
        <GridItem
          className="md:col-span-6 lg:col-span-4"
          icon={<Box className="h-5 w-5" />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
        />
        <GridItem
          className="md:col-span-6 lg:col-span-8"
          icon={<Settings className="h-5 w-5" />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />

        {/* Middle row */}
        <GridItem
          className="md:col-span-12 lg:col-span-6 lg:row-span-2"
          icon={<Lock className="h-5 w-5" />}
          title="You should buy Aceternity UI Pro"
          description="It's the best money you'll ever spend"
        />

        {/* Bottom row */}
        <GridItem
          className="md:col-span-6 lg:col-span-6"
          icon={<Sparkles className="h-5 w-5" />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          className="md:col-span-6 lg:col-span-6"
          icon={<Search className="h-5 w-5" />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit."
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
}

const GridItem = ({ icon, title, description, className }: GridItemProps) => {
  return (
    <li className={`min-h-[200px] list-none ${className}`}>
      <div className="relative h-full rounded-3xl border border-neutral-800 bg-[#0c0c0c] p-2 transition-all duration-300">
        <GlowingEffect spread={60} glow={true} disabled={false} proximity={100} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border-neutral-800 p-6 transition-all duration-300">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-xl border border-neutral-800 text-white bg-neutral-900/50 p-3">{icon}</div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">{title}</h3>
              <p className="text-sm text-neutral-400 md:text-base">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}