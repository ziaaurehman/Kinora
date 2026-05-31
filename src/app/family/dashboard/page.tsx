import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Family Dashboard',
};

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);
const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);
const HeartFilledIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);
const MessageSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneCallIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

function AvatarPlaceholder({ bg = 'bg-[#1A3A4D]' }: { bg?: string }) {
  return (
    <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0 overflow-hidden ${bg}`}>
       <UserIcon className="w-[26px] h-[26px] text-white opacity-70" />
    </div>
  );
}

const ConnectedBadge = () => <span className="px-3 py-1 bg-[#D1EAE0] text-[#31865F] rounded-md text-[10px] font-medium tracking-wide">Connected</span>;
const PendingBadge = () => <span className="px-3 py-1 bg-[#F7E5D4] text-[#CA8A56] rounded-md text-[10px] font-medium tracking-wide">Pending</span>;
const InProgressBadge = () => <span className="px-3 py-1 bg-[#DBEAFE] text-[#3B82F6] rounded-md text-[10px] font-medium tracking-wide">In Progress</span>;
const DeclinedBadge = () => <span className="px-3 py-1 bg-[#FCE8E8] text-[#D84C4C] rounded-md text-[10px] font-medium tracking-wide">Declined</span>;

function InquiryCard({ agencyName, date, Badge, avatarBg = 'bg-[#122A38]', className = 'py-1' }: { agencyName: string, date: string, Badge: React.FC, avatarBg?: string, className?: string }) {
  return (
     <div className={`flex items-center gap-3 w-full ${className}`}>
       <AvatarPlaceholder bg={avatarBg} />
       <div className="flex flex-col flex-1">
          <span className="text-[15px] font-medium text-primary">{agencyName}</span>
          <span className="text-[11px] text-[#8C9BA5]">We deliver best care services</span>
       </div>
       <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span className="text-[10.5px] text-[#8C9BA5]">{date}</span>
          <Badge />
       </div>
     </div>
  );
}

function SavedAgencyCard({ agencyName }: { agencyName: string }) {
  return (
     <div className="flex items-center gap-3 w-full py-1">
       <AvatarPlaceholder bg="bg-[#122A38]" />
       <div className="flex flex-col flex-1">
          <span className="text-[15px] font-medium text-primary">{agencyName}</span>
          <span className="text-[11px] text-[#8C9BA5]">We deliver best care services</span>
       </div>
       <div className="flex items-center justify-end shrink-0">
          <HeartFilledIcon className="w-[20px] h-[20px] text-[#D84C4C]" />
       </div>
     </div>
  );
}

function MessageCard({ agencyName, msg, time, unreadCount }: { agencyName: string, msg: string, time: string, unreadCount: number }) {
  return (
     <div className="flex items-center gap-3 w-full py-1">
       <AvatarPlaceholder bg="bg-[#122A38]" />
       <div className="flex flex-col flex-1 truncate pr-2">
          <span className="text-[15px] font-medium text-primary">{agencyName}</span>
          <span className="text-[11.5px] text-[#8C9BA5] truncate">{msg}</span>
       </div>
       <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span className="text-[10px] text-[#8C9BA5] font-medium">{time}</span>
          {unreadCount > 0 && (
             <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#31865F] text-white text-[10px] font-bold">
               {unreadCount}
             </span>
          )}
       </div>
     </div>
  );
}

export default function FamilyDashboardPage() {
  return (
    <div className="bg-bg-section min-h-screen pt-12 pb-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header Title */}
        <div className="mb-10">
          <h1 className="text-[34px] font-semibold text-primary tracking-tight mb-2">Welcome back, Sarah !</h1>
          <p className="text-[15px] text-txt-secondary">Manage your care journey in one place.</p>
        </div>
        
        {/* All Inquires Section */}
        <div className="bg-white rounded-[20px] shadow-sm border border-border mb-8 overflow-hidden">
           <div className="px-6 py-5 border-b border-border">
             <h2 className="text-[22px] font-bold text-primary">All Inquires</h2>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-6">
             {/* Connected Column */}
             <div className="flex flex-col border border-border-light rounded-[14px] p-5">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[18px] font-bold text-[#31865F]">Connected</h3>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#31865F]"></div>
               </div>
               <div className="flex flex-col gap-4">
                 <InquiryCard agencyName="Caregiver agency" date="Apr 11, 2025" Badge={ConnectedBadge} avatarBg="bg-[#31865F]" />
                 <hr className="border-gray-100" />
                 <InquiryCard agencyName="Caregiver agency" date="Apr 11, 2025" Badge={ConnectedBadge} avatarBg="bg-[#31865F]" />
                 <hr className="border-gray-100" />
                 <InquiryCard agencyName="Caregiver agency" date="Apr 11, 2025" Badge={ConnectedBadge} avatarBg="bg-[#31865F]" />
               </div>
             </div>
             
             {/* Pending Column */}
             <div className="flex flex-col border border-border-light rounded-[14px] p-5">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[18px] font-bold text-[#CA8A56]">Pending</h3>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#CA8A56]"></div>
               </div>
               <div className="flex flex-col gap-4">
                 <InquiryCard agencyName="Sunshine agency" date="Apr 11, 2025" Badge={PendingBadge} avatarBg="bg-[#CA8A56]" />
                 <hr className="border-gray-100" />
                 <InquiryCard agencyName="Sunshine agency" date="Apr 11, 2025" Badge={PendingBadge} avatarBg="bg-[#CA8A56]" />
                 <hr className="border-gray-100" />
                 <InquiryCard agencyName="Sunshine agency" date="Apr 11, 2025" Badge={PendingBadge} avatarBg="bg-[#CA8A56]" />
               </div>
             </div>
             
             {/* In Progress Column */}
             <div className="flex flex-col border border-border-light rounded-[14px] p-5">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[18px] font-bold text-[#3B82F6]">In Progress</h3>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#3B82F6]"></div>
               </div>
               <div className="flex flex-col gap-4">
                 <InquiryCard agencyName="Health agency" date="Apr 11, 2025" Badge={InProgressBadge} avatarBg="bg-[#3B82F6]" />
                 <hr className="border-gray-100" />
                 <InquiryCard agencyName="Health agency" date="Apr 11, 2025" Badge={InProgressBadge} avatarBg="bg-[#3B82F6]" />
                 <hr className="border-gray-100" />
                 <InquiryCard agencyName="Health agency" date="Apr 11, 2025" Badge={InProgressBadge} avatarBg="bg-[#3B82F6]" />
               </div>
             </div>
           </div>
        </div>
        
        {/* Bottom Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Inquiry History */}
          <div className="bg-white rounded-[20px] shadow-sm border border-border p-6 md:p-8 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ClockIcon className="w-[26px] h-[26px] text-[#D96C3B]" />
                <h3 className="text-[20px] font-bold text-primary">Inquiry History</h3>
              </div>
              <Link href="/family/dashboard/inquiries" className="text-[#D96C3B] text-[15px] font-medium hover:underline transition-all">See All</Link>
            </div>
            <div className="flex flex-col flex-1">
              <InquiryCard agencyName="Caregiver agency" date="Apr 11, 2025" Badge={ConnectedBadge} avatarBg="bg-[#D96C3B]" className="flex-1 py-2" />
              <hr className="border-gray-100" />
              <InquiryCard agencyName="Caregiver agency" date="Apr 11, 2025" Badge={ConnectedBadge} avatarBg="bg-[#D96C3B]" className="flex-1 py-2" />
              <hr className="border-gray-100" />
              <InquiryCard agencyName="Caregiver agency" date="Apr 11, 2025" Badge={InProgressBadge} avatarBg="bg-[#D96C3B]" className="flex-1 py-2" />
              <hr className="border-gray-100" />
              <InquiryCard agencyName="Caregiver agency" date="Apr 11, 2025" Badge={DeclinedBadge} avatarBg="bg-[#D96C3B]" className="flex-1 py-2" />
            </div>
          </div>
          
          {/* Saved / Favorited Agencies */}
          <div className="bg-white rounded-[20px] shadow-sm border border-border p-6 md:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <HeartIcon className="w-[26px] h-[26px] text-[#D84C4C]" />
                <h3 className="text-[20px] font-bold text-primary">Saved / Favorited Agencies</h3>
              </div>
              <Link href="/family/dashboard/favorites" className="text-[#D84C4C] text-[15px] font-medium hover:underline transition-all">See All</Link>
            </div>
            <div className="flex flex-col gap-[1.125rem]">
              <SavedAgencyCard agencyName="Caregiver agency" />
              <hr className="border-gray-100" />
              <SavedAgencyCard agencyName="Caregiver agency" />
              <hr className="border-gray-100" />
              <SavedAgencyCard agencyName="Caregiver agency" />
              <hr className="border-gray-100" />
              <SavedAgencyCard agencyName="Caregiver agency" />
              <hr className="border-gray-100" />
              <SavedAgencyCard agencyName="Caregiver agency" />
            </div>
          </div>
          
          {/* Active Message Threads */}
          <div className="bg-white rounded-[20px] shadow-sm border border-border p-6 md:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <MessageSquareIcon className="w-[26px] h-[26px] text-[#31865F]" />
                <h3 className="text-[20px] font-bold text-primary">Active Message Threads</h3>
              </div>
              <Link href="/family/dashboard/messages" className="text-[#31865F] text-[15px] font-medium hover:underline transition-all">See All</Link>
            </div>
            <div className="flex flex-col gap-[1.125rem]">
              <MessageCard agencyName="Caregiver agency" msg="You: Thank you that works for us." time="10:30 AM" unreadCount={2} />
              <hr className="border-gray-100" />
              <MessageCard agencyName="Caregiver agency" msg="We deliver best care services" time="10:30 AM" unreadCount={1} />
              <hr className="border-gray-100" />
              <MessageCard agencyName="Caregiver agency" msg="We deliver best care services" time="10:30 AM" unreadCount={3} />
            </div>
          </div>
          
          {/* Account Info */}
          <div className="bg-white rounded-[20px] shadow-sm border border-border p-6 md:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <UserIcon className="w-[26px] h-[26px] text-[#3B82F6]" />
                <h3 className="text-[20px] font-bold text-primary">Account Info</h3>
              </div>
              <button className="text-[#3B82F6] text-[15px] font-medium hover:underline transition-all">See Profile</button>
            </div>
            
            <div className="flex flex-col gap-[1.35rem]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-[50px] h-[50px] rounded-full bg-[#EBF3FE] flex items-center justify-center shrink-0">
                      <MapPinIcon className="w-5 h-5 text-[#3B82F6]" />
                   </div>
                   <span className="text-[16.5px] font-medium text-primary">ZIP Code</span>
                </div>
                <span className="text-[13px] text-[#8C9BA5] text-right">50550</span>
              </div>
              
              <hr className="border-gray-100" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-[50px] h-[50px] rounded-full bg-[#EBF3FE] flex items-center justify-center shrink-0">
                      <HeartIcon className="w-5 h-5 text-[#3B82F6]" />
                   </div>
                   <span className="text-[16.5px] font-medium text-primary">Care Needs</span>
                </div>
                <span className="text-[13px] text-[#8C9BA5] text-right max-w-[200px]">Personal care , Medication Reminder</span>
              </div>
              
              <hr className="border-gray-100" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-[50px] h-[50px] rounded-full bg-[#EBF3FE] flex items-center justify-center shrink-0">
                      <PhoneCallIcon className="w-5 h-5 text-[#3B82F6]" />
                   </div>
                   <span className="text-[16.5px] font-medium text-primary">Contact Info</span>
                </div>
                <span className="text-[13px] text-[#8C9BA5] text-right">test@gmail.com | +971 26488279</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
