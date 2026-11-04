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

export const Terms: React.FC = () => {
  const tocItems: TocItem[] = [
    { id: 'clause-1', label: '1. About Us & Platform Identity' },
    { id: 'clause-2', label: '2. What DriverConnect Provides' },
    { id: 'clause-3', label: '3. Eligibility to Use Services' },
    { id: 'clause-4', label: '4. User Accounts & Verification' },
    { id: 'clause-5', label: '5. Booking & Matching Process' },
    { id: 'clause-6', label: '6. Pricing & Payment Terms' },
    { id: 'clause-7', label: '7. Cancellation & Rescheduling' },
    { id: 'clause-8', label: '8. DriverConnect Wallet' },
    { id: 'clause-9', label: '9. Driver Conduct & Obligations' },
    { id: 'clause-10', label: '10. User Conduct & Obligations' },
    { id: 'clause-11', label: '11. Vehicle Condition & Damage Disclaimers' },
    { id: 'clause-12', label: '12. Safety, Live Tracking & SOS' },
    { id: 'clause-13', label: '13. Ratings & Feedback System' },
    { id: 'clause-14', label: '14. Limitation of Liability' },
    { id: 'clause-15', label: '15. Indemnification' },
    { id: 'clause-16', label: '16. Suspension & Termination of Accounts' },
    { id: 'clause-17', label: '17. Modifications to Terms' },
    { id: 'clause-18', label: '18. Governing Law & Jurisdiction' },
    { id: 'clause-19', label: '19. Grievance Officer' },
    { id: 'clause-20', label: '20. Official Contact Information' },
  ];

  return (
    <>
      <SEO
        title="Terms & Conditions – DriverConnect Surat"
        description="Official Terms and Conditions for DriverConnect driver booking services in Surat, Gujarat. 20 statutory clauses covering booking, payment, cancellation, and liability."
        canonicalPath="/terms"
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} className="mb-6" />

          {/* Header */}
          <div className="border-b border-[#E4E6EA] pb-6 mb-8 max-w-[760px] lg:max-w-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">
              Legal &amp; Regulatory Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] mt-1 tracking-tight">
              Terms &amp; Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] mt-3">
              <span><strong>Version:</strong> 1.2</span>
              <span>•</span>
              <span><strong>Last updated:</strong> November 2026</span>
              <span>•</span>
              <span><strong>Effective City:</strong> Surat, Gujarat, India</span>
            </div>
          </div>

          {/* Two column layout: TOC left, Content right (760px max) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <TableOfContents items={tocItems} />
            </div>

            <div className="lg:col-span-8 max-w-[760px] space-y-10 text-sm text-[#4B5563] leading-relaxed">
              {/* Introduction Card */}
              <div className="p-5 rounded-xl bg-[#EAF2FF]/60 border border-[#BFDBFE] text-xs text-[#1F2430] space-y-2">
                <p className="font-semibold text-sm text-[#2F6FED]">
                  Important Legal Notice
                </p>
                <p>
                  Please read these Terms and Conditions (&quot;Terms&quot;) carefully before accessing or using the DriverConnect digital platform, website, or mobile applications. By registering, booking a driver, or paying an advance, you enter into a legally binding agreement governed by the laws of India.
                </p>
              </div>

              {/* Clause 1 */}
              <section id="clause-1" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  1. About Us &amp; Platform Identity
                </h2>
                <p>
                  DriverConnect (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a technology intermediary and time-based driver on demand booking platform operated in Surat, Gujarat, India, with its registered office situated at <strong>{BUSINESS_DETAILS.registeredOffice}</strong>.
                </p>
                <p>
                  DriverConnect operates as an intermediary under Section 79 of the Information Technology Act, 2000, facilitating digital matchmaking between private motor vehicle owners seeking driver services and verified independent professional drivers available to operate such motor vehicles on a contracted time basis.
                </p>
              </section>

              {/* Clause 2 */}
              <section id="clause-2" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  2. What DriverConnect Provides
                </h2>
                <p>
                  DriverConnect provides an automated matching and scheduling system that allows registered users (&quot;Customers&quot; or &quot;Car Owners&quot;) to book background-verified drivers for the customer&apos;s own registered motor vehicle.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#4B5563]">
                  <li><strong>DriverConnect does NOT provide cars:</strong> We do not own, lease, or furnish passenger motor vehicles or commercial fleet cabs. The Customer is strictly responsible for providing a roadworthy, insured, and legally compliant vehicle.</li>
                  <li><strong>Time-based services:</strong> Driver assignments are scheduled on an hourly basis for InCity travel (3, 6, or 12 hours) or daily basis for OutStation travel originating from Surat.</li>
                </ul>
              </section>

              {/* Clause 3 */}
              <section id="clause-3" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  3. Eligibility to Use Services
                </h2>
                <p>
                  To use DriverConnect, you must:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Be at least 18 years of age and legally competent to enter into a contract under the Indian Contract Act, 1872.</li>
                  <li>Own, lease, or possess express written legal authority from the registered owner to allow a designated third-party driver to operate the motor vehicle.</li>
                  <li>Hold a valid comprehensive and third-party motor vehicle insurance policy covering the vehicle under the Motor Vehicles Act, 1988.</li>
                </ul>
              </section>

              {/* Clause 4 */}
              <section id="clause-4" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  4. User Accounts &amp; Verification
                </h2>
                <p>
                  To book a driver, Customers must register via their verified mobile number through a secure One-Time Password (OTP). You agree to provide accurate, truthful, and complete details regarding your name, contact information, and vehicle details (make, model, and registration number).
                </p>
                <p>
                  You are solely responsible for maintaining the confidentiality of your account credentials and for all activities conducted through your account.
                </p>
              </section>

              {/* Clause 5 */}
              <section id="clause-5" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  5. Booking &amp; Matching Process
                </h2>
                <p>
                  When you initiate a booking request through the platform:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-xs">
                  <li>You select your required duration (InCity 3h, 6h, 12h, or OutStation daily) and designate the pickup location within Surat city limits.</li>
                  <li>The platform matches your request with an available, verified professional driver.</li>
                  <li>The booking is confirmed only upon successful receipt of the mandatory 30% advance payment via Razorpay.</li>
                  <li>Before the driver ignites the vehicle, both parties must conduct a digital vehicle condition check, and the customer must provide the confidential ride-start OTP displayed in the app to the driver.</li>
                </ol>
              </section>

              {/* Clause 6 */}
              <section id="clause-6" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  6. Pricing &amp; Payment Terms
                </h2>
                <p>
                  All fares on DriverConnect are quoted in Indian Rupees (INR). Prices displayed on the platform are the final amount payable for the driver service.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>30% Advance Payment:</strong> A non-negotiable 30% advance payment must be paid online at the time of booking confirmation using Razorpay Checkout (UPI, debit/credit cards, net banking).</li>
                  <li><strong>70% Balance Payment:</strong> The remaining 70% balance is payable upon trip completion through digital payment on the app or directly to the driver as indicated by the app.</li>
                  <li><strong>Excluded Costs:</strong> Vehicle fuel, FASTag/toll gate charges, state entry taxes, parking fees, and traffic challans/fines are strictly the Customer&apos;s direct financial liability.</li>
                </ul>
              </section>

              {/* Clause 7 */}
              <section id="clause-7" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  7. Cancellation &amp; Rescheduling
                </h2>
                <p>
                  Cancellation rights and refunds are governed strictly by the DriverConnect Refund &amp; Cancellation Policy:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Cancellation Before Ride-Start OTP:</strong> If the Customer cancels prior to sharing the ride-start OTP, 50% of the paid 30% advance is credited to the Customer&apos;s DriverConnect Wallet for future bookings.</li>
                  <li><strong>Cancellation After Ride-Start OTP:</strong> No refund is granted once the OTP is shared and the trip has commenced.</li>
                  <li><strong>Platform or Driver Cancellation:</strong> If a driver fails to arrive or DriverConnect cancels the booking, a 100% full refund is issued to the original payment method within 7 to 10 working days.</li>
                </ul>
              </section>

              {/* Clause 8 */}
              <section id="clause-8" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  8. DriverConnect Wallet
                </h2>
                <p>
                  DriverConnect Wallet credits issued as part of promotional credits or cancellation refunds are non-transferable, non-withdrawable, and cannot be encashed into a bank account. Wallet credits can only be applied toward future booking advances on the DriverConnect platform.
                </p>
              </section>

              {/* Clause 9 */}
              <section id="clause-9" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  9. Driver Conduct &amp; Obligations
                </h2>
                <p>
                  All drivers on DriverConnect are independent service contractors who have agreed to strict professional standards:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Possess a valid, unexpired Commercial/Transport or Private Driving Licence issued by an authorized Indian RTO.</li>
                  <li>Abide by all provisions of the Motor Vehicles Act, 1988, including speed limits, traffic signals, and mandatory seatbelt regulations.</li>
                  <li>Maintain absolute zero tolerance for alcohol, narcotics, smoking, or intoxicating substances before or during any ride.</li>
                  <li>Conduct a mandatory digital vehicle walkaround with pre-ride and post-ride photographic logs.</li>
                </ul>
              </section>

              {/* Clause 10 */}
              <section id="clause-10" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  10. User Conduct &amp; Obligations
                </h2>
                <p>
                  The Customer agrees to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Provide a clean, legally registered, roadworthy vehicle with functioning brakes, seatbelts, headlights, wipers, and adequate fuel.</li>
                  <li>Ensure the vehicle carries its valid Registration Certificate (RC), Pollution Under Control (PUC) certificate, and comprehensive insurance cover.</li>
                  <li>Never request or pressure the driver to violate traffic regulations, speed limits, or passenger capacity restrictions.</li>
                  <li>Refrain from transporting contraband, illegal narcotics, unmanifested commercial cargo, or hazardous substances.</li>
                </ul>
              </section>

              {/* Clause 11 */}
              <section id="clause-11" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  11. Vehicle Condition &amp; Damage Disclaimers
                </h2>
                <p>
                  Before commencing any trip, the Customer and the assigned driver must inspect the vehicle and document any pre-existing dents, scratches, or windshield chips via the in-app camera tool.
                </p>
                <p>
                  DriverConnect operates as a technology platform and does not own the vehicle. The vehicle owner&apos;s motor insurance policy remains the primary insurance coverage for any accidents or collision claims under Indian law. In the unlikely event of an accident caused directly by proven driver negligence, DriverConnect will assist the car owner in facilitating insurance documentation and investigation. DriverConnect shall not be liable for pre-existing mechanical, electrical, engine, or transmission failures.
                </p>
              </section>

              {/* Clause 12 */}
              <section id="clause-12" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  12. Safety, Live Tracking &amp; SOS
                </h2>
                <p>
                  Customer safety is a core foundation of our service. During active bookings, DriverConnect collects real-time GPS location data to enable:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Live trip route sharing with family members and emergency contacts designated by the user.</li>
                  <li>In-app SOS functionality that instantly alerts DriverConnect emergency response personnel and shares live telematics.</li>
                  <li>Trip safety audits and automated route deviation detection.</li>
                </ul>
              </section>

              {/* Clause 13 */}
              <section id="clause-13" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  13. Ratings &amp; Feedback System
                </h2>
                <p>
                  Following trip completion, both Customer and Driver have the opportunity to rate the ride on a 1-to-5 star scale and submit written feedback. Feedback must be honest and constructive. DriverConnect reserves the right to remove any ratings that contain abusive, defamatory, or unlawful language.
                </p>
              </section>

              {/* Clause 14 */}
              <section id="clause-14" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  14. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by applicable Indian law, DriverConnect, its founder, officers, and employees shall not be liable for any indirect, incidental, special, punitive, or consequential damages, including loss of profits, loss of data, personal injury, or property damage arising out of or in connection with the use of the platform or services.
                </p>
                <p>
                  In any event, the total aggregate liability of DriverConnect for any and all claims arising under a specific booking shall not exceed the total commission or fee received by DriverConnect for that specific booking.
                </p>
              </section>

              {/* Clause 15 */}
              <section id="clause-15" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  15. Indemnification
                </h2>
                <p>
                  You agree to defend, indemnify, and hold harmless DriverConnect, its officers, founder, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with: (a) your violation of these Terms; (b) your vehicle lacking valid insurance, registration, or roadworthiness; (c) any unlawful items carried in your vehicle; or (d) any third-party damage claims caused by your instructions to the driver.
                </p>
              </section>

              {/* Clause 16 */}
              <section id="clause-16" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  16. Suspension &amp; Termination of Accounts
                </h2>
                <p>
                  DriverConnect reserves the right to immediately suspend or permanently terminate any Customer or Driver account without prior notice if we detect:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Fraudulent payment attempts or unauthorized card usage.</li>
                  <li>Abusive, harassing, or threatening behaviour toward drivers or support personnel.</li>
                  <li>Repeated unexcused cancellations or safety violations.</li>
                  <li>Any activity that violates applicable laws of Gujarat or the Union of India.</li>
                </ul>
              </section>

              {/* Clause 17 */}
              <section id="clause-17" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  17. Modifications to Terms
                </h2>
                <p>
                  We may revise these Terms periodically to reflect updates in our operational practices, regulatory requirements, or platform features. When changes are made, we will update the &quot;Last updated&quot; date and publish the amended Terms on our website. Continued use of the platform following the posting of updated Terms constitutes your acceptance of such modifications.
                </p>
              </section>

              {/* Clause 18 */}
              <section id="clause-18" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  18. Governing Law &amp; Jurisdiction
                </h2>
                <p>
                  These Terms shall be governed by, construed, and enforced in accordance with the substantive laws of the Republic of India.
                </p>
                <p>
                  Any dispute, controversy, or claim arising out of or relating to these Terms or the breach, termination, or invalidity thereof shall be subject to the exclusive jurisdiction of the competent civil courts situated at <strong>Surat, Gujarat, India</strong>.
                </p>
              </section>

              {/* Clause 19 */}
              <section id="clause-19" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  19. Grievance Officer
                </h2>
                <p>
                  In compliance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, our Grievance Redressal Officer is:
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#E4E6EA] text-xs space-y-1">
                  <div><strong>Name:</strong> {BUSINESS_DETAILS.grievanceOfficer.name}</div>
                  <div><strong>Designation:</strong> {BUSINESS_DETAILS.grievanceOfficer.designation}</div>
                  <div><strong>Email:</strong> <a href={`mailto:${BUSINESS_DETAILS.grievanceOfficer.email}`} className="text-[#2F6FED]">{BUSINESS_DETAILS.grievanceOfficer.email}</a></div>
                  <div><strong>Address:</strong> {BUSINESS_DETAILS.registeredOffice}</div>
                  <div><strong>Turnaround Time:</strong> Grievances will be acknowledged within 48 hours and redressed within 30 days.</div>
                </div>
              </section>

              {/* Clause 20 */}
              <section id="clause-20" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-[#1F2430]">
                  20. Official Contact Information
                </h2>
                <p>
                  For questions regarding these Terms, please contact our support team at:
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#E4E6EA] text-xs space-y-1">
                  <div><strong>Brand Name:</strong> {BUSINESS_DETAILS.brandName}</div>
                  <div><strong>Registered Office:</strong> {BUSINESS_DETAILS.registeredOffice}</div>
                  <div><strong>Official Support Email:</strong> <a href={`mailto:${BUSINESS_DETAILS.supportEmail}`} className="text-[#2F6FED]">{BUSINESS_DETAILS.supportEmail}</a></div>
                  <div><strong>Support Working Hours:</strong> {BUSINESS_DETAILS.supportHours}</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
