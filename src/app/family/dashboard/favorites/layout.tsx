import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Favorited Agencies',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
