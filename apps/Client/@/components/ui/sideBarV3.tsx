"use client"
import type React from "react"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "./sidebarClient"
import { Radar, Store, CloudUpload, ReceiptText } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "../../lib/utils"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default function SidebarV3({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const links = [
    {
      label: "WorkSpace",
      href: "/workspace",
      icon: <Radar className="text-neutral-700 dark:text-neutral-200 h-5.5 w-5.5 shrink-0" />,
    },
    {
      label: "Upload",
      href: "/upload",
      icon: <CloudUpload className="text-neutral-700 dark:text-neutral-200 h-5.5 w-5.5 shrink-0" />,
    },
    {
      label: "Billing",
      href: "/billing",
      icon: <ReceiptText className="text-neutral-700 dark:text-neutral-200 h-5.5 w-5.5 shrink-0" />,
    },
    {
      label: "Market Place",
      href: "/market-place",
      icon: <Store className="text-neutral-700 dark:text-neutral-200 h-5.5 w-5.5 shrink-0" />,
    },
  ]
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn(
        "rounded-md w-screen flex flex-col md:flex-row bg-[#202020]  flex-1",
        "h-screen", // added overflow-hidden to prevent double scrollbars
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-16 flex flex-col gap-10">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>

          <div>
            <SidebarLink
              link={{
                label: session?.user?.name || "Loading...",
                href: "/profile",
                icon: session?.user?.image ? (
                  <Image
                    src={session.user.image || "/placeholder.svg"}
                    className="rounded-full border border-white"
                    alt="Profile"
                    width={30}
                    height={30}
                  />
                ) : (
                  <Image
                    src={`https://robohash.org/${session?.user?.name}.png?size=30x30`}
                    className="rounded-full border"
                    alt=""
                    width={30}
                    height={30}
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  )
}
export const Logo = () => {
  return (
    <Link href="/" className="font-normal flex space-x-4 items-center text-sm text-black  relative z-20">
      <img src="./Cleven removeBg.png" className="h-7 object-cover" alt="" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        CLEVEN.STUDIO
      </motion.span>
    </Link>
  )
}
export const LogoIcon = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black relative z-20">
      <img src="./Cleven removeBg.png" className="h-7 object-cover" alt="" />
    </Link>
  )
}

