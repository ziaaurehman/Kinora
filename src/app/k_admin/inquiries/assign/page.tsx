'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Agency {
  id: number;
  name: string;
  verified: boolean;
  description: string;
  services: string[];
  responseTime: string;
  rating: number;
  zipCode: string;
  urgencyLevels: string[];
  fullyBooked: boolean;
}

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const BadgeCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const initialAgencies: Agency[] = [
  {
    id: 1,
    name: 'CAREGIVER Agency',
    verified: true,
    description: 'Lorem Ipsum is simply dummy text',
    services: ['Companionship', 'Errands & Shopping', 'Meal Preparation'],
    responseTime: '2 Hours',
    rating: 4.5,
    zipCode: '84600',
    urgencyLevels: ['Routine', 'Soon'],
    fullyBooked: false
  },
  {
    id: 2,
    name: 'SUNSHINE Care',
    verified: true,
    description: 'Lorem Ipsum is simply dummy text',
    services: ['Companionship', 'Errands & Shopping', 'Meal Preparation'],
    responseTime: '2 Hours',
    rating: 4.5,
    zipCode: '84600',
    urgencyLevels: ['Soon', 'Urgent'],
    fullyBooked: false
  },
  {
    id: 3,
    name: 'MEDPULSE',
    verified: true,
    description: 'Lorem Ipsum is simply dummy text',
    services: ['Companionship', 'Errands & Shopping', 'Meal Preparation'],
    responseTime: '2 Hours',
    rating: 4.5,
    zipCode: '84600',
    urgencyLevels: ['Urgent', 'Routine'],
    fullyBooked: true // triggers "fully booked" error modal
  },
  {
    id: 4,
    name: 'ALPINE Care',
    verified: true,
    description: 'Lorem Ipsum is simply dummy text',
    services: ['Companionship', 'Errands & Shopping', 'Meal Preparation'],
    responseTime: '2 Hours',
    rating: 4.5,
    zipCode: '112233',
    urgencyLevels: ['Routine', 'Soon', 'Urgent'],
    fullyBooked: false
  }
];

