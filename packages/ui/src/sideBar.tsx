'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '../../../apps/Client/@/lib/utils';
import { LayoutDashboard, Store, CloudUpload , Receipt, BarChart2, BadgeHelp  } from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard , label: 'Workspace', href: '/' },
  { icon: CloudUpload, label: 'Upload', href: '/users' },
  { icon: BadgeHelp, label: 'Help Center', href: '/analytics' },
  { icon: Receipt  , label: 'Billing', href: '/messages' },
  { icon: Store, label: 'Market Place', href: '/settings' },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'fixed left-0 top-0 h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out',
        isHovered ? 'w-64' : 'w-16'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* Logo */}
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-center border-b border-gray-800">
          <BarChart2 className="h-8 w-8 text-primary-foreground" />
        </div>

        {/* Side Nav */}

        <nav className="flex-1 space-y-2 p-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center rounded-lg p-3 text-sm font-medium transition-all duration-150 ease-in-out hover:bg-gray-800',
                isHovered ? 'justify-start space-x-3' : 'justify-center'
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-white" />
              {isHovered && <span className="transition-opacity duration-150 ml-2">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
