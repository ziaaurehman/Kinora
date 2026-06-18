'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ActivityItem {
  id: number;
  agencyName: string;
  description: string;
  date: string;
  time: string;
}

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

export default function AdminActivitiesPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(3);

  const activitiesData: ActivityItem[] = [
    { id: 1, agencyName: 'New Bright Care LLC', description: 'Submitted an Application', date: 'May 24, 2025', time: '10:34 PM' },
    { id: 2, agencyName: 'Serene Care', description: '# INQ-725 assigned to "Serene Care"', date: 'May 24, 2025', time: '10:34 PM' },
    { id: 3, agencyName: 'Care Plus LLC', description: 'Payment of $ 230.00 received', date: 'May 24, 2025', time: '10:34 PM' },
    { id: 4, agencyName: 'SUNSHINE Care', description: '# INQ-787 accepted by "SUNSHINE CARE"', date: 'May 24, 2025', time: '10:34 PM' },
    { id: 5, agencyName: 'SUNSHINE Care', description: '# INQ-787 accepted by "SUNSHINE CARE"', date: 'May 24, 2025', time: '10:34 PM' },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-8 pb-20 px-4 sm:px-6 md:px-8 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-8">
          <button 
            onClick={() => router.back()}
            className="w-[42px] h-[42px] rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 hover:bg-gray-50 transition-colors shadow-sm mt-1"
            aria-label="Go back"
          >
            <ChevronLeftIcon className="w-5 h-5 text-primary" />
          </button>
          
          <div className="flex flex-col">
            <h1 className="text-[32px] font-bold text-primary mb-1">All Activities</h1>
            <p className="text-[15px] text-[#8C9BA5] font-medium">Stay updated with every activity happening in real time.</p>
          </div>
        </div>

        {/* Activities List Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] flex flex-col w-full overflow-hidden min-h-[500px]">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-[#112330]">Activities List</h2>
          </div>
          
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-[14px]">
                <thead>
                  <tr className="text-gray-400 font-semibold border-b border-gray-100">
                    <th className="pb-4 pr-4 text-[13px] tracking-wider font-semibold uppercase w-[60%]">Activities</th>
                    <th className="pb-4 pr-4 text-[13px] tracking-wider font-semibold uppercase">Date</th>
                    <th className="pb-4 text-[13px] tracking-wider font-semibold uppercase">Time</th>
                  </tr>
                </thead>
                <tbody className="text-[#112330] font-medium">
                  {activitiesData.map((act) => (
                    <tr key={act.id} className="group hover:bg-gray-50/40 transition-colors">
                      <td className="py-5 pr-4 border-b border-gray-100 text-[15px]">
                        <span className="font-bold text-primary">{act.agencyName}</span>
                        <span className="text-gray-300 mx-2">|</span>
                        <span className="text-txt-secondary">{act.description}</span>
                      </td>
                      <td className="py-5 pr-4 border-b border-gray-100 text-[15px] text-primary">
                        {act.date}
                      </td>
                      <td className="py-5 border-b border-gray-100 text-[15px] text-primary">
                        {act.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Component */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-100 text-[13px] font-semibold text-gray-500 mt-8">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 hover:text-[#112330] disabled:opacity-40 disabled:hover:text-gray-500 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> 
                Previous
              </button>
              
              <div className="flex items-center gap-3">
                <button onClick={() => setCurrentPage(1)} className={`w-8 h-8 rounded-lg text-center flex items-center justify-center transition-all ${currentPage === 1 ? 'bg-primary text-white font-bold' : 'hover:text-[#112330] hover:bg-gray-100'}`}>1</button>
                <button onClick={() => setCurrentPage(2)} className={`w-8 h-8 rounded-lg text-center flex items-center justify-center transition-all ${currentPage === 2 ? 'bg-primary text-white font-bold' : 'hover:text-[#112330] hover:bg-gray-100'}`}>2</button>
                <button onClick={() => setCurrentPage(3)} className={`w-8 h-8 rounded-lg text-center flex items-center justify-center transition-all ${currentPage === 3 ? 'bg-primary text-white font-bold' : 'hover:text-[#112330] hover:bg-gray-100'}`}>3</button>
                <span className="text-gray-400">...</span>
                <button onClick={() => setCurrentPage(65)} className={`w-8 h-8 rounded-lg text-center flex items-center justify-center transition-all ${currentPage === 65 ? 'bg-primary text-white font-bold' : 'hover:text-[#112330] hover:bg-gray-100'}`}>65</button>
                <button onClick={() => setCurrentPage(66)} className={`w-8 h-8 rounded-lg text-center flex items-center justify-center transition-all ${currentPage === 66 ? 'bg-primary text-white font-bold' : 'hover:text-[#112330] hover:bg-gray-100'}`}>66</button>
              </div>
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(66, prev + 1))}
                disabled={currentPage === 66}
                className="flex items-center gap-2 text-[#112330] hover:opacity-80 disabled:opacity-40 transition-opacity"
              >
                Next 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
