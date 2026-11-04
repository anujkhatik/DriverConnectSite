/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FareCalculation {
  totalFare: number;
  advanceAmount: number;
  balanceAmount: number;
  currency: string;
}

/**
 * Calculates the 30% advance and 70% balance payable for a given total fare in INR.
 */
export function calculateAdvancePayment(totalFare: number): FareCalculation {
  if (totalFare < 0) {
    throw new Error('Total fare must be non-negative');
  }
  const advanceAmount = Math.round(totalFare * 0.3);
  const balanceAmount = totalFare - advanceAmount;
  return {
    totalFare,
    advanceAmount,
    balanceAmount,
    currency: 'INR',
  };
}

/**
 * Computes estimated Outstation fare.
 * Day 1 is fixed at ₹2,200.
 * Extra days are estimated at base daily rate (₹2,200/day) as configured in the platform.
 * Optional drop-off in another city adds flat ₹500 driver return fee.
 */
export function calculateOutstationFare(
  days: number,
  dropInAnotherCity = false
): FareCalculation & {
  day1Fare: number;
  extraDaysFare: number;
  returnFee: number;
} {
  const safeDays = Math.max(1, Math.floor(days || 1));
  const day1Fare = 2200;
  const extraDaysFare = safeDays > 1 ? (safeDays - 1) * 2200 : 0;
  const returnFee = dropInAnotherCity ? 500 : 0;
  const totalFare = day1Fare + extraDaysFare + returnFee;

  const { advanceAmount, balanceAmount } = calculateAdvancePayment(totalFare);

  return {
    totalFare,
    advanceAmount,
    balanceAmount,
    currency: 'INR',
    day1Fare,
    extraDaysFare,
    returnFee,
  };
}

export type RefundDestination = 'WALLET' | 'ORIGINAL_PAYMENT' | 'NONE';

export interface RefundCalculation {
  refundAmount: number;
  destination: RefundDestination;
  percentage: number;
  message: string;
}

/**
 * Implements the DriverConnect Refund Policy:
 * 1. Driver or Platform cancellation: 100% full refund to original payment method within 7-10 working days.
 * 2. Customer cancellation before ride-start OTP: 50% of the 30% advance credited to DriverConnect Wallet.
 * 3. Customer cancellation after ride-start OTP: 0% refund (no refund).
 */
export function calculateCancellationRefund(params: {
  advanceAmount: number;
  cancelledByPlatformOrDriver: boolean;
  cancelledBeforeOtp: boolean;
}): RefundCalculation {
  const { advanceAmount, cancelledByPlatformOrDriver, cancelledBeforeOtp } = params;

  if (advanceAmount <= 0) {
    return {
      refundAmount: 0,
      destination: 'NONE',
      percentage: 0,
      message: 'No advance was charged for this booking.',
    };
  }

  if (cancelledByPlatformOrDriver) {
    return {
      refundAmount: advanceAmount,
      destination: 'ORIGINAL_PAYMENT',
      percentage: 100,
      message:
        'Full 100% refund of ₹' +
        advanceAmount.toLocaleString('en-IN') +
        ' will be credited to your original payment method within 7 to 10 working days.',
    };
  }

  if (cancelledBeforeOtp) {
    const refundAmount = Math.round(advanceAmount * 0.5);
    return {
      refundAmount,
      destination: 'WALLET',
      percentage: 50,
      message:
        '50% refund of ₹' +
        refundAmount.toLocaleString('en-IN') +
        ' will be credited to your DriverConnect Wallet for future bookings.',
    };
  }

  return {
    refundAmount: 0,
    destination: 'NONE',
    percentage: 0,
    message: 'No refund is applicable after the ride-start OTP has been shared with the driver.',
  };
}

/**
 * Validates the contact form fields.
 */
export function validateContactForm(values: {
  name: string;
  email: string;
  message: string;
}): { isValid: boolean; errors: { name?: string; email?: string; message?: string } } {
  const errors: { name?: string; email?: string; message?: string } = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !emailRegex.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please enter a message with at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface WaitlistFormData {
  name: string;
  phone: string;
  email?: string;
  platform: 'android' | 'ios' | 'both';
  area: string;
  carType?: string;
}

export function validateWaitlistForm(values: WaitlistFormData): {
  isValid: boolean;
  errors: { name?: string; phone?: string; email?: string };
} {
  const errors: { name?: string; phone?: string; email?: string } = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name (minimum 2 characters).';
  }

  // Must have at least 10 digits
  const cleanPhone = String(values.phone || '').replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    errors.phone = 'Please enter a valid 10-digit mobile number for notification.';
  }

  if (values.email && values.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

