/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  X,
  Smartphone,
  CheckCircle2,
  BellRing,
  AlertCircle,
  ArrowRight,
  Shield,
  Globe,
} from 'lucide-react';
import { Button } from '../ui/Button.tsx';
import { validateWaitlistForm, WaitlistFormData } from '../../utils/pricing.ts';
import { useAppLaunchModal } from '../../context/AppLaunchModalContext.tsx';

export const NotifyMeModal: React.FC = () => {
  const { isOpen, targetPlatform, closeModal } = useAppLaunchModal();

  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    phone: '',
    email: '',
    platform: targetPlatform,
    area: 'Vesu',
    carType: 'Sedan',
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState<string>('');

  // Sync target platform when opened
  useEffect(() => {
    setFormData((prev) => ({ ...prev, platform: targetPlatform }));
    setIsSuccess(false);
    setErrors({});
  }, [targetPlatform, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateWaitlistForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let assignedId = `DC-${Math.floor(1000 + Math.random() * 9000)}`;

      if (response.ok) {
        const result = await response.json();
        if (result.record?.id) {
          assignedId = result.record.id;
        }
      }

      // Save to localStorage as redundancy
      const localLeads = JSON.parse(localStorage.getItem('driverconnect_waitlist_leads') || '[]');
      const newLead = {
        id: assignedId,
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email?.trim() || '',
        platform: formData.platform === 'ios' ? 'iOS (App Store)' : 'Android (Google Play)',
        area: formData.area,
        carType: formData.carType,
        createdAt: new Date().toISOString(),
      };
      localLeads.unshift(newLead);
      localStorage.setItem('driverconnect_waitlist_leads', JSON.stringify(localLeads));

      setReferenceId(assignedId);
      setIsSuccess(true);
    } catch {
      // Local fallback on network failure
      const assignedId = `DC-${Math.floor(1000 + Math.random() * 9000)}`;
      const localLeads = JSON.parse(localStorage.getItem('driverconnect_waitlist_leads') || '[]');
      localLeads.unshift({
        id: assignedId,
        ...formData,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('driverconnect_waitlist_leads', JSON.stringify(localLeads));

      setReferenceId(assignedId);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-[20px] shadow-2xl border border-[#E4E6EA] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Banner */}
        <div className="px-6 pt-6 pb-4 border-b border-[#E4E6EA] flex items-start justify-between bg-[#FAFAFB]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF2FF] text-[#2F6FED] text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED] animate-ping" />
              <span>Launching Soon in Surat</span>
            </div>
            <h2 id="modal-title" className="text-xl font-bold text-[#1F2430]">
              {targetPlatform === 'ios' ? 'Apple App Store' : 'Google Play Store'} Release
            </h2>
            <p className="text-xs text-[#6B7280]">
              Our native mobile app is in final onboarding for Surat, Gujarat.
            </p>
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="p-1.5 rounded-full text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#1F2430] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            /* Success confirmation screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E8F8F0] border border-[#A7F3D0] text-[#1FAE6B] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-[#1F2430]">You are on the priority launch list!</h3>
                <p className="text-xs text-[#6B7280] max-w-sm mx-auto leading-relaxed">
                  We have saved your details for our Surat launch under Reference ID:
                </p>
                <div className="inline-block font-mono font-bold text-sm text-[#2F6FED] bg-[#EAF2FF] px-4 py-1.5 rounded-full border border-[#BFDBFE]">
                  {referenceId}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFB] border border-[#E4E6EA] text-xs text-[#4B5563] text-left space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0 mt-0.5" />
                  <span>
                    We will notify you via <strong>WhatsApp &amp; SMS</strong> at <strong>+91 {formData.phone}</strong> the moment the app goes live.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0 mt-0.5" />
                  <span>
                    Your contact is recorded for <strong>{formData.area}, Surat</strong> for priority driver matching.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <Button variant="primary" size="md" onClick={closeModal} className="px-8">
                  Done
                </Button>
              </div>
            </div>
          ) : (
            /* Collection Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#E8F8F0] border border-[#A7F3D0] text-xs text-[#1F2430] flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                  <span><strong>Instant Access:</strong> Use DriverConnect on iPhone &amp; Web now!</span>
                </div>
                <a
                  href="https://app.driverconnect.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#1FAE6B] hover:bg-[#189359] text-white font-bold rounded-lg text-xs shrink-0 transition-colors inline-flex items-center gap-1"
                >
                  <span>Open App</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3 rounded-xl bg-[#EAF2FF]/60 border border-[#BFDBFE] text-xs text-[#1F2430] flex items-start gap-2.5">
                <BellRing className="w-4 h-4 text-[#2F6FED] shrink-0 mt-0.5" />
                <span>
                  <strong>Upcoming App Notice:</strong> The DriverConnect app is undergoing final testing in Surat. Fill in your details below to get instant SMS/WhatsApp alerts upon launch.
                </span>
              </div>

              {/* Platform Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2430] mb-1.5">
                  Platform Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, platform: 'android' })}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                      formData.platform === 'android'
                        ? 'border-[#2F6FED] bg-[#EAF2FF] text-[#2F6FED]'
                        : 'border-[#E4E6EA] bg-white text-[#4B5563] hover:border-gray-300'
                    }`}
                  >
                    <span>Google Play (Android)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, platform: 'ios' })}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                      formData.platform === 'ios'
                        ? 'border-[#2F6FED] bg-[#EAF2FF] text-[#2F6FED]'
                        : 'border-[#E4E6EA] bg-white text-[#4B5563] hover:border-gray-300'
                    }`}
                  >
                    <span>App Store (iPhone)</span>
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="waitlist-name" className="block text-xs font-semibold text-[#1F2430] mb-1">
                  Full Name <span className="text-[#E5484D]">*</span>
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Patel"
                  className={`w-full px-3.5 py-2 rounded-xl border text-sm text-[#1F2430] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2F6FED] ${
                    errors.name ? 'border-[#E5484D] bg-[#FFF5F5]' : 'border-[#E4E6EA] bg-white'
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-xs text-[#E5484D] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="waitlist-phone" className="block text-xs font-semibold text-[#1F2430] mb-1">
                  Mobile Number (WhatsApp &amp; SMS) <span className="text-[#E5484D]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6B7280]">
                    +91
                  </span>
                  <input
                    id="waitlist-phone"
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    placeholder="98765 43210"
                    className={`w-full pl-12 pr-3.5 py-2 rounded-xl border text-sm text-[#1F2430] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2F6FED] ${
                      errors.phone ? 'border-[#E5484D] bg-[#FFF5F5]' : 'border-[#E4E6EA] bg-white'
                    }`}
                    aria-invalid={!!errors.phone}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-[#E5484D] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Area & Car Type Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="waitlist-area" className="block text-xs font-semibold text-[#1F2430] mb-1">
                    Surat Area
                  </label>
                  <select
                    id="waitlist-area"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E4E6EA] bg-white text-xs text-[#1F2430] focus:outline-none focus:ring-2 focus:ring-[#2F6FED]"
                  >
                    <option value="Vesu">Vesu</option>
                    <option value="Adajan">Adajan</option>
                    <option value="Piplod">Piplod</option>
                    <option value="Athwa Lines">Athwa Lines</option>
                    <option value="City Light">City Light</option>
                    <option value="Althan">Althan</option>
                    <option value="Pal">Pal</option>
                    <option value="Varachha">Varachha</option>
                    <option value="Katargam">Katargam</option>
                    <option value="Other Surat Zone">Other Surat Zone</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="waitlist-car" className="block text-xs font-semibold text-[#1F2430] mb-1">
                    Your Car Type
                  </label>
                  <select
                    id="waitlist-car"
                    value={formData.carType}
                    onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E4E6EA] bg-white text-xs text-[#1F2430] focus:outline-none focus:ring-2 focus:ring-[#2F6FED]"
                  >
                    <option value="Sedan">Sedan (City, Ciaz, Verna)</option>
                    <option value="Compact SUV">Compact SUV (Creta, Brezza)</option>
                    <option value="Full SUV">Full SUV (Innova, Fortuner)</option>
                    <option value="Hatchback">Hatchback (Swift, Baleno, i20)</option>
                    <option value="Luxury / EV">Luxury / EV (BMW, Merc, Nexon EV)</option>
                  </select>
                </div>
              </div>

              {/* Email Address (Optional) */}
              <div>
                <label htmlFor="waitlist-email" className="block text-xs font-semibold text-[#1F2430] mb-1">
                  Email Address <span className="text-[#6B7280] font-normal">(optional)</span>
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. ramesh@example.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E4E6EA] bg-white text-sm text-[#1F2430] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2F6FED]"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Saving to database...</span>
                  ) : (
                    <>
                      <span>Notify Me When Live</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center text-[11px] text-[#6B7280] pt-1">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#1FAE6B]" />
                  100% spam-free. Your contact is safe and never shared.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
