'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AgencySubscriptionPage() {
  const router = useRouter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/agency/dashboard'); // Example navigation upon success
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 md:p-8 font-sans bg-[#FAF9F6] min-h-screen">
      
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors flex-shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#112330" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div>
          <h1 className="text-[28px] font-bold text-[#112330] mb-1 tracking-tight leading-none mt-1">Agency Subscription</h1>
          <p className="text-[15px] text-[#64748B]">Activate your subscription to connect with new clients and manage inquiries.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column: Subscription Summary */}
        <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-sm border border-[#E2E8F0] h-fit">
          
          <div className="flex items-center gap-4 mb-6">
            <img src="/avatar.png" alt="SUNSHINE Care" className="w-12 h-12 rounded-full object-cover bg-orange-100" />
            <h2 className="text-[20px] font-bold text-[#112330]">SUNSHINE Care</h2>
          </div>

          <hr className="border-t border-gray-200 mb-8" />

          <h3 className="text-[18px] font-bold text-[#112330] mb-6">Subscription fee</h3>
          
          <div className="flex items-end gap-2 mb-8">
            <span className="text-[42px] font-bold text-[#112330] leading-none">$300.00</span>
            <span className="text-[13px] text-[#64748B] font-medium leading-tight pb-1">Per<br/>month</span>
          </div>

          <div className="flex items-center justify-between text-[14px] mb-8">
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-[#112330]">Platform basic</span>
              <span className="text-[#64748B]">Billed monthly</span>
            </div>
            <span className="font-bold text-[#112330]">$300.00</span>
          </div>

          <hr className="border-t border-gray-200 mb-6" />

          <div className="flex flex-col gap-4 text-[14px] mb-8">
            <div className="flex items-center justify-between">
              <span className="text-[#112330] font-medium">Subtotal</span>
              <span className="font-bold text-[#112330]">$300.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#112330] font-medium">Tax</span>
              <span className="font-bold text-[#112330]">$10.00</span>
            </div>
          </div>

          <hr className="border-t border-gray-200 mb-6" />

          <div className="flex items-center justify-between mb-10 text-[14px]">
            <span className="text-[#112330] font-medium">Total due today</span>
            <span className="font-bold text-[#112330] text-[16px]">$310.00</span>
          </div>

          <h3 className="text-[16px] font-bold text-[#112330] mb-4">Contact information</h3>
          
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#112330]">Email</label>
            <input 
              type="email" 
              placeholder="Enter email address"
              defaultValue="00Chukwudaniel@gmail.com"
              className="w-full h-[46px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] focus:outline-none focus:border-[#112330] focus:ring-1 focus:ring-[#112330] text-[14px]"
            />
          </div>

        </div>

        {/* Right Column: Payment Method */}
        <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-sm border border-[#E2E8F0] h-fit">
          <h2 className="text-[20px] font-bold text-[#112330] mb-8">Payment method</h2>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-6">
            
            {/* Card Information */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-[#112330]">Card information</label>
              
              <div className="flex flex-col">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter text"
                    className="w-full h-[46px] pl-4 pr-32 border border-[#E2E8F0] rounded-t-lg bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] relative z-10 focus:z-20"
                    required
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 z-20 pointer-events-none">
                    {/* Mock Card Brands */}
                    <div className="w-8 h-5 bg-[#1A1F71] rounded text-[8px] text-white flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-5 bg-[#0070BA] rounded text-[8px] text-white flex items-center justify-center font-bold italic">AMEX</div>
                    <div className="w-8 h-5 bg-[#FF5F00] rounded text-[8px] text-white flex items-center justify-center font-bold">MC</div>
                  </div>
                </div>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="MM / YY"
                    className="w-1/2 h-[46px] px-4 border border-[#E2E8F0] border-t-0 rounded-bl-lg bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] relative z-10 focus:z-20"
                    required
                  />
                  <div className="w-1/2 relative">
                    <input 
                      type="text" 
                      placeholder="CVC"
                      className="w-full h-[46px] pl-4 pr-10 border border-[#E2E8F0] border-t-0 border-l-0 rounded-br-lg bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] relative z-10 focus:z-20"
                      required
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><rect x="1" y="2" width="22" height="12" rx="2" ry="2"></rect><line x1="1" y1="7" x2="23" y2="7"></line><line x1="15" y1="11" x2="19" y2="11"></line></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cardholder Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-[#112330]">Cardholder name</label>
              <input 
                type="text" 
                placeholder="Full name on card"
                className="w-full h-[46px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] focus:outline-none focus:border-[#112330] focus:ring-1 focus:ring-[#112330] text-[14px]"
                required
              />
            </div>

            {/* Country or Region */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-[#112330]">Country or region</label>
              
              <div className="flex flex-col">
                <div className="relative">
                  <select defaultValue="Nigeria" className="w-full h-[46px] pl-4 pr-10 border border-[#E2E8F0] rounded-t-lg bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] appearance-none cursor-pointer relative z-10 focus:z-20">
                    <option value="Nigeria">Nigeria</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 z-20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
                
                <input 
                  type="text" 
                  placeholder="Address line 1"
                  className="w-full h-[46px] px-4 border border-[#E2E8F0] border-t-0 bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] relative z-10 focus:z-20"
                />
                
                <input 
                  type="text" 
                  placeholder="Address line 2"
                  className="w-full h-[46px] px-4 border border-[#E2E8F0] border-t-0 bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] relative z-10 focus:z-20"
                />
                
                <input 
                  type="text" 
                  placeholder="Suburb"
                  className="w-full h-[46px] px-4 border border-[#E2E8F0] border-t-0 bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] relative z-10 focus:z-20"
                />

                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="City"
                    className="w-1/2 h-[46px] px-4 border border-[#E2E8F0] border-t-0 bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] relative z-10 focus:z-20"
                  />
                  <input 
                    type="text" 
                    placeholder="Postal code"
                    className="w-1/2 h-[46px] px-4 border border-[#E2E8F0] border-t-0 border-l-0 bg-white text-[#112330] focus:outline-none focus:border-[#112330] text-[14px] relative z-10 focus:z-20"
                  />
                </div>

                <div className="relative">
                  <select defaultValue="" className="w-full h-[46px] pl-4 pr-10 border border-[#E2E8F0] border-t-0 rounded-b-lg bg-white text-gray-500 focus:outline-none focus:border-[#112330] text-[14px] appearance-none cursor-pointer relative z-10 focus:z-20">
                    <option value="" disabled>State</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 z-20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full h-[48px] bg-[#112330] hover:bg-[#1A3043] text-white rounded-lg text-[15px] font-bold transition-colors mt-2">
              Subscribe
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}
