import React, { Fragment } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import CTABanner from '@/components/CTABanner/CTABanner';
import FaqSection from '@/components/FaqSection/FaqSection';

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    className={filled ? 'text-accent' : 'text-[#D1D5DB]'}
    fill="currentColor"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const agencies = [
  { name: 'MEDPULSE', logo: '/logo-medpulse.png', subtext: 'Access professional advice anytime, from anywhere.', rating: 4.5 },
  { name: 'Travel Touch', logo: '/logo-traveltouch.png', subtext: 'Access professional advice anytime, from anywhere.', rating: 4.5 },
  { name: 'Meals', logo: '/logo-meals.png', subtext: 'Access professional advice anytime, from anywhere.', rating: 4.5 },
  { name: 'MEDPULSE', logo: '/logo-medpulse.png', subtext: 'Access professional advice anytime, from anywhere.', rating: 4.5 },
  { name: 'Travel Touch', logo: '/logo-traveltouch.png', subtext: 'Access professional advice anytime, from anywhere.', rating: 4.5 },
  { name: 'Meals', logo: '/logo-meals.png', subtext: 'Access professional advice anytime, from anywhere.', rating: 4.5 },
];

const steps = [
  {
    title: 'Share Your Needs',
    desc: 'Tell us about the type of care you or your loved one needs.',
    iconPath: '/how-it-works/icon-needs.png',
    width: 47,
    height: 48,
  },
  {
    title: 'Get Matched',
    desc: 'Our system matches you with certified agencies in your area.',
    iconPath: '/how-it-works/icon-matched.png',
    width: 42,
    height: 39,
  },
  {
    title: 'Choose Your Caregiver',
    desc: 'Compare care providers and select the best match for your family.',
    iconPath: '/how-it-works/icon-caregiver.png',
    width: 37,
    height: 18,
  },
  {
    title: 'Start Care',
    desc: 'Begin receiving professional healthcare and support services at home.',
    iconPath: '/how-it-works/icon-start.png',
    width: 42,
    height: 42,
  },
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    text: 'Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
    rating: 4.5,
    avatar: '/avatar-trevor.png',
  },
  {
    name: 'James Pattinson',
    text: 'Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
    rating: 4.5,
    avatar: '/avatar-james.png',
  },
  {
    name: 'Greg Stuart',
    text: 'Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
    rating: 4.5,
    avatar: '/avatar-greg.png',
  },
  {
    name: 'Trevor Mitchell',
    text: 'Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
    rating: 4.5,
    avatar: '/avatar-trevor.png',
  },
  {
    name: 'Sandra Bullock',
    text: 'Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
    rating: 4.5,
    avatar: '/avatar-james.png',
  },
];

