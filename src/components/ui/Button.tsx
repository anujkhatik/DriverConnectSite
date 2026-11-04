/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FED] focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#2F6FED] text-white hover:bg-[#255bc4] shadow-sm active:bg-[#1f4da7]',
    ghost:
      'bg-transparent text-[#1F2430] hover:bg-[#F3F4F6] active:bg-[#E5E7EB]',
    outline:
      'bg-white text-[#1F2430] border border-[#E4E6EA] hover:bg-[#FAFAFB] hover:border-[#D1D5DB]',
    subtle:
      'bg-[#EAF2FF] text-[#2F6FED] hover:bg-[#d8e7ff] font-semibold',
  }[variant];

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
