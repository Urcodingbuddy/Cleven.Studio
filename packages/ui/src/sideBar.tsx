"use client";
// @ts-ignore
import { Radar, Store, LifeBuoy, CloudUpload, ReceiptText, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
  { icon: Radar, label: "Workspace", href: "/workspace" },
  { icon: CloudUpload, label: "Upload", href: "/upload" },
  { icon: LifeBuoy, label: "Help Center", href: "/help-center" },
  { icon: ReceiptText, label: "Billing", href: "/billing" },
  { icon: Store, label: "Market Place ", href: "/market-place" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex fixed ">
      {/* Sidebar */}
      <div
        className={`bg-[#1c1c1c] h-screen flex flex-col fixed transition-all duration-300 ${
          isExpanded ? "w-64" : "w-16"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Sidebar Header with Logo */}
        <div className="flex items-center gap-3 p-4">
          <img src="./Cleven removeBg.png" className="h-10 object-cover " alt="" />
          {isExpanded && <span className="text-white font-semibold">CLEVEN.STUDIO</span>}
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2 px-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-purple-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2a2d32]"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {isExpanded && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto p-4">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-[#2a2d32] w-full">
          <Link href="/profile">
          <User className="h-5 w-5 cursor-pointer " />
          </Link>
            {isExpanded && <span className="cursor-pointer" >Profile</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
