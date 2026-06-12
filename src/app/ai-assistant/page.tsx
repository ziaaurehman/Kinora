'use client';

import React, { useState } from 'react';
import SidebarLeft from '@/components/AIChat/SidebarLeft';
import ChatArea from '@/components/AIChat/ChatArea';
import SidebarRight from '@/components/AIChat/SidebarRight';
import SuccessModal from '@/components/AIChat/SuccessModal';

export default function AIAssistantPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // In a real application, you would tie setIsModalOpen(true) to the "Request Care" button.
  // We'll leave it as false for the styling prototype, but it's ready for interactivity.

  return (
    <div className="flex w-full h-[calc(100vh-72px)] bg-bg-section overflow-hidden">
      {/* Left Sidebar (Hidden on mobile for now, or could be a drawer) */}
      <div className="hidden lg:block h-full shrink-0">
        <SidebarLeft />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 h-full min-w-0">
        <ChatArea onSendClick={() => setIsModalOpen(true)} />
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:block h-full shrink-0">
        <SidebarRight />
      </div>

      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
