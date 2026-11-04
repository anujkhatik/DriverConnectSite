/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Clock,
  ShieldCheck,
  Navigation,
  EyeOff,
  Camera,
  Coins,
  CheckCircle2,
  Mail,
  ArrowRight,
  MapPin,
  Building2,
} from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Card } from '../components/ui/Card.tsx';
import {
  BUSINESS_DETAILS,
  HOW_IT_WORKS_STEPS,
  WHY_DRIVERCONNECT_CARDS,
  WHAT_WE_STAND_FOR,
} from '../content.ts';

export const About: React.FC = () => {
  const valueIcons = [Coins, EyeOff, Camera, ShieldCheck];

  return (
    <>
      <SEO
        title="About Us – DriverConnect Surat"
        description="We make it easy to have a good driver for your own car. Learn about DriverConnect, our registered office at 24 Cars, Vesu, Surat, and our core values."
        canonicalPath="/about"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: 'About Us' }]} />

          {/* Hero Section */}
          <section className="space-y-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2430] tracking-tight leading-tight">
              We make it easy to have a good driver for your own car.
            </h1>
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
              DriverConnect was started in Surat for car owners who need a dependable driver but do not want to hand over their keys to a stranger’s cab.
            </p>
          </section>

          {/* Who We Are */}
          <section className="bg-white rounded-[14px] border border-[#E4E6EA] p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              <Building2 className="w-4 h-4" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-2xl font-bold text-[#1F2430]">
              Built for Surat's car owners and their everyday travel needs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA]">
                <h3 className="text-base font-semibold text-[#1F2430]">Families &amp; Elders</h3>
                <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                  Families needing a dependable driver for a wedding celebration, shopping trips, elderly hospital appointments, or social functions in Surat.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA]">
                <h3 className="text-base font-semibold text-[#1F2430]">Working Professionals</h3>
                <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                  Executives and consultants needing someone to handle traffic while preparing for meetings across Surat’s commercial districts without parking hassle.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA]">
                <h3 className="text-base font-semibold text-[#1F2430]">Business Owners</h3>
                <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                  Textile, diamond, and manufacturing business owners travelling between Surat, Navsari, Ankleshwar, Bharuch, and other Gujarat hubs.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E6EA] text-sm text-[#4B5563] leading-relaxed flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#2F6FED] shrink-0 mt-0.5" />
              <div>
                The service is based at{' '}
                <strong className="text-[#1F2430]">{BUSINESS_DETAILS.registeredOffice}</strong>, and starts in Surat so the service is right before expansion.
              </div>
            </div>
          </section>

          {/* Why DriverConnect */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
                Our Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2430] mt-2">
                Why DriverConnect
              </h2>
              <p className="text-[#6B7280] text-sm mt-1">
                The four pillars of our driver-on-demand service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WHY_DRIVERCONNECT_CARDS.map((card, idx) => {
                const icons = [Car, Clock, ShieldCheck, Navigation];
                const Icon = icons[idx] || ShieldCheck;
                return (
                  <Card key={card.title} className="p-6 bg-white hover:border-[#2F6FED]/50 transition-all flex gap-4">
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
          </section>

          {/* How It Works */}
          <section className="bg-white rounded-[14px] border border-[#E4E6EA] p-8 md:p-12 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
                The Journey
              </span>
              <h2 className="text-2xl font-bold text-[#1F2430] mt-1">
                How it works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div key={step.number} className="p-5 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA]">
                  <div className="w-9 h-9 rounded-full bg-[#EAF2FF] text-[#2F6FED] font-mono font-bold text-xs flex items-center justify-center mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-bold text-[#1F2430]">{step.title}</h3>
                  <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Stand For */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
                Core Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2430] mt-2">
                What we stand for
              </h2>
              <p className="text-[#6B7280] text-sm mt-1">
                Every policy and feature in DriverConnect reflects these four values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WHAT_WE_STAND_FOR.map((item, idx) => {
                const Icon = valueIcons[idx] || ShieldCheck;
                return (
                  <Card key={item.title} className="p-6 bg-white flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF2FF] text-[#2F6FED] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1F2430]">{item.title}</h3>
                      <p className="text-sm text-[#6B7280] mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* For Drivers */}
          <section className="rounded-[14px] bg-[#FAFAFB] border border-[#E4E6EA] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A9754A]">
                Driver Community
              </span>
              <h3 className="text-xl font-bold text-[#1F2430]">
                Fair partnerships with skilled Surat drivers
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Drivers are independent professionals who choose their own categories, set their availability freely, and are paid directly to verified bank accounts. Learn more about our driver guidelines and code of conduct.
              </p>
            </div>
            <Link to="/driver-terms" className="shrink-0">
              <Button variant="outline" size="md">
                <span>View Driver Terms</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </section>

          {/* Closing Box */}
          <section className="rounded-[14px] bg-[#EAF2FF] border border-[#BFDBFE] p-8 md:p-10 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2430]">
              Questions or feedback? We read every message. We reply within 24 hours.
            </h3>
            <p className="text-sm text-[#4B5563] max-w-lg mx-auto">
              Our registered office team at Vesu is always available to help you with your booking questions or feedback.
            </p>
            <div className="pt-2">
              <a href={`mailto:${BUSINESS_DETAILS.supportEmail}`}>
                <Button variant="primary" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Email {BUSINESS_DETAILS.supportEmail}</span>
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
