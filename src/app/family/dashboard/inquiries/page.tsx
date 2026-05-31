import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inquiry History',
};

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function AvatarPlaceholder({ bg = 'bg-[#1A3A4D]', src }: { bg?: string, src?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="avatar" className="w-12 h-12 rounded-full object-cover shrink-0" />;
  }
  return (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${bg}`}>
       <UserIcon className="w-6 h-6 text-white opacity-70" />
    </div>
  );
}

const ConnectedBadge = () => <span className="px-3.5 py-1.5 bg-[#D1EAE0] text-[#31865F] rounded-md text-[13px] font-medium tracking-wide">Connected</span>;
const InProgressBadge = () => <span className="px-3.5 py-1.5 bg-[#DBEAFE] text-[#3B82F6] rounded-md text-[13px] font-medium tracking-wide">In progress</span>;
const DeclinedBadge = () => <span className="px-3.5 py-1.5 bg-[#FCE8E8] text-[#D84C4C] rounded-md text-[13px] font-medium tracking-wide">Declined</span>;

const inquiries = [
  { id: 1, name: 'Caregiver agency', date: 'Apr 11, 2025', status: 'connected', avatar: '/avatar.png' },
  { id: 2, name: 'Caregiver agency', date: 'Apr 11, 2025', status: 'connected', avatar: '/avatar.png' },
  { id: 3, name: 'Caregiver agency', date: 'Apr 11, 2025', status: 'declined', avatar: '/avatar.png' },
  { id: 4, name: 'Caregiver agency', date: 'Apr 11, 2025', status: 'in-progress', avatar: '/avatar.png' },
  { id: 5, name: 'Caregiver agency', date: 'Apr 11, 2025', status: 'in-progress', avatar: '/avatar.png' },
];

export default function InquiryHistoryPage() {
  return (
    <div className="bg-bg-section min-h-screen pt-12 pb-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Page Header */}
        <div className="flex items-start gap-5 mb-10">
          <Link href="/family/dashboard" className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0 hover:bg-gray-50 transition-colors shadow-sm">
            <ChevronLeftIcon className="w-6 h-6 text-primary" />
          </Link>
          <div>
            <h1 className="text-[32px] font-bold text-primary tracking-tight leading-none mb-2">Inquiry History</h1>
            <p className="text-[16px] text-[#8C9BA5]">A complete record of all your inquiries.</p>
          </div>
        </div>
        
        {/* Main List Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
           
           <div className="px-8 py-6 border-b border-border">
             <h2 className="text-[24px] font-bold text-primary">Inquiry List</h2>
           </div>
           
           {/* List Headers */}
           <div className="px-8 py-4 border-b border-gray-100 flex items-center justify-between text-[14.5px] font-medium text-[#8C9BA5]">
             <span className="w-1/2">Name</span>
             <span>Status</span>
           </div>
           
           {/* List Items */}
           <div className="flex flex-col">
             {inquiries.map((item, index) => (
               <React.Fragment key={item.id}>
                 <div className="px-8 py-5 flex items-center justify-between group hover:bg-gray-50 transition-colors">
                   <div className="flex items-center gap-4">
                     <AvatarPlaceholder src={item.avatar} />
                     <div className="flex flex-col">
                       <span className="text-[16px] font-semibold text-primary">{item.name}</span>
                       <span className="text-[14px] text-[#8C9BA5] mt-0.5">We deliver best care services &nbsp;|&nbsp; {item.date}</span>
                     </div>
                   </div>
                   
                   <div>
                     {item.status === 'connected' && <ConnectedBadge />}
                     {item.status === 'in-progress' && <InProgressBadge />}
                     {item.status === 'declined' && <DeclinedBadge />}
                   </div>
                 </div>
                 {index < inquiries.length - 1 && <div className="h-[1px] bg-gray-100 mx-8"></div>}
               </React.Fragment>
             ))}
           </div>
           
           {/* Pagination */}
           <div className="px-8 py-6 border-t border-gray-100 flex items-center justify-between text-[15px] font-medium text-primary mt-4">
             <button className="flex items-center gap-2 hover:text-accent transition-colors">
               <ArrowLeftIcon className="w-4 h-4" /> Previous
             </button>
             
             <div className="flex items-center gap-1 sm:gap-2">
               <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">1</button>
               <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">2</button>
               <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F4F4F5] text-primary">3</button>
               <span className="w-10 h-10 flex items-center justify-center text-[#8C9BA5]">...</span>
               <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors hidden sm:flex">65</button>
               <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors hidden sm:flex">66</button>
             </div>
             
             <button className="flex items-center gap-2 hover:text-accent transition-colors">
               Next <ArrowRightIcon className="w-4 h-4" />
             </button>
           </div>
           
        </div>
        
      </div>
    </div>
  );
}
