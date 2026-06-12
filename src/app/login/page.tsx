'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState<'Agency' | 'Family'>('Family');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('accountType', accountType);
    if (accountType === 'Family') {
      router.push('/family/dashboard');
    } else {
      router.push('/agency/dashboard');
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-bg-cream flex flex-col items-center justify-center p-6 py-12">
      <div className="w-full max-w-[500px] bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-sans text-3xl font-bold text-txt-primary tracking-tight">Login</h1>
          
          {/* Account Type Toggle */}
          <div className="flex rounded-md border border-txt-primary overflow-hidden h-[38px]">
            <button 
              onClick={() => setAccountType('Agency')}
              className={`px-4 font-sans text-sm font-medium transition-colors ${accountType === 'Agency' ? 'bg-txt-primary text-white' : 'bg-white text-txt-primary'}`}
            >
              Agency
            </button>
            <button 
              onClick={() => setAccountType('Family')}
              className={`px-4 font-sans text-sm font-medium transition-colors ${accountType === 'Family' ? 'bg-txt-primary text-white' : 'bg-white text-txt-primary'}`}
            >
              Family
            </button>
          </div>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-sm font-semibold text-chat-dark">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-chat-muted focus:outline-none focus:border-txt-primary font-sans text-[15px]"
            />
          </div>

          {/* Submit */}
          <button type="submit" className="w-full h-[46px] bg-[#112330] text-white rounded-lg font-sans font-medium text-[15px] mt-1 hover:bg-opacity-90 transition-all">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-px bg-brd-input flex-1"></div>
          <span className="font-sans text-[14px] text-chat-gray">Or login with</span>
          <div className="h-px bg-brd-input flex-1"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button style={{ width: '52px', height: '52px', borderRadius: '10px', border: '1.5px solid #94a3b8' }} className="flex items-center justify-center bg-white hover:bg-bg-light transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.153-4.857.026-3.04 2.487-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/>
            </svg>
          </button>
          <button style={{ width: '52px', height: '52px', borderRadius: '10px', border: '1.5px solid #94a3b8' }} className="flex items-center justify-center bg-white hover:bg-bg-light transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="font-sans text-[15px] text-chat-dark">
            Don't have an account? <Link href="/signup" className="text-[#D96C3B] hover:underline font-semibold">Sign up</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
