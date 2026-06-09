'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function IncomingInquiriesPage() {
  const [openActionMenu, setOpenActionMenu] = useState<number | null>(null);

  const toggleActionMenu = (id: number) => {
    setOpenActionMenu(openActionMenu === id ? null : id);
  };

  const inquiries = [
    { id: 1, schedule: '5 days/ week, 5 hrs a day', urgency: 'With in 16 hours', zip: '84600', care: 'Dementia Care, Bathing, Meal...', received: '1 hr ago' },
    { id: 2, schedule: '5 days/ week, 5 hrs a day', urgency: 'With in 16 hours', zip: '84600', care: 'Dementia Care, Bathing, Meal...', received: '1 hr ago' },
    { id: 3, schedule: '5 days/ week, 5 hrs a day', urgency: 'With in 16 hours', zip: '84600', care: 'Dementia Care, Bathing, Meal...', received: '1 hr ago' },
    { id: 4, schedule: '6 days/ week, 4 hrs a day', urgency: 'With in 10 hours', zip: '84600', care: 'Dementia Care, Meal prep, Ba...', received: '1 hr ago' },
    { id: 5, schedule: '6 days/ week, 4 hrs a day', urgency: 'With in 10 hours', zip: '84600', care: 'Dementia Care, Meal prep, Ba...', received: '1 hr ago' },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 md:p-8 font-sans bg-[#FAF9F6] min-h-screen">
      
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <Link 
          href="/agency/dashboard" 
          className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors flex-shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#112330" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </Link>
        <div>
          <h1 className="text-[28px] font-bold text-[#112330] mb-1 tracking-tight leading-none mt-1">Incoming Inquiries</h1>
          <p className="text-[15px] text-[#64748B]">Review and respond to new family inquiries.</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-sm border border-[#E2E8F0]">
        <h2 className="text-[20px] font-bold text-[#112330] mb-6">Inquiry List</h2>
        
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-[14px] font-semibold text-[#64748B]">
                <th className="pb-4 pr-4 border-b border-gray-200">Schedule</th>
                <th className="pb-4 pr-4 border-b border-gray-200">Urgency</th>
                <th className="pb-4 pr-4 border-b border-gray-200">ZIP Code</th>
                <th className="pb-4 pr-4 border-b border-gray-200">Care Needs</th>
                <th className="pb-4 pr-4 border-b border-gray-200">Received</th>
                <th className="pb-4 border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[14px] font-semibold text-[#112330]">
              {inquiries.map((item) => (
                <tr key={`inq-${item.id}`} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 pr-4 border-b border-gray-100">{item.schedule}</td>
                  <td className="py-5 pr-4 border-b border-gray-100">{item.urgency}</td>
                  <td className="py-5 pr-4 border-b border-gray-100">{item.zip}</td>
                  <td className="py-5 pr-4 border-b border-gray-100 text-[#64748B] font-medium">{item.care}</td>
                  <td className="py-5 pr-4 text-gray-500 border-b border-gray-100 font-medium">{item.received}</td>
                  <td className="py-5 relative border-b border-gray-100">
                    <button 
                      onClick={() => toggleActionMenu(item.id)}
                      className={`w-[44px] h-[32px] rounded-[10px] flex items-center justify-center border transition-all ${openActionMenu === item.id ? 'border-[#6366F1] bg-[#EEF2FF] text-[#6366F1]' : 'border-[#E2E8F0] bg-white text-gray-500 hover:bg-gray-50'}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
                    </button>

                    {/* Action Menu Popover */}
                    {openActionMenu === item.id && (
                      <div className="absolute right-0 top-16 w-36 bg-white border border-[#E2E8F0] rounded-xl shadow-lg z-10 py-1.5 overflow-hidden">
                        <button className="w-full text-left px-5 py-2.5 text-[14px] font-semibold text-[#112330] hover:bg-gray-50 transition-colors">Accept</button>
                        <button className="w-full text-left px-5 py-2.5 text-[14px] font-semibold text-[#112330] hover:bg-gray-50 transition-colors">Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-6 mt-6 text-[14px] font-semibold text-[#64748B]">
          <button className="flex items-center gap-2 hover:text-primary transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Previous</button>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer">1</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer">2</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F3F4F6] text-[#112330]">3</span>
            <span className="px-2">...</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer">65</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer">66</span>
          </div>
          <button className="flex items-center gap-2 text-[#112330] hover:text-primary transition-colors">Next <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>
  );
}
