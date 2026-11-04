/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Info,
  Calendar,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { Table, Column } from '../components/ui/Table.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Card } from '../components/ui/Card.tsx';
import {
  INCITY_PACKAGES,
  OUTSTATION_PRICING,
  PRICING_PAYMENT_TERMS,
} from '../content.ts';
import { calculateAdvancePayment, calculateOutstationFare } from '../utils/pricing.ts';

interface PricingRow {
  service: string;
  duration: string;
  price: string;
  advance: string;
  balance: string;
  notes: string;
}

export const Pricing: React.FC = () => {
  // Interactive Fare Calculator State
  const [calcType, setCalcType] = useState<'incity' | 'outstation'>('incity');
  const [selectedHours, setSelectedHours] = useState<number>(3);
  const [outstationDays, setOutstationDays] = useState<number>(1);
  const [dropInOtherCity, setDropInOtherCity] = useState<boolean>(false);

  // Table Data
  const pricingData: PricingRow[] = [
    {
      service: 'InCity Hourly',
      duration: '3 Hours',
      price: '₹600',
      advance: '₹180 (30%)',
      balance: '₹420 (70%)',
      notes: 'Local errands, shopping, clinic visits',
    },
    {
      service: 'InCity Hourly',
      duration: '6 Hours',
      price: '₹1,000',
      advance: '₹300 (30%)',
      balance: '₹700 (70%)',
      notes: 'Events, office meetings, family visits',
    },
    {
      service: 'InCity Hourly',
      duration: '12 Hours',
      price: '₹1,800',
      advance: '₹540 (30%)',
      balance: '₹1,260 (70%)',
      notes: 'Full day continuous city availability',
    },
    {
      service: 'OutStation Daily',
      duration: 'Day 1',
      price: '₹2,200',
      advance: '₹660 (30%)',
      balance: '₹1,540 (70%)',
      notes: 'Round-trip intercity highway travel',
    },
    {
      service: 'OutStation Daily',
      duration: 'Each extra day',
      price: 'As shown in the app at booking',
      advance: '30% of quoted fare',
      balance: '70% on completion',
      notes: 'Multi-day outstation bookings',
    },
    {
      service: 'OutStation One-Way Drop',
      duration: 'Drop in another city',
      price: '+₹500 flat',
      advance: '+₹150 (30%)',
      balance: '+₹350 (70%)',
      notes: 'Driver return travel fee to Surat',
    },
  ];

  const columns: Column<PricingRow>[] = [
    { header: 'Service Category', accessor: 'service', className: 'font-semibold text-[#1F2430]' },
    { header: 'Duration / Type', accessor: 'duration' },
    {
      header: 'Total Price (INR)',
      accessor: (row) => <span className="font-bold text-[#1F2430]">{row.price}</span>,
    },
    {
      header: '30% Advance (at Booking)',
      accessor: (row) => <span className="text-[#2F6FED] font-medium">{row.advance}</span>,
    },
    {
      header: '70% Balance (at Drop)',
      accessor: (row) => <span className="text-[#4B5563]">{row.balance}</span>,
    },
    { header: 'Typical Use', accessor: 'notes', className: 'text-xs text-[#6B7280]' },
  ];

  // Live Calculator Calculation
  const incitySelectedPackage =
    INCITY_PACKAGES.find((p) => p.durationHours === selectedHours) || INCITY_PACKAGES[0];
  const incityCalculation = calculateAdvancePayment(incitySelectedPackage.price);

  const outstationCalculation = calculateOutstationFare(outstationDays, dropInOtherCity);

  return (
    <>
      <SEO
        title="Pricing – DriverConnect Transparent Rates in Surat"
        description="Transparent driver booking rates in Surat: InCity 3h ₹600, 6h ₹1,000, 12h ₹1,800. OutStation Day 1 ₹2,200. 30% advance, balance at drop. No hidden fees."
        canonicalPath="/pricing"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: 'Pricing' }]} />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Transparent Pricing
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight">
              Simple, upfront rates. No surge.
            </h1>
            <p className="text-[#6B7280] text-base">
              Know your exact fare before your driver arrives. Pay a 30% advance to confirm, and the balance upon completion.
            </p>
          </div>

          {/* Mandatory Razorpay Pricing Notice */}
          <div className="p-4 rounded-xl bg-[#EAF2FF] border border-[#BFDBFE] flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2.5 text-xs text-[#1F2430]">
              <Info className="w-4 h-4 text-[#2F6FED] shrink-0" />
              <span className="font-semibold">{PRICING_PAYMENT_TERMS.notice}</span>
            </div>
            <div className="text-xs font-medium text-[#2F6FED]">
              Currency: {PRICING_PAYMENT_TERMS.currency}
            </div>
          </div>

          {/* Pricing Table */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#1F2430]">
              DriverConnect Fare Schedule
            </h2>
            <Table
              columns={columns}
              data={pricingData}
              keyExtractor={(row, idx) => `${row.service}-${row.duration}-${idx}`}
              caption="DriverConnect pricing table with advance and balance breakdown"
            />
          </section>

          {/* Interactive Fare Estimator (Helps Razorpay reviewers and users) */}
          <section className="bg-white rounded-[14px] border border-[#E4E6EA] p-8 md:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E4E6EA]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Trip Fare Estimator
                </span>
                <h3 className="text-xl font-bold text-[#1F2430] mt-1">
                  Calculate your advance and balance
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-[#FAFAFB] p-1 rounded-full border border-[#E4E6EA]">
                <button
                  type="button"
                  onClick={() => setCalcType('incity')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full cursor-pointer transition-colors ${
                    calcType === 'incity'
                      ? 'bg-[#2F6FED] text-white shadow-xs'
                      : 'text-[#6B7280] hover:text-[#1F2430]'
                  }`}
                >
                  InCity Hourly
                </button>
                <button
                  type="button"
                  onClick={() => setCalcType('outstation')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full cursor-pointer transition-colors ${
                    calcType === 'outstation'
                      ? 'bg-[#2F6FED] text-white shadow-xs'
                      : 'text-[#6B7280] hover:text-[#1F2430]'
                  }`}
                >
                  OutStation Daily
                </button>
              </div>
            </div>

            {calcType === 'incity' ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <label className="block text-xs font-semibold text-[#1F2430]">
                    Select InCity Duration:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {INCITY_PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedHours(pkg.durationHours)}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          selectedHours === pkg.durationHours
                            ? 'border-[#2F6FED] bg-[#EAF2FF] ring-1 ring-[#2F6FED]'
                            : 'border-[#E4E6EA] bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="text-xs text-[#6B7280]">{pkg.durationHours} Hours</div>
                        <div className="text-base font-bold text-[#1F2430] mt-1">₹{pkg.price}</div>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-[#6B7280]">
                    InCity rates apply to any travel originating and remaining within Surat city boundaries.
                  </p>
                </div>

                <div className="md:col-span-5 p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Breakdown for {incitySelectedPackage.title}
                  </div>
                  <div className="space-y-2 text-xs pt-1">
                    <div className="flex justify-between text-[#4B5563]">
                      <span>Total Ride Fare</span>
                      <strong className="text-sm font-bold text-[#1F2430]">
                        ₹{incityCalculation.totalFare}
                      </strong>
                    </div>
                    <div className="flex justify-between text-[#2F6FED] font-semibold py-1.5 px-2 bg-white rounded-lg border border-[#BFDBFE]">
                      <span>30% Advance (payable now)</span>
                      <span>₹{incityCalculation.advanceAmount}</span>
                    </div>
                    <div className="flex justify-between text-[#6B7280] pt-1">
                      <span>70% Balance (at trip end)</span>
                      <span>₹{incityCalculation.balanceAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2430] mb-2">
                      Number of Outstation Days:
                    </label>
                    <div className="flex items-center gap-3">
                      {[1, 2, 3, 4, 5].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setOutstationDays(d)}
                          className={`w-11 h-11 rounded-xl border font-bold text-sm cursor-pointer transition-colors ${
                            outstationDays === d
                              ? 'border-[#2F6FED] bg-[#2F6FED] text-white'
                              : 'border-[#E4E6EA] bg-white text-[#1F2430] hover:border-gray-300'
                          }`}
                        >
                          {d}d
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-center gap-2.5 text-xs text-[#1F2430] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={dropInOtherCity}
                        onChange={(e) => setDropInOtherCity(e.target.checked)}
                        className="w-4 h-4 rounded text-[#2F6FED] focus:ring-[#2F6FED] border-[#D1D5DB]"
                      />
                      <span>
                        Drop-off in another city (one-way trip + ₹500 driver return fee)
                      </span>
                    </label>
                  </div>
                  <p className="text-xs text-[#6B7280]">
                    Day 1 is ₹2,200. Additional days are calculated at standard daily rate. Tolls and fuel paid directly by car owner.
                  </p>
                </div>

                <div className="md:col-span-5 p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Outstation Estimate ({outstationDays} {outstationDays > 1 ? 'Days' : 'Day'})
                  </div>
                  <div className="space-y-2 text-xs pt-1">
                    <div className="flex justify-between text-[#4B5563]">
                      <span>Day 1 Base Fare</span>
                      <span>₹{outstationCalculation.day1Fare}</span>
                    </div>
                    {outstationCalculation.extraDaysFare > 0 && (
                      <div className="flex justify-between text-[#4B5563]">
                        <span>Extra Days ({outstationDays - 1} × ₹2,200)</span>
                        <span>₹{outstationCalculation.extraDaysFare}</span>
                      </div>
                    )}
                    {outstationCalculation.returnFee > 0 && (
                      <div className="flex justify-between text-[#4B5563]">
                        <span>Return fee (one-way drop)</span>
                        <span>₹{outstationCalculation.returnFee}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#1F2430] font-bold border-t border-[#E4E6EA] pt-2">
                      <span>Total Estimated Fare</span>
                      <span className="text-sm">₹{outstationCalculation.totalFare}</span>
                    </div>
                    <div className="flex justify-between text-[#2F6FED] font-semibold py-1.5 px-2 bg-white rounded-lg border border-[#BFDBFE]">
                      <span>30% Advance (payable now)</span>
                      <span>₹{outstationCalculation.advanceAmount}</span>
                    </div>
                    <div className="flex justify-between text-[#6B7280]">
                      <span>70% Balance (at trip end)</span>
                      <span>₹{outstationCalculation.balanceAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Payment Details & Security Section */}
          <section className="bg-white rounded-[14px] border border-[#E4E6EA] p-8 md:p-10 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              <CreditCard className="w-4 h-4" />
              <span>Payment Details &amp; Gateway</span>
            </div>
            <h2 className="text-2xl font-bold text-[#1F2430]">
              Secure online payments powered by Razorpay
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#4B5563]">
              <div className="space-y-3">
                <h3 className="font-semibold text-[#1F2430]">Payment Milestone Breakdown</h3>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#1F2430]">30% Advance at Confirmation:</strong> Payable immediately when your booking is matched and accepted by a verified driver.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#1F2430]">70% Balance at End of Ride:</strong> Settle the remainder seamlessly through the app or directly via UPI/cards upon safe drop-off.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-[#1F2430]">Supported Payment Methods</h3>
                <p className="text-xs text-[#6B7280]">
                  Razorpay Checkout supports all major Indian banking instruments:
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PRICING_PAYMENT_TERMS.paymentMethods.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 rounded-full bg-[#FAFAFB] border border-[#E4E6EA] text-[#1F2430] font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E4E6EA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#6B7280] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                <span>PCI-DSS Level 1 compliant payments. Your card and UPI credentials are never stored on our servers.</span>
              </div>
              <Link to="/#get-app" className="shrink-0">
                <Button variant="primary" size="lg">
                  <span>Book a driver</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
