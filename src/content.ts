/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const BUSINESS_DETAILS = {
  brandName: 'DriverConnect',
  registeredOffice: '24 Cars, Vesu, Surat, Gujarat 395007',
  supportEmail: 'driverconnect139@gmail.com',
  grievanceOfficer: {
    name: 'Anuj Khatik',
    designation: 'Founder',
    email: 'khatikanuj914@gmail.com',
    responseTime: 'Acknowledge within 48 hours, resolve within 30 days',
  },
  supportHours: '9:00 AM to 9:00 PM, all days',
  courtJurisdiction: 'Surat',
  launchCity: 'Surat',
  copyrightYear: new Date().getFullYear(),
  websiteUrl: 'https://driverconnect.in',
  appReleaseStatus: 'Launching Soon in Surat (Early Notification Available)',
} as const;

export interface InCityPackage {
  id: string;
  durationHours: number;
  price: number;
  title: string;
  badge?: string;
  tagline: string;
  includes: string[];
}

export const INCITY_PACKAGES: InCityPackage[] = [
  {
    id: 'incity-3h',
    durationHours: 3,
    price: 600,
    title: 'InCity 3 Hours',
    tagline: 'Ideal for errands, shopping, or local medical visits',
    includes: [
      '3 continuous hours of dedicated driver service',
      'Within Surat city limits',
      'Continuous trip tracking in the app',
      'Verified driver assigned to your own car',
      'Pre-ride & post-ride digital vehicle inspection',
    ],
  },
  {
    id: 'incity-6h',
    durationHours: 6,
    price: 1000,
    title: 'InCity 6 Hours',
    badge: 'Popular',
    tagline: 'Perfect for business meetings, weddings, or family visits',
    includes: [
      '6 continuous hours of dedicated driver service',
      'Within Surat city limits',
      'Multiple stops across the city as directed',
      'Verified driver assigned to your own car',
      'Continuous trip tracking in the app',
      'Pre-ride & post-ride digital vehicle inspection',
    ],
  },
  {
    id: 'incity-12h',
    durationHours: 12,
    price: 1800,
    title: 'InCity 12 Hours',
    tagline: 'Full-day convenience for back-to-back city appointments',
    includes: [
      '12 continuous hours of dedicated driver service',
      'Within Surat city limits',
      'All-day vehicle availability on your demand',
      'Verified driver assigned to your own car',
      'SOS button & live route monitoring',
      'Pre-ride & post-ride digital vehicle inspection',
    ],
  },
];

export interface OutStationPricing {
  day1Rate: number;
  extraDaysNote: string;
  dropInAnotherCityFee: number;
  includes: string[];
  notIncludes: string[];
}

export const OUTSTATION_PRICING: OutStationPricing = {
  day1Rate: 2200,
  extraDaysNote: 'As shown in the app at booking',
  dropInAnotherCityFee: 500,
  includes: [
    'Experienced highway-verified driver for your own car',
    'Intercity driving from Surat to your destination',
    'Round-trip or one-way travel as booked in the app',
    'Continuous trip safety monitoring',
  ],
  notIncludes: [
    'Fuel, tolls, parking fees, and traffic fines (payable directly by vehicle owner)',
    'Driver meals and overnight accommodation (unless agreed in advance)',
  ],
};

export const PRICING_PAYMENT_TERMS = {
  currency: 'INR',
  notice: 'All prices in INR. Prices shown are the final amount payable.',
  advancePercentage: 30,
  balanceDueText: '70% balance payable upon trip completion directly through the app',
  paymentGateway: 'Razorpay Checkout',
  paymentMethods: ['UPI', 'Debit & Credit Cards (Visa, Mastercard)', 'Net Banking', 'Supported Wallets'],
} as const;

export const REFUND_TERMS_SUMMARY = {
  advanceRequirement: '30% advance payable at booking confirmation',
  cancellationBeforeOtp: '50% of the advance credited to DriverConnect Wallet',
  cancellationAfterOtp: '0% refund once the ride-start OTP is shared with the driver',
  platformOrDriverCancellation: '100% full refund to original payment method within 7 to 10 working days',
  walletCreditsNote: 'Wallet credits are non-withdrawable and usable solely against future rides',
  disputeWindow: '48 hours from scheduled trip start time',
} as const;

