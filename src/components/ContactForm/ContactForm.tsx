'use client';

import React, { useState } from 'react';
import Button from '@/components/Button/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    queryType: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
  };

  const inputClasses = "font-sans text-sm text-txt-primary bg-white border border-[#E2E8F0] rounded-lg px-4 py-[10px] transition-all duration-150 outline-none w-full focus:border-primary focus:shadow-[0_0_0_3px_rgba(15,42,56,0.08)] placeholder:text-txt-light";
  const selectChevron = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%236B7B88' d='M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z'/%3E%3C/svg%3E";

  return (
    <form className="p-6 md:p-8 flex flex-col gap-4 md:gap-2 bg-white" onSubmit={handleSubmit} id="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-5 md:gap-x-6">
        {/* First Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-firstName" className="font-sans text-sm font-medium text-txt-primary leading-normal mb-[2px]">
            First Name
          </label>
          <input
            type="text"
            id="contact-firstName"
            name="firstName"
            className={inputClasses}
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-lastName" className="font-sans text-sm font-medium text-txt-primary leading-normal mb-[2px]">
            Last Name
          </label>
          <input
            type="text"
            id="contact-lastName"
            name="lastName"
            className={inputClasses}
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-email" className="font-sans text-sm font-medium text-txt-primary leading-normal mb-[2px]">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            className={inputClasses}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-phone" className="font-sans text-sm font-medium text-txt-primary leading-normal mb-[2px]">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            className={inputClasses}
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Zip Code */}
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-zipCode" className="font-sans text-sm font-medium text-txt-primary leading-normal mb-[2px]">
            Zip Code
          </label>
          <input
            type="text"
            id="contact-zipCode"
            name="zipCode"
            className={inputClasses}
            placeholder="Enter your zip code"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>

        {/* Query Type */}
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-queryType" className="font-sans text-sm font-medium text-txt-primary leading-normal mb-[2px]">
            Query Type
          </label>
          <select
            id="contact-queryType"
            name="queryType"
            className={`${inputClasses} appearance-none bg-no-repeat bg-[right_16px_center] pr-10 cursor-pointer ${!formData.queryType ? 'text-txt-light' : ''}`}
            style={{ backgroundImage: `url("${selectChevron}")` }}
            value={formData.queryType}
            onChange={handleChange}
            required
          >
            <option value="" disabled className="text-txt-light">
              Select your query type
            </option>
            <option value="general">General Inquiry</option>
            <option value="appointment">Appointment</option>
            <option value="billing">Billing</option>
            <option value="support">Technical Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label htmlFor="contact-message" className="font-sans text-sm font-medium text-txt-primary leading-normal mb-[2px]">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            className={`${inputClasses} min-h-[130px] resize-y leading-relaxed`}
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex justify-stretch md:justify-end pt-4 [&>button]:w-full md:[&>button]:w-auto">
        <Button type="submit" variant="primary" id="contact-submit-btn">
          Send Message
        </Button>
      </div>
    </form>
  );
}
