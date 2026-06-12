'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const UploadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const DoubleCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12l5.25 5 2.625-3" />
    <path d="M8 12l5.25 5L22 7" />
    <path d="M16 7l-3.5 4" />
  </svg>
);

export default function AgencySetupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-bg-cream flex flex-col items-center pt-16 px-6 font-sans relative">
      
      {/* Wizard Progress Bar */}
      <div className="flex items-center justify-center w-full max-w-[280px] mb-12">
        <div className={`w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center text-[16px] font-semibold bg-bg-cream relative z-10 transition-colors ${step >= 1 ? 'border-[#D96C3B] text-[#D96C3B]' : 'border-gray-300 text-gray-400'}`}>
          1
        </div>
        <div className="flex-1 h-[1.5px] bg-gray-300 relative -mx-1 z-0">
          <div className={`absolute left-0 top-0 bottom-0 bg-[#D96C3B] transition-all duration-300 ${step === 2 ? 'w-full' : 'w-1/2'}`}></div>
        </div>
        <div className={`w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center text-[16px] font-semibold bg-bg-cream relative z-10 transition-colors ${step >= 2 ? 'border-[#D96C3B] text-[#D96C3B]' : 'border-gray-300 text-gray-400'}`}>
          2
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-[480px] bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border relative z-10">
        <h1 className="text-3xl font-bold text-primary mb-8 tracking-tight">Profile setup</h1>

        {step === 1 ? (
          <form onSubmit={handleNext} className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-chat-dark">ZIP Code</label>
              <input 
                type="text" 
                placeholder="Enter your ZIP code" 
                className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-chat-dark">Years in Operation</label>
              <input 
                type="text" 
                placeholder="Enter your operational years" 
                className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-chat-dark">Care Type</label>
              <div className="relative">
                <select defaultValue="" required className="w-full h-[46px] px-4 pr-10 rounded-lg border border-brd-input bg-white text-chat-dark focus:outline-none focus:border-primary text-[15px] appearance-none cursor-pointer">
                  <option value="" disabled className="text-[#A0A0A0]">Please select your care type</option>
                  <option value="companionship">Companionship</option>
                  <option value="errands">Errands & Shopping</option>
                  <option value="meal">Meal Preparation</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full h-[48px] bg-primary text-white rounded-lg font-medium text-[16px] mt-2 hover:bg-primary-light transition-colors">
              Next
            </button>
          </form>
        ) : (
          <form onSubmit={handleFinish} className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-chat-dark">Agency License</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <UploadIcon className="w-[18px] h-[18px]" />
                </div>
                <input 
                  type="text" 
                  placeholder="Please upload your license" 
                  className="w-full h-[46px] pl-11 pr-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px] cursor-pointer"
                  readOnly
                  onClick={() => {/* Mock file picker */}}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-chat-dark">Agency Insurance</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <UploadIcon className="w-[18px] h-[18px]" />
                </div>
                <input 
                  type="text" 
                  placeholder="Please upload your insurance" 
                  className="w-full h-[46px] pl-11 pr-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px] cursor-pointer"
                  readOnly
                  onClick={() => {/* Mock file picker */}}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-chat-dark">Credit/ Debit Card Details</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Please enter your card num" 
                  className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                  required
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A0A0A0] text-[15px]">
                  MM / YY / CVV
                </div>
              </div>
            </div>

            <button type="submit" className="w-full h-[48px] bg-primary text-white rounded-lg font-medium text-[16px] mt-2 hover:bg-primary-light transition-colors">
              Finish
            </button>
          </form>
        )}
      </div>

      {/* Success Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#D3D2CE]/70 backdrop-blur-[1px]" onClick={() => router.push('/agency/dashboard')}></div>
          
          <div className="bg-white rounded-3xl p-10 w-full max-w-[440px] relative z-10 flex flex-col items-center text-center shadow-xl">
            <div className="w-[60px] h-[60px] rounded-2xl bg-[#E8F0EA] flex items-center justify-center mb-6">
              <DoubleCheckIcon className="w-8 h-8 text-[#1E5D38]" />
            </div>
            
            <h2 className="text-[26px] font-bold text-[#2C3E50] mb-4">Thanks, SUNSHINE!</h2>
            
            <p className="text-[17px] text-[#2C3E50] leading-relaxed mb-8 px-4 font-medium">
              Account created. Credentials will be<br/>sent to your email.
            </p>
            
            <button 
              onClick={() => router.push('/agency/dashboard')}
              className="w-[280px] h-[48px] bg-[#122A38] hover:bg-[#1A3A4D] text-white rounded-xl text-[16px] font-medium transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