export const HOME_TRUST_ITEMS = [
  {
    title: 'Verified drivers',
    description: 'Government identity, driving licence, and background vetted before onboarding.',
  },
  {
    title: 'Live trip tracking',
    description: 'Real-time GPS route sharing with your loved ones and emergency contacts.',
  },
  {
    title: 'SOS to emergency contacts',
    description: 'Instant 1-tap SOS trigger alerting your emergency contacts and our team.',
  },
  {
    title: 'Transparent pricing',
    description: 'Clear upfront fixed pricing in INR. No surge pricing, no hidden additions.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Book',
    description: 'Select your duration (3, 6, 12 hours InCity or daily OutStation) and enter your pickup address in Surat.',
  },
  {
    number: '02',
    title: 'Get matched',
    description: 'A verified local driver near you accepts your booking and arrives promptly at your location.',
  },
  {
    number: '03',
    title: 'Confirm and pay 30% advance',
    description: 'Confirm the driver details and pay the 30% advance securely via Razorpay (UPI, cards, net banking).',
  },
  {
    number: '04',
    title: 'Ride safely',
    description: 'Share the start OTP after inspecting your car. Settle the remaining 70% balance at trip completion.',
  },
];

export const WHY_DRIVERCONNECT_CARDS = [
  {
    title: 'Your own car',
    description: 'Travel in the comfort, hygiene, and familiar setting of your own vehicle. No crowded cabs or unfamiliar cars.',
  },
  {
    title: 'Pay for the time you need',
    description: 'Choose 3, 6, or 12 hours for city errands, or multi-day options for trips outside Surat without paying for idle days.',
  },
  {
    title: 'Verified drivers',
    description: 'Every driver is thoroughly verified with driving license verification, address proof, and conduct reviews.',
  },
  {
    title: 'Safety built in',
    description: 'Live ride tracking, SOS emergency alerting, pre-ride vehicle condition photos, and masked contact numbers.',
  },
];

export const WHAT_WE_STAND_FOR = [
  {
    title: 'Transparent pricing',
    description: 'Clear upfront pricing in INR with a simple 30% advance. What you see is the final amount payable.',
  },
  {
    title: 'Your privacy',
    description: 'Phone numbers are never exposed between customers and drivers. In-app communication protects personal details.',
  },
  {
    title: 'Respect for your car',
    description: 'Drivers perform mandatory digital vehicle condition photos before ignition and after trip completion.',
  },
  {
    title: 'Fair work for drivers',
    description: 'Drivers choose their categories, set availability freely, and receive transparent direct bank payouts.',
  },
];

export const FAQS = [
  {
    q: 'What is DriverConnect?',
    a: 'DriverConnect is a time-based driver booking platform launched in Surat, Gujarat. We provide professional, background-verified drivers to drive your personal car for short errands (3, 6, 12 hours) or outstation journeys.',
  },
  {
    q: 'Do you provide the car?',
    a: 'No. DriverConnect is strictly a driver-on-demand service. Customers provide their own insured, roadworthy private vehicle, and we match you with a verified professional driver to drive it for you.',
  },
  {
    q: 'How is the driver verified?',
    a: 'Every driver undergoes strict KYC checks: valid Commercial/Transport or Private Driving Licence verification with official databases, government ID (masked Aadhaar), address verification, and driving history checks.',
  },
  {
    q: 'What is the advance payment?',
    a: 'A 30% advance is required via Razorpay Checkout (UPI, cards, net banking) upon booking confirmation to secure your driver. The remaining 70% balance is payable upon trip completion.',
  },
  {
    q: 'Can I cancel my booking?',
    a: 'Yes. If you cancel before sharing the ride-start OTP with your driver, 50% of your 30% advance is credited to your DriverConnect Wallet for future rides. Once the ride-start OTP is entered, no refund is permitted. If DriverConnect or the driver cancels, you receive a 100% full refund to your original payment method within 7 to 10 working days.',
  },
  {
    q: 'Do you operate outside Surat?',
    a: 'All trips must originate within Surat city limits. For OutStation journeys originating in Surat, drivers can take you to destinations outside Surat across Gujarat and neighboring states on a daily package basis.',
  },
];
