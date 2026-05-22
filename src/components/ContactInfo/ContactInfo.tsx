'use client';

import React from 'react';

export default function ContactInfo() {
  return (
    <div className="bg-bg-dark text-white flex flex-col relative overflow-hidden min-h-auto md:min-h-[500px] px-6 py-8 md:p-8 lg:p-10 rounded-t-2xl md:rounded-none md:rounded-l-[20px]">
      <h3 className="font-sans text-2xl md:text-3xl font-bold mb-2 leading-tight">Contact Information</h3>
      <p className="font-sans text-sm text-white/70 mb-8 md:mb-10 leading-normal">Say something to start a live chat!</p>

      <ul className="list-none p-0 m-0 flex flex-col gap-5 md:gap-10 mb-auto pb-10">
        {/* Phone */}
        <li className="flex items-start gap-4 font-sans text-base leading-normal">
          <span className="shrink-0 w-6 h-6 flex items-center justify-center mt-[2px] [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-white [&>svg]:fill-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </span>
          <span className="text-white">+1012 3456 789</span>
        </li>

        {/* Email */}
        <li className="flex items-start gap-4 font-sans text-base leading-normal">
          <span className="shrink-0 w-6 h-6 flex items-center justify-center mt-[2px] [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-white [&>svg]:fill-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </span>
          <span className="text-white">demo@gmail.com</span>
        </li>

        {/* Address */}
        <li className="flex items-start gap-4 font-sans text-base leading-normal">
          <span className="shrink-0 w-6 h-6 flex items-center justify-center mt-[2px] [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-white [&>svg]:fill-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </span>
          <span className="text-white">
            132 Dartmouth Street Boston,<br />
            Massachusetts 02156 United States
          </span>
        </li>
      </ul>

      {/* Social media icons */}
      <div className="flex gap-4 mt-8 relative z-10">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white transition-opacity duration-250 hover:opacity-80 [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:fill-current"
          id="contact-social-facebook"
          aria-label="Facebook"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white transition-opacity duration-250 hover:opacity-80 [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:fill-current"
          id="contact-social-twitter"
          aria-label="Twitter"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white transition-opacity duration-250 hover:opacity-80 [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:fill-current [&>svg]:fill-none"
          id="contact-social-instagram"
          aria-label="Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white transition-opacity duration-250 hover:opacity-80 [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:fill-current"
          id="contact-social-linkedin"
          aria-label="LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white transition-opacity duration-250 hover:opacity-80 [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:fill-current"
          id="contact-social-youtube"
          aria-label="YouTube"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--color-primary)"/></svg>
        </a>
      </div>

      {/* Decorative circles */}
      <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-[#183545] pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute bottom-[50px] right-[60px] w-[120px] h-[120px] rounded-full bg-[#1B3A4C] pointer-events-none z-[2]" aria-hidden="true" />
    </div>
  );
}
