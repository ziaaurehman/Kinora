'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Accordion from '@/components/Accordion/Accordion';

const faqData = {
  General: [
    {
      question: 'How do I find the right home care service provider?',
      answer: 'Kinora simplifies this process by matching you with certified healthcare agencies based on your specific needs, location, and preferences. Simply submit your care requirements, and our intelligent matching system will connect you with the most suitable providers in your area.',
    },
    {
      question: 'What makes Kinora different from other home care platforms?',
      answer: 'Kinora stands out with our AI-powered matching algorithm, verified agency network, 24/7 support, and commitment to patient satisfaction. We vet every agency in our network to ensure they meet our high standards of care quality.',
    },
    {
      question: "How do I get started with Kinora's services?",
      answer: "Getting started is simple. Create an account, fill out a brief care needs assessment, and we'll match you with certified agencies in your area. You can compare options, read reviews, and choose the best fit — all from our easy-to-use platform.",
    },
  ],
  Inquiry: [
    {
      question: 'What is the process for submitting a care query?',
      answer: 'You can submit a care query by clicking on "Find Care" or visiting our contact page. We will ask you a few brief questions about your loved one\'s health condition, scheduling preferences, and location to find the perfect matched caregivers.',
    },
    {
      question: 'How long does it take to get matched with an agency?',
      answer: 'In most cases, our matching algorithm identifies compatible agencies immediately. The selected care agencies will typically review your query and contact you within 24 to 48 hours to discuss details and start care.',
    },
    {
      question: 'Can I consult with multiple agencies before making a decision?',
      answer: 'Absolutely. Kinora encourages families to explore their matches. You can review profiles, read client testimonials, and communicate with representatives from multiple matching agencies to choose the one you feel most comfortable with.',
    },
  ],
  Agency: [
    {
      question: 'What types of home care services are available through your network?',
      answer: 'Our agency network offers a wide range of services including personal care (assistance with daily activities), skilled nursing, physical and occupational therapy, speech therapy, medical social services, and specialized dementia or post-surgery care.',
    },
    {
      question: 'How are care agencies vetted and certified on Kinora?',
      answer: 'We enforce a rigorous verification process. Every agency in our network must present up-to-date state licensing, comprehensive liability insurance, and proof of background checks and ongoing training for all their caregivers.',
    },
    {
      question: 'How much do home care services cost and is insurance accepted?',
      answer: 'Costs vary depending on the level and frequency of care. Many of our partner agencies accept Medicare, Medicaid, long-term care insurance, or private health insurance plans. We help coordinate with agencies to clarify billing options upfront.',
    },
  ],
};

type FaqCategory = 'General' | 'Inquiry' | 'Agency';

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<FaqCategory>('General');

  const tabs: FaqCategory[] = ['General', 'Inquiry', 'Agency'];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-bg-white" id="faq">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <SectionHeader
          label="QUICK ANSWERS"
          heading="Frequently Asked Questions"
          description="Find quick answers to common questions about how Kinora works, our services, and what to expect from your care experience."
        />
        <div className="bg-bg-white border border-[#EAEAEA] rounded-xl md:rounded-2xl p-6 px-4 md:p-8 md:px-6 lg:p-12 lg:px-10 shadow-[0_12px_40px_rgba(15,42,56,0.03)] mt-6 md:mt-10">
          <div className="flex md:inline-flex w-full md:w-auto overflow-x-auto md:overflow-visible border border-[#EAEAEA] rounded-lg p-[5px] bg-bg-white mb-8 gap-1 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 md:px-6 shrink-0 rounded-md font-sans text-sm font-semibold border-none cursor-pointer transition-all duration-250 ${
                  activeTab === tab
                    ? 'bg-accent text-white shadow-[0_2px_8px_rgba(217,108,59,0.25)] hover:text-white'
                    : 'bg-transparent text-txt-secondary hover:text-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Key prop ensures the Accordion state resets when changing tabs */}
          <Accordion key={activeTab} items={faqData[activeTab]} id="faq-accordion" />
        </div>
      </div>
    </section>
  );
}
