import React from 'react';
import { ShieldCheck, Zap, ArrowRight, Gift, Lock, Clock } from 'lucide-react';
import { BONUSES } from '../data/upsellContent';
import { CurrencyCode } from '../types';
import {
  CHECKOUT_URL,
  CURRENCY_RATES,
  calculateDiscountPercent,
  formatCurrencyPrice,
} from '../utils/pricing';
import { trackPixelEvent } from '../utils/pixel';

interface Props {
  currency: CurrencyCode;
  onDeclineUpsell: () => void;
}

export const OfferStackSection: React.FC<Props> = ({
  currency,
  onDeclineUpsell,
}) => {
  const currentPricing = CURRENCY_RATES[currency] || CURRENCY_RATES.BRL;
  const discountPercent = calculateDiscountPercent(
    currentPricing.regularPrice,
    currentPricing.offerPrice
  );
  const totalRealValue = BONUSES.reduce((sum, item) => sum + item.value, 0);

  return (
    <section id="oferta" className="py-12 px-4 relative scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        {/* Main Offer Card Container */}
        <div className="relative rounded-3xl border-2 border-slate-600 bg-slate-800/95 p-6 sm:p-10 shadow-2xl shadow-slate-950/60">
          {/* Top Banner Ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="px-5 py-1.5 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-heading font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-orange-500/30 whitespace-nowrap">
              OFERTA EXCLUSIVA DESTA PÁGINA · {discountPercent}% OFF
            </span>
          </div>

          {/* Offer Title & Summary */}
          <div className="text-center mt-3 mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Adicione O <span className="text-orange-400">Manual Secreto: Viral Master Pro</span> Ao Seu Pedido
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2">
              O complemento indispensável para que os milhares de vídeos do seu pack explodam em visualizações, seguidores e monetização.
            </p>
          </div>

          {/* What's Inside - Value Stack with Red & Orange Gifts */}
          <div className="space-y-4 mb-8">
            {BONUSES.map((bonus, index) => {
              const isRed = index % 2 === 0;
              return (
                <div
                  key={bonus.id}
                  className="p-4 rounded-xl bg-slate-900/65 border border-slate-700 flex items-start gap-3.5"
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 mt-0.5 shadow-md text-white ${
                      isRed
                        ? 'bg-gradient-to-br from-red-600 via-red-500 to-orange-500 shadow-red-500/25 border border-red-400/50'
                        : 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 shadow-orange-500/25 border border-orange-400/50'
                    }`}
                  >
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                          isRed
                            ? 'text-red-300 bg-red-950/60 border-red-700/60'
                            : 'text-orange-300 bg-orange-950/60 border-orange-700/60'
                        }`}
                      >
                        {bonus.tag} · #{index + 1}
                      </span>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">
                        {bonus.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">{bonus.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Box */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-700 text-center mb-8">
            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-300 mb-2">
              <span>Valor Total Real: <del className="text-slate-500">{formatCurrencyPrice(totalRealValue, currency)}</del></span>
              <span aria-hidden="true">·</span>
              <span>Preço Normal: <del className="text-slate-500">{formatCurrencyPrice(currentPricing.regularPrice, currency)}</del></span>
            </div>

            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
                Só Hoje:
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white font-mono tabular-nums">
                {formatCurrencyPrice(currentPricing.offerPrice, currency)}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Pagamento Único
              </span>
            </div>

            <div className="mt-3 py-2 px-4 rounded-xl bg-amber-950/45 border border-amber-500/40 inline-block">
              <p className="text-xs sm:text-sm font-bold text-amber-300">
                Você só paga o restante do valor se tiver resultados. Se não tiver resultados, não paga absolutamente nada a mais!
              </p>
            </div>
          </div>

          {/* Checkout CTA & Decline Button */}
          <div className="space-y-4">
            {/* Primary Action Button - ONLY Green CTA (opens Kirvano checkout directly in a new tab) */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('InitiateCheckout', { value: currentPricing.offerPrice, currency: currentPricing.code })}
              className="cta-bombard-glow w-full py-5 px-6 rounded-2xl font-heading font-black text-base sm:text-xl text-white bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 hover:from-emerald-500 hover:via-green-400 hover:to-emerald-500 border border-emerald-400/80 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer text-center"
            >
              <Zap className="relative z-10 w-6 h-6 fill-white shrink-0" />
              <span className="relative z-10 tracking-wide">
                SIM, QUERO MONETIZAR MAIS RÁPIDO! — APENAS {formatCurrencyPrice(currentPricing.offerPrice, currency)}
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 shrink-0" />
            </a>

            {/* Micro reassurance badges below button */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs text-slate-300 pt-1">
              <span className="inline-flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-orange-400" />
                Cobrança automática no seu cartão / método atual
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                Entrega instantânea no seu e-mail
              </span>
            </div>

            {/* Discrete Decline Option */}
            <div className="pt-4 text-center">
              <button
                onClick={onDeclineUpsell}
                className="text-xs text-slate-400 hover:text-slate-200 underline decoration-slate-600 hover:decoration-slate-300 transition-colors py-2 px-4 cursor-pointer"
              >
                Não, obrigado. Prefiro tentar viralizar por conta própria e correr o risco dos meus vídeos não terem visualizações.
              </button>
            </div>
          </div>

          {/* Guarantee Seal Box */}
          <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-slate-900/65 border border-slate-700">
            <div className="p-3 rounded-full bg-slate-800 border border-slate-600 text-amber-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-white text-sm">
                Garantia Incondicional Blindada de 30 Dias
              </h5>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                Teste o método completo com o seu Pack Viral Master. Se em 30 dias você não conseguir disparar suas visualizações, basta nos enviar um e-mail e reembolsaremos 100% desta atualização na hora. Sem perguntas e sem complicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
