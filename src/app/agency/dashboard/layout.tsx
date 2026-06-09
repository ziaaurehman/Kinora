import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Agency Dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#F8F9FA]">
      {children}
    </div>
  );
}
