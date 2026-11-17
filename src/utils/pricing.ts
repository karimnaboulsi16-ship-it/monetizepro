import { CurrencyCode, CurrencyConfig } from '../types';

export const CHECKOUT_URL = 'https://pay.kirvano.com/d118db5c-3284-4688-847b-ddf03fc854dc';

const TRACKING_PARAM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
  'gbraid',
  'wbraid',
  'ttclid',
  'tbclid',
  'src',
  'xcod',
  'sck',
  'click_id',
];

export function getCheckoutUrlWithTracking(search?: string): string {
  const query =
    search !== undefined
      ? search
      : typeof window !== 'undefined'
        ? window.location.search
        : '';
  if (!query || query.length < 2) return CHECKOUT_URL;

  try {
    const incoming = new URLSearchParams(query.startsWith('?') ? query.slice(1) : query);
    const target = new URL(CHECKOUT_URL);
    for (const key of TRACKING_PARAM_KEYS) {
      const val = incoming.get(key);
      if (val && val !== 'null' && val !== 'undefined' && !target.searchParams.has(key)) {
        target.searchParams.set(key, val);
      }
    }
    return target.toString();
  } catch {
    return CHECKOUT_URL;
  }
}

export const CURRENCY_RATES: Record<CurrencyCode, CurrencyConfig> = {
  BRL: {
    code: 'BRL',
    symbol: 'R$',
    regularPrice: 147,
    offerPrice: 25,
    rate: 1,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    regularPrice: 67,
    offerPrice: 9,
    rate: 1,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    regularPrice: 65,
    offerPrice: 16,
    rate: 0.94,
  },
  MXN: {
    code: 'MXN',
    symbol: 'MX$',
    regularPrice: 1190,
    offerPrice: 299,
    rate: 18.5,
  },
  COP: {
    code: 'COP',
    symbol: 'COL$',
    regularPrice: 280000,
    offerPrice: 69000,
    rate: 4200,
  },
};

export function calculateDiscountPercent(regularPrice: number, offerPrice: number): number {
  if (regularPrice <= 0 || offerPrice < 0) return 0;
  const discount = ((regularPrice - offerPrice) / regularPrice) * 100;
  return Math.round(discount);
}

export function calculateSavings(regularPrice: number, offerPrice: number): number {
  return Math.max(0, regularPrice - offerPrice);
}

export function formatCurrencyPrice(amount: number, currency: CurrencyCode): string {
  const config = CURRENCY_RATES[currency] || CURRENCY_RATES.BRL;
  if (currency === 'BRL') {
    return `${Math.round(amount).toLocaleString('pt-BR')}`;
  }
  if (currency === 'COP' || currency === 'MXN') {
    return `${config.symbol} ${Math.round(amount).toLocaleString('pt-BR')}`;
  }
  return `${config.symbol}${Math.round(amount)}`;
}

export function calculateCombinedOrder(basePackPrice: number, upsellPrice: number) {
  return {
    basePackPrice,
    upsellPrice,
    totalPrice: basePackPrice + upsellPrice,
    regularTotal: basePackPrice + 147,
    totalSaved: 147 - upsellPrice,
  };
}
