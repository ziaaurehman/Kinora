'use client';

import React, { useState, useEffect } from 'react';
import SidebarLeft from '@/components/AIChat/SidebarLeft';
import ChatArea from '@/components/AIChat/ChatArea';
import SidebarRight from '@/components/AIChat/SidebarRight';

export interface ChatState {
  careType: string;
  zipCode: string;
  urgency: string;
  step: number; // 1: care type, 2: zip, 3: urgency, 4: complete (summary & recommendations)
}

export default function AIAssistantPage() {
  const [chatState, setChatState] = useState<ChatState>({
    careType: '',
    zipCode: '',
    urgency: '',
    step: 1
  });

  // Load from localStorage if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCareType = localStorage.getItem('chat_careType') || '';
      const savedZip = localStorage.getItem('chat_zip') || '';
      const savedUrgency = localStorage.getItem('chat_urgency') || '';
      const savedStepStr = localStorage.getItem('chat_step');
      
      let savedStep = 1;
      if (savedStepStr) {
        savedStep = parseInt(savedStepStr, 10);
      } else if (savedCareType && savedZip && savedUrgency) {
        savedStep = 4;
      } else if (savedCareType && savedZip) {
        savedStep = 3;
      } else if (savedCareType) {
        savedStep = 2;
      }

      setChatState({
        careType: savedCareType,
        zipCode: savedZip,
        urgency: savedUrgency,
        step: savedStep
      });
    }
  }, []);

  const updateChatState = (newState: Partial<ChatState>) => {
    setChatState(prev => {
      const updated = { ...prev, ...newState };
      if (typeof window !== 'undefined') {
        if (updated.careType) localStorage.setItem('chat_careType', updated.careType);
        if (updated.zipCode) localStorage.setItem('chat_zip', updated.zipCode);
        if (updated.urgency) localStorage.setItem('chat_urgency', updated.urgency);
        localStorage.setItem('chat_step', updated.step.toString());
      }
      return updated;
    });
  };

  const handleReset = () => {
    localStorage.removeItem('chat_careType');
    localStorage.removeItem('chat_zip');
    localStorage.removeItem('chat_urgency');
    localStorage.removeItem('chat_step');
    setChatState({
      careType: '',
      zipCode: '',
      urgency: '',
      step: 1
    });
  };

  return (
    <div className="flex w-full h-[calc(100vh-72px)] bg-bg-section overflow-hidden">
      {/* Left Sidebar */}
      <div className="hidden lg:block h-full shrink-0">
        <SidebarLeft onResetClick={handleReset} />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 h-full min-w-0">
        <ChatArea chatState={chatState} updateChatState={updateChatState} />
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:block h-full shrink-0">
        <SidebarRight chatState={chatState} />
      </div>
    </div>
  );
}
