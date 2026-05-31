'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

// Logos
function CaduceusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22V2" />
      <path d="M12 7c-1.5-2-4-2-4 0s2.5 4 4 4" />
      <path d="M12 7c1.5-2 4-2 4 0s-2.5 4-4 4" />
      <path d="M12 14c-1.5-2-4-2-4 0s2.5 4 4 4" />
      <path d="M12 14c1.5-2 4-2 4 0s-2.5 4-4 4" />
      <path d="M6 3l1 1" />
      <path d="M18 3l-1 1" />
    </svg>
  );
}

function HeartCrossLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 9v6" />
      <path d="M9 12h6" />
    </svg>
  );
}

function MedpulseLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
       <path d="M7 21h10" />
       <path d="M12 21v-4" />
       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
       <path d="M3 13v5a2 2 0 0 0 2 2h3" />
       <path d="M21 13v5a2 2 0 0 1-2 2h-3" />
    </svg>
  );
}

function AlpineLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
       <path d="M11 2v4.5A4.5 4.5 0 0 0 15.5 11h.5a4.5 4.5 0 0 0 4.5-4.5V2" />
       <path d="M11 2h9" />
       <circle cx="5" cy="18" r="3" />
       <path d="M15.5 11c-2.5 0-4.5 2-4.5 4.5v.5" />
       <path d="M11 16h-3" />
       <path d="M12 7l-2 3" />
    </svg>
  );
}

const agencies = [
  {
    id: 1,
    name: 'CAREGIVER Agency',
    logo: CaduceusIcon,
    verified: true,
    description: 'Lorem Ipsum is simply dummy text',
    services: ['Companionship', 'Errands & Shopping', 'Meal Preparation'],
    responseTime: '2 Hours',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'SUNSHINE Care',
    logo: HeartCrossLogo,
    verified: true,
    description: 'Lorem Ipsum is simply dummy text',
    services: ['Companionship', 'Errands & Shopping', 'Meal Preparation'],
    responseTime: '2 Hours',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'MEDPULSE',
    logo: MedpulseLogo,
    verified: true,
    description: 'Lorem Ipsum is simply dummy text',
    services: ['Companionship', 'Errands & Shopping', 'Meal Preparation'],
    responseTime: '2 Hours',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'ALPINE Care',
    logo: AlpineLogo,
    verified: true,
    description: 'Lorem Ipsum is simply dummy text',
    services: ['Companionship', 'Errands & Shopping', 'Meal Preparation'],
    responseTime: '2 Hours',
    rating: 4.5,
  },
];

