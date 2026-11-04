/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'surface' | 'highlight';
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  interactive = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'rounded-[14px] border border-[#E4E6EA] transition-all duration-200';
  const variantStyles = {
    default: 'bg-white',
    surface: 'bg-[#FAFAFB]',
    highlight: 'bg-[#EAF2FF] border-[#BFDBFE]',
  }[variant];
  const interactiveStyles = interactive
    ? 'hover:border-[#2F6FED]/50 hover:shadow-sm cursor-pointer'
    : '';

  return (
    <div className={`${baseStyles} ${variantStyles} ${interactiveStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
