import React from 'react';
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Play,
  Heart,
  MessageCircle,
  Share2,
  Eye,
} from 'lucide-react';
import videoFlopImg from '../assets/images/video_flop_clean_1794588313965.jpg';
import videoViralImg from '../assets/images/video_viral_clean_1794588314223.jpg';

const EXAMPLE = {
  normalTitle: 'Como gerar renda com conteúdo nas redes',
  normalViews: '240 visualizações',
  normalShortViews: '240',
  normalLikes: '6',
  normalComments: '0',
  normalShares: '1',
  normalRetention: '14% (Abandono no seg 2)',
  viralHook: 'O método silencioso que perfis anônimos usam para faturar R$ 12.000/mês sem mostrar o rosto...',
  viralViews: '1.850.000 visualizações',
  viralShortViews: '1,8M',
  viralLikes: '184 mil',
  viralComments: '12 mil',
  viralShares: '48 mil',
  viralRetention: '89% (Retenção recorde)',
  growthFactor: '7.708x',
};

export const InteractiveHookSimulator: React.FC = () => {
  const current = EXAMPLE;

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="rounded-2xl border border-slate-700 bg-slate-800/90 p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/75 border border-slate-600 text-orange-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Demonstração Ao Vivo: O Poder Do Gancho
          </div>
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
            Mesmo Vídeo, Estratégia Diferente = Resultados Opostos
          </h3>
        </div>

        {/* Side-by-Side Online Video Photo Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left Video Comparison Card: Flopped Video */}
          <div className="p-4 sm:p-5 rounded-2xl border border-red-500/35 bg-red-950/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  Postar Sem Saber Viralizar
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded bg-red-950/80 text-red-300 font-mono font-semibold border border-red-700/60">
                  Fracasso Comum
                </span>
              </div>

              {/* Vertical Online Video Frame Photo */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-900 mb-4 group">
                <img
                  src={videoFlopImg}
                  alt="Vídeo comum postado sem técnica viral com poucas visualizações"
                  className="w-full h-full object-cover object-center grayscale-[35%] brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/45" />

                {/* Top Bar Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-white/15 text-[11px] font-mono text-red-300">
                    <Eye className="w-3 h-3 text-red-400" />
                    {current.normalShortViews}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-red-950/90 border border-red-500/40 text-[10px] font-bold uppercase tracking-wider text-red-300">
                    Travado no algoritmo
                  </span>
                </div>

                {/* Center Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-black/55 border border-white/25 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-5 h-5 text-zinc-200 fill-zinc-200 ml-0.5" />
                  </div>
                </div>

                {/* Right Social Engagement Sidebar */}
                <div className="absolute right-2.5 bottom-20 flex flex-col items-center gap-3 text-zinc-200">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-8 h-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center">
                      <Heart className="w-4 h-4 text-zinc-200" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{current.normalLikes}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-8 h-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-zinc-200" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{current.normalComments}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-8 h-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center">
                      <Share2 className="w-4 h-4 text-zinc-200" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{current.normalShares}</span>
                  </div>
                </div>

                {/* Bottom Video Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-14">
                  <p className="text-[11px] font-bold text-zinc-300 mb-0.5">@perfil_comum</p>
                  <p className="text-xs font-medium text-zinc-100 leading-snug line-clamp-2">
                    &ldquo;{current.normalTitle}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-red-500/20 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Alcance final:</span>
                <span className="font-mono font-bold text-red-400">{current.normalViews}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Retenção de audiência:</span>
                <span className="font-mono font-medium text-slate-200">{current.normalRetention}</span>
              </div>
            </div>
          </div>

          {/* Right Video Comparison Card: Viral Master Pro Video */}
          <div className="p-4 sm:p-5 rounded-2xl border-2 border-orange-500 bg-slate-900/55 shadow-xl shadow-slate-950/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  Com Fórmula Viral Master Pro
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-300 font-bold font-mono border border-orange-500/40">
                  Multiplicador {current.growthFactor}
                </span>
              </div>

              {/* Vertical Online Video Frame Photo */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-orange-400/60 bg-slate-900 mb-4 shadow-inner">
                <img
                  src={videoViralImg}
                  alt="Vídeo viral aplicando o método Viral Master Pro com milhões de visualizações"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/15 to-black/45" />

                {/* Top Bar Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500 text-white text-[11px] font-mono font-extrabold shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    {current.viralShortViews}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-amber-400/60 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Em Alta • Viral
                  </span>
                </div>

                {/* Center Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-orange-500/95 border border-amber-200/80 flex items-center justify-center shadow-lg shadow-orange-500/40">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>

                {/* Right Social Engagement Sidebar */}
                <div className="absolute right-2.5 bottom-20 flex flex-col items-center gap-3 text-white">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-8 h-8 rounded-full bg-black/55 border border-orange-400/60 backdrop-blur-sm flex items-center justify-center">
                      <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)]">{current.viralLikes}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-8 h-8 rounded-full bg-black/55 border border-orange-400/60 backdrop-blur-sm flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-amber-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)]">{current.viralComments}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-8 h-8 rounded-full bg-black/55 border border-orange-400/60 backdrop-blur-sm flex items-center justify-center">
                      <Share2 className="w-4 h-4 text-amber-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)]">{current.viralShares}</span>
                  </div>
                </div>

                {/* Bottom Video Hook Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-14">
                  <div className="inline-block px-2 py-0.5 rounded bg-orange-500 text-white text-[10px] font-extrabold uppercase tracking-wide mb-1.5">
                    Gancho Magnético Aplicado
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug drop-shadow">
                    &ldquo;{current.viralHook}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-200 font-medium">Alcance final:</span>
                <span className="font-mono font-extrabold text-orange-400 text-base">{current.viralViews}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-200 font-medium">Retenção de audiência:</span>
                <span className="font-mono font-bold text-amber-300">{current.viralRetention}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          *Dentro do Guia você receberá mais de 1.000 modelos idênticos a este para copiar, colar e viralizar qualquer um dos vídeos do seu pack.
        </p>
      </div>
    </section>
  );
};
