/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateAdvancePayment,
  calculateOutstationFare,
  calculateCancellationRefund,
  validateContactForm,
  validateWaitlistForm,
} from './pricing.ts';

test('calculateAdvancePayment computes 30% advance and 70% balance correctly', () => {
  // InCity 3 Hours: ₹600 -> Advance ₹180, Balance ₹420
  const res3h = calculateAdvancePayment(600);
  assert.equal(res3h.advanceAmount, 180);
  assert.equal(res3h.balanceAmount, 420);
  assert.equal(res3h.totalFare, 600);

  // InCity 6 Hours: ₹1,000 -> Advance ₹300, Balance ₹700
  const res6h = calculateAdvancePayment(1000);
  assert.equal(res6h.advanceAmount, 300);
  assert.equal(res6h.balanceAmount, 700);

  // InCity 12 Hours: ₹1,800 -> Advance ₹540, Balance ₹1260
  const res12h = calculateAdvancePayment(1800);
  assert.equal(res12h.advanceAmount, 540);
  assert.equal(res12h.balanceAmount, 1260);
});

test('calculateOutstationFare computes day 1 and return fee accurately', () => {
  // Day 1 Outstation without return fee: ₹2,200
  const resDay1 = calculateOutstationFare(1, false);
  assert.equal(resDay1.totalFare, 2200);
  assert.equal(resDay1.day1Fare, 2200);
  assert.equal(resDay1.returnFee, 0);
  assert.equal(resDay1.advanceAmount, 660);
  assert.equal(resDay1.balanceAmount, 1540);

  // Day 1 Outstation with ₹500 drop in another city: ₹2,700
  const resDay1Drop = calculateOutstationFare(1, true);
  assert.equal(resDay1Drop.totalFare, 2700);
  assert.equal(resDay1Drop.returnFee, 500);
  assert.equal(resDay1Drop.advanceAmount, 810);
  assert.equal(resDay1Drop.balanceAmount, 1890);

  // 2 Days Outstation: ₹2,200 + ₹2,200 = ₹4,400
  const resDay2 = calculateOutstationFare(2, false);
  assert.equal(resDay2.totalFare, 4400);
  assert.equal(resDay2.extraDaysFare, 2200);
});

test('calculateCancellationRefund enforces platform refund rules strictly', () => {
  const advance = 180; // For ₹600 ride

  // Platform/Driver cancelled: 100% to original payment method within 7-10 working days
  const refundPlatform = calculateCancellationRefund({
    advanceAmount: advance,
    cancelledByPlatformOrDriver: true,
    cancelledBeforeOtp: true,
  });
  assert.equal(refundPlatform.percentage, 100);
  assert.equal(refundPlatform.refundAmount, 180);
  assert.equal(refundPlatform.destination, 'ORIGINAL_PAYMENT');
  assert.match(refundPlatform.message, /7 to 10 working days/i);

  // Customer cancelled before OTP: 50% to DriverConnect wallet
  const refundBeforeOtp = calculateCancellationRefund({
    advanceAmount: advance,
    cancelledByPlatformOrDriver: false,
    cancelledBeforeOtp: true,
  });
  assert.equal(refundBeforeOtp.percentage, 50);
  assert.equal(refundBeforeOtp.refundAmount, 90);
  assert.equal(refundBeforeOtp.destination, 'WALLET');
  assert.match(refundBeforeOtp.message, /DriverConnect Wallet/i);

  // Customer cancelled after OTP: 0% refund
  const refundAfterOtp = calculateCancellationRefund({
    advanceAmount: advance,
    cancelledByPlatformOrDriver: false,
    cancelledBeforeOtp: false,
  });
  assert.equal(refundAfterOtp.percentage, 0);
  assert.equal(refundAfterOtp.refundAmount, 0);
  assert.equal(refundAfterOtp.destination, 'NONE');
});

test('validateContactForm checks required fields and formats', () => {
  const invalid = validateContactForm({ name: '', email: 'bad-email', message: 'hi' });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Rahul Patel',
    email: 'rahul@example.com',
    message: 'Need a driver for my Honda City on Sunday morning in Vesu.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('validateWaitlistForm validates user contact and platform selection', () => {
  const invalid = validateWaitlistForm({
    name: 'A',
    phone: '123',
    platform: 'android',
    area: 'Vesu',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);

  const valid = validateWaitlistForm({
    name: 'Priya Sharma',
    phone: '9876543210',
    email: 'priya@example.com',
    platform: 'ios',
    area: 'Adajan',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

