import React from 'react';
import Button from '@/components/Button/Button';

type ButtonVariant = 'primary' | 'outline' | 'outlineLight' | 'dark' | 'solidWhite' | 'white';

interface CTABannerProps {
  heading: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  primaryButtonVariant?: ButtonVariant;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonVariant?: ButtonVariant;
  id?: string;
}

export default function CTABanner({
  heading,
  description,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonVariant = 'outlineLight',
  secondaryButtonText,
  secondaryButtonHref,
  secondaryButtonVariant = 'outlineLight',
  id,
}: CTABannerProps) {
  return (
    <section className="bg-[radial-gradient(100%_100%_at_50%_50%,_#153547_0%,_#0F2A38_100%)] rounded-2xl overflow-hidden relative" id={id}>
      <div className="text-center py-10 px-6 md:py-12 md:px-8 relative z-10">
        <h2 className="text-white mb-3 text-2xl md:text-[36px] font-sans font-semibold tracking-[-0.01em]">{heading}</h2>
        {description && <p className="text-white/70 text-base max-w-[560px] mx-auto mb-8 leading-relaxed font-normal">{description}</p>}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full [&>a]:w-full md:[&>a]:w-auto [&>button]:w-full md:[&>button]:w-auto">
          {primaryButtonText && (
            <Button variant={primaryButtonVariant} size="md" href={primaryButtonHref}>
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && (
            <Button variant={secondaryButtonVariant} size="md" href={secondaryButtonHref}>
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
