/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState } from 'react';

interface AppLaunchModalContextType {
  isOpen: boolean;
  targetPlatform: 'android' | 'ios';
  openModal: (platform?: 'android' | 'ios') => void;
  closeModal: () => void;
}

const AppLaunchModalContext = createContext<AppLaunchModalContextType | undefined>(undefined);

export const AppLaunchModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetPlatform, setTargetPlatform] = useState<'android' | 'ios'>('android');

  const openModal = (platform: 'android' | 'ios' = 'android') => {
    setTargetPlatform(platform);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AppLaunchModalContext.Provider value={{ isOpen, targetPlatform, openModal, closeModal }}>
      {children}
    </AppLaunchModalContext.Provider>
  );
};

export function useAppLaunchModal() {
  const context = useContext(AppLaunchModalContext);
  if (!context) {
    throw new Error('useAppLaunchModal must be used within an AppLaunchModalProvider');
  }
  return context;
}
