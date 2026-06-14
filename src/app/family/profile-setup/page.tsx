'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FamilyProfileSetupPage() {
  const router = useRouter();

  const [familyName, setFamilyName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [careNeeds, setCareNeeds] = useState<string[]>([]);
  const [urgency, setUrgency] = useState('Routine');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Pre-fill from chatbot context if it exists
      const savedZip = localStorage.getItem('chat_zip') || '';
      const savedCareType = localStorage.getItem('chat_careType') || '';
      const savedUrgency = localStorage.getItem('chat_urgency') || 'Routine';
      
      if (savedZip) setZipCode(savedZip);
      if (savedCareType) setCareNeeds([savedCareType]);
      if (savedUrgency) setUrgency(savedUrgency);
    }
  }, []);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    localStorage.setItem('profile_familyName', familyName);
    localStorage.setItem('profile_recipientName', recipientName);
    localStorage.setItem('profile_email', email);
    localStorage.setItem('profile_phone', phone);
    localStorage.setItem('profile_zipCode', zipCode);
    localStorage.setItem('profile_fullAddress', fullAddress);
    localStorage.setItem('profile_specialNotes', specialNotes);
    localStorage.setItem('profile_careNeeds', JSON.stringify(careNeeds));
    localStorage.setItem('profile_urgency', urgency);

    router.push('/family/inquiry-submission');
  };

  const toggleCareNeed = (need: string) => {
    if (careNeeds.includes(need)) {
      setCareNeeds(careNeeds.filter(n => n !== need));
    } else {
      setCareNeeds([...careNeeds, need]);
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-bg-cream flex flex-col items-center justify-start pt-12 pb-24 px-6 font-sans">
      <div className="w-full max-w-[650px] bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2 tracking-tight">Family Profile Setup</h1>
          <p className="text-[15px] text-[#8C9BA5]">Please set up your profile to finalize the care request.</p>
        </div>

        <form onSubmit={handleNext} className="flex flex-col gap-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Family Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-chat-dark">Family Name</label>
              <input 
                type="text" 
                placeholder="Enter family name" 
                value={familyName}
                onChange={e => setFamilyName(e.target.value)}
                className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                required
              />
            </div>

            {/* Care Recipient Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-chat-dark">Care Recipient Name</label>
              <input 
                type="text" 
                placeholder="Who needs care?" 
                value={recipientName}
                onChange={e => setRecipientName(e.target.value)}
                className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Contact Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-chat-dark">Contact Email</label>
              <input 
                type="email" 
                placeholder="Enter email address" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                required
              />
            </div>

            {/* Contact Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-chat-dark">Contact Phone</label>
              <input 
                type="tel" 
                placeholder="Enter contact phone" 
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* ZIP Code */}
            <div className="flex flex-col gap-1.5 sm:col-span-1">
              <label className="text-[13px] font-semibold text-chat-dark">ZIP Code</label>
              <input 
                type="text" 
                placeholder="ZIP Code" 
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
                className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                required
              />
            </div>

            {/* Full Address */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-[13px] font-semibold text-chat-dark">Full Address</label>
              <input 
                type="text" 
                placeholder="Full address where care is needed" 
                value={fullAddress}
                onChange={e => setFullAddress(e.target.value)}
                className="w-full h-[46px] px-4 rounded-lg border border-brd-input bg-white text-chat-dark placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary text-[15px]"
                required
              />
            </div>
          </div>

          {/* Care Needs Selection */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-chat-dark">Care Needs</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Companion Care', 'Wellness Check-ins', 'Transportation', 'Errand Support', 'Meal Preparation', 'Overnight Care'].map((need) => {
                const isSelected = careNeeds.includes(need);
                return (
                  <button
                    key={need}
                    type="button"
                    onClick={() => toggleCareNeed(need)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors text-left text-[14px] font-medium ${isSelected ? 'border-[#3F6F4F] bg-[#E6F8ED] text-[#3F6F4F]' : 'border-gray-300 bg-white text-chat-dark hover:border-gray-400'}`}
                  >
                    <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center ${isSelected ? 'bg-[#3F6F4F] border-[#3F6F4F] text-white' : 'bg-white border-gray-300'}`}>
                      {isSelected && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    {need}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Urgency Level */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-chat-dark">Urgency Level</label>
            <div className="relative">
              <select 
                value={urgency} 
                onChange={e => setUrgency(e.target.value)} 
                className="w-full h-[46px] px-4 pr-10 rounded-lg border border-brd-input bg-white text-chat-dark focus:outline-none focus:border-primary text-[15px] appearance-none cursor-pointer"
              >
                <option value="Routine">Routine (within 2 weeks)</option>
                <option value="Soon">Soon (within a week)</option>
                <option value="Urgent">Urgent (within 48 hours)</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>

          {/* Special Notes */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-chat-dark">Special Notes (Optional)</label>
            <textarea 
              placeholder="Any additional details or special requests"
              value={specialNotes}
              onChange={e => setSpecialNotes(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-brd-input rounded-lg text-[15px] text-chat-dark min-h-[100px] focus:outline-none focus:border-primary"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full h-[48px] bg-[#112330] hover:bg-[#1A3A4D] text-white rounded-xl text-[16px] font-medium transition-colors mt-4 shadow-sm"
          >
            Next
          </button>
        </form>

      </div>
    </div>
  );
}
