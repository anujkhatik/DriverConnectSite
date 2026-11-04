/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ListFilter } from 'lucide-react';

export interface TocItem {
  id: string;
  label: string;
}

export interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, className = '' }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -60% 0%',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <div className={className}>
      {/* Mobile Accordion Toggle */}
      <div className="lg:hidden mb-6 rounded-[14px] border border-[#E4E6EA] bg-white p-3">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between text-sm font-semibold text-[#1F2430] p-1"
          aria-expanded={isMobileOpen}
        >
          <span className="flex items-center gap-2">
            <ListFilter className="w-4 h-4 text-[#2F6FED]" />
            Table of contents ({items.length} sections)
          </span>
          <span className="text-xs text-[#2F6FED]">{isMobileOpen ? 'Hide' : 'View'}</span>
        </button>

        {isMobileOpen && (
          <nav className="mt-3 pt-3 border-t border-[#E4E6EA] max-h-64 overflow-y-auto space-y-1">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left text-xs py-1.5 px-2 rounded-lg transition-colors flex items-start gap-2 ${
                  activeId === item.id
                    ? 'bg-[#EAF2FF] text-[#2F6FED] font-semibold'
                    : 'text-[#4B5563] hover:text-[#1F2430]'
                }`}
              >
                <span className="text-[#9CA3AF] shrink-0 font-mono text-[10px]">{index + 1}.</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3">
        <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-3 px-2">
          Table of Contents
        </div>
        <nav className="space-y-1 border-l-2 border-[#E4E6EA]">
          {items.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left text-xs py-2 px-3 transition-colors flex items-start gap-2 -ml-[2px] border-l-2 cursor-pointer ${
                  isActive
                    ? 'border-[#2F6FED] text-[#2F6FED] font-semibold bg-[#EAF2FF]/50 rounded-r-lg'
                    : 'border-transparent text-[#6B7280] hover:text-[#1F2430] hover:border-[#D1D5DB]'
                }`}
              >
                <span className="text-[#9CA3AF] font-mono text-[11px] shrink-0">{index + 1}.</span>
                <span className="line-clamp-2">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};
