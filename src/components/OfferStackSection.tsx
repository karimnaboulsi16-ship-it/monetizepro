import React from 'react';
import { Check, Gift, ShieldCheck, Lock, Clock } from 'lucide-react';
import { ASSETS, BONUSES } from '../data/upsellContent';
import { CurrencyCode } from '../types';
import {
  CURRENCY_RATES,
  formatCurrencyPrice,
  getCheckoutUrlWithTracking,
} from '../utils/pricing';

interface Props {
  currency: CurrencyCode;
  onDeclineUpsell: () => void;
}

const INCLUDED_FEATURES = [
  'Manual Secreto completo do Método Viral Master Pro',
  'Passo a passo para TikTok, Instagram Reels e YouTube Shorts',
  'Técnicas de retenção acima de 85% nos primeiros 3 segundos',
  'Acesso instantâneo imediato',
  'Garantia dupla de satisfação de 30 dias',
  'Atualizações futuras gratuitas',
];

export const OfferStackSection: React.FC<Props> = ({
  currency,
  onDeclineUpsell,
}) => {
  const currentPricing = CURRENCY_RATES[currency] || CURRENCY_RATES.BRL;
  const checkoutHref = getCheckoutUrlWithTracking();

  return (
    <section id="oferta" className="py-12 px-4 relative scroll-mt-28">
      <div className="max-w-xl mx-auto">
        {/* Main Neon-Bordered Vertical Offer Card */}
        <div className="relative rounded-2xl border border-lime-400/75 bg-[#0d0d0d] px-6 py-8 sm:px-10 sm:py-10 shadow-[0_0_35px_rgba(163,230,53,0.12)]">
          {/* Product Mockup Visual */}
          <div className="max-w-[320px] mx-auto mb-6 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img
              src={ASSETS.guideMockup}
              alt="Manual Secreto Viral Master Pro"
              className="w-full h-auto block"
            />
          </div>

          {/* Offer Title */}
          <div className="text-center mb-7">
            <h2 className="font-heading text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-snug">
              Adicione O <span className="text-lime-400">Manual Secreto: Viral Master Pro</span> Ao Seu Pedido
            </h2>
          </div>

          {/* Checklist + Bonuses Stack */}
          <div className="max-w-md mx-auto space-y-2.5 mb-8 text-left">
            {INCLUDED_FEATURES.map((feature, index) => (
              <div key={index} className="flex items-start gap-2.5 text-sm leading-snug">
                <span className="w-4 h-4 rounded-[3px] bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3 h-3 text-white stroke-[3]" />
                </span>
                <span className="text-neutral-100 font-medium">{feature}</span>
              </div>
            ))}

            {BONUSES.map((bonus) => (
              <div key={bonus.id} className="flex items-start gap-2.5 text-sm leading-snug">
                <Gift className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-neutral-100 font-medium">
                  <span className="font-extrabold text-lime-400 uppercase tracking-wide mr-1">
                    BÔNUS:
                  </span>
                  {bonus.title}
                  <Gift className="inline-block w-3.5 h-3.5 text-amber-400 ml-1.5 -mt-0.5" />
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Block */}
          <div className="text-center mb-7">
            <p className="text-base sm:text-lg text-neutral-400 font-medium">
              De{' '}
              <del className="text-red-500 font-semibold">
                {formatCurrencyPrice(currentPricing.regularPrice, currency)}
              </del>
            </p>

            <p className="font-heading font-extrabold text-white text-base sm:text-lg mt-1">
              Quero tudo isso por apenas
            </p>

            <div className="font-heading font-black text-6xl sm:text-7xl text-lime-400 tracking-tight leading-none my-2 tabular-nums">
              {formatCurrencyPrice(currentPricing.offerPrice, currency)}
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-medium">
              (Acesso vitalício — pagamento único)
            </p>
          </div>

          {/* Glowing Pill Green CTA */}
          <div className="space-y-4">
            <a
              href={checkoutHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 sm:py-5 px-6 rounded-full font-heading font-black text-base sm:text-lg text-neutral-950 uppercase tracking-wide bg-gradient-to-b from-[#66ff99] via-[#34eb74] to-[#22c55e] hover:brightness-105 shadow-[0_0_32px_rgba(52,235,116,0.55)] transition-all duration-200 active:scale-[0.98] flex items-center justify-center cursor-pointer text-center"
            >
              SIM, QUERO MONETIZAR MAIS RÁPIDO!
            </a>

            {/* Micro reassurance badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-neutral-400 pt-1 text-center">
              <span className="inline-flex items-center gap-1">
                <Lock className="w-3 h-3 text-lime-400" />
                Cobrança automática no seu cartão / método atual
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3 text-lime-400" />
                Entrega instantânea no seu e-mail
              </span>
            </div>

            {/* Discrete Decline Option */}
            <div className="pt-2 text-center">
              <button
                onClick={onDeclineUpsell}
                className="text-xs text-neutral-400 hover:text-neutral-200 underline decoration-neutral-600 hover:decoration-neutral-300 transition-colors py-1.5 px-3 cursor-pointer"
              >
                Não, obrigado. Prefiro tentar viralizar por conta própria e correr o risco dos meus vídeos não terem visualizações.
              </button>
            </div>
          </div>

          {/* Guarantee Seal */}
          <div className="mt-7 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center gap-3.5 p-3.5 rounded-xl bg-neutral-900/65 border border-neutral-800">
            <div className="p-2.5 rounded-full bg-neutral-800 border border-neutral-700 text-lime-400 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-white text-xs sm:text-sm">
                Garantia Incondicional Blindada de 30 Dias
              </h5>
              <p className="text-[11px] sm:text-xs text-neutral-300 mt-0.5 leading-relaxed">
                Teste o método completo com o seu Pack Viral Master. Se em 30 dias você não conseguir disparar suas visualizações, basta nos enviar um e-mail e reembolsaremos 100% desta atualização na hora. Sem perguntas e sem complicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
