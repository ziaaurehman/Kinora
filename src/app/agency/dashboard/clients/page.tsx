'use client';

import React from 'react';
import Link from 'next/link';

export default function ActiveClientsPage() {
  const clients = [
    { id: 1, name: 'Caregiver agency', tagline: 'We deliver best care services', date: 'Apr 11, 2025', activeSince: 'Since 2 May, 2023', status: 'Lead Accepted', avatar: '/avatar.png' },
    { id: 2, name: 'SUNSHINE Care', tagline: 'We deliver best care services', date: 'Apr 11, 2025', activeSince: 'Since 2 May, 2023', status: 'Lead Accepted', avatar: '/avatar.png' },
    { id: 3, name: 'MEDPULSE', tagline: 'We deliver best care services', date: 'Apr 11, 2025', activeSince: 'Since 2 May, 2023', status: 'No Longer Needed', avatar: '/avatar.png' },
    { id: 4, name: 'ALPINE Care', tagline: 'We deliver best care services', date: 'Apr 11, 2025', activeSince: 'Since 2 May, 2023', status: 'Routed to Another Agency', avatar: '/avatar.png' },
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
          <h1 className="text-[28px] font-bold text-[#112330] mb-1 tracking-tight leading-none mt-1">Active Clients</h1>
          <p className="text-[15px] text-[#64748B]">All your active clients in one place.</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-sm border border-[#E2E8F0]">
        <h2 className="text-[20px] font-bold text-[#112330] mb-6">Clients List</h2>
        
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-[14px] font-semibold text-[#64748B]">
                <th className="pb-4 pr-4 border-b border-gray-200 w-[60%]">Name</th>
                <th className="pb-4 pr-4 border-b border-gray-200">Active Since</th>
                <th className="pb-4 border-b border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody className="text-[14px] font-semibold text-[#112330]">
              {clients.map((item) => (
                <tr key={`client-${item.id}`} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 pr-4 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <img src={item.avatar} alt={item.name} className="w-[46px] h-[46px] rounded-full object-cover" />
                      <div>
                        <h3 className="text-[15px] font-bold text-[#112330] leading-tight mb-1">{item.name}</h3>
                        <div className="flex items-center text-[13px] text-[#64748B] font-medium">
                          <span>{item.tagline}</span>
                          <span className="mx-2 text-gray-300">|</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 pr-4 border-b border-gray-100 text-[#64748B] font-medium">{item.activeSince}</td>
                  <td className="py-5 border-b border-gray-100">
                    {item.status === 'Lead Accepted' && (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-[13px] font-bold bg-[#DCFCE7] text-[#16A34A]">Lead Accepted</span>
                    )}
                    {item.status === 'No Longer Needed' && (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-[13px] font-bold bg-gray-100 text-gray-500">No Longer Needed</span>
                    )}
                    {item.status === 'Routed to Another Agency' && (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-[13px] font-bold bg-[#FEE2E2] text-[#EF4444]">Routed to Another Agency</span>
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
