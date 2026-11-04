/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'neutral' | 'success' | 'accent' | 'danger';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-[#EAF2FF] text-[#2F6FED] border border-[#BFDBFE]/60',
    neutral: 'bg-[#F3F4F6] text-[#4B5563] border border-[#E5E7EB]',
    success: 'bg-[#E8F8F0] text-[#1FAE6B] border border-[#A7F3D0]',
    accent: 'bg-[#FBF5ED] text-[#A9754A] border border-[#F0DFCD]',
    danger: 'bg-[#FDF2F2] text-[#E5484D] border border-[#FECDD3]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
