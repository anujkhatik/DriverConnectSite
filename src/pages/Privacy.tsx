/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { TableOfContents, TocItem } from '../components/ui/TableOfContents.tsx';
import { Table, Column } from '../components/ui/Table.tsx';
import { BUSINESS_DETAILS } from '../content.ts';

interface RetentionRow {
  dataType: string;
  purpose: string;
  retentionPeriod: string;
  legalBasis: string;
}

export const Privacy: React.FC = () => {
  const tocItems: TocItem[] = [
    { id: 'sec-overview', label: '1. Overview & DPDP Act 2023 Compliance' },
    { id: 'sec-data-collected', label: '2. Personal Data We Collect' },
    { id: 'sec-aadhaar', label: '3. Aadhaar & Government ID Handling' },
    { id: 'sec-payment-razorpay', label: '4. Payment Data & Razorpay Processing' },
    { id: 'sec-purposes', label: '5. Specific Purposes of Processing' },
    { id: 'sec-location-rules', label: '6. Strict Location Data Rules' },
    { id: 'sec-shared-trips', label: '7. Shared Trip Tracking Links' },
    { id: 'sec-retention-table', label: '8. Data Retention Schedule' },
    { id: 'sec-data-sharing', label: '9. Disclosure & Third-Party Sharing' },
    { id: 'sec-security', label: '10. Security Safeguards & Encryption' },
    { id: 'sec-user-rights', label: '11. Your Rights Under DPDP Act 2023' },
    { id: 'sec-children', label: '12. Protection of Children\'s Data' },
    { id: 'sec-changes', label: '13. Amendments to this Policy' },
    { id: 'sec-grievance', label: '14. Grievance Officer & Contact' },
  ];

  const retentionData: RetentionRow[] = [
    {
      dataType: 'Account Profile (Name, Phone, Email)',
      purpose: 'User authentication & communication',
      retentionPeriod: 'Duration of active account + 180 days post-deletion request',
      legalBasis: 'Consent & Contract Fulfillment',
    },
    {
      dataType: 'GPS Location Data (Rider & Driver)',
      purpose: 'Live navigation, tracking & trip verification',
      retentionPeriod: '90 days maximum from trip completion date, then permanently purged',
      legalBasis: 'Legitimate Safety & Contractual Fulfillment',
    },
    {
      dataType: 'Vehicle Inspection Photos',
      purpose: 'Damage verification & dispute resolution',
      retentionPeriod: '180 days following ride completion',
      legalBasis: 'Dispute Prevention & Resolution',
    },
    {
      dataType: 'Billing & Transaction Records',
      purpose: 'Statutory accounting, tax & Razorpay reconciliation',
      retentionPeriod: '7 years as mandated by Indian financial & tax statutes',
      legalBasis: 'Legal & Regulatory Obligation',
    },
    {
      dataType: 'Driver KYC (Masked Aadhaar, DL)',
      purpose: 'Verification, safety vetting & audit',
      retentionPeriod: 'Duration of driver engagement + 3 years',
      legalBasis: 'Legal Due Diligence & Transport Safety',
    },
  ];

  const retentionColumns: Column<RetentionRow>[] = [
    { header: 'Data Category', accessor: 'dataType', className: 'font-semibold text-[#1F2430]' },
    { header: 'Processing Purpose', accessor: 'purpose' },
    {
      header: 'Retention Duration',
      accessor: (row) => <span className="font-semibold text-[#2F6FED]">{row.retentionPeriod}</span>,
    },
    { header: 'Legal Grounds', accessor: 'legalBasis', className: 'text-xs text-[#6B7280]' },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy – DriverConnect Surat"
        description="DriverConnect Privacy Policy aligned with India's Digital Personal Data Protection Act, 2023 (DPDP Act). Learn how we handle location, Razorpay payments, and masked Aadhaar."
        canonicalPath="/privacy"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} className="mb-6" />

          {/* Header */}
          <div className="border-b border-[#E4E6EA] pb-6 mb-8 max-w-[760px] lg:max-w-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Data Protection &amp; Privacy Notice
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] mt-1 tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] mt-3">
              <span><strong>Version:</strong> 1.2</span>
              <span>•</span>
              <span><strong>Last updated:</strong> November 2026</span>
              <span>•</span>
              <span><strong>Framework:</strong> Digital Personal Data Protection Act, 2023 (DPDP Act, India)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <TableOfContents items={tocItems} />
            </div>

            <div className="lg:col-span-8 max-w-[760px] space-y-10 text-sm text-[#4B5563] leading-relaxed">
              {/* Overview */}
              <section id="sec-overview" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  1. Overview &amp; DPDP Act 2023 Compliance
                </h2>
                <p>
                  DriverConnect (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating from registered office at <strong>{BUSINESS_DETAILS.registeredOffice}</strong>, is deeply committed to protecting the privacy, confidentiality, and security of our users&apos; personal data.
                </p>
                <p>
                  This Privacy Policy is formulated in strict adherence to the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act, 2023)</strong> and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. It describes how DriverConnect acts as a Data Fiduciary in processing personal data when you use our web platform, mobile applications, and driver booking services in Surat, Gujarat.
                </p>
              </section>

              {/* Data Collected */}
              <section id="sec-data-collected" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  2. Personal Data We Collect
                </h2>
                <p>We only collect personal data strictly necessary to deliver reliable driver services:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#4B5563]">
                  <li><strong>Account Data:</strong> Full name, verified mobile phone number (authenticated via OTP), and email address.</li>
                  <li><strong>Vehicle Information:</strong> Motor vehicle make, model, registration number, transmission type (manual/automatic), and vehicle fuel type.</li>
                  <li><strong>Booking Details:</strong> Pickup address in Surat, trip duration, outstation destination, ride scheduled timestamp, and ride completion notes.</li>
                  <li><strong>Driver Partner Data:</strong> Driving Licence number, RTO verification records, residential address verification, profile photograph, and bank account details for direct payout disbursements.</li>
                  <li><strong>Pre-Ride/Post-Ride Inspection Media:</strong> Exterior vehicle condition photographs captured before and after the booking.</li>
                </ul>
              </section>

              {/* Aadhaar Handling */}
              <section id="sec-aadhaar" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  3. Aadhaar &amp; Government ID Handling
                </h2>
                <div className="p-4 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] text-xs space-y-2">
                  <p className="font-semibold text-[#1F2430]">
                    Strict Aadhaar Privacy Rule:
                  </p>
                  <p>
                    Where driver verification utilizes Aadhaar for identity verification, DriverConnect only ever accepts or inspects <strong>Masked Aadhaar</strong> (where only the last 4 digits are visible). Full 12-digit Aadhaar numbers are never collected, stored, decrypted, or retained on our databases. Unmasked Aadhaar numbers are immediately rejected by our compliance systems.
                  </p>
                </div>
              </section>

              {/* Payment Data & Razorpay */}
              <section id="sec-payment-razorpay" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  4. Payment Data &amp; Razorpay Processing
                </h2>
                <p>
                  All digital payment transactions for advance bookings and ride settlements are processed directly by our RBI-licensed payment gateway partner, <strong>Razorpay (Razorpay Software Private Limited)</strong>.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#4B5563]">
                  <li>DriverConnect <strong>never captures, handles, or stores</strong> complete debit or credit card numbers, CVVs, card expiry dates, or UPI MPINs on our application servers.</li>
                  <li>Razorpay operates in full compliance with Payment Card Industry Data Security Standards (PCI-DSS Level 1) and RBI Tokenisation guidelines.</li>
                  <li>DriverConnect only receives tokenized transaction confirmation references, transaction IDs, payment statuses, and invoice timestamps necessary to reconcile your 30% advance or balance payment.</li>
                </ul>
              </section>

              {/* Purposes */}
              <section id="sec-purposes" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  5. Specific Purposes of Processing
                </h2>
                <p>We process your personal data solely for lawful, specified purposes:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Facilitating seamless matching between your vehicle and an available verified driver.</li>
                  <li>Facilitating the collection of the 30% booking advance and balance payment settlement.</li>
                  <li>Enabling customer and driver safety verification, including the 4-digit ride-start OTP check.</li>
                  <li>Providing real-time route monitoring, live trip sharing, and SOS response during trips.</li>
                  <li>Resolving customer grievances, refund queries, and vehicle damage disputes.</li>
                </ul>
              </section>

              {/* Location Rules */}
              <section id="sec-location-rules" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  6. Strict Location Data Rules
                </h2>
                <div className="space-y-2 text-xs">
                  <p>We adhere to strict purpose limitation regarding GPS telemetry:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Customer / Car Owner Location:</strong> Collected <em>only during an active booking session</em> between pickup and final destination drop-off. Customer location tracking immediately ceases once the trip is completed.</li>
                    <li><strong>Driver Background Location:</strong> Collected exclusively when the driver is toggled &quot;Online&quot; in the Driver App to accept nearby booking requests or while on an active booked ride. Background location is never accessed when the driver is toggled &quot;Offline&quot;.</li>
                    <li><strong>Strict 90-Day Retention:</strong> All granular GPS telemetry coordinates are permanently deleted from our live servers after exactly <strong>90 days</strong> from the trip completion date.</li>
                  </ul>
                </div>
              </section>

              {/* Shared Trip Links */}
              <section id="sec-shared-trips" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  7. Shared Trip Tracking Links
                </h2>
                <p>
                  DriverConnect includes a built-in safety feature permitting Customers to generate an encrypted web tracking link that can be sent via WhatsApp or SMS to emergency contacts and family members.
                </p>
                <p className="text-xs">
                  Shared trip tracking links expire automatically 2 hours following ride completion. Personal customer details such as phone numbers are stripped from shared links, revealing only the active car location and destination.
                </p>
              </section>

              {/* Data Retention Schedule Table */}
              <section id="sec-retention-table" className="space-y-4 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  8. Data Retention Schedule
                </h2>
                <p className="text-xs text-[#6B7280]">
                  In accordance with the principle of storage limitation under the DPDP Act 2023, personal data is retained only for as long as necessary:
                </p>
                <Table
                  columns={retentionColumns}
                  data={retentionData}
                  keyExtractor={(row) => row.dataType}
                  caption="Data retention periods and statutory retention schedule"
                />
              </section>

              {/* Sharing */}
              <section id="sec-data-sharing" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  9. Disclosure &amp; Third-Party Sharing
                </h2>
                <p>
                  DriverConnect does not sell, rent, or commercialize your personal information to marketing brokers. We share personal data only in the following limited circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>With Assigned Drivers:</strong> First name, vehicle pickup address, and vehicle model are shared with your assigned driver. <em>Phone numbers are never directly exposed</em>; communication is routed via masked virtual calling.</li>
                  <li><strong>With Razorpay:</strong> Transaction amount, order ID, and customer name for payment processing.</li>
                  <li><strong>Statutory &amp; Law Enforcement Compliance:</strong> When required under written orders from competent judicial courts or Indian law enforcement agencies in Surat under Section 69 of the Information Technology Act.</li>
                </ul>
              </section>

              {/* Security */}
              <section id="sec-security" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  10. Security Safeguards &amp; Encryption
                </h2>
                <p>
                  We implement robust technical and organizational security controls, including TLS 1.3 / HTTPS encryption in transit, AES-256 database encryption at rest, multi-factor administrative access, and regular vulnerability audits.
                </p>
              </section>

              {/* User Rights */}
              <section id="sec-user-rights" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  11. Your Rights Under DPDP Act 2023
                </h2>
                <p>As a Data Principal under Indian law, you possess enforceable rights:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#4B5563]">
                  <li><strong>Right to Access:</strong> You may request a summary of the personal data we hold about you and the processing activities undertaken.</li>
                  <li><strong>Right to Correction &amp; Erasure:</strong> You can update inaccurate records or request deletion of your account and personal data (see our <a href="/delete-account" className="text-[#2F6FED] underline">Delete Account Policy</a>).</li>
                  <li><strong>Right to Grievance Redressal:</strong> You have the right to register complaints regarding personal data handling directly with our Grievance Officer.</li>
                  <li><strong>Right to Nominate:</strong> You may designate an individual who, in the event of death or incapacity, shall exercise your data rights.</li>
                </ul>
              </section>

              {/* Children */}
              <section id="sec-children" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  12. Protection of Children&apos;s Data
                </h2>
                <p>
                  DriverConnect is intended exclusively for individuals aged 18 years and above who are legal car owners or designated authorized drivers. We do not knowingly process personal data of minors.
                </p>
              </section>

              {/* Changes */}
              <section id="sec-changes" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  13. Amendments to this Policy
                </h2>
                <p>
                  We may revise this Privacy Policy periodically to reflect technological advances, service updates, or amendments to Indian privacy regulations. When significant changes occur, we will notify registered users via in-app banner or SMS.
                </p>
              </section>

              {/* Grievance */}
              <section id="sec-grievance" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  14. Grievance Officer &amp; Contact
                </h2>
                <div className="p-4 rounded-xl bg-white border border-[#E4E6EA] text-xs space-y-1">
                  <div><strong>Grievance Officer:</strong> {BUSINESS_DETAILS.grievanceOfficer.name} ({BUSINESS_DETAILS.grievanceOfficer.designation})</div>
                  <div><strong>Direct Privacy Email:</strong> <a href={`mailto:${BUSINESS_DETAILS.grievanceOfficer.email}`} className="text-[#2F6FED]">{BUSINESS_DETAILS.grievanceOfficer.email}</a></div>
                  <div><strong>General Support Email:</strong> <a href={`mailto:${BUSINESS_DETAILS.supportEmail}`} className="text-[#2F6FED]">{BUSINESS_DETAILS.supportEmail}</a></div>
                  <div><strong>Office Address:</strong> {BUSINESS_DETAILS.registeredOffice}</div>
                  <div><strong>Court Jurisdiction:</strong> {BUSINESS_DETAILS.courtJurisdiction}, Gujarat, India</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
