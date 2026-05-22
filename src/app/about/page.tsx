import type { Metadata } from 'next';
import Button from '@/components/Button/Button';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import CTABanner from '@/components/CTABanner/CTABanner';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="py-16 pb-20 max-md:py-10 max-md:pb-12 bg-bg-white" id="about-hero">
        <div className="max-w-container w-full mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 flex justify-between items-center gap-8 lg:gap-12 max-md:flex-col max-md:text-center">
          <div className="flex-1 max-w-[600px] max-md:max-w-full">
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-txt-primary m-0 mb-6 max-lg:text-4xl max-md:text-3xl">
              <span className="text-accent block mb-2">Healthcare</span>
              <span className="block text-txt-primary">Reimagined for You</span>
            </h1>
            <p className="font-sans text-base leading-relaxed text-txt-secondary m-0 mb-8 max-w-[520px] max-md:max-w-full">
              Kinora bridges the gap between patients and certified healthcare
              professionals through secure, intuitive telehealth
              solutions—delivering reliable care whenever and wherever it's
              needed.
            </p>
            <div className="flex gap-4 flex-wrap max-md:justify-center">
              <Button variant="dark" size="lg" href="/contact" id="about-hero-submit-query">
                Submit Query
              </Button>
              <Button variant="outline" size="lg" href="/agencies" id="about-hero-explore-agencies">
                Explore Agencies
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-end max-w-[580px] max-lg:max-w-[440px] max-md:w-full max-md:max-w-[480px] max-md:justify-center">
            <img
              src="/about.svg"
              alt="Elderly couple smiling and looking at a smartphone"
              className="w-full max-w-[560px] h-auto rounded-2xl block object-cover shadow-[0_12px_40px_rgba(15,42,56,0.04)]"
            />
          </div>
        </div>
      </section>

      {/* ===== Mission & Vision Section ===== */}
      <section className="py-20 max-md:py-12 bg-bg-white" id="about-mission">
        <div className="max-w-container w-full mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 flex justify-between items-center gap-8 lg:gap-16 max-md:flex-col max-md:text-center">
          <div className="flex-1 max-w-[480px] max-md:max-w-full">
            <h2 className="font-serif text-4xl font-bold text-txt-primary m-0 mb-6 leading-tight">Our Mission & Vision</h2>
            <p className="font-sans text-base leading-relaxed text-txt-secondary m-0 mb-4 last:mb-0">
              Kinora was founded on a simple belief: access to quality healthcare
              should never be limited by location, time, or circumstance. Millions of
              individuals still face delays, long wait times, and limited provider
              availability—barriers that prevent timely care when it matters most.
            </p>
            <p className="font-sans text-base leading-relaxed text-txt-secondary m-0 mb-4 last:mb-0">
              Our mission is to remove those barriers by building a digital-first
              healthcare experience that prioritizes accessibility, trust, and efficiency.
              We aim to empower patients with seamless access to qualified professionals
              while enabling providers to deliver care without constraints.
            </p>
          </div>
          <div className="w-[423px] h-[313px] relative shrink-0 ml-auto mr-0 max-lg:scale-[0.85] max-lg:origin-right max-md:flex max-md:flex-col max-md:items-center max-md:gap-4 max-md:w-full max-md:h-auto max-md:mt-4 max-md:transform-none">
            {/* Card 1: Patient Satisfaction */}
            <div className="absolute left-[18px] top-0 z-[1] max-md:order-1 max-md:static w-[217px] max-md:w-full max-md:max-w-[280px] h-[132px] max-md:h-auto max-md:min-h-[120px] rounded-2xl py-5 px-6 flex flex-col items-start justify-between box-border shadow-[0_12px_32px_rgba(15,42,56,0.06)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(15,42,56,0.12)] bg-bg-white border border-border-light">
              <div className="flex items-center justify-center">
                <img
                  src="/patient-satisfaction.png"
                  alt="Patient Satisfaction icon"
                  width={52}
                  height={40}
                  className="block object-contain"
                />
              </div>
              <div className="font-sans text-lg font-bold text-txt-primary leading-snug">Patient Satisfaction</div>
            </div>

            {/* Card 2: 24/7 Care Access */}
            <div className="absolute left-[206px] top-[90px] z-[2] max-md:order-2 max-md:static w-[217px] max-md:w-full max-md:max-w-[280px] h-[132px] max-md:h-auto max-md:min-h-[120px] rounded-2xl py-5 px-6 flex flex-col items-start justify-between box-border shadow-[0_12px_32px_rgba(15,42,56,0.06)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(15,42,56,0.12)] bg-primary border border-primary">
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 48 48" width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#FFFFFF" />
                  <path d="M24 12v12h10" stroke="#0F2A38" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col justify-end">
                <div className="font-sans text-3xl font-bold leading-none mb-1 text-white">24/7</div>
                <div className="font-sans text-sm font-semibold leading-snug text-white/85">Care Access</div>
              </div>
            </div>

            {/* Card 3: 60+ Medical Specialties */}
            <div className="absolute left-0 top-[181px] z-[3] max-md:order-3 max-md:static w-[217px] max-md:w-full max-md:max-w-[280px] h-[132px] max-md:h-auto max-md:min-h-[120px] rounded-2xl py-5 px-6 flex flex-col items-start justify-between box-border shadow-[0_12px_32px_rgba(15,42,56,0.06)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(15,42,56,0.12)] bg-bg-white border border-border-light">
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="7" height="7" rx="2" fill="#0F2A38" />
                  <rect x="13" y="4" width="7" height="7" rx="2" fill="#0F2A38" />
                  <rect x="4" y="13" width="7" height="7" rx="2" fill="#0F2A38" />
                  <rect x="13" y="13" width="7" height="7" rx="2" fill="#0F2A38" />
                </svg>
              </div>
              <div className="flex flex-col justify-end">
                <div className="font-sans text-3xl font-bold leading-none mb-1 text-txt-primary">60+</div>
                <div className="font-sans text-sm font-semibold leading-snug text-txt-secondary">Medical Specialties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What Drives Us Section ===== */}
      <section className="py-20 max-md:py-12 bg-bg-section" id="about-values">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <SectionHeader
            heading="What Drives Us"
            description="Every feature we build and every interaction we design is guided by a commitment to delivering better, more human-centered healthcare experiences."
            className="text-center mb-14 max-w-[620px] mx-auto"
          />
          <div className="grid grid-cols-4 gap-5 items-stretch max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4">
            {/* Value 1: Accessible Healthcare */}
            <article className="bg-white border border-border rounded-2xl p-8 flex flex-col transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,42,56,0.08)] max-md:p-6">
              <div className="w-12 h-12 rounded-lg border border-border bg-white flex items-center justify-center mb-6 text-txt-primary shrink-0 [&>svg]:w-6 [&>svg]:h-6">
                <img src="/icon-accessible.png" alt="" width={26} height={26} className="block object-contain" />
              </div>
              <h3 className="font-sans text-xl font-bold text-txt-primary m-0 mb-4 leading-snug">Accessible Healthcare</h3>
              <p className="font-sans text-sm leading-relaxed text-txt-secondary m-0 text-justify">
                We make healthcare available beyond physical boundaries, ensuring patients
                can connect with the right professionals without unnecessary delays or limitations.
              </p>
            </article>

            {/* Value 2: Clinical Integrity */}
            <article className="bg-white border border-border rounded-2xl p-8 flex flex-col transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,42,56,0.08)] max-md:p-6">
              <div className="w-12 h-12 rounded-lg border border-border bg-white flex items-center justify-center mb-6 text-txt-primary shrink-0 [&>svg]:w-6 [&>svg]:h-6">
                <img src="/icon-clinical.png" alt="" width={26} height={26} className="block object-contain" />
              </div>
              <h3 className="font-sans text-xl font-bold text-txt-primary m-0 mb-4 leading-snug">Clinical Integrity</h3>
              <p className="font-sans text-sm leading-relaxed text-txt-secondary m-0 text-justify">
                We work with verified, experienced professionals and maintain strict standards
                to ensure every consultation meets high-quality medical expectations.
              </p>
            </article>

            {/* Value 3: Patient-First Approach */}
            <article className="bg-white border border-border rounded-2xl p-8 flex flex-col transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,42,56,0.08)] max-md:p-6">
              <div className="w-12 h-12 rounded-lg border border-border bg-white flex items-center justify-center mb-6 text-txt-primary shrink-0 [&>svg]:w-6 [&>svg]:h-6">
                <img src="/icon-patient.png" alt="" width={26} height={26} className="block object-contain" />
              </div>
              <h3 className="font-sans text-xl font-bold text-txt-primary m-0 mb-4 leading-snug">Patient-First Approach</h3>
              <p className="font-sans text-sm leading-relaxed text-txt-secondary m-0 text-justify">
                Every experience is designed around patient comfort, clarity, and
                convenience—because better care starts with better understanding.
              </p>
            </article>

            {/* Value 4: Secure & Private */}
            <article className="bg-white border border-border rounded-2xl p-8 flex flex-col transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,42,56,0.08)] max-md:p-6">
              <div className="w-12 h-12 rounded-lg border border-border bg-white flex items-center justify-center mb-6 text-txt-primary shrink-0 [&>svg]:w-6 [&>svg]:h-6">
                <img src="/icon-secure.png" alt="" width={24} height={26} className="block object-contain" />
              </div>
              <h3 className="font-sans text-xl font-bold text-txt-primary m-0 mb-4 leading-snug">Secure & Private</h3>
              <p className="font-sans text-sm leading-relaxed text-txt-secondary m-0 text-justify">
                Your data is handled with advanced security protocols and strict privacy
                measures, ensuring confidentiality at every step of your healthcare journey.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CTA Banner Section ===== */}
      <section className="py-20 max-md:py-12 bg-bg-white" id="about-cta">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <CTABanner
            heading="Begin Your Care Journey With Kinora"
            description="Join a growing community of patients choosing smarter, faster, and more accessible healthcare."
            primaryButtonText="Find Care"
            primaryButtonHref="/contact"
            primaryButtonVariant="white"
            secondaryButtonText="Explore Agencies"
            secondaryButtonHref="/agencies"
            secondaryButtonVariant="outlineLight"
            id="about-cta-banner"
          />
        </div>
      </section>
    </>
  );
}
