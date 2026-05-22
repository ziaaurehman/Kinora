'use client';

import React, { useState } from 'react';

const chats = [
  { id: 1, text: 'Help me...', active: true },
  { id: 2, text: 'Lorem ipsum...', active: false },
  { id: 3, text: 'Lorem ipsum...', active: false },
  { id: 4, text: 'Lorem ipsum...', active: false },
  { id: 5, text: 'Lorem ipsum...', active: false },
];

export default function SidebarLeft() {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  return (
    <div className="w-[280px] h-full flex flex-col px-6 py-6 gap-6 shrink-0 bg-bg-cream overflow-y-auto">
      {/* Search */}
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-chat-gray">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        <input 
          type="text" 
          placeholder="Search doctor" 
          className="w-full h-11 pl-10 pr-4 bg-white border border-border rounded-lg text-sm font-sans focus:outline-none focus:border-chat-primary placeholder:text-chat-muted text-chat-dark"
        />
      </div>

      {/* Nav */}
      <div>
        <div className="text-sm font-semibold text-chat-dark flex items-center justify-between mb-4 cursor-pointer">
          All
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-3 w-full h-12 px-4 rounded-lg bg-[#E6F8ED] border border-transparent transition-colors hover:bg-[#d6f0df]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#3F6F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" fill="#3F6F4F" />
              <line x1="17.5" y1="3.5" x2="20.5" y2="6.5" stroke="#E6F8ED" strokeWidth="2" />
            </svg>
            <span className="font-sans font-medium text-[15px] text-chat-primary">Start New Chat</span>
          </button>
          
          <button className="flex items-center gap-3 w-full h-12 px-4 rounded-lg bg-white border border-border transition-colors hover:border-chat-primary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="none"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="white" strokeWidth="2" fill="none"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12" stroke="white" strokeWidth="2"></line>
            </svg>
            <span className="font-sans font-medium text-[15px] text-primary">Explore</span>
          </button>

          <button className="flex items-center gap-3 w-full h-12 px-4 rounded-lg bg-white border border-border transition-colors hover:border-chat-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" stroke="none"></circle>
              <polyline points="12 6 12 12 16 14" stroke="white" strokeWidth="2" fill="none"></polyline>
            </svg>
            <span className="font-sans font-medium text-[15px] text-primary">History</span>
          </button>
        </div>
      </div>

      {/* Recent */}
      <div className="flex-1 mt-2">
        <h3 className="font-sans font-semibold text-chat-dark text-sm mb-4">Recent</h3>
        <div className="flex flex-col gap-3">
          {chats.map((chat) => (
            <div key={chat.id} className="relative w-full">
              <div className="flex items-center justify-between w-full h-11 px-4 rounded-lg bg-white border border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.03)] cursor-pointer hover:border-border transition-all">
                <span className="font-sans text-[15px] text-chat-gray truncate pr-4">{chat.text}</span>
                <button 
                  onClick={() => setOpenMenuId(openMenuId === chat.id ? null : chat.id)}
                  className={`shrink-0 flex items-center justify-center w-6 h-6 rounded border ${chat.active ? 'border-[#8F8FE5] text-[#8F8FE5]' : 'border-transparent text-chat-muted hover:border-border'}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
              {openMenuId === chat.id && (
                <div className="absolute right-0 top-full mt-1 z-10 w-[90px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] py-2 border border-border">
                  <button className="w-full text-left px-4 py-1 text-sm font-sans text-chat-dark hover:bg-bg-section transition-colors">
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
