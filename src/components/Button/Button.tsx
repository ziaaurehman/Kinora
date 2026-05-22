import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline' | 'outlineLight' | 'dark' | 'solidWhite' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  id?: string;
}

const baseClasses = 'inline-flex items-center justify-center gap-2 font-sans font-semibold leading-none rounded-md cursor-pointer transition-all whitespace-nowrap no-underline border-2 border-transparent hover:-translate-y-[1px] active:translate-y-0';

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white border-accent hover:bg-accent-hover hover:border-accent-hover hover:shadow-md',
  outline: 'bg-transparent text-txt-primary border-txt-primary hover:bg-txt-primary hover:text-white hover:shadow-md',
  outlineLight: 'bg-transparent text-white border-white hover:bg-white hover:text-txt-primary',
  dark: 'bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark hover:shadow-md',
  solidWhite: 'bg-white text-primary border-primary hover:bg-bg-light hover:shadow-md',
  white: 'bg-white text-primary border-white hover:bg-bg-light hover:border-bg-light hover:shadow-md',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  className = '',
  id,
}: ButtonProps) {
  const classNames = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classNames} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick} id={id}>
      {children}
    </button>
  );
}
