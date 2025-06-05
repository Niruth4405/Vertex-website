'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Members', href: '/members' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:w-full md:flex md:justify-center mt-4">
      <ul className="flex gap-6 px-2 py-2 rounded-full bg-gradient-to-r from-[#1d1836] to-[#221b3a] shadow-lg border border-[#2d2545]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-6 py-2 rounded-full transition-all duration-200
                  ${isActive
                    ? 'bg-white/10 text-white font-semibold shadow-inner border border-white/10'
                    : 'text-gray-200 hover:bg-white/5 hover:text-white'}
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
