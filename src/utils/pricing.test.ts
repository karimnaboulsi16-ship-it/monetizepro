import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CHECKOUT_URL,
  CURRENCY_RATES,
  calculateDiscountPercent,
  calculateSavings,
  formatCurrencyPrice,
  calculateCombinedOrder,
} from './pricing';

test('CHECKOUT_URL points to the official Kirvano checkout', () => {
  assert.equal(CHECKOUT_URL, 'https://pay.kirvano.com/d118db5c-3284-4688-847b-ddf03fc854dc');
});

test('calculateDiscountPercent correctly calculates discount percentage', () => {
  assert.equal(calculateDiscountPercent(147, 25), 83);
  assert.equal(calculateDiscountPercent(100, 20), 80);
  assert.equal(calculateDiscountPercent(0, 25), 0);
});

test('calculateSavings returns difference between regular and offer price', () => {
  assert.equal(calculateSavings(147, 25), 122);
  assert.equal(calculateSavings(25, 147), 0);
});

test('formatCurrencyPrice formats currencies correctly without R$ and without ,00', () => {
  assert.equal(CURRENCY_RATES.BRL.offerPrice, 25);
  assert.equal(formatCurrencyPrice(25, 'BRL'), '25');
  assert.equal(formatCurrencyPrice(147, 'BRL'), '147');
  assert.equal(formatCurrencyPrice(9, 'USD'), '$9');
  assert.equal(formatCurrencyPrice(16, 'EUR'), '€16');
  assert.match(formatCurrencyPrice(299, 'MXN'), /MX\$\s*299/);
});

test('calculateCombinedOrder produces accurate receipts', () => {
  const result = calculateCombinedOrder(47, 25);
  assert.equal(result.totalPrice, 72);
  assert.equal(result.totalSaved, 122);
});
