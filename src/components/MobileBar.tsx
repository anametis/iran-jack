'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Bell, MessageSquare, Users, Calendar, MoreHorizontal, Phone, FileText, Box } from 'lucide-react';

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href, isActive, onClick }) => (
  <Link 
    href={href} 
    onClick={onClick}
    className={`flex flex-col items-center h-full w-full justify-center text-center ${isActive ? 'text-active font-semibold' : 'text-gray-500'} hover:text-active cursor-pointer transition-all ease-in-out duration-300`}
  >
    {icon}
    <span className="text-xs">{label}</span>
  </Link>
);

const MobileMenuBar: React.FC = () => {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  const mainLinks = [
    { href: '/activity', label: 'Activity', icon: <Bell className="h-6 w-6" /> },
    { href: '/chat', label: 'Chat', icon: <MessageSquare className="h-6 w-6" /> },
    { href: '/teams', label: 'Teams', icon: <Users className="h-6 w-6" /> },
    { href: '/calendar', label: 'Calendar', icon: <Calendar className="h-6 w-6" /> },
  ];

  const moreItems = [
    { href: '/calls', label: 'Calls', icon: <Phone className="h-6 w-6" /> },
    { href: '/files', label: 'Files', icon: <FileText className="h-6 w-6" /> },
    { href: '/statistics', label: 'van Arsdel', icon: <Box className="h-6 w-6" /> },
  ];

  const isMoreActive = moreItems.some(item => pathname === item.href);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-300 z-10">
        <div className="flex justify-between items-center h-[56px]">
          {mainLinks.map((link, index) => (
            <MenuItem
              key={index}
              href={link.href}
              label={link.label}
              icon={link.icon}
              isActive={pathname === link.href}
            />
          ))}
          <button 
            onClick={() => setShowMore(true)} 
            className={`flex flex-col items-center h-full w-full justify-center text-center ${isMoreActive ? 'text-active font-semibold' : 'text-gray-500'} hover:text-active transition-all ease-in-out duration-300`}
          >
            <MoreHorizontal className="h-6 w-6" />
            <span className="text-xs">More</span>
          </button>
        </div>
      </div>

      {showMore && (
        <div className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-t-lg shadow-lg w-full p-4">
            {moreItems.map((item, index) => (
              <MenuItem
                key={index}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={pathname === item.href}
                onClick={() => setShowMore(false)} 
              />
            ))}
            <button 
              onClick={() => setShowMore(false)} 
              className="text-center w-full text-red-500 mt-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuBar;