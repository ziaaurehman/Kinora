'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InquirySubmissionPage() {
  const router = useRouter();

  const [details, setDetails] = useState({
    familyName: '',
    recipientName: '',
    email: '',
    phone: '',
    zipCode: '',
    fullAddress: '',
    specialNotes: '',
    careNeeds: [] as string[],
    urgency: 'Routine',
    selectedAgency: 'None Selected'
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const familyName = localStorage.getItem('profile_familyName') || '';
      const recipientName = localStorage.getItem('profile_recipientName') || '';
      const email = localStorage.getItem('profile_email') || '';
      const phone = localStorage.getItem('profile_phone') || '';
      const zipCode = localStorage.getItem('profile_zipCode') || '';
      const fullAddress = localStorage.getItem('profile_fullAddress') || '';
      const specialNotes = localStorage.getItem('profile_specialNotes') || '';
      
      let careNeeds: string[] = [];
      try {
        const parsed = localStorage.getItem('profile_careNeeds');
        if (parsed) careNeeds = JSON.parse(parsed);
      } catch (e) {
        console.error(e);
      }

      const urgency = localStorage.getItem('profile_urgency') || 'Routine';
      const selectedAgency = localStorage.getItem('selectedAgency') || 'Preferred Match (Kinora Admin Choice)';

      setDetails({
        familyName,
        recipientName,
        email,
        phone,
        zipCode,
        fullAddress,
        specialNotes,
        careNeeds,
        urgency,
        selectedAgency
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save submission state
    localStorage.setItem('inquirySubmitted', 'true');
    localStorage.setItem('submittedAgency', details.selectedAgency);
    localStorage.setItem('submittedDate', new Date().toLocaleDateString());
    
    // Clear flow helper
    localStorage.removeItem('requestCareFlow');
    
    router.push('/family/confirmation');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-bg-cream flex flex-col items-center justify-start pt-12 pb-24 px-6 font-sans">
      <div className="w-full max-w-[600px] bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2 tracking-tight">Review & Submit Inquiry</h1>
          <p className="text-[15px] text-[#8C9BA5]">Please review your care inquiry details before submitting.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Details Section */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
            
            <div className="flex justify-between items-start border-b border-gray-200/60 pb-3">
              <span className="text-[14px] text-[#8C9BA5] font-medium">Family Name:</span>
              <span className="text-[14px] text-primary font-semibold text-right">{details.familyName}</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200/60 pb-3">
              <span className="text-[14px] text-[#8C9BA5] font-medium">Care Recipient:</span>
              <span className="text-[14px] text-primary font-semibold text-right">{details.recipientName}</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200/60 pb-3">
              <span className="text-[14px] text-[#8C9BA5] font-medium">Contact:</span>
              <span className="text-[14px] text-primary font-semibold text-right">{details.phone} ({details.email})</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200/60 pb-3">
              <span className="text-[14px] text-[#8C9BA5] font-medium">Care Location:</span>
              <span className="text-[14px] text-primary font-semibold text-right">{details.fullAddress} (ZIP: {details.zipCode})</span>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200/60 pb-3">
              <span className="text-[14px] text-[#8C9BA5] font-medium">Urgency:</span>
              <span className="text-[14px] text-[#D96C3B] font-bold text-right">{details.urgency}</span>
            </div>

            <div className="flex flex-col border-b border-gray-200/60 pb-3 gap-1">
              <span className="text-[14px] text-[#8C9BA5] font-medium">Requested Services:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {details.careNeeds.length > 0 ? (
                  details.careNeeds.map(need => (
                    <span key={need} className="bg-[#6B7B88] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {need}
                    </span>
                  ))
                ) : (
                  <span className="text-[14px] text-txt-secondary font-medium">None Specified</span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-start border-b border-gray-200/60 pb-3">
              <span className="text-[14px] text-[#8C9BA5] font-medium">Agency Preference:</span>
              <span className="text-[14px] text-[#3F6F4F] font-bold text-right">{details.selectedAgency}</span>
            </div>

            {details.specialNotes && (
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-[#8C9BA5] font-medium">Special Notes:</span>
                <span className="text-[14px] text-primary italic leading-relaxed bg-white p-3 rounded-lg border border-gray-100">{details.specialNotes}</span>
              </div>
            )}

          </div>

          {/* Admin Routing Note */}
          <div className="bg-[#FFF8F2] border border-[#FFE7D6] rounded-2xl p-4 flex gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D96C3B" strokeWidth="2" className="shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p className="font-sans text-[13px] text-[#8A4A21] leading-relaxed">
              <strong>Please Note:</strong> Your selected agency is recorded as a preference. Final matching and routing are done by the Kinora administrator to ensure provider availability and optimal care alignment.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button 
              type="button"
              onClick={handleBack}
              className="flex-1 h-[48px] bg-white text-primary border border-primary rounded-xl font-sans font-medium text-[15px] hover:bg-gray-50 transition-all text-center"
            >
              Back
            </button>
            <button 
              type="submit" 
              className="flex-1 h-[48px] bg-[#3F6F4F] hover:bg-[#345c41] text-white rounded-xl text-[15px] font-medium transition-colors shadow-sm"
            >
              Submit Inquiry
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
