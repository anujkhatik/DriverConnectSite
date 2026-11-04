/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-[#6B7280] ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-[#2F6FED] transition-colors"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link to={item.href} className="hover:text-[#2F6FED] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-[#1F2430] truncate max-w-[200px] sm:max-w-none" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
