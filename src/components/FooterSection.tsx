import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900/80 border-t border-slate-700 py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Wordmark */}
        <div className="flex items-center justify-center gap-2">
          <span className="font-heading font-black text-lg text-white tracking-tight">
            <span className="text-orange-400">VIRAL</span>MASTER
          </span>
          <span className="text-xs text-slate-400">· Atualização Oficial</span>
        </div>

        {/* Quiet Trust Line */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 text-slate-300">
            <Lock className="w-3.5 h-3.5 text-orange-400" />
            Pagamentos 100% Criptografados com SSL
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            Garantia de Satisfação Total
          </span>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Aviso legal: Este site não faz parte do TikTok, Meta (Facebook / Instagram) nem do YouTube / Google LLC. Tampouco é endossado por essas plataformas de qualquer forma. Os resultados podem variar de acordo com o nicho e a consistência de cada criador.
        </p>

        <p className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} Pack Viral Master™. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
