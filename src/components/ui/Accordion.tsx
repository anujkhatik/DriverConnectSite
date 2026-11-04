/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-[14px] border border-[#E4E6EA] bg-white overflow-hidden transition-colors"
          >
            <button
              type="button"
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-[#1F2430] hover:text-[#2F6FED] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FED]"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="text-base font-medium">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#6B7280] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#2F6FED]' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-5 pb-5 pt-1 text-sm text-[#4B5563] leading-relaxed border-t border-[#F3F4F6]"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
