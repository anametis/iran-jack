'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, redirect } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Bell, MessageSquare, Users, Calendar, Phone, FileText, Box, MoreHorizontal, SquarePlus } from 'lucide-react';

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === '/' && href === '/statistics');

  return (
    <Link 
      href={href} 
      className={`flex flex-col items-center h-[56px] w-[68px] gap-1 justify-center ${isActive ? 'text-active font-semibold border-l-4 border-active' : 'text-gray-500'} hover:text-active cursor-pointer transition-all ease-in-out duration-300`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      redirect('/statistics');
    }
  }, [pathname, router]);

  const links = [
    { href: '/activity', label: 'Activity', icon: <Bell className="h-6 w-6" /> },
    { href: '/chat', label: 'Chat', icon: <MessageSquare className="h-6 w-6" /> },
    { href: '/teams', label: 'Teams', icon: <Users className="h-6 w-6" /> },
    { href: '/calendar', label: 'Calendar', icon: <Calendar className="h-6 w-6" /> },
    { href: '/calls', label: 'Calls', icon: <Phone className="h-6 w-6" /> },
    { href: '/files', label: 'Files', icon: <FileText className="h-6 w-6" /> },
    { href: '/statistics', label: 'van Arsdel', icon: <Box className="h-6 w-6" /> },
    { href: '/more', label: '', icon: <MoreHorizontal className="h-6 w-6" /> },
    { href: '/apps', label: 'Apps', icon: <SquarePlus className="h-6 w-6" /> },
  ];

  return (
    <div className="w-16 bg-secondary-bg shadow-lg h-dvh flex flex-col items-center rounded-r-lg">
      {links.map((link, index) => (
        <SidebarItem
          key={index}
          href={link.href}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </div>
  );
};

export default Sidebar;
