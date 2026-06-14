'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function OtpPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const accountType = typeof window !== 'undefined' ? localStorage.getItem('accountType') : null;
    let nextUrl = null;
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      nextUrl = params.get('next');
    }
    
    if (nextUrl) {
      router.push(nextUrl);
    } else if (accountType === 'Agency') {
      router.push('/agency/dashboard');
    } else {
      router.push('/family/dashboard');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-bg-cream flex flex-col items-center justify-center p-6 py-12">
      <div className="w-full max-w-[500px] bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="font-sans text-3xl font-bold text-txt-primary tracking-tight mb-3">OTP verification</h1>
          <p className="font-sans text-[15px] text-chat-dark leading-relaxed">
            We have sent an OTP code to your <span className="text-[#D96C3B]">abcprovided@email.com</span><br/>Please verify.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          
          {/* OTP Input */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="font-sans text-[13px] font-bold text-chat-dark">One-Time Passcode</label>
            <input 
              type="text" 
              placeholder="Enter your one time passcode" 
              className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-chat-muted focus:outline-none focus:border-txt-primary font-sans text-[15px]"
            />
            <div className="flex justify-end mt-2">
              <button type="button" className="font-sans text-[15px] text-[#D96C3B] underline hover:no-underline">
                Resend OTP
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-2">
            <button type="submit" className="w-full h-[46px] bg-[#112330] text-white rounded-lg font-sans font-medium text-[15px] hover:bg-opacity-90 transition-all">
              Login
            </button>
            <button type="button" onClick={handleBack} className="w-full h-[46px] bg-transparent text-[#112330] border border-[#112330] rounded-lg font-sans font-medium text-[15px] hover:bg-gray-50 transition-all">
              Back
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
