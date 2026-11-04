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
import { BUSINESS_DETAILS, REFUND_TERMS_SUMMARY } from '../content.ts';

interface RefundRuleRow {
  scenario: string;
  timing: string;
  refundPercentage: string;
  refundMode: string;
  turnaroundTime: string;
}

export const RefundPolicy: React.FC = () => {
  const tocItems: TocItem[] = [
    { id: 'sec-summary', label: '1. Policy Summary & Overview' },
    { id: 'sec-advance', label: '2. The 30% Booking Advance' },
    { id: 'sec-cancel-before-otp', label: '3. Cancellation Before Ride-Start OTP' },
    { id: 'sec-cancel-after-otp', label: '4. Cancellation After Ride-Start OTP' },
    { id: 'sec-platform-cancel', label: '5. Driver or Platform Cancellation' },
    { id: 'sec-wallet-rules', label: '6. DriverConnect Wallet Credit Rules' },
    { id: 'sec-disputes', label: '7. 48-Hour Dispute Filing Window' },
    { id: 'sec-chargebacks', label: '8. Payment Gateways & Chargeback Policy' },
    { id: 'sec-contact', label: '9. How to Request a Refund' },
  ];

  const rulesData: RefundRuleRow[] = [
    {
      scenario: 'Customer Cancellation (Before Ride-Start OTP)',
      timing: 'Any time before OTP is given to the driver',
      refundPercentage: '50% of the 30% Advance',
      refundMode: 'DriverConnect Wallet',
      turnaroundTime: 'Immediate (within 1 hour)',
    },
    {
      scenario: 'Customer Cancellation (After Ride-Start OTP)',
      timing: 'After OTP entry or during ride',
      refundPercentage: '0% (No refund)',
      refundMode: 'Not applicable',
      turnaroundTime: 'None',
    },
    {
      scenario: 'Driver No-Show or Cancellation',
      timing: 'Driver fails to arrive or cancels',
      refundPercentage: '100% Full Refund',
      refundMode: 'Original Payment Method (UPI / Card / Net banking)',
      turnaroundTime: '7 to 10 working days',
    },
    {
      scenario: 'DriverConnect Platform Cancellation',
      timing: 'System error or operational inability',
      refundPercentage: '100% Full Refund',
      refundMode: 'Original Payment Method',
      turnaroundTime: '7 to 10 working days',
    },
  ];

  const columns: Column<RefundRuleRow>[] = [
    { header: 'Cancellation Scenario', accessor: 'scenario', className: 'font-semibold text-[#1F2430]' },
    { header: 'Trigger Timing', accessor: 'timing' },
    {
      header: 'Refund Amount',
      accessor: (row) => <span className="font-bold text-[#2F6FED]">{row.refundPercentage}</span>,
    },
    { header: 'Refund Destination', accessor: 'refundMode' },
    { header: 'Crediting Timeline', accessor: 'turnaroundTime', className: 'text-xs text-[#6B7280]' },
  ];

  return (
    <>
      <SEO
        title="Refund & Cancellation Policy – DriverConnect Surat"
        description="Official Refund & Cancellation Policy for DriverConnect. Clear terms on 30% advance, 50% wallet credit before OTP, full refund within 7-10 working days on driver cancellation."
        canonicalPath="/refund-policy"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Refund & Cancellation Policy' }]} className="mb-6" />

          {/* Header */}
          <div className="border-b border-[#E4E6EA] pb-6 mb-8 max-w-[760px] lg:max-w-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Merchant Payment Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] mt-1 tracking-tight">
              Refund &amp; Cancellation Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] mt-3">
              <span><strong>Version:</strong> 1.2</span>
              <span>•</span>
              <span><strong>Last updated:</strong> November 2026</span>
              <span>•</span>
              <span><strong>Payment Partner:</strong> Razorpay</span>
              <span>•</span>
              <span><strong>Jurisdiction:</strong> Surat, Gujarat</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <TableOfContents items={tocItems} />
            </div>

            <div className="lg:col-span-8 max-w-[760px] space-y-10 text-sm text-[#4B5563] leading-relaxed">
              {/* Summary Table */}
              <section id="sec-summary" className="space-y-4 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  1. Policy Summary &amp; Overview
                </h2>
                <p>
                  At DriverConnect, we pride ourselves on absolute pricing transparency. When you book a verified driver for your vehicle in Surat, our system reserves that professional driver exclusively for your assigned time block. This policy defines the rights, responsibilities, and timelines for cancellations and refunds.
                </p>

                <Table
                  columns={columns}
                  data={rulesData}
                  keyExtractor={(row) => row.scenario}
                  caption="DriverConnect cancellation scenarios, refund percentages, and timelines"
                />
              </section>

              {/* The 30% Advance */}
              <section id="sec-advance" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  2. The 30% Booking Advance
                </h2>
                <p>
                  To prevent fraudulent bookings and ensure driver dispatch, a mandatory <strong>30% advance payment</strong> is charged upon booking confirmation via Razorpay Checkout. The remaining 70% balance is payable only after your ride has successfully concluded.
                </p>
                <div className="p-4 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] text-xs space-y-1">
                  <div><strong>Example (InCity 3h, ₹600):</strong> 30% advance = ₹180 payable online. ₹420 balance due at drop.</div>
                  <div><strong>Example (InCity 6h, ₹1,000):</strong> 30% advance = ₹300 payable online. ₹700 balance due at drop.</div>
                  <div><strong>Example (InCity 12h, ₹1,800):</strong> 30% advance = ₹540 payable online. ₹1,260 balance due at drop.</div>
                </div>
              </section>

              {/* Cancellation Before OTP */}
              <section id="sec-cancel-before-otp" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  3. Cancellation Before Ride-Start OTP
                </h2>
                <p>
                  If you need to cancel a confirmed booking prior to providing the secure ride-start OTP to the driver:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>50% Wallet Credit:</strong> Fifty percent (50%) of the paid 30% advance amount will be credited to your <strong>DriverConnect Wallet</strong>.</li>
                  <li><strong>Fair Compensation:</strong> The remaining 50% of the advance is retained as a nominal dispatch fee to compensate the driver for their travel time, fuel, and reservation commitment.</li>
                  <li><strong>Instant Processing:</strong> Wallet credits are deposited automatically into your in-app account within 1 hour of cancellation.</li>
                </ul>
              </section>

              {/* Cancellation After OTP */}
              <section id="sec-cancel-after-otp" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  4. Cancellation After Ride-Start OTP
                </h2>
                <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#FECDD3] text-xs text-[#7F1D1D] space-y-2">
                  <p className="font-semibold text-sm text-[#991B1B]">
                    Strict Zero-Refund Policy Post-OTP:
                  </p>
                  <p>
                    Once the Customer shares the ride-start OTP with the driver and ignition occurs, the service has officially commenced. <strong>No refund of the advance shall be issued</strong> if the customer chooses to terminate the ride prematurely or release the driver before the booked duration expires. The full scheduled package fare remains payable.
                  </p>
                </div>
              </section>

              {/* Driver or Platform Cancellation */}
              <section id="sec-platform-cancel" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  5. Driver or Platform Cancellation
                </h2>
                <p>
                  If a driver fails to arrive at your Surat pickup address, or if DriverConnect must cancel a booking due to emergency vehicle incompatibility, driver illness, or platform operational failure:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#4B5563]">
                  <li>You are entitled to a <strong>100% full refund</strong> of the entire advance amount paid.</li>
                  <li>The refund will be credited directly to your <strong>original payment method</strong> (original UPI ID, bank account, debit card, or credit card utilized during Razorpay checkout).</li>
                  <li>Under banking guidelines in India, the refund will reflect in your account within <strong>7 to 10 working days</strong> from the cancellation timestamp.</li>
                </ul>
              </section>

              {/* Wallet Rules */}
              <section id="sec-wallet-rules" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  6. DriverConnect Wallet Credit Rules
                </h2>
                <p>
                  Credits issued to the DriverConnect Wallet under this policy are subject to the following statutory terms:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Non-Withdrawable:</strong> Wallet credits cannot be cashed out, withdrawn into a bank account, or transferred to another user.</li>
                  <li><strong>Sole Usage:</strong> Wallet credits can be used strictly against advance payments for future driver bookings on DriverConnect.</li>
                  <li><strong>Validity:</strong> Wallet credits remain valid for 12 months from the date of issue.</li>
                </ul>
              </section>

              {/* Disputes */}
              <section id="sec-disputes" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  7. 48-Hour Dispute Filing Window
                </h2>
                <p>
                  If you believe a cancellation was recorded in error, or if a driver arrived significantly late or failed to complete service professionally, you must file a formal dispute within <strong>48 hours of the scheduled trip start time</strong>.
                </p>
                <p className="text-xs">
                  Disputes filed after the 48-hour window has elapsed cannot be verified against driver GPS telematics and will not be eligible for review or manual refund adjustment.
                </p>
              </section>

              {/* Chargebacks */}
              <section id="sec-chargebacks" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  8. Payment Gateways &amp; Chargeback Policy
                </h2>
                <p>
                  DriverConnect works directly with Razorpay and acquiring banking partners. If you experience an unexpected billing error, duplicate charge, or failed transaction where money was debited without booking confirmation, please contact our support desk immediately before contacting your issuing bank. Unverified chargebacks on completed rides will lead to immediate account suspension.
                </p>
              </section>

              {/* How to Request */}
              <section id="sec-contact" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  9. How to Request a Refund
                </h2>
                <p>
                  To request a refund review or report a trip issue in Surat:
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#E4E6EA] text-xs space-y-1.5">
                  <div><strong>Email:</strong> <a href={`mailto:${BUSINESS_DETAILS.supportEmail}`} className="text-[#2F6FED]">{BUSINESS_DETAILS.supportEmail}</a></div>
                  <div><strong>Required Information:</strong> Booking ID, registered mobile number, vehicle registration number, and clear description of reason for cancellation.</div>
                  <div><strong>Resolution Timeline:</strong> Refund queries are acknowledged within 24 hours and verified within 48 hours. Approved bank refunds process in 7 to 10 working days.</div>
                  <div><strong>Grievance Officer:</strong> {BUSINESS_DETAILS.grievanceOfficer.name} ({BUSINESS_DETAILS.grievanceOfficer.email})</div>
                  <div><strong>Office Address:</strong> {BUSINESS_DETAILS.registeredOffice}</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
