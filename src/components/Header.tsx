/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Car, Shield, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button.tsx';
import { BUSINESS_DETAILS } from '../content.ts';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Drivers', path: '/driver-terms' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleBookDriverClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const getAppEl = document.getElementById('get-app');
      if (getAppEl) {
        getAppEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/#get-app');
    setTimeout(() => {
      const getAppEl = document.getElementById('get-app');
      if (getAppEl) getAppEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E4E6EA] transition-all">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#1F2430] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FED] rounded-lg"
          >
            <div className="w-8 h-8 rounded-full bg-[#2F6FED] flex items-center justify-center text-white shadow-sm">
              <Car className="w-4 h-4" />
            </div>
            <span>{BUSINESS_DETAILS.brandName}</span>
            <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAF2FF] text-[#2F6FED]">
              Surat
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#2F6FED] font-semibold'
                      : 'text-[#4B5563] hover:text-[#1F2430]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={handleBookDriverClick}
            >
              Book a driver
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-full text-[#4B5563] hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FED]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-xs flex justify-end">
          <div
            className="w-full max-w-xs bg-white h-full flex flex-col p-6 shadow-2xl justify-between animate-in slide-in-from-right duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E4E6EA]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#2F6FED] flex items-center justify-center text-white">
                    <Car className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-[#1F2430]">{BUSINESS_DETAILS.brandName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-full text-[#6B7280] hover:bg-[#F3F4F6]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#EAF2FF] text-[#2F6FED] font-semibold'
                          : 'text-[#1F2430] hover:bg-[#FAFAFB]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
                    </Link>
                  );
                })}
              </nav>

              {/* Legal Links in Mobile Drawer */}
              <div className="mt-6 pt-6 border-t border-[#E4E6EA]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] px-3 mb-2">
                  Policies &amp; Legal
                </div>
                <div className="grid grid-cols-2 gap-1 text-xs text-[#4B5563] px-3">
                  <Link to="/terms" className="py-1 hover:text-[#2F6FED]">Terms</Link>
                  <Link to="/privacy" className="py-1 hover:text-[#2F6FED]">Privacy</Link>
                  <Link to="/refund-policy" className="py-1 hover:text-[#2F6FED]">Refunds</Link>
                  <Link to="/service-description" className="py-1 hover:text-[#2F6FED]">Service Info</Link>
                  <Link to="/delete-account" className="py-1 hover:text-[#2F6FED]">Delete Account</Link>
                  <Link to="/driver-terms" className="py-1 hover:text-[#2F6FED]">Driver Terms</Link>
                </div>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-6 border-t border-[#E4E6EA] space-y-3">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={handleBookDriverClick}
              >
                Book a driver
              </Button>
              <div className="text-center text-[11px] text-[#6B7280] flex items-center justify-center gap-1">
                <Shield className="w-3 h-3 text-[#1FAE6B]" />
                <span>Verified Drivers in Surat</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
