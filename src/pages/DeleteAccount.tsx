/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { TableOfContents, TocItem } from '../components/ui/TableOfContents.tsx';
import { Table, Column } from '../components/ui/Table.tsx';
import { Card } from '../components/ui/Card.tsx';
import { BUSINESS_DETAILS } from '../content.ts';

interface DataFateRow {
  dataItem: string;
  fate: string;
  retentionReason: string;
}

export const DeleteAccount: React.FC = () => {
  const tocItems: TocItem[] = [
    { id: 'sec-right-to-erasure', label: '1. Your Right to Account Deletion' },
    { id: 'sec-app-steps', label: '2. Step-by-Step in the App' },
    { id: 'sec-grace-period', label: '3. 30-Day Grace & Recovery Window' },
    { id: 'sec-what-is-deleted', label: '4. What Data is Permanently Deleted' },
    { id: 'sec-what-is-retained', label: '5. What Data is Retained & Why' },
    { id: 'sec-fallback-email', label: '6. Fallback Email Request Process' },
    { id: 'sec-driver-accounts', label: '7. Driver Partner Account Closure' },
  ];

  const dataFateData: DataFateRow[] = [
    {
      dataItem: 'Profile Information (Name, phone, saved addresses, avatar)',
      fate: 'Permanently Deleted',
      retentionReason: 'Erased from active operational databases at day 30.',
    },
    {
      dataItem: 'DriverConnect Wallet Balance',
      fate: 'Forfeited & Closed',
      retentionReason: 'Unused promotional or refund wallet credits are voided upon closure.',
    },
    {
      dataItem: 'Live & Historical GPS Telematics',
      fate: 'Purged',
      retentionReason: 'Deleted within standard 90-day retention schedule.',
    },
    {
      dataItem: 'Razorpay Payment Transaction Logs',
      fate: 'Retained for 7 Years',
      retentionReason: 'Statutory compliance under Indian tax and financial reporting laws.',
    },
    {
      dataItem: 'Pre/Post Ride Inspection Photos',
      fate: 'Retained for 180 Days',
      retentionReason: 'Vehicle damage dispute protection and insurance defense.',
    },
  ];

  const columns: Column<DataFateRow>[] = [
    { header: 'Data Category', accessor: 'dataItem', className: 'font-semibold text-[#1F2430]' },
    {
      header: 'Action Taken',
      accessor: (row) => (
        <span
          className={`font-semibold text-xs px-2.5 py-0.5 rounded-full ${
            row.fate.includes('Deleted') || row.fate.includes('Purged')
              ? 'bg-[#FDF2F2] text-[#E5484D]'
              : 'bg-[#FAFAFB] text-[#4B5563] border border-[#E4E6EA]'
          }`}
        >
          {row.fate}
        </span>
      ),
    },
    { header: 'Statutory / Operational Rationale', accessor: 'retentionReason', className: 'text-xs text-[#6B7280]' },
  ];

  return (
    <>
      <SEO
        title="Delete Account & Data Erasure – DriverConnect Surat"
        description="Learn how to delete your DriverConnect account. Step-by-step app instructions, 30-day grace period, data erasure details, and email request process."
        canonicalPath="/delete-account"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Delete Account' }]} className="mb-6" />

          {/* Header */}
          <div className="border-b border-[#E4E6EA] pb-6 mb-8 max-w-[760px] lg:max-w-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Data Privacy &amp; User Control
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] mt-1 tracking-tight">
              Delete Account &amp; Data Erasure Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] mt-3">
              <span><strong>Version:</strong> 1.2</span>
              <span>•</span>
              <span><strong>Last updated:</strong> November 2026</span>
              <span>•</span>
              <span><strong>DPDP Act Compliance:</strong> Right to Erasure</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <TableOfContents items={tocItems} />
            </div>

            <div className="lg:col-span-8 max-w-[760px] space-y-10 text-sm text-[#4B5563] leading-relaxed">
              {/* Right to Erasure */}
              <section id="sec-right-to-erasure" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  1. Your Right to Account Deletion
                </h2>
                <p>
                  At DriverConnect, you maintain full sovereignty over your personal profile. In accordance with Section 12 of India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, you have the statutory right to request the deletion of your account and erasure of your personal data when it is no longer necessary for the purpose for which it was processed.
                </p>
              </section>

              {/* App Steps */}
              <section id="sec-app-steps" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  2. Step-by-Step Instructions in the App
                </h2>
                <p>You can initiate instant account deletion directly inside the DriverConnect mobile app:</p>
                <div className="p-5 rounded-xl bg-white border border-[#E4E6EA] space-y-3 text-xs">
                  <ol className="list-decimal pl-4 space-y-2 text-[#4B5563]">
                    <li>Open the <strong>DriverConnect App</strong> on your Android or iOS device.</li>
                    <li>Tap the <strong>Profile / Account</strong> tab at the bottom right.</li>
                    <li>Select <strong>Settings &amp; Privacy</strong>.</li>
                    <li>Scroll to the danger zone and tap <strong>Delete My Account</strong>.</li>
                    <li>Review the summary of data erasure and confirm by entering the verification OTP sent to your registered mobile number.</li>
                    <li>Your account enters the <strong>30-Day Grace Period</strong> immediately.</li>
                  </ol>
                </div>
              </section>

              {/* Grace Period */}
              <section id="sec-grace-period" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  3. 30-Day Grace &amp; Recovery Window
                </h2>
                <div className="p-4 rounded-xl bg-[#EAF2FF] border border-[#BFDBFE] text-xs space-y-2">
                  <strong className="text-sm font-semibold text-[#1F2430] block">
                    How the 30-Day Grace Period Works:
                  </strong>
                  <p>
                    Upon submitting a deletion request, your account is immediately deactivated and hidden from public search, driver matching, and promotional alerts.
                  </p>
                  <p>
                    We hold your data in a de-indexed state for <strong>30 days</strong>. If you submitted the request accidentally, you can reactivate your account at any time within this 30-day window by simply logging back into the app using your verified mobile number and OTP.
                  </p>
                  <p>
                    On Day 31, if you have not logged in, the deletion schedule triggers permanently and irreversible data erasure takes place.
                  </p>
                </div>
              </section>

              {/* What is Deleted */}
              <section id="sec-what-is-deleted" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  4. What Data is Permanently Deleted
                </h2>
                <p>When the 30-day grace period concludes, the following items are permanently scrubbed:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Your user profile (full name, phone number, email address, profile picture).</li>
                  <li>Saved car models, registration numbers, and home/work pickup addresses in Surat.</li>
                  <li>Customer feedback, driver ratings, and in-app chat transcripts.</li>
                  <li>Any remaining DriverConnect Wallet promotional or refund balance (non-refundable upon deletion).</li>
                </ul>
              </section>

              {/* What is Retained */}
              <section id="sec-what-is-retained" className="space-y-4 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  5. What Data is Retained &amp; Why
                </h2>
                <p className="text-xs text-[#6B7280]">
                  Under Indian law, certain records must be retained for statutory and legal defense reasons:
                </p>
                <Table
                  columns={columns}
                  data={dataFateData}
                  keyExtractor={(row) => row.dataItem}
                  caption="Data retention and erasure schedule following account deletion"
                />
              </section>

              {/* Fallback Email Request */}
              <section id="sec-fallback-email" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  6. Fallback Email Request Process
                </h2>
                <p>
                  If you have uninstalled the app or are unable to access your mobile device, you can submit an official account deletion request via email:
                </p>
                <div className="p-5 rounded-xl bg-white border border-[#E4E6EA] text-xs space-y-2">
                  <div>
                    <strong>Recipient Email:</strong>{' '}
                    <a href={`mailto:${BUSINESS_DETAILS.supportEmail}`} className="text-[#2F6FED]">
                      {BUSINESS_DETAILS.supportEmail}
                    </a>
                  </div>
                  <div>
                    <strong>Subject Line:</strong> &quot;Account Deletion Request - [Your Registered Mobile Number]&quot;
                  </div>
                  <div>
                    <strong>Email Body:</strong> State your full name, registered mobile number, and vehicle registration number associated with the account.
                  </div>
                  <div>
                    <strong>Verification Process:</strong> For your security, our Surat support desk will send a confirmation code via SMS to your registered phone number. Upon receipt of your confirmation, your account deletion is queued immediately.
                  </div>
                </div>
              </section>

              {/* Driver Partner Closure */}
              <section id="sec-driver-accounts" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  7. Driver Partner Account Closure
                </h2>
                <p>
                  Driver partners requesting account de-registration must ensure that all pending ride settlements, bank payouts, and vehicle inspection queries have been resolved. KYC documents (Driving Licence and Masked Aadhaar) are retained for 3 years following de-registration to satisfy Motor Vehicles regulatory auditing.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
