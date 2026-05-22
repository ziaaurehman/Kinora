'use client';

import React from 'react';

export default function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center max-w-[400px] w-[90%] border border-border animate-in fade-in zoom-in duration-200">
        
        <div className="w-[72px] h-[72px] rounded-2xl bg-[#3F6F4F]/10 flex items-center justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3F6F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 8L8 15L4 11" />
            <path d="M21 8L14 15L11 12" />
          </svg>
        </div>

        <h2 className="font-sans text-[26px] font-medium text-[#1A202C] mb-4">
          Thanks, Azher!
        </h2>
        
        <p className="font-sans text-[17px] text-[#4A5568] leading-relaxed mb-8 max-w-[300px]">
          We've received your information. We'll get back to you tomorrow morning.
        </p>

        <button 
          onClick={onClose}
          className="w-[280px] h-[48px] bg-[#112330] text-white font-sans font-medium text-[15px] rounded-xl hover:bg-black transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}
