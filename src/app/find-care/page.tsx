'use client';

import React from 'react';
import Link from 'next/link';

export default function FindCareStartPage() {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-bg-cream flex flex-col items-center justify-center p-6 py-12">
      <div className="w-full max-w-[800px] text-center mb-10">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-txt-primary leading-tight mb-4">
          Find the Right Care
        </h1>
        <p className="font-sans text-base sm:text-lg text-txt-secondary max-w-[600px] mx-auto">
          Choose the path that works best for you to connect with trusted care providers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[850px]">
        {/* Option 1: Manual Browse */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border flex flex-col items-center text-center transition-all hover:shadow-md hover:border-accent-light duration-200">
          <div className="w-16 h-16 bg-[#FFF0E6] rounded-2xl flex items-center justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D96C3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h2 className="font-sans text-2xl font-bold text-primary mb-3">
            Browse Care Agencies
          </h2>
          <p className="font-sans text-[15px] text-txt-secondary leading-relaxed mb-8 flex-1">
            Search, filter, and compare certified agencies manually in your area by services, rating, or urgency levels.
          </p>
          <Link 
            href="/agencies" 
            className="w-full h-[48px] bg-[#112330] text-white rounded-xl font-sans font-medium text-[15px] flex items-center justify-center hover:bg-opacity-90 transition-all shadow-sm"
          >
            Browse Care Agencies
          </Link>
        </div>

        {/* Option 2: AI Chatbot */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border flex flex-col items-center text-center transition-all hover:shadow-md hover:border-accent-light duration-200">
          <div className="w-16 h-16 bg-[#E6F8ED] rounded-2xl flex items-center justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3F6F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h2 className="font-sans text-2xl font-bold text-primary mb-3">
            Help Me Find the Right Care
          </h2>
          <p className="font-sans text-[15px] text-txt-secondary leading-relaxed mb-8 flex-1">
            Let our intelligent AI assistant guide you through a quick intake to summarize your needs and recommend matching agencies.
          </p>
          <Link 
            href="/ai-assistant" 
            className="w-full h-[48px] bg-accent text-white rounded-xl font-sans font-medium text-[15px] flex items-center justify-center hover:bg-accent-hover transition-all shadow-sm"
          >
            Help Me Find the Right Care
          </Link>
        </div>
      </div>
    </div>
  );
}
