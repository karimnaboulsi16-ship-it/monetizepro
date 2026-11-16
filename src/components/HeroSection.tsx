import React from 'react';
import { Zap, ArrowRight, Check, Gift } from 'lucide-react';
import { BONUSES } from '../data/upsellContent';

const HERO_INCLUDED_FEATURES = [
  'Manual Secreto completo do Método Viral Master Pro',
  'Passo a passo para TikTok, Instagram Reels e YouTube Shorts',
  'Técnicas de retenção acima de 85% nos primeiros 3 segundos',
  'Garantia dupla de satisfação de 30 dias',
  'Atualizações futuras gratuitas',
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-12 overflow-hidden">
      {/* Background soft ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-neutral-500/15 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Headline */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight uppercase leading-[1.1] max-w-5xl mx-auto mb-3 text-balance">
          NÃO ADIANTA VOCÊ TER 1 MILHÃO DE VÍDEOS{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-orange-300">
            SE NÃO SABE O SEGREDO DA VIRALIZAÇÃO E MONETIZAÇÃO
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-center text-orange-400 tracking-tight max-w-3xl mx-auto mb-8">
          Aprenda o segredo e monetize 10x mais rápido!
        </p>

        {/* Comparison Image replacing the previous card */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-900">
            <img
              src="/assets/aistudio/Do_Fracasso___Viraliza__o_no_YouTube_ea7f4a4b.png"
              alt="Sem saber o segredo da viralização versus aprendendo o segredo para viralizar mais rápido e ganhar dinheiro"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Hero CTA scrolling directly to the offer - ONLY green element */}
        <div className="flex justify-center">
          <a
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-bombard-glow w-full sm:w-auto py-4 px-8 rounded-2xl font-heading font-black text-base sm:text-lg text-white bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 hover:from-emerald-500 hover:via-green-400 hover:to-emerald-500 border border-emerald-400/80 transition-all duration-200 active:scale-[0.98] inline-flex items-center justify-center gap-3 cursor-pointer text-center"
          >
            <Zap className="relative z-10 w-5 h-5 fill-white shrink-0" />
            <span className="relative z-10 tracking-wide">
              SIM, QUERO MONETIZAR MAIS RÁPIDO!
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 shrink-0" />
          </a>
        </div>

        {/* Features & Bonuses Checklist below first CTA */}
        <div className="mt-8 max-w-xl mx-auto rounded-2xl border border-lime-400/50 bg-[#0d0d0d] px-6 py-6 sm:px-8 sm:py-7 shadow-xl">
          <h2 className="font-heading text-lg sm:text-xl font-black text-center text-white uppercase tracking-tight mb-5">
            Veja o que você <span className="text-lime-400">receberá</span>
          </h2>
          <div className="max-w-md mx-auto space-y-2.5 text-left">
            {HERO_INCLUDED_FEATURES.map((feature, index) => (
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
        </div>
      </div>
    </section>
  );
};
