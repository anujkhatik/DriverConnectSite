/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  Car,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
  MapPin,
  AlertCircle,
} from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { Tabs } from '../components/ui/Tabs.tsx';
import { Card } from '../components/ui/Card.tsx';
import { Button } from '../components/ui/Button.tsx';
import {
  INCITY_PACKAGES,
  OUTSTATION_PRICING,
  HOW_IT_WORKS_STEPS,
  BUSINESS_DETAILS,
} from '../content.ts';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'incity' | 'outstation'>('incity');

  return (
    <>
      <SEO
        title="Services – InCity & OutStation Driver Booking in Surat"
        description="Book hourly InCity drivers (3h ₹600, 6h ₹1,000, 12h ₹1,800) or OutStation daily drivers from ₹2,200 for day 1. Professional drivers for your own car in Surat."
        canonicalPath="/services"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: 'Services' }]} />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Service Offerings
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight">
              Hourly and daily driver booking for your own car
            </h1>
            <p className="text-[#6B7280] text-base">
              Dedicated professional drivers assigned to your private vehicle. Services currently available originating in Surat.
            </p>

            {/* Service Toggle Tabs */}
            <div className="pt-4 flex justify-center">
              <Tabs
                tabs={[
                  { id: 'incity', label: 'InCity Hourly' },
                  { id: 'outstation', label: 'OutStation Daily' },
                ]}
                activeTab={activeTab}
                onChange={(id) => setActiveTab(id as 'incity' | 'outstation')}
              />
            </div>
          </div>

          {/* InCity View */}
          {activeTab === 'incity' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INCITY_PACKAGES.map((pkg) => (
                  <Card key={pkg.id} className="p-6 bg-white flex flex-col justify-between">
                    <div>
                      {pkg.badge && (
                        <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EAF2FF] text-[#2F6FED] mb-2">
                          {pkg.badge}
                        </span>
                      )}
                      <h2 className="text-xl font-bold text-[#1F2430]">{pkg.title}</h2>
                      <div className="mt-3 flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-[#1F2430]">
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[#6B7280]">/ package</span>
                      </div>
                      <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">{pkg.tagline}</p>

                      <div className="mt-6 pt-5 border-t border-[#E4E6EA]">
                        <div className="text-xs font-semibold text-[#1F2430] mb-3">
                          What is included:
                        </div>
                        <ul className="space-y-2.5 text-xs text-[#4B5563]">
                          {pkg.includes.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#E4E6EA]">
                      <Link to="/pricing">
                        <Button variant="primary" size="md" fullWidth>
                          <span>Select package</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>

              {/* City Service Scope Note */}
              <div className="p-4 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] flex items-start gap-3 text-xs text-[#4B5563]">
                <MapPin className="w-4 h-4 text-[#2F6FED] shrink-0 mt-0.5" />
                <div>
                  <strong>Surat City Coverage:</strong> InCity packages cover travel anywhere within Surat Municipal Corporation limits (Vesu, Adajan, Piplod, Varachha, Katargam, Athwa, Udhna, Rander, etc.).
                </div>
              </div>
            </div>
          )}

          {/* OutStation View */}
          {activeTab === 'outstation' && (
            <div className="space-y-8">
              <div className="bg-white rounded-[14px] border border-[#E4E6EA] p-8 md:p-10 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E4E6EA]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
                      OutStation Service
                    </span>
                    <h2 className="text-2xl font-bold text-[#1F2430] mt-1">
                      Day-based intercity driver for your car
                    </h2>
                    <p className="text-xs text-[#6B7280] mt-1">
                      Safe highway driving across Gujarat and interstate journeys starting from Surat.
                    </p>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <div className="text-3xl font-bold text-[#1F2430]">₹2,200</div>
                    <div className="text-xs text-[#6B7280]">for Day 1</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pricing details */}
                  <div className="p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-3">
                    <h3 className="text-sm font-bold text-[#1F2430]">OutStation Rates</h3>
                    <ul className="space-y-2 text-xs text-[#4B5563]">
                      <li className="flex justify-between py-1 border-b border-[#E4E6EA]">
                        <span>Day 1 rate</span>
                        <strong className="text-[#1F2430]">₹2,200</strong>
                      </li>
                      <li className="flex justify-between py-1 border-b border-[#E4E6EA]">
                        <span>Each extra day</span>
                        <strong className="text-[#1F2430]">As shown in the app at booking</strong>
                      </li>
                      <li className="flex justify-between py-1">
                        <span>Drop in another city (one-way return fee)</span>
                        <strong className="text-[#1F2430]">+₹500 flat</strong>
                      </li>
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div className="p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] space-y-3">
                    <h3 className="text-sm font-bold text-[#1F2430]">Trip Protection</h3>
                    <ul className="space-y-2 text-xs text-[#4B5563]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                        <span>Highway-certified drivers with verified route experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                        <span>Pre-trip and post-trip digital car condition inspection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                        <span>Continuous in-app GPS tracking and 1-tap SOS support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Link to="/pricing">
                    <Button variant="primary" size="md">
                      <span>View Pricing Breakdown</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* What's Included & What's Not Included (Both services) */}
          <section className="bg-white rounded-[14px] border border-[#E4E6EA] p-8 md:p-10">
            <h2 className="text-xl font-bold text-[#1F2430] mb-6 text-center">
              Clear trip boundaries &amp; inclusions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Included */}
              <div className="p-6 rounded-xl bg-[#E8F8F0]/40 border border-[#A7F3D0]/70 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#065F46]">
                  <CheckCircle2 className="w-5 h-5 text-[#1FAE6B]" />
                  <span>What's included in DriverConnect</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#064E3B]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                    <span>Dedicated, background-verified professional driver for your own car</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                    <span>Driving for the agreed booked duration (3h, 6h, 12h, or daily outstation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                    <span>Digital vehicle inspection before trip ignition and after trip completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                    <span>Live GPS route tracking and SOS emergency support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                    <span>Masked contact calling to safeguard your privacy</span>
                  </li>
                </ul>
              </div>

              {/* Not Included */}
              <div className="p-6 rounded-xl bg-[#FFF5F5] border border-[#FECDD3] space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#991B1B]">
                  <XCircle className="w-5 h-5 text-[#E5484D]" />
                  <span>What's not included (customer responsibility)</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#7F1D1D]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-[#E5484D] shrink-0 mt-0.5" />
                    <span>Fuel, FASTag / toll booth charges, parking fees, and traffic fines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-[#E5484D] shrink-0 mt-0.5" />
                    <span>The car itself (customer provides validly registered, insured personal vehicle)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-[#E5484D] shrink-0 mt-0.5" />
                    <span>Driver meals and overnight accommodation on outstation trips unless agreed in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-[#E5484D] shrink-0 mt-0.5" />
                    <span>Vehicle insurance or mechanical repairs arising from pre-existing car faults</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How It Works Steps */}
          <section className="bg-white rounded-[14px] border border-[#E4E6EA] p-8 md:p-10 space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
                Booking Journey
              </span>
              <h2 className="text-2xl font-bold text-[#1F2430] mt-1">
                How booking works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div key={step.number} className="p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA]">
                  <div className="w-8 h-8 rounded-full bg-[#EAF2FF] text-[#2F6FED] font-mono font-bold text-xs flex items-center justify-center mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-bold text-[#1F2430]">{step.title}</h3>
                  <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#EAF2FF] text-xs text-[#2F6FED] flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Note: DriverConnect services are currently available exclusively originating in Surat, Gujarat.</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
