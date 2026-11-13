export const FACEBOOK_PIXEL_ID = '1428966156115611';
export const FACEBOOK_ACCESS_TOKEN = 'EAAXhiY72ZBSoBSxIcATwlgQ5ZCi7NhOUM8Eg1mXRf1xPxi2WgVjNlJ5mTHZBDYhZAnNB1GkXSbTRn4bXW0DdCGt6U3ZCajNEt5i4oNPm4DMtido22jZAAJgFF8ZBUZAtwhE8fzEPa1ZBthAAw6w6CYZBuABfuSaFVsWKUJBy7CFq916DzfixLwBYKwtfrTGutsicO13QZDZD';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function trackPixelEvent(eventName: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
}
