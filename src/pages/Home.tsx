/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Navigation,
  AlertCircle,
  Clock,
  ArrowRight,
  Car,
  CheckCircle2,
  Users,
  Compass,
  CreditCard,
  PhoneCall,
  Smartphone,
  Download,
  Globe,
} from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { PhoneMockup } from '../components/common/PhoneMockup.tsx';
import { AppDownloadSection } from '../components/common/AppDownloadSection.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Card } from '../components/ui/Card.tsx';
import { Accordion } from '../components/ui/Accordion.tsx';
import {
  BUSINESS_DETAILS,
  INCITY_PACKAGES,
  OUTSTATION_PRICING,
  HOME_TRUST_ITEMS,
  HOW_IT_WORKS_STEPS,
  WHY_DRIVERCONNECT_CARDS,
  FAQS,
} from '../content.ts';

export const Home: React.FC = () => {
  const faqItems = FAQS.map((faq, idx) => ({
    id: `faq-${idx}`,
    question: faq.q,
    answer: faq.a,
  }));

  const trustIcons = [ShieldCheck, Navigation, AlertCircle, Clock];

  return (
    <>
      <SEO
        title="DriverConnect: Book a Driver in Surat"
        description="Book a professional driver for your own car in Surat, Gujarat. Hourly & daily booking from ₹600. Verified drivers, live tracking, transparent pricing."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] text-[#2F6FED] border border-[#BFDBFE]/60 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#2F6FED]" />
                <span>Surat · Hourly and daily driver booking</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2430] leading-[1.15] tracking-tight">
                Your car. A trusted driver. On your schedule.
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-xl">
                Book a professional driver for the car you already own, for a few hours or for a few days. No cab, no unfamiliar vehicle.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/downloads/driverconnect.apk"
                  download="driverconnect.apk"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1FAE6B] hover:bg-[#189359] text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FAE6B]"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Android App</span>
                </a>
                <a
                  href="https://app.driverconnect.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#2F6FED] hover:bg-[#2558c4] text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FED]"
                >
                  <Globe className="w-4 h-4 text-white" />
                  <span>Open Web App (iPhone / Web)</span>
                </a>
                <Link to="/pricing">
                  <Button variant="ghost" size="lg" className="border border-[#E4E6EA]">
                    See pricing
                  </Button>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6B7280]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" />
                  <span>30% advance on confirmation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" />
                  <span>Verified commercial &amp; private DL</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" />
                  <span>Based at Vesu, Surat</span>
                </div>
              </div>
            </div>

            {/* Right Phone Mockup Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-[#E4E6EA] bg-white py-8">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HOME_TRUST_ITEMS.map((item, idx) => {
              const Icon = trustIcons[idx] || ShieldCheck;
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAF2FF] text-[#2F6FED] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1F2430]">{item.title}</h3>
                    <p className="text-xs text-[#6B7280] leading-snug mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Cards (InCity 3h, 6h, 12h) */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Hourly City Packages
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2430] mt-2">
              Book a verified driver for Surat
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base mt-2">
              Clean, predictable pricing in INR for continuous driver assistance in your own car.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INCITY_PACKAGES.map((pkg) => (
              <Card
                key={pkg.id}
                className="p-6 flex flex-col justify-between hover:border-[#2F6FED]/50 transition-all relative group bg-white"
              >
                {pkg.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF2FF] text-[#2F6FED]">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    InCity
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2430] mt-1">{pkg.title}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-xs text-[#6B7280]">from</span>
                    <span className="text-3xl font-bold text-[#1F2430]">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">{pkg.tagline}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-[#E4E6EA] pt-5 text-xs text-[#4B5563]">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E4E6EA]">
                  <Link to="/pricing" className="block w-full">
                    <Button variant="outline" size="md" fullWidth className="group-hover:border-[#2F6FED] group-hover:text-[#2F6FED]">
                      <span>Choose</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OutStation Banner */}
      <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="rounded-[14px] bg-[#EAF2FF] border border-[#BFDBFE] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              OutStation Travel
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2430]">
              Going out of Surat? Book a driver by the day from ₹2,200 for day 1.
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Travel comfortably on highways with experienced intercity drivers. Extra days priced as shown in the app. Optional return drop fee of ₹500 if one-way.
            </p>
          </div>
          <Link to="/services" className="shrink-0">
            <Button variant="primary" size="lg">
              <span>View outstation details</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works (4 numbered steps) */}
      <section className="py-16 md:py-24 bg-white border-y border-[#E4E6EA]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2430] mt-2">
              How DriverConnect works
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base mt-2">
              Four straightforward steps to have a professional behind the wheel of your car.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <Card key={step.number} className="p-6 bg-[#FAFAFB] border-[#E4E6EA] relative">
                <div className="w-10 h-10 rounded-full bg-[#EAF2FF] text-[#2F6FED] font-mono font-bold text-sm flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-[#1F2430]">{step.title}</h3>
                <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why DriverConnect (4 feature cards) */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2430] mt-2">
              Why DriverConnect
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base mt-2">
              Designed specifically for personal car owners in Surat seeking trust and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_DRIVERCONNECT_CARDS.map((card, idx) => {
              const icons = [Car, Clock, ShieldCheck, Navigation];
              const Icon = icons[idx] || ShieldCheck;
              return (
                <Card key={card.title} className="p-6 bg-white hover:border-[#2F6FED]/40 transition-all flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF2FF] text-[#2F6FED] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2430]">{card.title}</h3>
                    <p className="text-sm text-[#6B7280] mt-1.5 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get the App Section */}
      <AppDownloadSection />

      {/* For Drivers Split Section */}
      <section className="py-16 md:py-20 bg-[#FAFAFB]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-white border border-[#E4E6EA] p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A9754A]">
                  For Professional Drivers
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2430]">
                  Drive with DriverConnect in Surat
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  Earn on your own schedule. Drive well-maintained private cars belonging to respected Surat families and professionals. Transparent direct bank payouts and zero vehicle maintenance stress.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-[#4B5563] pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B]" />
                    Set your own availability
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B]" />
                    Direct verified bank transfers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1FAE6B]" />
                    Fair 12-point driver contract
                  </span>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                <Link to="/driver-terms" className="w-full">
                  <Button variant="primary" size="md" fullWidth>
                    Register as a driver
                  </Button>
                </Link>
                <Link to="/driver-terms" className="w-full">
                  <Button variant="outline" size="md" fullWidth>
                    Read Driver Terms
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion (6 questions) */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E4E6EA]">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2430] mt-2">
              Frequently asked questions
            </h2>
            <p className="text-[#6B7280] text-sm mt-2">
              Everything you need to know about booking and riding with DriverConnect.
            </p>
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 md:py-20 bg-[#FAFAFB] border-t border-[#E4E6EA] text-center">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2430]">
            Ready for your next ride?
          </h2>
          <p className="text-[#6B7280] text-base max-w-xl mx-auto leading-relaxed">
            Experience the comfort of your own car with a trusted driver on demand in Surat.
          </p>
          <div className="pt-2 flex justify-center">
            <a href="#get-app">
              <Button variant="primary" size="lg">
                <span>Book a driver</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
