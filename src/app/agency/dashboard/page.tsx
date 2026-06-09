'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AgencyDashboardPage() {
  const [isAvailable, setIsAvailable] = useState(true);

  // Mock Data
  const inquiries = [
    { id: 1, name: 'Jane Cooper', zip: '84600', care: 'Dementia Care', received: '1 hr ago' },
    { id: 2, name: 'Michael Foster', zip: '84600', care: 'Dementia Care', received: '1 hr ago' },
    { id: 3, name: 'Dries Vincent', zip: '84600', care: 'Dementia Care', received: '1 hr ago' },
    { id: 4, name: 'Lindsay Walton', zip: '84600', care: 'Dementia Care', received: '1 hr ago' },
    { id: 5, name: 'Courtney H...', zip: '84600', care: 'Dementia Care', received: '1 hr ago' },
  ];

  const history = [
    { id: 1, name: 'Jane Cooper', zip: '84600', care: 'Dementia Care', date: '9-02-24', status: 'Accepted' },
    { id: 2, name: 'Michael Foster', zip: '84600', care: 'Dementia Care', date: '9-02-24', status: 'Accepted' },
    { id: 3, name: 'Dries Vincent', zip: '84600', care: 'Dementia Care', date: '9-02-24', status: 'Expired' },
    { id: 4, name: 'Lindsay Walton', zip: '84600', care: 'Dementia Care', date: '9-02-24', status: 'Declined' },
    { id: 5, name: 'Courtney H...', zip: '84600', care: 'Dementia Care', date: '9-02-24', status: 'Accepted' },
  ];

  const activeClients = [
    { id: 1, name: 'Lindsay Walton', tagline: 'We deliver best care services', date: 'Since 2 May, 2023', avatar: '/avatar.png' },
    { id: 2, name: 'Michael Foster', tagline: 'We deliver best care services', date: 'Since 2 May, 2023', avatar: '/avatar.png' },
    { id: 3, name: 'Dries Vincent', tagline: 'We deliver best care services', date: 'Since 2 May, 2023', avatar: '/avatar.png' },
    { id: 4, name: 'Caregiver agency', tagline: 'We deliver best care services', date: 'Since 2 May, 2023', avatar: '/avatar.png' },
    { id: 5, name: 'Caregiver agency', tagline: 'We deliver best care services', date: 'Since 2 May, 2023', avatar: '/avatar.png' },
  ];

  const [openActionMenu, setOpenActionMenu] = useState<number | null>(null);

  const toggleActionMenu = (id: number) => {
    setOpenActionMenu(openActionMenu === id ? null : id);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 md:p-8 font-sans bg-[#FAF9F6]">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-[#112330] mb-2 tracking-tight">Welcome back, [Agency Name]</h1>
          <p className="text-[15px] text-[#64748B]">Manage inquiries, clients, and growth from one control center.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full shadow-sm border border-[#E2E8F0]">
          <span className="text-[14px] font-medium text-[#112330]">Availability Status</span>
          <div 
            className={`w-[38px] h-[22px] rounded-full relative cursor-pointer transition-colors ${isAvailable ? 'bg-[#D96C3B]' : 'bg-gray-300'}`}
            onClick={() => setIsAvailable(!isAvailable)}
          >
            <div className={`absolute top-[2px] w-[18px] h-[18px] bg-white rounded-full transition-all ${isAvailable ? 'left-[18px]' : 'left-[2px]'}`} />
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        
        {/* Active Clients */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] flex flex-col relative">
          <div className="absolute top-6 right-6 w-12 h-12 bg-[#FEEBE1] rounded-2xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D96C3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span className="text-[14px] font-semibold text-[#112330] mb-2">Active Clients</span>
          <span className="text-[32px] font-bold text-[#112330] mb-4">2000</span>
          <div className="flex items-center gap-1.5 text-[13px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            <span className="text-[#10B981] font-medium">8.5%</span>
            <span className="text-[#64748B]">Vs Last Month</span>
          </div>
        </div>

        {/* Total Inquiries */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] flex flex-col relative">
          <div className="absolute top-6 right-6 w-12 h-12 bg-[#FEEBE1] rounded-2xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D96C3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <span className="text-[14px] font-semibold text-[#112330] mb-2">Total Inquiries</span>
          <span className="text-[32px] font-bold text-[#112330] mb-4">200</span>
          <div className="flex items-center gap-1.5 text-[13px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            <span className="text-[#10B981] font-medium">18 %</span>
            <span className="text-[#64748B]">Vs Last Month</span>
          </div>
        </div>

        {/* Acceptance Rate */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] flex flex-col relative">
          <div className="absolute top-6 right-6 w-12 h-12 bg-[#FEEBE1] rounded-2xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D96C3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <span className="text-[14px] font-semibold text-[#112330] mb-2">Acceptance Rate</span>
          <span className="text-[32px] font-bold text-[#112330] mb-4">82 %</span>
          <div className="flex items-center gap-1.5 text-[13px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            <span className="text-[#10B981] font-medium">3.5%</span>
            <span className="text-[#64748B]">Vs Last Month</span>
          </div>
        </div>

        {/* Avg. Response Time */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] flex flex-col relative">
          <div className="absolute top-6 right-6 w-12 h-12 bg-[#FEEBE1] rounded-2xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D96C3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <span className="text-[14px] font-semibold text-[#112330] mb-2">Avg. Response Time</span>
          <span className="text-[32px] font-bold text-[#112330] mb-4">1 hr</span>
          <div className="flex items-center gap-1.5 text-[13px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            <span className="text-[#10B981] font-medium">10 min</span>
            <span className="text-[#64748B]">Vs Last Month</span>
          </div>
        </div>

      </div>

      <div className="flex flex-col gap-6">
        
        {/* Row 1: Incoming Inquiry List and Active Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Incoming Inquiry List */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] h-full flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] font-bold text-[#112330]">Incoming Inquiry List</h2>
              <Link href="/agency/dashboard/inquiries" className="text-[14px] font-semibold text-[#D96C3B] hover:underline">See All</Link>
            </div>
            
            <hr className="border-t border-gray-200 my-5" />
            
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="text-[13px] font-semibold text-gray-400">
                    <th className="pb-3 pr-4 border-b border-gray-200">Family Name</th>
                    <th className="pb-3 pr-4 border-b border-gray-200">ZIP Code</th>
                    <th className="pb-3 pr-4 border-b border-gray-200">Care Needs</th>
                    <th className="pb-3 pr-4 border-b border-gray-200">Received</th>
                    <th className="pb-3 border-b border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] font-medium text-[#112330]">
                  {inquiries.map((item) => (
                    <tr key={`inq-${item.id}`} className="hover:bg-gray-50">
                      <td className="py-4 pr-4 border-b border-gray-100">{item.name}</td>
                      <td className="py-4 pr-4 border-b border-gray-100">{item.zip}</td>
                      <td className="py-4 pr-4 border-b border-gray-100">{item.care}</td>
                      <td className="py-4 pr-4 text-gray-500 border-b border-gray-100">{item.received}</td>
                      <td className="py-4 relative border-b border-gray-100">
                        <button 
                          onClick={() => toggleActionMenu(item.id)}
                          className={`w-[34px] h-[28px] rounded-[8px] flex items-center justify-center border transition-colors ${openActionMenu === item.id ? 'border-[#3B82F6] bg-blue-50 text-[#3B82F6]' : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-100'}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>
                        </button>

                        {/* Action Menu Popover */}
                        {openActionMenu === item.id && (
                          <div className="absolute right-0 top-12 mt-1 w-32 bg-white border border-gray-100 rounded-xl shadow-lg z-10 py-1 overflow-hidden">
                            <button className="w-full text-left px-4 py-2 text-[14px] font-medium text-[#112330] hover:bg-gray-50 transition-colors">Accept</button>
                            <button className="w-full text-left px-4 py-2 text-[14px] font-medium text-[#112330] hover:bg-gray-50 transition-colors">Delete</button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Mock */}
            <div className="flex items-center justify-between mt-auto pt-6 text-[14px] font-semibold text-gray-500">
              <button className="flex items-center gap-2 hover:text-primary transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Previous</button>
              <div className="flex items-center gap-4">
                <span className="text-[#112330]">1</span>
                <span className="hover:text-primary cursor-pointer">2</span>
                <span className="hover:text-primary cursor-pointer">3</span>
                <span>...</span>
                <span className="hover:text-primary cursor-pointer">65</span>
                <span className="hover:text-primary cursor-pointer">66</span>
              </div>
              <button className="flex items-center gap-2 text-[#112330] hover:text-primary transition-colors">Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
            </div>
          </div>
          
          {/* Active Clients List */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] h-full flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] font-bold text-[#112330]">Active Clients</h2>
              <Link href="/agency/dashboard/clients" className="text-[14px] font-semibold text-[#D96C3B] hover:underline">See All</Link>
            </div>
            
            <hr className="border-t border-gray-200 my-5" />
            
            <div className="flex flex-col flex-1">
              {activeClients.map((client, index) => (
                <div key={`client-${client.id}`} className={`flex items-center justify-between ${index !== activeClients.length - 1 ? 'border-b border-gray-100 pb-4 mb-4' : ''}`}>
                  <div className="flex items-center gap-4">
                    <img src={client.avatar} alt={client.name} className="w-11 h-11 rounded-full object-cover bg-gray-100" />
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#112330]">{client.name}</h3>
                      <p className="text-[13px] text-gray-500">{client.tagline}</p>
                    </div>
                  </div>
                  <span className="text-[13px] text-gray-400 font-medium">{client.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Inquiry History and Billing/Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column (Row 2) */}
          <div className="flex flex-col gap-6 w-full">
            {/* Inquiry History */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] h-full flex flex-col">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#112330]">Inquiry History</h2>
                <Link href="/agency/dashboard/history" className="text-[14px] font-semibold text-[#D96C3B] hover:underline">See All</Link>
              </div>
              
              <hr className="border-t border-gray-200 my-5" />
              
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="text-[13px] font-semibold text-gray-400">
                      <th className="pb-3 pr-4 border-b border-gray-200">Family Name</th>
                      <th className="pb-3 pr-4 border-b border-gray-200">ZIP Code</th>
                      <th className="pb-3 pr-4 border-b border-gray-200">Care Needs</th>
                      <th className="pb-3 pr-4 border-b border-gray-200">Received</th>
                      <th className="pb-3 border-b border-gray-200">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] font-medium text-[#112330]">
                    {history.map((item) => (
                      <tr key={`hist-${item.id}`} className="hover:bg-gray-50">
                        <td className="py-4 pr-4 border-b border-gray-100">{item.name}</td>
                        <td className="py-4 pr-4 border-b border-gray-100">{item.zip}</td>
                        <td className="py-4 pr-4 border-b border-gray-100">{item.care}</td>
                        <td className="py-4 pr-4 text-gray-500 border-b border-gray-100">{item.date}</td>
                        <td className="py-4 border-b border-gray-100">
                          {item.status === 'Accepted' && <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[13px] font-semibold bg-[#DCFCE7] text-[#16A34A]">Accepted</span>}
                          {item.status === 'Expired' && <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[13px] font-semibold bg-gray-100 text-gray-500">Expired</span>}
                          {item.status === 'Declined' && <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[13px] font-semibold bg-[#FEE2E2] text-[#EF4444]">Declined</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination Mock */}
              <div className="flex items-center justify-between mt-auto pt-6 text-[14px] font-semibold text-gray-500">
                <button className="flex items-center gap-2 hover:text-primary transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Previous</button>
                <div className="flex items-center gap-4">
                  <span className="text-[#112330]">1</span>
                  <span className="hover:text-primary cursor-pointer">2</span>
                  <span className="hover:text-primary cursor-pointer">3</span>
                  <span>...</span>
                  <span className="hover:text-primary cursor-pointer">65</span>
                  <span className="hover:text-primary cursor-pointer">66</span>
                </div>
                <button className="flex items-center gap-2 text-[#112330] hover:text-primary transition-colors">Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
              </div>
            </div>
          </div>
          
          {/* Right Column (Row 2) */}
          <div className="flex flex-col gap-6 w-full">
            
            {/* Billing Info */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0]">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#112330]">Billing Info</h2>
                <Link href="/agency/dashboard/billing" className="text-[14px] font-semibold text-[#D96C3B] hover:underline">See All</Link>
              </div>
              
              <hr className="border-t border-gray-200 my-5" />
              
              <div className="flex flex-col gap-4 text-[15px] font-medium">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500">Subscription Plan</span>
                  <span className="text-[#112330]">Pro Plan</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500">Next Billing Date</span>
                  <span className="text-[#112330]">Jun 20, 2024</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500">Routing Charges (This Month)</span>
                  <span className="text-[#112330]">$ 230.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Unpaid Balance</span>
                  <span className="text-[#112330]">$ 0.00</span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] flex-1 flex flex-col justify-between">
              <h2 className="text-[18px] font-bold text-[#112330]">Reviews</h2>
              
              <hr className="border-t border-gray-200 my-5" />
              
              <div className="flex items-start gap-4">
              <img src="/avatar.png" alt="Reviewer" className="w-[50px] h-[50px] rounded-full object-cover" />
              <div>
                <h3 className="text-[16px] font-bold text-[#112330] mb-1">Jorge Monahan</h3>
                <p className="text-[13px] text-gray-500 mb-2">Customer Integration Representative</p>
                <div className="flex items-center gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <svg key={`star-${star}`} width="18" height="18" viewBox="0 0 24 24" fill={star <= 4 ? "#D96C3B" : "none"} stroke={star <= 4 ? "#D96C3B" : "#D1D5DB"} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                  <span className="text-[15px] font-bold text-[#112330] ml-2">4.5</span>
                </div>
              </div>
            </div>
            
            {/* Carousel Dots Mock */}
            <div className="flex items-center justify-center gap-3">
              <svg className="cursor-pointer text-gray-400 hover:text-gray-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              <div className="w-[6px] h-[6px] rounded-full bg-[#D96C3B]" />
              <div className="w-[6px] h-[6px] rounded-full bg-gray-300" />
              <div className="w-[6px] h-[6px] rounded-full bg-gray-300" />
              <div className="w-[6px] h-[6px] rounded-full bg-gray-300" />
              <svg className="cursor-pointer text-gray-400 hover:text-gray-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          
        </div>

      </div>

      </div>
    </div>
  );
}
