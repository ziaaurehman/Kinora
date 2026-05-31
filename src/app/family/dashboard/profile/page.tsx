'use client';

import React, { useState } from 'react';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18M6 6l12 12"/>
  </svg>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);


const MoreHorizontalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="19" cy="12" r="1"/>
    <circle cx="5" cy="12" r="1"/>
  </svg>
);

function InputField({ label, placeholder, type = 'text', fullWidth = false }: { label: string, placeholder: string, type?: string, fullWidth?: boolean }) {
  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'col-span-1 md:col-span-2' : ''}`}>
      <label className="text-[13px] font-medium text-primary ml-0.5">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-[14px] focus:outline-none focus:border-[#122A38] focus:ring-1 focus:ring-[#122A38] transition-all placeholder:text-[#8C9BA5]"
      />
    </div>
  );
}

function SelectField({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-primary ml-0.5">{label}</label>
      <div className="relative">
        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-[14px] text-[#8C9BA5] appearance-none focus:outline-none focus:border-[#122A38] focus:ring-1 focus:ring-[#122A38] transition-all cursor-pointer">
          <option>{placeholder}</option>
        </select>
        <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}

export default function FamilyProfilePage() {
  const [careNeedsOpen, setCareNeedsOpen] = useState(true);
  const [urgencyOpen, setUrgencyOpen] = useState(true);
  
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
  const [openUserMenuId, setOpenUserMenuId] = useState<number | null>(null);
  
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const users = [
    { id: 1, name: 'Jane Cooper', email: 'Dementia Care' },
    { id: 2, name: 'Michael Foster', email: 'Dementia Care' },
  ];

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest('.user-action-menu')) {
        setOpenUserMenuId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-bg-section min-h-screen pt-12 pb-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="w-[100px] h-[100px] rounded-full bg-[#FFB89D] flex items-center justify-center overflow-hidden shrink-0 border-[3px] border-white shadow-sm relative">
              <div className="absolute top-[25%] w-[60px] h-[70px] bg-[#C1583D] rounded-t-full rounded-b-md"></div>
              <div className="absolute top-[35%] w-[40px] h-[45px] bg-[#FFE1CD] rounded-full"></div>
              <div className="absolute bottom-[-10px] w-[70px] h-[40px] bg-[#122A38] rounded-t-full"></div>
              <div className="absolute bottom-[20px] flex gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-[32px] font-bold text-primary tracking-tight leading-none mb-2">Sarah</h1>
              <p className="text-[20px] text-[#8C9BA5] font-light">alexarawles@gmail.com</p>
            </div>
          </div>
          
          {isEditingProfile ? (
            <div className="flex flex-col gap-3 self-start">
              <button 
                className="bg-[#122A38] text-white px-8 py-2 rounded-md text-[14px] font-medium hover:bg-primary transition-colors shadow-sm min-w-[110px]"
                onClick={() => setIsEditingProfile(false)}
              >
                Save
              </button>
              <button 
                className="bg-white text-[#122A38] border border-[#122A38] px-8 py-2 rounded-md text-[14px] font-medium hover:bg-gray-50 transition-colors shadow-sm min-w-[110px]"
                onClick={() => setIsEditingProfile(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button 
              className="bg-[#122A38] text-white px-8 py-2.5 rounded-md text-[14px] font-medium hover:bg-primary transition-colors shadow-sm self-start min-w-[110px]"
              onClick={() => setIsEditingProfile(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
        
        {/* Profile Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
          <InputField label="Family Name" placeholder="Family Name" />
          <SelectField label="Care recipient" placeholder="Select care recipient here" />
          <InputField label="Contact Email" placeholder="Contact Email" type="email" />
          <InputField label="Contact Phone" placeholder="Contact Phone" type="tel" />
          <InputField label="ZIP Code" placeholder="ZIP Code" />
          <SelectField label="Preferred Category" placeholder="Select your preferred Category" />
          
          <InputField label="Full address" placeholder="Full Address here" fullWidth />
          
          <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2">
            <label className="text-[13px] font-medium text-primary ml-0.5">Special Notes</label>
            <textarea 
              placeholder="Put special notes here"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-[14px] min-h-[120px] resize-y focus:outline-none focus:border-[#122A38] focus:ring-1 focus:ring-[#122A38] transition-all placeholder:text-[#8C9BA5]"
            />
          </div>
          
          {/* Custom Dropdowns */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-medium text-primary ml-0.5">Care Needs</label>
            <div 
              className="flex items-center justify-between w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-[14px] cursor-pointer"
              onClick={() => setCareNeedsOpen(!careNeedsOpen)}
            >
              <div className="flex items-center gap-2 text-primary">
                <SearchIcon className="w-4 h-4 text-gray-500" />
                <span className="font-medium">C</span>
              </div>
              <ChevronDownIcon className={`w-4 h-4 text-gray-400 transition-transform ${careNeedsOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {careNeedsOpen && (
              <div className="mt-1 bg-white border border-gray-200 rounded-lg shadow-sm z-20 flex flex-col overflow-hidden">
                <div className="px-5 py-3.5 border-b border-gray-100">
                  <span className="font-bold text-primary text-[14px]">Select one or more Care Needs</span>
                </div>
                <div className="flex flex-col">
                  {['Companion Care,', 'Transportation', 'Errand Support', 'Meal Preparation', 'Overnight Care'].map((item) => {
                    const isChecked = item === 'Companion Care,';
                    return (
                      <div key={item} className="flex items-center gap-4 px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer">
                         <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center border transition-colors ${isChecked ? 'bg-[#122A38] border-[#122A38]' : 'bg-white border-gray-300'}`}>
                           {isChecked && <CheckIcon className="w-3.5 h-3.5 text-white" />}
                         </div>
                         <span className={`text-[14px] ${isChecked ? 'text-[#8C9BA5]' : 'text-[#556987]'}`}>
                           {item}
                         </span>
                      </div>
                    );
                  })}
                </div>
                <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
                  <button className="flex items-center gap-1.5 text-[#D96C3B] text-[13px] font-semibold hover:opacity-80 transition-opacity">
                    <XIcon className="w-4 h-4" strokeWidth="2.5" /> Clear selection
                  </button>
                  <button 
                    className="bg-[#122A38] text-white px-7 py-2 rounded-md text-[14px] font-medium hover:bg-primary transition-colors"
                    onClick={() => setCareNeedsOpen(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-medium text-primary ml-0.5">Urgency Level</label>
            <div 
              className="flex items-center justify-between w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-[14px] cursor-pointer"
              onClick={() => setUrgencyOpen(!urgencyOpen)}
            >
              <div className="flex items-center gap-2 text-primary">
                <SearchIcon className="w-4 h-4 text-gray-500" />
                <span className="font-medium">R</span>
              </div>
              <ChevronDownIcon className={`w-4 h-4 text-gray-400 transition-transform ${urgencyOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {urgencyOpen && (
              <div className="mt-1 bg-white border border-gray-200 rounded-lg shadow-sm z-20 flex flex-col overflow-hidden">
                <div className="px-5 py-3.5 border-b border-gray-100">
                  <span className="font-bold text-primary text-[14px]">Select any Urgency level</span>
                </div>
                <div className="flex flex-col">
                  {['Routine (within 2 weeks)', 'Soon (within a week)', 'Urgent (within 48 hours)'].map((item) => (
                    <div key={item} className="flex items-center gap-4 px-5 py-3.5 border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
                       <span className="text-[14px] text-[#556987]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-200 my-10" />
        
        {/* Users List Header & Button (Button is placed outside the card in the mockup, right aligned) */}
        <div className="flex items-center justify-end mb-4">
          <button 
            className="bg-[#122A38] text-white px-8 py-2.5 rounded-md text-[14px] font-medium hover:bg-primary transition-colors shadow-sm"
            onClick={() => setIsAddUserModalOpen(true)}
          >
            Add Users
          </button>
        </div>
        
        {/* Users List Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative z-0 mb-10 pb-6">
          <div className="px-8 py-6">
            <h2 className="text-[20px] font-bold text-primary">Users List</h2>
          </div>
          
          <div className="flex flex-col w-full">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1fr_100px] px-8 py-3 border-b border-gray-100 text-[13px] font-medium text-[#8C9BA5]">
              <span>User Name</span>
              <span>User Email</span>
              <span className="text-right pr-3">Actions</span>
            </div>
            
            {/* Table Rows */}
            {users.map((user) => (
              <div key={user.id} className="grid grid-cols-[1fr_1fr_100px] items-center px-8 py-5 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors user-action-menu relative">
                <span className="text-[14px] font-semibold text-primary">{user.name}</span>
                <span className="text-[14px] text-primary">{user.email}</span>
                <div className="flex justify-end relative">
                  <button 
                    className={`w-9 h-9 rounded-[10px] flex items-center justify-center transition-colors focus:outline-none ${openUserMenuId === user.id ? 'border-[1.5px] border-[#5E6AD2] text-[#5E6AD2] bg-white shadow-sm' : 'border border-transparent text-[#8C9BA5] hover:text-primary hover:border-gray-200'}`}
                    onClick={() => setOpenUserMenuId(openUserMenuId === user.id ? null : user.id)}
                  >
                    <MoreHorizontalIcon className="w-5 h-5" />
                  </button>
                  
                  {openUserMenuId === user.id && (
                     <div className="absolute right-0 top-[45px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 px-2 py-2 z-10 w-32 flex flex-col gap-1">
                       <button 
                         className="text-[14px] font-medium text-primary hover:bg-gray-50 transition-colors w-full text-left px-4 py-2 rounded-md"
                         onClick={() => {
                           setIsEditUserModalOpen(true);
                           setOpenUserMenuId(null);
                         }}
                       >
                         Edit
                       </button>
                       <button 
                         className="text-[14px] font-medium text-primary hover:bg-gray-50 hover:text-red-500 transition-colors w-full text-left px-4 py-2 rounded-md"
                         onClick={() => {
                           setIsDeleteUserModalOpen(true);
                           setOpenUserMenuId(null);
                         }}
                       >
                         Delete
                       </button>
                     </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      
      {/* Add User Modal */}
      {isAddUserModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-[500] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-[460px] shadow-2xl">
            <h2 className="text-[32px] font-bold text-primary mb-8 tracking-tight">Add User</h2>
            
            <div className="flex flex-col gap-6 mb-8">
              <InputField label="Name" placeholder="Enter your name" />
              <InputField label="Email" placeholder="Enter your email" type="email" />
            </div>
            
            <div className="flex flex-col gap-3">
              <button className="w-full bg-[#122A38] text-white py-3.5 rounded-xl font-medium text-[16px] hover:bg-primary transition-colors">
                Add User
              </button>
              <button 
                className="w-full bg-white text-[#122A38] py-3.5 rounded-xl font-medium text-[16px] border border-[#122A38] hover:bg-gray-50 transition-colors"
                onClick={() => setIsAddUserModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {isEditUserModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-[500] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-[460px] shadow-2xl">
            <h2 className="text-[32px] font-bold text-primary mb-8 tracking-tight">Edit User</h2>
            
            <div className="flex flex-col gap-6 mb-8">
              <InputField label="Name" placeholder="Enter your name" />
              <InputField label="Email" placeholder="Enter your email" type="email" />
            </div>
            
            <div className="flex flex-col gap-3">
              <button className="w-full bg-[#122A38] text-white py-3.5 rounded-xl font-medium text-[16px] hover:bg-primary transition-colors">
                Save
              </button>
              <button 
                className="w-full bg-white text-[#122A38] py-3.5 rounded-xl font-medium text-[16px] border border-[#122A38] hover:bg-gray-50 transition-colors"
                onClick={() => setIsEditUserModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Delete User Modal */}
      {isDeleteUserModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-[500] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-[420px] shadow-2xl relative flex flex-col items-center text-center">
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setIsDeleteUserModalOpen(false)}
            >
              <XIcon className="w-6 h-6" strokeWidth="2.5" />
            </button>
            
            <h2 className="text-[32px] font-bold text-primary mb-6 mt-4 tracking-tight">Delete User</h2>
            
            <p className="text-[20px] text-[#556987] mb-8 font-medium leading-tight">
              Are you sure you want to<br/>delete this User?
            </p>
            
            <div className="flex flex-col gap-3 w-full">
              <button className="w-full bg-[#C1583D] text-white py-3.5 rounded-xl font-medium text-[16px] hover:bg-red-700 transition-colors">
                Delete
              </button>
              <button 
                className="w-full bg-white text-[#122A38] py-3.5 rounded-xl font-medium text-[16px] border border-[#122A38] hover:bg-gray-50 transition-colors"
                onClick={() => setIsDeleteUserModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
