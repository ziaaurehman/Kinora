'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// --- MOCK DATA ---
const stats = [
  { label: 'Active Families', value: '512', change: '8.5 %', color: 'text-[#10B981]', bg: 'bg-[#FEE2E2]', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
  { label: 'Inquiries Routed', value: '400', change: '18 %', color: 'text-[#10B981]', bg: 'bg-[#FFEDD5]', icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></> },
  { label: 'Active Agencies', value: '201', change: '3.5 %', color: 'text-[#10B981]', bg: 'bg-[#FFEDD5]', icon: <><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></> },
  { label: 'Active Subscriptions', value: '180', change: '10 %', color: 'text-[#10B981]', bg: 'bg-[#FEE2E2]', icon: <><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></> },
];

const applications = [
  { id: 1, name: 'Care LLC', location: 'Austin Tx (84600)', date: 'May 25, | 10:00 PM' },
  { id: 2, name: 'Nurture Care', location: 'Austin Tx (84600)', date: 'May 25, | 10:00 PM' },
  { id: 3, name: 'Elite Home Care', location: 'Austin Tx (84600)', date: 'May 25, | 10:00 PM' },
  { id: 4, name: 'SUNSHINE Care', location: 'Plano Tx (84600)', date: 'May 25, | 10:00 PM' },
  { id: 5, name: 'ALPINE Care', location: 'Plano Tx (84600)', date: 'May 25, | 10:00 PM' },
];

const activities = [
  { id: 1, text: 'New Bright Care LLC\nSubmitted an Application', date: 'May 25, 10:00 PM' },
  { id: 2, text: 'Serene Care\nINQ-723 assigned to "Serene Care"', date: 'May 25, 10:00 PM' },
  { id: 3, text: 'Care Plus LLC\nPayment of $230.00 received', date: 'May 25, 10:00 PM' },
  { id: 4, text: 'SUNSHINE Care\nINQ-757 accepted by "SUNSHINE CARE"', date: 'May 25, 10:00 PM' },
];

const inquiries = [
  { id: 'INQ-1234', zip: '84600', name: 'Jhon family', date: 'May 25, | 10:00 PM' },
  { id: 'INQ-1235', zip: '84600', name: 'William family', date: 'May 25, | 10:00 PM' },
  { id: 'INQ-1236', zip: '84600', name: 'Davis family', date: 'May 25, | 10:00 PM' },
  { id: 'INQ-1237', zip: '84600', name: 'Miller family', date: 'May 25, | 10:00 PM' },
  { id: 'INQ-1238', zip: '84600', name: 'Emily family', date: 'May 25, | 10:00 PM' },
];

const rerouting = [
  { id: 'INQ-1234', agency: 'Care Plus', reason: 'Not a fit', date: 'May 25, | 10:00 PM' },
  { id: 'INQ-1235', agency: 'SUNSHINE', reason: 'Location iss...', date: 'May 25, | 10:00 PM' },
  { id: 'INQ-1236', agency: 'ALPINE', reason: 'Service issue', date: 'May 25, | 10:00 PM' },
  { id: 'INQ-1237', agency: 'CARE LLC', reason: 'Other', date: 'May 25, | 10:00 PM' },
  { id: 'INQ-1238', agency: 'CARE LLC', reason: 'Other', date: 'May 25, | 10:00 PM' },
];

const messages = [
  { id: 1, name: 'Caregiver agency', msg: 'Yes. I think you that works for us.', time: '10:13 AM' },
  { id: 2, name: 'Caregiver agency', msg: 'Yes. I think you that works for us.', time: '10:13 AM' },
  { id: 3, name: 'Caregiver agency', msg: 'Yes. I think you that works for us.', time: '10:13 AM' },
  { id: 4, name: 'Caregiver agency', msg: 'Yes. I think you that works for us.', time: '10:30 AM' },
  { id: 5, name: 'Caregiver agency', msg: 'Yes. I think you that works for us.', time: '10:30 AM' },
];

// --- COMPONENTS ---
const Pagination = () => (
  <div className="flex items-center justify-between mt-auto pt-6 text-[12px] font-semibold text-gray-500">
    <button className="flex items-center gap-2 hover:text-[#112330] transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Previous</button>
    <div className="flex items-center gap-3">
      <span className="text-[#112330]">1</span>
      <span className="hover:text-[#112330] cursor-pointer">2</span>
      <span className="hover:text-[#112330] cursor-pointer">3</span>
      <span>...</span>
      <span className="hover:text-[#112330] cursor-pointer">65</span>
      <span className="hover:text-[#112330] cursor-pointer">66</span>
    </div>
    <button className="flex items-center gap-2 text-[#112330] hover:opacity-80 transition-opacity">Next <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
  </div>
);

const CardHeader = ({ title, showSeeAll = false, dropdown = false }: { title: string, showSeeAll?: boolean, dropdown?: boolean }) => (
  <>
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[16px] font-bold text-[#112330]">{title}</h2>
      {showSeeAll && <button className="text-[13px] font-bold text-[#D96C3B] hover:underline">See All</button>}
      {dropdown && (
        <select className="text-[12px] border border-[#E2E8F0] rounded-md px-2 py-1 outline-none cursor-pointer">
          <option>This year</option>
          <option>Last year</option>
          <option>Quarterly</option>
        </select>
      )}
    </div>
    <hr className="border-t border-gray-100 -mx-6 mb-6" />
  </>
);

export default function AdminDashboardPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans pb-12">
      
      {/* Top Navigation (Mocked for dashboard content area) */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-8">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#112330] mb-1">Dashboard</h1>
          <p className="text-[14px] text-gray-500">Monitor platform activities and manage operations.</p>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Row 1: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-semibold text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-[26px] font-bold text-[#112330] mb-2 leading-none">{stat.value}</p>
                  <p className={`text-[11px] font-bold ${stat.color} flex items-center gap-1`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    {stat.change} <span className="text-gray-400 font-medium ml-1">Vs Last Month</span>
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center text-[#D96C3B]`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {stat.icon}
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Revenue Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
            <CardHeader title="Revenue Overview" dropdown />
            <div className="w-[calc(100%-48px)] ml-12 h-[240px] relative mt-4 mb-6 border-b border-gray-100 pl-2">
               {/* Grid Lines */}
               <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-between pointer-events-none z-0">
                 {[...Array(7)].map((_, i) => (
                   <div key={i} className={`w-full ${i === 6 ? '' : 'border-t border-gray-100'}`}></div>
                 ))}
               </div>
               {/* Mock Graph */}
               <svg className="w-full h-full relative z-10" viewBox="0 0 1000 200" preserveAspectRatio="none">
                 <path d="M0,180 C50,0 150,50 200,160 C250,180 300,160 350,10 C400,10 450,120 500,140 C550,160 600,60 650,80 C700,100 750,160 800,150 C850,100 900,-20 950,20 C980,50 1000,180 1000,180 L1000,200 L0,200 Z" fill="#EEF2FF" />
                 <path d="M0,180 C50,0 150,50 200,160 C250,180 300,160 350,10 C400,10 450,120 500,140 C550,160 600,60 650,80 C700,100 750,160 800,150 C850,100 900,-20 950,20 C980,50 1000,180 1000,180" fill="none" stroke="#6366F1" strokeWidth="2" />
               </svg>
               <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 font-medium w-10 pr-2 text-right z-10">
                 <span className="whitespace-nowrap">60k</span><span className="whitespace-nowrap">50k</span><span className="whitespace-nowrap">40k</span><span className="whitespace-nowrap">30k</span><span className="whitespace-nowrap">20k</span><span className="whitespace-nowrap">10k</span><span className="whitespace-nowrap">0</span>
               </div>
               <div className="absolute left-0 -bottom-6 w-full flex justify-between text-[10px] text-gray-400 font-medium px-2 z-10">
                 <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
               </div>
            </div>
          </div>

          {/* Row 3: Applications & Dispute */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col">
              <CardHeader title="Applications List" showSeeAll />
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[12px]">
                  <thead>
                    <tr className="text-gray-400 font-semibold border-b border-gray-100">
                      <th className="pb-3 pr-2">Agency Name</th>
                      <th className="pb-3 pr-2">Location</th>
                      <th className="pb-3 pr-2">Submitted on</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#112330] font-medium">
                    {applications.map(app => (
                      <tr key={app.id}>
                        <td className="py-4 pr-2 border-b border-gray-50">{app.name}</td>
                        <td className="py-4 pr-2 border-b border-gray-50">{app.location}</td>
                        <td className="py-4 pr-2 text-gray-400 border-b border-gray-50">{app.date}</td>
                        <td className="py-4 border-b border-gray-50 relative">
                          <button onClick={() => toggleDropdown(`app-${app.id}`)} className="w-[32px] h-[24px] border border-[#E2E8F0] rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>
                          </button>
                          {openDropdown === `app-${app.id}` && (
                            <div className="absolute right-0 top-10 w-24 bg-white border border-[#E2E8F0] rounded-lg shadow-md z-10 py-1">
                              <button className="w-full text-left px-3 py-1.5 text-[11px] font-semibold text-[#112330] hover:bg-gray-50">Approve</button>
                              <button className="w-full text-left px-3 py-1.5 text-[11px] font-semibold text-[#112330] hover:bg-gray-50">Decline</button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col items-center">
              <div className="w-full"><CardHeader title="Dispute Summary" /></div>
              <div className="relative w-[180px] h-[180px] my-6">
                 {/* Mock Donut Chart */}
                 <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                   <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#D96C3B" strokeWidth="6" strokeDasharray="46 54" />
                   <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#112330" strokeWidth="6" strokeDasharray="24 76" strokeDashoffset="-46" />
                   <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#3A6A4E" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="-70" />
                 </svg>
              </div>
              <div className="w-full flex flex-col gap-3 mt-auto">
                <div className="flex items-center justify-between text-[13px] font-semibold">
                  <div className="flex items-center gap-2 text-gray-500"><div className="w-2.5 h-2.5 rounded-full border-2 border-[#3A6A4E]"></div> Resolved</div>
                  <span className="text-[#3A6A4E]">46%</span>
                </div>
                <div className="flex items-center justify-between text-[13px] font-semibold">
                  <div className="flex items-center gap-2 text-gray-500"><div className="w-2.5 h-2.5 rounded-full border-2 border-[#112330]"></div> Investigate</div>
                  <span className="text-[#112330]">24%</span>
                </div>
                <div className="flex items-center justify-between text-[13px] font-semibold">
                  <div className="flex items-center gap-2 text-gray-500"><div className="w-2.5 h-2.5 rounded-full border-2 border-[#D96C3B]"></div> Flag</div>
                  <span className="text-[#D96C3B]">15%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Row 4: Top Agencies & Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col">
              <CardHeader title="Top Agencies" dropdown />
              <div className="w-[calc(100%-48px)] ml-12 flex-1 min-h-[260px] flex items-end justify-between border-b border-gray-100 relative pt-2 mt-2 pr-2">
                {/* Grid Lines */}
                <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-between pointer-events-none z-0">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className={`w-full ${i === 6 ? '' : 'border-t border-gray-100'}`}></div>
                  ))}
                </div>
                <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-[10px] text-gray-600 font-medium w-10 pr-2 text-right z-10">
                  <span className="whitespace-nowrap">100 %</span><span className="whitespace-nowrap">80 %</span><span className="whitespace-nowrap">60 %</span><span className="whitespace-nowrap">40 %</span><span className="whitespace-nowrap">20 %</span><span className="whitespace-nowrap">10 %</span><span className="whitespace-nowrap">0</span>
                </div>
                {/* Mock Stacked Bars */}
                {[20, 25, 45, 22, 35, 85, 60].map((h, i) => (
                  <div key={i} className="w-7 md:w-8 flex flex-col-reverse items-center justify-start h-full group z-10 gap-[2px] mx-1">
                    <div className="w-full bg-[#122A38] rounded-sm" style={{ height: `${h * 0.4}%` }}></div>
                    <div className="w-full bg-[#3B82F6] rounded-sm" style={{ height: `${h * 0.3}%` }}></div>
                    <div className="w-full bg-[#5C6B89] rounded-sm" style={{ height: `${h * 0.3}%` }}></div>
                  </div>
                ))}
                <div className="absolute left-0 -bottom-6 w-full flex justify-between text-[11px] text-gray-500 font-bold px-2 z-10">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                </div>
              </div>
              <div className="flex justify-center gap-5 text-[11px] font-bold text-[#112330] mt-auto pt-8">
                 <span className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded-full border-[2px] border-[#122A38]"></div> CARE LLC</span>
                 <span className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded-full border-[2px] border-[#3B82F6]"></div> MEDPULSE</span>
                 <span className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded-full border-[2px] border-[#5C6B89]"></div> SUNSHINE</span>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col">
              <CardHeader title="Activities List" showSeeAll />
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse text-[12px]">
                  <thead>
                    <tr className="text-gray-400 font-semibold border-b border-gray-100">
                      <th className="pb-3 pr-2 w-[70%]">Activities</th>
                      <th className="pb-3 text-right">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#112330]">
                    {activities.map(act => (
                      <tr key={act.id}>
                        <td className="py-4 pr-2 border-b border-gray-50 font-medium whitespace-pre-line leading-relaxed text-[13px]">{act.text}</td>
                        <td className="py-4 text-right text-gray-400 border-b border-gray-50">{act.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>

          </div>

          {/* Row 5: Incoming Inquiries & Messaging */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col">
              <CardHeader title="Incoming Inquiries" showSeeAll />
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[12px]">
                  <thead>
                    <tr className="text-gray-400 font-semibold border-b border-gray-100">
                      <th className="pb-3 pr-2">Inquiry Id</th>
                      <th className="pb-3 pr-2">ZIP Code</th>
                      <th className="pb-3 pr-2">Family Name</th>
                      <th className="pb-3 pr-2">Received</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#112330] font-medium">
                    {inquiries.map(inq => (
                      <tr key={inq.id}>
                        <td className="py-4 pr-2 border-b border-gray-50 font-bold">{inq.id}</td>
                        <td className="py-4 pr-2 border-b border-gray-50">{inq.zip}</td>
                        <td className="py-4 pr-2 border-b border-gray-50">{inq.name}</td>
                        <td className="py-4 pr-2 text-gray-400 border-b border-gray-50">{inq.date}</td>
                        <td className="py-4 border-b border-gray-50 relative">
                          <button onClick={() => toggleDropdown(`inq-${inq.id}`)} className="w-[32px] h-[24px] border border-[#E2E8F0] rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>
                          </button>
                          {openDropdown === `inq-${inq.id}` && (
                            <div className="absolute right-0 top-10 w-24 bg-white border border-[#E2E8F0] rounded-lg shadow-md z-10 py-1">
                              <button className="w-full text-left px-3 py-1.5 text-[11px] font-semibold text-[#112330] hover:bg-gray-50">Assign</button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col">
              <CardHeader title="Messaging Oversight" showSeeAll />
              <div className="flex flex-col flex-1 gap-5 mt-2">
                {messages.map(msg => (
                  <div key={msg.id} className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <img src="/avatar.png" alt="" className="w-10 h-10 rounded-full bg-[#E2E8F0]" />
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-[#112330]">{msg.name}</span>
                        <span className="text-[12px] text-gray-400 mt-0.5">{msg.msg}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] text-gray-400 font-semibold">{msg.time}</span>
                      <div className="w-4 h-4 rounded-full bg-[#10B981] text-white text-[9px] font-bold flex items-center justify-center">2</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Row 6: Re-routing & Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col h-full">
              <CardHeader title="Re-routing Inquiries" showSeeAll />
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse text-[12px]">
                  <thead>
                    <tr className="text-gray-400 font-semibold border-b border-gray-100">
                      <th className="pb-3 pr-2">Inquiry Id</th>
                      <th className="pb-3 pr-2">Declined by</th>
                      <th className="pb-3 pr-2">Reason</th>
                      <th className="pb-3 pr-2">Received</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#112330] font-medium">
                    {rerouting.map(rr => (
                      <tr key={rr.id}>
                        <td className="py-4 pr-2 border-b border-gray-50 font-bold">{rr.id}</td>
                        <td className="py-4 pr-2 border-b border-gray-50">{rr.agency}</td>
                        <td className="py-4 pr-2 border-b border-gray-50">{rr.reason}</td>
                        <td className="py-4 pr-2 text-gray-400 border-b border-gray-50">{rr.date}</td>
                        <td className="py-4 border-b border-gray-50 relative">
                          <button onClick={() => toggleDropdown(`rr-${rr.id}`)} className="w-[32px] h-[24px] border border-[#E2E8F0] rounded-md flex items-center justify-center text-[#3B82F6] hover:bg-blue-50 border-[#3B82F6]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>
                          </button>
                          {openDropdown === `rr-${rr.id}` && (
                            <div className="absolute right-0 top-10 w-24 bg-white border border-[#E2E8F0] rounded-lg shadow-md z-10 py-1">
                              <button className="w-full text-left px-3 py-1.5 text-[11px] font-semibold text-[#112330] hover:bg-gray-50">Re-Assign</button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex gap-4 cursor-pointer hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 rounded-xl bg-[#FEE2E2] text-[#D96C3B] flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                 </div>
                 <div className="flex-1">
                   <div className="flex justify-between items-start mb-1">
                     <h3 className="text-[16px] font-bold text-[#112330]">Agency Management</h3>
                     <span className="text-[#D96C3B] text-[12px] font-bold">See All</span>
                   </div>
                   <p className="text-[12px] text-gray-500 leading-snug">Manage every agency account with precision view, flag, suspend, or restore as needed.</p>
                 </div>
               </div>
               
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex gap-4 cursor-pointer hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 rounded-xl bg-[#DBEAFE] text-[#3B82F6] flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                 </div>
                 <div className="flex-1">
                   <div className="flex justify-between items-start mb-1">
                     <h3 className="text-[16px] font-bold text-[#112330]">ZIP Exclusivity</h3>
                     <span className="text-[#D96C3B] text-[12px] font-bold">See All</span>
                   </div>
                   <p className="text-[12px] text-gray-500 leading-snug">Assign and manage exclusive service areas for each agency.</p>
                 </div>
               </div>

               <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex gap-4 cursor-pointer hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 rounded-xl bg-[#FCE7F3] text-[#F43F5E] flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
                 </div>
                 <div className="flex-1">
                   <div className="flex justify-between items-start mb-1">
                     <h3 className="text-[16px] font-bold text-[#112330]">Dispute Management</h3>
                     <span className="text-[#D96C3B] text-[12px] font-bold">See All</span>
                   </div>
                   <p className="text-[12px] text-gray-500 leading-snug">A structured system to manage and resolve platform disputes with confidence.</p>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
