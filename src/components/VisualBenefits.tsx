import React, { useState } from 'react';
import { Eye, TrendingUp, Compass, Zap, CheckCircle2, ChevronRight, Flame } from 'lucide-react';
import { BENEFITS } from '../data/upsellContent';

export const VisualBenefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('benefit-1');

  const getBenefitIcon = (type: string) => {
    switch (type) {
      case 'views':
        return <Eye className="w-6 h-6 text-orange-400" />;
      case 'speed':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'strategy':
        return <Compass className="w-6 h-6 text-slate-200" />;
      default:
        return <Zap className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section className="py-12 bg-slate-900/45 border-y border-slate-700/80 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2">
            A Tríade Do Sucesso Viral
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            3 Pilares Para Desbloquear O Algoritmo
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            O Pack entrega os vídeos prontos. O Guia Master entrega as chaves para cada vídeo alcançar milhões.
          </p>
        </div>

        {/* 3 Visual Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {BENEFITS.map((benefit, index) => {
            const isSelected = activeTab === benefit.id;
            return (
              <div
                key={benefit.id}
                onClick={() => setActiveTab(benefit.id)}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800 border-2 border-orange-500 shadow-xl shadow-slate-950/40'
                    : 'bg-slate-800/75 border border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                }`}
              >
                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/75 border border-slate-700">
                      {getBenefitIcon(benefit.iconType)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-900/70 text-orange-300 border border-slate-600">
                      {benefit.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-400">
                      Pilar 0{index + 1}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white tracking-tight mt-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400 mt-0.5">
                      {benefit.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {benefit.description}
                  </p>
                </div>

                {/* Card Bottom: Big Metric Display */}
                <div className="pt-4 border-t border-slate-700/80">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
                        {benefit.metric}
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {benefit.metricLabel}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-900/70 flex items-center justify-center text-slate-400 transition-colors">
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-orange-400' : ''}`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Comparison: Com o Guia vs Sem o Guia */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/90 p-5 sm:p-7 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Sem Guia */}
            <div className="p-5 rounded-xl bg-red-950/35 border border-red-500/35">
              <div className="flex items-center gap-2 mb-3 text-red-400 font-heading font-bold text-sm uppercase">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Apenas com os vídeos (Sem Estratégia)
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Vídeos travados em 200 a 500 visualizações.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Espectadores saem no segundo 2 por falta de gancho magnético.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Perda de tempo publicando em horários sem alcance.</span>
                </li>
              </ul>
            </div>

            {/* Com Guia Viral Master */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-orange-500/40 relative">
              <div className="flex items-center gap-2 mb-3 text-orange-400 font-heading font-bold text-sm uppercase">
                <Flame className="w-4 h-4 text-orange-400" />
                Com o Método Viral Master Pro
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>+100 mil a 1M+ de visualizações</strong> nos seus primeiros vídeos aplicando ganchos validados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Retenção psicológica acima de 85%</strong> para a plataforma impulsionar seu conteúdo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Crescimento acelerado e diário</strong> de novos seguidores orgânicos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
