import type { Metadata } from 'next';
import ContactInfo from '@/components/ContactInfo/ContactInfo';
import ContactForm from '@/components/ContactForm/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kinora. Send us a message, call us, or visit our office. We are here to help with all your healthcare needs.',
};

export default function ContactPage() {
  return (
    <div className="bg-bg-section py-16 pb-20 max-md:py-10 max-md:pb-14">
      {/* Page Header */}
      <section className="text-center pb-10 px-4 sm:px-6">
        <h1 className="font-serif text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-txt-primary leading-tight mb-3">Contact Us</h1>
        <p className="font-sans text-base max-md:text-sm text-txt-secondary leading-normal m-0">
          Any question or remarks? Just write us a message!
        </p>
      </section>

      <section className="w-full max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-[400px_1fr] max-lg:grid-cols-[280px_1fr] max-md:grid-cols-1 bg-white rounded-[20px] max-md:rounded-2xl shadow-[0_4px_32px_rgba(15,42,56,0.10)] overflow-hidden">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
