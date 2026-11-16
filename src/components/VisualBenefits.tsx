import React, { useState } from 'react';
import { BENEFITS } from '../data/upsellContent';

export const VisualBenefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('benefit-1');

  return (
    <section className="py-12 bg-neutral-900/45 border-y border-neutral-700/80 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            Os 3 Pilares Para Viralizar e Ganhar Dinheiro 10x Mais Rápido
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-2">
            O Pack entrega os vídeos prontos. O Guia Master entrega as chaves para cada vídeo alcançar milhões.
          </p>
        </div>

        {/* 3 Visual Benefit Cards - Title & Refined Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => {
            const isSelected = activeTab === benefit.id;
            return (
              <div
                key={benefit.id}
                onClick={() => setActiveTab(benefit.id)}
                className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-start ${
                  isSelected
                    ? 'bg-neutral-800 border-2 border-orange-500 shadow-xl shadow-neutral-950/40'
                    : 'bg-neutral-800/75 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Pilar 0{index + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-900/70 text-orange-300 border border-neutral-600">
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-xs font-semibold text-orange-400 mb-3">
                  {benefit.subtitle}
                </p>

                <p className="font-['Poppins',sans-serif] text-[15px] text-neutral-200 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
