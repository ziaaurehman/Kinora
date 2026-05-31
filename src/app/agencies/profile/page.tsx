'use client';

import React, { useState } from 'react';

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

const DoubleCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 7 17l-5-5"/>
    <path d="M22 10l-7.5 7.5L13 16"/>
  </svg>
);

export default function AgencyProfilePage() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  return (
    <div className="bg-bg-section min-h-screen pt-10 pb-20 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Top Profile Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start relative">
          
          {/* Logo */}
          <div className="relative w-[280px] h-[280px] rounded-full border-[2.5px] border-accent flex items-center justify-center bg-white shrink-0 shadow-sm">
             <CaduceusIcon className="w-32 h-32 text-primary" />
             <div className="absolute bottom-[20px] right-[20px] w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <CheckCircleIcon className="w-8 h-8 text-accent" />
             </div>
          </div>
          
          {/* Details */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4 w-full">
               <div>
                 <div className="flex items-center gap-3 mb-1">
                   <h1 className="text-[32px] font-semibold text-primary leading-tight">Caregiver agency</h1>
                   <BadgeCheckIcon className="w-8 h-8 text-accent" />
                 </div>
                 <p className="text-[19px] text-txt-secondary mb-5">We deliver best care services</p>
               </div>
               
               {/* Action Buttons */}
               <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                 <button 
                   className="bg-primary text-white px-6 py-2.5 rounded-md font-medium hover:bg-primary-light transition-colors text-[14px] w-full sm:w-[140px]"
                   onClick={() => setIsSuccessModalOpen(true)}
                 >
                   Submit Query
                 </button>
                 <button className="bg-white border border-primary text-primary px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors text-[14px] w-full sm:w-[140px]">
                   Save For Later
                 </button>
               </div>
            </div>
            
            <p className="text-[#4A6274] text-[15px] leading-relaxed max-w-[800px] mb-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
            </p>
            
            <h2 className="text-[21px] font-bold text-primary mb-4">Key Details</h2>
            
            <div className="flex flex-col gap-3.5 text-[15px] text-[#4A6274]">
              <p><span className="font-semibold text-primary">Price Range:</span> $1 &ndash; $2 / hour</p>
              
              <div className="flex items-center gap-4 flex-wrap">
                <p><span className="font-semibold text-primary">Contract Required:</span> Yes / No</p>
                <div className="w-[1.5px] h-[18px] bg-gray-300 hidden sm:block"></div>
                <p><span className="font-semibold text-primary">Insurance Accepted:</span> Yes / No / Providers</p>
              </div>
              
              <div className="flex items-center gap-4 flex-wrap">
                <p><span className="font-semibold text-primary">Zip Code:</span> 098768</p>
                <div className="w-[1.5px] h-[18px] bg-gray-300 hidden sm:block"></div>
                <p><span className="font-semibold text-primary">2+ years in operations</span></p>
              </div>
              
              <p><span className="font-semibold text-primary">Languages spoken by staff:</span> English, Arabic, Spanish.</p>
              
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span className="font-semibold text-primary">Care types:</span>
                <div className="flex gap-2 flex-wrap">
                  {['Companionship', 'Errands & Shopping', 'Meal Preparation'].map(t => (
                    <span key={t} className="bg-[#6B7B88] text-white px-3.5 py-1 rounded-full text-[13px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-1">
                <span className="font-semibold text-primary">Ratings:</span>
                <div className="flex gap-1">
                   {[1,2,3,4].map(i => (
                      <StarIcon key={i} className="w-[20px] h-[20px] text-accent" />
                   ))}
                   <StarIcon className="w-[20px] h-[20px] text-gray-200" />
                </div>
                <span className="font-bold text-[15px] text-primary ml-1">4.5</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Separator */}
        <hr className="border-border my-12" />
        
        {/* Availability Section */}
        <div>
           <h2 className="text-[28px] font-bold text-primary mb-6">Availability</h2>
           
           <div className="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-8 overflow-x-auto">
             <div className="min-w-[850px]">
               {/* Grid Layout */}
               <div className="grid grid-cols-6 gap-3">
                 
                 {/* Row 1: Headers */}
                 <div className="bg-[#E6EEF5] rounded-xl flex items-center justify-center py-4">
                   <span className="font-semibold text-primary text-[17px]">July</span>
                 </div>
                 <div className="bg-[#E6EEF5] rounded-xl flex items-center justify-center py-4">
                   <span className="font-semibold text-primary text-[17px]">Monday</span>
                 </div>
                 <div className="bg-[#E6EEF5] rounded-xl flex items-center justify-center py-4">
                   <span className="font-semibold text-primary text-[17px]">Tuesday</span>
                 </div>
                 <div className="bg-[#E6EEF5] rounded-xl flex items-center justify-center py-4">
                   <span className="font-semibold text-primary text-[17px]">Wednesday</span>
                 </div>
                 <div className="bg-[#E6EEF5] rounded-xl flex items-center justify-center py-4">
                   <span className="font-semibold text-primary text-[17px]">Thursday</span>
                 </div>
                 <div className="bg-[#E6EEF5] rounded-xl flex items-center justify-center py-4">
                   <span className="font-semibold text-primary text-[17px]">Friday</span>
                 </div>
                 
                 {/* Row 2: 1st Week */}
                 <div className="bg-[#E6EEF5] rounded-xl flex flex-col items-center justify-center py-3 h-[90px]">
                   <span className="font-semibold text-primary text-[17px]">1st Week</span>
                   <span className="text-[#6B7B88] text-[11.5px] mt-0.5">1/6/25 - 5/6/25</span>
                 </div>
                 <AppointmentCard name="Mr. Jhon" type="Companion Care" time="1 hr" />
                 <EmptyCard />
                 <EmptyCard />
                 <AppointmentCard name="Mr. Jhon" type="Companion Care" time="1 hr" />
                 <EmptyCard />
                 
                 {/* Row 3: 2nd Week */}
                 <div className="bg-[#E6EEF5] rounded-xl flex flex-col items-center justify-center py-3 h-[90px]">
                   <span className="font-semibold text-primary text-[17px]">2nd Week</span>
                   <span className="text-[#6B7B88] text-[11.5px] mt-0.5">8/6/25 - 12/6/25</span>
                 </div>
                 <EmptyCard />
                 <AppointmentCard name="Ms. Ashly" type="Meal Preparation" time="40 min" />
                 <EmptyCard />
                 <EmptyCard />
                 <AppointmentCard name="Ms. Ashly" type="Meal Preparation" time="40 min" />
                 
                 {/* Row 4: 3rd Week */}
                 <div className="bg-[#E6EEF5] rounded-xl flex flex-col items-center justify-center py-3 h-[90px]">
                   <span className="font-semibold text-primary text-[17px]">3rd Week</span>
                   <span className="text-[#6B7B88] text-[11.5px] mt-0.5">15/6/25 - 19/6/25</span>
                 </div>
                 <AppointmentCard name="Mr. Jhon" type="Companion Care" time="1 hr" />
                 <EmptyCard />
                 <AppointmentCard name="Mr. William" type="Companion Care" time="30 min" />
                 <EmptyCard />
                 <EmptyCard />
                 
                 {/* Row 5: 4th Week */}
                 <div className="bg-[#E6EEF5] rounded-xl flex flex-col items-center justify-center py-3 h-[90px]">
                   <span className="font-semibold text-primary text-[17px]">4th Week</span>
                   <span className="text-[#6B7B88] text-[11.5px] mt-0.5">22/6/25 - 26/6/25</span>
                 </div>
                 <EmptyCard />
                 <EmptyCard />
                 <EmptyCard />
                 <AppointmentCard name="Mr. Brad" type="Overnight Care" time="1.2 hr" />
                 <EmptyCard />
                 
               </div>
             </div>
           </div>
        </div>
        
      </div>
      
      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-[500] flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] p-10 w-full max-w-[420px] shadow-2xl relative flex flex-col items-center text-center">
            
            <div className="w-[80px] h-[80px] bg-[#E5ECE7] rounded-2xl flex items-center justify-center mb-6 mt-2">
              <DoubleCheckIcon className="w-10 h-10 text-[#405D47]" />
            </div>
            
            <h2 className="text-[28px] font-bold text-primary mb-4 tracking-tight">Thanks, Azher!</h2>
            
            <p className="text-[17px] text-[#2C3E50] mb-10 leading-snug px-2 font-medium">
              Your inquiry has been submitted. You&apos;ll<br/>be notified once it&apos;s accepted.
            </p>
            
            <button 
              className="w-full bg-[#122A38] text-white py-3.5 rounded-xl font-medium text-[16px] hover:bg-primary transition-colors"
              onClick={() => setIsSuccessModalOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}

function EmptyCard() {
  return (
    <div className="border-[1.5px] border-[#F0F2F5] rounded-xl h-[90px] bg-white"></div>
  );
}

function AppointmentCard({ name, type, time }: { name: string, type: string, time: string }) {
  return (
    <div className="bg-[#122A38] rounded-xl h-[90px] p-4 flex flex-col justify-center shadow-sm">
       <span className="text-white text-[15px] font-medium leading-tight tracking-wide">{name}</span>
       <span className="text-[#A4B3BC] text-[10px] mt-1">{type}</span>
       <span className="text-white text-[10px] mt-1.5 font-medium">Response time: {time}</span>
    </div>
  );
}
