/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { TableOfContents, TocItem } from '../components/ui/TableOfContents.tsx';
import { Card } from '../components/ui/Card.tsx';
import { BUSINESS_DETAILS } from '../content.ts';

export const DriverTerms: React.FC = () => {
  const tocItems: TocItem[] = [
    { id: 'point-1', label: '1. Independent Contractor Status' },
    { id: 'point-2', label: '2. Eligibility & Documentation' },
    { id: 'point-3', label: '3. Accepting Rides & Availability' },
    { id: 'point-4', label: '4. Driver Conduct & Professional Standards' },
    { id: 'point-5', label: '5. Mandatory Vehicle Inspection' },
    { id: 'point-6', label: '6. Cash Limits & Fare Collection' },
    { id: 'point-7', label: '7. Payouts & Commission Structure' },
    { id: 'point-8', label: '8. Tax Obligations (TDS & Income Tax)' },
    { id: 'point-9', label: '9. Motor Insurance & Liability' },
    { id: 'point-10', label: '10. Background Location Consent' },
    { id: 'point-11', label: '11. Safety Protocols & SOS Response' },
    { id: 'point-12', label: '12. Account Suspension & Termination' },
  ];

  return (
    <>
      <SEO
        title="Driver Terms & Conditions – DriverConnect Surat"
        description="Official 12-point driver agreement for DriverConnect driver partners in Surat, Gujarat. Independent contractor relationship, payouts, vehicle inspection, and conduct guidelines."
        canonicalPath="/driver-terms"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Driver Terms' }]} className="mb-6" />

          {/* Header */}
          <div className="border-b border-[#E4E6EA] pb-6 mb-8 max-w-[760px] lg:max-w-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A9754A]">
              Driver Partner Framework
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] mt-1 tracking-tight">
              12-Point Driver Terms &amp; Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] mt-3">
              <span><strong>Version:</strong> 1.2</span>
              <span>•</span>
              <span><strong>Last updated:</strong> November 2026</span>
              <span>•</span>
              <span><strong>Jurisdiction:</strong> Surat, Gujarat, India</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <TableOfContents items={tocItems} />
            </div>

            <div className="lg:col-span-8 max-w-[760px] space-y-10 text-sm text-[#4B5563] leading-relaxed">
              {/* Point 1 */}
              <section id="point-1" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  1. Independent Contractor Status
                </h2>
                <p>
                  The Driver Partner acknowledges and agrees that their relationship with DriverConnect is strictly that of an <strong>independent service contractor</strong> operating on a principal-to-principal basis. Nothing in this agreement creates an employer-employee, master-servant, joint venture, or agency relationship. The Driver Partner is free to accept or reject booking leads, determine their work schedule, and provide driver services to other platforms or private parties.
                </p>
              </section>

              {/* Point 2 */}
              <section id="point-2" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  2. Eligibility &amp; Documentation
                </h2>
                <p>
                  To register and maintain an active account on DriverConnect, the Driver Partner must:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Be at least 21 years of age and hold a valid, non-expired Commercial/Transport or Private Driving Licence (LMV) for at least 3 continuous years.</li>
                  <li>Provide proof of current permanent residence in or around Surat, Gujarat.</li>
                  <li>Submit identity documentation via Masked Aadhaar (only last 4 digits visible) and PAN card.</li>
                  <li>Have zero record of violent felony convictions, motor vehicle manslaughter, or commercial driving disqualification.</li>
                </ul>
              </section>

              {/* Point 3 */}
              <section id="point-3" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  3. Accepting Rides &amp; Availability
                </h2>
                <p>
                  Driver Partners control their own working schedule by toggling &quot;Online&quot; or &quot;Offline&quot; in the DriverConnect Driver App. When Online, the Driver Partner will receive trip leads originating in Surat based on GPS proximity.
                </p>
                <p className="text-xs">
                  Once a trip lead is accepted, the Driver Partner is obligated to arrive at the specified customer pickup point on time. Repeated cancellations after acceptance damage system reliability and may trigger automated lead throttling.
                </p>
              </section>

              {/* Point 4 */}
              <section id="point-4" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  4. Driver Conduct &amp; Professional Standards
                </h2>
                <p>
                  The Driver Partner agrees to adhere to the highest standard of road courtesy and vehicle respect:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Zero Tolerance Substance Abuse:</strong> Absolute ban on driving under the influence of alcohol, drugs, betel nuts (gutkha/paan), or smoking inside or near the customer vehicle.</li>
                  <li><strong>Traffic Laws:</strong> Strictly obey all Indian traffic rules, traffic signal indicators, lane disciplines, and statutory speed limits under the Motor Vehicles Act, 1988.</li>
                  <li><strong>Customer Privacy:</strong> Do not solicit personal phone numbers, engage in inappropriate conversation, or photograph customer vehicle interiors without consent.</li>
                  <li><strong>Attire:</strong> Maintain clean, professional, and presentable attire throughout the booking duration.</li>
                </ul>
              </section>

              {/* Point 5 */}
              <section id="point-5" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  5. Mandatory Vehicle Inspection
                </h2>
                <p>
                  To protect both customer and driver from unfair liability, the Driver Partner must perform a <strong>mandatory 360-degree digital vehicle inspection</strong> using the Driver App before starting the engine and immediately upon ending the trip:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Photograph all 4 exterior angles of the car (front, rear, left, right).</li>
                  <li>Log any pre-existing dents, deep scratches, cracked mirrors, or warning lights on the dashboard.</li>
                  <li>Verify odometer reading and fuel level before asking the customer for the ride-start OTP.</li>
                </ul>
              </section>

              {/* Point 6 */}
              <section id="point-6" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  6. Cash Limits &amp; Fare Collection
                </h2>
                <p>
                  DriverConnect operates primarily on digital advance payments via Razorpay (UPI, cards, net banking). When collecting the remaining 70% balance:
                </p>
                <p className="text-xs">
                  Customers are encouraged to settle digitally via the app QR code. Where a customer pays the 70% balance in physical cash, the Driver Partner must immediately enter the exact cash amount received into the Driver App. Driver Partners must never demand fares exceeding the final amount displayed on the app.
                </p>
              </section>

              {/* Point 7 */}
              <section id="point-7" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  7. Payouts &amp; Commission Structure
                </h2>
                <p>
                  DriverConnect calculates driver earnings on a per-trip package basis less the agreed platform facilitation commission:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Driver earnings are disbursed directly via NEFT/IMPS to the Driver Partner&apos;s verified bank account in India.</li>
                  <li>Standard weekly payout cycles occur every Tuesday for trips concluded in the previous week.</li>
                  <li>A complete itemized digital payout statement is generated and accessible within the Driver App.</li>
                </ul>
              </section>

              {/* Point 8 */}
              <section id="point-8" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  8. Tax Obligations (TDS &amp; Income Tax)
                </h2>
                <p>
                  As an independent contractor, the Driver Partner is solely responsible for declaring their income and fulfilling applicable direct and indirect tax liabilities:
                </p>
                <p className="text-xs">
                  DriverConnect will withhold Tax Deducted at Source (TDS) under Section 194C or 194-O of the Income Tax Act, 1961, as applicable, against driver payouts. Driver Partners will receive an annual Form 16A reflecting all withheld tax credits.
                </p>
              </section>

              {/* Point 9 */}
              <section id="point-9" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  9. Motor Insurance &amp; Liability
                </h2>
                <p>
                  The motor car operated by the Driver Partner remains covered by the Customer&apos;s comprehensive motor insurance policy under Indian law. However, if an accident or property damage is established by an official police investigation or RTO report to be the direct result of gross driver negligence, reckless driving, or intoxication, the Driver Partner shall bear personal and legal liability under Section 279 of the Indian Penal Code and the Motor Vehicles Act.
                </p>
              </section>

              {/* Point 10 */}
              <section id="point-10" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  10. Background Location Consent
                </h2>
                <p>
                  By registering on the DriverConnect Driver App, the Driver Partner gives explicit, informed consent for the continuous collection and transmission of GPS geolocation data while the app is toggled &quot;Online&quot; or while engaged on an active booking.
                </p>
                <p className="text-xs">
                  Location data is utilized to match nearby ride opportunities, track route progress, verify trip completion, and ensure customer safety. Telematics data is purged after 90 days.
                </p>
              </section>

              {/* Point 11 */}
              <section id="point-11" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  11. Safety Protocols &amp; SOS Response
                </h2>
                <p>
                  Driver safety is equally paramount. The Driver App features a dedicated Emergency SOS button that connects the driver immediately to the DriverConnect emergency dispatch team and local Surat police control room. In the event of customer misconduct, threats, or illegal requests, drivers are empowered to stop the car in a safe public place and contact platform support.
                </p>
              </section>

              {/* Point 12 */}
              <section id="point-12" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  12. Account Suspension &amp; Termination
                </h2>
                <p>
                  DriverConnect reserves the right to immediately deactivate or permanently delist any Driver Partner account upon:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Driving Licence expiration, suspension, or cancellation by RTO authorities.</li>
                  <li>Customer rating falling below 4.5 over 25 consecutive completed rides.</li>
                  <li>Any violation of zero tolerance alcohol, drug, or reckless driving rules.</li>
                  <li>Offline fare manipulation or harassment of passengers.</li>
                </ul>

                <div className="p-4 rounded-xl bg-white border border-[#E4E6EA] text-xs space-y-1 mt-4">
                  <div><strong>Registered Office:</strong> {BUSINESS_DETAILS.registeredOffice}</div>
                  <div><strong>Driver Support Email:</strong> <a href={`mailto:${BUSINESS_DETAILS.supportEmail}`} className="text-[#2F6FED]">{BUSINESS_DETAILS.supportEmail}</a></div>
                  <div><strong>Legal Jurisdiction:</strong> Civil courts in Surat, Gujarat, India.</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
