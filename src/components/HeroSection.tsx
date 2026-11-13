import React from 'react';
import { ASSETS, PROBLEM_STATEMENT } from '../data/upsellContent';
import { Flame, TrendingUp, AlertCircle, Eye, Zap, ArrowRight } from 'lucide-react';

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
        className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-slate-500/15 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Pre-headline Badge */}
        <div className="flex justify-center mb-5 px-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-600 text-slate-200 text-[11px] sm:text-xs font-semibold tracking-wide uppercase shadow-md text-center">
            <span className="inline-flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Upgrade Exclusivo</span>
            </span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-amber-400 font-bold">Oferta Única</span>
          </div>
        </div>

        {/* Main Headline requested by user */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight uppercase leading-[1.1] max-w-5xl mx-auto mb-3 text-balance">
          NÃO BASTA TER VÍDEOS VIRAIS.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-orange-300">
            VOCÊ PRECISA SABER COMO VIRALIZÁ-LOS!
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-center text-orange-400 tracking-tight max-w-3xl mx-auto mb-8">
          Monetize 10x mais rápido!
        </p>

        {/* The Problem Statement */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-800/85 border border-slate-600/80 shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/70 border border-slate-600 text-orange-400 shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-slate-100 leading-snug mb-2">
                  &ldquo;{PROBLEM_STATEMENT.quote}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {PROBLEM_STATEMENT.subtext}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero CTA scrolling directly to the offer - ONLY green element */}
        <div className="flex justify-center mb-10">
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

        {/* Smartphone Growth Analytics */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-600/80 bg-slate-800/90 p-4 shadow-xl">
              <div className="relative rounded-xl overflow-hidden mb-3">
                <img
                  src={ASSETS.phoneGrowth}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/smartphone_viral_growth_1793370555605.jpg';
                  }}
                  alt="Estatísticas de crescimento viral no smartphone"
                  className="w-full h-56 sm:h-64 object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md border border-slate-600 px-2.5 py-1 rounded-md flex items-center gap-1.5 text-xs text-white font-semibold">
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                  <span>+1.250% Alcance Viral</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-md border border-slate-600 px-2.5 py-1 rounded-md flex items-center gap-1.5 text-xs text-amber-300 font-bold tabular-nums">
                  <Eye className="w-3.5 h-3.5" />
                  <span>3,8M Visualizações</span>
                </div>
              </div>

              {/* Instant benefits highlight */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-slate-900/65 border border-slate-700">
                  <span className="text-slate-200 font-medium">Ganchos magnéticos comprovados</span>
                  <span className="text-orange-400 font-bold font-mono">3 segundos</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-slate-900/65 border border-slate-700">
                  <span className="text-slate-200 font-medium">Retenção média do espectador</span>
                  <span className="text-orange-400 font-bold font-mono">82% - 94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
