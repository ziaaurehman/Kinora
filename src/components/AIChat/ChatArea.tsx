'use client';

import React from 'react';

export default function ChatArea({ onSendClick }: { onSendClick?: () => void }) {
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
          
          {/* AI Message 1 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4" />
                <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
                <rect x="4" y="8" width="16" height="11" rx="5" />
                <path d="M3 11.5v3" />
                <path d="M21 11.5v3" />
                <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col gap-1 max-w-[80%]">
              <div className="bg-chat-primary text-white p-4 px-5 rounded-r-2xl rounded-bl-2xl font-sans text-[15px] leading-relaxed">
                Hi, I'm your care assistant. I can help you find agencies, manage inquiries, and guide you through the process. How can I assist you today?
              </div>
              <span className="text-[11px] text-chat-muted font-sans text-right mr-1">4:55 pm</span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-4 justify-end">
            <div className="flex flex-col gap-1 max-w-[80%] items-end">
              <div className="bg-white border border-border text-chat-dark p-4 px-5 rounded-l-2xl rounded-br-2xl font-sans text-[15px] leading-relaxed">
                I want to submit a query !
              </div>
              <span className="text-[11px] text-chat-muted font-sans text-right mr-1">4:55 pm</span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
              <img src="https://i.pravatar.cc/150?img=47" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* AI Message 2 (Interactive) */}
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            {/* Progress Indicator (centered above) */}
            <div className="flex items-center justify-center w-full max-w-[400px] mx-auto ml-0 md:ml-16 mt-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-chat-primary flex items-center justify-center text-white shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="h-[2px] bg-chat-primary flex-1"></div>
              <div className="w-8 h-8 rounded-full border-[2px] border-[#94A3B8] bg-white flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]"></div>
              </div>
              <div className="h-[2px] bg-[#CBD5E1] flex-1"></div>
              <div className="w-8 h-8 rounded-full border-[2px] border-[#94A3B8] bg-white flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]"></div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0 mt-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4" />
                  <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
                  <rect x="4" y="8" width="16" height="11" rx="5" />
                  <path d="M3 11.5v3" />
                  <path d="M21 11.5v3" />
                  <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              
              <div className="flex flex-col gap-6 w-full">
                {/* Form Card */}
                <div className="bg-white border border-border rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <h3 className="font-sans font-bold text-chat-dark text-base mb-1">What type of care you need ?</h3>
                  <p className="font-sans text-[13px] text-chat-gray mb-5">You can select more than one</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <button style={{ border: '1.5px solid #CBD5E1' }} className="flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:border-chat-primary transition-colors text-left text-chat-dark text-[17px] font-medium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#3F6F4F" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                      </svg>
                      Companion care
                    </button>
                    <button style={{ border: '1.5px solid #CBD5E1' }} className="flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:border-chat-primary transition-colors text-left text-chat-dark text-[17px] font-medium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#3F6F4F" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                      Wellness Check-ins
                    </button>
                    <button style={{ border: '1.5px solid #CBD5E1' }} className="flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:border-chat-primary transition-colors text-left text-chat-dark text-[17px] font-medium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 3 10.5 L 9 6.5 L 15 10.5 L 21 6.5 V 16.5 L 15 20.5 L 9 16.5 L 3 20.5 Z" fill="#3F6F4F" stroke="#3F6F4F" strokeWidth="2" strokeLinejoin="round" />
                        <line x1="9" y1="9" x2="9" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <line x1="15" y1="13" x2="15" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Transportation
                    </button>
                    <button style={{ border: '1.5px solid #CBD5E1' }} className="flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:border-chat-primary transition-colors text-left text-chat-dark text-[17px] font-medium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#3F6F4F" stroke="none"><path d="M19 6h-3c0-2.21-1.79-4-4-4S8 3.79 8 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"></path></svg>
                      Errand Support
                    </button>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-chat-primary text-white font-sans font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition-all">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Inactive Box 1 (ZIP Code) */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0 mt-2 opacity-70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4" />
                  <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
                  <rect x="4" y="8" width="16" height="11" rx="5" />
                  <path d="M3 11.5v3" />
                  <path d="M21 11.5v3" />
                  <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="bg-white border border-border rounded-lg px-5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.01)] opacity-70 w-full">
                <span className="font-sans text-[15px] text-chat-dark">What is the ZIP code where care is needed ?</span>
              </div>
            </div>

            {/* Inactive Box 2 (Urgency) */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white shrink-0 mt-2 opacity-50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4" />
                  <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
                  <rect x="4" y="8" width="16" height="11" rx="5" />
                  <path d="M3 11.5v3" />
                  <path d="M21 11.5v3" />
                  <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="bg-white border border-border rounded-lg px-5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.01)] opacity-50 w-full">
                <span className="font-sans text-[15px] text-chat-dark">How urgent is the care need ?</span>
              </div>
            </div>
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
            />
            <button className="text-chat-muted hover:text-chat-gray shrink-0 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
              </svg>
            </button>
            <button 
              onClick={onSendClick}
              className="flex items-center gap-2 bg-chat-primary text-white px-4 py-2 rounded-lg font-sans font-medium text-sm hover:bg-opacity-90 transition-colors shrink-0 ml-1"
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