export default function AgenciesPage() {
  const [activeTab, setActiveTab] = useState<'searched' | 'preferred'>('searched');
  
  const displayedAgencies = activeTab === 'preferred' 
    ? agencies.filter(a => a.id === 2 || a.id === 3) 
    : agencies;
    
  return (
    <div className="bg-bg-section min-h-screen pt-10 pb-20 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-border flex flex-col md:flex-row items-center p-2 mb-8 gap-2 md:gap-0">
           {/* Care Type */}
           <div className="flex-1 flex items-center px-4 py-2.5 w-full md:w-auto md:border-r border-border">
             <ShieldCheckIcon className="w-5 h-5 text-txt-muted mr-3 shrink-0" />
             <select className="bg-transparent text-txt-primary focus:outline-none w-full appearance-none text-[15px] cursor-pointer">
                <option>Search by Care Type</option>
             </select>
             <ChevronDownIcon className="w-5 h-5 text-txt-muted ml-2 shrink-0" />
           </div>
           
           {/* Location */}
           <div className="flex-1 flex items-center px-4 py-2.5 w-full md:w-auto md:border-r border-border">
             <MapPinIcon className="w-5 h-5 text-txt-muted mr-3 shrink-0" />
             <input type="text" defaultValue="675990" className="bg-transparent text-txt-primary focus:outline-none w-full text-[15px]" />
           </div>
           
           {/* Urgency */}
           <div className="flex-1 flex items-center px-4 py-2.5 w-full md:w-auto md:border-r border-border">
             <ClockIcon className="w-5 h-5 text-txt-muted mr-3 shrink-0" />
             <select className="bg-transparent text-txt-primary focus:outline-none w-full appearance-none text-[15px] cursor-pointer">
                <option>Search by Urgency Level</option>
             </select>
             <ChevronDownIcon className="w-5 h-5 text-txt-muted ml-2 shrink-0" />
           </div>
           
           {/* Actions */}
           <div className="flex items-center gap-4 px-4 py-2 shrink-0 w-full md:w-auto justify-end">
             <button className="w-[42px] h-[42px] rounded-full bg-accent text-white flex items-center justify-center shrink-0 hover:bg-accent-hover transition-colors shadow-sm" aria-label="Filter">
               <FilterIcon className="w-5 h-5" />
             </button>
             <button className="px-8 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors text-[15px]">
               Search
             </button>
           </div>
        </div>

        {/* Tabs */}
        <div className="flex z-10 relative">
          <button 
            className={`px-8 py-3.5 rounded-t-xl font-medium text-[15px] transition-colors ${activeTab === 'searched' ? 'bg-[#122A38] text-white' : 'bg-white text-primary border-t border-x border-border hover:bg-gray-50'}`}
            onClick={() => setActiveTab('searched')}
          >
            Searched Agencies
          </button>
          <button 
            className={`px-8 py-3.5 rounded-t-xl font-medium text-[15px] transition-colors ${activeTab === 'preferred' ? 'bg-[#122A38] text-white' : 'bg-white text-primary border-t border-x border-border hover:bg-gray-50'}`}
            onClick={() => setActiveTab('preferred')}
          >
            Preferred Agencies
          </button>
        </div>

        {/* Agency List Container */}
        <div className={`bg-white shadow-sm border border-border p-6 md:p-8 relative z-0 ${activeTab === 'searched' ? 'rounded-tr-[20px] rounded-b-[20px] rounded-tl-none' : 'rounded-[20px]'}`}>
           <div className="flex flex-col">
             {displayedAgencies.map((agency, index) => (
               <React.Fragment key={agency.id}>
                 <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
                    <div className="flex flex-col sm:flex-row items-start gap-6 w-full">
                       {/* Image */}
                       <div className="relative w-[100px] h-[100px] rounded-full border border-gray-300 flex items-center justify-center bg-white shrink-0">
                          <agency.logo className="w-12 h-12 text-primary" />
                          <div className="absolute bottom-[2px] right-[2px] w-7 h-7 bg-white rounded-full flex items-center justify-center">
                             <CheckCircleIcon className="w-6 h-6 text-accent" />
                          </div>
                       </div>
                       
                       {/* Info */}
                       <div className="flex flex-col gap-2 pt-1 w-full">
                          <div className="flex items-center gap-3">
                             <h2 className="text-[22px] font-medium text-primary leading-none">{agency.name}</h2>
                             {agency.verified && (
                               <div className="flex items-center gap-1.5 text-accent text-[14px] font-medium">
                                 <BadgeCheckIcon className="w-5 h-5" />
                                 Kinora Verified
                               </div>
                             )}
                          </div>
                          <p className="text-[#A0A0A0] text-[15px]">{agency.description}</p>
                          
                          <div className="flex items-center gap-3 mt-1 flex-wrap">
                             <span className="text-[15px] font-medium text-primary">Services:</span>
                             {agency.services.map(s => (
                               <span key={s} className="bg-[#6B7B88] text-white px-3.5 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                                 {s}
                               </span>
                             ))}
                          </div>
                          
                          <div className="flex items-center gap-6 mt-1 flex-wrap">
                             <p className="text-[15px]">
                               <span className="text-[#A0A0A0]">Estimated Response Time: </span>
                               <span className="text-[#6B7B88] font-medium">{agency.responseTime}</span>
                             </p>
                             
                             <div className="flex items-center gap-1">
                                <div className="flex gap-1">
                                   {[1,2,3,4].map(i => (
                                      <StarIcon key={i} className="w-[18px] h-[18px] text-accent" />
                                   ))}
                                   <StarIcon className="w-[18px] h-[18px] text-gray-200" />
                                </div>
                                <span className="text-[15px] font-bold text-primary ml-1">{agency.rating}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                    
                    {/* Action */}
                    <div className="shrink-0 mt-4 md:mt-0 w-full md:w-auto flex justify-end">
                      <Link href="/agencies/profile" className="w-full md:w-auto bg-primary hover:bg-primary-light text-white px-7 py-2.5 rounded-lg text-[15px] font-medium transition-colors text-center inline-block">
                        View Full Profile
                      </Link>
                    </div>
                 </div>
                 
                 {index < displayedAgencies.length - 1 && <hr className="border-border my-8" />}
               </React.Fragment>
             ))}
           </div>
           
           {/* Footer */}
           <div className="mt-8 pt-6 border-t border-border flex justify-between items-center text-txt-muted text-[15px] font-medium">
             <span>135 results</span>
             <button className="flex items-center hover:text-primary transition-colors text-primary font-medium group">
               Show me more results 
               <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
