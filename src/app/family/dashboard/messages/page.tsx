import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Messages',
};

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const MoreHorizontalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="19" cy="12" r="1"/>
    <circle cx="5" cy="12" r="1"/>
  </svg>
);

const PaperclipIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
  </svg>
);

const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function AvatarPlaceholder({ bg = 'bg-[#E5E7EB]', src, text }: { bg?: string, src?: string, text?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="avatar" className="w-[46px] h-[46px] rounded-full object-cover shrink-0" />;
  }
  return (
    <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0 overflow-hidden ${bg}`}>
       {text ? <span className="text-gray-500 font-medium">{text}</span> : <UserIcon className="w-6 h-6 text-gray-400" />}
    </div>
  );
}

const contacts = [
  { id: 1, name: 'Dr. John Doe', role: 'Orthopedic surgeon', time: '4:55 pm', active: true, avatar: '/avatar.png' },
  { id: 2, name: 'Dr. John Doe', role: 'Heart specialist', time: '4:55 pm', unread: 2, avatar: '/avatar.png' },
  { id: 3, name: 'John Doe', role: 'Medical specialist', time: '4:55 pm', unread: 2, bg: 'bg-[#F2EAE5]' },
  { id: 4, name: 'Dr. John Doe', role: 'ENT specialist', time: '4:55 pm', unread: 2, bg: 'bg-[#F2EAE5]' },
  { id: 5, name: 'Dr. John Doe', role: 'Eye specialist', time: '4:55 pm', unread: 2, avatar: '/avatar.png' },
  { id: 6, name: 'Dr. John Doe', role: 'Lorem ipsum dolor...', time: '4:55 pm', unread: 2, avatar: '/avatar.png' },
];

export default function MessagesPage() {
  return (
    <div className="bg-bg-section min-h-screen pt-10 pb-20 px-4 sm:px-6 font-sans">
      <div className="max-w-[1280px] mx-auto h-[85vh] flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar - Contacts List */}
        <div className="w-full md:w-[360px] flex flex-col gap-4 h-full shrink-0">
          
          {/* Search Bar */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-[15px] focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm placeholder:text-gray-400"
              placeholder="Search doctor"
            />
          </div>
          
          {/* Filters */}
          <div className="flex items-center justify-between px-1">
            <button className="flex items-center gap-1.5 text-accent text-[15px] font-semibold hover:opacity-80 transition-opacity">
              All <ChevronDownIcon className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1.5 text-accent text-[15px] font-semibold hover:opacity-80 transition-opacity">
              Most recent <ChevronDownIcon className="w-4 h-4" />
            </button>
          </div>
          
          {/* Contacts */}
          <div className="flex flex-col gap-3 overflow-y-auto pb-4 pr-1 custom-scrollbar">
            {contacts.map((contact) => (
              <div 
                key={contact.id} 
                className={`flex items-start justify-between p-4 rounded-[20px] cursor-pointer transition-all duration-200 shadow-sm ${
                  contact.active 
                    ? 'bg-[#EAF3EA] border-transparent' 
                    : 'bg-white border border-gray-100 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <AvatarPlaceholder src={contact.avatar} bg={contact.bg} text={!contact.avatar ? 'JD' : undefined} />
                  <div className="flex flex-col">
                    <span className="text-[16px] font-semibold text-primary">{contact.name}</span>
                    <span className={`text-[14px] mt-0.5 ${contact.active ? 'text-[#396C4A]/80' : 'text-[#8C9BA5]'}`}>
                      {contact.role}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end justify-between h-[42px]">
                  <span className={`text-[12px] font-medium ${contact.active ? 'text-[#396C4A]' : 'text-[#8C9BA5]'}`}>
                    {contact.time}
                  </span>
                  {contact.unread && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#396C4A] text-white text-[12px] font-bold">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Chat Area */}
        <div className="flex-1 bg-white rounded-3xl shadow-sm border border-border flex flex-col overflow-hidden h-full">
          
          {/* Chat Header */}
          <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
            <h2 className="text-[24px] font-bold text-primary">Messages</h2>
            <button className="text-gray-400 hover:text-primary transition-colors">
              <MoreHorizontalIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6 custom-scrollbar bg-white">
             
             {/* Date Divider */}
             <div className="flex justify-center mb-4">
               <span className="px-4 py-1 bg-white border border-gray-200 rounded-lg text-[13px] font-medium text-gray-500 shadow-sm">
                 Yesterday
               </span>
             </div>
             
             {/* Received Message */}
             <div className="flex items-start gap-4 max-w-[85%]">
               <AvatarPlaceholder src="/avatar.png" />
               <div className="flex flex-col gap-1.5">
                 <div className="bg-[#396C4A] text-white p-5 rounded-2xl rounded-tl-sm text-[15px] leading-relaxed shadow-sm">
                   This is a message sent by the doctor. Lorem ipsum dolor. Dolor sit amet consectetur adipiscing elit. Semper viverra nam libero justo. Lorem ipsum dolor.
                 </div>
                 <span className="text-[12px] text-gray-400 font-medium ml-1">4:55 pm</span>
               </div>
             </div>
             
             {/* Sent Message */}
             <div className="flex items-start gap-4 max-w-[85%] self-end flex-row-reverse">
               <AvatarPlaceholder src="/avatar.png" />
               <div className="flex flex-col gap-1.5 items-end">
                 <div className="bg-white border border-gray-200 text-primary p-5 rounded-2xl rounded-tr-sm text-[15px] leading-relaxed shadow-sm">
                   This is a message sent by the user. Lorem ipsum dolor. Dolor sit amet consectetur adipiscing elit. Semper viverra nam libero justo. Lorem ipsum dolor.
                 </div>
                 <span className="text-[12px] text-gray-400 font-medium mr-1">4:55 pm</span>
               </div>
             </div>
             
             {/* Received Message 2 */}
             <div className="flex items-start gap-4 max-w-[85%] mt-2">
               <AvatarPlaceholder src="/avatar.png" />
               <div className="flex flex-col gap-1.5">
                 <div className="bg-[#396C4A] text-white p-5 rounded-2xl rounded-tl-sm text-[15px] leading-relaxed shadow-sm">
                   This is a message sent by the doctor. Lorem ipsum dolor. Dolor sit amet consectetur adipiscing elit. Semper viverra nam libero justo. Lorem ipsum dolor.
                 </div>
                 <span className="text-[12px] text-gray-400 font-medium ml-1">4:55 pm</span>
               </div>
             </div>
             
          </div>
          
          {/* Chat Input */}
          <div className="p-6 border-t border-gray-100 bg-white shrink-0">
            <div className="flex items-center gap-4 w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Write your message..."
                  className="w-full pl-5 pr-12 py-4 bg-white border border-gray-200 rounded-2xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#396C4A]/20 focus:border-[#396C4A] transition-all"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
                  <PaperclipIcon className="w-5 h-5" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-4 bg-[#396C4A] text-white font-medium text-[16px] rounded-2xl hover:bg-[#2d563b] transition-colors shrink-0 shadow-sm">
                <SendIcon className="w-5 h-5" /> Send
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
