'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AgencyApplication {
  id: number;
  name: string;
  status: 'Pending' | 'Approved' | 'Declined';
  reason?: string;
}

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

export default function AdminApplicationsPage() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  
  // Interactive mock state of applications
  const [applications, setApplications] = useState<AgencyApplication[]>([
    { id: 1, name: 'Jane Cooper', status: 'Pending' },
    { id: 2, name: 'Michael Foster', status: 'Pending' },
    { id: 3, name: 'Dries Vincent', status: 'Pending' },
    { id: 4, name: 'Lindsay Walton', status: 'Pending' },
    { id: 5, name: 'Courtney Henry', status: 'Pending' },
  ]);

  // Modal and Action state
  const [selectedApp, setSelectedApp] = useState<AgencyApplication | null>(null);
  const [decisionType, setDecisionType] = useState<'Approve' | 'Decline' | null>(null);
  const [reason, setReason] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Pagination mock state
  const [currentPage, setCurrentPage] = useState(3);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleActionClick = (app: AgencyApplication, type: 'Approve' | 'Decline') => {
    setSelectedApp(app);
    setDecisionType(type);
    setReason('');
    setIsModalOpen(true);
    setOpenDropdown(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedApp(null);
    setDecisionType(null);
    setReason('');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedApp || !decisionType) return;

    // Update application state
    setApplications(prev => 
      prev.map(app => 
        app.id === selectedApp.id 
          ? { ...app, status: decisionType === 'Approve' ? 'Approved' : 'Declined', reason }
          : app
      )
    );

    // Show toast notification
    showToast(`Successfully ${decisionType.toLowerCase()}d "${selectedApp.name}"'s application.`, 'success');

    // Close modal
    setIsModalOpen(false);
    setSelectedApp(null);
    setDecisionType(null);
    setReason('');
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

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
            <h1 className="text-[32px] font-bold text-primary mb-1">Applications</h1>
            <p className="text-[15px] text-[#8C9BA5] font-medium">Approve or decline applications with full visibility and control.</p>
          </div>
        </div>

        {/* Applications List Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] flex flex-col w-full overflow-hidden min-h-[500px]">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-[#112330]">Applications List</h2>
          </div>
          
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-[14px]">
                <thead>
                  <tr className="text-gray-400 font-semibold border-b border-gray-100">
                    <th className="pb-4 pr-4 text-[13px] tracking-wider font-semibold uppercase">Agency Name</th>
                    <th className="pb-4 text-right text-[13px] tracking-wider font-semibold uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-[#112330] font-medium">
                  {applications.map((app) => (
                    <tr key={app.id} className="group hover:bg-gray-50/40 transition-colors">
                      <td className="py-5 pr-4 border-b border-gray-100 text-[15px] text-primary font-semibold">
                        <div className="flex items-center gap-3">
                          <span>{app.name}</span>
                          {app.status !== 'Pending' && (
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              app.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                            }`}>
                              {app.status}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-5 border-b border-gray-100 text-right relative">
                        <div className="flex justify-end items-center">
                          <button 
                            onClick={() => toggleDropdown(app.id)} 
                            className={`w-[36px] h-[28px] border rounded-lg flex items-center justify-center text-gray-400 transition-all ${
                              openDropdown === app.id 
                                ? 'bg-primary/5 border-primary text-primary shadow-sm' 
                                : 'border-[#E2E8F0] hover:bg-gray-50 hover:text-primary'
                            }`}
                            aria-label="Open actions dropdown"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/></svg>
                          </button>
                        </div>
                        
                        {/* Dropdown Menu */}
                        {openDropdown === app.id && (
                          <>
                            {/* Backdrop to close dropdown on outside click */}
                            <div className="fixed inset-0 z-10" onClick={() => setOpenDropdown(null)} />
                            
                            <div className="absolute right-0 top-12 w-28 bg-white border border-[#E2E8F0] rounded-xl shadow-lg z-20 py-1.5 animate-fadeIn">
                              <button 
                                onClick={() => handleActionClick(app, 'Approve')}
                                className="w-full text-left px-4 py-2 text-[12px] font-bold text-emerald-600 hover:bg-emerald-50/50 transition-colors flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Approve
                              </button>
                              <button 
                                onClick={() => handleActionClick(app, 'Decline')}
                                className="w-full text-left px-4 py-2 text-[12px] font-bold text-rose-600 hover:bg-rose-50/50 transition-colors flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                Decline
                              </button>
                            </div>
                          </>
                        )}
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

      {/* Decision Reason Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
          {/* Modal Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-[#0F2A38]/50 backdrop-blur-sm transition-opacity" 
            onClick={handleCancel}
          />
          
          {/* Modal Content Box */}
          <div className="relative bg-white rounded-[32px] p-8 sm:p-10 shadow-xl border border-[#E2E8F0] w-full max-w-[480px] z-10 animate-scaleUp">
            <h2 className="text-[28px] font-extrabold text-[#0F2A38] text-center leading-tight mb-8">
              Add a reason for<br />this decision.
            </h2>
            
            <form onSubmit={handleSave} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#0F2A38]">Reason</label>
                <textarea 
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Please enter your reason here" 
                  className="w-full h-[120px] p-4 rounded-xl border border-[#E2E8F0] bg-white text-[#0F2A38] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#0F2A38] focus:ring-1 focus:ring-[#0F2A38] text-[15px] resize-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <button 
                  type="submit" 
                  className="w-full h-[48px] bg-[#0F2A38] text-white rounded-xl font-bold text-[15px] hover:bg-opacity-90 transition-colors shadow-sm"
                >
                  Save
                </button>
                <button 
                  type="button" 
                  onClick={handleCancel}
                  className="w-full h-[48px] bg-white border border-[#0F2A38] text-[#0F2A38] rounded-xl font-bold text-[15px] hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[600] bg-primary text-white px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10 animate-slideUp">
          <div className={`w-2.5 h-2.5 rounded-full ${toast.type === 'success' ? 'bg-emerald-400' : 'bg-rose-400'}`} />
          <span className="text-[14px] font-bold tracking-tight">{toast.message}</span>
        </div>
      )}
    </div>
  );
}
