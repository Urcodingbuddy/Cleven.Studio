"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CircleEllipsis } from 'lucide-react';
import { useState, useEffect } from "react";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Bug Fixing", href: "/pricing/bug-fixing" },
  { name: "Web Maintenance", href: "/pricing/web-maintenance" },
  { name: "Content Update", href: "/pricing/content-update" },
  { name: "MVP Package", href: "/pricing/mvp" },
  { name: "Social Media", href: "/pricing/social-media" },
  { name: "Speed Optimization", href: "/pricing/speed-optimization" },
];

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibleItems, setVisibleItems] = useState<NavigationItem[]>(navigation);
  const [overflowItems, setOverflowItems] = useState<NavigationItem[]>([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const updateNavigationItems = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth < 570) {
        setVisibleItems(navigation.slice(0, 2));
        setOverflowItems(navigation.slice(2));
      } else if (screenWidth < 770) {
        setVisibleItems(navigation.slice(0, 3));
        setOverflowItems(navigation.slice(3));
      }else if (screenWidth < 870) {
        setVisibleItems(navigation.slice(0, 4));
        setOverflowItems(navigation.slice(4));
      }
      else if (screenWidth < 970) {
        setVisibleItems(navigation.slice(0, 5));
        setOverflowItems(navigation.slice(5));
      } else if (screenWidth < 1070) {
        setVisibleItems(navigation.slice(0, 6));
        setOverflowItems(navigation.slice(6));
      }
       else {
        setVisibleItems(navigation);
        setOverflowItems([]);
      }
    }
  };

  useEffect(() => {
    updateNavigationItems();
    window.addEventListener("resize", updateNavigationItems);
    return () => {
      window.removeEventListener("resize", updateNavigationItems);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 py-6 px-8 z-10">
        <ul className="flex items-center justify-center gap-8">
          {visibleItems.map((item) => (
            <li key={item.name} className="relative">
              <Link href={item.href}>
                <span className={`font-medium ${pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                  {item.name}
                </span>
              </Link>
              {pathname === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
            </li>
          ))}
          {overflowItems.length > 0 && (
            <li className="relative">
              <button 
                onClick={toggleDropdown} 
                className="text-gray-400 hover:text-white"
                aria-label="More navigation items"
              >
                <CircleEllipsis /> 
              </button>
              {showDropdown && (
                <div className="absolute bg-gray-800 rounded shadow-lg mt-2 right-0">
                  {overflowItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span className={`block px-4 py-2 font-medium ${pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}