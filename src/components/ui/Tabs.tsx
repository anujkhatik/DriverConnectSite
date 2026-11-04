/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  badge?: string;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
}) => {
  return (
    <div
      role="tablist"
      aria-label="Navigation tabs"
      className={`inline-flex p-1.5 bg-[#F1F3F5] rounded-full border border-[#E4E6EA] ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-150 cursor-pointer ${
              isActive
                ? 'bg-white text-[#1F2430] shadow-sm'
                : 'text-[#6B7280] hover:text-[#1F2430]'
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#EAF2FF] text-[#2F6FED]">
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
