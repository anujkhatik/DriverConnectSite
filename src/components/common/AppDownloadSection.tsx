/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smartphone, CheckCircle2, Download } from 'lucide-react';
import { useAppLaunchModal } from '../../context/AppLaunchModalContext.tsx';

export const AppDownloadSection: React.FC = () => {
  const { openModal } = useAppLaunchModal();

  return (
    <section id="get-app" className="scroll-mt-24 py-16 md:py-24 bg-white border-y border-[#E4E6EA]">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#EAF2FF] text-[#2F6FED]">
          <Smartphone className="w-3.5 h-3.5" />
          Download DriverConnect
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2430] tracking-tight">
          Get the DriverConnect app on Android and iOS
        </h2>
        <p className="text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Book in minutes. Track your driver live. Pay the advance securely. Dedicated to car owners in Surat.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
          <div className="p-4 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2430]">
              <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
              <span>Verified Drivers</span>
            </div>
            <p className="text-xs text-[#6B7280]">Assign a vetted professional to your personal car in minutes.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2430]">
              <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
              <span>Live Tracking &amp; SOS</span>
            </div>
            <p className="text-xs text-[#6B7280]">Real-time GPS trip sharing with your emergency contacts.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2430]">
              <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
              <span>Secured 30% Advance</span>
            </div>
            <p className="text-xs text-[#6B7280]">Pay securely via Razorpay (UPI, Cards, Net Banking).</p>
          </div>
        </div>

        {/* Store & Direct Download Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          {/* Direct Android APK Download Button */}
          <a
            href="/downloads/driverconnect.apk"
            download="driverconnect.apk"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1FAE6B] text-white rounded-full hover:bg-[#189359] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FAE6B] cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02]"
            aria-label="Direct Download DriverConnect Android APK"
          >
            <Download className="w-5 h-5 text-white" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider text-emerald-100 font-medium leading-none">Direct Download</div>
              <div className="text-sm font-bold leading-tight">Android APK</div>
            </div>
          </a>

          {/* Google Play Button */}
          <button
            type="button"
            onClick={() => openModal('android')}
            aria-label="Download DriverConnect on Google Play Store"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#1F2430] text-white rounded-full hover:bg-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FED] cursor-pointer shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.373 2.373 0 0 1-.61-.914V2.728c0-.334.22-.647.609-.914zM15.207 13.414l2.193 2.193-11.95 6.843 9.757-9.036zm0-2.828L5.45 1.55l11.95 6.843-2.193 2.193zm1.414 1.414l3.197 1.83a1.5 1.5 0 0 0 0-2.59l-3.197-1.83 1.414 1.414-1.414 1.176z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider text-slate-300 leading-none">Get it on</div>
              <div className="text-sm font-semibold leading-tight">Google Play</div>
            </div>
          </button>

          {/* App Store Button */}
          <button
            type="button"
            onClick={() => openModal('ios')}
            aria-label="Download DriverConnect on Apple App Store"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#1F2430] text-white rounded-full hover:bg-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FED] cursor-pointer shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.13-1.96.99-3.11-.98.04-2.16.65-2.85 1.46-.61.71-1.14 1.87-.99 2.99 1.09.08 2.19-.53 2.85-1.34z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider text-slate-300 leading-none">Download on the</div>
              <div className="text-sm font-semibold leading-tight">App Store</div>
            </div>
          </button>
        </div>

        <p className="text-xs text-[#6B7280]">
          * Tap <strong>Direct Download</strong> to immediately install the Android APK. Tap Google Play or App Store to join the priority launch list.
        </p>
      </div>
    </section>
  );
};
