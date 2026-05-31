'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type NotificationType = 'inquiry' | 'chat';

interface NotificationItem {
  id: string;
  type: NotificationType;
  content: React.ReactNode;
  time: string;
}

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
  </svg>
);

export default function NotificationsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'inquiry' | 'chat'>('all');
  
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      type: 'inquiry',
      content: <>Your inquiry has been accepted by <strong className="font-bold text-primary">SUNSHINE Care</strong>. You can now chat with them to <strong className="font-bold text-primary">continue</strong>.</>,
      time: 'Last Wednesday at 9:42 AM'
    },
    {
      id: '2',
      type: 'inquiry',
      content: <>Your inquiry to <strong className="font-bold text-primary">MEDPULSE</strong> was declined. We&apos;re <strong className="font-bold text-primary">re-routing</strong> it to the next best agency.</>,
      time: 'Last Wednesday at 9:42 AM'
    },
    {
      id: '3',
      type: 'chat',
      content: <><strong className="font-bold text-primary">SUNSHINE Care</strong> : &quot;Hi, we&apos;ve reviewed your inquiry—let&apos;s discuss next steps.&quot;</>,
      time: 'Last Wednesday at 9:42 AM'
    },
    {
      id: '4',
      type: 'chat',
      content: <><strong className="font-bold text-primary">MEDPULSE</strong> : &quot;We&apos;re available from 8 AM to 8 PM—feel free to reach out anytime.&quot;</>,
      time: 'Last Wednesday at 9:42 AM'
    },
    {
      id: '5',
      type: 'chat',
      content: <><strong className="font-bold text-primary">Sunrise Care</strong> : &quot;Thank you for reaching out. A representative will contact you shortly.&quot;</>,
      time: 'Last Tuesday at 4:15 PM'
    },
    {
      id: '6',
      type: 'chat',
      content: <><strong className="font-bold text-primary">Harmony Home Care</strong> : &quot;Your appointment for a consultation has been scheduled.&quot;</>,
      time: 'Last Monday at 11:30 AM'
    },
  ]);

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const inquiryCount = notifications.filter(n => n.type === 'inquiry').length;
  const chatCount = notifications.filter(n => n.type === 'chat').length;
  const allCount = notifications.length;

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === 'all') return true;
    return n.type === activeTab;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-8 pb-20 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-10">
          <button 
            onClick={() => router.back()}
            className="w-[42px] h-[42px] rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 hover:bg-gray-50 transition-colors shadow-sm mt-1"
          >
            <ChevronLeftIcon className="w-5 h-5 text-primary" />
          </button>
          
          <div className="flex flex-col">
            <h1 className="text-[32px] font-bold text-primary mb-1">Notifications</h1>
            <p className="text-[15px] text-[#8C9BA5] font-medium">Real-time notifications to keep you informed and in control.</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-[#F0F2F5] rounded-[24px] p-2 md:p-3 max-w-[900px] mb-10 flex items-center justify-between">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-4 px-2 text-center rounded-[20px] transition-all duration-200 text-[16px] md:text-[18px] ${
              activeTab === 'all' 
                ? 'bg-white text-primary font-bold shadow-[0_2px_10px_rgba(0,0,0,0.05)]' 
                : 'text-[#8C9BA5] font-medium hover:text-primary hover:bg-gray-100/50'
            }`}
          >
            All ( {allCount} notifications )
          </button>
          
          <button
            onClick={() => setActiveTab('inquiry')}
            className={`flex-1 py-4 px-2 text-center rounded-[20px] transition-all duration-200 text-[16px] md:text-[18px] ${
              activeTab === 'inquiry' 
                ? 'bg-white text-primary font-bold shadow-[0_2px_10px_rgba(0,0,0,0.05)]' 
                : 'text-[#8C9BA5] font-medium hover:text-primary hover:bg-gray-100/50'
            }`}
          >
            Inquiry ( {inquiryCount} notifications )
          </button>
          
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-4 px-2 text-center rounded-[20px] transition-all duration-200 text-[16px] md:text-[18px] ${
              activeTab === 'chat' 
                ? 'bg-white text-primary font-bold shadow-[0_2px_10px_rgba(0,0,0,0.05)]' 
                : 'text-[#8C9BA5] font-medium hover:text-primary hover:bg-gray-100/50'
            }`}
          >
            Chat ( {chatCount} notifications )
          </button>
        </div>
        
        {/* Notifications List Card */}
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden flex flex-col w-full max-w-[1000px]">
          <div className="px-8 py-6 border-b border-gray-100">
            <h2 className="text-[22px] font-bold text-primary tracking-tight">Notifications List</h2>
          </div>
          
          <div className="flex flex-col p-8 gap-5">
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-10 text-gray-400">No notifications found.</div>
            ) : (
              filteredNotifications.map((notif) => {
                const isInquiry = notif.type === 'inquiry';
                const bgColor = isInquiry ? 'bg-[#FFF9F6]' : 'bg-[#F2FCF5]';
                const borderColor = isInquiry ? 'border-[#FCEBE1]' : 'border-[#E2F5E9]';
                const dotColor = isInquiry ? 'bg-[#F39C72]' : 'bg-[#6DC494]';
                
                return (
                  <div key={notif.id} className={`relative rounded-xl p-6 border ${borderColor} ${bgColor} flex flex-col gap-3 transition-all hover:shadow-sm`}>
                    
                    {/* Close Button */}
                    <button 
                      onClick={() => removeNotification(notif.id)}
                      className="absolute top-5 right-5 text-[#B4C0C9] hover:text-[#8C9BA5] transition-colors"
                      aria-label="Remove notification"
                    >
                      <XIcon className="w-5 h-5" />
                    </button>
                    
                    {/* Content */}
                    <div className="flex items-start gap-2 pr-8">
                      <div className={`w-2 h-2 rounded-full mt-2.5 shrink-0 border-[1.5px] border-white ring-1 ${isInquiry ? 'ring-[#F39C72]' : 'ring-[#6DC494]'} ${dotColor}`}></div>
                      <p className="text-[17px] text-[#2C3E50] leading-relaxed">
                        {notif.content}
                      </p>
                    </div>
                    
                    {/* Time */}
                    <div className="pl-4">
                      <span className="text-[13px] font-medium text-[#A4B3BC] tracking-wide">{notif.time}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}
