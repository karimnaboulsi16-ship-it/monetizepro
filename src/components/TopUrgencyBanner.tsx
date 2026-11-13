import React from 'react';
import { Clock } from 'lucide-react';

interface Props {
  timeLeftSeconds: number;
}

export const TopUrgencyBanner: React.FC<Props> = ({ timeLeftSeconds }) => {
  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <>
      {/* Sticky Urgency Alert Bar Only */}
      <div className="w-full sticky top-0 z-40 bg-slate-900/95 py-2.5 px-4 border-b border-slate-700 text-center backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs md:text-sm font-medium">
          <span className="text-orange-400 font-extrabold tracking-wide uppercase">
            PARE! PASSO 2 DE 2
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="inline-flex items-center gap-1.5 text-amber-300 font-bold tabular-nums">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Esta oferta expira em: {formattedTime}</span>
          </div>
        </div>
      </div>

      {/* Static Progress Bar & Brand Header */}
      <div className="w-full bg-slate-800/90 border-b border-slate-700">
        {/* Progress Bar */}
        <div className="w-full bg-slate-700 h-1.5">
          <div
            className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 h-full transition-all duration-500"
            style={{ width: '85%' }}
          />
        </div>

        {/* Clean Top Bar Header */}
        <header className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center">
          {/* Brand wordmark */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              <span className="text-orange-400">VIRAL</span>MASTER
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-700 border border-slate-600 text-amber-300">
                PRO
              </span>
            </span>
          </div>
        </header>
      </div>
    </>
  );
};
