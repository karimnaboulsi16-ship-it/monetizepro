import React from 'react';
import { ASSETS } from '../data/upsellContent';

export const SocialProofStrip: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Studio Backdrop & Creator Results */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800/90 shadow-2xl mb-8">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={ASSETS.studioBackdrop}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/viral_creator_studio_1793370556742.jpg';
            }}
            alt="Estúdio de criação e análise viral"
            className="w-full h-full object-cover object-center filter brightness-90"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/65 to-transparent" />

          {/* Overlay Headline */}
          <div className="absolute bottom-6 left-6 right-6 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1.5 block">
              Comprovado Em Contas Reais
            </span>
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Criado Para Quem Não Tem Experiência, Criadores, Marcas Pessoais e Empreendedores Digitais
            </h3>
          </div>
        </div>

        {/* 4 Quantitative Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-800 border-t border-slate-700">
          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-black font-mono text-orange-400 tabular-nums">
              +48,5M
            </p>
            <p className="text-xs text-slate-200 font-semibold mt-0.5">
              Visualizações acumuladas
            </p>
            <p className="text-[11px] text-slate-400">Nos últimos 90 dias</p>
          </div>

          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-black font-mono text-white tabular-nums">
              89,4%
            </p>
            <p className="text-xs text-slate-200 font-semibold mt-0.5">
              Retenção média
            </p>
            <p className="text-[11px] text-slate-400">Primeiros 3 segundos</p>
          </div>

          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-black font-mono text-orange-400 tabular-nums">
              14 Dias
            </p>
            <p className="text-xs text-slate-200 font-semibold mt-0.5">
              Tempo até o 1º viral
            </p>
            <p className="text-[11px] text-slate-400">Média dos alunos</p>
          </div>

          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-black font-mono text-white tabular-nums">
              3 Redes
            </p>
            <p className="text-xs text-slate-200 font-semibold mt-0.5">
              TikTok, Reels e Shorts
            </p>
            <p className="text-[11px] text-slate-400">Mesmo vídeo viralizado</p>
          </div>
        </div>
      </div>
    </section>
  );
};
