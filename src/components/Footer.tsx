/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, MapPin, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_DETAILS } from '../content.ts';
import { useAppLaunchModal } from '../context/AppLaunchModalContext.tsx';

export const Footer: React.FC = () => {
  const { openModal } = useAppLaunchModal();
  return (
    <footer className="bg-white border-t border-[#E4E6EA] text-[#1F2430]">
      {/* Main 4-Column Footer */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Office Details */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-bold text-xl tracking-tight text-[#1F2430]"
            >
              <div className="w-8 h-8 rounded-full bg-[#2F6FED] flex items-center justify-center text-white">
                <Car className="w-4 h-4" />
              </div>
              <span>{BUSINESS_DETAILS.brandName}</span>
            </Link>

            <p className="text-sm text-[#6B7280] leading-relaxed">
              Time-based professional driver booking service for your own car in Surat, Gujarat. Hourly &amp; daily verified drivers.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-[#4B5563]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2F6FED] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1F2430] font-medium">Registered office:</strong>
                  <br />
                  {BUSINESS_DETAILS.registeredOffice}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2F6FED] shrink-0" />
                <span>
                  <strong className="text-[#1F2430] font-medium">Email:</strong>{' '}
                  <a
                    href={`mailto:${BUSINESS_DETAILS.supportEmail}`}
                    className="text-[#2F6FED] hover:underline"
                  >
                    {BUSINESS_DETAILS.supportEmail}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#2F6FED] shrink-0" />
                <span>
                  <strong className="text-[#1F2430] font-medium">Support hours:</strong>{' '}
                  {BUSINESS_DETAILS.supportHours}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1F2430]">
              Company
            </div>
            <ul className="space-y-2 text-sm text-[#4B5563]">
              <li>
                <Link to="/about" className="hover:text-[#2F6FED] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#2F6FED] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#2F6FED] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2F6FED] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies (Razorpay Mandatory Links) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1F2430]">
              Policies
            </div>
            <ul className="space-y-2 text-sm text-[#4B5563]">
              <li>
                <Link to="/terms" className="hover:text-[#2F6FED] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#2F6FED] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-[#2F6FED] transition-colors">
                  Refund &amp; Cancellation
                </Link>
              </li>
              <li>
                <Link to="/service-description" className="hover:text-[#2F6FED] transition-colors">
                  Service Description
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="hover:text-[#2F6FED] transition-colors">
                  Delete Account
                </Link>
              </li>
              <li>
                <Link to="/driver-terms" className="hover:text-[#2F6FED] transition-colors">
                  Driver Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get the App & Payments Secured by Razorpay */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1F2430] mb-3">
                Get the App
              </div>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => openModal('android')}
                  aria-label="Google Play Store release notice and notify me"
                  className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] hover:border-[#2F6FED]/50 text-xs font-medium text-[#1F2430] transition-colors cursor-pointer text-left"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">Google Play</span> (Android)
                  </span>
                  <span className="text-[10px] text-[#2F6FED] font-semibold bg-[#EAF2FF] px-2 py-0.5 rounded">
                    Notify Me
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => openModal('ios')}
                  aria-label="Apple App Store release notice and notify me"
                  className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] hover:border-[#2F6FED]/50 text-xs font-medium text-[#1F2430] transition-colors cursor-pointer text-left"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">App Store</span> (iOS)
                  </span>
                  <span className="text-[10px] text-[#2F6FED] font-semibold bg-[#EAF2FF] px-2 py-0.5 rounded">
                    Notify Me
                  </span>
                </button>
              </div>
            </div>

            {/* Payments Secured by Razorpay */}
            <div className="pt-2 border-t border-[#E4E6EA]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2430] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#1FAE6B]" />
                <span>Payments secured by Razorpay</span>
              </div>
              <p className="text-[11px] text-[#6B7280] mb-2.5">
                Bank-grade 256-bit SSL encrypted checkout supporting:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FAFAFB] border border-[#E4E6EA] text-[#4B5563]">
                  UPI
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FAFAFB] border border-[#E4E6EA] text-[#4B5563]">
                  Visa
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FAFAFB] border border-[#E4E6EA] text-[#4B5563]">
                  Mastercard
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FAFAFB] border border-[#E4E6EA] text-[#4B5563]">
                  Net banking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E4E6EA] bg-[#FAFAFB]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-2">
          <div>
            © {BUSINESS_DETAILS.copyrightYear} {BUSINESS_DETAILS.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-medium text-[#4B5563]">
            <MapPin className="w-3.5 h-3.5 text-[#2F6FED]" />
            <span>Surat, Gujarat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
