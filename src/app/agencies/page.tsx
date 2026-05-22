import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import CTABanner from '@/components/CTABanner/CTABanner';

export const metadata: Metadata = {
  title: 'Agencies',
};

const agencies = [
  { id: 1, name: 'Agency Partner 1' },
  { id: 2, name: 'Agency Partner 2' },
  { id: 3, name: 'Agency Partner 3' },
  { id: 4, name: 'Agency Partner 4' },
  { id: 5, name: 'Agency Partner 5' },
  { id: 6, name: 'Agency Partner 6' },
];

function StarIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function HalfStarIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="halfStarGrad">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      <path
        fill="url(#halfStarGrad)"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1 mb-3" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }, (_, i) => (
        <StarIcon key={`full-${i}`} className="w-[18px] h-[18px] text-[#F59E0B]" />
      ))}
      {hasHalf && <HalfStarIcon className="w-[18px] h-[18px] text-[#F59E0B]" />}
      {Array.from({ length: 5 - fullStars - (hasHalf ? 1 : 0) }, (_, i) => (
        <StarIcon key={`empty-${i}`} className="w-[18px] h-[18px] text-border" />
      ))}
      <span className="font-sans text-sm font-medium text-txt-muted ml-1">{rating}</span>
    </div>
  );
}

function AgencyIcon() {
  return (
    <svg
      className="w-8 h-8 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01" />
      <path d="M9 12v.01" />
      <path d="M9 15v.01" />
      <path d="M9 18v.01" />
    </svg>
  );
}

export default function AgenciesPage() {
  return (
    <div className="bg-bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 sm:px-6 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-container mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-txt-primary leading-tight tracking-tight mb-4">Our Trusted Agencies</h1>
          <p className="font-sans text-lg md:text-xl text-txt-secondary leading-relaxed m-0 max-w-[540px] mx-auto">
            Explore our network of certified healthcare agencies.
          </p>
        </div>
      </section>

      {/* Agency Grid */}
      <section className="pt-8 pb-16 px-4 sm:px-6" aria-labelledby="agencies-grid-heading">
        <div className="max-w-container mx-auto">
          <SectionHeader
            label="Partners"
            heading="Featured Agencies"
            description="Browse our curated selection of trusted healthcare agency partners."
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0" role="list">
            {agencies.map((agency) => (
              <li key={agency.id} className="bg-bg-white border border-border-light rounded-xl p-8 flex flex-col items-center text-center transition-all duration-250 hover:shadow-lg hover:-translate-y-1" id={`agency-card-${agency.id}`}>
                <div className="w-[72px] h-[72px] rounded-full bg-bg-section flex items-center justify-center mb-5 shrink-0">
                  <AgencyIcon />
                </div>
                <h3 className="font-serif text-xl font-semibold text-txt-primary m-0 mb-2 leading-snug">{agency.name}</h3>
                <StarRating rating={4.5} />
                <p className="font-sans text-base text-txt-secondary leading-normal m-0">Certified healthcare provider</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <CTABanner
            heading="Want to List Your Agency?"
            description="Partner with Kinora to reach more patients and families in need of quality healthcare."
            primaryButtonText="Contact Us"
            primaryButtonHref="/contact"
            primaryButtonVariant="white"
            id="agencies-cta"
          />
        </div>
      </section>
    </div>
  );
}
