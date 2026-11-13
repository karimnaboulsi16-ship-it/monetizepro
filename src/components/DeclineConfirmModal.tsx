import React from 'react';
import { ArrowRight, X, ShieldAlert } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CHECKOUT_URL, CURRENCY_RATES, formatCurrencyPrice } from '../utils/pricing';
import { trackPixelEvent } from '../utils/pixel';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDecline: () => void;
  currency: CurrencyCode;
}

export const DeclineConfirmModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onConfirmDecline,
  currency,
}) => {
  if (!isOpen) return null;

  const currentPricing = CURRENCY_RATES[currency] || CURRENCY_RATES.BRL;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="decline-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-slate-600 bg-slate-800 p-6 shadow-2xl text-center">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-300 hover:text-white bg-slate-700 border border-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Warning Icon */}
        <div className="mx-auto w-12 h-12 rounded-xl bg-slate-900/70 border border-slate-600 flex items-center justify-center text-amber-400 mb-3">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400 mb-1 block">
          Tem certeza que deseja deixar isso passar?
        </span>
        <h3 id="decline-modal-title" className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2">
          Esta oferta não vai aparecer novamente
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed mb-6">
          Se você sair desta página, o preço do <strong>Guia Viral Master Pro</strong> voltará ao seu valor normal de <strong>{formatCurrencyPrice(currentPricing.regularPrice, currency)}</strong>. Você não poderá adicioná-lo por apenas <strong>{formatCurrencyPrice(currentPricing.offerPrice, currency)}</strong> depois.
        </p>

        <div className="space-y-3">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackPixelEvent('InitiateCheckout', { value: currentPricing.offerPrice, currency: currentPricing.code });
              onClose();
            }}
            className="cta-bombard-glow w-full py-3.5 px-5 rounded-xl font-heading font-black text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 hover:from-emerald-500 hover:via-green-400 hover:to-emerald-500 border border-emerald-400/80 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <span className="relative z-10">SIM, QUERO MONETIZAR MAIS RÁPIDO POR APENAS {formatCurrencyPrice(currentPricing.offerPrice, currency)}</span>
            <ArrowRight className="relative z-10 w-4 h-4" />
          </a>

          <button
            onClick={onConfirmDecline}
            className="w-full py-2.5 px-4 rounded-xl text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            Entendo o risco, continuar apenas com o pack básico
          </button>
        </div>
      </div>
    </div>
  );
};
