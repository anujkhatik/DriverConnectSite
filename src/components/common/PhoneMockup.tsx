/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, MapPin, Clock, CheckCircle2, Navigation, AlertTriangle } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[340px] select-none">
      {/* Subtle background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#2F6FED]/20 via-[#EAF2FF] to-transparent rounded-[44px] filter blur-xl opacity-70" />

      {/* Device Outer Frame */}
      <div className="relative rounded-[40px] border-[8px] border-[#1F2430] bg-[#FAFAFB] p-3 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5">
        {/* Dynamic Island / Notch */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-28 bg-[#1F2430] rounded-full z-20 flex items-center justify-end px-2">
          <div className="w-2 h-2 rounded-full bg-[#2F6FED]/70" />
        </div>

        {/* Screen Content */}
        <div className="pt-7 pb-3 px-3.5 bg-white rounded-[28px] border border-[#E4E6EA] flex flex-col space-y-3">
          {/* Top Bar inside app */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1F2430]">
              <span className="w-2 h-2 rounded-full bg-[#1FAE6B] animate-pulse" />
              <span>Surat, Vesu</span>
            </div>
            <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#EAF2FF] text-[#2F6FED]">
              INCITY
            </span>
          </div>

          {/* Vehicle selected card */}
          <div className="p-2.5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA]">
            <div className="flex items-center justify-between text-xs text-[#6B7280] mb-1">
              <span>Your Vehicle</span>
              <span className="text-[#1FAE6B] font-medium flex items-center gap-1 text-[11px]">
                <CheckCircle2 className="w-3 h-3" /> Insured
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#1F2430]">Hyundai Creta</div>
                <div className="text-[11px] text-[#6B7280]">Manual · Petrol</div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#EAF2FF] flex items-center justify-center text-[#2F6FED]">
                <Navigation className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Duration selection */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-[#1F2430] mb-1.5">
              <span>Select Duration</span>
              <span className="text-[11px] text-[#6B7280]">InCity Rates</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="p-2 rounded-xl bg-[#EAF2FF] border border-[#2F6FED] text-center">
                <div className="text-[10px] text-[#2F6FED] font-bold">3 Hours</div>
                <div className="text-xs font-bold text-[#1F2430]">₹600</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E4E6EA] text-center opacity-85">
                <div className="text-[10px] text-[#6B7280] font-medium">6 Hours</div>
                <div className="text-xs font-semibold text-[#1F2430]">₹1,000</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E4E6EA] text-center opacity-85">
                <div className="text-[10px] text-[#6B7280] font-medium">12 Hours</div>
                <div className="text-xs font-semibold text-[#1F2430]">₹1,800</div>
              </div>
            </div>
          </div>

          {/* Driver matched card */}
          <div className="p-2.5 rounded-xl bg-white border border-[#E4E6EA] shadow-xs">
            <div className="flex items-center gap-2.5">
              {/* Neutral Driver Avatar Placeholder */}
              <div className="w-10 h-10 rounded-full bg-[#EAF2FF] border border-[#BFDBFE] flex items-center justify-center text-[#2F6FED] font-bold text-xs shrink-0">
                DR
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#1F2430] truncate">Verified Driver</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-[#E8F8F0] text-[#1FAE6B] font-semibold rounded">KYC Vetted</span>
                </div>
                <div className="text-[10px] text-[#6B7280]">Surat Commercial DL · 7+ yrs exp</div>
              </div>
            </div>
          </div>

          {/* Payment breakdown card */}
          <div className="p-2.5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-1.5 text-xs">
            <div className="flex items-center justify-between text-[#6B7280]">
              <span>Ride Fare (3h)</span>
              <span className="font-semibold text-[#1F2430]">₹600</span>
            </div>
            <div className="flex items-center justify-between text-[#2F6FED] font-medium">
              <span>30% Advance Now</span>
              <span>₹180</span>
            </div>
            <div className="flex items-center justify-between text-[#6B7280] text-[11px] pt-1 border-t border-[#E4E6EA]">
              <span>Balance at drop</span>
              <span>₹420</span>
            </div>
          </div>

          {/* Secure CTA button inside mockup */}
          <div className="pt-1">
            <div className="w-full py-2.5 rounded-full bg-[#2F6FED] text-white text-xs font-bold text-center shadow-sm">
              Pay ₹180 Advance &amp; Confirm
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[9px] text-[#6B7280] mt-1.5">
              <ShieldCheck className="w-3 h-3 text-[#1FAE6B]" />
              <span>Payments secured by Razorpay · UPI &amp; Cards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
