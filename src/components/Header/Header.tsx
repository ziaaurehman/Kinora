'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Agencies', href: '/agencies' },
  { label: 'AI Assistant', href: '/ai-assistant' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-base font-medium no-underline py-2 transition-colors duration-150 hover:text-accent ${isActive ? 'text-accent after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-accent' : 'text-txt-primary'}`}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5 ml-auto">
          {/* Bell button with notification badge */}
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-txt-primary bg-bg-light transition-all duration-150 hover:bg-brd-light hover:text-accent" aria-label="Notifications" id="btn-notifications">
            <div className="relative inline-flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute -top-[2px] -right-[2px] w-[7px] h-[7px] bg-red-500 rounded-full border border-bg-light" />
            </div>
          </button>

          {/* Avatar button with brain image */}
          <button className="hidden md:flex items-center justify-center p-0 bg-transparent rounded-full overflow-hidden transition-transform duration-150 hover:scale-105" aria-label="User profile" id="btn-profile">
            <img src="/avatar.png" alt="User profile avatar" className="w-10 h-10 rounded-full object-cover" />
          </button>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col justify-center gap-[5px] w-10 h-10 bg-transparent p-2 z-[401]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            id="btn-hamburger"
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
        id="mobile-nav"
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
        </div>
      </nav>
    </header>
  );
}
