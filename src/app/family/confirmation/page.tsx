'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ConfirmationPage() {
  const router = useRouter();
  const [name, setName] = useState('Azher'); // Default fallback

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const familyName = localStorage.getItem('profile_familyName');
      if (familyName) {
        setName(familyName);
      }
    }
  }, []);

  const handleDone = () => {
    router.push('/family/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-bg-cream flex flex-col items-center justify-center p-6 py-12 font-sans">
      <div className="bg-white rounded-[32px] p-10 w-full max-w-[450px] shadow-sm border border-border flex flex-col items-center text-center">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-[#E5ECE7] rounded-3xl flex items-center justify-center mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#405D47" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Thanks, {name}!</h2>
        
        <p className="text-[16px] text-chat-dark mb-6 leading-relaxed px-2">
          Your inquiry has been successfully submitted. We will process it and match you with suitable providers shortly.
        </p>

        <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-4 mb-8 text-[13px] text-txt-secondary leading-relaxed w-full">
          You can track the status of your matches and communicate with agencies directly from your Family Dashboard.
        </div>
        
        <button 
          onClick={handleDone}
          className="w-full bg-[#122A38] text-white py-4 rounded-xl font-medium text-[16px] hover:bg-primary transition-colors shadow-sm"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
