'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChatState } from '@/app/ai-assistant/page';

interface SidebarRightProps {
  chatState: ChatState;
}

export default function SidebarRight({ chatState }: SidebarRightProps) {
  const router = useRouter();

  const handleRequestCare = () => {
    // Save current chatbot state into profile setup context
    if (chatState.careType) localStorage.setItem('chat_careType', chatState.careType);
    if (chatState.zipCode) localStorage.setItem('chat_zip', chatState.zipCode);
    if (chatState.urgency) localStorage.setItem('chat_urgency', chatState.urgency);
    
    localStorage.setItem('selectedAgency', 'Preferred Match (Kinora Admin Choice)');
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      router.push('/family/profile-setup');
    } else {
      localStorage.setItem('requestCareFlow', 'true');
      router.push('/signup');
    }
  };

  const isFormComplete = !!(chatState.careType && chatState.zipCode && chatState.urgency);

  return (
    <div className="w-[400px] h-full flex flex-col shrink-0 bg-bg-cream px-6 py-6 overflow-y-auto">
      <div className="bg-white rounded-2xl flex-1 flex flex-col p-6 border border-border shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <h2 className="font-serif font-bold text-xl text-chat-dark mb-4 tracking-tight">Your Inquiry Summary</h2>
        <hr className="border-border mb-6" />

        <div className="flex-1 flex flex-col items-center justify-start">
          <p className="font-sans text-[13px] text-chat-muted leading-relaxed mb-6 px-4 text-center">
            We'll use this information to find the best available agencies for you.
          </p>

          <div className="w-full flex flex-col gap-4">
            <SummaryItem 
              icon={<img src="/icon-accessible.png" alt="Care Type" className="w-[18px] h-[18px] object-contain brightness-0 opacity-80" />}
              label="Care Type"
              value={chatState.careType || '--'}
            />
            <hr className="border-border" />
            
            <SummaryItem 
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>}
              label="ZIP Code"
              value={chatState.zipCode || '--'}
            />
            <hr className="border-border" />

            <SummaryItem 
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></svg>}
              label="Urgency"
              value={chatState.urgency || '--'}
            />
            <hr className="border-border" />

            <SummaryItem 
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"></path></svg>}
              label="Preferred Schedule"
              value={isFormComplete ? "Weekdays" : "--"}
            />
            <hr className="border-border" />

            <SummaryItem 
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>}
              label="Additional Notes"
              value="--"
            />
          </div>
        </div>

        <div className="mt-8">
          <button 
            disabled={!isFormComplete}
            onClick={handleRequestCare}
            className={`w-full h-[52px] rounded-lg font-sans font-medium transition-all text-sm text-white ${isFormComplete ? 'bg-chat-primary hover:bg-opacity-90 cursor-pointer shadow-sm' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Request Care Via Kinora
          </button>
        </div>
      </div>
    </div>
  );
}

function SummaryItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center text-chat-dark">
          {icon}
        </div>
        <span className="font-sans font-semibold text-chat-dark text-[15px]">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className={`font-sans text-[13px] ${value === '--' ? 'text-chat-muted' : 'text-chat-gray'}`}>{value}</span>
        <button className="text-chat-muted hover:text-chat-dark transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </button>
      </div>
    </div>
  );
}
