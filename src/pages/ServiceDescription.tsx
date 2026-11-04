/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { TableOfContents, TocItem } from '../components/ui/TableOfContents.tsx';
import { Table, Column } from '../components/ui/Table.tsx';
import { Button } from '../components/ui/Button.tsx';
import { BUSINESS_DETAILS, INCITY_PACKAGES } from '../content.ts';

interface ServiceTypeRow {
  packageType: string;
  duration: string;
  baseFare: string;
  scope: string;
  bestFor: string;
}

export const ServiceDescription: React.FC = () => {
  const tocItems: TocItem[] = [
    { id: 'sec-what-you-buy', label: '1. What You Are Buying' },
    { id: 'sec-service-types', label: '2. Service Types & Offerings' },
    { id: 'sec-included-excluded', label: '3. Inclusions & Exclusions Breakdown' },
    { id: 'sec-how-it-works', label: '4. How the Service Operates' },
    { id: 'sec-service-area', label: '5. Launch Service Area (Surat)' },
    { id: 'sec-car-requirements', label: '6. Vehicle Requirements for Customers' },
    { id: 'sec-driver-vetting', label: '7. Driver Standards & Verification' },
  ];

  const serviceTableData: ServiceTypeRow[] = [
    {
      packageType: 'InCity 3 Hours',
      duration: '3 Continuous Hours',
      baseFare: '₹600',
      scope: 'Surat Municipal Corporation limits',
      bestFor: 'Local errands, shopping at VR Mall, doctor visits',
    },
    {
      packageType: 'InCity 6 Hours',
      duration: '6 Continuous Hours',
      baseFare: '₹1,000',
      scope: 'Surat Municipal Corporation limits',
      bestFor: 'Multiple business meetings, wedding functions, dining out',
    },
    {
      packageType: 'InCity 12 Hours',
      duration: '12 Continuous Hours',
      baseFare: '₹1,800',
      scope: 'Surat Municipal Corporation limits',
      bestFor: 'Full day continuous city availability across zones',
    },
    {
      packageType: 'OutStation Daily',
      duration: 'Per Day Basis',
      baseFare: '₹2,200 (Day 1)',
      scope: 'Intercity travel originating from Surat',
      bestFor: 'Highway trips to Ahmedabad, Mumbai, Vadodara, Navsari',
    },
    {
      packageType: 'OutStation One-Way Drop',
      duration: 'End of Outstation Trip',
      baseFare: '+₹500 flat',
      scope: 'Drop-off outside Surat',
      bestFor: 'Driver return travel bus/train fare back to Surat',
    },
  ];

  const columns: Column<ServiceTypeRow>[] = [
    { header: 'Service Package', accessor: 'packageType', className: 'font-semibold text-[#1F2430]' },
    { header: 'Duration', accessor: 'duration' },
    {
      header: 'Starting Fare (INR)',
      accessor: (row) => <span className="font-bold text-[#1F2430]">{row.baseFare}</span>,
    },
    { header: 'Geographic Scope', accessor: 'scope' },
    { header: 'Recommended Usage', accessor: 'bestFor', className: 'text-xs text-[#6B7280]' },
  ];

  return (
    <>
      <SEO
        title="Service Description – DriverConnect Surat"
        description="Comprehensive service description for DriverConnect. Detailed breakdown of what customers buy, service packages, vehicle criteria, and Surat geographic coverage."
        canonicalPath="/service-description"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Service Description' }]} className="mb-6" />

          {/* Header */}
          <div className="border-b border-[#E4E6EA] pb-6 mb-8 max-w-[760px] lg:max-w-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Service Specifications
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] mt-1 tracking-tight">
              Service Description
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] mt-3">
              <span><strong>Version:</strong> 1.2</span>
              <span>•</span>
              <span><strong>Last updated:</strong> November 2026</span>
              <span>•</span>
              <span><strong>Base Location:</strong> 24 Cars, Vesu, Surat</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <TableOfContents items={tocItems} />
            </div>

            <div className="lg:col-span-8 max-w-[760px] space-y-10 text-sm text-[#4B5563] leading-relaxed">
              {/* What You Buy */}
              <section id="sec-what-you-buy" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  1. What You Are Buying
                </h2>
                <p>
                  DriverConnect sells <strong>time-based professional driver services</strong> for private passenger vehicles owned or legally possessed by the Customer.
                </p>
                <div className="p-4 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-2 text-xs">
                  <p>
                    When you purchase a DriverConnect package, you are hiring a verified, experienced chauffeur to drive your personal motor car for a pre-scheduled duration. You retain complete ownership, physical possession, and comfort of your private vehicle throughout the ride.
                  </p>
                  <p className="font-semibold text-[#1F2430]">
                    DriverConnect does not sell cab rides, taxi services, car rentals, or vehicle leases.
                  </p>
                </div>
              </section>

              {/* Service Types Table */}
              <section id="sec-service-types" className="space-y-4 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  2. Service Types &amp; Offerings
                </h2>
                <p className="text-xs text-[#6B7280]">
                  The schedule below details our standard packages currently operational in Surat:
                </p>
                <Table
                  columns={columns}
                  data={serviceTableData}
                  keyExtractor={(row) => row.packageType}
                  caption="DriverConnect service categories, durations, and pricing"
                />
              </section>

              {/* Included & Excluded */}
              <section id="sec-included-excluded" className="space-y-4 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  3. Inclusions &amp; Exclusions Breakdown
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="p-5 rounded-xl bg-[#E8F8F0]/50 border border-[#A7F3D0] space-y-2">
                    <strong className="text-sm font-bold text-[#065F46] block">
                      Explicitly Included:
                    </strong>
                    <ul className="list-disc pl-4 space-y-1 text-[#064E3B]">
                      <li>Assigned professional driver driving your personal car.</li>
                      <li>Scheduled hours of continuous standby and driving service.</li>
                      <li>Digital pre-ride and post-ride vehicle inspection log.</li>
                      <li>Live route GPS tracking in the DriverConnect app.</li>
                      <li>1-tap SOS emergency alert button.</li>
                      <li>Driver partner KYC verification and background vetting.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FFF5F5] border border-[#FECDD3] space-y-2">
                    <strong className="text-sm font-bold text-[#991B1B] block">
                      Strictly Excluded (Customer Liability):
                    </strong>
                    <ul className="list-disc pl-4 space-y-1 text-[#7F1D1D]">
                      <li>Motor fuel (petrol, diesel, CNG, EV charging).</li>
                      <li>Toll fees, FASTag tolls, and state border entry taxes.</li>
                      <li>Public or private parking charges and valet fees.</li>
                      <li>Traffic challans resulting from pre-existing car faults (e.g. broken taillight, tinted glass).</li>
                      <li>Driver food and overnight lodging on OutStation trips unless pre-arranged.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How It Works */}
              <section id="sec-how-it-works" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  4. How the Service Operates
                </h2>
                <ol className="list-decimal pl-5 space-y-2 text-xs">
                  <li><strong>Booking Request:</strong> Customer selects package and inputs their Surat pickup address.</li>
                  <li><strong>Matching &amp; Advance:</strong> An available driver accepts the ride; customer confirms booking by paying the 30% advance via Razorpay Checkout.</li>
                  <li><strong>Arrival &amp; Walkaround:</strong> Driver arrives at your doorstep in Surat. Both inspect the vehicle exterior and capture 4 angle photos in the app.</li>
                  <li><strong>OTP Verification:</strong> Customer shares the 4-digit ride-start OTP from the app to initiate the ride session.</li>
                  <li><strong>Safe Journey:</strong> Driver operates your vehicle as per your instructions within the booked duration.</li>
                  <li><strong>Drop-Off &amp; Settlement:</strong> Vehicle is safely parked, final mileage logged, and the 70% balance is settled digitally.</li>
                </ol>
              </section>

              {/* Service Area */}
              <section id="sec-service-area" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  5. Launch Service Area (Surat)
                </h2>
                <p>
                  DriverConnect currently operates exclusively in <strong>Surat, Gujarat, India</strong>. All trips must originate from a pickup point located within Surat municipal boundaries:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#4B5563] pt-1">
                  <div className="p-2.5 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA]">Vesu &amp; VIP Road</div>
                  <div className="p-2.5 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA]">Piplod &amp; Dumas Road</div>
                  <div className="p-2.5 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA]">Adajan &amp; Pal</div>
                  <div className="p-2.5 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA]">Athwa Lines &amp; Ghod Dod</div>
                  <div className="p-2.5 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA]">Varachha &amp; Katargam</div>
                  <div className="p-2.5 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA]">City Light &amp; Althan</div>
                </div>
              </section>

              {/* Car Requirements */}
              <section id="sec-car-requirements" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  6. Vehicle Requirements for Customers
                </h2>
                <p>
                  To ensure safety for both customer and driver, cars submitted for driver service must fulfill the following mandatory criteria:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li>Valid Registration Certificate (RC) issued by an authorized RTO in India.</li>
                  <li>Active Comprehensive and Third-Party Motor Insurance policy in compliance with the Motor Vehicles Act, 1988.</li>
                  <li>Valid Pollution Under Control (PUC) certificate.</li>
                  <li>Operable safety equipment (functional seatbelts, headlights, wipers, horn, and spare tyre).</li>
                  <li>Sufficient fuel or electric battery charge for the intended journey.</li>
                </ul>
              </section>

              {/* Driver Vetting */}
              <section id="sec-driver-vetting" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  7. Driver Standards &amp; Verification
                </h2>
                <p>
                  Every driver partner on DriverConnect undergoes strict multi-stage onboarding:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Physical verification of Commercial or Private Driving Licence via Sarathi RTO database.</li>
                  <li>Permanent residential address verification and identity check (Masked Aadhaar).</li>
                  <li>Practical driving assessment and vehicle etiquette training.</li>
                  <li>Continuous feedback and rating review after every ride.</li>
                </ul>
              </section>

              <div className="pt-4 border-t border-[#E4E6EA]">
                <Link to="/pricing">
                  <Button variant="primary" size="md">
                    <span>View Pricing &amp; Book</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