export default function AdminAssignInquiryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inquiryId = searchParams.get('id') || 'INQ-1234';

  const [careType, setCareType] = useState('');
  const [zipCode, setZipCode] = useState('84600');
  const [urgency, setUrgency] = useState('');
  const [agenciesList, setAgenciesList] = useState<Agency[]>(initialAgencies);

  // Modal State
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [selectedAgency, setSelectedAgency] = useState<Agency | null>(null);

  const handleSearch = () => {
    let temp = initialAgencies;
    if (careType) {
      temp = temp.filter(a => a.services.some(s => s.toLowerCase().includes(careType.toLowerCase())));
    }
    if (zipCode) {
      temp = temp.filter(a => a.zipCode === zipCode);
    }
    if (urgency) {
      temp = temp.filter(a => a.urgencyLevels.includes(urgency));
    }
    setAgenciesList(temp);
  };

  const handleAssignQuery = (agency: Agency) => {
    if (agency.fullyBooked) {
      setSelectedAgency(agency);
      setShowErrorModal(true);
    } else {
      // Direct back to inquiries list with localStorage confirmation message
      if (typeof window !== 'undefined') {
        localStorage.setItem('assign_success_message', `Successfully assigned Inquiry ${inquiryId} to ${agency.name}.`);
      }
      router.push('/k_admin/inquiries');
    }
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
            <h1 className="text-[32px] font-bold text-primary mb-1">Assign Inquiry</h1>
            <p className="text-[15px] text-[#8C9BA5] font-medium">Select an agency to route and assign inquiry {inquiryId}.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col md:flex-row items-center p-2 mb-8 gap-2 md:gap-0">
           {/* Care Type */}
           <div className="flex-1 flex items-center px-4 py-2.5 w-full md:w-auto md:border-r border-gray-150">
             <ShieldCheckIcon className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
             <select 
               value={careType}
               onChange={e => setCareType(e.target.value)}
               className="bg-transparent text-[#0F2A38] focus:outline-none w-full appearance-none text-[15px] cursor-pointer font-medium"
             >
                <option value="">Search by Care Type</option>
                <option value="Companionship">Companionship</option>
                <option value="Errands & Shopping">Errands & Shopping</option>
                <option value="Meal Preparation">Meal Preparation</option>
             </select>
             <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
           </div>
           
           {/* Location */}
           <div className="flex-1 flex items-center px-4 py-2.5 w-full md:w-auto md:border-r border-gray-150">
             <MapPinIcon className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
             <input 
               type="text" 
               value={zipCode} 
               onChange={e => setZipCode(e.target.value)}
               placeholder="Enter ZIP code"
               className="bg-transparent text-[#0F2A38] focus:outline-none w-full text-[15px] font-medium" 
             />
           </div>
           
           {/* Urgency */}
           <div className="flex-1 flex items-center px-4 py-2.5 w-full md:w-auto md:border-r border-gray-150">
             <ClockIcon className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
             <select 
               value={urgency}
               onChange={e => setUrgency(e.target.value)}
               className="bg-transparent text-[#0F2A38] focus:outline-none w-full appearance-none text-[15px] cursor-pointer font-medium"
             >
                <option value="">Search by Urgency Level</option>
                <option value="Routine">Routine (within 2 weeks)</option>
                <option value="Soon">Soon (within a week)</option>
                <option value="Urgent">Urgent (within 48 hours)</option>
             </select>
             <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
           </div>
           
           {/* Actions */}
           <div className="flex items-center gap-4 px-4 py-2 shrink-0 w-full md:w-auto justify-end">
             <button className="w-[42px] h-[42px] rounded-xl bg-accent text-white flex items-center justify-center shrink-0 hover:bg-accent-hover transition-colors shadow-sm" aria-label="Filter">
               <FilterIcon className="w-5 h-5" />
             </button>
             <button 
               onClick={handleSearch}
               className="px-8 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-light transition-colors text-[15px]"
             >
               Search
             </button>
           </div>
        </div>

        {/* Agency List Container Card */}
        <div className="bg-white shadow-sm border border-[#E2E8F0] p-6 md:p-8 rounded-[20px]">
           <div className="flex flex-col">
             {agenciesList.length === 0 ? (
               <div className="text-center py-12 text-gray-400 font-medium">No matching care agencies found.</div>
             ) : (
               agenciesList.map((agency, index) => (
                 <React.Fragment key={agency.id}>
                   <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
                      <div className="flex flex-col sm:flex-row items-start gap-6 w-full">
                         {/* Circle Image placeholder */}
                         <div className="relative w-[100px] h-[100px] rounded-full border border-gray-250 flex items-center justify-center bg-white shrink-0">
                            {/* Empty circle placeholder with badge check checkmark at bottom-right */}
                            <div className="absolute bottom-[2px] right-[2px] w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                               <CheckCircleIcon className="w-6 h-6 text-accent" />
                            </div>
                         </div>
                         
                         {/* Info details */}
                         <div className="flex flex-col gap-2 pt-1 w-full">
                            <div className="flex items-center gap-3 flex-wrap">
                               <h2 className="text-[22px] font-bold text-primary leading-none">{agency.name}</h2>
                               {agency.verified && (
                                 <div className="flex items-center gap-1.5 text-accent text-[14px] font-bold">
                                   <BadgeCheckIcon className="w-5 h-5" />
                                   Kinora Verified
                                 </div>
                               )}
                            </div>
                            <p className="text-[#A0A0A0] text-[15px] font-medium">{agency.description}</p>
                            
                            <div className="flex items-center gap-3 mt-1 flex-wrap">
                               <span className="text-[15px] font-bold text-primary">Services:</span>
                               {agency.services.map(s => (
                                 <span key={s} className="bg-[#6B7B88] text-white px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                                   {s}
                                 </span>
                               ))}
                            </div>
                            
                            <div className="flex items-center gap-6 mt-1 flex-wrap">
                               <p className="text-[15px] font-medium">
                                 <span className="text-[#A0A0A0]">Estimated Response Time: </span>
                                 <span className="text-[#6B7B88] font-bold">{agency.responseTime}</span>
                               </p>
                               
                               <div className="flex items-center gap-1">
                                  <div className="flex gap-1">
                                     {[1,2,3,4].map(i => (
                                        <StarIcon key={i} className="w-[18px] h-[18px] text-[#F5A623]" />
                                     ))}
                                     <StarIcon className="w-[18px] h-[18px] text-gray-200" />
                                  </div>
                                  <span className="text-[15px] font-bold text-primary ml-1">{agency.rating}</span>
                               </div>
                            </div>
                         </div>
                      </div>
                      
                      {/* Assign query action button */}
                      <div className="shrink-0 mt-4 md:mt-0 w-full md:w-auto flex justify-end">
                        <button 
                          onClick={() => handleAssignQuery(agency)}
                          className="w-full md:w-auto bg-primary hover:bg-primary-light text-white px-8 py-2.5 rounded-lg text-[15px] font-bold transition-all shadow-sm shrink-0"
                        >
                          Assign Query
                        </button>
                      </div>
                   </div>
                   
                   {index < agenciesList.length - 1 && <hr className="border-gray-100 my-8" />}
                 </React.Fragment>
               ))
             )}
           </div>
           
           {/* Card Footer list stats */}
           <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-gray-400 text-[15px] font-bold">
             <span>135 results</span>
             <button className="flex items-center hover:text-accent transition-colors text-accent font-bold group">
               Show me more results 
               <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
        </div>
      </div>

      {/* Warning Error Modal (Agency Fully Booked) */}
      {showErrorModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-[#0F2A38]/50 backdrop-blur-sm transition-opacity animate-fadeIn" 
            onClick={() => setShowErrorModal(false)}
          />
          
          {/* Content dialog box */}
          <div className="relative bg-white rounded-[32px] p-8 sm:p-10 shadow-xl border border-[#E2E8F0] w-full max-w-[480px] z-10 flex flex-col items-center animate-scaleUp">
            {/* Red slash forbidden circle warning icon */}
            <div className="w-16 h-16 bg-[#FFF2F2] rounded-full flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
            </div>

            <h2 className="text-[28px] font-extrabold text-[#0F2A38] text-center leading-tight mb-3">
              You Can&apos;t Assign Inquiry
            </h2>
            
            <p className="text-[15px] text-[#8C9BA5] text-center leading-relaxed mb-8 font-medium">
              Agency fully booked this month<br />Please try another one
            </p>
            
            <button 
              onClick={() => setShowErrorModal(false)}
              className="w-full h-[48px] bg-[#0F2A38] text-white rounded-xl font-bold text-[15px] hover:bg-opacity-90 transition-colors shadow-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
