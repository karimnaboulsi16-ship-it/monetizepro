import React from 'react';
import { ASSETS } from '../data/upsellContent';

export const SocialProofStrip: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Studio Backdrop & Creator Results */}
      <div className="relative rounded-3xl overflow-hidden border border-neutral-700 bg-neutral-800/90 shadow-2xl">
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
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/65 to-transparent" />

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
      </div>
    </section>
  );
};
