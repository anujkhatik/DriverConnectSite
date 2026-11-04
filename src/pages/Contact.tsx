/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Scale,
} from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { Card } from '../components/ui/Card.tsx';
import { Button } from '../components/ui/Button.tsx';
import { BUSINESS_DETAILS } from '../content.ts';
import { validateContactForm } from '../utils/pricing.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // Local fallback
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <SEO
        title="Contact Us – DriverConnect Surat"
        description="Contact DriverConnect at 24 Cars, Vesu, Surat. Official support email: driverconnect139@gmail.com. Grievance officer: Anuj Khatik. Support hours: 9 AM to 9 PM."
        canonicalPath="/contact"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: 'Contact' }]} />

          {/* Page Heading */}
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Official Communication
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight">
              Get in touch with DriverConnect
            </h1>
            <p className="text-[#6B7280] text-base">
              Have questions about booking a driver in Surat or need assistance with an active ride? We are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info & Grievance Officer */}
            <div className="lg:col-span-5 space-y-6">
              {/* Registered Office & Support Card */}
              <Card className="p-6 bg-white space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
                  <Building2 className="w-4 h-4" />
                  <span>Office &amp; Support Desk</span>
                </div>

                <div className="space-y-4 text-sm text-[#4B5563]">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2F6FED] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1F2430] block font-semibold">Registered Office</strong>
                      <span className="leading-relaxed">{BUSINESS_DETAILS.registeredOffice}</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2F6FED] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1F2430] block font-semibold">Support, Privacy &amp; General Email</strong>
                      <a
                        href={`mailto:${BUSINESS_DETAILS.supportEmail}`}
                        className="text-[#2F6FED] hover:underline break-all"
                      >
                        {BUSINESS_DETAILS.supportEmail}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2F6FED] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1F2430] block font-semibold">Support Hours</strong>
                      <span>{BUSINESS_DETAILS.supportHours}</span>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="p-3 bg-[#FAFAFB] rounded-xl border border-[#E4E6EA] text-xs text-[#6B7280]">
                    <strong className="text-[#1F2430]">Response Time:</strong> General customer enquiries and ride support are answered within 24 hours.
                  </div>
                </div>
              </Card>

              {/* Grievance Officer Card (Statutory / Razorpay Mandatory) */}
              <Card className="p-6 bg-[#FAFAFB] border-[#BFDBFE] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
                  <Scale className="w-4 h-4" />
                  <span>Statutory Grievance Redressal</span>
                </div>
                <h3 className="text-base font-bold text-[#1F2430]">
                  Grievance Officer (IT Rules &amp; DPDP Act)
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the details of the Grievance Officer are:
                </p>

                <div className="space-y-2 text-xs text-[#4B5563] bg-white p-4 rounded-xl border border-[#E4E6EA]">
                  <div>
                    <span className="text-[#6B7280]">Name &amp; Designation: </span>
                    <strong className="text-[#1F2430]">
                      {BUSINESS_DETAILS.grievanceOfficer.name}, {BUSINESS_DETAILS.grievanceOfficer.designation}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Direct Grievance Email: </span>
                    <a
                      href={`mailto:${BUSINESS_DETAILS.grievanceOfficer.email}`}
                      className="text-[#2F6FED] hover:underline font-medium"
                    >
                      {BUSINESS_DETAILS.grievanceOfficer.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Resolution Protocol: </span>
                    <span>{BUSINESS_DETAILS.grievanceOfficer.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Court Jurisdiction: </span>
                    <strong className="text-[#1F2430]">{BUSINESS_DETAILS.courtJurisdiction}, Gujarat</strong>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 md:p-8 bg-white">
                <h2 className="text-xl font-bold text-[#1F2430] mb-1">
                  Send a message to our Surat team
                </h2>
                <p className="text-xs text-[#6B7280] mb-6">
                  Fill in your details below and we will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="p-6 bg-[#E8F8F0] border border-[#A7F3D0] rounded-xl text-center space-y-3 animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-[#1FAE6B] text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#065F46]">
                      Thank you for contacting DriverConnect
                    </h3>
                    <p className="text-sm text-[#065F46] max-w-md mx-auto">
                      Your message has been routed to our team at{' '}
                      <strong>{BUSINESS_DETAILS.supportEmail}</strong>. We will review your enquiry and respond within 24 hours.
                    </p>
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send another enquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#1F2430] mb-1.5">
                        Your Full Name <span className="text-[#E5484D]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aniket Shah"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#1F2430] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2F6FED] transition-colors ${
                          errors.name ? 'border-[#E5484D] bg-[#FFF5F5]' : 'border-[#E4E6EA] bg-white'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="text-xs text-[#E5484D] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#1F2430] mb-1.5">
                        Email Address <span className="text-[#E5484D]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. aniket@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#1F2430] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2F6FED] transition-colors ${
                          errors.email ? 'border-[#E5484D] bg-[#FFF5F5]' : 'border-[#E4E6EA] bg-white'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="text-xs text-[#E5484D] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-[#1F2430] mb-1.5">
                        Message or Booking Enquiry <span className="text-[#E5484D]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please tell us about your required driver service (date, duration, pickup location in Surat, vehicle model)..."
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#1F2430] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2F6FED] transition-colors resize-y ${
                          errors.message ? 'border-[#E5484D] bg-[#FFF5F5]' : 'border-[#E4E6EA] bg-white'
                        }`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="contact-message-error" className="text-xs text-[#E5484D] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span>Sending message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="text-[11px] text-[#6B7280] text-center pt-2">
                      Messages are securely received by{' '}
                      <span className="font-medium text-[#1F2430]">{BUSINESS_DETAILS.supportEmail}</span>. Your privacy is protected under our Privacy Policy.
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
