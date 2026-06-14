'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChatState } from '@/app/ai-assistant/page';

interface ChatAreaProps {
  chatState: ChatState;
  updateChatState: (state: Partial<ChatState>) => void;
}

export default function ChatArea({ chatState, updateChatState }: ChatAreaProps) {
  const [zipInput, setZipInput] = useState(chatState.zipCode);

  const handleSelectCareType = (type: string) => {
    updateChatState({ careType: type, step: 2 });
  };

  const handleZipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipInput.trim()) {
      updateChatState({ zipCode: zipInput.trim(), step: 3 });
    }
  };

  const handleSelectUrgency = (level: string) => {
    updateChatState({ urgency: level, step: 4 });
  };

  // Helper icons
  const RobotIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
      <rect x="4" y="8" width="16" height="11" rx="5" />
      <path d="M3 11.5v3" />
      <path d="M21 11.5v3" />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );

  const UserIcon = () => (
    <img src="https://i.pravatar.cc/150?img=47" alt="User" className="w-full h-full object-cover" />
  );

  return (
    <div className="flex-1 h-full flex flex-col bg-bg-cream pt-4 md:pt-6 pb-4 md:pb-6 overflow-hidden min-w-0 px-2 md:px-0">
      <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.02)] border border-border overflow-hidden">
        
        {/* Header */}
        <div className="h-[72px] flex items-center justify-between px-4 md:px-8 border-b border-border shrink-0">
          <h1 className="font-serif font-bold text-2xl text-chat-dark tracking-tight">Kinora Care Assistant</h1>
          <button className="text-chat-muted hover:text-chat-dark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 md:py-8 flex flex-col gap-6">
          
          {/* AI Intro Message */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0">
              <RobotIcon />
            </div>
            <div className="flex flex-col gap-1 max-w-[80%]">
              <div className="bg-chat-primary text-white p-4 px-5 rounded-r-2xl rounded-bl-2xl font-sans text-[15px] leading-relaxed">
                Hi, I'm your care assistant. I can help you find agencies, manage inquiries, and guide you through the process. How can I assist you today?
              </div>
              <span className="text-[11px] text-chat-muted font-sans text-right mr-1">4:55 pm</span>
            </div>
          </div>

          {/* User Response to Intro */}
          <div className="flex items-start gap-4 justify-end">
            <div className="flex flex-col gap-1 max-w-[80%] items-end">
              <div className="bg-white border border-border text-chat-dark p-4 px-5 rounded-l-2xl rounded-br-2xl font-sans text-[15px] leading-relaxed">
                I want to submit a query !
              </div>
              <span className="text-[11px] text-chat-muted font-sans text-right mr-1">4:55 pm</span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
              <UserIcon />
            </div>
          </div>

          {/* ================= STEP-BY-STEP PROGRESS BAR ================= */}
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center w-full max-w-[400px] mx-auto ml-0 md:ml-16 mt-2 mb-2">
              {/* Circle 1: Care Type */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${chatState.step > 1 ? 'bg-chat-primary' : 'border-[2px] border-[#D96C3B] bg-white text-[#D96C3B] font-bold text-sm'}`}>
                {chatState.step > 1 ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : "1"}
              </div>
              
              {/* Line 1 */}
              <div className={`h-[2px] flex-1 ${chatState.step > 1 ? 'bg-chat-primary' : 'bg-[#CBD5E1]'}`}></div>
              
              {/* Circle 2: ZIP Code */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${chatState.step > 2 ? 'bg-chat-primary text-white' : chatState.step === 2 ? 'border-[2px] border-[#D96C3B] bg-white text-[#D96C3B] font-bold text-sm' : 'border-[2px] border-[#94A3B8] bg-white text-gray-400 text-sm'}`}>
                {chatState.step > 2 ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : "2"}
              </div>
              
              {/* Line 2 */}
              <div className={`h-[2px] flex-1 ${chatState.step > 2 ? 'bg-chat-primary' : 'bg-[#CBD5E1]'}`}></div>
              
              {/* Circle 3: Urgency */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${chatState.step > 3 ? 'bg-chat-primary text-white' : chatState.step === 3 ? 'border-[2px] border-[#D96C3B] bg-white text-[#D96C3B] font-bold text-sm' : 'border-[2px] border-[#94A3B8] bg-white text-gray-400 text-sm'}`}>
                {chatState.step > 3 ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : "3"}
              </div>
            </div>

            {/* ================= STEP 1: CARE TYPE ================= */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0 mt-4">
                <RobotIcon />
              </div>
              
              <div className="flex flex-col gap-4 w-full">
                {chatState.step === 1 ? (
                  <div className="bg-white border border-border rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                    <h3 className="font-sans font-bold text-chat-dark text-base mb-1">What type of care do you need?</h3>
                    <p className="font-sans text-[13px] text-chat-gray mb-5">Select your primary care type preference</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Companion Care', 'Wellness Check-ins', 'Transportation', 'Errand Support'].map((type) => (
                        <button 
                          key={type}
                          onClick={() => handleSelectCareType(type)}
                          style={{ border: '1.5px solid #CBD5E1' }} 
                          className="flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:border-chat-primary hover:bg-[#F8FAFC] transition-all text-left text-chat-dark text-[16px] font-medium"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-chat-primary text-white p-4 px-5 rounded-r-2xl rounded-bl-2xl font-sans text-[15px] max-w-[80%]">
                    Awesome. You selected <strong className="underline">{chatState.careType}</strong>.
                  </div>
                )}
              </div>
            </div>

            {/* ================= STEP 2: ZIP CODE ================= */}
            {chatState.step >= 2 && (
              <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0 mt-4">
                  <RobotIcon />
                </div>
                
                <div className="flex flex-col gap-4 w-full">
                  {chatState.step === 2 ? (
                    <form onSubmit={handleZipSubmit} className="bg-white border border-border rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                      <h3 className="font-sans font-bold text-chat-dark text-base mb-2">What is the ZIP code where care is needed?</h3>
                      
                      <div className="flex gap-3 max-w-[320px] mb-4">
                        <input 
                          type="text" 
                          placeholder="e.g. 675990" 
                          value={zipInput}
                          onChange={e => setZipInput(e.target.value)}
                          className="flex-1 h-[42px] px-3.5 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-chat-primary"
                          required
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <button type="submit" className="bg-chat-primary text-white font-sans font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition-all">
                          Continue
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-chat-primary text-white p-4 px-5 rounded-r-2xl rounded-bl-2xl font-sans text-[15px] max-w-[80%]">
                      The care ZIP code is <strong className="underline">{chatState.zipCode}</strong>.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ================= STEP 3: URGENCY ================= */}
            {chatState.step >= 3 && (
              <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0 mt-4">
                  <RobotIcon />
                </div>
                
                <div className="flex flex-col gap-4 w-full">
                  {chatState.step === 3 ? (
                    <div className="bg-white border border-border rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                      <h3 className="font-sans font-bold text-chat-dark text-base mb-4">How urgent is the care need?</h3>
                      
                      <div className="flex flex-col gap-3">
                        {[
                          { key: 'Routine', text: 'Routine (within 2 weeks)' },
                          { key: 'Soon', text: 'Soon (within a week)' },
                          { key: 'Urgent', text: 'Urgent (within 48 hours)' }
                        ].map((urg) => (
                          <button 
                            key={urg.key}
                            onClick={() => handleSelectUrgency(urg.key)}
                            style={{ border: '1.5px solid #CBD5E1' }} 
                            className="w-full text-left px-4 py-3 rounded-lg bg-white hover:border-chat-primary hover:bg-[#F8FAFC] transition-all text-chat-dark text-[15px] font-medium"
                          >
                            {urg.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-chat-primary text-white p-4 px-5 rounded-r-2xl rounded-bl-2xl font-sans text-[15px] max-w-[80%]">
                      Urgency level is: <strong className="underline">{chatState.urgency}</strong>.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ================= STEP 4: SUMMARY & RECOMMENDATIONS ================= */}
            {chatState.step === 4 && (
              <>
                {/* Care Summary Card */}
                <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0 mt-2">
                    <RobotIcon />
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                      <h3 className="font-sans font-bold text-[#3F6F4F] text-[18px] mb-3">AI Care Summary</h3>
                      <p className="font-sans text-[14px] text-chat-dark mb-4 leading-relaxed">
                        I've compiled your preferences to help recommend matching home care agencies:
                      </p>
                      <div className="bg-bg-cream rounded-xl p-4 border border-gray-100 flex flex-col gap-2.5 text-sm text-chat-dark">
                        <div><strong>Care Type:</strong> {chatState.careType}</div>
                        <div><strong>ZIP Code:</strong> {chatState.zipCode}</div>
                        <div><strong>Urgency:</strong> {chatState.urgency}</div>
                        <div><strong>Routing Note:</strong> Final routing matches will be overseen by a Kinora admin.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0 mt-2">
                    <RobotIcon />
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                      <h3 className="font-sans font-bold text-chat-dark text-[18px] mb-4">Recommended Agencies</h3>
                      <p className="font-sans text-[14px] text-chat-gray mb-4">
                        Based on your profile details, we've matched you with these high-performing agencies:
                      </p>
                      
                      <div className="flex flex-col gap-4">
                        {/* Agency 1 */}
                        <div className="border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F8FAFC]">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary font-bold">
                              CA
                            </div>
                            <div>
                              <h4 className="font-sans font-bold text-base text-primary">CAREGIVER Agency</h4>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-accent text-xs">★ 4.5</span>
                                <span className="text-xs text-chat-muted">| Kinora Verified</span>
                              </div>
                            </div>
                          </div>
                          <Link 
                            href="/agencies/profile"
                            onClick={() => localStorage.setItem('selectedAgency', 'Caregiver agency')}
                            className="bg-[#122A38] text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-primary transition-colors text-center"
                          >
                            View Profile
                          </Link>
                        </div>

                        {/* Agency 2 */}
                        <div className="border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F8FAFC]">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary font-bold">
                              MP
                            </div>
                            <div>
                              <h4 className="font-sans font-bold text-base text-primary">MEDPULSE</h4>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-accent text-xs">★ 4.7</span>
                                <span className="text-xs text-chat-muted">| Kinora Verified</span>
                              </div>
                            </div>
                          </div>
                          <Link 
                            href="/agencies/profile"
                            onClick={() => localStorage.setItem('selectedAgency', 'MEDPULSE')}
                            className="bg-[#122A38] text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-primary transition-colors text-center"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

        {/* Input Bar */}
        <div className="p-4 px-6 border-t border-border shrink-0 bg-[#FBFBFC]">
          <div className="w-full flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 focus-within:border-chat-primary focus-within:shadow-[0_0_0_2px_rgba(63,111,79,0.1)] transition-all">
            <span className="shrink-0 flex items-center justify-center w-[18px] h-[18px]">
              <img src="/icon-accessible.png" alt="AI Action" className="w-full h-full object-contain opacity-70" />
            </span>
            <input 
              type="text" 
              placeholder="Initiate a query or send a command to AI....." 
              className="flex-1 bg-transparent border-none outline-none font-sans text-[15px] text-chat-dark placeholder:text-chat-muted"
              disabled
            />
            <button className="text-chat-muted hover:text-chat-gray shrink-0 transition-colors" disabled>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
              </svg>
            </button>
            <button 
              className="flex items-center gap-2 bg-chat-primary text-white px-4 py-2 rounded-lg font-sans font-medium text-sm hover:bg-opacity-90 transition-colors shrink-0 ml-1 opacity-50 cursor-not-allowed"
              disabled
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
