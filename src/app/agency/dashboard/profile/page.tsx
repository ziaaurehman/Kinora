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

export default function AgencyProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAvailabilityEditing, setIsAvailabilityEditing] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    agencyName: 'SUNSHINE Care',
    tagline: 'We deliver best care services',
    email: 'alexariden@gmail.com',
    phone: '+1 234 567 8900',
    zipCode: '84600',
    years: '5 Years',
    about: 'We are a dedicated team of professionals providing top-notch companionship and care services to families in need.'
  });

  const [offerings, setOfferings] = useState({
    mealService: 'Yes',
    transportation: 'Yes',
    govPrograms: 'No',
    otherServices: 'Dementia support, light housekeeping'
  });

  const [careTypes, setCareTypes] = useState(['Companion Care']);
  const [languages, setLanguages] = useState(['English']);
  const [careTypesOpen, setCareTypesOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  
  // Hydrate offerings
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedOfferings = localStorage.getItem('agency_offerings');
      if (savedOfferings) {
        try {
          setOfferings(JSON.parse(savedOfferings));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  // Handlers
  const handleSave = () => {
    localStorage.setItem('agency_offerings', JSON.stringify(offerings));
    setIsEditing(false);
  };

  const handleCancel = () => {
    const savedOfferings = localStorage.getItem('agency_offerings');
    if (savedOfferings) {
      try {
        setOfferings(JSON.parse(savedOfferings));
      } catch (e) {
        console.error(e);
      }
    }
    setIsEditing(false);
  };

  const toggleCareType = (type: string) => {
    if (!isEditing) return;
    setCareTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const toggleLanguage = (lang: string) => {
    if (!isEditing) return;
    setLanguages(prev => prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 md:p-8 font-sans bg-[#FAF9F6]">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 gap-6">
        <div className="flex items-center gap-6">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-[#F8D7CA] flex items-center justify-center border-4 border-white shadow-sm">
            <img src="/avatar.png" alt="Agency Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-[26px] font-bold text-[#112330] tracking-tight">{formData.agencyName}</h1>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white border border-[#E2E8F0] rounded-md shadow-sm">
                <CheckIcon className="w-3.5 h-3.5 text-[#D96C3B]" />
                <span className="text-[12px] font-semibold text-gray-500">Kinora Verified</span>
              </div>
            </div>
            <p className="text-[16px] text-[#64748B] mb-2">{formData.email}</p>
            <div className="flex items-center gap-1 text-[13px] text-[#112330] font-bold">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={`star-${star}`} width="16" height="16" viewBox="0 0 24 24" fill={star <= 4 ? "#D96C3B" : "none"} stroke={star <= 4 ? "#D96C3B" : "#D1D5DB"} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
              <span className="ml-1.5">4.5</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="px-6 py-2 bg-[#112330] text-white rounded-md text-[14px] font-semibold transition-colors hover:bg-opacity-90 shadow-sm">Save</button>
              <button onClick={handleCancel} className="px-6 py-2 bg-white text-[#112330] border border-[#E2E8F0] rounded-md text-[14px] font-semibold transition-colors hover:bg-gray-50 shadow-sm">Cancel</button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)} className="px-6 py-2 bg-[#112330] text-white rounded-md text-[14px] font-semibold transition-colors hover:bg-opacity-90 shadow-sm">Edit Profile</button>
          )}
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
        
        {/* Row 1 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#112330]">Agency Name</label>
          <input 
            type="text" 
            value={formData.agencyName}
            onChange={(e) => setFormData({...formData, agencyName: e.target.value})}
            disabled={!isEditing}
            className={`w-full h-[46px] px-4 rounded-lg border text-[14px] font-medium transition-colors focus:outline-none ${isEditing ? 'bg-white border-blue-300 focus:border-blue-500 text-[#112330]' : 'bg-transparent border-[#E2E8F0] text-gray-700'}`}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#112330]">Tagline</label>
          <input 
            type="text" 
            value={formData.tagline}
            onChange={(e) => setFormData({...formData, tagline: e.target.value})}
            disabled={!isEditing}
            className={`w-full h-[46px] px-4 rounded-lg border text-[14px] font-medium transition-colors focus:outline-none ${isEditing ? 'bg-white border-blue-300 focus:border-blue-500 text-[#112330]' : 'bg-transparent border-[#E2E8F0] text-gray-700'}`}
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#112330]">Contact Email</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            disabled={!isEditing}
            className={`w-full h-[46px] px-4 rounded-lg border text-[14px] font-medium transition-colors focus:outline-none ${isEditing ? 'bg-white border-blue-300 focus:border-blue-500 text-[#112330]' : 'bg-transparent border-[#E2E8F0] text-gray-700'}`}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#112330]">Contact Phone</label>
          <input 
            type="tel" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            disabled={!isEditing}
            className={`w-full h-[46px] px-4 rounded-lg border text-[14px] font-medium transition-colors focus:outline-none ${isEditing ? 'bg-white border-blue-300 focus:border-blue-500 text-[#112330]' : 'bg-transparent border-[#E2E8F0] text-gray-700'}`}
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#112330]">ZIP Code</label>
          <input 
            type="text" 
            value={formData.zipCode}
            onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
            disabled={!isEditing}
            className={`w-full h-[46px] px-4 rounded-lg border text-[14px] font-medium transition-colors focus:outline-none ${isEditing ? 'bg-white border-blue-300 focus:border-blue-500 text-[#112330]' : 'bg-transparent border-[#E2E8F0] text-gray-700'}`}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#112330]">Years in Operation</label>
          <input 
            type="text" 
            value={formData.years}
            onChange={(e) => setFormData({...formData, years: e.target.value})}
            disabled={!isEditing}
            className={`w-full h-[46px] px-4 rounded-lg border text-[14px] font-medium transition-colors focus:outline-none ${isEditing ? 'bg-white border-blue-300 focus:border-blue-500 text-[#112330]' : 'bg-transparent border-[#E2E8F0] text-gray-700'}`}
          />
        </div>
      </div>

      {/* About */}
      <div className="flex flex-col gap-1.5 mb-8">
        <label className="text-[13px] font-semibold text-[#112330]">About</label>
        <textarea 
          value={formData.about}
          onChange={(e) => setFormData({...formData, about: e.target.value})}
          disabled={!isEditing}
          className={`w-full h-[120px] p-4 rounded-lg border text-[14px] font-medium transition-colors focus:outline-none resize-none ${isEditing ? 'bg-white border-blue-300 focus:border-blue-500 text-[#112330]' : 'bg-transparent border-[#E2E8F0] text-gray-700'}`}
        />
      </div>

      {/* Dropdowns (Custom Checkbox Lists) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
        <div className="flex flex-col gap-1.5 relative">
          <label className="text-[13px] font-semibold text-[#112330]">Care types</label>
          <div 
            className="flex items-center justify-between w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-md text-[14px] cursor-pointer hover:border-gray-300 transition-colors"
            onClick={() => setCareTypesOpen(!careTypesOpen)}
          >
            <div className="flex items-center gap-2 text-[#112330]">
              <SearchIcon className="w-4 h-4 text-gray-500" />
              <span className="font-medium">C</span>
            </div>
            <ChevronDownIcon className={`w-4 h-4 text-gray-400 transition-transform ${careTypesOpen ? 'rotate-180' : ''}`} />
          </div>
          
          {careTypesOpen && (
            <div className="mt-1 bg-white border border-[#E2E8F0] rounded-lg shadow-sm z-20 flex flex-col overflow-hidden">
              <div className="px-5 py-3.5 border-b border-gray-100">
                <span className="font-bold text-[#112330] text-[14px]">Select one or more care type</span>
              </div>
              <div className="flex flex-col max-h-[180px] overflow-y-auto">
                {['Companion Care', 'Transportation', 'Errand Support', 'Meal Preparation', 'Overnight Care'].map((type) => {
                  const isChecked = careTypes.includes(type);
                  return (
                    <div key={type} onClick={() => toggleCareType(type)} className="flex items-center gap-4 px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer">
                       <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center border transition-colors ${isChecked ? 'bg-[#112330] border-[#112330]' : 'bg-white border-gray-300'}`}>
                         {isChecked && <CheckIcon className="w-3.5 h-3.5 text-white" />}
                       </div>
                       <span className={`text-[14px] ${isChecked ? 'text-gray-500' : 'text-gray-700 font-medium'}`}>
                         {type}
                       </span>
                    </div>
                  );
                })}
              </div>
              <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
                <button onClick={() => setCareTypes([])} className="flex items-center gap-1.5 text-[#D96C3B] text-[13px] font-semibold hover:opacity-80 transition-opacity">
                  <XIcon className="w-4 h-4" strokeWidth="2.5" /> Clear selection
                </button>
                <button 
                  className="bg-[#112330] text-white px-7 py-2 rounded-md text-[14px] font-medium hover:bg-opacity-90 transition-colors"
                  onClick={() => setCareTypesOpen(false)}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1.5 relative">
          <label className="text-[13px] font-semibold text-[#112330]">Languages</label>
          <div 
            className="flex items-center justify-between w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-md text-[14px] cursor-pointer hover:border-gray-300 transition-colors"
            onClick={() => setLanguagesOpen(!languagesOpen)}
          >
            <div className="flex items-center gap-2 text-[#112330]">
              <SearchIcon className="w-4 h-4 text-gray-500" />
              <span className="font-medium">E</span>
            </div>
            <ChevronDownIcon className={`w-4 h-4 text-gray-400 transition-transform ${languagesOpen ? 'rotate-180' : ''}`} />
          </div>
          
          {languagesOpen && (
            <div className="mt-1 bg-white border border-[#E2E8F0] rounded-lg shadow-sm z-20 flex flex-col overflow-hidden">
              <div className="px-5 py-3.5 border-b border-gray-100">
                <span className="font-bold text-[#112330] text-[14px]">Select one or more languages</span>
              </div>
              <div className="flex flex-col max-h-[180px] overflow-y-auto">
                {['English', 'Arabic', 'Hindi', 'Urdu', 'Dutch'].map((lang) => {
                  const isChecked = languages.includes(lang);
                  return (
                    <div key={lang} onClick={() => toggleLanguage(lang)} className="flex items-center gap-4 px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer">
                       <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center border transition-colors ${isChecked ? 'bg-[#112330] border-[#112330]' : 'bg-white border-gray-300'}`}>
                         {isChecked && <CheckIcon className="w-3.5 h-3.5 text-white" />}
                       </div>
                       <span className={`text-[14px] ${isChecked ? 'text-gray-500' : 'text-gray-700 font-medium'}`}>
                         {lang}
                       </span>
                    </div>
                  );
                })}
              </div>
              <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
                <button onClick={() => setLanguages([])} className="flex items-center gap-1.5 text-[#D96C3B] text-[13px] font-semibold hover:opacity-80 transition-opacity">
                  <XIcon className="w-4 h-4" strokeWidth="2.5" /> Clear selection
                </button>
                <button 
                  className="bg-[#112330] text-white px-7 py-2 rounded-md text-[14px] font-medium hover:bg-opacity-90 transition-colors"
                  onClick={() => setLanguagesOpen(false)}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Select Your Availability Grid (Commented out) */}
      {/* 
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-bold text-[#112330]">Select Your Availability</h2>
          {isAvailabilityEditing ? (
            <button className="px-6 py-2 bg-[#112330] text-white rounded-md text-[14px] font-semibold shadow-sm" onClick={() => setIsAvailabilityEditing(false)}>Save</button>
          ) : (
            <button className="px-6 py-2 bg-[#112330] text-white rounded-md text-[14px] font-semibold shadow-sm" onClick={() => setIsAvailabilityEditing(true)}>Edit</button>
          )}
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-6 gap-3 mb-3">
              <div className="h-[46px] bg-[#D96C3B] text-white rounded-xl flex items-center justify-center font-bold text-[15px]">July</div>
              <div className="h-[46px] bg-[#E8F0F8] text-[#112330] rounded-xl flex items-center justify-center font-bold text-[15px]">Monday</div>
              <div className="h-[46px] bg-[#E8F0F8] text-[#112330] rounded-xl flex items-center justify-center font-bold text-[15px]">Tuesday</div>
              <div className="h-[46px] bg-[#E8F0F8] text-[#112330] rounded-xl flex items-center justify-center font-bold text-[15px]">Wednesday</div>
              <div className="h-[46px] bg-[#E8F0F8] text-[#112330] rounded-xl flex items-center justify-center font-bold text-[15px]">Thursday</div>
              <div className="h-[46px] bg-[#E8F0F8] text-[#112330] rounded-xl flex items-center justify-center font-bold text-[15px]">Friday</div>
            </div>

            {[
              { label: '1st Week', dates: '1/6/25 - 5/6/25', data: ['Mr. Jhon', null, null, 'Mr. Jhon', null] },
              { label: '2nd Week', dates: '8/6/25 - 12/6/25', data: [null, 'Ms. Ashly', null, null, 'Ms. Ashly'] },
              { label: '3rd Week', dates: '15/6/25 - 19/6/25', data: ['Mr. Jhon', null, 'Mr. William', null, null] },
              { label: '4th Week', dates: '22/6/25 - 26/6/25', data: [null, null, null, 'Mr. William', null] }
            ].map((row, rIdx) => (
              <div key={row.label} className="grid grid-cols-6 gap-3 mb-3 last:mb-0">
                <div className="h-[76px] bg-[#E8F0F8] text-[#112330] rounded-xl flex flex-col items-center justify-center font-bold text-[15px]">
                  {row.label}
                  <span className="text-[11px] font-medium text-gray-500 mt-0.5">{row.dates}</span>
                </div>
                
                {row.data.map((cell, cIdx) => (
                  <div key={`${rIdx}-${cIdx}`} className="h-[76px]">
                    {cell ? (
                      <div className="w-full h-full bg-[#112330] rounded-xl p-3 flex flex-col justify-between cursor-pointer hover:bg-opacity-95 transition-colors">
                        <span className="text-[13px] font-bold text-white">{cell}</span>
                        <div className="flex flex-col">
                          <span className="text-[8px] text-gray-300">Companion Care</span>
                          <span className="text-[8px] text-gray-300">Response time: {cell.includes('Ashly') ? '40 min' : (cell.includes('William') ? '30 min' : '1 hr')}</span>
                        </div>
                      </div>
                    ) : (
                      <div 
                        onClick={() => { if (isAvailabilityEditing) setShowAddUserModal(true); }}
                        className={`w-full h-full border border-[#E2E8F0] rounded-xl flex items-center justify-center transition-colors ${isAvailabilityEditing ? 'cursor-pointer hover:bg-gray-50' : 'bg-[#FDFDFD]'}`}
                      >
                        {isAvailabilityEditing && <span className="text-[28px] text-[#64748B] font-light leading-none">+</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#112330]/40 backdrop-blur-[2px]" onClick={() => setShowAddUserModal(false)}></div>
          
          <div className="bg-white rounded-3xl p-8 w-full max-w-[420px] relative z-10 shadow-2xl">
            <h2 className="text-[24px] font-bold text-[#112330] mb-6 tracking-tight">Add Your Availability</h2>
            
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#112330]">Name</label>
                <input type="text" placeholder="Please enter name here" className="w-full h-[44px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] placeholder:text-gray-400 focus:outline-none focus:border-blue-400 text-[14px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#112330]">Care Type</label>
                <input type="text" placeholder="Please enter the care type you're providing" className="w-full h-[44px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] placeholder:text-gray-400 focus:outline-none focus:border-blue-400 text-[14px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#112330]">Response Time</label>
                <input type="text" placeholder="Please enter your response time here" className="w-full h-[44px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] placeholder:text-gray-400 focus:outline-none focus:border-blue-400 text-[14px]" />
              </div>
              
              <div className="flex flex-col gap-2.5 mt-4">
                <button type="button" onClick={() => setShowAddUserModal(false)} className="w-full h-[46px] bg-[#112330] text-white rounded-xl text-[15px] font-semibold hover:bg-opacity-90 transition-all shadow-sm">
                  Add User
                </button>
                <button type="button" onClick={() => setShowAddUserModal(false)} className="w-full h-[46px] bg-white text-[#112330] border border-[#E2E8F0] rounded-xl text-[15px] font-semibold hover:bg-gray-50 transition-all shadow-sm">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      */}

      {/* Agency Offerings Section */}
      <div className="w-full mt-12 bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm">
        <h2 className="text-[22px] font-bold text-[#112330] mb-6">Agency Offerings</h2>
        
        {isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meal Service */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#112330]">Meal Service</label>
              <div className="relative">
                <select 
                  value={offerings.mealService} 
                  onChange={e => setOfferings({...offerings, mealService: e.target.value})}
                  className="w-full h-[46px] px-4 pr-10 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] focus:outline-none focus:border-blue-400 text-[14px] appearance-none cursor-pointer"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#112330]">Transportation</label>
              <div className="relative">
                <select 
                  value={offerings.transportation} 
                  onChange={e => setOfferings({...offerings, transportation: e.target.value})}
                  className="w-full h-[46px] px-4 pr-10 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] focus:outline-none focus:border-blue-400 text-[14px] appearance-none cursor-pointer"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Government Programs Accepted */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#112330]">Government Programs Accepted</label>
              <div className="relative">
                <select 
                  value={offerings.govPrograms} 
                  onChange={e => setOfferings({...offerings, govPrograms: e.target.value})}
                  className="w-full h-[46px] px-4 pr-10 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] focus:outline-none focus:border-blue-400 text-[14px] appearance-none cursor-pointer"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Other Services */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#112330]">Other Services</label>
              <input 
                type="text" 
                value={offerings.otherServices}
                onChange={e => setOfferings({...offerings, otherServices: e.target.value})}
                placeholder="e.g. Dementia care, companion walking"
                className="w-full h-[46px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#112330] focus:outline-none focus:border-blue-400 text-[14px]"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Meal Service Card */}
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#E2E8F0] p-6 flex flex-col justify-between shadow-sm animate-in fade-in duration-200">
              <span className="text-sm font-semibold text-gray-500">Meal Service</span>
              <span className="text-lg font-bold text-[#112330] mt-2">{offerings.mealService}</span>
            </div>
            {/* Transportation Card */}
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#E2E8F0] p-6 flex flex-col justify-between shadow-sm animate-in fade-in duration-200">
              <span className="text-sm font-semibold text-gray-500">Transportation</span>
              <span className="text-lg font-bold text-[#112330] mt-2">{offerings.transportation}</span>
            </div>
            {/* Gov Programs Card */}
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#E2E8F0] p-6 flex flex-col justify-between shadow-sm animate-in fade-in duration-200">
              <span className="text-sm font-semibold text-gray-500">Gov Programs Accepted</span>
              <span className="text-lg font-bold text-[#112330] mt-2">{offerings.govPrograms}</span>
            </div>
            {/* Other Services Card */}
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#E2E8F0] p-6 flex flex-col justify-between shadow-sm animate-in fade-in duration-200">
              <span className="text-sm font-semibold text-gray-500">Other Services</span>
              <span className="text-[15px] font-bold text-[#112330] mt-2 truncate" title={offerings.otherServices || 'None'}>
                {offerings.otherServices || 'None Specified'}
              </span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
