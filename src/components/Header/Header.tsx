'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Agencies', href: '/agencies' },
  // { label: 'AI Assistant', href: '/ai-assistant' },
];

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function LogoutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const [accountType, setAccountType] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccountType(localStorage.getItem('accountType'));
    }
  }, []);

  let effectiveAccountType = accountType;
  if (pathname.startsWith('/agency')) {
    effectiveAccountType = 'Agency';
  } else if (pathname.startsWith('/family')) {
    effectiveAccountType = 'Family';
  }

  const dashboardLink = effectiveAccountType === 'Agency' ? '/agency/dashboard' : '/family/dashboard';
  const profileLink = effectiveAccountType === 'Agency' ? '/agency/dashboard/profile' : '/family/dashboard/profile';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobile = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-[300] bg-white border-b border-brd-light transition-shadow duration-250 ${scrolled ? 'shadow-md' : ''}`} id="site-header">
      <div className="flex items-center justify-between h-[60px] md:h-[72px] w-full max-w-full mx-auto px-8">
        <Link href="/" className="font-sans text-[26px] font-extrabold text-txt-primary no-underline tracking-tight" id="logo">
          Kinora
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 ml-[120px]" id="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-base font-medium no-underline py-2 transition-colors duration-150 hover:text-accent ${isActive && link.href !== '/' ? 'text-accent after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-accent' : 'text-txt-primary'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5 ml-auto relative">
          {/* Bell button */}
          <Link href="/notifications" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-txt-primary bg-bg-light transition-all duration-150 hover:bg-brd-light hover:text-accent" aria-label="Notifications">
            <div className="relative inline-flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute -top-[2px] -right-[2px] w-[7px] h-[7px] bg-red-500 rounded-full border border-bg-light" />
            </div>
          </Link>

          {/* Avatar button with dropdown */}
          <div className="relative hidden md:block" ref={profileRef}>
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center justify-center p-0 bg-transparent rounded-full overflow-hidden transition-transform duration-150 hover:scale-105 focus:outline-none" 
              aria-label="User profile"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/avatar.png" alt="User profile avatar" className="w-10 h-10 rounded-full object-cover" />
            </button>
            
            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-[400] flex flex-col">
                <Link href={profileLink} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-txt-primary transition-colors text-[15px] font-medium" onClick={() => setIsProfileOpen(false)}>
                  <UserIcon className="w-5 h-5 text-txt-primary" />
                  My Profile
                </Link>
                <div className="h-[1px] bg-gray-100 w-full mx-auto max-w-[85%] my-1"></div>
                <Link href={dashboardLink} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-txt-primary transition-colors text-[15px] font-medium" onClick={() => setIsProfileOpen(false)}>
                  <HomeIcon className="w-5 h-5 text-txt-primary" />
                  Dashboard
                </Link>
                <div className="h-[1px] bg-gray-100 w-full mx-auto max-w-[85%] my-1"></div>
                <Link href="/signup" className="flex items-center gap-3 px-5 py-3 hover:bg-red-50 text-[#D84C4C] transition-colors text-[15px] font-medium w-full text-left" onClick={() => setIsProfileOpen(false)}>
                  <LogoutIcon className="w-5 h-5 text-[#D84C4C]" />
                  Sign out
                </Link>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col justify-center gap-[5px] w-10 h-10 bg-transparent p-2 z-[401]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-[2px] bg-txt-primary rounded-sm transition-all duration-250 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-full h-[2px] bg-txt-primary rounded-sm transition-all duration-250 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-[2px] bg-txt-primary rounded-sm transition-all duration-250 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0F2A38]/50 z-[400] transition-opacity duration-250 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav
        className={`md:hidden fixed top-0 w-[300px] h-full bg-white z-[401] pt-20 px-6 pb-6 transition-[right] duration-300 shadow-xl ${isOpen ? 'right-0' : '-right-[300px]'}`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium px-4 py-3 rounded-md transition-all duration-150 no-underline hover:bg-bg-light hover:text-txt-primary ${isActive ? 'text-accent bg-accent/10' : 'text-txt-secondary'}`}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
            <Link href={profileLink} className="flex items-center gap-3 px-4 py-3 hover:bg-bg-light text-txt-secondary rounded-md" onClick={closeMobile}>
              <UserIcon className="w-5 h-5" /> My Profile
            </Link>
            <Link href={dashboardLink} className="flex items-center gap-3 px-4 py-3 hover:bg-bg-light text-txt-secondary rounded-md" onClick={closeMobile}>
              <HomeIcon className="w-5 h-5" /> Dashboard
            </Link>
            <Link href="/signup" className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-500 rounded-md w-full text-left" onClick={closeMobile}>
              <LogoutIcon className="w-5 h-5" /> Sign out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
