'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '../../../apps/Client/@/lib/utils';
import { useSession } from 'next-auth/react';

import {
  LayoutDashboard,
  Store,
  CloudUpload,
  Receipt,
  BarChart2,
  BadgeHelp,
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Workspace', href: '/' },
  { icon: CloudUpload, label: 'Upload', href: '/users' },
  { icon: BadgeHelp, label: 'Help Center', href: '/analytics' },
  { icon: Receipt, label: 'Billing', href: '/messages' },
  { icon: Store, label: 'Market Place', href: '/settings' },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const { data: session } = useSession();

  return (
    <div
      className={cn(
        'fixed left-0 top-0 h-screen bg-[#0c0c0c] backdrop-blur-lg bg-opacity-40 text-white z-10 transition-all duration-500 ease-in-out shadow-lg flex flex-col justify-between',
        isHovered ? 'w-64' : 'w-16'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className='flex flex-col'>
        <div className='flex h-16 items-center justify-center border-b border-gray-800'>
          <img
            src='./Cleven removeBg.png'
            className='h-12 w-12 object-cover '
            alt='Cleven Logo'
          />
        </div>

        {/* Side Nav */}
        <nav className='flex-1 space-y-2 p-4'>
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center rounded-lg p-3 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105',
                isHovered ? 'justify-start space-x-3' : 'justify-center'
              )}
            >
              <item.icon className='h-6 w-6 flex-shrink-0 text-gray-400 transition-colors group-hover:text-white group-hover:scale-110' />
              {isHovered && (
                <span className='transition-opacity duration-300 ml-2 group-hover:text-gray-200'>
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Profile Icon */}
      <div className='p-4 flex items-center justify-center transition-all duration-500'>
        {session?.user?.image ? (
          <img
            src={session.user.image} // Profile Image URL
            alt='Profile'
            className='h-10 w-10 rounded-full object-cover hover:scale-105 transition-transform duration-300'
          />
        ) : (
          <div className='h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:scale-105 transition-transform duration-300'>
            <span>😗</span> {/* Placeholder Icon */}
          </div>
        )}
      </div>
    </div>
  );
}