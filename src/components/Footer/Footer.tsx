'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SocialIcon = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <a href="#" className="flex items-center justify-center text-white transition-colors duration-150 hover:text-accent" aria-label={name}>
    {children}
  </a>
);

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/ai-assistant')) {
    return null;
  }

  return (
    <footer className="bg-primary text-white pt-16 border-t-0" id="site-footer">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] gap-8 lg:gap-12 pb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <div className="font-sans text-3xl font-bold text-white tracking-tight">Kinora</div>
            <p className="text-sm leading-relaxed text-txt-on-dark max-w-[480px]">
              Kinora delivers modern telehealth solutions designed to simplify access
              to medical care. We connect individuals and families with trusted
              healthcare providers through a secure and user-friendly platform.
            </p>
            <div className="flex gap-5 mt-2">
              <SocialIcon name="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </SocialIcon>
              <SocialIcon name="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </SocialIcon>
              <SocialIcon name="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </SocialIcon>
              <SocialIcon name="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </SocialIcon>
              <SocialIcon name="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--color-primary)"/></svg>
              </SocialIcon>
            </div>
          </div>
 
          {/* Care Services Column */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white mb-6 normal-case tracking-normal">Care Services</h4>
            <div className="flex flex-col gap-4">
              <Link href="/#how-it-works" className="text-sm text-txt-on-dark no-underline transition-colors duration-150 hover:text-accent">How It Works</Link>
              <Link href="/agencies" className="text-sm text-txt-on-dark no-underline transition-colors duration-150 hover:text-accent">Services</Link>
              <Link href="#" className="text-sm text-txt-on-dark no-underline transition-colors duration-150 hover:text-accent">Privacy Policy</Link>
              <Link href="#" className="text-sm text-txt-on-dark no-underline transition-colors duration-150 hover:text-accent">Terms &amp; Conditions</Link>
              <Link href="/#faq" className="text-sm text-txt-on-dark no-underline transition-colors duration-150 hover:text-accent">FAQ</Link>
            </div>
          </div>
 
          {/* Contact Column */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white mb-6 normal-case tracking-normal">Contacts us</h4>
            <div className="flex items-start gap-3 mb-5 text-sm text-txt-on-dark leading-normal">
              <span className="shrink-0 text-white mt-[3px] inline-flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <span>contact@company.com</span>
            </div>
            <div className="flex items-start gap-3 mb-5 text-sm text-txt-on-dark leading-normal">
              <span className="shrink-0 text-white mt-[3px] inline-flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <span>(414) 687 - 5892</span>
            </div>
            <div className="flex items-start gap-3 mb-5 text-sm text-txt-on-dark leading-normal">
              <span className="shrink-0 text-white mt-[3px] inline-flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
              </span>
              <span>794 Mcallister St<br />San Francisco, 94102</span>
            </div>
          </div>
        </div>
      </div>
 
      <hr className="border-none border-t border-white w-full m-0 opacity-100" />
 
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Copyright Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-sm text-txt-on-dark text-center md:text-left">
          <span>Copyright © 2022 Kinora</span>
          <div className="flex gap-1">
            <span className="text-txt-on-dark">All Rights Reserved | </span>
            <a href="#" className="text-accent underline transition-colors duration-150 hover:text-accent-hover">Terms and Conditions</a>
            <span className="text-txt-on-dark"> | </span>
            <a href="#" className="text-accent underline transition-colors duration-150 hover:text-accent-hover">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
