'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/k_admin/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-bg-cream flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[480px] bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2E8F0]">
        <h1 className="text-3xl font-bold text-[#112330] mb-8 tracking-tight">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#112330]">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full h-[46px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#112330] focus:ring-1 focus:ring-[#112330] text-[15px]"
              required
            />
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <label className="text-[13px] font-semibold text-[#112330]">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full h-[46px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#112330] focus:ring-1 focus:ring-[#112330] text-[15px]"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full h-[48px] bg-[#112330] text-white rounded-lg font-bold text-[15px] hover:bg-opacity-90 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