export default function Home() {
  return (
    <div className="bg-bg-white">
      {/* ======== HERO ======== */}
      <section className="relative bg-bg-white text-txt-primary overflow-hidden flex items-start justify-center w-full aspect-[1024/520] max-md:min-h-[420px] max-md:aspect-auto" id="hero">
        <div className="absolute inset-0 overflow-hidden z-[1] max-md:transform-none max-md:w-full max-md:max-w-full max-md:h-full max-md:aspect-auto max-md:opacity-20">
          <img src="/hero.svg" alt="Elderly couple smiling" className="w-full h-full object-cover object-center block" />
          <div className="hidden max-md:block max-md:bg-gradient-to-b max-md:from-[rgba(255,248,242,0.3)] max-md:to-bg-white absolute inset-0" />
        </div>
        <div className="relative z-[2] max-w-container mx-auto pt-[22.5%] px-4 sm:px-6 w-full flex justify-center max-lg:pt-[25%] max-md:pt-[80px] max-md:pb-[40px]">
          <div className="max-w-[900px] text-center flex flex-col items-center max-lg:max-w-[90%] max-md:max-w-full">
            <h1 className="font-sans font-bold mb-6 flex flex-col items-center gap-2">
              <span className="block text-[56px] leading-[1.1] tracking-[0.03em] text-txt-primary max-lg:text-[44px] max-md:text-[32px]">Right Care, Right at Home</span>
              <span className="flex items-center justify-center flex-wrap gap-3 mt-[-10px]">
                <span className="text-[56px] leading-[1.1] tracking-normal text-txt-primary max-lg:text-[44px] max-md:text-[32px]">Matched for you</span>{' '}
                <span className="text-[56px] leading-[1.1] tracking-normal text-accent font-sans font-bold max-lg:text-[50px] max-md:text-[36px]">By Kinora</span>
              </span>
            </h1>

            <p className="text-base text-white mb-10 max-w-[800px] leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] max-md:text-sm">
              Kinora helps families connect with trusted caregivers for personalized home support—ensuring comfort, dignity,<br />
              and peace of mind. Kinora helps families connect with trusted caregivers for.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="dark" size="lg" href="/contact" id="hero-cta-query">
                Find Care
              </Button>
              <Button variant="solidWhite" size="lg" href="/agencies" id="hero-cta-agencies">
                Explore Agencies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ======== STATS BAR ======== */}
      <section className="relative z-10 mt-0 py-20 bg-gradient-to-b from-bg-section from-[50%] to-bg-white to-[50%] max-lg:py-16 max-md:py-8" id="stats">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="bg-primary rounded-2xl p-8 px-4 grid grid-cols-4 gap-4 shadow-xl max-md:grid-cols-2 max-md:gap-y-6 max-md:gap-x-2 max-md:py-8 max-md:px-2">
            <div className="text-center text-white py-2 px-4 flex flex-col items-center justify-center relative after:content-[''] after:absolute after:right-0 after:top-[15%] after:h-[70%] after:w-[1px] after:bg-white/15 max-md:after:hidden max-md:border-r max-md:border-white/15">
              <div className="font-sans text-[36px] font-bold text-white mb-2 inline-flex items-center justify-center gap-2 leading-[1.2] max-md:text-[28px]">24/7</div>
              <div className="font-sans text-base font-normal text-white/85 leading-[1.4] max-md:text-sm">Support Access</div>
            </div>
            <div className="text-center text-white py-2 px-4 flex flex-col items-center justify-center relative after:content-[''] after:absolute after:right-0 after:top-[15%] after:h-[70%] after:w-[1px] after:bg-white/15 max-md:after:hidden">
              <div className="font-sans text-[36px] font-bold text-white mb-2 inline-flex items-center justify-center gap-2 leading-[1.2] max-md:text-[28px]">
                4.9 <span className="text-white text-[28px] align-middle">★</span>
              </div>
              <div className="font-sans text-base font-normal text-white/85 leading-[1.4] max-md:text-sm">Average Rating</div>
            </div>
            <div className="text-center text-white py-2 px-4 flex flex-col items-center justify-center relative after:content-[''] after:absolute after:right-0 after:top-[15%] after:h-[70%] after:w-[1px] after:bg-white/15 max-md:after:hidden max-md:border-r max-md:border-white/15">
              <div className="font-sans text-[36px] font-bold text-white mb-2 inline-flex items-center justify-center gap-2 leading-[1.2] max-md:text-[28px]">340+</div>
              <div className="font-sans text-base font-normal text-white/85 leading-[1.4] max-md:text-sm">Care Providers</div>
            </div>
            <div className="text-center text-white py-2 px-4 flex flex-col items-center justify-center relative max-md:after:hidden">
              <div className="font-sans text-[36px] font-bold text-white mb-2 inline-flex items-center justify-center gap-2 leading-[1.2] max-md:text-[28px]">98K+</div>
              <div className="font-sans text-base font-normal text-white/85 leading-[1.4] max-md:text-sm">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FEATURES ======== */}
      <section className="py-20 bg-bg-white" id="features">
        <SectionHeader
          label="Modern Care Solutions"
          heading="Smarter Healthcare, Powered by Intelligence"
          description="Our intelligent system simplifies how you find and access care—analyzing your needs and connecting you with the most suitable providers instantly."
        />
        <div className="max-w-container mx-auto px-4 sm:px-6 grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4">
          {/* Card 1: Accurate Matching */}
          <div className="text-center p-0">
            <div className="inline-flex items-center justify-center mb-5">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="#FFF0E6" />
                <circle cx="40" cy="40" r="18" fill="#D96C3B" />
                <path d="M35 40L38 43L45 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="font-sans text-xl font-bold text-txt-primary mb-3 tracking-tight">Accurate Matching</div>
            <div className="text-sm text-txt-secondary leading-normal max-w-[260px] mx-auto">Get connected with care providers that truly fit your needs.</div>
          </div>

          {/* Card 2: Smart Case Navigation */}
          <div className="text-center p-0">
            <div className="inline-flex items-center justify-center mb-5">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="#FFF0E6" />
                <path d="M34 25.5L46 25.5L52.5 30H27.5L34 25.5Z" fill="#D96C3B" />
                <rect x="25.5" y="32" width="29" height="7.5" rx="3.75" fill="#D96C3B" />
                <circle cx="46" cy="35.75" r="1.2" fill="white" />
                <circle cx="50" cy="35.75" r="1.2" fill="white" />
                <rect x="25.5" y="41.5" width="29" height="7.5" rx="3.75" fill="#D96C3B" />
                <circle cx="46" cy="45.25" r="1.2" fill="white" />
                <circle cx="50" cy="45.25" r="1.2" fill="white" />
              </svg>
            </div>
            <div className="font-sans text-xl font-bold text-txt-primary mb-3 tracking-tight">Smart Case Navigation</div>
            <div className="text-sm text-txt-secondary leading-normal max-w-[260px] mx-auto">We streamline your journey from inquiry to care delivery.</div>
          </div>

          {/* Card 3: Personalized Suggestions */}
          <div className="text-center p-0">
            <div className="inline-flex items-center justify-center mb-5">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="#FFF0E6" />
                <path d="M38 25H49C50.1 25 51 25.9 51 27V49C51 50.1 50.1 51 49 51H38C36.9 51 36 50.1 36 49V27C36 25.9 36.9 25 38 25Z" stroke="#D96C3B" strokeWidth="2.5" fill="none" />
                <rect x="29.5" y="30" width="16.5" height="23" rx="2" fill="#D96C3B" />
                <rect x="33" y="35" width="2" height="2" rx="0.5" fill="white" />
                <rect x="37.5" y="35.5" width="5.5" height="1" rx="0.5" fill="white" />
                <rect x="33" y="40.5" width="2" height="2" rx="0.5" fill="white" />
                <rect x="37.5" y="41" width="5.5" height="1" rx="0.5" fill="white" />
                <rect x="33" y="46" width="2" height="2" rx="0.5" fill="white" />
                <rect x="37.5" y="46.5" width="5.5" height="1" rx="0.5" fill="white" />
                <path d="M36.5 28C36.5 26.3 37.8 25 39.5 25H41.5C43.2 25 44.5 26.3 44.5 28" stroke="#D96C3B" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="font-sans text-xl font-bold text-txt-primary mb-3 tracking-tight">Personalized Suggestions</div>
            <div className="text-sm text-txt-secondary leading-normal max-w-[260px] mx-auto">Receive tailored recommendations based on your situation</div>
          </div>

          {/* Card 4: Virtual Consultations */}
          <div className="text-center p-0">
            <div className="inline-flex items-center justify-center mb-5">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="#FFF0E6" />
                <path d="M26 26H54C55.7 26 57 27.3 57 29V42C57 43.7 55.7 45 54 45H43L45 51H47.5C48.1 51 48.5 51.4 48.5 52C48.5 52.6 48.1 53 47.5 53H32.5C31.9 53 31.5 52.6 31.5 52C31.5 51.4 31.9 51 32.5 51H35L37 45H26C24.3 45 23 43.7 23 42V29C23 27.3 24.3 26 26 26Z" fill="#D96C3B" />
                <rect x="25.5" y="28.5" width="29" height="13.5" rx="1" fill="white" />
              </svg>
            </div>
            <div className="font-sans text-xl font-bold text-txt-primary mb-3 tracking-tight">Virtual Consultations</div>
            <div className="text-sm text-txt-secondary leading-normal max-w-[260px] mx-auto">Access professional advice anytime, from anywhere.</div>
          </div>
        </div>
      </section>

      {/* ======== AGENCY NETWORK ======== */}
      <section className="py-20 bg-bg-section" id="agency-network">
        <div className="max-w-container mx-auto px-4 sm:px-6 flex justify-between items-end mb-10 max-md:flex-col max-md:gap-4">
          <div className="flex-1 text-left [&>div]:text-left [&>div]:mb-0 [&>div>p]:ml-0 [&>div>p]:max-w-[600px]">
            <SectionHeader
              label={
                <span className="inline-flex items-center align-middle">
                  <svg width="20" height="20" viewBox="0 0 80 80" fill="none" className="mr-1.5 shrink-0">
                    <circle cx="40" cy="40" r="40" fill="#FFF0E6" />
                    <circle cx="40" cy="40" r="18" fill="#D96C3B" />
                    <path d="M35 40L38 43L45 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  TRUSTED NETWORK
                </span>
              }
              heading="Our Trusted Agency Network"
              description="Our network includes experienced, verified healthcare professionals dedicated to delivering quality care."
            />
          </div>
          <Button variant="dark" size="md" href="/agencies" id="btn-explore-agencies" className="mb-2">
            Explore Agencies
          </Button>
        </div>
        <div className="max-w-container mx-auto px-4 sm:px-6 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          {agencies.slice(0, 6).map((agency, i) => (
            <div key={i} className="flex flex-col bg-bg-white p-6 rounded-xl border border-border transition-all duration-250 hover:shadow-md hover:border-accent-light hover:-translate-y-0.5" id={`agency-card-${i}`}>
              <div className="flex items-start gap-5 mb-6">
                <div className="w-[80px] h-[80px] flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src={agency.logo}
                    alt={`${agency.name} Logo`}
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="font-sans text-lg font-bold text-primary mb-1 leading-tight">{agency.name}</div>
                  <div className="text-xs text-txt-secondary mb-3 leading-normal">{agency.subtext}</div>
                  <div className="flex items-center gap-2">
                    <span className="flex gap-[2px]">
                      <StarIcon filled={true} />
                      <StarIcon filled={true} />
                      <StarIcon filled={true} />
                      <StarIcon filled={true} />
                      <StarIcon filled={false} />
                    </span>
                    <span className="font-sans text-sm font-bold text-primary">{agency.rating}</span>
                  </div>
                </div>
              </div>
              <Button variant="dark" className="w-full mt-auto" href="/contact">
                Get Matched
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-10">
          <span className="bg-primary w-8 h-2 rounded-full cursor-pointer transition-all duration-250"></span>
          <span className="w-2 h-2 rounded-full bg-[#D1D5DB] cursor-pointer transition-all duration-250"></span>
          <span className="w-2 h-2 rounded-full bg-[#D1D5DB] cursor-pointer transition-all duration-250"></span>
          <span className="w-2 h-2 rounded-full bg-[#D1D5DB] cursor-pointer transition-all duration-250"></span>
        </div>
      </section>

      {/* ======== HOW IT WORKS ======== */}
      <section className="py-24 bg-bg-white" id="how-it-works">
        <SectionHeader
          label="SIMPLE PROCESS"
          heading="How It Works"
          description="A simple process to connect you with the right support"
        />
        <div className="max-w-container mx-auto px-4 sm:px-6 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-0 max-lg:grid-cols-2 max-lg:gap-y-12 max-lg:gap-x-6 max-sm:grid-cols-1 max-sm:gap-y-10">
          {steps.map((step, i) => (
            <Fragment key={i}>
              <div className="flex flex-col items-center text-center px-2 group">
                <div className="flex justify-center mb-6 w-full">
                  <div className="flex items-center justify-center w-[110px] h-[110px] rounded-full bg-[#fae2d6] transition-all duration-[400ms] shadow-[0_4px_10px_rgba(217,108,59,0.05)] group-hover:scale-105 group-hover:bg-[#f8d5c4]">
                    <Image
                      src={step.iconPath}
                      alt={step.title}
                      width={step.width}
                      height={step.height}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-sans text-xl font-bold text-txt-primary mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-txt-muted leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center h-[110px] text-txt-primary opacity-55 transition-all duration-250 [&>svg]:stroke-[1.5px] max-lg:hidden hover:opacity-80 hover:translate-x-1" aria-hidden="true">
                  <Image
                    src="/how-it-works/arrow.png"
                    alt="Arrow"
                    width={20}
                    height={9}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      {/* ======== CTA BANNER ======== */}
      <section className="py-16 bg-bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <CTABanner
            heading="Need Support For Your Loved One?"
            description="We'll help you find the right match—quickly and reliably."
            primaryButtonText="Find Care"
            primaryButtonHref="/contact"
            primaryButtonVariant="white"
            secondaryButtonText="Explore Agencies"
            secondaryButtonHref="/agencies"
            secondaryButtonVariant="outlineLight"
            id="cta-support"
          />
        </div>
      </section>

      {/* ======== TESTIMONIALS ======== */}
      <section className="py-24 bg-bg-section overflow-hidden relative" id="testimonials">
        <SectionHeader
          label="REAL STORIES"
          heading="Trusted by Families"
          description="See what families are saying about their Kinora caregiver experience."
        />
        <div className="flex gap-8 w-[2028px] relative left-1/2 -translate-x-1/2 mx-auto py-4 max-lg:w-auto max-lg:left-0 max-lg:translate-x-0 max-lg:gap-4 max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:px-4 max-lg:scrollbar-hide max-lg:m-0">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-none w-[380px] bg-bg-white py-10 px-8 rounded-2xl border border-[#EAEAEA] text-center transition-all duration-[400ms] shadow-[0_4px_20px_rgba(15,42,56,0.02)] hover:shadow-[0_12px_30px_rgba(15,42,56,0.08)] hover:-translate-y-1.5 max-lg:w-[320px] max-lg:snap-center [&:first-child]:max-lg:hidden [&:last-child]:max-lg:hidden" id={`testimonial-${i}`}>
              <div className="w-[140px] h-[140px] rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center relative">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={140}
                  height={140}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#4A154B] mb-2">{t.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex gap-1 text-accent">
                  <StarIcon filled={true} />
                  <StarIcon filled={true} />
                  <StarIcon filled={true} />
                  <StarIcon filled={true} />
                  <StarIcon filled={false} />
                </div>
                <span className="font-sans text-sm font-bold text-txt-secondary">{t.rating}</span>
              </div>
              <p className="font-sans text-sm text-txt-secondary leading-[1.7] text-center m-0">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-10">
          <span className="bg-primary w-8 h-2 rounded-full cursor-pointer transition-all duration-250"></span>
          <span className="w-2 h-2 rounded-full bg-[#D1D5DB] cursor-pointer transition-all duration-250"></span>
          <span className="w-2 h-2 rounded-full bg-[#D1D5DB] cursor-pointer transition-all duration-250"></span>
          <span className="w-2 h-2 rounded-full bg-[#D1D5DB] cursor-pointer transition-all duration-250"></span>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <FaqSection />
    </div>
  );
}
