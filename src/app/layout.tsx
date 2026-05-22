import type { Metadata } from 'next';
import { nunito, playfair } from './fonts';
import '@/styles/globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Kinora | Right Care, Right at Home',
    template: '%s | Kinora',
  },
  description:
    'Kinora delivers modern telehealth solutions designed to simplify access to medical care. Connect with trusted healthcare providers through a secure platform.',
  keywords: ['telehealth', 'healthcare', 'home care', 'medical', 'Kinora'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
