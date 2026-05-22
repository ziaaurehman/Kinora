import React from 'react';

interface SectionHeaderProps {
  label?: React.ReactNode;
  heading: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ label, heading, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {label && <span className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-4 py-1 rounded-full mb-4">{label}</span>}
      <h2 className="mb-4">{heading}</h2>
      {description && <p className="max-w-[600px] mx-auto text-base text-txt-muted leading-relaxed">{description}</p>}
    </div>
  );
}
