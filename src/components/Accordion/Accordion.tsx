'use client';

import React, { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  id?: string;
}

export default function Accordion({ items, id }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-3" id={id}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-white border rounded-xl overflow-hidden transition-all duration-250 ${
              isOpen ? 'shadow-[0_8px_30px_rgba(15,42,56,0.04)] border-[#EAEAEA]' : 'border-[#EAEAEA] hover:border-[#D2D2D2]'
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 p-4 md:p-6 bg-transparent border-none cursor-pointer text-left"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              id={`accordion-trigger-${index}`}
            >
              <span className="font-sans text-sm md:text-lg font-bold text-txt-primary leading-snug">{item.question}</span>
              <span className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-250 ${isOpen ? 'bg-accent text-white' : 'bg-[#EEF2F6] text-[#718096]'}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-250 ${isOpen ? 'rotate-90' : ''}`}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
              <div className="px-4 pb-4 md:px-6 md:pb-5">
                <p className="text-sm text-txt-muted leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
