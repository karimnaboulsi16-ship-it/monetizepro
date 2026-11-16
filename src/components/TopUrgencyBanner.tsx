import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const TopUrgencyBanner: React.FC = () => {
  return (
    <>
      {/* Purchase Approved Top Bar (stationary at top of page) */}
      <div className="w-full bg-neutral-900/95 py-2.5 px-3 sm:px-4 border-b border-neutral-800 text-center shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <p className="text-center font-heading text-[11px] sm:text-sm md:text-base font-bold text-emerald-400 tracking-tight sm:tracking-wide">
            <CheckCircle2 className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 mr-1.5 -mt-0.5" />
            <span>Compra aprovada, parabéns, veja essa página antes de sair!</span>
          </p>
        </div>
      </div>

      {/* Brand Header */}
      <div className="w-full bg-neutral-800/90 border-b border-neutral-700">
        {/* Clean Top Bar Header */}
        <header className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center">
          {/* Brand wordmark */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              <span className="text-orange-400">VIRAL</span>MASTER
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-neutral-700 border border-neutral-600 text-amber-300">
                PRO
              </span>
            </span>
          </div>
        </header>
      </div>
    </>
  );
};
